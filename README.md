# prm-deductions-portal-administration

Administration Portal is a web application used for admin staff - as part of Service Monitoring and Administration.

Link [to dev site - health ](https://dev.administration-portal.patient-deductions.nhs.uk/health)

## Directories

| Directory  | Description                                         |
| :--------- | :-------------------------------------------------- |
| /gocd      | Contains the GoCD pipeline file                     |
| /public    | Public files (basic index.html file)                |
| /server    | The ExpressJS server side code that hosts the pages |
| /terraform | Terraform to deploy app as a Fargate task in AWS    |

## Prerequisites

- Node 12.x
- Docker
- homebrew
- [kudulab/dojo](https://github.com/kudulab/dojo) - More information on dojo can be found at [kudulab/dojo GIT](https://github.com/kudulab/dojo). Use `brew install kudulab/homebrew-dojo-osx/dojo`

## Environments

### Node Goals

-- To be filled --

| Goal         | Description                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| clean        | Removes the current build folder                                                      |
| build        | Builds the react app (`src/` and `/public`) into a `build/` folder                    |
| start:react  | Opens a live version of the React app in a browser (port: `3000`)                     |
| serve:react  | Serves the React static pages on port 5000                                            |
| start:server | Builds the react app before launching the Express server on port `3000` using nodemon |
| start        | Builds the react app before launching the Express server on port `3000`               |
| test:react   | Runs the React app tests                                                              |
| test:server  | Runs the Express server tests (`/server`)                                             |
| test         | Runs both the React app tests and the Express server tests                            |
| coverage     | Runs all the tests and collects coverage metrics                                      |
| eject        | Runs `react-scripts eject`                                                            |
| access       | Runs the accessibility tests, server must be running on port `5000`                   |

## Development

### Run locally

