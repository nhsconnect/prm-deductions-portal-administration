# prm-deductions-portal-administration

Administration Portal is a web application used for admin staff - as part of Service Monitoring and Administration.

Link [to dev site - health ](https://dev.admin.patient-deductions.nhs.uk/health)

## Directories

| Directory  | Description                                         |
| :--------- | :-------------------------------------------------- |
| /gocd      | Contains the GoCD pipeline file                     |
| /server    | The ExpressJS server side code that hosts the pages |
| /terraform | Terraform to deploy app as a Fargate task in AWS    |

## Prerequisites

- Node 12.x
- Docker
- homebrew
- [kudulab/dojo](https://github.com/kudulab/dojo) - More information on dojo can be found at [kudulab/dojo GIT](https://github.com/kudulab/dojo). Use `brew install kudulab/homebrew-dojo-osx/dojo`

## Environments

### Node Goals

| Goal                | Description                                                                |
| ------------------- | -------------------------------------------------------------------------- |
| lint                | Lints the server/ files                                                    |
| test-unit           | Runs unit tests and excludes the smoke test                                |
| test                | Runs all the tests                                                         |
| test-smoke          | Runs the smoke test (also involves running build script concurrently)      |
| test--watch         | Runs the unit tests, and watches the files to rerun if neccessary          |
| test-coverage       | Runs all the tests except for the smoke test and collects coverage metrics |
| clean               | Removes the current build folder                                           |
| build:frontend      | Copies the server/public/index.html to the build/ folder                   |
| build:server        | Uses babel build script for code within /server folder                     |
| build               | Runs the build:frontend and build:server scripts                           |
| start               | Runs the build script and node build/server.js                             |
| start-local         | Babel start local script                                                   |
| start-local-nodemon | Watches files and starts                                                   |
| test-access         | Accessibility test using pa11yci                                           |
| access              | Runs build scripts then accessibility test scripts                         |

## Development

### Run locally

1. Install relevant dependencies with `npm install`
2. Run using `npm run start` or `./tasks run_local`
3. Should be accessible using http://localhost:3000/

### Test using node-dojo

To run before committing, runs the tests and accessibility tests within the node-dojo environment.

If a new page needs testing, add it to the array of URLs in the `.pa11yci.json` file.

```bash
# Installs relevant dependencies
npm install

# Runs tests in node-dojo
./tasks test

# Runs tests with coverage in node-dojo
./tasks coverage

# Runs accessibility tests in node-dojo
./tasks access_test

# Runs smoke tests in node-dojo
./tasks smoke_test
```
