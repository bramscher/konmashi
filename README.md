# Konmashi - AI-Powered Content Marketing Platform

Konmashi is an intelligent SaaS platform designed to revolutionize content marketing by streamlining and amplifying the processes of ideation, production, and multi-channel publishing.

## 🎯 Current Status (as of recent updates)

- **Phase 1 (Foundation):** Completed. This includes Prisma schema setup, legal pages (Privacy Policy & Terms of Service), landing page, and initial project configuration.
- **Phase 2 (Authentication):** Completed. Supabase authentication (client/server) is implemented, including user sync with Prisma, login/signup pages, and auth context.
- **User Onboarding (Task 1.7):** Completed. Users are now guided through a brand identity setup after their first login. `hasCompletedOnboarding` flag is managed and directs user flow.
- **Next Steps:** Focus will shift towards core dashboard development (enhancing `src/app/dashboard/page.tsx` and related features) and AI service integrations as per the development plan.

## 🚀 Features

- **AI-Powered Content Generation**: Generate text posts, images, and video scripts tailored to your brand
- **Multi-Platform Publishing**: Connect to Instagram, TikTok, YouTube, LinkedIn, Facebook & Pinterest
- **Smart Scheduling**: Schedule content across multiple platforms with optimized timing
- **Brand Intelligence**: AI learns your brand voice and maintains consistency
- **Ideabank & Strategy**: Capture inspiration and manage your content pipeline
- **Performance Insights**: Track performance and improve your content strategy

## 🛠 Tech Stack

- **Frontend**: Next.js 15.3.3 with TypeScript
- **UI Components**: shadcn/ui with Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Vector Storage)
- **ORM**: Prisma
- **Hosting**: Vercel
- **AI Services**: toolkit.hangten.studio + External AI APIs
- **Payments**: Stripe
- **Social Media APIs**: Instagram, TikTok, YouTube, LinkedIn, Facebook, Pinterest

## 📋 Prerequisites

- Node.js 18+ and npm
- A Supabase account and project
- Git

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd konmashi
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Database
DATABASE_URL="postgresql://postgres:password@localhost:54322/postgres?schema=public"

# NextAuth Secret
NEXTAUTH_SECRET=your_nextauth_secret_here

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# AI Services
TOOLKIT_API_URL=https://toolkit.hangten.studio
TOOLKIT_API_KEY=your_toolkit_api_key
OPENAI_API_KEY=your_openai_api_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

### 4. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database (development)
npx prisma db push

# Or run migrations (production)
npx prisma migrate deploy
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📊 Database Schema

The application uses Prisma with PostgreSQL. Key models include:

- **User**: User accounts (extends Supabase auth)
- **BrandIdentity**: Brand voice, tone, and identity information
- **IdeabankEntry**: Captured ideas and inspiration
- **ContentRequest**: Content generation requests
- **GeneratedContent**: AI-generated content pieces
- **ContentFeedback**: User feedback for content iteration
- **SocialConnection**: Social media platform connections
- **ScheduledPost**: Scheduled content posts

## 🏗 Architecture

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── (auth)/         # Authentication pages (e.g., login, signup)
│   │   ├── dashboard/      # Dashboard pages (e.g., main dashboard, brand-setup)
│   │   ├── api/            # API routes
│   │   ├── privacy/        # Privacy Policy page
│   │   └── terms/          # Terms of Service page
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   └── footer.tsx     # Footer component
│   ├── lib/               # Utility libraries
│   │   └── prisma.ts      # Prisma client configuration
│   └── generated/         # Generated Prisma client
├── prisma/
│   └── schema.prisma      # Database schema
├── tasks/
│   └── prd-konmashi-mvp.md # Product Requirements Document
└── docs/                  # Project documentation
```

## 🔧 Development Workflow

### Adding New UI Components

```bash
npx shadcn@latest add [component-name]
```

### Database Changes

1. Update `prisma/schema.prisma`
2. Generate new client: `npx prisma generate`
3. Create migration: `npx prisma migrate dev --name describe_changes`

### Code Quality

```bash
# Linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 🚀 Deployment

### Vercel Deployment

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on git push

### Environment Variables for Production

Ensure all environment variables are set in your production environment, especially:
- Supabase production credentials
- Stripe production keys
- Production API keys for AI services

## 📝 Legal & Compliance

The application includes comprehensive legal documentation:

- **Privacy Policy** (`/privacy`): Covers data collection, AI usage, social media integrations
- **Terms of Service** (`/terms`): Platform usage terms, content policies, AI disclaimers

These pages are required for social media platform API approvals.

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Create a pull request

## 📄 License

[Add your license information here]

## 🔗 Links

- [Product Requirements Document](./tasks/prd-konmashi-mvp.md)
- [Project Brief](./docs/Project%20Brief:%20Konmashi.md)
- [Privacy Policy](http://localhost:3000/privacy)
- [Terms of Service](http://localhost:3000/terms)

## 🆘 Support

For support and questions:
- Email: support@konmashi.com
- Documentation: [Add docs URL]
- Issues: [GitHub Issues URL]
