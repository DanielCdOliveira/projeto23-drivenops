
<div align="center"><img style = "width:100%;"src="https://i.imgur.com/5bpdicC.pngs"></img></div>
<hr>
<h2 align=center>DrivenOps</h2>
<h3 align=center>Web development Project</h3>
<hr>
<h4 align=center>My goal in this project is to take care of the application's deployment infrastructure, from the moment of the commit to its deployment</h4>
<h4 align=center>This involves the processes of CI, CD; and consequently the technologies: Docker (and Docker Compose), AWS (Amazon Web Services) and GitHub Actions</h4>


<hr>

<p align="center">
   <img src="https://img.shields.io/badge/author-Daniel Oliveira-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/DanielCdOliveira/projeto20-repoprovas?color=4dae71&style=flat-square" />
</p>

# Requirements
## General
- [x] Copy the base code into a repository on your GitHub. Use the name requested in the `Wakatime` topic.
## Dockerization
    
The application is divided into *front-end* and *back-end* (within the same repository). You will need to create multiple images to “dockerize” the entire application.

- [x] Dockerize the application's *back-end* using a Node (16) image as a base. To do this, create a Dockerfile in the `backend/` directory.
- [x] Dockerize the *front-end* of the application using a Node (16) image as a base. To do this, create a Dockerfile in the `front-end/` directory.
- [x] Dockerize a file server (individually) like NGINX to “serve” the *front-end* files.
- [x] Use Docker Compose to orchestrate how the *containers* of the respective images will upload and communicate. (you can use the default *network* generated by Docker Compose).
    - [x] Create a volume for the database.
    - [x] Create a “shared” volume between the *front-end* and NGINX image.
- [x] The choice of ports is at your discretion, as long as they are compatible with the *deploy* that will be done on Amazon Web Services (AWS).
- [x] The project must be able to run in the development environment (without Docker and with Docker) as well as in the production environment (necessarily with Docker).
    - [x] If necessary, make different settings for each environment (eg `docker-compose-prod.yml`)
## *Continuous Delivery* (CD)
- [x] Rent a machine on AWS via *Elastic Compute Cloud* (EC2).
- [x] Connect to this machine using the SSH protocol (keep the `.pem` key)
- [x] Use GitHub Actions and create a *workflow* to push the code to the machine in AWS every time a PUSH is done on the main *branch* (main/master).
    - [x] Configure a runner on the provisioned machine to make this possible.
## *Continuous Integration* (CI)
- [x] Use GitHub Actions and create a *workflow* so that the application's unit and integration tests are executed whenever a PULL REQUEST is requested.
    - [x] Use a machine from GitHub's own infrastructure.
- [x] Configure your repository so that the *feature* *branch* can only be merged if the tests pass.
## Custom domain
- [x] Register a free domain on [Freenom](https://www.freenom.com/).
- [x] Configure the domain to point to your machine's IP in AWS. You can use Freenom's DNS service or your preferred service. You can also create your own service on AWS.
    - [x] (optional) Hire a *hosted zone* on AWS Route53.
    - [x] (optional) Configure the *nameserver* on Freenom with your *hosted zone*.
    - [x] (optional) Create an A record on Route53 pointing to the IP of the EC2 machine.
## *Deploy*
- [x] Use reverse *proxy* techniques on the file server (NGINX) to be able to serve the *back-end* and *front-end* of the application on the same port.
- [x] The project must be accessible via domain on port 80 using the HTTP protocol.
- [x] Use a custom domain (other than the one automatically offered by AWS).


## 🏁 Running the application

Make sure you have the latest stable version of [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) running locally.

First, clone this repository on your machine:

```
git clone https://github.com/DanielCdOliveira/projeto23-drivenops
```

Then, inside the folder, run the following command to install the dependencies.

```
npm install
```

configures the .env files 

> To run app in docker container
```
docker compose up --build
```
