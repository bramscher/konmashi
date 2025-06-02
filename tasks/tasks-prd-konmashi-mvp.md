# Task List: Konmashi MVP Implementation

Based on the Product Requirements Document (PRD): Konmashi MVP

## Relevant Files

- `src/lib/supabase.ts` - Supabase client configuration and database utilities
- `src/lib/auth-context.tsx` - Authentication context provider for user state management (updated for onboarding status and Prisma user)
- `src/lib/prisma.ts` - Prisma ORM client configuration
- `src/app/api/auth/sync-user/route.ts` - API route to sync Supabase users with Prisma database (updated for robust email handling and Supabase client init)
- `src/app/auth/callback/route.ts` - Authentication callback handler for email confirmations
- `src/app/(auth)/login/page.tsx` - User login page with form validation
- `src/app/(auth)/signup/page.tsx` - User registration page with email verification
- `src/app/(auth)/forgot-password/page.tsx` - Password reset request page
- `src/app/(auth)/reset-password/page.tsx` - Password reset form page
- `src/app/dashboard/page.tsx` - Main dashboard landing page (renamed/moved from `src/app/(dashboard)/dashboard/page.tsx`)
- `src/app/(dashboard)/dashboard/layout.tsx` - Dashboard layout with navigation (Note: This path might be obsolete if route group was removed)
- `src/app/dashboard/brand-setup/page.tsx` - Brand identity configuration interface (created, uses Sonner for toasts)
- `src/app/(dashboard)/content/generate/page.tsx` - Content generation interface with AI chat
- `src/app/(dashboard)/content/review/page.tsx` - Content review and approval interface
- `src/app/(dashboard)/content/calendar/page.tsx` - Content calendar and scheduling view
- `src/app/(dashboard)/ideabank/page.tsx` - Ideabank management interface
- `src/app/(dashboard)/connections/page.tsx` - Social media platform connection management
- `src/app/(dashboard)/settings/page.tsx` - User settings and preferences
- `src/app/api/ai/generate-text/route.ts` - AI text content generation endpoint
- `src/app/api/ai/generate-image/route.ts` - AI image content generation endpoint
- `src/app/api/ai/generate-video-script/route.ts` - AI video script generation endpoint
- `src/app/api/content/feedback/route.ts` - Content feedback and rating submission
- `src/app/api/content/regenerate/route.ts` - Content regeneration based on feedback
- `src/app/api/content/schedule/route.ts` - Content scheduling to social platforms
- `src/app/api/ideabank/route.ts` - Ideabank CRUD operations
- `src/app/api/brand-identity/route.ts` - Brand identity management (updated for Supabase client init)
- `src/app/api/social-connections/route.ts` - Social media platform OAuth flows
- `src/components/ui/chat-interface.tsx` - Conversational AI chat component
- `src/components/ui/content-card.tsx` - Content display and action component
- `src/components/ui/calendar.tsx` - Calendar component for scheduling
- `src/components/ui/feedback-form.tsx` - Content feedback collection component
- `src/components/ui/textarea.tsx` - Textarea component for forms (added via shadcn)
- `src/components/ui/toaster.tsx` - Toaster component for displaying notifications (updated to Sonner in layout, this file might be shadcn specific if not used)
- `src/components/ui/use-toast.ts` - Hook for triggering toasts (potentially unused if Sonner is primary and this is shadcn specific)
- `src/components/dashboard/sidebar.tsx` - Dashboard navigation sidebar
- `src/components/dashboard/header.tsx` - Dashboard header with user menu
- `src/components/content/text-post-preview.tsx` - Text post preview component
- `src/components/content/image-post-preview.tsx` - Image post preview component
- `src/components/content/video-script-preview.tsx` - Video script preview component
- `src/components/ideabank/idea-card.tsx` - Individual idea display component
- `src/components/ideabank/idea-form.tsx` - New idea capture form
- `src/components/brand/brand-setup-wizard.tsx` - Multi-step brand identity setup
- `src/components/social/platform-connection.tsx` - Social platform connection status
- `src/lib/ai/orchestrator.ts` - Main AI orchestrator for content generation
- `src/lib/ai/toolkit-client.ts` - Client for toolkit.hangten.studio API
- `src/lib/social/platform-clients.ts` - Social media platform API clients
- `src/lib/utils/content-formatter.ts` - Content formatting utilities for different platforms
- `src/lib/utils/token-tracker.ts` - AI service token usage tracking
- `src/types/content.ts` - TypeScript types for content models
- `src/types/brand.ts` - TypeScript types for brand identity
- `src/types/social.ts` - TypeScript types for social platforms
- `prisma/schema.prisma` - Database schema definition (updated with hasCompletedOnboarding)
- `prisma/migrations/` - Database migration files (new migration for onboarding field)
- `.env.example` - Environment variables template
- `src/app/privacy/page.tsx` - Privacy Policy page
- `src/app/terms/page.tsx` - Terms of Service page
- `src/components/footer.tsx` - Site footer with legal links
- `src/app/layout.tsx` - Root layout (updated for Sonner Toaster)

### Notes

