# LeadBlocks Dashboard

A full-stack lead management system built for LeadBlocks, featuring authentication, CRUD operations, and real-time filtering.

**Live Demo:** [https://lead-block-assessment.vercel.app](https://lead-block-assessment.vercel.app)

## Tech Stack

**Frontend:**
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Shadcn/ui components
- Axios for API calls

**Backend:**
- Next.js API Routes
- PostgreSQL (Supabase)
- Drizzle ORM
- JWT authentication
- bcryptjs for password hashing

## Why These Choices?

**Next.js over separate frontend/backend:** Simplified deployment, built-in API routes, better SEO potential, and faster development.

**Drizzle ORM:** Type-safe, lightweight, great TypeScript support, and easier migrations than Prisma for this scope.

**PostgreSQL (Supabase):** Free tier, reliable, scalable, and better than JSON files for production-ready apps.

**Client-side filtering:** Better UX with instant results, reduces API calls, and works great for small-medium datasets.

## Getting Started

### Prerequisites

- Node.js 18+
- Supabase account (or any PostgreSQL database)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nomanmujahid1144/lead-block-assessment.git
cd leadblocks-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create `.env.local` file:
```env
DATABASE_URL=your_supabase_postgres_connection_string
JWT_SECRET=your-super-secret-jwt-key
```

4. Generate and push database schema:
```bash
npm run db:generate
npm run db:push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and create an account.

## Features

- ✅ JWT authentication (register/login/logout)
- ✅ Full CRUD operations for leads
- ✅ Client-side filtering (status + search)
- ✅ Responsive design (mobile-first)
- ✅ LeadBlocks brand styling
- ✅ Protected routes
- ✅ Type-safe database queries

## What I'd Do Differently With More Time

1. **Add pagination:** Currently loading all leads - would implement cursor-based pagination for scalability
2. **Better error handling:** Add toast notifications instead of alerts
3. **Input validation:** Use Zod for schema validation on both client and server
4. **Tests:** Add unit tests (Jest) and E2E tests (Playwright)
5. **Rate limiting:** Protect API endpoints from abuse
6. **Audit logs:** Track who created/updated/deleted leads
7. **Export functionality:** Let users export leads to CSV/Excel
8. **Bulk operations:** Select multiple leads for bulk status updates or deletion
9. **Search optimization:** Add debouncing to search input
10. **Dark mode:** Implement theme switching

## Time Spent

- **Core Features (Auth + CRUD):** 2 hours
- **Styling & Responsiveness:** 2 hours

**Total:** ~4 hours

## Database Schema

**Users:**
- id, email, password (hashed), name, createdAt

**Leads:**
- id, name, company, email, status, createdAt, updatedAt

## API Endpoints

**Auth:**
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user

**Leads:**
- `GET /api/leads` - Get all leads
- `POST /api/leads` - Create lead
- `PUT /api/leads/[id]` - Update lead
- `DELETE /api/leads/[id]` - Delete lead

## Notes

- Built with scalability in mind (easy to add more features)
- All components are reusable and well-typed
- Following Next.js 15+ best practices (async params, etc.)
- Mobile-responsive with proper breakpoints

---

**Contact:** Noman Mujahid - nomanmujahid.cs@gmail.com