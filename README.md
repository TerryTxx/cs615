# Group Task Management

This project powered by React.JS and Express.

Get Started
-----------

```
Open command line and apply that steps:

1. Step
 git clone https://github.com/TerryTxx/cs615
 
2. Step
    for windows download nvm-install
    nvm install v16.14.2
    nvm use v16.14.2
    
  for mac install nvm curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  nvm use 16
  or nvm install v16.14.2

3. Step for mac (global script setted, windows go Step4)
npm run install-deps
(if failed) go Step 4
npm start

4. Step
 cd server
 npm install
 npm run start
 
 cd client
 npm install
 npm run start
 
4. Step
 You can start working on any explorer window.
 
 Account:admin
 Password:12345
 
register is working also
```
http://localhost:3001/

HTTP Request
-----------

| Route | HTTP Verb	 | POST body	                                                                                                                                                | Description	 |
| --- | --- |-----------------------------------------------------------------------------------------------------------------------------------------------------------| --- |
| /tasks | `GET` | Empty                                                                                                                                                     | List all tasks. |
| /tasks | `POST` | {'title':'task title', 'content':'task content', status:1, date:Date.now, color:SpecialField, dueDate:Date, createdBy:ObjectId, contributors: Object.Id } | Create a new task. |
| /tasks/update/:id | `PUT` | {'title':'task title', 'content':'task content', status:1, date:Date.now, color:SpecialField, dueDate:Date, createdBy:ObjectId, contributors: Object.Id } | Update task by id. |
| /tasks/delete/:id | `DELETE` | Empty                                                                                                                                                     | Delete task by id. |
| /users | `GET` | Empty                                                                                                                                                     | List all users. |
| /users | `POST` | {'username':'Tan', 'name':'Xiaoxu', lastName:'Tan', createdBy:ObjectId, profilePhoto:'default.jpg' }                                                      | Create a new user. |
| /story | `GET` | Empty                                                                                                                                                     | List all projects. |

------------

