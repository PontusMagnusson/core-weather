# ClimaMundi

This is a small weather application built with .NET Core 2.2 as a final project at IT-Högskolan in Gothenburg.

| Master | Develop |
| ----- | ----- |
| [![Build Status](https://dev.azure.com/pontusmagnusson/pontusmagnusson/_apis/build/status/PontusMagnusson.core-weather?branchName=master)](https://dev.azure.com/pontusmagnusson/pontusmagnusson/_build/latest?definitionId=1&branchName=master) | [![Build Status](https://dev.azure.com/pontusmagnusson/pontusmagnusson/_apis/build/status/PontusMagnusson.core-weather?branchName=develop)](https://dev.azure.com/pontusmagnusson/pontusmagnusson/_build/latest?definitionId=1&branchName=develop)

## Purpose

This app was built to showcase my ability to write clean applications, using technologies I've learned over the past two years. I've limited the projects scope to ease documentation and evaluation. 

## Technologies used (so far)

- .NET Core 2.2
    - Serilog
- Docker
- Nginx
- Azure DevOps Pipelines

- Apis
    - DarkSky
    - Mapbox

## How to run

Prerequisites:
- Docker
- Fontawesome Pro License

### With Docker

Since I haven't hosted images anywhere, you'll need to build them locally.

In the `/ClimaMundi` folder, place an `.env` file with your API keys for DarkSky and Mapbox
```
DarkSkyApiKey=YourKeyHere 
MapBoxApiKey=YourKeyHere
```

In the `/web` folder, place an `.npmrc` file with the following content
```
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=YourFontAwesomeProTokenHere
```

In the root of this repo, run the following
```bash
docker-compose up
```

## Contributing

To run the project in development mode, run the following line
```bash
docker-compose -f docker-compose-dev.yml up --force-recreate --build
```

You will need to run this every time you make changes to the .NET components of the project. If you are making changes to the React project it will rebuild them automatically, so you do **not** have to restart the containers.

This will force Docker to rebuild the container so that all changes register.

Optionally you can add the `-d` flag, which will run the project detached (no output in terminal). To stop it when running in detached mode, run:
```bash
docker-compose down
```

## Useful commands

In some cases the containers won't build properly, and some errors might get cached. In this case it might be good to remove unused images by running:
```bash
docker image prune
docker-compose up --force-recreate --build
```