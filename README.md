# ind-edu

## About

The official homepage for ini dream, designed to provide comprehensive information and engaging visual content about our initiatives.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- Node.js (Preferably the latest LTS version)
- npm (Comes with Node.js)

## Installation

Follow these steps to get your development environment set up:

### 1.Clone the repository

First, clone the project repository from GitHub to your local machine:

```bash
git clone https://github.com/yourgithubusername/ind-edu.git
cd ind-edu
```

#### 2.Install dependencies

Navigate into the project directory and install the required npm packages:

```bash
npm install
```

This command reads the package.json and package-lock.json files and installs all the required packages into the node_modules directory.

### 3.ESLint and Husky Setup

This project uses ESLint to enforce code style and consistency, and Husky to ensure all commits meet the quality standards before they can be pushed.

- ESLint is configured to enforce best practices and error checking. The configuration can be found in .eslintrc.js.
- Husky is set up with pre-commit hooks to run ESLint checks. If the checks fail, the commit will be aborted.

### 4.Build the Project

Compile the TypeScript files and build the project using:

```bash
npm run build
```

This command triggers the TypeScript compiler to convert TypeScript code into JavaScript according to the settings defined in tsconfig.json. The output will be placed in the dist directory.

### 5.Start the Application

To start the server and launch the project, use:

```bash
npm start
```

This command runs the script defined under start in package.json, typically starting up a local development server where you can view the project in your web browser.

## Development

- Not yet. `npm start` is currently same as `npm run dev`