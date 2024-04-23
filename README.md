# Zod Usage

- NextJS with API Route handlers, Server Action
- Drizzle ORM
- React Hook form

## Simple product listing with creation to display zod capability in validation and having a central schema

## Todo

- [x] GET API response
- [x] Form input
- [x] POST API - Backend layer
- [] Drizzle ORM layer
  - [x] setup docker compose
  - [x] pass secret by configuration using dotenv
  - [x] setup initial local drizzle migration generate
  - [x] setup drizzle migration push to docker postgres container
  - [] toggle between local and dev migration

## Running locally

1. `cp .env.example env.local`
2. Populate the values `DATABASE_URL`, `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`
3. `docker-compose --env-file .env.local up` to spin up postgres db container
4. `npm run migration:push` to push migration files into local postgres db container
5. `npm dev` and view `http://localhost:3000`
