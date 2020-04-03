# prm-deductions-portal-administration

Administration Portal is a web application used for admin staff - as part of Service Monitoring and Administration.

Link [to dev site - health ](https://dev.admin.patient-deductions.nhs.uk/health) - you will need VPN access.

## Prerequisites

- [Node](https://nodejs.org/en/download/package-manager/#nvm) - version 12.x
- [Docker](https://docs.docker.com/install/)
- [kudulab/dojo](https://github.com/kudulab/dojo#installation)

## Directories

| Directory        | Description                                       |
| :--------------- | :------------------------------------------------ |
| /docs            | Contains documentation such as Plantuml diagrams  |
| /test/docker     | Contains smoke test for docker                    |
| /test/functional | Contains end-to-end tests                         |
| /gocd            | Contains the GoCD pipeline files                  |
| /src             | The source code                                   |
| /terraform       | Terraform to deploy app as a Fargate task in AWS  |
| /scripts         | Useful scripts (e.g. for sending canary messages) |

## Starting the app

### Locally

1. Run `npm install` to install all node dependencies.
2. Run `npm run start:local`
3. If successful, you will be able to reach the Swagger docs: [http://localhost:3000/swagger/](http://localhost:3000/swagger/)

Note: `npm run start:nodemon` can be used to build the app before launching the Express server on port `3000` using [nodemon](https://www.npmjs.com/package/nodemon) - it will watch and reload the server upon any file changes.

### Productions Mode

A Docker image can be built locally with:

1. Run `npm run build`
2. Run `./tasks build_docker_local`. This builds the docker containers `deductions/<component-name>:<commit-no>` and `deductions/<component-name>:latest` with the app in.
3. Run `./tasks test_docker_local` (to ensure the image has been built correctly)
4. Run `./tasks run_docker_local`

## Swagger

The swagger documentation for the app can be found at [http://localhost:3000/swagger](http://localhost:3000/swagger). To update it, change the
`src/swagger.json` file. You can use [this editor](https://editor.swagger.io/) which will validate your changes.

## Tests

### Unit tests

Run the unit tests with `npm run test:unit` (or `npm test` to run it with lint). Alternatively `./tasks test` can be used to run the tests within Dojo.

### Integration tests

Run `./tasks test_integration` to run within Dojo.

### Coverage tests

Runs the coverage tests (unit test and integration test) and collects coverage metrics.

Run `./tasks test_coverage` to run within Dojo.

### Local Docker tests

Run `./tasks test_docker_local`. Make sure you have followed the steps to start the app in production mode beforehand.

### Functional tests

Run `./tasks test_functional`. This will run the end to end tests within [./test/functional](./test/functional). (Note you may need to be connected to VPN).

## Pre-commit Checks

Before commiting, ensure you run the following tests:

1. Unit tests
2. Integration tests
3. Coverage tests
4. Local docker test

#### Environment variables

Below are the environment variables that are automatically set:

- `NHS_ENVIRONMENT` - is set to the current environment ('dev' for OpenTest and 'test' for PTL environment) in which the container is deployed. It is populated by the pipeline.gocd.yml
- `SERVICE_URL` - This is prepopulated by `tasks` and will configure it to service URL according to environment.
- `REPOSITORY_URI` - This is prepopulated by `tasks` (based on `IMAGE_REPO_NAME`)
- `NODE_ENV` - set by the Docker files to be `local`

### Node Scripts

| Goal           | Description                                                                      |
| -------------- | -------------------------------------------------------------------------------- |
| lint           | Lints the server/ files                                                          |
| test:unit      | Runs all unit test_accessibility                                                 |
| test           | Lints and runs all the units tests                                               |
| test:watch     | Runs the unit tests, and watches the files to rerun if neccessary                |
| test:coverage  | Runs all the tests except for the end to end tests and collects coverage metrics |
| build:frontend | Copies the server/public/index.html to the build/ folder                         |
| build:server   | Uses babel build script for code within /server folder                           |
| build          | Runs the build:frontend and build:server scripts                                 |
| start          | Runs the build script and node build/server.js                                   |
| start:local    | Babel start local script to run locally                                          |
| start:nodemon  | Watches files and starts locally                                                 |
| test:access    | Accessibility test using pa11yci                                                 |
| access         | Runs build scripts then accessibility test scripts                               |
