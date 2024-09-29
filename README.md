# student-api

Hello everyone, 

This application was developed with node.js and used in mobile application with Swift.

It works seamlessly with the Student API that I wrote with node.js.


The project is at a very simple level, I will improve it as I learn new information.

Thank you.


## Steps 1 to Run the Project

1. In the project's root directory, initialize a `package.json` file by running the following command:
1. Clone Github Repo:

   ```bash
   git clone https://github.com/BarisDilekci/stutend-api.git
   cd student-api
   ```

2. In the project's root directory, initialize a `package.json` file by running the following command:

    ```bash
    npm init
    ```

3. If necessary, update dependencies in the project by running the following command:

    ```bash
    npm update -y
    nodemon start

    ```

4. Open your web browser and go to [localhost:3000](http://localhost:3000).




## Steps 2 to Run the Project

1. In the project's root directory, initialize a `package.json` file by running the following command:
1. Clone Github Repo:

   ```bash
   git clone https://github.com/BarisDilekci/stutend-api.git
   cd student-api
   ```

2. In the project's root directory, initialize a `package.json` file by running the following command:

    ```bash
    npm init
    ```

3. If necessary, update dependencies in the project by running the following command:

    ```bash
    npm update -y
    docker build -t student-api .
    docker compose up
    ```

5. Check MongoDB:

    ```bash
    docker ps
    docker exec -it <mongo_container_id> mongo

    ```

6. After entering the MongoDB shell, check the database and collections:

    ```bash
   use school
   show collections
   db.school.find().pretty()
    ```

7. Open your web browser and go to [localhost:3000](http://localhost:3000).

## Path
```bash
Get all student : http://localhost:3000/students/getAllStudent
Add student     : http://localhost:3000/students/addStudent
Delete student  : http://localhost:3000/students/deleteStudent/1234567890
Update student  : http://localhost:3000/students/updateStudent/12345678901
 ```
