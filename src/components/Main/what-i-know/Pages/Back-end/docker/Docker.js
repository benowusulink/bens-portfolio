import React from "react";
import "./Docker.css";

const Docker = () => {
  return (
    <main className={`docker-home`}>
      <h2>docker</h2>

      <article className={"tools"}>
        <h3> Online Resources </h3>
        <ul>
          <li>
            - Docker installation:{" "}
            <a
              href="https://www.docker.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Docker Hub:{" "}
            <a
              href="https://hub.docker.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
          <li>
            - Docker File:{" "}
            <a
              href="https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here{" "}
            </a>
          </li>
        </ul>
      </article>

      <section className={`html-content`}>
        <article>
          <h4 className={`border-btm`}>
            {" "}
            (Below are quick notes and tips about the subject, for more better
            information on the subject please refer to the resources above)
          </h4>

          <h4 className={`center`}> Docker </h4>
          <h4 className={`center`}> Definition </h4>
          <p className={`border-btm`}>
            {`Docker is a container platform.`}
            <br />
            <br />
            {`Unlike virtual machines which was used 
        in the past docker containers bundle only 
        the libraries and settings needed for your 
        application environment into a container 
        which can be used on multiple machines.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Installation </h4>
          <h4 className={`center`}> Step 1 </h4>
          <p>
            {`Go to the docker website and download docker stable, 
        this will download all Parys necessary for docker to 
        work on your Mac`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Step 2 </h4>
          <p>
            {`Once docker is installed on your computer make sure it 
        is running on your computer, you can check this by seeing 
        if docker is running in your computers nav bar `}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Container structure </h4>
          <h4 className={`center`}> Host </h4>
          <p>
            {`The host is the machine or computer that is going to 
        run and host your container. `}
            <br />
            {`The host will have its own software environment and 
        a container will have its own.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Containers </h4>
          <p>
            {`Containers are created by docker.`}
            <br />
            {`Containers have their own environment.`}
            <br />
            {`Within their environment they have something called images.
        A container is an instance of that image running as a process `}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Images </h4>
          <p className={`border-btm`}>
            {`Images are packages that are libraries and settings 
        needed for you application to work.`}
            <br />
            {`Containers can have multiple images that live within a container file.`}
            <br />
            {`Examples of images are node, postgresql etc. These are packages are 
        application needed to run but instead of downloading and storing them 
        within our host machine we are storing it in a docker container
         which will be our application environment.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Docker Hub </h4>
          <p className={`border-btm`}>
            {`This is where already made images for docker containers are stored.`}
            <br />
            <br />
            {`It is an docker image registry`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Containers </h4>
          <p>
            {`Containers are the environment that your web app uses.
        The environment is made by images `}
            <br />
            <br />
            {`A container can be created via two methods with a docker 
        file and without a docker file `}
            <br />
            <br />
            {`They have there own IP addresses they do not share the 
        same IP address as the host.`}
            <br />
            <br />
            {`When you start a container they are automatically run on a 
        default network hosted by docker called bridge`}
            <br />
            {`If you want to create multiple containers that communicate with each other 
        it is best you start your own network.`}
            <br />
            <br />
            {`The container name is the DNS name of your container.`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Building a docker container </h4>
          <p>
            {`1. When a container is created it will first 
        look for the image it needs locally`}
            <br />
            <br />
            {`2. If it doesn’t find it locally it
       will go and download it from dockerhub`}
            <br />
            <br />
            {`3. It will download the latest version the image if not specified`}
            <br />
            <br />
            {`4. It then creates the container based on the image and prepares to start`}
            <br />
            {`5. If there are any ports that need 
        opening or any other parameters it will do them`}
            <br />
            <br />
            {`6. It will then start the container based on the default 
         commands that come with the image `}
            <br />
            <br />
          </p>
          <h4 className={`center`}>
            {" "}
            Creating container without a dockerfile{" "}
          </h4>
          <p className={`border-btm`}>
            {`docker run --p 80:80 -d --name hello --network NETWORKNAME -e VARIABLE = yes -it  -v /users/ben/stuff:path/container nginx bash`}
            <br />
            <br />
            {`docker run - creates a new docker container`}
            <br />
            <br />
            {`-p 80:80 - Binds the container port to the hosts port to allow 
        the container access to the internet `}
            <br />
            <br />
            {`-d - Runs the container in the background of your 
        terminal and then prints the containers id `}
            <br />
            {`—-name - allows you to name the container `}
            <br />
            <br />
            {`— network - allows you to add this container 
         to a network you choose`}
            <br />
            <br />
            <br />
            {`-e - environmental variables you want within the container`}
            <br />
            <br />
            <br />
            {`-it - allows you to enter the container and use its terminal`}
            <br />
            <br />
            <br />
            {`-v - allows you to add volumes into a container`}
            <br />
            <br />
            <br />
            {`nginx - downloads and runs the nginx image for 
         docker hub within the container (Example of a image)`}
            <br />
            <br />
            {`bash - allows you to enter the bash shell of the container`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Image </h4>
          <p className={`border-btm`}>
            {`An image holds the dependencies of 
        your app and meta data about the image 
        and how to run it, they are stored within 
        containers.`}
            <br />
            <br />
            {`You can create images with docker files 
        or use pre made images from docker hub `}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Volumes </h4>
          <p className={`border-btm`}>
            {`Volumes are used to allow you to create 
        a directory within your container where 
        you can store files.`}
            <br />
            <br />
            {`The files stored within a volume can be 
        used to store files you want from your 
        host into your container and also can be 
        used to make sure when you update your files 
        from your host it will update in your container 
        (binding). `}
            <br />
            <br />
            {`Binded volumes are implemented when creating a 
        container or compose and not within a docker file`}
            <br />
            <br />
            {`Volumes outlive the container meaning once you 
        delete a container the volume will not be deleted  `}
            <br />
            <br />
            {`Example: `}
            <br />
            <br />
            {`VOLUME /var/lib/mysql`}
            <br />
            <br />
            {`This will create a directory within your 
        container where you can store files`}
            <br />
            <br />
            {`Example2: (binded volume)`}
            <br />
            <br />
            {`docker container run -v /users/ben/stuff:path/container`}
            <br />
            <br />
            {`/users/ben/stuff - the first half defines the path of which files 
        from your host you want to bind within the container`}
            <br />
            <br />
            {`:path/container - the path of where you want the files 
        from your host to be copied within your container `}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Dockerfile </h4>
          <p>
            {`This is a file that allows you to create custom images. 
Within a docker file you can add images, port configurations,
 environmental variables, commands and more`}
            <br />
            <br />
            {`All the settings within a docker file is saved as 
        an image that you can use within your container.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Create Dockerfile </h4>
          <p>
            {`touch Dockerfile`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Dockerfile structure</h4>
          <h4 className={`center`}> FROM </h4>
          <p>
            {`The from command defines the image of the container`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`FROM node:14.11.0-stretch `}
            <br />
            <br />
            {`This will download the node image with this version in your container `}
            <br />
            <br />
          </p>
          <h4 className={`center`}> ENV </h4>
          <p>
            {`The ENV command allows you to add environmental variables `}
            <br />
            <br />
          </p>
          <h4 className={`center`}> WORKDIR </h4>
          <p>
            {`This will allow you to create a directory within your container 
        where your application code will be held`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`WORKDIR /usr/src/appName`}
            <br />
            <br />
            {`This will create a directory 
        within your container where your app will be held`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> COPY </h4>
          <p>
            {`This will allow you to files from your host 
        directory into the directory you specified 
        within the WORKDIR of your container `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`COPY ./ ./ `}
            <br />
            <br />
            {`This will copy all the files within the directory of the 
        docker file into the directory specified within the WORKDIR 
        of the container `}
            <br />
            <br />
          </p>
          <h4 className={`center`}> RUN </h4>
          <p>
            {`The run command allows you to define what commands you want the container to run at whilst it is building.
It can be used to download dependencies for your app within the container etc`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`RUN npm install`}
            <br />
            <br />
            {`This will tell docker after it has installed node and copied 
        your files into the container to run the command npm install
        which will install your node packages for your application `}
            <br />
            <br />
          </p>
          <h4 className={`center`}> VOLUME </h4>
          <p>
            {`Allows you to add volumes within your image.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> EXPOSE </h4>
          <p>
            {`This allows you to open these ports to allow http access to and from the container.
       When you EXPOSE a port within your container you will still need to expose the port on host level with the -p`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`EXPOSE 80 80`}
            <br />
            <br />
            {`Opens port 80 within the container to listen
       to connections from the hosts port 80`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> CMD </h4>
          <p>
            {`Once your image has been built the CMD command allows 
        you to give instructions to as to what to do when the 
        container has finished building `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`CMD [’npm’ , ‘start’]`}
            <br />
            {`CMD [ "node", "server.js" ]`}
            <br />
            {`CMD [“/bin/bash”]`}
            <br />
            <br />
            {`The first example will tell the container 
        to run the script npm start which should 
        start you application within the container`}
            <br />
            <br />
            {`The second example runs node on the server.js 
        file within your app`}
            <br />
            <br />
            {`The second example runs the bash shell in the container`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Build docker file </h4>
          <p>
            {`Once you have created a docker file and configured the 
        settings you now have to create an image with the settings 
        from the docker file so it can be used within the container
        you create.`}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`docker image build -t imageName .`}
            <br />
            <br />
            {`-t - this allows you to give a name to your image`}
            <br />
            <br />
            {`. - the full stop indicates that you want to build 
        an image from the docker file within the directory 
        you are in`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Create container </h4>
          <p>
            {`Now you can create a container the the custom 
        image you have created with the docker file `}
            <br />
            <br />
            {`Example:`}
            <br />
            <br />
            {`docker run --p 80:80 -d --name hello --network NETWORKNAME -e VARIABLE = yes -it imageName bash`}
            <br />
            <br />
            {`imageName - the image name should be the 
        image you created with the docker file`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Example Docker file </h4>
          <p className={`border-btm`}>
            {`FROM node:carbon`}
            <br />
            <br />
            {`WORKDIR /usr/src/app-name`}
            <br />
            <br />
            {`COPY ./ ./`}
            <br />
            <br />
            {`RUN npm install `}
            <br />
            <br />
            {`EXPOSE 3000 3000`}
            <br />
            <br />
            {`CMD ["npm", "start"]`}
            <br />
            <br />
          </p>

          <h4 className={`center`}> Docker compose </h4>
          <p>
            {`Docker compose allows you to create a group 
        of containers through a configuration file.`}
            <br />
            <br />
            {`Within the configuration file you can add the containers 
        to a network, open ports, add images, add volumes, 
        environmental variables and do more features that you can 
        do when starting a container individually.`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Create docker compose file </h4>
          <p>
            {`touch docker-compose.yml`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Docker compose .yml </h4>
          <p>
            {`This is a configuration file that allows you to create multiple containers. 

        The structure of the file is as follows `}
            <br />
            <br />
            {`version: ‘3.1’ - This is the version of docker compose you are using, 
        if nothing is specified by default it will use version 1`}
            <br />
            <br />
            {`services: - The name of the actual container which will hold 
        all your containers `}
            <br />
            <br />
            {`servicename: -  This is the dns name for your container inside a network, 
        it is also the name of your container `}
            <br />
            <br />
            {`container_name: - The name of your container`}
            <br />
            <br />
            {`image:-  the image you want the container to have`}
            <br />
            <br />
            {`command: - the command you want to give the container 
        once it has finished building, this will replace the 
        CMD from the docker file`}
            <br />
            <br />
            {`environment: - These are environmental variables 
        for the container, the same as -e`}
            <br />
            <br />
            {`volumes: - These are volumes for your container, the same as -v`}
            <br />
            <br />
            {`links: allows you to specify which containers rely on other containers to run`}
            <br />
            <br />
            {`networks: - Allows you to create a network`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Docker compose build image </h4>
          <p>
            {`With docker compose you can build custom images.
If the image already exists within your cache it will access 
it from there if not it will download the image from a docker file.`}
            <br />
            <br />
            {`context: - allows you to choose the directory you want to 
        build the image from, this should point to the docker file 
        you want to use`}
            <br />
            <br />
            {`dockerfile: - allows you to specify which docker file you want to use, 
        this should be the name of the docker file (optional)`}
            <br />
            <br />
            {`image: - this will be the name of the image built from the docker file.`}
            <br />
            <br />
            {`build: - Allows you to choose the location of where you want the docker 
        compose to build your image from (use)`}
            <br />
            <br />
          </p>
          <h4 className={`center`}> Docker compose cli </h4>
          <p>
            {`docker-compose up - This will run all your services within your docker.compose.yml 
        file. When all your services are running your container_name within your .yml file 
        will identify each specific container.`}
            <br />
            <br />
            {`docker compose down -  This will stop running your containers in your compose`}
            <br />
            <br />
            {`docker-compose build - Allows you to specifically build the images within 
        your services when you using docker compose`}
            <br />
            <br />
          </p>
        </article>
      </section>
    </main>
  );
};

export default Docker;
