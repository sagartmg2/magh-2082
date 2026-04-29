

docker ps
docker stop <container-name>
docker stop $(docker ps -q)
docker compose down
docker compose down -v  // this clears postgres as well
docker compose up --build


