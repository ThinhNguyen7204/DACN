# Enterprise Management Web App

This is a **Next.js 14+ (App Router)** project designed for building a
fully functional enterprise management platform.\
It provides a solid foundation for business operation and administration
systems, including employee management, project tracking, and company
policies.

## 🏗 Tech Stack

-   **Framework:** [Next.js 13+](https://nextjs.org/)
-   **UI Library:** [Material UI (MUI)](https://mui.com/) + TailwindCSS
-   **Database ORM:** [Prisma](https://www.prisma.io/)
-   **API Layer:** Next.js API Routes (RESTful endpoints)
-   **Styling:** TailwindCSS + MUI Theme
-   **Authentication:** NextAuth.js
-   **State Management:** React Context + React Query (optional)
-   **TypeScript:** Fully typed for scalability and maintainability

## 📂 Project Structure

``` bash
src/
 ├── app/           # Next.js App Router pages and layouts
 ├── components/    # Reusable UI components (Sidebar, Topbar, Table, Modal...)
 ├── hooks/         # Custom React hooks
 ├── lang/          # i18n configuration (EN, VI, ...)
 ├── lib/           # Utilities, helpers, constants
 ├── services/      # API call functions (fetchers, mutations)
 └── styles/        # Global styles, theme config
prisma/
 └── schema.prisma  # Database schema
public/             # Static assets (images, icons)
```

## 🚀 Getting Started

### 1️⃣ Install Dependencies

``` bash
npm install
# or
yarn install
```

### 2️⃣ Configure Environment Variables

Copy `.env.example` to `.env` and fill in the required values:

``` bash
cp .env.example .env
```

### 3️⃣ Database Setup

``` bash
npx prisma generate
npx prisma db push
# (Optional) seed the database
npx prisma db seed
```

### 4️⃣ Run the Development Server

``` bash
npm run dev
```

Visit <http://localhost:3000> to see the app.

## 📌 Features (Planned & Implemented)

-   ✅ Responsive **Sidebar + Topbar** layout
-   ✅ Employee Management Module (List, Filter, Search)
-   ✅ MUI-based Table, Pagination, Drawer, Dialog
-   🚧 Authentication (NextAuth + Role-based Access)
-   🚧 Project, Tasks, and Policies modules
-   🚧 Dashboard with analytics

## 📜 Scripts

  Script              Description
  ------------------- ---------------------------
  `dev`               Start development server
  `build`             Build production bundle
  `start`             Start production server
  `lint`              Run ESLint checks
  `prisma generate`   Generate Prisma client
  `prisma db push`    Sync schema with database

## 📄 License

MIT License - feel free to use and modify for your business needs.

------------------------------------------------------------------------

💡 **Note:** This is a starter boilerplate designed to be easily
extended for enterprise resource management (HR, Projects, Policies).
Contributions and PRs are welcome!
