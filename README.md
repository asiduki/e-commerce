MERN Stack E-commerce Platform
This is a full-stack e-commerce web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. The platform provides a complete shopping experience, including user authentication, product browsing, a shopping cart, and a checkout process.

Features
User Authentication: Secure user registration and login functionality using JWT (JSON Web Tokens).

Product Catalog: Browse a wide range of products with detailed descriptions, images, and pricing.

Dynamic Filtering & Sorting: Easily filter products by category and sort them by price or popularity.

Shopping Cart: Add, remove, and update quantities of items in a persistent shopping cart.

Responsive Design: A fully responsive, mobile-first design that provides a seamless experience on any device.

State Management: Centralized state management using React Context API for a predictable and maintainable application state.

Technologies Used
This project was built using the following technologies:

Frontend:

React.js

Tailwind CSS

Context API (for state management)

Axios (for API requests)

React Router

Backend:

Node.js

Express.js

MongoDB (with Mongoose)

JWT (for authentication)

bcrypt (for password hashing)

Development Tools:

Git & GitHub (for version control)

VS Code

Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Make sure you have Node.js and npm installed on your machine.

Installation
Clone the repo

git clone [https://github.com/asiduki/e-commerce.git](https://github.com/asiduki/e-commerce.git)

Navigate to the project directory

cd e-commerce

Install server dependencies

# Navigate to the server folder (or your backend folder)
cd server
npm install

Install client dependencies

# Navigate to the client folder from the root directory
cd ../client
npm install

Create a .env file in the server/backend directory and add your environment variables (e.g., MONGO_URI, JWT_SECRET).

Run the development servers

# Run the backend server from the server directory
npm run dev

# Run the frontend client from the client directory
npm run dev


Project Link: https://github.com/asiduki/e-commerce
