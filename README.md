# Jedel Backend

<img width="1715" height="953" alt="diagram" src="https://github.com/user-attachments/assets/9a4f14d3-2e03-46f9-bb41-df12ee45f07c" />

Backend for a realtime on-demand service (Uber-like system for workers).

Inspired by Yandex Taxi and Uber systems.

## Overview

This project is an experimental backend for a platform where users can request nearby workers and track them in real time.

For example, if you are in the middle of the road and need to quick repair your car, you can reach for master via the app and track his position.

The main goal of this project is not just to build a working API, but to explore system design, clean architecture, and event-driven patterns.

## Current Features

- Create order
- Get order by id
- Basic order lifecycle
- In-memory storage (temporary)

## Order Lifecycle

SEARCHING → ASSIGNED → ON_THE_WAY → ARRIVED → IN_PROGRESS → COMPLETED

## Project Structure

src/
  modules/
    orders/ # order domain
  core/ # shared modules (config, etc.)

## Tech Stack

- NestJS
- TypeScript

### Planned:
- PostgreSQL
- Redis
- Kafka
- WebSocket (realtime tracking)

## How to run

```bash
yarn install
yarn start:dev
```
Server runs on: http://localhost:3000

## Roadmap

- [x] Basic order flow
- [ ] Add tests
- [ ] Add PostgreSQL
- [ ] Introduce repository layer
- [ ] Add WebSocket tracking
- [ ] Add Redis (geo + state)
- [ ] Add Kafka (events, notifications)

---

## Notes

This project starts as a modular monolith and may gradually evolve into a more distributed architecture.

The focus is on:

- clear domain modeling  
- separation of concerns  
- incremental complexity  
