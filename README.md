# Konmashi - AI-Powered Content Marketing Platform

Konmashi is an intelligent SaaS platform designed to revolutionize content marketing by streamlining and amplifying the processes of ideation, production, and multi-channel publishing. It now supports multi-brand management, allowing each team to manage multiple brands/clients, each with its own brand identity, social connections, and content.

## 🛡️ Admin Roles & Permissions

Konmashi supports two levels of admin:

- **Team Admin (Tenant-Level Admin):**
  - Scope: Administers a single Team (tenant/company/client) within the platform.
  - Role: Has the `ADMIN` role in the `TeamMember` model for a specific team.
  - Permissions: Can manage team members, brand identity, content, social connections, and other team-specific settings and workflows. Rights are limited to the team(s) where they have the `ADMIN` role.

- **SuperAdmin (Platform-Level Admin):**
  - Scope: Administers the entire Konmashi SaaS platform.
  - Role: Is listed in the `SuperAdmin` model (separate table/entity).
  - Permissions: Can manage all tenants, billing, platform-wide settings, user accounts, and perform actions that affect the whole SaaS instance (e.g., upgrades, compliance, support, etc.). This is a global role, not tied to any single team.

## 🎯 Current Status & Features (as of recent updates)

- **Phase 1 (Foundation):** Completed. Prisma schema setup, legal pages, landing page, and initial project configuration.
- **Phase 2 (Authentication):** Completed. Supabase authentication, user sync with Prisma, login/signup pages, and auth context.
- **User Onboarding:** Completed. Users are guided through a brand identity setup after first login. `hasCompletedOnboarding` flag is managed and directs user flow.
- **Team & RBAC Foundation:**
  - Team, TeamMember, TeamRole, and SuperAdmin models implemented in Prisma schema.
  - Multi-tenant architecture: All content, brand identity, ideabank, and social connections are scoped to the Team.
  - Role-based access control (RBAC) enforced per Team.
  - Users can be members of multiple Teams.
- **TeamId Enforcement:** All tenant-specific models and API endpoints require and filter by `teamId` for strict data isolation.
- **Team Admin Management UI (Planned/In Progress):**
  - Admin dashboard section for managing team members, roles, and licenses.
  - Invite new members, change roles, enforce license count, and remove/deactivate members.
  - License usage display and upgrade options.
- **AI-Powered Content Generation:** Generate text posts, images, and video scripts tailored to your brand.
- **Multi-Platform Publishing:** Connect to Instagram, TikTok, YouTube, LinkedIn, Facebook & Pinterest.
- **Smart Scheduling:** Schedule content across multiple platforms with optimized timing.
- **Brand Intelligence:** AI learns your brand voice and maintains consistency.
- **Multi-Brand Workspace:** Full Teams → Brands → Content hierarchy with brand-scoped data isolation.
- **Brand Theming System:** Real-time theme switching with 22 shadcn/ui colors, admin controls, and persistent selection.
- **Ideabank & Strategy:** Capture inspiration and manage your content pipeline.
- **Performance Insights:** Track performance and improve your content strategy.

## 🚀 Features

- **AI-Powered Content Generation**: Generate text posts, images, and video scripts tailored to your brand
- **Multi-Platform Publishing**: Connect to Instagram, TikTok, YouTube, LinkedIn, Facebook & Pinterest
- **Smart Scheduling**: Schedule content across multiple platforms with optimized timing
- **Brand Intelligence**: AI learns your brand voice and maintains consistency
- **Multi-Brand Management**: Manage multiple brands/clients with independent identities and themes
- **Brand-Specific Theming**: Customize UI colors and themes per brand using shadcn/ui color system
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

## 🗄️ Working with Prisma

### High-Level Overview

Prisma is our Object-Relational Mapping (ORM) tool that provides:
- **Type-safe database access** with auto-generated TypeScript types
- **Schema management** through `prisma/schema.prisma`
- **Database migrations** for version control of schema changes
- **Visual database browser** via Prisma Studio

### Key Prisma Commands (Cliff Notes)

```bash
# 🔄 Generate Prisma client (run after schema changes)
npx prisma generate

# 🚀 Push schema to database (development only)
npx prisma db push

# 📋 Create and apply migrations (production-ready)
npx prisma migrate dev --name your_migration_name
npx prisma migrate deploy

# 🎨 Launch Prisma Studio (visual database browser)
npx prisma studio

# 🔍 View current database status
npx prisma migrate status

# 🗃️ Reset database (⚠️ DESTROYS ALL DATA)
npx prisma migrate reset
```

### Prisma Studio Quick Guide

Prisma Studio is a visual database browser that runs at `http://localhost:5555`:

1. **Launch Studio**: `npx prisma studio`
2. **Browse Tables**: Click any model (User, Team, Brand, etc.) to view/edit data
3. **Create Records**: Use the "Add record" button
4. **Edit Data**: Click any cell to modify values
5. **Relationships**: Click linked records to navigate between related data
6. **Filtering**: Use the filter bar to search/sort records

**💡 Pro Tips:**
- Studio auto-saves changes as you type
- Perfect for testing data relationships and debugging
- Use it to seed initial data or inspect generated content
- Shows real-time data as your app creates/updates records

### Development Workflow

