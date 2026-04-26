
CRUD
create  POST
read   GET
update  PUT / PATCH
delete  DELETE

status codes

2 success
    200
    201
    203
    204
3 redirect
4 client  side error
    400   bad request | form validation
    401   unauthenticated 
    403   forbidden
    404   resource not found
    405   bad method
    422   bad request | form validation
    429   too many request
5 server side error
    500
    503 gateway error




# docker

## terms 
- image  | simiilar to github repo | npm packages
- container   | 



## commands
1. docker ps  | see the list of running containers 
2. docker compose up 
3. docker compose down
4. docker stop <container_name>