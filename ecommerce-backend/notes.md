docker ps
docker stop <container-name>
docker stop $(docker ps -q)
docker compose down
docker compose down -v // this clears postgres as well
docker compose up --build




middlewares:
simply a functin , which has access to request and response
and also has access to next middeware
