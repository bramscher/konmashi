# Team-Based Data Isolation & Admin Access Test Plan

This document outlines the test plan for ensuring proper data isolation and role-based access control (RBAC) in all team-scoped API endpoints.

## Test Categories

### A. Access Control
- Only authenticated users can access the endpoint.
- Only users who are members of a team can access that team's data.

### B. Data Isolation
- Users cannot access or modify data for teams they are not a member of.
- Data returned is always filtered by the user's teamId.

### C. Admin Enforcement
- Only ADMIN users can perform admin-only actions (e.g., invite, remove, or change roles of team members, delete brands, etc.).
- Non-admins are denied access to admin endpoints/features.

### D. UI Enforcement (if testing UI)
- Admin features (buttons, links, etc.) are not visible to non-admins.

### E. Multi-Team Membership
- Users who belong to multiple teams can only access data for the currently selected team.
- Switching teams updates the data context and enforces isolation.

---

## Example Test Plan Table

| Test Case Description | Endpoint | User Role | Expected Result |
|----------------------|----------|-----------|----------------|
| Auth required        | /api/brand-identity | Unauthenticated | 401 Unauthorized |
| Team member access   | /api/brand-identity | Team MEMBER     | 200 OK, only their team's data |
| Cross-team denial    | /api/brand-identity | Member of other team | 403/404/empty |
| Admin-only action    | /api/team/members   | Non-ADMIN       | 403 Forbidden |
| Admin action allowed | /api/team/members   | ADMIN           | 200 OK        |
| Multi-team switch    | /api/brand-identity | Multi-team user | Data matches selected team |

---

## Recommendations

- Prefer in-code automated tests (Jest + Supertest or Next.js API test utils) for backend API endpoints.
- Use Postman for manual/exploratory testing or sharing with non-developers.
- Automated tests are more maintainable and catch regressions early.

---

_This plan can be expanded as new endpoints and features are added._ 