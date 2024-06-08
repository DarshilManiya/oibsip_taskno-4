# 📌 Pinterest Clone

## 🌍 [Deployment Link](https://pinterestclone-oeghr9l32-darshil-maniyas-projects.vercel.app) 🌍

Welcome to the Pinterest Clone application! This project is built using Node.js, Express, MongoDB, and Passport.js for authentication. Users can register, log in, and post images to their profiles. This clone mimics some of the core features of Pinterest, allowing users to upload and view images, and manage their profiles securely.

## 📋 Table of Contents
- [Features](#🌟-features)
- [Technologies Used](#🛠️-technologies-used)
- [Installation](#🚀-installation)
- [Usage](#📖-usage)
- [Project Structure](#🗂️-project-structure)
- [Contributing](#🤝-contributing)
- [License](#📄-license)
- [Deployment](#🌍-deployment)

## 🌟 Features
- 🛡️ **User Authentication**: Secure login and registration using Passport.js.
- 📝 **Profile Management**: Users can manage their profiles and view their own posts.
- 📸 **Image Uploads**: Post images to your profile with the help of Multer.
- 🔒 **Secure Profiles**: Only logged-in users can view their profiles and posts.
- 🎨 **Styling with SCSS**: Enhanced styling using SCSS for better UI/UX.
- 🔑 **Password Encryption**: Passwords are securely hashed using bcrypt.
- 🌐 **MongoDB Cloud**: Utilizes MongoDB Atlas for cloud-based database storage.

## 🛠️ Technologies Used
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB (Cloud)**: A scalable, flexible NoSQL database hosted on MongoDB Atlas.
- **Passport.js**: Simple, unobtrusive authentication for Node.js.
- **Multer**: Middleware for handling multipart/form-data, primarily used for uploading files.
- **Nodemon**: A utility that monitors for changes in the source code and automatically restarts the server.
- **EJS**: Embedded JavaScript templating.
- **SCSS**: A CSS preprocessor that adds power and elegance to the basic language.
- **bcrypt**: A library to help you hash passwords.

## 🚀 Installation
Follow these steps to get the project up and running on your local machine.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DarshilManiya/oibsip_taskno-4.git
   cd Pinterest_Clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=3000
   MONGODB_URI=mongodb+srv://darshilmaniya05:0lxCxyLZSAnO5QOo@cluster0.2cehxaw.mongodb.net/pinterest-data
   SESSION_SECRET="hi hi hi"
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be running at [http://localhost:3000](http://localhost:3000).

## 📖 Usage
1. **Register a new account:**
   - Go to [http://localhost:3000/register](http://localhost:3000/register)
   - Fill in the registration form and submit

2. **Log in:**
   - Go to [http://localhost:3000/login](http://localhost:3000/login)
   - Fill in your credentials and submit

3. **Post images:**
   - Once logged in, navigate to the post submission form
   - Upload images from your local device

4. **View profiles:**
   - Logged-in users can view their own profile and posts
   - Profiles are secured, and only logged-in users can view them

## 🗂️ Project Structure
```
Pinterest_Clone/
├── bin/
├── public/
│   ├── images/
│   ├── javascripts/
│   ├── stylesheets/
│   └── scss/
├── routes/
├── views/
├── .env
├── vercel.json
├── app.js
├── package.json
└── README.md
```

## 🤝 Contributing
Contributions are welcome! If you have any improvements or bug fixes, please fork the repository and submit a pull request. Let's make this project better together! 🎉

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for checking out the Pinterest Clone project! If you have any questions or need further assistance, feel free to reach out. Happy coding! 🚀
