# Getting Started with Create React App

# Incase of npm ERRno -4058; which indicates that a file or directory is missing:

     1. Clear NPM Cache:
         npm cache clean --force
     2. Ensure Correct Directory:
         cd path/to/your/directory
     3. Uninstall Global Create-React-App:
          npm uninstall -g create-react-app
     4. Update Npm:
          npm install -g npm @latest
     5. Create React App:
          npx create-react-app my-app

This command will create a Scafold. Just like we use Parcel bundler in our project this command will enable us to use webpack behind the scenes.

# Setup Tailwind in our project:
 1.  https://tailwindcss.com/docs/installation/framework-guides
 2. Go to: create-react-app
     https://tailwindcss.com/docs/guides/create-react-app
 3. Follow the steps. 

# FEATURES:
- Login/SignUp
    - Sign In/ Sign up Form
    - Redirect to Browse Page
- Browse (after authentication)
     -  Header
     -  Main Movie
        - Tailer on Background
        - Title & Description
        - Movie Suggestions
          - MovieLists
- NetflixGPT 
   -  Search Bar
   -  Movie Suggestions 