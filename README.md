# Portfolio Server

A backend server for a portfolio website built with Express.js and MongoDB,
providing API endpoints for projects, blogs, messages, and user authentication.

## Tech Stack

- **Runtime**: [Bun](https://bun.sh) - A fast all-in-one JavaScript runtime
- **Framework**: Express.js 5.1.0
- **Database**: MongoDB (via Mongoose 8.15.0)
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcrypt
- **Validation**: Zod
- **Email**: Nodemailer
- **TypeScript**: For type safety and better developer experience

## API Routes

### Public Routes

- **Projects**

  - `GET /api/public/projects` - Get all projects
  - `GET /api/public/projects/:id` - Get a single project by ID

- **Blogs**

  - `GET /api/public/blogs` - Get all blogs
  - `GET /api/public/blogs/:id` - Get a single blog by ID

- **Messages**
  - `POST /api/public/message` - Send a message

### Admin Routes (Protected)

- **Authentication**

  - `POST /api/admin/auth` - Authentication endpoints

- **Users**

  - `GET /api/admin/users` - User management endpoints

- **Projects**

  - `POST, PUT, DELETE /api/admin/projects` - Project management endpoints

- **Blogs**

  - `POST, PUT, DELETE /api/admin/blogs` - Blog management endpoints

- **Messages**
  - `GET, DELETE /api/admin/messages` - Message management endpoints

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (v1.2.11 or higher)
- MongoDB instance (local or cloud)

### Installation

1. Clone the repository

```bash
git clone [repository-url]
cd portfolio-server
bun install
cp .env.example .env
bun run dev
bun run build
bun run prod
```

##Links

- [Client Public Repository](https://github.com/PallabKumarS/portfolio-client)
- [Client Public Repository](https://github.com/PallabKumarS/portfolio-client-admin)
- [Live Server](https://pks-portfolio-server.vercel.app)
