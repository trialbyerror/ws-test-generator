# ws-test-generator
Generates test classes for WebSocket APIs. 

## Prerequisites
1. Node: https://nodejs.org/en/download/
1. Docker: https://docs.docker.com/get-docker/

## Run the app
1. In the terminal, `cd` into directory
1. `$ docker build -t michela/ws-test-generator .`
1. `$ docker run -p 49160:8080 -d michela/ws-test-generator`
1. Visit `http://localhost:49160` on your browser. Ta-da!

## Stop the app
1. `$ docker ps` 
1. Copy CONTAINER ID value to clipboard
1. `$ docker container stop <your container ID>`
