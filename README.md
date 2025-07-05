# World Economic Forum Website Clone

A high-fidelity clone of the World Economic Forum website built with React, TypeScript, and Express.js.

## Features

- Professional header with responsive navigation
- Hero section with WEF mission statement
- Interactive centres showcase (10 centres)
- Featured articles spotlight section
- Discover section with categorized content
- Newsletter signup with social media links
- Press releases section
- Digital initiatives showcase
- Professional footer with multiple sections
- PostgreSQL database integration
- Responsive design with WEF brand colors

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **State Management**: TanStack Query
- **Routing**: Wouter
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd wef-website-clone
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Add your database URL:
```
DATABASE_URL=your_postgresql_connection_string
```

4. Push database schema:
```bash
npm run db:push
```

5. Seed the database:
```bash
npx tsx server/seed.ts
```

6. Start the development server:
```bash
npm run dev
```

## Deployment

### Option 1: Vercel + Supabase/Railway

1. Deploy frontend to Vercel
2. Deploy database to Supabase or Railway
3. Set DATABASE_URL environment variable

### Option 2: Heroku

1. Create Heroku app with PostgreSQL addon
2. Deploy with git push

### Option 3: Railway

1. Connect GitHub repository
2. Add PostgreSQL service
3. Deploy automatically

## Environment Variables

- `DATABASE_URL` - PostgreSQL connection string
- `NODE_ENV` - Environment (development/production)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push schema changes to database

## License

MIT License
