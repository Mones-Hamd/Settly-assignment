# Settly-Assignment
Technical assignment to apply for internship in <a href="https://getsettly.com/"> Settly</a> company and the assignment is a registration System .



## Demo

 you can try   <a href="https://mones-assignment.onrender.com"> here .</a>

Or you can get started by simply clone the repo and install the dependencies in the root folder


## Installation

Install the assignment with npm

```bash
   npm install 
   npm run dev
  
```
 Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
## Tech Stack

**Client:** React,

**Server:** Node, Express ,JWT ,Cors ,Bcrypt


## Must have:

- [x] Users can create an account by entering their name, email address, password, and confirmation of password.

- [x] After successfully creating an account, users can log in with their email and password.

- [x] Upon logging in, users will see a welcome message with their name.


## Nice to have
- [x] Captcha validation



## Folder structure 
 
 ### Server :

  .

    |                                    
    |--connection
    |  |--connection.js
    |  
    |--controllers  
    |  |-- userController.js
    |  
    |--middlewares                              
    |  |--auth.js
    |  
    |--models
    |  |--User.js                        
    |  
    |--routes
    |  |--user.js
    |  |    
    |--util
    |  |--capatchaValidate.js
    |  |--tokenGenerator
    |  
    |--index.js
    |  
    |--package.json
    | 
    
------

### client :
 .

    |                                   
    |--public
    |  |--favicon.ico
    |  |--index.html
    |  |-- manifest.json
    |
    |--src                               
    |  |
    |  |--components
    |  |  |--Error
    |  |  |  |--Error.jsx                           
    |  |  |  |--error.css
    |  |  |
    |  |  |--Input
    |  |  |  |--Input.jsx
    |  |  |  |--input.css
    |  |  |  
    |  |  |--Loaing
    |  |  |  |--Loading.jsx
    |  |  |  |--loading.css
    |  |  | 
    |  |  |--Captcha.jsx
    |  |   
    |  |--constant 
    |  |  |--Fields.js
    |  |                    
    |  |--context
    |  |  |--CaptchaContext.js
    |  |  |--UserContext.js
    |  |    
    |  |--hooks 
    |  |  |--useAuth.js
    |  |  |--useForm.js
    |  |    
    |  |--pages
    |  |  |--Auth
    |  |  |  |--Auth.jsx
    |  |  |  |--auth.css
    |  |  |  
    |  |  |--Home
    |  |  |  |--Home.jsx
    |  |  |  |--home.css
    |  |
    |  |--App.css
    |  |--App.js
    |  |--index.js
    |   
    |--package.json
   
------


## API Reference

#### Login

```http
  POST /api/user/login
```
#### Register
```http
  POST /api/user/register
```
## Author

- <a href="https://moneshamd.netlify.app/"> Mones Hamd</a>
