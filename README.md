# User Form Application
This is a simple web application for managing user data, built with React for the frontend and Nodejs & Express.js for the backend and for Data base  MongoDB. The application allows users to add, edit, and delete user records.

# For my Project Technologies I Used
                                     - React
                                     - Nodejs & Express.js
                                     - MongoDB
# set set up  of my Application :
# Prerequisites
                - Node.js installed on your machine
                - VS code edditor installed on your machine
                - MongoDB Atlas account or a local MongoDB instance
    
# Setup Instructions -
                       step-1 : Go to CMD prompot -> Select your Drive -> ex: D:\>
                       Step-2 : Type this command to create a React Web App -> D:\>npx create-react-app "mernproject"
                       step-3 : 
                               Installation Commands :
                                 - To install the frontend dependencies, run the following command: 
                                           > npm install bootstrap bootstrap-icons react-hook-form formik yup jquery axios --save

                               Installation Commands
                                 -To install the backend dependencies, run the following command:
                                                                    > npm install express body-parser cors mongodb mongoose --save

{
  "name": "mernproject",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.6.8",
    "body-parser": "^1.20.2",
    "bootstrap": "^5.3.3",
    "bootstrap-icons": "^1.11.3",
    "cors": "^2.8.5",
    "express": "^4.18.3",
    "formik": "^2.4.5",
    "jquery": "^3.7.1",
    "mongodb": "^6.5.0",
    "mongoose": "^8.2.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.51.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4",
    "yup": "^1.4.0"
  }

- Then Add File / Components -

├──src
    ├──UiForm
    ├    ├── assets
    │
    ├── component
    │   ├── UserForm.css
    │   └── UserForm.jsx
    │
    ├── main
    │   └── IndexForm.jsx
    │
    ├── server
    │      └── UserData.js
    │           
    │
    └── User Table
        └── UserTable.jsx


* Here the "server" file, where i write Server-side-program.

# Running the React Application

- Start the Frontend development server: 
                                npm start

-The frontend will be accessible at -  http://localhost:3000.

- Running the Backend
To start the backend development server, run the following command:
    -> Go to terminal -> 
                        >D:\mernproject>cd src   

                        >D:\mernproject\src>cd UiForm  

                        >D:\mernproject\src\UiForm>cd server

                        >D:\mernproject\src\UiForm\server>node UserData.js   .... Server ll be started, after you can fetch the data.

                        (or)
- Running the Backend
To start the backend development server, navigate to the server directory and run the following command:
                        >cd src/UiForm/server
                        >node UserData.js

    (or) 

Alternatively, you can open the terminal directly in the server directory and run the command:
(-> you can open Terminal and file directly by right click on file and then click on :->open in Integrated Terminal )
                      
                      :\mernproject\src\UiForm\server>node UserData.js

This will start the backend server, allowing you to fetch data from the MongoDB database.

# 
Certainly! Here's some text you can add to your README.md file based on the suggestions:

Installation Commands
To install the frontend dependencies, run the following command:

        npm install bootstrap bootstrap-icons react-hook-form formik yup jquery axios --save

To install the backend dependencies, run the following command:

    npm install express body-parser cors mongodb mongoose --save

Running the Backend
To start the backend development server, navigate to the server directory and run the following command:

    cd src/UiForm/server
        > node UserData.js

Alternatively, you can open the terminal directly in the server directory and run the command: >node UserData.js

This will start the backend server, allowing you to fetch data from the MongoDB database.

# Usage
Navigate to http://localhost:3000 in your web browser.
You will see a form with a "Submit" button for adding new users and a "Get all User Details" button to show a table displaying existing users.
Fill out the form fields and click "Submit" to add a new user.
To display existing users, click on "Get all User Details".
Click the "Edit" button next to a user to edit their details.
Click the "Delete" button next to a user to delete them.