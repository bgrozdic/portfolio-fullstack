# Fullstack Portfolio Application

This project is a personal fullstack portfolio built to showcase my development experience, skills, and technical abilities.

It is designed as a **single-page application (SPA)**, demonstrating real-world fullstack architecture.

---

## Tech Stack

### Frontend

* Angular (SPA)
* TypeScript
* RxJS
* HTML / SCSS

### Backend

* NestJS (REST API)
* Node PostgreSQL (pg)

### Database

* PostgreSQL (hosted via Supabase)

### Deployment 

* Vercel (frontend + backend)
* Supabase (database)

---

##  Features

  **Experience Timeline**

  * Display professional journey in a timeline format
  * Add, update, and delete experiences via API

  **Skills Management**

  * Add skills dynamically
  * Mark skills as favorites
  * Drag & drop ordering 

  **About Section**

  * Editable “About Me” content stored in database

  **Contact Section**

  * Links to LinkedIn, GitHub, and email

---

##  Project Structure

```
portfolio-fullstack/
├── frontend/   # Angular SPA
├── backend/    # NestJS API + PostgreSQL (pg)
└── README.md
```

---

##  Architecture

```
Angular SPA → NestJS API → Prisma ORM → PostgreSQL (Supabase)
```

* Angular handles UI and user interaction
* NestJS exposes REST endpoints (`/api/...`)
* Backend uses pg to execute SQL queries
* PostgreSQL stores application data

---

##  Development Workflow

* Angular runs on `localhost:4200`
* NestJS runs on `localhost:3000`
* Angular uses a proxy to forward `/api` requests to the backend
* Backend communicates with Supabase PostgreSQL using raw SQL queries via pg

