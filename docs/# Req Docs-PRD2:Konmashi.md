# Product Requirements Document (PRD): Konmashi

## 1. Goal, Objective and Context

**Goal:**
The primary goal of Konmashi is to empower creators, businesses, and agencies to effortlessly master their digital content strategy and execution by providing an intelligent, AI-powered SaaS platform. Konmashi aims to serve as a virtual "AI content management team," making sophisticated, multi-platform content marketing accessible and manageable for users regardless of their prior expertise or team size. This is realized through the use of **Kroids**—agentic personas representing specialized roles in a content team—who are central to both the product concept and the user experience (sidebar, chat, etc.).

**Objective:**
Konmashi's core objective is to transform the content marketing lifecycle – from ideation and brand-aligned creation through to multi-channel publishing and performance analysis. It will achieve this by:
* Simplifying and automating complex content creation tasks (text, image, video).
* Ensuring deep personalization and brand consistency through AI that learns and adapts to each tenant's unique vision and mission.
* Providing tools and workflows that amplify user capabilities, making them feel "superhuman" in their ability to generate high volumes of diverse, high-quality content.
* Offering an integrated, intuitive user experience that is powerful yet not overwhelming, with Kroids as the user's virtual team.

**Context:**
Konmashi operates in a rapidly evolving digital landscape where the demand for fresh, engaging, and multi-platform content is continuously increasing. Many individuals and organizations struggle with the time, cost, and expertise required to meet these demands effectively. Existing tools may be fragmented or require significant learning curves. Konmashi intends to address these challenges by offering a unified, intelligent platform that combines advanced AI generation capabilities with strategic planning, workflow automation, and adaptive learning, tailored to each user's brand. The initial focus will be on delivering a robust Minimum Viable Product (MVP) that validates core content generation, simplified workflows, and initial learning capabilities, all built around the Kroids and team-based structure.

## 2. Functional Requirements (MVP)

**Kroids (Agentic Personas):**
* The system **shall** present a set of Kroids—specialized AI personas (e.g., Orchestrator, Strategist, Copywriter, Designer, Analyst, Community Manager)—as the core user interface and workflow paradigm.
* Users **shall** interact with Kroids via the sidebar and chat interface, switching between personas to access different expertise and workflows.
* Each Kroid **shall** have a unique personality, prompt, and function, and can be extended in the future.
* See `# TeamPersonaStarter: Konmashi.md` for full persona details.

**Team & Brand Management:**
* The system **shall** require all users to join or create a Team during onboarding.
* All data (brand identity, content, ideas, etc.) **shall** be isolated per team, with strict RBAC enforced (roles: ADMIN, MEMBER).
* Team Admins **shall** be able to invite, remove, and manage members, and assign roles.
* The system **shall** allow users to define and store core brand identity elements (e.g., brand voice, tone, key themes) through a guided setup process, scoped to the team.
* The system **shall** use the defined brand identity to inform all AI content generation.

**License Management & Stripe Integration (Planned):**
* Each team **shall** have a license count (number of seats/members allowed), enforced in the UI and backend.
* When the license limit is reached, inviting new members **shall** be disabled until more licenses are purchased.
* Team Admins **shall** be able to upgrade licenses (increase seat count) via a Stripe-powered checkout (coming soon).
* License usage and upgrades **shall** be visible in the Team Admin dashboard.

**Content Ideation & Initiation:**
* The system **shall** provide a conversational chat interface (via an "Orchestrator" Kroid) for users to submit simple content creation requests.
* The system **shall** allow users to capture, store, and view text-based ideas and web links in a basic "Ideabank."

**Content Generation (Short-Form Focus for MVP):**
* The system **shall** generate text-based social media posts (e.g., for Twitter, LinkedIn) from user prompts and brand identity.
* The system **shall** generate image-based social media posts, including AI-generated images and accompanying captions, from user prompts and brand identity.
* The system **shall** generate concepts and/or scripts for short-form videos (e.g., for TikToks, Reels), potentially including suggestions for "faceless video" elements like stock footage types or AI voiceover styles.
* The system **shall** offer options to tailor or optimize generated content for at least two to three different selected social media platforms.

**Content Refinement & Feedback:**
* The system **shall** allow users to review AI-generated content before approval.
* The system **shall** enable users to provide feedback (e.g., a rating system or simple comments) on at least one type of AI-generated content (e.g., images).
* The system **shall** use this user feedback to attempt a revised generation of the content, demonstrating an iterative improvement loop.
* The system **shall** log this feedback and iteration process to build a foundational dataset for future tenant-specific AI learning (RAG foundation).

**Content Scheduling & Oversight:**
* The system **shall** allow users to schedule approved content for future posting to integrated social media platforms.
* The system **shall** provide a simple calendar interface for users to view their scheduled content.
* The system **shall** display a basic status or progress indicator for active content generation requests initiated by the user.

## 2a. The Kroids: Core Agentic Personas

Konmashi's Kroids are the heart of the platform's agentic model. Each Kroid represents a specialized role in a high-performing content team. For MVP, the following Kroids are included:

- **Orchestrator** (AI project manager, chat interface lead)
- **Strategist** (content strategy, planning)
- **Copywriter** (text/copy generation)
- **Designer** (visuals, images, branding)
- **Analyst** (performance, analytics)
- **Community Manager** (engagement, feedback)

**Each Kroid has a unique icon, which is displayed in the Sidebar for persona switching and at the top of each chat window to visually reinforce the active Kroid.**

Each Kroid is accessible via the sidebar and chat, and users can switch between them to access different workflows and expertise. The Kroids' personalities, prompts, and functions are detailed in `# TeamPersonaStarter: Konmashi.md`.

**Chat Behavior:**
- When switching to a Kroid (via the sidebar or resuming a chat), the system resumes the existing chat if there is history.
- If the user's first message is a question or prompt, the Kroid answers directly (does not respond with a generic greeting like "Hello, how can I help?").
- A greeting is only shown if the chat is empty and the user has not typed anything yet.

## 3. Non Functional Requirements (MVP)

**Usability:**
* The system **shall** be perceived by its target users (Solopreneurs, SMBs, Agency Professionals) as "easy to use" and "intuitive" for core MVP workflows. This will be validated through user feedback and usability testing (e.g., aiming for a System Usability Scale (SUS) score above a defined target like 70).
* The user interface **shall** embody a "cool, modern" aesthetic and provide a sense of empowerment and efficiency (the "superhuman capabilities" feeling), without overwhelming new users encountering the MVP features. The Kroids and team-based structure are central to this experience.
* The initial onboarding process for core MVP features **shall** be simple, clear, and effectively guide users to achieve their first successful content generation, including team creation/joining and Kroid introduction.

**Performance:**
* Core AI content generation tasks for the MVP (e.g., generating a text-based social post, a simple image with caption) **shall** complete within a timeframe that feels responsive and efficient to the user (specific target times to be benchmarked, e.g., typically under 30-60 seconds for simple tasks).
* The user interface **shall** load and respond to user interactions (e.g., button clicks, form submissions) promptly, adhering to generally accepted web performance standards.

**Reliability:**
* The core MVP functionalities (brand input, idea capture, defined content type generation, basic scheduling, feedback loop) **shall** be consistently available and operate without frequent failures or errors.
* User data, including brand identity elements and ideas stored in the Ideabank, **shall** be persistently and reliably stored and retrieved.

