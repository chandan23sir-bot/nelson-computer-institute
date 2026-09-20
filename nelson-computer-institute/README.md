# Nelson Computer Institute Website

## Included
- Responsive public website
- Nelson branding and contact details
- Courses, Student Zone and contact sections
- Admin / Branch login starter
- Admin dashboard starter
- Prisma + SQLite database
- Student and Course API routes
- Fix for the SQLite DATABASE_URL format

## Requirements
Node.js 18+ recommended.

## Install
```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

Open http://localhost:3000

## Demo Admin Login
Username: `admin`
Password: `admin123`

Change this demo login before production. The login in this starter is a simple frontend demo; production authentication should use a secure session/auth system.

## Important
`.env` uses:
DATABASE_URL="file:./dev.db"

Do not commit real secrets to a public repository.
