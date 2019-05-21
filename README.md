# ClimaMundi

This is a small weather application built with .NET Core 2.2 as a final project at IT-Högskolan in Gothenburg.

## Purpose

This app was built to showcase my ability to write clean applications, using technologies I've learned over the past two years. I've limited the projects scope to ease documentation and evaluation. 

## Technologies used (so far)

- .NET Core 2.2
- Docker

## How to run

### With Docker

In the root of this repo, run the following
```bash
docker-compose up
```

### Without Docker

- *Whole bunch of steps here eventually*


## Contributing

To run the project in development mode, run the following line
```bash
docker-compose -f docker-compose-dev.yml up --force-recreate --build
```

This will force Docker to rebuild the container so that all changes register.

Optionally you can add the `-d` flag to the command, which will run the project detached (no output in terminal). To stop it when running in detached mode, run:
```
docker-compose down
```