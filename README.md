 MERN authentication system:
 
Workings-

✅ After successful signup:

Shows an alert "Registration successful! Please sign in."

Clears form data

Switches to the Sign-In form

✅ After successful login:

Shows an alert "Login successful!"

Clears form data

 
 Install Required Packages-
 
 Frontend- npm install react-router-dom axios
 
 Backend- npm install express mongoose dotenv bcryptjs jsonwebtoken cors nodemon

For Backend-Configure MongoDB

Create a .env file in the backend folder and add:

PORT=5000

MONGO_URI=mongodb+srv://<your-mongodb-username>:<password>@cluster.mongodb.net/authDB

JWT_SECRET=your_jwt_secret_key

(Replace <your-mongodb-username> and <password> with actual credentials.)