**Security:**
* User authentication mechanisms for accessing the Konmashi platform **shall** be secure.
* Tenant-specific data (brand information, generated content, ideas, etc.) **shall** be logically isolated and protected to prevent unauthorized access by other tenants.
* If the MVP includes direct posting to social media platforms, the management of tenant authentication tokens for these platforms **shall** follow security best practices and platform requirements.

**Content Quality (AI Output - MVP Level):**
* AI-generated content within the MVP **shall** demonstrate a foundational level of adherence and relevance to the tenant-defined brand identity elements (e.g., voice, tone, key themes).
* The MVP's iterative feedback loop for the selected content type (e.g., images) **shall** result in a noticeable improvement in content quality or alignment based on specific user feedback.

**Scalability (Foundational for MVP):**
* The MVP's architecture **shall** be developed using technologies and practices (e.g., NextJS, Supabase, Vercel/cloud hosting) that provide a foundation for future scalability in terms of user load, data volume, and feature expansion.

## 4. User Interaction and Design Goals

* **Overall Vision & Experience:**
    * **Desired Look and Feel:** The user interface (UI) and user experience (UX) for Konmashi should be perceived as "clean, modern, simple, and intuitive." It must be "cool, useful, and easy to use."
    * **Core User Experience:** The platform should evoke a feeling of "superhuman capabilities" by amplifying user efforts in content creation and management, yet it must achieve this without overwhelming users, particularly during their initial interactions and for core MVP workflows. The Kroids and team-based structure are central to this experience.
    * **Brandability (especially for Premium/Agency Tiers):** The platform should offer capabilities for tenants (particularly premium or agency accounts) to "brand it a bit to feel like their own." This could involve aspects like logo placement, theme color adjustments, or custom domains, enhancing the agency's value proposition to their clients.
