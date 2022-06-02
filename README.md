# FE Clean Architecture

## Overall architecture

Overall architecture follows clean architecture principles.

- Domain layer contains business logic
- Application layer handles commands, queries and data operations
- Infrastructure layer acts as a plug-in to the Application layer and contains the concrete implementation of the services
- User interface handles user interactions

![Architecture](./docs/architecture-dark.png#gh-dark-mode-only)
![Architecture](./docs/architecture-light.png#gh-light-mode-only)

## Composition

Dependency inversion principle is used to compose the app together. Application layer declares the interfaces which are implemented by the Infrastructure layer.

![Composition](./docs/composition-dark.png#gh-dark-mode-only)
![Composition](./docs/composition-light.png#gh-light-mode-only)
