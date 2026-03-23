# ADR 001: Initial architecture choice

## Context

The goal of this project is to build a backend for a realtime on-demand service (similar to Uber, but for workers).

At the current stage, the system needs to support:
- order creation
- order lifecycle management
- future worker assignment and realtime tracking

There are multiple possible approaches:
- start with microservices
- build a modular monolith first
- go fully event-driven from the beginning

## Decision

Start with a **modular monolith using NestJS**.

## Rationale

At this stage, the focus is on:
- understanding the domain
- defining clear business logic
- iterating quickly

Using microservices from the beginning would introduce unnecessary complexity:
- service communication
- deployment overhead
- harder debugging

A modular monolith allows:
- faster development
- simpler structure
- easier refactoring

## Consequences

### Positive

- faster iteration
- simpler setup
- easier to reason about business logic

### Negative

- limited scalability in current form
- tighter coupling between modules

## Future evolution

The system is expected to evolve gradually:

- introduce PostgreSQL for persistence
- add Redis for realtime state and geo queries
- introduce Kafka for event-driven communication
- extract services if needed (matching, notifications)

The current architecture is designed to allow this transition without rewriting core logic.