# Product Requirements Document (PRD): Konmashi

## 1. Goal, Objective and Context

**Goal:**
The primary goal of Konmashi is to empower creators, businesses, and agencies to effortlessly master their digital content strategy and execution by providing an intelligent, AI-powered SaaS platform. Konmashi aims to serve as a virtual "AI content management team," making sophisticated, multi-platform content marketing accessible and manageable for users regardless of their prior expertise or team size. 

*Note: Kanban boards and Subway Map workflow visualizations are core to the Konmashi experience, providing intuitive, visual management of content and ideas. These are not just features, but foundational to the workflow and user-friendliness of the app (see 'User Interaction and Design Goals' and dedicated user stories for details).*

**Objective:**
Konmashi's core objective is to transform the content marketing lifecycle – from ideation and brand-aligned creation through to multi-channel publishing and performance analysis. It will achieve this by:
* Simplifying and automating complex content creation tasks (text, image, video).
* Ensuring deep personalization and brand consistency through AI that learns and adapts to each tenant's unique vision and mission.
* Providing tools and workflows that amplify user capabilities, making them feel "superhuman" in their ability to generate high volumes of diverse, high-quality content.
* Offering an integrated, intuitive user experience that is powerful yet not overwhelming.

**Context:**
Konmashi operates in a rapidly evolving digital landscape where the demand for fresh, engaging, and multi-platform content is continuously increasing. Many individuals and organizations struggle with the time, cost, and expertise required to meet these demands effectively. Existing tools may be fragmented or require significant learning curves. Konmashi intends to address these challenges by offering a unified, intelligent platform that combines advanced AI generation capabilities with strategic planning, workflow automation, and adaptive learning, tailored to each user's brand. The initial focus will be on delivering a robust Minimum Viable Product (MVP) that validates core content generation, simplified workflows, and initial learning capabilities.

**Publishing Platform Update**: Publishing connections for Instagram, TikTok, YouTube, LinkedIn, Facebook, and Pinterest are currently in final testing and will be available for the MVP launch.

## 2. Functional Requirements (MVP)

**User, Team & Brand Management:**
* The system **shall** allow users to define and store core brand identity elements (e.g., brand voice, tone, key themes) through a guided setup process, and these elements are associated with a Team (company/client), not just a user.
* The system **shall** support multi-tenant architecture, where each company/client is a Team, and all content, brand identity, ideabank, and social connections are scoped to the Team.
* The system **shall** enforce that only users with the `ADMIN` role for a Team can access that Team's admin section and manage its settings, prompts, and content.
* The system **shall** ensure all content, brand identity, ideabank, and social connections are associated with a Team, not just a user.
* The system **shall** allow users to be members of multiple Teams, with role-based access control (RBAC) enforced per Team.

**Content Ideation & Initiation:**
* The system **shall** provide a conversational chat interface (via an "Orchestrator AI") for users to submit simple content creation requests.
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

**Legal & Compliance Requirements:**
* The system **shall** include a comprehensive Privacy Policy accessible via footer link.
* The system **shall** include Terms of Service accessible via footer link.
* Both documents **shall** be compliant with social media platform requirements for API integrations.

## 3. Non Functional Requirements (MVP)

**Usability:**
* The system **shall** be perceived by its target users (Solopreneurs, SMBs, Agency Professionals) as "easy to use" and "intuitive" for core MVP workflows. This will be validated through user feedback and usability testing (e.g., aiming for a System Usability Scale (SUS) score above a defined target like 70).
* The user interface **shall** embody a "cool, modern" aesthetic and provide a sense of empowerment and efficiency (the "superhuman capabilities" feeling), without overwhelming new users encountering the MVP features.
* The initial onboarding process for core MVP features **shall** be simple, clear, and effectively guide users to achieve their first successful content generation.

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

**Overall Vision & Experience:**
* **Desired Look and Feel:** The user interface (UI) and user experience (UX) for Konmashi should be perceived as "clean, modern, simple, and intuitive." It must be "cool, useful, and easy to use."
* **Core User Experience:** The platform should evoke a feeling of "superhuman capabilities" by amplifying user efforts in content creation and management, yet it must achieve this without overwhelming users, particularly during their initial interactions and for core MVP workflows.
* **Agentic Droid-Driven Experience:** Users interact with a virtual team of AI droids (see 'Agentic Droids & Team Model')—each droid brings unique expertise, communication style, and workflow to the user, making the experience feel like working with a real agency team. The Orchestrator AI routes requests to the appropriate droid(s) based on the task (e.g., content plan → Strategist, post copy → Copywriter, analytics → Metrics, etc.).
* **Brandability (especially for Premium/Agency Tiers):** The platform should offer capabilities for tenants (particularly premium or agency accounts) to "brand it a bit to feel like their own." This could involve aspects like logo placement, theme color adjustments, or custom domains, enhancing the agency's value proposition to their clients.

