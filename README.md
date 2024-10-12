# Cypress Test Automation Portfolio

This repository contains a collection of test automation examples built using Cypress, showcasing skills in UI automation testing, API testing, and end-to-end testing.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
- [CI/CD Integration](#cicd-integration)
- [Best Practices](#best-practices)

## Introduction

This portfolio is a demonstration of automated testing skills using Cypress. It includes tests for different functionalities commonly found in web applications, and is intended to highlight expertise in creating robust, maintainable automated tests.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js >= 14.x
- npm or Yarn
- Git

To verify Node.js is installed, run:

```sh
node -v
```

## Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd cypress-portfolio
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

   This will install Cypress and any other required packages.

## Folder Structure

The project follows a structured approach:

```
cypress/
├── page_objects/          # Page Object Model (POM) classes for UI testing
│   ├── CartPage.ts
│   ├── CheckoutCompletePage.ts
│   ├── CheckoutStepOnePage.ts
│   ├── CheckoutStepTwoPage.ts
│   ├── InventoryPage.ts
│   └── LoginPage.ts
├── plugins/               # Cypress plugin setup
│   └── index.ts
├── screenshots/           # Screenshots captured during test runs
│   └── inventory.ts
├── support/               # Helper functions and custom commands
│   ├── ApiHelper.ts       # Helper class for API interactions
│   ├── commands.ts        # Custom Cypress commands
│   └── e2e.ts             # End-to-end support setup
├── tests/                 # Test files for both UI and API tests
│   ├── api/               # API tests
│   ├── e2e/               # End-to-end tests
│   └── integration/       # Integration (UI) tests
├── .github/               # GitHub Actions workflows
│   └── workflows/         # CI/CD workflow files
│       └── cypress-ci.yml # CI/CD pipeline configuration
├── tsconfig.json          # TypeScript configuration
├── cypress.config.ts      # Cypress configuration file
└── package.json           # Project dependencies
```

## Running Tests

To run tests locally, you can use the following commands:

- **Run All Tests**:

  ```sh
  npx cypress run
  ```

- **Run Specific Tests**:

  ```sh
  npx cypress run --spec "cypress/tests/integration/example.ts"
  ```

- **Run Tests in the Cypress Test Runner**:

  ```sh
  npx cypress open
  ```

## Writing Tests

This portfolio showcases different types of automated tests:

- **UI Tests**: These tests validate the user interface interactions and behaviors.
- **API Tests**: Validate REST API endpoints using Cypress's built-in request capabilities.
- **End-to-End Tests**: Verify complete workflows in the application, such as logging in and completing a purchase.

## CI/CD Integration

This repository is configured to run tests in a continuous integration pipeline using GitHub Actions. The workflow file (`cypress-ci.yml`) is located in the `.github/workflows` directory.

### Example CI/CD YAML File

```yaml
name: Cypress Tests CI

on:
  push:
    branches:
      - master
  pull_request:
    branches:
      - master

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 14

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests
        run: npx cypress run

      - name: Upload Cypress test results
        if: failure()
        uses: actions/upload-artifact@v3
        with:
          name: cypress-failure-report
          path: cypress/screenshots
```

## Best Practices

- Use the Page Object Model (POM) pattern for UI tests.
- Separate API tests from UI tests to ensure modularity.
- Make use of Cypress commands for reusable code.
- Run tests in headless mode in CI to reduce resource consumption.
- Utilize Cypress's built-in screenshot and video features to debug test failures.

## Contributing

Feel free to fork this repository and submit a pull request if you want to contribute.
