# Project Brief: Konmashi

## Introduction / Problem Statement

Konmashi is envisioned as an intelligent SaaS platform designed to revolutionize content marketing by streamlining and amplifying the processes of ideation, production, and multi-channel publishing.

The core problems Konmashi aims to solve are:

- The significant time, effort, and complexity traditionally involved in creating a high volume of diverse and engaging content (e.g., 100 pieces a week) suitable for multiple social media platforms, especially for those who are not social media experts.
- The challenge many creators, small businesses, and even digital agencies face in consistently maintaining a distinct brand voice, vision, and mission across all their content.
- The difficulty in efficiently repurposing core ideas into optimized content for various mediums (e.g., transforming a single concept into blog snippets, social posts, video scripts, etc.).
- The struggle to keep up with content demands, identify effective content strategies, and continuously learn from performance data without needing to hire a dedicated expert team to do all this work.
- The desire to leverage advanced AI capabilities for content generation (text, image, video) in an integrated and user-friendly way that feels empowering, rather than like managing a disparate set of tools.

Konmashi is needed to provide a unified, AI-powered "Content Machine" – effectively serving as an AI content management team – that not only automates and assists in content creation but also learns and adapts to each tenant's unique brand, empowering them with "superhuman capabilities" to produce high-quality, strategically-aligned content efficiently and effectively.

## Vision & Goals

- **Vision:** To empower every creator, business, and agency to effortlessly master their digital presence, by providing an intelligent and adaptive AI partner that transforms content marketing from a complex chore into a joyful, 'superhuman' expression of their unique brand.
- **Primary Goals (for the MVP):**
    1. **Core Content Generation & Platform Output:** Enable users to generate at least three distinct types of on-brand, short-form content (e.g., a text-based tweet, an image with a caption for Instagram, a short text-to-video reel concept/script) using a simplified brand input process, and see it prepared for at least two major social media platforms.
    2. **Simplified Ideation-to-Task Workflow:** Implement a basic version of the chat-based Orchestrator interface allowing users to initiate content generation requests (e.g., "Konmashi, create a post about X for Twitter"), and a functional Ideabank for capturing at least text and link-based ideas.
    3. **Basic Iterative Feedback & Learning:** Demonstrate a visible feedback loop for at least one AI-generated content type (e.g., image generation), where user feedback is used to refine the AI's prompt and generate an improved version, with this interaction logged as a foundational step towards the tenant-specific RAG.
    4. **Initial Usability & Value Validation:** Achieve a satisfactory usability rating (e.g., a target score on a standard usability scale like SUS, or positive qualitative feedback) from a small cohort of initial beta users for the core MVP workflow (idea -> generation -> simple refinement -> platform-ready output).
- **Success Metrics (Initial Ideas):**
    1. **User Adoption & Engagement:**
        - Number of active tenants/users (e.g., daily or weekly active users).
        - Average number of content pieces generated and refined per active user per week.
        - Usage rate of the Ideabank feature (e.g., number of ideas captured per user).
        - Adoption rate of the core feedback/iteration loop for content refinement.
    2. **Core Value & Usability Validation:**
        - Task completion rate for the primary MVP workflow (e.g., from initiating a content request via chat to having a piece of content ready for a platform).
        - User satisfaction scores (e.g., from a simple in-app survey or qualitative feedback focusing on ease of use and the "superhuman"/amplification feeling).
        - Tenant retention rate (even for a free beta, are users coming back?).
    3. **Platform Output & Utility:**
        - Average number of social media platforms users are creating content for via the MVP.
        - Qualitative feedback on the perceived quality and brand alignment of the AI-generated content.
        - Average tenant rating of pre-publication content (if the rating feature is implemented).

## Target Audience / Users

- **Solopreneurs / Creators:** Individuals who need to produce consistent, high-quality, on-brand content across multiple platforms but may lack the time, large teams, or deep social media expertise.
- **Small to Medium-Sized Businesses (SMBs):** Companies that want to leverage content marketing for growth but need an efficient and scalable solution to manage their online presence without significant overhead. (This also aligns with "designers, graphics folks and small business owners" mentioned by the user).
- **Digital Agencies:** Firms managing social media and content marketing for multiple clients, who would benefit from a unified system to streamline workflows, ensure brand consistency per client, and track performance across different accounts.
- **Growth Marketers:** Professionals focused on leveraging data-driven automation and content to maximize reach, engagement, and conversions.

