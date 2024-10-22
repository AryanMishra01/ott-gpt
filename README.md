# Getting Started with Create React App

- Create react app
- Tailwind configured
- Header
- Routing
- Login form
- Sign up form
- Form Validation (YOU CAN USE FORMIK for bigger applications)
  - use Regex for email
- useRef Hook
- Firebase setup
- Deploying app to production
- Link  https://ott-gpt-26047.web.app
- Create Signup User Account
- Setup Redux

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
2.  Go to: create-react-app
    https://tailwindcss.com/docs/guides/create-react-app
3.  Follow the steps.

# FEATURES:

- Login/SignUp
  - Sign In/ Sign up Form
  - Redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Tailer on Background
    - Title & Description
    - Movie Suggestions
      - MovieLists
- NetflixGPT
  - Search Bar
  - Movie Suggestions

# Install Extention of ES7+ React/Redux/React-Native snippets

- enable use of shortcut keys

# Create basic Login, Header, Browse and Body component.

# Import Body component in App.js

# Setup rounting:

- npm i -D react-router-dom
- createBrowserRouter in Body component
- To provide route => import Router provider in Body Component and pass appRouter to it.

# To find of Images in a page

- go to network tab
- select img tab and refresh the page.

# useRef

- used for creating reference of the input text

# To disable form submission on button click use this:

- onSubmit={(e) => e.preventDefault()}

# For backend we will use Google Firebase.

- Setup firebase for the project
- Install Firebase CLI:
  npm install -g firebase-tools
- enable Sign-in Authentication with Email/Password.

# Deploy your app:

- Command: firebase login
 # Resolve Error: firebase : File C:\Users\91914\AppData\Roaming\npm\firebase.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
- Press the [windows] button and then type PowerShell.
- Run as Administrator
- Copy and Paste the following command and hit [Enter]
- Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
- Type Y and hit [Enter]
- Rerun the command and type A hit [Enter]
- Close the powershell and try again

# THEN
- Command: firebase init
- Select by this by pressing spacebar: Hosting: Configure files for Firebase Hosting and (optionally) set up  
  GitHub Action deploys
- Select: Use an existing Project
- Select you project press ENTER
- What do you want to use as your public directory?
    build 
- Configure as a single-page app(rewrite all urls to /index.html)? 
     No
- Set up automatic builds and deploys with GitHub? 
   No
- It would create Build folder, .frebaserc and firebase.json file.

# Build the project
  -  npm run build

# Deploy the project:
  - firebase deploy

# Authenticate with Firebase using Password-Based Accounts 
 - use Web modular API
 - https://firebase.google.com/docs/auth/web/password-auth
 - follow the steps.
 - Past const export auth = getAuth(); in firebase.js