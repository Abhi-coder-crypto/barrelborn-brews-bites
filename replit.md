# BarrelBorn - Dine & Draft

## Overview
A restaurant/bar website for BarrelBorn, featuring crafted beers, artisan cocktails, and culinary excellence in Thane. This is a frontend-only React application imported from Lovable.

## Tech Stack
- **Frontend**: React 18 with TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM v6
- **State Management**: TanStack React Query

## Project Structure
```
src/
├── assets/          # Static assets
├── components/      # Reusable UI components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Page components
├── App.tsx          # Main app component
├── App.css          # App styles
├── index.css        # Global styles
└── main.tsx         # Entry point
```

## Running the Project
The development server runs on port 5000:
```bash
npm run dev
```

## Building for Production
```bash
npm run build
```
Output is in the `dist/` directory.

## Recent Changes
- **2026-01-02**: Imported from Lovable to Replit environment
  - Updated Vite config to use port 5000 and allow all hosts
  - Removed lovable-tagger plugin dependency from vite config
  - Configured static deployment

## User Preferences
- None documented yet
