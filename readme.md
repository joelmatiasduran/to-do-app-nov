## This APP uses the next tools:

React Verion: 17.0.2 with TypeScripT 4.1.2

Nest Js 8

Docker 20.10.10

Node 14.18.1

PostgreSQL 8.7.1

TYPEORM 0.2.38

Material UI 4.12.3


## Tools required in order to run the APP 

[Docker](https://www.docker.com/)

[Node](https://nodejs.org/es/)

[NPM](https://www.npmjs.com/)

[Yarn](https://yarnpkg.com/)


## DATABASE DATA

| user  | password |
| ------------- |:-------------:|
| postgres      | 123456     |


## How to start the APP
Run the bash script that exist in the root

this will run the front-end in port 1776 

& the back end in port 3006

```
sudo bash start.sh
```

Depending if you are running already the postgres sql

service you may have to stop it first 

```
sudo service postgresql stop
```