# Product Requirements Document (PRD): Konmashi MVP

## 1. Goal, Objective and Context

### Goal:
The primary goal of Konmashi is to empower creators, businesses, and agencies to effortlessly master their digital content strategy and execution by providing an intelligent, AI-powered SaaS platform. Konmashi aims to serve as a virtual "AI content management team," making sophisticated, multi-platform content marketing accessible and manageable for users regardless of their prior expertise or team size.

### Objective:
Konmashi's core objective is to transform the content marketing lifecycle – from ideation and brand-aligned creation through to multi-channel publishing and performance analysis. It will achieve this by:

- Simplifying and automating complex content creation tasks (text, image, video).
- Ensuring deep personalization and brand consistency through AI that learns and adapts to each tenant's unique vision and mission.
- Providing tools and workflows that amplify user capabilities, making them feel "superhuman" in their ability to generate high volumes of diverse, high-quality content.
- Offering an integrated, intuitive user experience that is powerful yet not overwhelming.

### Context:
Konmashi operates in a rapidly evolving digital landscape where the demand for fresh, engaging, and multi-platform content is continuously increasing. Many individuals and organizations struggle with the time, cost, and expertise required to meet these demands effectively. Existing tools may be fragmented or require significant learning curves. Konmashi intends to address these challenges by offering a unified, intelligent platform that combines advanced AI generation capabilities with strategic planning, workflow automation, and adaptive learning, tailored to each user's brand. The initial focus will be on delivering a robust Minimum Viable Product (MVP) that validates core content generation, simplified workflows, and initial learning capabilities.

**Publishing Platform Update**: Publishing connections for Instagram, TikTok, YouTube, LinkedIn, Facebook, and Pinterest are currently in final testing and will be available for the MVP launch.

## 2. Functional Requirements (MVP)

### User & Brand Management:
- The system shall allow users to define and store core brand identity elements (e.g., brand voice, tone, key themes) through a guided setup process.
- The system shall use the defined brand identity to inform all AI content generation.

### Content Ideation & Initiation:
- The system shall provide a conversational chat interface (via an "Orchestrator AI") for users to submit simple content creation requests.
- The system shall allow users to capture, store, and view text-based ideas and web links in a basic "Ideabank."

### Content Generation (Short-Form Focus for MVP):
- The system shall generate text-based social media posts (e.g., for Twitter, LinkedIn) from user prompts and brand identity.
- The system shall generate image-based social media posts, including AI-generated images and accompanying captions, from user prompts and brand identity.
- The system shall generate concepts and/or scripts for short-form videos (e.g., for TikToks, Reels), potentially including suggestions for "faceless video" elements like stock footage types or AI voiceover styles.
- The system shall offer options to tailor or optimize generated content for the supported social media platforms: Instagram, TikTok, YouTube, LinkedIn, Facebook, and Pinterest.

### Content Refinement & Feedback:
- The system shall allow users to review AI-generated content before approval.
- The system shall enable users to provide feedback (e.g., a rating system or simple comments) on at least one type of AI-generated content (e.g., images).
- The system shall use this user feedback to attempt a revised generation of the content, demonstrating an iterative improvement loop.
- The system shall log this feedback and iteration process to build a foundational dataset for future tenant-specific AI learning (RAG foundation).

### Content Scheduling & Oversight:
- The system shall allow users to schedule approved content for future posting to integrated social media platforms (Instagram, TikTok, YouTube, LinkedIn, Facebook, Pinterest).
- The system shall provide a simple calendar interface for users to view their scheduled content.
- The system shall display a basic status or progress indicator for active content generation requests initiated by the user.

### Legal & Compliance Requirements:
- The system shall include a comprehensive Privacy Policy accessible via footer link.
- The system shall include Terms of Service accessible via footer link.
- Both documents shall be compliant with social media platform requirements for API integrations.

## 3. Non Functional Requirements (MVP)

### Usability:
- The system shall be perceived by its target users (Solopreneurs, SMBs, Agency Professionals) as "easy to use" and "intuitive" for core MVP workflows. This will be validated through user feedback and usability testing (e.g., aiming for a System Usability Scale (SUS) score above a defined target like 70).
- The user interface shall embody a "cool, modern" aesthetic and provide a sense of empowerment and efficiency (the "superhuman capabilities" feeling), without overwhelming new users encountering the MVP features.
- The initial onboarding process for core MVP features shall be simple, clear, and effectively guide users to achieve their first successful content generation.

### Performance:
- Core AI content generation tasks for the MVP (e.g., generating a text-based social post, a simple image with caption) shall complete within a timeframe that feels responsive and efficient to the user (specific target times to be benchmarked, e.g., typically under 30-60 seconds for simple tasks).
- The user interface shall load and respond to user interactions (e.g., button clicks, form submissions) promptly, adhering to generally accepted web performance standards.

### Reliability:
- The core MVP functionalities (brand input, idea capture, defined content type generation, basic scheduling, feedback loop) shall be consistently available and operate without frequent failures or errors.
- User data, including brand identity elements and ideas stored in the Ideabank, shall be persistently and reliably stored and retrieved.

