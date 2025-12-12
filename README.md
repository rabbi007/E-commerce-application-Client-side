
# 'Click-&-Buy' E-Commerce Application

**Click-&-Buy** is a modern, responsive e-commerce web application built with **Next.js** for the frontend, **Express.js** for the backend, and **Firebase** for authentication. This application allows users to browse products, view detailed product information, and manage products if logged in. The app features a polished UI, mobile responsiveness, and secure authentication, making it a fully functional e-commerce platform.

## Live URL: https://click-n-buy-app.vercel.app/

Note: 🚨 Security Update: App Fully Updated 🚨
My app is now fully updated and secured against the React2Shell vulnerability. 
The necessary patches have been applied, and the site is no longer affected by this issue.

## Github Repo link: https://github.com/rabbi007/E-commerce-application-Client-side.git

## Features

- **User Authentication**: Users can sign up or log in using email/password or Google authentication via Firebase.
- **Product Management**: Logged-in users can add, delete, and manage products.
- **Product Browsing**: Visitors can browse products, view product details, and search/filter by category.
- **Responsive Design**: The app is fully responsive, providing a seamless experience on mobile, tablet, and desktop.

## NPM Packages Used

```bash
Next.js: React framework for building the frontend.

Express.js: Web framework for the backend.

Firebase: Authentication services.

MongoDB: NoSQL database for storing product data.

Tailwind CSS: Utility-first CSS framework for styling.

React Icons: Icon library for React components.

React Spinners: Loading spinner components.

React Toastify: To show toast notifications.

Swiper: A modern touch slider for displaying product banners.

DaisyUI: Component library for Tailwind CSS.
```

## Setup & Installation Instructions

### Prerequisites
- **Node.js** (v16 or later)
- **MongoDB** (for product data storage)
- **Firebase** (for authentication)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/click-n-buy-e-commerce-application.git
cd click-n-buy-e-commerce-application
```

### 2. Install Dependencies

Run the following command to install the required dependencies for both frontend and backend:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```bash
MONGO_URI=<your-mongodb-uri>
FIREBASE_API_KEY=<your-firebase-api-key>
FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
FIREBASE_PROJECT_ID=<your-firebase-project-id>
FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
FIREBASE_APP_ID=<your-firebase-app-id>
```

Make sure to replace `<your-mongodb-uri>` and Firebase credentials with your actual values.

### 4. Run the Application

Start the development server for the frontend:

```bash
npm run dev
```

For the backend, you can run it separately using:

```bash
npm run server
```

Your application will be running at `http://localhost:3000`.

### 5. Build the Application

To build the app for production, run:

```bash
npm run build
npm run start
```

This will optimize the app for production and serve it on `http://localhost:3000`.

## Route Summary

### Frontend Routes

- **`/`** - Landing Page: Displays the homepage with a Hero section, Latest Products, Blog, Customer Reviews, and other sections.
- **`/login`** - Login Page: Allows users to log in using email/password or Google.
- **`/register`** - Register Page: Allows users to create an account with email/password.
- **`/products`** - Product List Page: Displays a grid of all available products with search and filter options.
- **`/product/[id]`** - Product Details Page: Shows detailed information about a selected product, including its image, description, and price.
- **`/add-product`** - Add Product Page (Protected): Allows logged-in users to add a new product.
- **`/manage-products`** - Manage Products Page (Protected): Allows logged-in users to view, edit, or delete their products.

### Backend API Routes

- **`/products`** (GET) - Retrieves all products. 
- **`/products/:id`** (GET) - Retrieves a single product by its ID. (authorized-user-only access).
- **`/products`** (POST) - Adds a new product to the database (authorized-user-only access).
- **`/products/:id`** (DELETE) - Deletes a product by its ID (authorized-user-only access).
- **`/latest`** (GET) - Retrieves the 6 most recent products.

---

### Credits
Name: Khandaker Reza-e-Rabbi; Email: rabbi@live.com; Github: https://github.com/rabbi007;
