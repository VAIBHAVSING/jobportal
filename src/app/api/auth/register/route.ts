import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { promises as fs } from 'fs';
import path from 'path';

// For a production app, you would use a real database here
// This is just a simple file-based storage for demo purposes
async function getUsers() {
  try {
    const filePath = path.join(process.cwd(), 'src/data/users.json');
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, return empty array
    return [];
  }
}

async function saveUsers(users: any[]) {
  const filePath = path.join(process.cwd(), 'src/data/users.json');
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(users, null, 2));
}

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();
    
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }
    
    const users = await getUsers();
    
    // Check if user already exists
    const existingUser = users.find((user: any) => user.email === email);
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists with this email" },
        { status: 409 }
      );
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name: name || email.split('@')[0],
      email,
      password: hashedPassword
    };
    
    users.push(newUser);
    await saveUsers(users);
    
    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}