### Security:
- User authentication mechanisms for accessing the Konmashi platform shall be secure.
- Tenant-specific data (brand information, generated content, ideas, etc.) shall be logically isolated and protected to prevent unauthorized access by other tenants.
- The management of tenant authentication tokens for social media platforms shall follow security best practices and platform requirements.

### Content Quality (AI Output - MVP Level):
- AI-generated content within the MVP shall demonstrate a foundational level of adherence and relevance to the tenant-defined brand identity elements (e.g., voice, tone, key themes).
- The MVP's iterative feedback loop for the selected content type (e.g., images) shall result in a noticeable improvement in content quality or alignment based on specific user feedback.

### Scalability (Foundational for MVP):
- The MVP's architecture shall be developed using technologies and practices (e.g., NextJS, Supabase, Vercel/cloud hosting) that provide a foundation for future scalability in terms of user load, data volume, and feature expansion.

## 4. User Interaction and Design Goals

### Overall Vision & Experience:
- **Desired Look and Feel**: The user interface (UI) and user experience (UX) for Konmashi should be perceived as "clean, modern, simple, and intuitive." It must be "cool, useful, and easy to use."
- **Core User Experience**: The platform should evoke a feeling of "superhuman capabilities" by amplifying user efforts in content creation and management, yet it must achieve this without overwhelming users, particularly during their initial interactions and for core MVP workflows.
- **Brandability**: The platform should offer capabilities for tenants (particularly premium or agency accounts) to "brand it a bit to feel like their own." This could involve aspects like logo placement, theme color adjustments, or custom domains, enhancing the agency's value proposition to their clients.

### Key Interaction Paradigms:
- **Conversational AI Interaction**: A primary method for initiating tasks and making requests will be through a natural language chat interface with the Orchestrator AI, designed for "easy button" simplicity and complex task delegation.
- **Visual Planning & Workflow Management**: Interactive Calendar, Ideabank Kanban, Content Lifecycle Kanban, "Subway Map" Workflow Visualization, and Task-Based Management.
- **Iterative Feedback & Refinement**: For AI-generated content, users will interact through feedback loops, including rating systems, comments, and potentially direct editing tools.

### Core Screens/Views (Conceptual for MVP):
- Login/Authentication Screen
- Main Dashboard / Command Center
- Ideabank View
- Content Lifecycle Kanban View
- Content Calendar View
- Content Review & Simple Edit Interface
- Basic Settings Page (including Privacy Policy and Terms of Service links)

### Target Devices/Platforms:
- **Primary Interface**: A desktop-first responsive web application
- **Mobile Access**: The web application should be responsive to work on mobile browsers, optimized for idea capture and monitoring workflows

## 5. Technical Assumptions

### Repository & Service Architecture:
- **Repository Structure**: Polyrepo approach with clear separation of concerns
- **High-Level Service Architecture**: Mixed architectural approach leveraging:
  - Next.js for primary web frontend and backend-for-frontend (BFF) functionalities
  - Supabase as Backend-as-a-Service (BaaS) for core database, authentication, vector storage (Supabase Vector for RAG)
  - toolkit.hangten.studio (Python-based API services) for specialized text, image, and video manipulation capabilities
  - External AI Services/Integrations as separate microservices or serverless functions

### General Technical Assumptions & Preferences:
- **Frontend Framework**: NextJS
- **Backend & Database Platform**: Supabase (including Supabase Vector for RAG)
- **UI Components**: shadcn/ui
- **Payments**: Stripe
- **Hosting**: Vercel initially, open to GCP/AWS for scaling
- **Core AI Processing**: toolkit.hangten.studio (Python-based)
- **ORM**: Appropriate ORM for Supabase (e.g., Prisma, TypeORM, or Supabase client libraries)

### Critical External API Dependencies:
- Large Language Model (LLM) APIs for text generation and processing
- Image Generation APIs for creating visual content
- Specialized Video APIs for advanced video features
- Social Media Platform APIs: Instagram, TikTok, YouTube, LinkedIn, Facebook, Pinterest

### Constraints:
- **Robust Token Management System**: Normalized token economy for all AI service calls with granular tracking per tenant/client
- **Multi-Client Architecture**: Support for agencies managing distinct client workspaces with isolated data
- **Individualized & Secure Platform Connections**: Post content using individual tenant credentials for each platform

## 6. Testing Requirements

### Core Testing Types:
- **Unit Testing**: Individual components, functions, and modules
- **Integration Testing**: Interfaces between Next.js frontend, Supabase backend, toolkit.hangten.studio API services, and external AI APIs
- **End-to-End (E2E) Testing**: Key user workflows from start to finish
- **User Acceptance Testing (UAT)**: Validation with target users (solopreneurs, SMBs, agency users)
- **Basic Performance & Responsiveness Testing**: Core workflows under typical expected loads
- **Basic Security Testing**: Authentication, authorization, API key handling, data isolation
- **Manual Exploratory Testing**: Uncover issues and edge cases not covered by automated tests

