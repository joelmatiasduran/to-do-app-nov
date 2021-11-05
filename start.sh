#This is the bash script that there is to run in Ubuntu 20

docker-compose -f to-do-compose.yml up -d

#This will start the Back-End "Nest Js"

gnome-terminal -- sh -c "cd to-do-api && yarn && PORT=3006 yarn start:dev ; bash"



#This will start the Front-End

cd to-do-frontend && yarn && yarn start

#create a database with commands 



