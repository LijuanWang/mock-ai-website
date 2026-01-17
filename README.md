# MAI Super Intelligence Website

A modern, responsive marketing website inspired by enterprise AI organization websites. Built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, editorial style with bold typography, generous whitespace, and subtle animations
- **Fully Responsive**: Mobile-first design with hamburger navigation for mobile and full nav for desktop
- **Accessibility Mode**: Toggle for enhanced readability with larger fonts, higher contrast, and thicker focus rings
- **Dynamic Content**: Filter and sort functionality on News and Careers pages
- **Mock Data**: All content powered by local TypeScript data files—no backend required

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, news, careers teaser, quote, and products sections |
| `/about` | About page with mission, values, and company timeline |
| `/news` | News listing with category filters and sort options |
| `/news/[slug]` | Individual article pages with full content |
| `/team` | Team page with member profiles grouped by discipline |
| `/careers` | Job listings with discipline and location filters |
| `/careers/[id]` | Job detail pages with apply modal |

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9 or later

### Installation

```bash
# Navigate to the project directory
cd mock-ai-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
mock-ai-website/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── careers/
│   │   └── [id]/
│   ├── news/
│   │   └── [slug]/
│   ├── team/
│   ├── globals.css         # Global styles & Tailwind
│   ├── layout.tsx          # Root layout with header/footer
│   └── page.tsx            # Home page
├── components/             # Reusable UI components
│   ├── Header.tsx          # Navigation with accessibility toggle
│   └── Footer.tsx          # Site footer
├── data/                   # Mock data files
│   ├── news.ts             # News articles
│   ├── jobs.ts             # Job listings
│   └── team.ts             # Team members
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Adding Content

### Adding News Articles

Edit `data/news.ts`:

```typescript
export const newsArticles: NewsArticle[] = [
  {
    title: "Your Article Title",
    slug: "your-article-slug",           // URL-friendly identifier
    category: "research",                 // research | announcements | models | copilot | insights
    readingTime: "5 min read",
    date: "January 20, 2026",
    excerpt: "Brief description for cards...",
    heroImage: "/images/placeholder.jpg",
    content: `
## Markdown-style content

Your article content here with ## headers, **bold**, and bullet points.
    `,
  },
  // ... more articles
];
```

### Adding Job Listings

Edit `data/jobs.ts`:

```typescript
export const jobs: Job[] = [
  {
    id: "unique-job-id",                  // URL-friendly identifier
    title: "Job Title",
    location: "City, Country",
    discipline: "Engineering",            // Engineering | Research | Product | Design | etc.
    teamTag: "Team Name",
    summary: "Brief job summary...",
    overview: "Detailed job overview...",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
    ],
    qualifications: [
      "Qualification 1",
      "Qualification 2",
    ],
  },
  // ... more jobs
];
```

### Adding Team Members

Edit `data/team.ts`:

```typescript
export const teamMembers: TeamMember[] = [
  {
    name: "Full Name",
    role: "Job Title",
    discipline: "Research",               // Research | Engineering | Product | Design
    snippet: "Brief bio or focus area...",
    portrait: "/images/team/portrait.jpg",
  },
  // ... more team members
];
```

## Accessibility Mode

The site includes a built-in accessibility toggle (A11y button in the header) that:

1. **Increases base font size** from 16px to 18px
2. **Increases contrast** by using darker text colors
3. **Thickens focus rings** from 2px to 4px for better visibility

### How It Works

- Clicking the toggle adds/removes the `accessibility-mode` class on the `<html>` element
- Preference is persisted in `localStorage` under the key `accessibilityMode`
- CSS custom properties and overrides in `globals.css` handle the visual changes

### Implementation

```css
/* In globals.css */
html.accessibility-mode {
  --foreground: #000000;
  --muted: #374151;
  font-size: 18px;
}

html.accessibility-mode *:focus {
  outline-width: 4px !important;
}
```

## Customization

### Colors

The primary color scheme uses Tailwind's sky palette. Modify `tailwind.config.ts` to change:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
},
```

### Max Content Width

Content is constrained to 1200px. Adjust in `tailwind.config.ts`:

```typescript
maxWidth: {
  "content": "1200px",  // Change to your preferred width
},
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: System font stack
- **Images**: Gradient placeholders (no external dependencies)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a demo project for educational purposes.