## Key Features / Scope (High-Level Ideas for MVP)

1. **AI-Powered Short-Form Content Generation:**
    - Ability to generate text-based posts (e.g., for Twitter, LinkedIn), image-based posts (e.g., for Instagram, Facebook) with AI-generated images and captions, and simple short-form video concepts/scripts (e.g., for TikTok, Reels, perhaps as "faceless videos" with stock footage and AI voiceover for MVP).
    - Content optimized for at least 2-3 selected social media platforms.
2. **Simplified Brand Identity Input:**
    - A guided process (e.g., an initial interaction with an "AI Creative Director" persona) for tenants to define core brand elements (e.g., voice, tone, key themes) that inform AI content generation.
3. **Conversational Orchestrator Interface:**
    - A primary chat-based interface with the "Orchestrator" AI for tenants to make simple content requests (e.g., "Konmashi, write a post about X for platform Y").
4. **Basic Ideabank & Capture:**
    - Functionality for tenants to easily capture and store text-based ideas and web links (e.g., inspirational articles, competitor posts) for later reference.
5. **Iterative Content Feedback Loop (for one content type):**
    - A system for tenants to provide feedback (e.g., rating) on at least one type of AI-generated content (e.g., images), with that feedback leading to AI prompt refinement and an improved output. This will begin to build data for future tenant-specific learning (RAG foundation).
6. **Simple Content Scheduling & Overview:**
    - Basic capability to schedule generated and approved content for posting on connected platforms.
    - A simple calendar view to see scheduled items.
7. **Basic Task/Workflow Progress Indication:**
    - A clear, simplified way for tenants to see the status of their active content requests (e.g., "Script being generated," "Image ready for review"). This might be a precursor to the full "subway map" or detailed task list.

## Post MVP Features / Scope and Ideas

1. **Advanced Video Suite:**
    - Full-featured hybrid video editor with more manual tools and advanced AI-assist commands.
    - Long-form video creation capabilities, including integration with AI Avatar platforms (like HeyGen).
    - Expanded B-roll libraries and potentially stock media integrations.
2. **Deep AI Personalization & Proactivity:**
    - Fully implemented tenant-specific RAG driving highly personalized content generation and proactive strategic suggestions (e.g., "Konmashi is inspired..." notifications based on deep insights).
    - Advanced A/B testing features with automated suggestions, setup, and detailed results analysis.
3. **Enhanced Ideation & Workflow Management:**
    - "Social Media Harvesting" for the Ideabank, providing automated feeds of viral/relevant content.
    - A fully developed Ideabank Kanban system with automated triggers for the "Queue for Production" stage.
    - The complete "Subway Map" workflow dashboard for visualizing content production pipelines.
    - A more detailed, interactive task list for the virtual AI team with richer project management features.
    - A dedicated companion mobile app for Ideabank management and quick capture.
4. **Full Agency & Monetization Model:**
    - Comprehensive multi-client management dashboard and features for digital agencies, including per-client analytics, RAGs, brand settings, and token/cost allocation.
    - Sophisticated token economy for all AI services, potentially with options for tenants to bring their own API keys (BYOK) for certain external services.
5. **Comprehensive Analytics & Reporting:**
    - A detailed performance analytics dashboard integrating data from various social platforms, providing actionable insights, and directly informing the AI's learning and A/B testing suggestions.
6. **Expanded Content Capabilities:**
    - Support for a wider range of content types and platforms.
    - Advanced transcript processing, summarization, and repurposing features (beyond basic MVP).

## Known Technical Constraints or Preferences

