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
- Setup Redux to store Sign in and Sign up data with userSlice.
- Update store as per login in and logout=> 
   - We will use utility given by FIREBASE:
   - onAuthStateChanged => refer Link: https://firebase.google.com/docs/auth/web/manage-users?hl=en&authuser=0
   - Since we only want to use it only once, we would call in useEffect in Body component.
   - dispatch in the function =>  onAuthStateChanged 
   - navigate in the Login page. 
- Implemented SignOut
- Update Profile
- Important Fixing bugs:
   - user should not route to Browse page manually.
   - if trying to manually route to Browse page, it should go to login page only.
   -Solution: check Header page.
- Unsubscribed to the onAuthStateChanged callback. in Header.js
- Add hardcoded values to Constants.js
- Fetch movies from TMDB API
   - create an account
   - Go to documents-> Api references -> movie api -> now playing.
   - get the options method in constants.js file. 
   - set up api call in Browse page.
- Create custom hook: useNowPLayingMovies
   - Created a function to fetch data from API and store it in moviesSlice and update store.
   - imported it in Browse.js

- LETs START BUILDING BROWSER PAGE.
    - Main Container: (MainContainer.js)
       - Only movie data is needed for it.
       - Video Title. (VideoTitle.js)
       - Video Trailer Background. (VideoBackground.js)
    - Secondary Container: (SecondaryContainer.js)
       - Movies List *n
         - Movie list - Popular
         - Movie list - Now Playing
         - Movie list - Trending
       - Cards *n

- Fetch Data for trailer video
- upated store with Trailer Video Data
- Embedded the youtube video and make it autoplay and mute.
- Updated tailwind css for title and discription.
- Creating movie suggestion list for Secondary container.
- Build Secondary Component
- Build Movie List
- TMDB Image CDN url
- Made the Browse page better with Tailwind CSS
- Created usePopularMovies, useTopRatedMovies, useTrendingMovies custom hooks.








# In local we might see api calls or events called twice, this only happend because our app is running with React.StrictMode, which checks for any inconsistences in the app, this won't be visibile in production.




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
 - Paste const export auth = getAuth(); in firebase.js

# Setting up Redux toolkit
  -  npm i -D @reduxjs/toolkit
  -  npm i react-redux
  -  Build a store ->  create appStore.js
  - Create user slice -> create userSlice.js
  - import slice in appStore
  - To provide store to the app => provide store at the root of application i.e App.js
  - Created Redux store with userSlice.