**Key Differentiators:**
* **Kanban Boards:** Both the Ideabank Kanban and Content Lifecycle Kanban are central to the user experience, enabling users to visually manage ideas and content as they move through all stages of creation, refinement, and publishing.
* **Subway Map Workflow Visualization:** The Subway Map provides a visual, step-by-step breakdown of complex content workflows (especially for video and multi-stage content), making the process transparent and user-friendly. Even in the MVP, a basic version of this visualization is included as a core workflow tool.
* **Team-Based Data Isolation:** All content, brand identity, and admin access are strictly scoped to the Team (company/client). Users only see and manage data for the Team(s) they belong to.
* **RBAC for Admin Access:** Only users with the `ADMIN` role in a Team can access that Team's admin section and manage its settings, prompts, and content.
* **Multi-Team Membership:** Users can belong to multiple Teams and switch between them, with all data and permissions updating accordingly.

**Key Interaction Paradigms:**
* **Conversational AI Interaction:** A primary method for initiating tasks and making requests will be through a natural language chat interface with the Orchestrator AI, designed for "easy button" simplicity and complex task delegation.
* **Visual Planning & Workflow Management:**
    * **Interactive Calendar:** Users will interact with a dynamic calendar for scheduling content, visualizing campaigns, and initiating new work items (e.g., via a "+" button with workflow choices). Items in `Scheduled` and `Posted` stages from the Content Lifecycle Kanban would be clearly reflected here.
    * **Ideabank Kanban:** This will be for capturing and nurturing *initial raw ideas* through stages like `Raw Input`, `Refining Concept`, until an idea is committed to the "Queue for Production."
    * **Content Lifecycle Kanban:** Once an idea is committed (e.g., from the Ideabank's "Queue for Production"), it appears as a card in the "Idea" (or a "Concept Approved") stage of this operational Kanban. This board then tracks the content piece through its active lifecycle: `Idea` -> `Prompt` (prompt engineering/refinement) -> `Staging` (AI generation, asset gathering, internal review) -> `Production` (final assembly, tenant review, iteration, and approval) -> `Scheduled` -> `Posted` -> `Analysis`. This provides a clear overview of all active content.
    * **"Subway Map" Workflow Visualization:** This could serve as an optional, deeper drill-down view from a card on the Content Lifecycle Kanban, especially for complex content types like video. It would visually detail the multiple sub-steps within a major stage (like "Staging" or "Production"), showing the "machine's" internal process for that specific item.
    * **Task-Based Management (Underlying Detail):** A comprehensive task list (akin to ClickUp) will underpin all Kanban cards and workflow stages. This is where the specific, granular tasks for the virtual AI team and any human-in-the-loop (HITL) actions are managed and tracked. Clicking a Kanban card might filter or link to these detailed tasks.
* **Iterative Feedback & Refinement:** For AI-generated content (like images and videos), users will interact through feedback loops (within the `Production` or `Staging` stages of the Kanban), including rating systems, comments, and potentially direct (but simple) editing tools or AI-assisted commands to guide revisions.
* **Drag-and-Drop Functionality:** Users will utilize drag-and-drop to move cards through the Kanban stages, prioritize items in queues (like the Ideabank's "Queue for Production"), and potentially to adjust schedules on the calendar.

**Core Screens/Views (Conceptual for MVP):**
1.  **Login/Authentication Screen:** Standard entry point for users to access the platform securely.
2.  **Main Dashboard / Command Center:** The primary landing area after login. Could prominently feature the **Orchestrator Chat Interface** for quick task initiation. Likely provides access to, or an overview of, the Content Calendar, active tasks, and important notifications.
3.  **Ideabank View:** Displays the **Ideabank Kanban** with stages like `Raw Idea`, `Refining`, `Queued for Production`, `Archive`. Allows users to add new ideas and manage them.
4.  **Content Lifecycle Kanban View:** Shows active content pieces as cards moving through: `Idea` -> `Prompt` -> `Staging` -> `Production` -> `Scheduled` -> `Posted` -> `Analysis`.
5.  **Content Calendar View:** Displays scheduled and previously posted content (daily, weekly, monthly views). Features the "+" button gateway for initiating new content/campaigns.
6.  **Content Review & Simple Edit Interface:** An integrated area where users review AI-generated content, provide feedback, rate, and make simple edits (e.g., basic hybrid video editor).
7.  **Basic Settings Page:** For managing user profile, core Brand Identity elements, and social media platform connections.

**Accessibility Aspirations:** While detailed specifications will be defined during the UI/UX design phase, Konmashi will aspire to meet widely accepted web accessibility guidelines, such as WCAG 2.1 Level AA, for its core MVP user workflows. This will help ensure the platform is usable by a broad audience, including people with disabilities. The Design Architect (Jane) will be tasked with exploring and defining specific accessibility requirements and implementation strategies.

**Branding Considerations (High-Level):** The branding for Konmashi itself (logo, color scheme, overall visual identity) will be developed as part of the design process. The platform should also allow tenants (especially premium/agency accounts) to apply some level of their own branding to their instance.

**Target Devices/Platforms:** Primary Interface: A desktop-first responsive web application. Mobile Access: The web application should be responsive to work on mobile browsers. Specific mobile capabilities should optimize for: Idea capture and Monitoring workflows.

## 5. Technical Assumptions

**Repository & Service Architecture:**

* **Repository Structure:** A **Polyrepo** approach is preferred.
    * *Rationale:* This structure will allow for clear separation of concerns and independent management of distinct major components, such as the Next.js frontend application and the Python-based `toolkit.hangten.studio` backend services. This approach can facilitate focused development efforts, allow for potentially different deployment cadences for these components, and better accommodate different underlying technology stacks.
* **High-Level Service Architecture:** A **mixed architectural approach** is envisioned, open to refinement by the Architect. This will likely leverage:
    * **Next.js:** For the primary web frontend and potentially for its integrated backend-for-frontend (BFF) functionalities.
    * **Supabase:** As a Backend-as-a-Service (BaaS) for core database functionalities, user authentication, vector storage (Supabase Vector for RAG), and other standard backend features.
    * **`toolkit.hangten.studio` (Python-based API services):** The organization's existing Python toolkit, potentially hosted on GCP, will be utilized as one or more distinct API services for its specialized text, image, and video manipulation capabilities.
    * **Other AI Services/Integrations:** External AI model integrations (e.g., LLMs, advanced image generation, HeyGen-like avatar services) or specific internal AI agent orchestration logic may be implemented as separate, focused microservices or serverless functions, depending on the Architect's design, to ensure modularity and scalability.
    * *Rationale:* This mixed architecture aims to combine the rapid development benefits of Supabase for common backend needs, the modern capabilities of Next.js for the user-facing application, and the specialized power of the Python toolkit and other AI services through well-defined APIs. This approach provides flexibility, allows for technology diversity where appropriate (e.g., Python for AI/ML tasks, JavaScript/TypeScript for the frontend), and supports the Polyrepo structure. The Architect will define the precise boundaries, communication patterns, and deployment strategies for these components.

**General Technical Assumptions & Preferences:**
* **Frontend Framework:** NextJS (to be used as much as possible).
* **Backend & Database Platform:** Supabase (including Supabase Vector for RAG).
* **UI Components:** shadcn/ui.
* **Payments:** Stripe.
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

**Risks (from Project Brief):**
* **Technical Complexity & Integration:** Integrating multiple AI services, RAG, hybrid video editor.
* **User Adoption & Experience:** Balancing power with ease of use.
* **AI Model & Service Dependencies:** Reliance on third-party AI models.
* **Social Media Platform Integration & Management:** Challenges of unique, changing APIs, secure token management, and rate limits (e.g., Meta's varied requirements, needing to post on behalf of clients).
* **Scalability & Performance:** Handling growth in users, clients, and content.
* **Cost Management & Token Economy:** Accurately managing AI service costs.
* **Market Competition & Differentiation:** Maintaining value in a rapidly evolving AI space.

**Multi-Tenant Architecture:** All tenant-specific data (brand identity, content, ideabank, social connections, etc.) is associated with a Team (company/client), not just a user. RBAC is enforced at the Team level for all admin and sensitive operations.

## 6. Testing requirements

To ensure the Konmashi MVP is functional, reliable, secure, and provides a good user experience, the following types of testing will be prioritized:

1.  **Unit Testing:**
    * Individual components, functions, and modules of the codebase (both frontend and backend, including the AI agent logic and `toolkit.hangten.studio` services) will be thoroughly tested by the development team to ensure they function correctly in isolation.
2.  **Integration Testing:**
    * Focus will be placed on testing the interfaces and interactions between different parts of Konmashi. This includes:
        * Communication between the Next.js frontend and Supabase backend.
        * Integration of the frontend with the `toolkit.hangten.studio` API services.
        * Interactions with critical external AI APIs (LLMs, Image/Video APIs).
        * The flow of data and commands between the Orchestrator AI and other internal AI agents/modules.
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
    * **User Story:** "As a new Team Admin (after signing up and logging in), I want to be guided through a simple, clear initial setup process to define my Team's core brand identity elements (e.g., Brand Name, primary industry/niche, key brand voice descriptors, and a brief target audience description), so that Konmashi has the foundational information needed to start tailoring content to my Team."
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Workflow:** The brand identity input workflow is accessible via a clear navigation path (e.g., from the basic application shell, or initiated automatically on first login post-verification if no brand identity exists for the Team).
        * **AC2: Guided Steps:** The workflow consists of simple, clearly defined steps or sections for inputting core brand information for the Team.
        * **AC3: Input Fields:** The workflow includes input fields for: Brand Name; Primary Industry/Niche (e.g., dropdown or free-text); Key Brand Voice Descriptors (e.g., a selection of common keywords like "playful," "professional," "witty," "informative," or a short free-text area); Brief Target Audience Description (e.g., a short text area).
        * **AC4: Clear Instructions:** Each input field or section has clear, concise instructions or examples to guide the user.
        * **AC5: Submission:** The Team Admin can successfully submit or save the entered brand identity information for the Team.
        * **AC6: Confirmation:** Upon submission, the Team Admin receives a confirmation message indicating their Team's brand identity has been saved.
        * **AC7: Skip/Later Option (Optional - for discussion):** The workflow allows a Team Admin to optionally skip and complete it later (if deemed appropriate for MVP, otherwise it's a mandatory first step).
        * **AC8: Editability (Basic):** The Team Admin can revisit and edit the saved brand identity information for the Team (basic edit functionality for MVP).

**5. Story 1.5: Secure Storage & Retrieval of Core Brand Identity**
    * **User Story:** "As the System (acting on behalf of the Team), I want the core brand identity elements provided during the initial setup to be securely stored and persistently associated with the Team, so that this information can be consistently retrieved and utilized by AI services for on-brand content generation."
    * **Acceptance Criteria (ACs):**
        * **AC1: Data Persistence:** All brand identity elements submitted through the workflow in Story 1.4 (Brand Name, industry/niche, voice descriptors, target audience) are securely saved to the database and associated with the Team.
        * **AC2: Team Association:** The saved brand identity data is correctly and exclusively associated with the specific Team.
        * **AC3: Data Integrity:** The stored data accurately reflects the information input by the Team Admin.
        * **AC4: Secure Storage:** Sensitive aspects of brand identity (if any are deemed sensitive) are stored following security best practices.
        * **AC5: Retrieval Mechanism:** An internal system mechanism (e.g., an API endpoint or service function) exists to securely retrieve the stored brand identity for a given Team.
        * **AC6: Accessibility for AI Services:** The retrieved brand identity information is in a format suitable for use by downstream AI content generation services.
        * **AC7: Update Capability:** The system supports updating the stored brand identity information when a Team Admin edits it (as per Story 1.4, AC8).

---
**Epic 2: MVP "Easy Button" Content Generation (Text & Image Posts)**

* **Goal:** To deliver the core "superpower" of generating fundamental on-brand content. This involves enabling users to initiate requests for text-based social media posts (e.g., for Twitter, LinkedIn) and image-based posts (including AI-generated images and captions, e.g., for Instagram) via the conversational Orchestrator AI. Users should be able to review these generated assets, optimized for at least two platforms.

*Note: The Orchestrator AI coordinates with the Copywriter, Graphic Designer, and Content Strategist droids (see 'Agentic Droids & Team Model') to fulfill user requests and ensure brand alignment.*

**User Stories for Epic 2:**

**1. Story 2.1: Conversational AI Request for Text Post**
    * **User Story:** "As a logged-in Tenant, I want to be able to initiate a text-based social media post request via the chat interface with the Orchestrator AI (powered by the Copywriter droid), so that I can quickly generate a text-based social media post for my brand. (See 'Agentic Droids & Team Model' for droid details and prompt seeds.)"
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Chat Interface:** The Orchestrator AI chat interface is accessible from the main dashboard or command center.
        * **AC2: Text Post Request Functionality:** The Orchestrator AI can receive and process text-based social media post requests.
        * **AC3: AI Generation of Text Post:** The Orchestrator AI can generate a text-based social media post based on the request and the tenant's brand identity.
        * **AC4: Post Generation Review:** The generated text post is displayed in the chat interface for the tenant to review before approval.

**2. Story 2.2: AI Generation of On-Brand Text Post**
    * **User Story:** "As the system (acting on behalf of the Tenant), I want to generate a text-based social media post that is on-brand and aligns with the tenant's brand identity, so that the content is consistent with the brand's voice, tone, and key themes."
    * **Acceptance Criteria (ACs):**
        * **AC1: Brand Identity Alignment:** The generated text post is consistent with the tenant's brand identity elements (e.g., brand voice, tone, key themes).
        * **AC2: Post Generation Review:** The generated text post is displayed in the chat interface for the tenant to review before approval.

**3. Story 2.3: Conversational AI Request for Image Post (with AI Image)**
    * **User Story:** "As a logged-in Tenant, I want to be able to initiate an image-based social media post request via the chat interface with the Orchestrator AI, so that I can quickly generate an image-based social media post for my brand."
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Chat Interface:** The Orchestrator AI chat interface is accessible from the main dashboard or command center.
        * **AC2: Image Post Request Functionality:** The Orchestrator AI can receive and process image-based social media post requests.
        * **AC3: AI Generation of Image Post:** The Orchestrator AI can generate an image-based social media post based on the request and the tenant's brand identity.
        * **AC4: Post Generation Review:** The generated image post is displayed in the chat interface for the tenant to review before approval.

**4. Story 2.4: AI Generation of On-Brand Image & Caption**
    * **User Story:** "As the system (acting on behalf of the Tenant), I want to generate an image-based social media post that is on-brand and aligns with the tenant's brand identity, so that the content is consistent with the brand's visual identity and key themes."
    * **Acceptance Criteria (ACs):**
        * **AC1: Brand Identity Alignment:** The generated image post is consistent with the tenant's brand identity elements (e.g., visual identity, key themes).
        * **AC2: Post Generation Review:** The generated image post is displayed in the chat interface for the tenant to review before approval.

**5. Story 2.5: Content Review Interface (Text & Image Posts - MVP)**
    * **User Story:** "As a logged-in Tenant, I want to be able to review the generated text and image posts before they are approved for publishing, so that I can ensure they are on-brand and meet the quality standards for my brand."
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Review Interface:** The generated text and image posts are displayed in a review interface accessible from the chat interface.
        * **AC2: Review Functionality:** The tenant can review the generated text and image posts and provide feedback.
        * **AC3: Feedback Submission:** The tenant can submit feedback on the generated text and image posts.

**6. Story 2.6: Multi-Platform Optimization Preview (Basic - MVP)**
    * **User Story:** "As a logged-in Tenant, I want to be able to preview the generated text and image posts before they are scheduled for publishing across multiple social media platforms, so that I can ensure they are optimized for each platform and meet the quality standards for my brand."
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Preview Interface:** The generated text and image posts are displayed in a preview interface accessible from the chat interface.
        * **AC2: Preview Functionality:** The tenant can preview the generated text and image posts across multiple social media platforms.
        * **AC3: Platform-Specific Optimization:** The generated text and image posts are optimized for each social media platform.
        * **AC4: Quality Assurance:** The generated text and image posts meet the quality standards for each social media platform.

---
**Epic 3: Foundational Content Iteration & Feedback Loop**

* **Goal:** To implement iterative feedback mechanism for AI-generated content, demonstrating learning capability and establishing data collection for future tenant-specific RAG.

*Note: The Orchestrator AI coordinates with the Copywriter, Graphic Designer, and Content Strategist droids for content iteration and feedback (see 'Agentic Droids & Team Model').*

**User Stories for Epic 3:**

**1. Story 3.1: Tenant Provides Feedback/Rating on Generated Content (MVP Focus: Images)**
    * **User Story:** "As a logged-in Tenant, I want to be able to provide feedback on the generated image posts (interacting with the Graphic Designer droid), so that the system can use this feedback to improve the quality of future content generation. (See 'Agentic Droids & Team Model' for droid details and prompt seeds.)"
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Feedback Interface:** The tenant can access a feedback interface for providing feedback on the generated image posts.
        * **AC2: Feedback Submission:** The tenant can submit feedback on the generated image posts.
        * **AC3: System Captures and Stores Content Feedback:** The system captures and stores the tenant's feedback on the generated image posts.

**2. Story 3.2: System Captures and Stores Content Feedback**
    * **User Story:** "As the system (acting on behalf of the Tenant), I want to capture and store the tenant's feedback on the generated content, so that this feedback can be used to improve the quality of future content generation."
    * **Acceptance Criteria (ACs):**
        * **AC1: Feedback Capture:** The system captures the tenant's feedback on the generated content.
        * **AC2: Feedback Storage:** The system stores the tenant's feedback on the generated content.

**3. Story 3.3: AI-Assisted Content Regeneration Request (Images)**
    * **User Story:** "As a logged-in Tenant, I want to be able to request a revised version of the generated image post, so that I can get a new version of the content that meets my expectations."
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Regeneration Request Interface:** The tenant can access a regeneration request interface for requesting a revised version of the generated image post.
        * **AC2: Regeneration Request Functionality:** The tenant can submit a request for a revised version of the generated image post.

**4. Story 3.4: System Attempts Image Refinement Using Feedback (MVP)**
    * **User Story:** "As the system (acting on behalf of the Tenant), I want to refine the generated image post based on the tenant's feedback, so that the content is improved and meets the tenant's expectations."
    * **Acceptance Criteria (ACs):**
        * **AC1: Refinement Functionality:** The system refines the generated image post based on the tenant's feedback.
        * **AC2: Refinement Review:** The tenant can review the refined image post and provide feedback.

**5. Story 3.5: Tenant Reviews Regenerated Content (Images)**
    * **User Story:** "As a logged-in Tenant, I want to be able to review the regenerated image post, so that I can ensure it meets the quality standards for my brand."
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Review Interface:** The tenant can access a review interface for reviewing the regenerated image post.
        * **AC2: Review Functionality:** The tenant can review the regenerated image post.

---
**Epic 4: Basic Ideation, Scheduling & Workflow Visibility (MVP)**

* **Goal:** To provide core tools for managing content pipeline including Ideabank, scheduling to multiple social media platforms, and workflow status visibility.

*Note: The Ideabank and content pipeline are supported by the Content Strategist, Social Media Manager, and Community Manager droids (see 'Agentic Droids & Team Model').*

**User Stories for Epic 4:**

**1. Story 4.1: Basic Ideabank - Capture Text & Link Ideas**
    * **User Story:** "As a logged-in Tenant, I want to be able to capture text and link ideas in the Ideabank (with guidance from the Content Strategist droid), so that I can store and manage my content ideas effectively. (See 'Agentic Droids & Team Model' for droid details and prompt seeds.)"
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Ideabank:** The tenant can access an Ideabank for capturing text and link ideas.
        * **AC2: Text and Link Capture:** The tenant can add text and link ideas to the Ideabank.
        * **AC3: Idea Management:** The tenant can manage their Ideabank effectively.

**2. Story 4.2: View and Manage Ideabank Entries (MVP)**
    * **User Story:** "As a logged-in Tenant, I want to be able to view and manage my Ideabank entries, so that I can effectively organize and access my content ideas."
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Ideabank View:** The tenant can access a view interface for their Ideabank.
        * **AC2: Entry Management:** The tenant can manage their Ideabank entries effectively.

**3. Story 4.3: Connect to Social Media Platforms for Scheduling (MVP - Multiple Platforms)**
    * **User Story:** "As a logged-in Tenant, I want to be able to connect to multiple social media platforms for scheduling content (with support from the Social Media Manager droid), so that I can efficiently manage my content publishing across multiple platforms. (See 'Agentic Droids & Team Model' for droid details and prompt seeds.)"
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Platform Connection:** The tenant can connect to multiple social media platforms for scheduling content.
        * **AC2: Platform Connection Functionality:** The tenant can successfully connect to multiple social media platforms for scheduling content.

**4. Story 4.4: Schedule Approved Content to Connected Platforms**
    * **User Story:** "As a logged-in Tenant, I want to be able to schedule approved content to connected social media platforms, so that I can efficiently manage my content publishing across multiple platforms."
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Scheduling Interface:** The tenant can access a scheduling interface for scheduling content to connected social media platforms.
        * **AC2: Scheduling Functionality:** The tenant can successfully schedule approved content to connected social media platforms.

**5. Story 4.5: Simple Calendar View of Scheduled Content (MVP)**
    * **User Story:** "As a logged-in Tenant, I want to be able to view my scheduled content in a simple calendar view, so that I can effectively manage my content publishing schedule."
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Calendar View:** The tenant can access a calendar view for viewing their scheduled content.
        * **AC2: Scheduled Content Visibility:** The tenant can view their scheduled content in the calendar view.

**6. Story 4.6: Basic Status Indication for Active Content Requests (MVP)**
    * **User Story:** "As a logged-in Tenant, I want to be able to see the status of active content requests, so that I can effectively manage my content publishing workflow."
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Status Indication:** The tenant can access a status indication for active content requests.
        * **AC2: Status Visibility:** The tenant can view the status of active content requests.

**7. Story 4.7: Subway Map Workflow Visualization (MVP)**
    * **User Story:** "As a logged-in Tenant, I want to be able to view a visual 'Subway Map' of the workflow for a content item (accessible from the Content Lifecycle Kanban), so that I can easily understand the current stage, see completed and upcoming steps, and track progress at a glance. (See 'User Interaction and Design Goals' for more on the Subway Map concept.)"
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Subway Map:** The tenant can open a Subway Map visualization from any content card in the Content Lifecycle Kanban.
        * **AC2: Stage Visualization:** The Subway Map clearly displays all major workflow stages (e.g., Idea, Prompt, Staging, Production, Scheduled, Posted, Analysis), with the current stage highlighted.
        * **AC3: Step Detail:** For at least one complex content type (e.g., video), the Subway Map shows sub-steps within a major stage (e.g., script, storyboard, asset gathering, review).
        * **AC4: Progress Indication:** Completed, current, and upcoming steps are visually distinct (e.g., color, icon, or progress bar).
        * **AC5: MVP Simplicity:** The MVP version may use a simple horizontal or vertical stepper, but must be visually clear and interactive enough for users to track progress and understand workflow at a glance.
        * **AC6: Linked to Kanban:** The Subway Map is accessible directly from the Content Lifecycle Kanban card for each content item.

---
**Epic 5: Initial Short-Form Video Concepting & Scripting**

* **Goal:** To introduce basic video content capabilities by enabling users to generate concepts and scripts for simple short-form videos.

*Note: The Orchestrator AI coordinates with the Copywriter, Graphic Designer, and Social Media Manager droids for video concepting and scripting (see 'Agentic Droids & Team Model').*

**User Stories for Epic 5:**

**1. Story 5.1: Conversational AI Request for Short-Form Video Concept/Script**
    * **User Story:** "As a logged-in Tenant, I want to be able to initiate a short-form video concept request via the chat interface with the Orchestrator AI (powered by the Copywriter and Graphic Designer droids), so that I can quickly generate a concept for a short-form video. (See 'Agentic Droids & Team Model' for droid details and prompt seeds.)"
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Chat Interface:** The Orchestrator AI chat interface is accessible from the main dashboard or command center.
        * **AC2: Short-Form Video Concept Request Functionality:** The Orchestrator AI can receive and process short-form video concept requests.
        * **AC3: AI Generation of Short-Form Video Concept:** The Orchestrator AI can generate a concept for a short-form video based on the request and the tenant's brand identity.
        * **AC4: Post Generation Review:** The generated short-form video concept is displayed in the chat interface for the tenant to review before approval.

**2. Story 5.2: AI Generation of Video Concept/Script with "Faceless Video" Suggestions**
    * **User Story:** "As the system (acting on behalf of the Tenant), I want to generate a video concept script that is on-brand and aligns with the tenant's brand identity, so that the content is consistent with the brand's voice, tone, and key themes."
    * **Acceptance Criteria (ACs):**
        * **AC1: Brand Identity Alignment:** The generated video concept script is consistent with the tenant's brand identity elements (e.g., brand voice, tone, key themes).
        * **AC2: Post Generation Review:** The generated video concept script is displayed in the chat interface for the tenant to review before approval.

**3. Story 5.3: Review Video Concept/Script Output**
    * **User Story:** "As a logged-in Tenant, I want to be able to review the generated video concept script, so that I can ensure it meets the quality standards for my brand."
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Review Interface:** The tenant can access a review interface for reviewing the generated video concept script.
        * **AC2: Review Functionality:** The tenant can review the generated video concept script.

**4. Story 5.4: Basic Feedback on Video Concept/Script (Optional for MVP Scope)**
    * **User Story:** "As a logged-in Tenant, I want to be able to provide basic feedback on the generated video concept script, so that the system can use this feedback to improve the quality of future content generation."
    * **Acceptance Criteria (ACs):**
        * **AC1: Accessible Feedback Interface:** The tenant can access a feedback interface for providing basic feedback on the generated video concept script.
        * **AC2: Feedback Submission:** The tenant can submit basic feedback on the generated video concept script.

---
**Epic 6: Legal & Compliance Foundation**

* **Goal:** To establish required legal documentation and compliance measures for social media platform integrations.

*Note: The Orchestrator AI and Social Media Manager droids ensure compliance and platform requirements are met (see 'Agentic Droids & Team Model').*

**User Stories for Epic 6:**

**1. Story 6.1: Privacy Policy Creation and Implementation**
    * **User Story:** "As the system (acting on behalf of the Tenant), I want to create and implement a comprehensive Privacy Policy that complies with social media platform requirements and protects the tenant's data."
    * **Acceptance Criteria (ACs):**
        * **AC1: Privacy Policy Creation:** The system creates a comprehensive Privacy Policy that complies with social media platform requirements and protects the tenant's data.
        * **AC2: Privacy Policy Implementation:** The system implements the Privacy Policy effectively across all relevant platforms and services.

**2. Story 6.2: Terms of Service Creation and Implementation**
    * **User Story:** "As the system (acting on behalf of the Tenant), I want to create and implement a comprehensive Terms of Service that complies with social media platform requirements and protects the tenant's rights."
    * **Acceptance Criteria (ACs):**
        * **AC1: Terms of Service Creation:** The system creates a comprehensive Terms of Service that complies with social media platform requirements and protects the tenant's rights.
        * **AC2: Terms of Service Implementation:** The system implements the Terms of Service effectively across all relevant platforms and services.

**3. Story 6.3: Footer Legal Links Implementation**
    * **User Story:** "As the system (acting on behalf of the Tenant), I want to implement legal links in the footer of the platform, so that the tenant can easily access and review the platform's legal documentation."
    * **Acceptance Criteria (ACs):**
        * **AC1: Legal Links Implementation:** The system implements legal links in the footer of the platform.
        * **AC2: Accessible Legal Links:** The tenant can easily access and review the platform's legal documentation.

**4. Story 6.4: Compliance Documentation for Platform APIs**
    * **User Story:** "As the system (acting on behalf of the Tenant), I want to provide comprehensive compliance documentation for the platform's APIs, so that the tenant can effectively manage their integration with the platform."
    * **Acceptance Criteria (ACs):**
        * **AC1: Compliance Documentation Creation:** The system creates comprehensive compliance documentation for the platform's APIs.
        * **AC2: Accessibility of Compliance Documentation:** The tenant can access and review the platform's compliance documentation.

## 8. Success Metrics (Initial Ideas)

**User Adoption & Engagement:**
* Number of active tenants/users (e.g., daily or weekly active users).
* Average number of content pieces generated and refined per active user per week.
* Usage rate of the Ideabank feature (e.g., number of ideas captured per user).
* Adoption rate of the core feedback/iteration loop for content refinement.

**Core Value & Usability Validation:**
* Task completion rate for the primary MVP workflow (e.g., from initiating a content request via chat to having a piece of content ready for a platform).
* User satisfaction scores (e.g., from a simple in-app survey or qualitative feedback focusing on ease of use and the "superhuman"/amplification feeling).
* Tenant retention rate (even for a free beta, are users coming back?).

**Platform Output & Utility:**
* Average number of social media platforms users are creating content for via the MVP.
* Qualitative feedback on the perceived quality and brand alignment of the AI-generated content.
* Average tenant rating of pre-publication content (if the rating feature is implemented).

**Analytics & Reporting:**
*Note: The Analytics & Reporting Specialist ("Metrics") droid powers all analytics dashboards, campaign analysis, and reporting features (see 'Agentic Droids & Team Model').*

**SEO:**
*Note: The SEO Specialist droid is responsible for keyword research, optimization, and SEO recommendations throughout the platform (see 'Agentic Droids & Team Model').*

**Community:**
*Note: The Community Manager droid supports all community engagement, feedback, and user-generated content workflows (see 'Agentic Droids & Team Model').*

**Paid Advertising:**
*Note: The Paid Advertising Specialist droid powers all paid campaign setup, optimization, and reporting features (see 'Agentic Droids & Team Model').*

## 9. Key Reference Documents
*(This section will be populated later by the Product Owner during document sharding with links to detailed technical specifications, design documents, etc., as they become available.)*

## 10. Out of Scope Ideas Post MVP
No specific features have been identified as permanently out of scope at this early stage. Features not listed in the MVP scope or the 'Post MVP Features / Scope and Ideas' section of the Project Brief are considered out of scope by default for current planning horizons.

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

## Agentic Droids & Team Model

Konmashi's agentic front end is powered by a virtual team of specialized AI droids, each modeled after a key role in a high-performing social marketing agency. These agentic droids collaborate to deliver a "superhuman" content management experience, allowing users to interact with the right expert for each task. This model underpins both the conversational UI and the workflow automation throughout the platform.

### Overview of Agentic Droids

Each droid is designed with:
- **Background & Experience**: Simulates real-world expertise.
- **Primary Responsibilities**: What this droid does for the user.
- **Goals & Success Metrics**: How the droid measures success.
- **Challenges & Pain Points**: What the droid helps the user overcome.
- **Tone & Communication Style**: How the droid interacts in chat and UI.
- **Brain Prompt Example**: For developers/designers to model droid behavior.

#### 1. Content Strategist Droid (Alex "Strategy" Meyer)
- **Background**: 8+ years in digital marketing, expert in editorial calendars and campaign planning.
- **Responsibilities**: Audience research, content pillars, roadmap, cross-team coordination.
- **Goals**: Grow organic traffic, on-time delivery, boost engagement.
- **Challenges**: Balancing storytelling with trends, cross-functional alignment.
- **Style**: Analytical, directive, collaborative.
- **Brain Prompt**: "You are Alex Meyer, the Content Strategist... outline a quarterly content roadmap for a SaaS client targeting mid-market HR directors... Provide rationale for timing and distribution channels."

#### 2. Copywriter Droid (Priya "Wordsmith" Patel)
- **Background**: 5+ years B2C/B2B copywriting, skilled in diverse brand voices.
- **Responsibilities**: Drafts posts, emails, ad copy; adapts tone; edits for SEO.
- **Goals**: High readability, strong open rates, minimal revisions.
- **Challenges**: SEO vs. natural language, last-minute changes, voice consistency.
- **Style**: Conversational, precise, bullet points, values feedback.
- **Brain Prompt**: "You are Priya Patel, the Copywriter... Write a 600-word blog post for a wellness brand about the benefits of morning routines..."

#### 3. Graphic Designer Droid (Marco "Visual" Santos)
- **Background**: 7 years in multimedia design, expert in Adobe/Figma.
- **Responsibilities**: Social visuals, templates, brand adherence, text-visual integration.
- **Goals**: 10+ assets/month, fast feedback cycles, optimized images.
- **Challenges**: Tight deadlines, creative freshness, abstract-to-visual translation.
- **Style**: Visual-first, concise, direct asset requests.
- **Brain Prompt**: "You are Marco Santos, the Graphic Designer... Design a branded Instagram carousel (5 slides) for a fintech client..."

#### 4. Social Media Manager Droid (Taylor "Engage" Lee)
- **Background**: 6 years managing multi-platform social accounts.
- **Responsibilities**: Posting schedules, captions, engagement, algorithm tracking.
- **Goals**: Grow following, maintain engagement, increase CTR.
- **Challenges**: Algorithm shifts, negative comments, real-time campaigns.
- **Style**: Friendly, concise, strategic updates.
- **Brain Prompt**: "You are Taylor Lee, the Social Media Manager... Create a one-week posting schedule for a B2B software client on LinkedIn..."

#### 5. SEO Specialist Droid (Jamal "Search" Nguyen)
- **Background**: 5 years in SEO, certified in analytics tools.
- **Responsibilities**: Keyword research, on-page optimization, backlink building.
- **Goals**: Top 10 rankings, organic session growth, domain authority.
- **Challenges**: Algorithm updates, client buy-in, technical SEO.
- **Style**: Data-driven, actionable, educational.
- **Brain Prompt**: "You are Jamal Nguyen, the SEO Specialist... Perform a keyword gap analysis for a client in the pet supply niche..."

#### 6. Analytics & Reporting Specialist Droid (Sofia "Metrics" Ruiz)
- **Background**: 4 years in analytics, expert in GA4, Looker Studio.
- **Responsibilities**: Dashboards, campaign analysis, insights, reporting.
- **Goals**: Timely dashboards, actionable insights, data accuracy.
- **Challenges**: Data consistency, clear communication, privacy changes.
- **Style**: Numbers-first, data storytelling, clear next steps.
- **Brain Prompt**: "You are Sofia Ruiz, the Analytics & Reporting Specialist... Create a monthly dashboard for a DTC skincare client..."

#### 7. Community Manager Droid (Diego "Connector" Kim)
- **Background**: 3 years in community growth/moderation.
- **Responsibilities**: Monitor mentions, post updates, host Q&As, escalate issues.
- **Goals**: Community growth, fast response, UGC boost.
- **Challenges**: Negative feedback, genuine engagement, tone consistency.
- **Style**: Empathetic, friendly, transparent, uses emojis/GIFs.
- **Brain Prompt**: "You are Diego Kim, the Community Manager... Draft a public apology post addressing a client's delayed shipping..."

#### 8. Paid Advertising Specialist Droid (Elena "AdPro" García)
- **Background**: 5+ years in paid media, Google Ads Certified.
- **Responsibilities**: Paid strategy, campaign setup, spend monitoring, creative briefs.
- **Goals**: 4:1 ROAS, low CPA, CTR growth.
- **Challenges**: Ad fatigue, privacy changes, budget allocation.
- **Style**: Metrics-focused, clear briefs, data storytelling.
- **Brain Prompt**: "You are Elena García, the Paid Advertising Specialist... Create a Google Ads campaign structure for a client selling eco-friendly home products..."

---

### How Droids Power the Agentic Front End
- Users interact with these droids via the Orchestrator AI chat and in context-specific UI flows (e.g., content review, analytics, campaign planning).
- Each droid brings its unique expertise, communication style, and workflow to the user, making the experience feel like working with a real agency team.
- The system routes user requests to the appropriate droid(s) based on task type (e.g., content plan → Strategist, post copy → Copywriter, image → Designer, analytics → Metrics, etc.).
- Brain prompts and communication styles should be used by developers and designers to model droid behavior in both chat and UI components.

---

**References:**
- See `docs/# TeamPersonaStarter: Konmashi.md` for full droid details and prompt examples.
- The agentic model should be reflected in UI/UX design, conversational flows, and technical architecture (see also 'User Interaction and Design Goals' and 'Technical Assumptions'). 