1. **Modify Schema**: Edit `prisma/schema.prisma`
2. **Generate Client**: `npx prisma generate`
3. **Update Database**: `npx prisma db push` (dev) or `npx prisma migrate dev` (production)
4. **Verify Changes**: `npx prisma studio` to visually confirm

## 📊 Database Schema

The application uses Prisma with PostgreSQL. Key models include:

- **User**: User accounts (extends Supabase auth)
- **Team**: Multi-tenant teams (companies/agencies)
- **TeamMember**: Team memberships with role-based permissions
- **Brand**: Brand entities with theme customization and identity
- **BrandMember**: Brand-specific memberships and access control
- **BrandIdentity**: Brand voice, tone, and identity information
- **IdeabankEntry**: Captured ideas and inspiration (brand-scoped)
- **ContentRequest**: Content generation requests (brand-scoped)
- **GeneratedContent**: AI-generated content pieces (brand-scoped)
- **ContentFeedback**: User feedback for content iteration
- **SocialConnection**: Social media platform connections (brand-scoped)
- **ScheduledPost**: Scheduled content posts (brand-scoped)

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

## 🎨 Brand Theming System

Konmashi features a comprehensive brand theming system that applies brand-specific colors throughout the entire application:

### How It Works
- **Real-time Theme Switching**: When users select a brand, the entire UI instantly updates with that brand's colors
- **CSS Custom Properties**: Uses CSS variables that update dynamically across all shadcn/ui components
- **Persistent Selection**: Brand and theme preferences are saved in localStorage
- **22 Color Options**: Full shadcn/ui color palette (Red, Rose, Orange, Green, Blue, Yellow, Violet, etc.)

### Where Colors Appear
- **Navigation**: Sidebar icons, selected states, brand switcher
- **Buttons**: All primary and accent buttons throughout the app
- **Form Elements**: Input focus states, checkboxes, dropdowns
- **Interactive Elements**: Hover states, active tabs, progress indicators
- **Brand Elements**: Kroid selection, brand cards, theme selectors

### Administration
- **Team Admins**: Can change any brand's theme via Settings → Brand Theme Administration
- **Brand Admins**: Can change their brand's theme via Manage Brands page
- **Default Assignment**: New brands automatically get rotating default colors (Red → Rose → Orange → etc.)

### For Developers
```tsx
// ✅ Correct - Uses theme colors automatically
<Button className="bg-primary text-primary-foreground">
  Primary Button
</Button>

// ❌ Avoid - Hard-coded colors
<Button className="bg-red-500 text-white">
  Don't do this
</Button>
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

## Overview

Konmashi is an AI-powered content marketing platform for teams, agencies, and solo creators. It now supports multi-brand management, allowing each team to manage multiple brands/clients, each with its own brand identity, social connections, and content.

## Key Features
- **Team-based onboarding and RBAC**
- **Multi-brand support:** Manage multiple brands per team
- **Unified Brand Management:** `/dashboard/brands` lets you add, edit, and manage all brands and their identities in one place
- **Integrated Brand Identity:** Set up or edit brand identity inline for each brand
- **Onboarding:** New users are redirected to Manage Brands if any brands exist; otherwise, prompted to create their first brand
- **Persona-driven (Kroids) chat and workflows**

## Getting Started
- Sign up and complete onboarding
- Use the sidebar to access "Manage Brands" and add your first brand
- Set up brand identity for each brand inline
- Use Kroids to generate, schedule, and analyze content for each brand

## For Agencies
- Easily manage multiple client brands under one team
- Assign team members to specific brands (per-brand access control)

## More
See the Project Brief and PRD for full details.

## 🆕 Recent Major Updates

- **Multi-Brand, Team-Based Architecture:** Each team can manage multiple brands/clients, each with its own brand identity, social connections, and content. All data is strictly isolated by team, with robust RBAC (role-based access control).
- **Unified Manage Brands Dashboard:** `/dashboard/brands` is now the central place to add, edit, and manage all brands. Inline brand identity setup/editing is supported. Deprecated old Add Brand and Brand Setup pages.
- **Brand Deletion Flow:** Safe deletion with confirmation modal (type 'Delete "BrandName" Brand'), admin-only, cascades to all related data.
- **BrandIdentity Data Model:** Supports multiple BrandIdentities per user/team/brand. Compound unique key on `[userId, brandId]` ensures no overwrites.
- **Markdown Manifesto Rendering:** Brand manifesto field supports up to 4000 characters and renders Markdown beautifully in the UI using `react-markdown` and Tailwind's `prose` classes.
- **Persona-Driven (Kroids) Workflows:** Sidebar and chat are built around agentic personas (Kroids) for specialized content workflows.
- **License Management & Stripe Integration:** License count is enforced in UI and backend. Admins can upgrade licenses (Stripe integration planned).
- **Modern Admin Tools:** Team Admin dashboard for member invite, role change, removal, and license management. Superadmin model for platform-level control.
- **UX Improvements:** Collapsible, single-expanded brand cards; onboarding redirects to Manage Brands if brands exist; settings and sidebar are modernized.

## 📝 Markdown Support for Brand Manifesto

- The brand manifesto field supports full Markdown formatting. Use headings, lists, bold, italics, and links for rich brand storytelling. Rendered with `react-markdown` and styled with Tailwind's `prose` classes for beautiful display.
::