- Unit tests should typically be placed alongside the code files they are testing (e.g., `MyComponent.tsx` and `MyComponent.test.tsx` in the same directory).
- Use `npx jest [optional/path/to/test/file]` to run tests. Running without a path executes all tests found by the Jest configuration.
- API routes follow Next.js 13+ App Router conventions in the `src/app/api/` directory.
- Dashboard pages are located under `src/app/dashboard/` (previously was a route group `(dashboard)`).
- Authentication pages use route groups `(auth)` for layout organization (e.g. `src/app/(auth)/login/page.tsx`).

## Tasks

- [ ] 1.0 Foundation Setup & Authentication System
  - [ ] 1.1 Complete Supabase project configuration with authentication policies
  - [x] 1.2 Set up database triggers for user sync between Supabase auth and Prisma
  - [x] 1.3 Implement forgot password and reset password flows
  - [x] 1.4 Create protected route middleware for dashboard access
  - [x] 1.5 Set up comprehensive error handling and toast notifications
  - [x] 1.6 Implement email verification and account activation flow
  - [x] 1.7 Create user onboarding flow with brand identity setup
    - [x] 1.7.1 Add hasCompletedOnboarding field to User model and migrate database
    - [x] 1.7.2 Implement logic to check hasCompletedOnboarding after login/signup
    - [x] 1.7.3 Redirect users with hasCompletedOnboarding=false to the brand setup page (`/dashboard/brand-setup`)
    - [x] 1.7.4 Update hasCompletedOnboarding to true in the database after successful brand setup submission
  - [ ] 1.8 Add role-based access control (RBAC) foundation for future agency features
  - [x] 1.9 Implement session management and auto-refresh tokens
  - [x] 1.10 Create legal compliance framework with privacy policy and terms integration

- [ ] 2.0 AI Content Generation Core Features  
  - [ ] 2.1 Integrate toolkit.hangten.studio API client with authentication
  - [ ] 2.2 Build conversational AI orchestrator with context management
  - [ ] 2.3 Implement text post generation with brand voice integration
  - [ ] 2.4 Implement AI image generation with caption creation
  - [ ] 2.5 Implement video script generation with faceless video suggestions
  - [ ] 2.6 Create content review interface with approve/reject functionality
  - [ ] 2.7 Build feedback collection system for content iteration
  - [ ] 2.8 Implement content regeneration based on user feedback
  - [ ] 2.9 Add platform-specific content optimization (character limits, formats)
  - [ ] 2.10 Create content versioning system for iteration tracking
  - [ ] 2.11 Implement token usage tracking and billing integration
  - [ ] 2.12 Add content quality scoring and brand alignment metrics

- [ ] 3.0 User Experience & Dashboard Development
  - [ ] 3.1 Create responsive dashboard layout with sidebar navigation
  - [ ] 3.2 Build main dashboard with content generation status and quick actions
  - [ ] 3.3 Implement brand identity setup wizard with guided workflow
  - [ ] 3.4 Create settings page for user preferences and account management
  - [ ] 3.5 Build notification system for content generation completion
  - [ ] 3.6 Implement dark/light theme support with user preference storage
  - [ ] 3.7 Create mobile-responsive interface for idea capture and monitoring
  - [ ] 3.8 Build search and filtering capabilities across all content
  - [ ] 3.9 Implement keyboard shortcuts for power users
  - [ ] 3.10 Create contextual help system and onboarding tooltips

- [ ] 4.0 Social Media Platform Integrations
  - [ ] 4.1 Integrate Instagram Graph API for posting and scheduling
  - [ ] 4.2 Integrate TikTok for Business API for video content posting
  - [ ] 4.3 Integrate YouTube Data API for video uploads and management
  - [ ] 4.4 Integrate LinkedIn Marketing API for professional content posting
  - [ ] 4.5 Integrate Facebook Graph API for page posting and management
  - [ ] 4.6 Integrate Pinterest API for pin creation and board management
  - [ ] 4.7 Build OAuth flow management for secure platform connections
  - [ ] 4.8 Implement token refresh and connection health monitoring
  - [ ] 4.9 Create platform-specific content formatting and validation
  - [ ] 4.10 Build retry logic and error handling for failed posts
  - [ ] 4.11 Implement posting queue and rate limiting compliance
  - [ ] 4.12 Create connection management interface with status indicators

- [ ] 5.0 Content Management & Workflow Systems
  - [ ] 5.1 Build Ideabank with text and link capture functionality
  - [ ] 5.2 Implement content lifecycle tracking (draft → review → approved → scheduled → published)
  - [ ] 5.3 Create content calendar with drag-and-drop scheduling
  - [ ] 5.4 Build content analytics and performance tracking foundation
  - [ ] 5.5 Implement content categorization and tagging system
  - [ ] 5.6 Create bulk content operations (bulk approve, bulk schedule)
  - [ ] 5.7 Build content templates and reusable components
  - [ ] 5.8 Implement content collaboration features for team workflows
  - [ ] 5.9 Create automated content suggestions based on performance data
  - [ ] 5.10 Build content backup and export functionality
  - [ ] 5.11 Implement content compliance checking for platform policies
  - [ ] 5.12 Create workflow automation rules and triggers 