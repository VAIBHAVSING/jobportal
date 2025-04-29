# Job Portal - Next.js with TypeScript and Tailwind CSS

A secure job portal application with authentication built using Next.js, TypeScript, Tailwind CSS, and NextAuth.js. Ready for deployment on Vercel.

## Features

- User authentication (signup, login, logout)
- Protected routes and pages
- Job listings and search functionality
- User dashboard
- Responsive design
- Google OAuth integration (optional)
- Secure password handling

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS, React
- **Authentication**: NextAuth.js
- **Storage**: File-based (for demo) - can be easily switched to a database
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd job-portal
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables
   ```bash
   cp .env.local.example .env.local
   ```

   Update `.env.local` with your own values:
   - Generate a secure NEXTAUTH_SECRET using `openssl rand -base64 32`
   - For Google OAuth, add your Google Client ID and Secret (optional)

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment on Vercel

This project is optimized for deployment on Vercel.

### Steps to Deploy

1. Push your code to a GitHub repository

2. Import your project to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure the project settings

3. Set up environment variables in Vercel:
   - NEXTAUTH_SECRET (required)
   - GOOGLE_CLIENT_ID (optional for Google login)
   - GOOGLE_CLIENT_SECRET (optional for Google login)
   
   NEXTAUTH_URL will be automatically set by Vercel.

4. Deploy the project

### Continuous Deployment

Vercel automatically deploys your project when you push changes to your repository. The deployment is triggered by commits to your main branch.

## Project Structure

```
job-portal/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API routes
│   │   ├── dashboard/    # Dashboard page
│   │   ├── jobs/         # Jobs page
│   │   ├── login/        # Login page
│   │   ├── register/     # Register page
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── auth/         # Authentication components
│   │   ├── jobs/         # Job-related components
│   │   ├── layout/       # Layout components
│   │   ├── providers/    # Context providers
│   │   └── ui/           # UI components
│   ├── data/             # Static data
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript types
│   └── utils/            # Utility functions
├── public/               # Static assets
├── .env.local.example    # Environment variables template
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## Security Considerations

- Passwords are hashed using bcrypt
- Authentication is managed via secure JWTs
- Environment variables are used for sensitive information
- Protected routes require authentication

## Future Enhancements

- Add a real database (MongoDB, PostgreSQL, etc.)
- Implement job application functionality
- Add user profile editing
- Implement job filtering and advanced search
- Add admin panel for job management
- Enable email notifications

## License

This project is licensed under the MIT License.