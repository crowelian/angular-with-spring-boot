# angular-with-spring-boot
Learning angular with spring boot.

## Description
Angular learning project with Spring Boot backend + log4j + security +++

## Installation

### pgAdmin:
- start it running in localhost:3331
```bash
docker pull dpage/pgadmin4
docker run --name pgAdminContainer -p 3331:80 \
    -e 'PGADMIN_DEFAULT_EMAIL=user@domain.com' \
    -e 'PGADMIN_DEFAULT_PASSWORD=SuperSecret' \
    -e 'PGADMIN_CONFIG_ENHANCED_COOKIE_PROTECTION=True' \
    -e 'PGADMIN_CONFIG_LOGIN_BANNER="Authorised users only!"' \
    -e 'PGADMIN_CONFIG_CONSOLE_LOG_LEVEL=10' \
    -d dpage/pgadmin4
```
Check the ip of your postgres container:
```bash
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container-name>
```
Then just add the postgres db details to pgAdmin (the ip, password etc).


### Angular
Init a new scaffolfing for Angular project
```bash
ng new \<projectname\>
```

## Usage

### How to start the backend
- use docker postgres image
- docker exec -it \<CONTAINER-ID\> bin/bash
- psql -U postgres
- CREATE DATABASE angulardemodb;

-- Then you can start the backend

### Run frontend
```bash
ng serve <projectname>
```
And go to: http://localhost:\<ip-in-app-properties\>/


#### Logs
- http://localhost:8080/logs