- **Constraints:**
    - **Robust Token Management System:** The system must implement a normalized token economy for all AI service calls (both internal toolkit APIs and external third-party APIs like LLMs, ImageGen services). This includes:
        - Granular tracking of token consumption per tenant, and per client within an agency tenant.
        - An internal mechanism or table to map and dynamically update the cost of Konmashi's normalized tokens against the fluctuating costs of underlying AI service providers.
    - **Multi-Client Architecture:** The platform must support a multi-client architecture enabling agencies to manage distinct client workspaces, each with separate brand settings, data (Ideabanks, RAGs, analytics), and token usage tracking.
    - **Individualized & Secure Platform Connections:** To avoid platform-imposed rate limits (e.g., Facebook limiting posts from a single application source across many users) and ensure proper content attribution and security, Konmashi must manage social media connections and post content on behalf of each individual tenant/client, using their specific authenticated credentials for each platform. This necessitates careful handling of authentication tokens and adherence to each platform's API terms of service.
- **Initial Architectural Preferences (if any):**
    - **Frontend Framework:** NextJS (to be used as much as possible).
    - **Backend & Database Platform:** Supabase.
    - **Vector Database (for RAG):** Supabase Vector.
    - **ORM/Data Access:** To be determined – a good ORM appropriate for Supabase (e.g., Prisma, TypeORM) may be needed, or reliance on Supabase client libraries like `supabase-js`.
    - **UI Component Library/Framework:** shadcn/ui.
    - **Payment Processing:** Stripe.
    - **Hosting:** Currently utilizing Vercel, with openness to explore Google Cloud Platform (GCP) or Amazon Web Services (AWS) as scaling needs arise.
    - **Workflow Prototyping Tool:** Consideration for using n8n to prototype some workflows.
    - **AI Agent Development Framework:** Exploration needed for a suitable agentic framework for building Konmashi's internal AI agents. There's an interest in Pydantic (which is Python-based, suggesting that some AI agent logic or backend services connected to your `toolkit.hangten.studio` might be developed in Python, separate from the Next.js frontend/BFF).
- **User Preferences:** (Captured primarily within the Vision, Goals, Features, and specific architectural preferences above)
    - Strong preference to utilize `toolkit.hangten.studio` as a primary API for core text, image, and video manipulation features, given its existing capabilities (though not a hard mandate if better alternatives exist for specific functions).
    - The UI/UX philosophy must be perceived as "cool, modern, useful, and easy to use," designed to provide users with "superhuman capabilities" by amplifying their efforts effectively without being overwhelming. Key aspects include iterative feedback loops, visual/intuitive interfaces, and chat-based interaction for "easy button" workflows.
- **Risks:**
    - **Technical Complexity & Integration:** Integrating multiple AI services, RAG, and the hybrid video editor.
    - **User Adoption & Experience:** Balancing power with ease of use to avoid overwhelming users.
    - **AI Model & Service Dependencies:** Reliance on third-party AI models (performance, pricing, availability).
    - **Social Media Platform Integration & Management:** Challenges of unique, frequently changing APIs, and secure management of tenant connections (e.g., Meta's varied requirements, rate limits requiring posting on behalf of clients).
    - **Scalability & Performance:** Handling many tenants, clients per agency, and high content volumes.
    - **Cost Management & Token Economy:** Accurately managing AI service costs within a normalized token system, especially for agencies.
    - **Market Competition & Differentiation:** Maintaining a unique value proposition in a rapidly evolving AI content space.

## Relevant Research (Optional)

Formal research documents are not available at this stage. However, initial observations of the competitive landscape indicate:

- Some competitors offer simpler, template-based systems with significant one-time fees (e.g., around $5000).
- Other competitors utilize subscription models, with pricing tiers observed in the range of $99 to $599 per month, often supplemented by charges for additional token usage or premium features.

This initial awareness will inform more detailed competitive analysis during the product planning phase.

## PM Prompt

This Project Brief provides the full context for the **Konmashi** project.

Please activate your **Product Manager** persona (John) and engage the user to begin **'PRD Generation Mode'**. Review this brief thoroughly to understand the project vision, goals, target audience, MVP scope, and initial technical considerations.

Your objective is to work collaboratively with the user, section by section, to create a comprehensive Product Requirements Document (PRD) for Konmashi, using the `prd-tmpl`. Ask for any necessary clarifications, suggest improvements based on your product management expertise, and ensure all key decisions are captured effectively in the PRD. Ensure you also guide the user through defining the critical "Technical Assumptions," including repository structure and high-level service architecture choices, as these will directly inform the Architect.