* **Key Interaction Paradigms:**
    * **Conversational AI Interaction:** A primary method for initiating tasks and making requests will be through a natural language chat interface with the Orchestrator Kroid, designed for "easy button" simplicity and complex task delegation. Other Kroids are accessible via the sidebar for specialized workflows.
    * **Visual Planning & Workflow Management:**
        * **Interactive Calendar:** Users will interact with a dynamic calendar for scheduling content, visualizing campaigns, and initiating new work items (e.g., via a "+" button with workflow choices). Items in `Scheduled` and `Posted` stages from the Content Lifecycle Kanban would be clearly reflected here.
        * **Ideabank Kanban:** This will be for capturing and nurturing *initial raw ideas* through stages like `Raw Input`, `Refining Concept`, until an idea is committed to the "Queue for Production."
        * **Content Lifecycle Kanban:** Once an idea is committed (e.g., from the Ideabank's "Queue for Production"), it appears as a card in the "Idea" (or a "Concept Approved") stage of this operational Kanban. This board then tracks the content piece through its active lifecycle: `Idea` -> `Prompt` (prompt engineering/refinement) -> `Staging` (AI generation, asset gathering, internal review) -> `Production` (final assembly, tenant review, iteration, and approval) -> `Scheduled` -> `Posted` -> `Analysis`. This provides a clear overview of all active content.
        * **"Subway Map" Workflow Visualization:** This could serve as an optional, deeper drill-down view from a card on the Content Lifecycle Kanban, especially for complex content types like video. It would visually detail the multiple sub-steps within a major stage (like "Staging" or "Production"), showing the "machine's" internal process for that specific item.
        * **Task-Based Management (Underlying Detail):** A comprehensive task list (akin to ClickUp) will underpin all Kanban cards and workflow stages. This is where the specific, granular tasks for the virtual AI team and any human-in-the-loop (HITL) actions are managed and tracked. Clicking a Kanban card might filter or link to these detailed tasks.
    * **Iterative Feedback & Refinement:** For AI-generated content (like images and videos), users will interact through feedback loops (within the `Production` or `Staging` stages of the Kanban), including rating systems, comments, and potentially direct (but simple) editing tools or AI-assisted commands to guide revisions.
    * **Drag-and-Drop Functionality:** Users will utilize drag-and-drop to move cards through the Kanban stages, prioritize items in queues (like the Ideabank's "Queue for Production"), and potentially to adjust schedules on the calendar.
* **Core Screens/Views (Conceptual for MVP):**
    1.  **Login/Authentication Screen:** Standard entry point for users to access the platform securely.
    2.  **Main Dashboard / Command Center:** The primary landing area after login. Could prominently feature the **Orchestrator Chat Interface** for quick task initiation. Likely provides access to, or an overview of, the Content Calendar, active tasks, and important notifications. The sidebar features the Kroids for persona switching.
    3.  **Ideabank View:** Displays the **Ideabank Kanban** with stages like `Raw Idea`, `Refining`, `Queued for Production`, `Archive`. Allows users to add new ideas and manage them.
    4.  **Content Lifecycle Kanban View:** Shows active content pieces as cards moving through: `Idea` -> `Prompt` -> `Staging` -> `Production` -> `Scheduled` -> `Posted` -> `Analysis`.
    5.  **Content Calendar View:** Displays scheduled and previously posted content (daily, weekly, monthly views). Features the "+" button gateway for initiating new content/campaigns.
    6.  **Content Review & Simple Edit Interface:** An integrated area where users review AI-generated content, provide feedback, rate, and make simple edits (e.g., basic hybrid video editor).
    7.  **Basic Settings Page:** For managing user profile, core Brand Identity elements, and social media platform connections, as well as team and license management (for Admins).
* **Accessibility Aspirations:** While detailed specifications will be defined during the UI/UX design phase, Konmashi will aspire to meet widely accepted web accessibility guidelines, such as WCAG 2.1 Level AA, for its core MVP user workflows. This will help ensure the platform is usable by a broad audience, including people with disabilities. The Design Architect (Jane) will be tasked with exploring and defining specific accessibility requirements and implementation strategies.
* **Branding Considerations (High-Level):** The branding for Konmashi itself (logo, color scheme, overall visual identity) will be developed as part of the design process. The platform should also allow tenants (especially premium/agency accounts) to apply some level of their own branding to their instance.
* **Target Devices/Platforms:** Primary Interface: A desktop-first responsive web application. Mobile Access: The web application should be responsive to work on mobile browsers. Specific mobile capabilities should optimize for: Idea capture and Monitoring workflows.

## 5. Technical Assumptions

**Repository & Service Architecture:**

* **Repository Structure:** A **Polyrepo** approach is preferred.
    * *Rationale:* This structure will allow for clear separation of concerns and independent management of distinct major components, such as the Next.js frontend application and the Python-based `toolkit.hangten.studio` backend services. This approach can facilitate focused development efforts, allow for potentially different deployment cadences for these components, and better accommodate different underlying technology stacks.
* **High-Level Service Architecture:** A **mixed architectural approach** is envisioned, open to refinement by the Architect. This will likely leverage:
    * **Next.js:** For the primary web frontend and potentially for its integrated backend-for-frontend (BFF) functionalities.
    * **Supabase:** As a Backend-as-a-Service (BaaS) for core database functionalities, user authentication, vector storage (Supabase Vector for RAG), and other standard backend features. All user data is scoped to Teams, with RBAC enforced.
    * **Stripe:** For subscription and license management, including license upgrades and seat enforcement (planned, see License Management section).
    * **`toolkit.hangten.studio` (Python-based API services):** The organization's existing Python toolkit, potentially hosted on GCP, will be utilized as one or more distinct API services for its specialized text, image, and video manipulation capabilities.
    * **Other AI Services/Integrations:** External AI model integrations (e.g., LLMs, advanced image generation, HeyGen-like avatar services) or specific internal AI agent orchestration logic may be implemented as separate, focused microservices or serverless functions, depending on the Architect's design, to ensure modularity and scalability.
    * *Rationale:* This mixed architecture aims to combine the rapid development benefits of Supabase for common backend needs, the modern capabilities of Next.js for the user-facing application, and the specialized power of the Python toolkit and other AI services through well-defined APIs. This approach provides flexibility, allows for technology diversity where appropriate (e.g., Python for AI/ML tasks, JavaScript/TypeScript for the frontend), and supports the Polyrepo structure. The Architect will define the precise boundaries, communication patterns, and deployment strategies for these components.

**General Technical Assumptions & Preferences:**
* **Frontend Framework:** NextJS (to be used as much as possible).
* **Backend & Database Platform:** Supabase (including Supabase Vector for RAG).
* **UI Components:** shadcn/ui.
* **Payments:** Stripe (for license management and upgrades).
* **Hosting:** Vercel initially, open to GCP/AWS for scaling.
* **Core AI Processing:** The organization's Python-based `toolkit.hangten.studio` (potentially hosted on GCP) is preferred for core text, image, and video manipulation via its API services.
* **ORM:** An appropriate ORM for Supabase will be selected as needed (e.g., Prisma, TypeORM, or Supabase client libraries).
* **Workflow Prototyping:** Potential use of n8n for some workflow prototyping.
* **AI Agent Development:** Consideration for an agentic framework, with an interest in Pydantic for Python-based AI components.

**Critical External API Dependencies (Specific Providers TBD by Architect/Team):**
* Large Language Model (LLM) APIs: For advanced text generation, summarization, understanding, and other natural language processing tasks.
* Image Generation APIs: For creating original visual content based on prompts (e.g., services similar to Midjourney, DALL-E, or Google's Imagen).
* Specialized Video APIs: Potentially for AI avatar generation (e.g., services like HeyGen), advanced video editing features, or specific video processing tasks not covered by the internal `toolkit.hangten.studio`.
* Social Media Platform APIs: Essential for content publishing, retrieving performance analytics, and potentially for features like "Social Media Harvesting." The unique requirements and rate limits of each platform (e.g., Meta suite, X, TikTok, LinkedIn, Pinterest, YouTube) must be considered.

**Constraints (from Project Brief & PRD discussions):**
* **Robust Token Management System:** The system must implement a normalized token economy for all AI service calls. This includes granular tracking per tenant/client and an updatable internal cost-mapping table.
* **Multi-Client Architecture:** Must support agencies managing distinct client workspaces with isolated data and tracking.
* **Individualized & Secure Platform Connections:** Must post content on behalf of individual tenants/clients using their specific authenticated credentials for each platform to handle rate limits and ensure security.
* **Team-Based Data Isolation & RBAC:** All data is scoped to Teams, with strict role-based access control for all actions and endpoints.
* **License Management & Stripe Integration:** License count is enforced per team, with planned Stripe integration for upgrades and seat management.

**Risks (from Project Brief):**
* **Technical Complexity & Integration:** Integrating multiple AI services, RAG, hybrid video editor.
* **User Adoption & Experience:** Balancing power with ease of use.
* **AI Model & Service Dependencies:** Reliance on third-party AI models.
* **Social Media Platform Integration & Management:** Challenges of unique, changing APIs, secure token management, and rate limits (e.g., Meta's varied requirements, needing to post on behalf of clients).
* **Scalability & Performance:** Handling growth in users, clients, and content.
* **Cost Management & Token Economy:** Accurately managing AI service costs.
* **Market Competition & Differentiation:** Maintaining value in a rapidly evolving AI space.

## 6. Testing requirements

To ensure the Konmashi MVP is functional, reliable, secure, and provides a good user experience, the following types of testing will be prioritized:

1.  **Unit Testing:**
    * Individual components, functions, and modules of the codebase (both frontend and backend, including the AI agent logic and `toolkit.hangten.studio` services) will be thoroughly tested by the development team to ensure they function correctly in isolation.
2.  **Integration Testing:**
    * Focus will be placed on testing the interfaces and interactions between different parts of Konmashi. This includes:
        * Communication between the Next.js frontend and Supabase backend.
        * Integration of the frontend with the `toolkit.hangten.studio` API services.
        * Interactions with critical external AI APIs (LLMs, Image/Video APIs).
        * The flow of data and commands between the Orchestrator Kroid and other internal AI agents/modules.
    * The goal is to ensure these components work together seamlessly.
3.  **End-to-End (E2E) Testing:**
    * Key user workflows for the MVP will be tested from start to finish, simulating real user scenarios. Examples include:
        * User onboarding and brand identity setup.
        * Initiating a content request via the chat interface through to content generation and review.
        * Using the Ideabank to capture an idea and then generate content from it.
        * The content feedback/iteration loop.
        * Scheduling and viewing content on the calendar.
    * Automation will be considered for critical E2E test paths to facilitate regression testing.
4.  **User Acceptance Testing (UAT):**
    * This will be a crucial phase involving the Product Owner/visionary and a small group of selected beta users representing our target audience (solopreneurs, SMBs, agency users).
    * UAT will focus on validating that the MVP meets the defined functional requirements, is intuitive and "easy to use," delivers on the "superhuman capabilities" promise, and is generally fit for purpose from the end-user's perspective.
5.  **Basic Performance & Responsiveness Testing (for MVP):**
    * While full-scale load testing may be post-MVP, the core workflows and UI interactions will be tested for responsiveness under typical expected loads for an initial user base. The goal is to ensure no significant performance bottlenecks that would detract from the user experience.
6.  **Basic Security Testing (for MVP):**
    * Key security aspects will be reviewed and tested, including:
        * User authentication and authorization.
        * Secure handling of API keys and tenant credentials for social media platform integrations.
        * Fundamental data isolation if a basic multi-tenant structure is in place for agency foundations.
7.  **Manual Exploratory Testing:**
    * Throughout the development process, manual exploratory testing will be conducted to uncover issues, usability quirks, or edge cases not covered by automated or scripted tests.

## 7. Epic Overview

This section details the Epics and User Stories for the Konmashi MVP.

---
**Epic 1: Konmashi Foundation & Core Onboarding**

* **Goal:** To establish the essential technical and user-facing groundwork for Konmashi. This includes setting up the basic project infrastructure (as per technical assumptions like Next.js, Supabase integration), implementing secure user registration and login, and providing the initial guided workflow for a new tenant to input their core brand identity elements (voice, tone, key themes). This enables a user to create an account and define their brand foundation within the system.

**User Stories for Epic 1:**

**1. Story 1.1: Project Initialization & Core Supabase Setup**
    * **User Story:** "As a Developer (representing the system's foundational setup), I want the Next.js project to be initialized with essential Supabase integration (including configured authentication and database connectivity) and a basic deployment process to the chosen MVP host (e.g., Vercel), so that a stable, deployable environment is established for all subsequent Konmashi features."
    * **Acceptance Criteria (ACs):**
        * **AC1: Next.js Project Setup:** A new Next.js project is successfully created using the latest stable version.
        * **AC2: Supabase Integration:** The Next.js project is configured with the necessary Supabase client libraries and environment variables (e.g., Supabase URL, Anon Key) to connect to a designated Supabase project.
        * **AC3: Supabase Auth Client Initialization:** The Next.js application can successfully initialize the Supabase authentication client.
        * **AC4: Supabase Database Connectivity:** The Next.js application can successfully perform a basic, authenticated test query or operation against the Supabase database, confirming connectivity.
        * **AC5: Basic Deployment:** A minimal version of the Next.js application (e.g., a simple landing page or app shell) is successfully deployed to the chosen MVP hosting platform (e.g., Vercel).
        * **AC6: Deployed Application Accessibility:** The deployed application is accessible via a public URL provided by the hosting platform.
        * **AC7: Foundational Project Structure:** A basic, logical folder structure (e.g., for pages, components, utilities/libs) is established within the Next.js project, following common best practices.
        * **AC8: Version Control:** The initialized project code is committed to a Git repository.

**2. Story 1.2: Basic User Authentication (Sign Up & Login)**
    * **User Story:** "As a new User, I want to be able to sign up for a Konmashi account using my email and password and log in securely, so that I can access the platform and my dedicated workspace."
    * **Acceptance Criteria (ACs):**
        * **AC1: Sign Up Interface:** A dedicated "Sign Up" page or modal exists with input fields for email address and password.
        * **AC2: Password Requirements:** Password input must meet defined minimum complexity requirements (e.g., minimum 8 characters). These requirements should be communicated to the user.
        * **AC3: Successful Sign Up Registration:** A user can successfully submit their registration by providing a valid email address and a password meeting the complexity requirements.
        * **AC4: User Record Creation in Supabase:** Upon successful registration submission, a corresponding user record (initially in an unconfirmed state) is created in the Supabase `auth.users` table.
        * **AC5: Email Verification Required for Activation:** Upon successful registration, the system sends a verification email to the user's provided email address. The user must click a unique link in this email to verify their address and activate their account before they can successfully log in. (Supabase's built-in email verification functionality should be leveraged.)
        * **AC6: Login Interface:** A dedicated "Login" page or modal exists with input fields for email address and password.
        * **AC7: Successful Login (Post-Verification):** A registered and verified user can successfully log in using their correct email and password.
        * **AC8: Session Establishment:** Upon successful login, a secure session is established for the user (e.g., using Supabase's session management capabilities).
        * **AC9: Invalid Login Handling:** Attempting to log in with an incorrect email/password combination, or with an unverified email address, displays a clear, generic error message to the user (e.g., "Invalid login credentials" or "Please verify your email before logging in").
        * **AC10: Post-Login Redirection:** After successful login, the user is redirected to an appropriate authenticated page (e.g., the main dashboard or, if it's their first login post-verification and brand setup isn't complete, to the brand identity setup workflow).
        * **AC11: Logout Functionality:** A logged-in user has a clearly accessible option to log out, which securely terminates their session and redirects them to a public page (e.g., the login page or homepage).

**3. Story 1.3: Basic Application Shell & Navigation (MVP)**
    * **User Story:** "As a logged-in Tenant, I want to see a minimal application shell (e.g., a simple header and/or navigation panel) that provides access to fundamental areas like account settings and the brand identity setup section, so that I can orient myself and navigate the platform's initial functionalities."
    * **Acceptance Criteria (ACs):**
        * **AC1: Consistent Shell Display:** Upon successful login, a consistent main application shell (e.g., a persistent header and/or a primary navigation area like a sidebar) is displayed across all authenticated pages of the MVP.
        * **AC2: Konmashi Branding Placeholder:** The application shell includes a designated area for the Konmashi logo or name (actual branding to be developed later).
        * **AC3: Navigation Link to Brand Identity Setup:** The navigation shell contains a clearly labeled and functional link or button that directs the user to the "Brand Identity Setup" workflow (to be detailed in Story 1.4).
        * **AC4: Navigation Link to Account Area (Basic):** The navigation shell provides a link or button to a basic "Account" or "Settings" area. For the MVP, this area might initially only contain the logout option, but the navigation point should exist.
        * **AC5: Logout Accessibility from Shell:** The "Logout" functionality (defined in Story 1.2) is easily accessible from within this main application shell (e.g., via a user menu in the header).
        * **AC6: Basic Responsiveness of Shell:** The application shell and its primary navigation elements are responsively designed to be usable and presentable on common desktop screen sizes. (The overall application is planned to be web responsive, and the shell should reflect this foundation).
        * **AC7: Visual Indication of Logged-In State:** The shell provides a subtle visual cue indicating the user is logged in (e.g., displaying the user's initials/email or an account icon).

**4. Story 1.4: Initial Brand Identity Input - Guided Workflow**
    * **User Story:** "As a new Tenant (after signing up and logging in), I want to be guided through a simple, clear initial setup process to define my core brand identity elements (e.g., Brand Name, primary industry/niche, key brand voice descriptors, and a brief target audience description), so that Konmashi has the foundational information needed to start tailoring content to my brand."
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Workflow:** The brand identity input workflow is accessible via a clear navigation path (e.g., from the basic application shell, or initiated automatically on first login post-verification if no brand identity exists).
        * **AC2: Guided Steps:** The workflow consists of simple, clearly defined steps or sections for inputting core brand information.
        * **AC3: Input Fields:** The workflow includes input fields for: Brand Name; Primary Industry/Niche (e.g., dropdown or free-text); Key Brand Voice Descriptors (e.g., a selection of common keywords like "playful," "professional," "witty," "informative," or a short free-text area); Brief Target Audience Description (e.g., a short text area).
        * **AC4: Clear Instructions:** Each input field or section has clear, concise instructions or examples to guide the user.
        * **AC5: Submission:** The user can successfully submit or save the entered brand identity information.
        * **AC6: Confirmation:** Upon submission, the user receives a confirmation message indicating their brand identity has been saved.
        * **AC7: Skip/Later Option (Optional - for discussion):** The workflow allows a user to optionally skip and complete it later (if deemed appropriate for MVP, otherwise it's a mandatory first step).
        * **AC8: Editability (Basic):** The user can revisit and edit the saved brand identity information (basic edit functionality for MVP).

**5. Story 1.5: Secure Storage & Retrieval of Core Brand Identity**
    * **User Story:** "As the System (acting on behalf of the Tenant), I want the core brand identity elements provided by the tenant during the initial setup to be securely stored and persistently associated with their account, so that this information can be consistently retrieved and utilized by AI services for on-brand content generation."
    * **Acceptance Criteria (ACs):**
        * **AC1: Data Persistence:** All brand identity elements submitted through the workflow in Story 1.4 (Brand Name, industry/niche, voice descriptors, target audience) are securely saved to the Supabase database.
        * **AC2: Tenant Association:** The saved brand identity data is correctly and exclusively associated with the specific tenant's user account.
        * **AC3: Data Integrity:** The stored data accurately reflects the information input by the tenant.
        * **AC4: Secure Storage:** Sensitive aspects of brand identity (if any are deemed sensitive) are stored following security best practices.
        * **AC5: Retrieval Mechanism:** An internal system mechanism (e.g., an API endpoint or service function) exists to securely retrieve the stored brand identity for a given tenant.
        * **AC6: Accessibility for AI Services:** The retrieved brand identity information is in a format suitable for use by downstream AI content generation services.
        * **AC7: Update Capability:** The system supports updating the stored brand identity information when a tenant edits it (as per Story 1.4, AC8).

---
**Epic 2: MVP "Easy Button" Content Generation (Text & Image Posts)**

* **Goal:** To deliver the core "superpower" of generating fundamental on-brand content. This involves enabling users to initiate requests for text-based social media posts (e.g., for Twitter, LinkedIn) and image-based posts (including AI-generated images and captions, e.g., for Instagram) via the conversational Orchestrator Kroid. Users should be able to review these generated assets, optimized for at least two platforms.

**User Stories for Epic 2:**

**1. Story 2.1: Conversational AI Request for Text Post**
    * **User Story:** "As a Tenant, I want to request a text-based social media post (e.g., for Twitter, LinkedIn) via the conversational Orchestrator Kroid by providing a topic or simple prompt, so that I can quickly generate initial on-brand text content."
    * **Acceptance Criteria (ACs):**
        * **AC1:** The Orchestrator Kroid chat interface accepts natural language requests for text-based posts.
        * **AC2:** The user can specify a topic or provide a simple prompt for the desired text content.
        * **AC3:** The user can indicate (or the system defaults to) a primary target platform for the initial text post generation (e.g., "general social post," "tweet," "LinkedIn post").
        * **AC4:** The request is successfully submitted to the backend for processing.
        * **AC5:** The user receives an acknowledgement from the Orchestrator Kroid that the text post generation has started.

**2. Story 2.2: AI Generation of On-Brand Text Post**
    * **User Story:** "As the System (Konmashi AI), I want to process the tenant's request (from Story 2.1) and their brand identity (from Epic 1) to generate a relevant, on-brand text-based social media post, so that the tenant receives a useful draft."
    * **Acceptance Criteria (ACs):**
        * **AC1:** The system retrieves the tenant's defined brand identity (voice, tone, themes).
        * **AC2:** The system uses an integrated LLM API to generate a text post based on the user's prompt/topic and the tenant's brand identity.
        * **AC3:** The generated text post is stored and associated with the tenant's account and the initial request.
        * **AC4:** The length and style of the generated text post are appropriate for common social media usage (specific platform optimization is handled in Story 2.6).
        * **AC5:** The system flags or handles any errors during the LLM API call gracefully (e.g., logs error, potentially retries, or informs the user if generation fails).

**3. Story 2.3: Conversational AI Request for Image Post (with AI Image)**
    * **User Story:** "As a Tenant, I want to request an image-based social media post (e.g., for Instagram, Facebook) via the conversational Orchestrator Kroid by providing a topic or simple prompt for the image and an optional related caption idea, so that I can quickly generate initial on-brand visual content."
    * **Acceptance Criteria (ACs):**
        * **AC1:** The Orchestrator Kroid chat interface accepts natural language requests for image-based posts.
        * **AC2:** The user can specify a topic or provide a simple prompt for the desired image.
        * **AC3:** The user can optionally provide a topic or text for an accompanying caption.
        * **AC4:** The request is successfully submitted to the backend for processing.
        * **AC5:** The user receives an acknowledgement from the Orchestrator Kroid that the image post generation has started.

**4. Story 2.4: AI Generation of On-Brand Image & Caption**
    * **User Story:** "As the System (Konmashi AI), I want to process the tenant's request (from Story 2.3) and their brand identity to generate a relevant, on-brand image (using an integrated AI image generation service) and, if a caption topic was provided, a corresponding caption, so that the tenant receives a useful visual post draft."
    * **Acceptance Criteria (ACs):**
        * **AC1:** The system retrieves the tenant's defined brand identity.
        * **AC2:** The system uses an integrated Image Generation API to create an image based on the user's image prompt and relevant brand style cues (if applicable for MVP, e.g., "modern," "playful" if the image API can interpret these).
        * **AC3:** If a caption topic/prompt was provided, the system uses an integrated LLM API to generate a relevant caption, considering the brand voice and the generated image.
        * **AC4:** The generated image (e.g., as a URL or stored asset) and caption (if any) are stored and associated with the tenant's account and the initial request.
        * **AC5:** The system flags or handles any errors during the Image Generation or LLM API calls gracefully.

**5. Story 2.5: Content Review Interface (Text & Image Posts - MVP)**
    * **User Story:** "As a Tenant, I want to be able to view the AI-generated text posts (from Story 2.2) and image posts (image + caption, from Story 2.4) in a simple review interface, so that I can assess their suitability before further action."
    * **Acceptance Criteria (ACs):**
        * **AC1:** A dedicated UI area or modal exists where generated text posts can be displayed clearly to the tenant.
        * **AC2:** A dedicated UI area or modal exists where generated image posts (showing both the image and its caption) can be displayed clearly.
        * **AC3:** For image posts, the generated image is displayed at a reasonable preview size.
        * **AC4:** If multiple posts are generated from a batch request (post-MVP feature, but good to have the interface support one item at least), there's a way to navigate between them or see them listed. (For MVP, assume one primary output per request for simplicity in review).
        * **AC5:** The interface is clean, uncluttered, and focuses on easy readability/viewing of the content.

**6. Story 2.6: Multi-Platform Optimization Preview (Basic - MVP)**
    * **User Story:** "As a Tenant, after a base piece of content (text or image post) is generated and reviewed, I want to be able to select up to two target social media platforms (from a predefined MVP list, e.g., Twitter, Instagram, LinkedIn) and see a preview or get simple text-based suggestions on how the content might be adapted for those platforms (e.g., character count adherence for Twitter, line break suggestions for Instagram captions), so that I understand how Konmashi helps tailor content."
    * **Acceptance Criteria (ACs):**
        * **AC1:** After reviewing a generated text post or image post, the tenant can select up to two target social media platforms from a system-defined MVP list.
        * **AC2:** For a selected text post and target platform: If the text exceeds platform character limits (e.g., Twitter), a warning is shown, or a truncated version/suggestion is provided; Basic formatting suggestions relevant to the platform may be shown (e.g., "Consider adding 1-2 relevant hashtags for Twitter/Instagram").
        * **AC3:** For a selected image post and target platform: Basic advice regarding image aspect ratios or suitability for the platform may be provided (e.g., "Instagram prefers square or portrait images. This image is landscape."); Caption length or style suggestions may be provided if different from the original.
        * **AC4:** These previews/suggestions are displayed clearly to the user within the review interface.
        * **AC5:** The "optimization" for MVP is focused on simple, rule-based adjustments or textual advice, not full re-generation of content per platform.

---
**Epic 3: Foundational Content Iteration & Feedback Loop**

* **Goal:** To implement the initial version of the iterative feedback mechanism for at least one AI-generated content type (e.g., images). Users will be able to provide simple feedback (e.g., a rating or a short comment) that the system uses to attempt a revised generation of the content, demonstrating Konmashi's learning capability and establishing the data collection groundwork for the future tenant-specific RAG.

**User Stories for Epic 3:**

**1. Story 3.1: Tenant Provides Feedback/Rating on Generated Content (MVP Focus: Images)**
    * **User Story:** "As a Tenant, after reviewing an AI-generated image (from Epic 2), I want to be able to provide specific feedback, such as a simple rating (e.g., 1-5 stars) and/or a short textual comment, so that I can clearly indicate its suitability and suggest areas for improvement."
    * **Acceptance Criteria (ACs):**
        * **AC1:** Within the content review interface for an AI-generated image (from Story 2.5), options to provide a rating (e.g., star rating system) are available.
        * **AC2:** An optional text input field is available for the tenant to add specific comments or qualitative feedback regarding the image.
        * **AC3:** The tenant can successfully submit their rating and/or comments.
        * **AC4:** The interface clearly confirms that the feedback has been submitted.
        * **AC5:** For MVP, this feedback mechanism is implemented specifically for AI-generated images.

**2. Story 3.2: System Captures and Stores Content Feedback**
    * **User Story:** "As the System, when a tenant submits feedback (rating and/or comment) on a generated image, I want to securely store this feedback and accurately associate it with the specific image, the prompt used to generate that image, and the tenant's account, so that this data can be used for content refinement and contributes to the foundational dataset for future tenant-specific RAG learning."
    * **Acceptance Criteria (ACs):**
        * **AC1:** Submitted ratings for an image are stored in the database, linked to the specific image asset and tenant.
        * **AC2:** Submitted textual comments for an image are stored in the database, linked to the specific image asset and tenant.
        * **AC3:** The original prompt or parameters used to generate the image being reviewed are also linked to the stored feedback.
        * **AC4:** All feedback data is stored securely and maintains integrity.
        * **AC5:** The system logs the timestamp of the feedback.

**3. Story 3.3: AI-Assisted Content Regeneration Request (Images)**
    * **User Story:** "As a Tenant, after providing feedback on an AI-generated image, I want a clear option to request a revised version of that image, so that Konmashi can attempt to produce an improved output based on my input."
    * **Acceptance Criteria (ACs):**
        * **AC1:** After submitting feedback (as per Story 3.1), a clear call-to-action (e.g., "Regenerate with Feedback," "Try Again with My Notes") is presented to the tenant in the review interface.
        * **AC2:** Clicking this option triggers a request to the system to generate a new version of the image, taking the recent feedback into account.
        * **AC3:** The user receives confirmation that the regeneration process has started.
        * **AC4:** If the user chooses not to regenerate, they can navigate away or proceed to other actions.

**4. Story 3.4: System Attempts Image Refinement Using Feedback (MVP)**
    * **User Story:** "As the System (Konmashi AI), when a tenant requests a revised version of an image after providing feedback (from Story 3.3), I want to attempt to modify the original image generation prompt or key parameters based on that feedback (e.g., if feedback mentions 'more vibrant colors,' the system attempts to append 'vibrant colors' to the prompt or adjust a color saturation parameter if available) and re-generate the image using the Image Generation API, so that an improved version is presented to the tenant."
    * **Acceptance Criteria (ACs):**
        * **AC1:** The system retrieves the original prompt and the recently submitted feedback (rating/comments from Story 3.2) for the image in question.
        * **AC2:** For MVP, the system applies a basic strategy to incorporate textual feedback into the prompt (e.g., appending key terms from the feedback to the original prompt, or using the feedback as a new prompt while trying to maintain the original subject).
        * **AC3:** The system calls the Image Generation API with the (potentially) modified prompt/parameters.
        * **AC4:** A new image variant is generated and stored, linked to the original image request and the feedback that prompted its creation.
        * **AC5:** If regeneration fails, an appropriate message is conveyed to the user or logged for review.

**5. Story 3.5: Tenant Reviews Regenerated Content (Images)**
    * **User Story:** "As a Tenant, after the system has regenerated an image based on my feedback (from Story 3.4), I want to be able to review this new version (v2) within the content review interface, so that I can assess if it meets my expectations and provide further feedback if necessary."
    * **Acceptance Criteria (ACs):**
        * **AC1:** The newly regenerated image (v2) is presented to the tenant in the same review interface (Story 2.5).
        * **AC2:** It is clear to the tenant that this is a revised version (e.g., labeled "Version 2").
        * **AC3:** The tenant has the same options to provide feedback (rating/comments as per Story 3.1) on this new version.
        * **AC4:** The tenant has the option to request another regeneration (as per Story 3.3) if v2 is still not satisfactory (for MVP, limit to a defined number of retries for a single feedback instance, e.g., 2-3).
        * **AC5:** The tenant can also choose to accept/approve the current version (basic approval mechanism for MVP – e.g., a "Use this image" button).

---
**Epic 4: Basic Ideation, Scheduling & Workflow Visibility (MVP)**

* **Goal:** To provide users with core tools for managing their content pipeline. This includes implementing the basic Ideabank for capturing text and link-based ideas, enabling users to schedule approved content pieces onto a simple calendar view for one connected social media platform, and offering a basic visual indicator of the status for their active content generation requests.

**User Stories for Epic 4:**

**1. Story 4.1: Basic Ideabank - Capture Text & Link Ideas**
    * **User Story:** "As a Tenant, I want to be able to quickly capture and store text-based ideas and web links (e.g., URLs to inspiring articles or competitor posts) in a dedicated "Ideabank" section within Konmashi, so that I don't lose track of inspiration and can refer back to these ideas later."
    * **Acceptance Criteria (ACs):**
        * **AC1:** A dedicated "Ideabank" section is accessible within the Konmashi application.
        * **AC2:** The user can input and save a short text-based idea (e.g., via a simple form).
        * **AC3:** The user can input and save a web link (URL), optionally with a short accompanying note.
        * **AC4:** Each saved idea (text or link) is stored and associated with the tenant's account.
        * **AC5:** The user receives confirmation when an idea is successfully saved.
        * **AC6:** For MVP, other input methods like email forwarding or Slack integration for the Ideabank are out of scope but noted for future consideration.

**2. Story 4.2: View and Manage Ideabank Entries (MVP)**
    * **User Story:** "As a Tenant, I want to be able to view all my saved ideas in the Ideabank in a simple list format, and have basic management capabilities like deleting an idea, so that I can keep my Ideabank organized."
    * **Acceptance Criteria (ACs):**
        * **AC1:** Saved ideas (text and links with notes) are displayed in a clear, reverse chronological list (or other simple sortable view) within the Ideabank section.
        * **AC2:** For link-based ideas, the URL is displayed, and if possible, the note associated with it. (Full link previews are a post-MVP enhancement).
        * **AC3:** The user can select and delete an individual idea from the Ideabank.
        * **AC4:** A confirmation prompt is displayed before an idea is permanently deleted.
        * **AC5:** For MVP, advanced Ideabank features like tagging, Kanban views, or AI-assisted processing of ideas are out of scope but noted for future consideration.

**3. Story 4.3: Connect to a Social Media Platform for Scheduling (MVP - One Platform)**
    * **User Story:** "As a Tenant, I want to be able to securely connect Konmashi to at least one of my social media accounts (e.g., Twitter or LinkedIn, from a predefined MVP list of supported platforms), so that approved content can be scheduled for posting directly from the platform."
    * **Acceptance Criteria (ACs):**
        * **AC1:** A settings area exists where users can manage social media platform connections.
        * **AC2:** The system provides a secure OAuth (or equivalent platform-approved) flow for connecting to at least one pre-selected social media platform (e.g., Twitter, chosen for MVP simplicity).
        * **AC3:** Upon successful connection, the system securely stores the necessary authentication tokens for that platform, associated with the tenant's account.
        * **AC4:** The user can see the status of their connected platform(s) (e.g., "Connected," "Disconnected").
        * **AC5:** The user can securely disconnect a connected platform.
        * **AC6:** Error handling is in place for failed connection attempts, providing clear feedback to the user.

**4. Story 4.4: Schedule Approved Content to Connected Platform**
    * **User Story:** "As a Tenant, after a piece of content (e.g., a text post or image post from Epic 2, or a refined version from Epic 3) is marked as 'approved' (basic approval mechanism needed), I want to be able to select a connected social media platform and schedule it for posting at a specific future date and time, so that my content delivery can be planned and automated."
    * **Acceptance Criteria (ACs):**
        * **AC1:** A mechanism exists for a tenant to mark a piece of generated/refined content as "Approved for Posting."
        * **AC2:** For an "Approved" content item, the user can select a scheduling option.
        * **AC3:** The user can choose one of their connected social media platforms (from Story 4.3) as the destination.
        * **AC4:** The user can select a specific future date and time for the post.
        * **AC5:** Upon confirming the schedule, the content item and its schedule details are saved.
        * **AC6:** The user receives confirmation that the content has been successfully scheduled.
        * **AC7:** For MVP, editing a scheduled post's content or schedule might be limited to "delete and reschedule."

**5. Story 4.5: Simple Calendar View of Scheduled Content (MVP)**
    * **User Story:** "As a Tenant, I want to be able to view my scheduled (and perhaps very recently posted via Konmashi) content items on a simple calendar interface (e.g., a monthly or weekly view), so that I have an overview of my upcoming content plan."
    * **Acceptance Criteria (ACs):**
        * **AC1:** A dedicated "Calendar" view is accessible in the application.
        * **AC2:** The calendar displays items that have been scheduled for posting via Konmashi.
        * **AC3:** Calendar entries clearly indicate the scheduled date/time and a summary/title of the content.
        * **AC4:** The user can navigate between months/weeks in the calendar view.
        * **AC5:** For MVP, clicking a calendar entry might show basic details of the scheduled post (e.g., content snippet, target platform, scheduled time). (Advanced interactions like drag-and-drop rescheduling or initiating new posts from the calendar are post-MVP but the view provides a foundation).
        * **AC6:** The calendar displays content scheduled for the one platform connected in MVP.

**6. Story 4.6: Basic Status Indication for Active Content Requests (MVP)**
    * **User Story:** "As a Tenant, when I have initiated a content generation request (e.g., via the chat Orchestrator), I want to see a basic, clear visual indicator of its current high-level status (e.g., 'Processing Idea,' 'Generating Draft,' 'Ready for Review,' 'Scheduled') within the application, so I have a general sense of what Konmashi is working on for me."
    * **Acceptance Criteria (ACs):**
        * **AC1:** When a content generation task is active, its status is visible in a designated area (e.g., a simple list in a dashboard widget, or associated with the item if viewed in the Ideabank or review interface).
        * **AC2:** At least 3-4 distinct high-level statuses are defined and used for MVP (e.g., "Pending," "In Progress," "Ready for Review," "Approved," "Scheduled").
        * **AC3:** The status updates in a timely manner as the content moves through the generation/review/scheduling process.
        * **AC4:** The status indication is clear and easy for the user to understand at a glance. (This is a precursor to the more detailed "subway map" or Content Lifecycle Kanban discussed for post-MVP).

---
**Epic 5: Initial Short-Form Video Concepting & Scripting**

* **Goal:** To introduce basic video content capabilities by enabling users to generate concepts and/or scripts for simple short-form videos (e.g., "faceless video" style with suggestions for AI voiceover style and stock footage types). This allows users to start planning for short-form video content, even if full video production is more advanced.

**User Stories for Epic 5:**

**1. Story 5.1: Conversational AI Request for Short-Form Video Concept/Script**
    * **User Story:** "As a Tenant, I want to be able to request a concept or script for a short-form video (e.g., for TikTok, Reels) via the conversational Orchestrator Kroid by providing a topic, key message, desired length indication (e.g., 'around 30 seconds'), or an idea from my Ideabank, so that I can get initial creative direction and a structural outline for a video."
    * **Acceptance Criteria (ACs):**
        * **AC1:** The Orchestrator Kroid chat interface accepts natural language requests for short-form video concepts or scripts.
        * **AC2:** The user can specify a topic, key message, an approximate desired length, or reference an existing idea from their Ideabank.
        * **AC3:** The request is successfully submitted to the backend for processing.
        * **AC4:** The user receives an acknowledgement from the Orchestrator Kroid that the video concept/script generation has started.

**2. Story 5.2: AI Generation of Video Concept/Script with "Faceless Video" Suggestions**
    * **User Story:** "As the System (Konmashi AI), based on the tenant's request and brand identity, I want to generate a concept outline and/or a brief script for a short-form video, including actionable suggestions for a 'faceless video' production approach (e.g., types of stock footage to intersperse, suggested voiceover tone/style, ideas for on-screen text or simple graphics), so that the tenant receives a structured and practical starting point for creating simple video content."
    * **Acceptance Criteria (ACs):**
        * **AC1:** The system retrieves the tenant's defined brand identity.
        * **AC2:** The system uses an integrated LLM API to generate a video concept (e.g., scene ideas, key messages per scene) and/or a short script (dialogue/voiceover text).
        * **AC3:** The generated output includes specific, practical suggestions for creating a "faceless video" (e.g., "Scene 1: Upbeat stock video of people collaborating," "Voiceover: Enthusiastic and friendly," "On-screen text: 'Tip #1: ...'").
        * **AC4:** The generated concept/script is stored and associated with the tenant's account and the initial request.
        * **AC5:** The output is formatted in a clear, easy-to-read manner (e.g., with distinct sections for scene descriptions, voiceover, text overlay ideas).

**3. Story 5.3: Review Video Concept/Script Output**
    * **User Story:** "As a Tenant, I want to be able to review the AI-generated video concept/script, including any 'faceless video' suggestions, in a clear and readable format within the Konmashi application, so that I can assess its suitability and decide on next steps (e.g., use it as a basis for manual video creation, or for a future Konmashi video editing feature)."
    * **Acceptance Criteria (ACs):**
        * **AC1:** Generated video concepts/scripts are displayed in a dedicated UI area or modal for review.
        * **AC2:** The presentation format is easy to read and understand (e.g., structured text).
        * **AC3:** The tenant can easily copy the text of the concept/script for external use if desired (for MVP).
        * **AC4:** The interface allows the tenant to mark the concept/script as "Reviewed" or "Actioned" (basic status update).

**4. Story 5.4: Basic Feedback on Video Concept/Script (Optional for MVP Scope)**
    * **User Story:** "As a Tenant, after reviewing an AI-generated video concept/script, I would like the option to provide simple feedback (e.g., 'make it shorter,' 'focus more on X aspect') and request a minor variation or refinement from the AI, so that I can quickly iterate on the initial concept if it's close but not perfect."
    * **Acceptance Criteria (ACs):**
        * **AC1:** The review interface (from Story 5.3) includes an option to provide simple textual feedback on the generated concept/script.
        * **AC2:** The user can submit this feedback and request a revised version.
        * **AC3:** The system attempts to incorporate the simple feedback to generate a revised concept/script (e.g., by re-prompting the LLM with the original prompt plus the feedback as a modifier).
        * **AC4:** The revised concept/script (v2) is presented to the tenant for review.
        * **AC5:** For MVP, this iteration loop might be limited to one or two attempts, or the feedback interpretation might be very basic.
    * *Note on MVP Scope for Story 5.4:* This story was previously noted as optional for MVP and can be deferred if overall MVP complexity needs to be reduced. The core value of Epic 5 for MVP is achieved with Stories 5.1-5.3.

---

## 8. Key Reference Documents
*(This section will be populated later by the Product Owner during document sharding with links to detailed technical specifications, design documents, etc., as they become available.)*

## 9. Out of Scope Ideas Post MVP
No specific features have been identified as permanently out of scope at this early stage. Features not listed in the MVP scope or the 'Post MVP Features / Scope and Ideas' section of the Project Brief are considered out of scope by default for current planning horizons.

## 10. [OPTIONAL: For Simplified PM-to-Development Workflow Only] Core Technical Decisions & Application Structure
Not Applicable (N/A) for this project, as the Outcome Focused workflow is being used.

## 11. Change Log

| Change         | Date       | Version | Description              | Author     |
| -------------- | ---------- | ------- | ------------------------ | ---------- |
| Initial Draft  | 2025-05-31 | 0.1     | First draft of MVP PRD.  | John (PM)  |

---
`----- END PRD START CHECKLIST OUTPUT ------`
*(PM Checklist output will appear here after review)*
`----- END Checklist START Design Architect UI/UX Specification Mode Prompt ------`

## Prompt for Design Architect (UI/UX Specification Mode)

**Objective:** To elaborate on the UI/UX aspects of the product defined in this PRD for Konmashi and create detailed UI/UX specifications.
**Mode:** UI/UX Specification Mode
**Input:** This completed Product Requirements Document (PRD) for Konmashi.
**Key Tasks:**
1.  Review the product goals, user stories (Epics 1-5), functional requirements, non-functional requirements, and especially the "User Interaction and Design Goals" section herein.
2.  Collaboratively define detailed user flows for the MVP features, wireframes (conceptual or detailed), and key screen mockups/descriptions.
3.  Specify usability requirements in detail and elaborate on the accessibility aspirations (e.g., WCAG 2.1 AA implementation for core flows).
4.  Populate or create the `front-end-spec-tmpl` document (or equivalent UI/UX Specification document), detailing typography, color palettes (if developing new branding for Konmashi), iconography, spacing, component behaviors, and responsive design strategies for the defined target devices.
5.  Ensure that this PRD is updated or clearly references the detailed UI/UX specifications derived from your work, providing a comprehensive foundation for subsequent architecture and development.
Please guide the user through this process to enrich the PRD with detailed UI/UX specifications, focusing on the "cool, modern, simple, intuitive, and not overwhelming" experience that delivers "superhuman capabilities."

`----- END Design Architect UI/UX Specification Mode Prompt START Architect Prompt ------`

## Initial Architect Prompt

Based on our discussions and requirements analysis for the **Konmashi** project, I've compiled the following technical guidance from this PRD to inform your architecture analysis and decisions as you kick off Architecture Creation Mode:

**Project Goal:** To create Konmashi, an intelligent SaaS platform for AI-powered content ideation, production, and multi-channel publishing, designed to be powerful yet easy to use.

**Key Technical Inputs from this PRD:**
* **Repository & Service Architecture Decision (from "Technical Assumptions" section):**
    * Repository Structure: **Polyrepo**.
    * High-Level Service Architecture: **Mixed approach** (Next.js frontend/BFF, Supabase BaaS, Python-based `toolkit.hangten.studio` as API services, potential for other microservices/serverless for AI integrations).
    * Refer to the "Technical Assumptions" section of this PRD for the full rationale and details.
* **Initial Technology Preferences (from "Technical Assumptions" & Project Brief):**
    * Frontend: NextJS
    * Backend/DB: Supabase (including Supabase Vector for RAG)
    * UI Components: shadcn/ui
    * Payments: Stripe
    * Hosting: Vercel (initially), open to GCP/AWS
    * Core AI Engine: `toolkit.hangten.studio` (Python API services on GCP)
    * ORM: TBD for Supabase
    * AI Agent Dev: Consider agentic frameworks, interest in Pydantic for Python parts.
* **Critical External API Dependencies (from "Technical Assumptions" section):** LLM APIs, Image Generation APIs, Specialized Video APIs (e.g., HeyGen-like), Social Media Platform APIs.
* **Core Constraints (from "Technical Assumptions" & Project Brief):** Robust token management, multi-client architecture for agencies, individualized & secure platform connections for social media posting.
* **Non-Functional Requirements:** Refer to the NFR section of this PRD (Usability, Performance, Reliability, Security for MVP).
* **MVP Scope:** Focus on Epics 1-5 defined herein. The architecture should support these MVP features while providing a scalable foundation.

Please engage the user in your "Create Architecture" task, review this PRD thoroughly (especially "Functional Requirements," "Non-Functional Requirements," "Technical Assumptions," and the "User Interaction and Design Goals"), and collaboratively design the system architecture for Konmashi.

## Brand Management & Onboarding (Update)

- All brand management is now handled via the Manage Brands dashboard (`/dashboard/brands`).
- Users can add, edit, and manage multiple brands per team, with inline Brand Identity setup and editing.
- Onboarding now redirects to Manage Brands if any brands exist; the Brand Setup page is only shown for first-time onboarding.
- This supports agencies, multi-brand teams, and solo users alike.
- Per-brand access control is supported via BrandMembership.

## Recent Major Updates (June 2024)

- **Multi-Brand, Team-Based Architecture:** Teams can manage multiple brands/clients, each with its own brand identity, social connections, and content. All data is strictly isolated by team, with robust RBAC.
- **Unified Manage Brands Dashboard:** `/dashboard/brands` is now the central place to add, edit, and manage all brands. Inline brand identity setup/editing is supported. Deprecated old Add Brand and Brand Setup pages.
- **Brand Deletion Flow:** Safe deletion with confirmation modal (type 'Delete "BrandName" Brand'), admin-only, cascades to all related data.
- **BrandIdentity Data Model:** Supports multiple BrandIdentities per user/team/brand. Compound unique key on `[userId, brandId]` ensures no overwrites.
- **Markdown Manifesto Rendering:** Brand manifesto field supports up to 4000 characters and renders Markdown beautifully in the UI using `react-markdown` and Tailwind's `prose` classes.
- **Persona-Driven (Kroids) Workflows:** Sidebar and chat are built around agentic personas (Kroids) for specialized content workflows.
- **License Management & Stripe Integration:** License count is enforced in UI and backend. Admins can upgrade licenses (Stripe integration planned).
- **Modern Admin Tools:** Team Admin dashboard for member invite, role change, removal, and license management. Superadmin model for platform-level control.
- **UX Improvements:** Collapsible, single-expanded brand cards; onboarding redirects to Manage Brands if brands exist; settings and sidebar are modernized.

### Markdown Support for Brand Manifesto
- The brand manifesto field supports full Markdown formatting. Use headings, lists, bold, italics, and links for rich brand storytelling. Rendered with `react-markdown` and styled with Tailwind's `prose` classes for beautiful display.

### Brand Deletion Flow
- Brand deletion is now a safe, admin-only operation. Users must type 'Delete "BrandName" Brand' to confirm. All related data is deleted. The UI refreshes the brand list and shows errors if deletion fails.

### Brand Card UX
- The Manage Brands dashboard uses collapsible, single-expanded brand cards. Each card shows the brand name, chevron, and actions (edit, delete) always. Only one card can be expanded at a time to show details and the BrandIdentityForm.