## 7. Epic Overview

### Epic 1: Konmashi Foundation & Core Onboarding
**Goal**: Establish essential technical and user-facing groundwork including project infrastructure, secure user registration/login, and guided brand identity input workflow.

**User Stories**:
1. **Story 1.1**: Project Initialization & Core Supabase Setup
2. **Story 1.2**: Basic User Authentication (Sign Up & Login)
3. **Story 1.3**: Basic Application Shell & Navigation (MVP)
4. **Story 1.4**: Initial Brand Identity Input - Guided Workflow
5. **Story 1.5**: Secure Storage & Retrieval of Core Brand Identity

### Epic 2: MVP "Easy Button" Content Generation (Text & Image Posts)
**Goal**: Deliver core content generation capabilities for text-based and image-based social media posts via conversational Orchestrator AI.

**User Stories**:
1. **Story 2.1**: Conversational AI Request for Text Post
2. **Story 2.2**: AI Generation of On-Brand Text Post
3. **Story 2.3**: Conversational AI Request for Image Post (with AI Image)
4. **Story 2.4**: AI Generation of On-Brand Image & Caption
5. **Story 2.5**: Content Review Interface (Text & Image Posts - MVP)
6. **Story 2.6**: Multi-Platform Optimization Preview (Basic - MVP)

### Epic 3: Foundational Content Iteration & Feedback Loop
**Goal**: Implement iterative feedback mechanism for AI-generated content, demonstrating learning capability and establishing data collection for future tenant-specific RAG.

**User Stories**:
1. **Story 3.1**: Tenant Provides Feedback/Rating on Generated Content (MVP Focus: Images)
2. **Story 3.2**: System Captures and Stores Content Feedback
3. **Story 3.3**: AI-Assisted Content Regeneration Request (Images)
4. **Story 3.4**: System Attempts Image Refinement Using Feedback (MVP)
5. **Story 3.5**: Tenant Reviews Regenerated Content (Images)

### Epic 4: Basic Ideation, Scheduling & Workflow Visibility (MVP)
**Goal**: Provide core tools for managing content pipeline including Ideabank, scheduling to multiple social media platforms, and workflow status visibility.

**User Stories**:
1. **Story 4.1**: Basic Ideabank - Capture Text & Link Ideas
2. **Story 4.2**: View and Manage Ideabank Entries (MVP)
3. **Story 4.3**: Connect to Social Media Platforms for Scheduling (MVP - Multiple Platforms)
4. **Story 4.4**: Schedule Approved Content to Connected Platforms
5. **Story 4.5**: Simple Calendar View of Scheduled Content (MVP)
6. **Story 4.6**: Basic Status Indication for Active Content Requests (MVP)

### Epic 5: Initial Short-Form Video Concepting & Scripting
**Goal**: Introduce basic video content capabilities by enabling users to generate concepts and scripts for simple short-form videos.

**User Stories**:
1. **Story 5.1**: Conversational AI Request for Short-Form Video Concept/Script
2. **Story 5.2**: AI Generation of Video Concept/Script with "Faceless Video" Suggestions
3. **Story 5.3**: Review Video Concept/Script Output
4. **Story 5.4**: Basic Feedback on Video Concept/Script (Optional for MVP Scope)

### Epic 6: Legal & Compliance Foundation
**Goal**: Establish required legal documentation and compliance measures for social media platform integrations.

**User Stories**:
1. **Story 6.1**: Privacy Policy Creation and Implementation
2. **Story 6.2**: Terms of Service Creation and Implementation
3. **Story 6.3**: Footer Legal Links Implementation
4. **Story 6.4**: Compliance Documentation for Platform APIs

## 8. Success Metrics (Initial Ideas)

### User Adoption & Engagement:
- Number of active tenants/users (daily or weekly active users)
- Average number of content pieces generated and refined per active user per week
- Usage rate of the Ideabank feature
- Adoption rate of the core feedback/iteration loop for content refinement

### Core Value & Usability Validation:
- Task completion rate for the primary MVP workflow
- User satisfaction scores focusing on ease of use and "superhuman" feeling
- Tenant retention rate

### Platform Output & Utility:
- Average number of social media platforms users are creating content for via the MVP
- Qualitative feedback on perceived quality and brand alignment of AI-generated content
- Average tenant rating of pre-publication content

## 9. Key Reference Documents
(To be populated with links to detailed technical specifications, design documents, etc., as they become available.)

## 10. Out of Scope Ideas Post MVP
Features not listed in the MVP scope are considered out of scope by default for current planning horizons. Post-MVP features include:
- Advanced Video Suite with full-featured hybrid video editor
- Deep AI Personalization & Proactivity with fully implemented tenant-specific RAG
- Enhanced Ideation & Workflow Management with advanced Kanban systems
- Full Agency & Monetization Model with comprehensive multi-client management
- Comprehensive Analytics & Reporting dashboard
- Expanded Content Capabilities for wider range of content types and platforms 