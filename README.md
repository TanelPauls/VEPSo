#React Quiz Game by VEPSo
Educational quiz game built with react. The game displays a series of questions qith multiple answers, tracks the user's progress, and display the final score.

##Features
-Interactive quiz: the game presents multiple-choice questions to the user
-Progress bar: a dynamic progress bar shows the user's current question and completion status
-Toast notification: information message after completion
-Game reset: after finishing the quiz, user can reset the game to play again

##Technologies used
-React: the primary framework used to build the application
-Bootstrap: for responsive design and UI components
-react-hot-toast: for showing toast notification
-React 18: utilizes the new createRoot API for rendering the app

##Usage
-The quiz will start automatically when you open the app
-Answer the questions by selecting one of the multiple-choice options
-The progress bar at the top will show how many questions have been answered
-Once all questions are answered, you can view your score and retry the game if desired
-Toast notifications will appear at the top to inform the user about actions like answering questions or submitting the quiz

##File structure
/src
  /assets
    data.json              // JSON file containing the question data for the quiz.
  /components
    Footer.jsx             // Footer component displayed at the bottom of the screen.
    GameWindow.css         // CSS file for styling the GameWindow component.
    GameWindow.jsx         // Main component for displaying the game window and handling game logic.
    ImageContainer.css     // CSS file for styling the ImageContainer component.
    ImageContainer.jsx     // Displays questions and answers along with images (if applicable).
    NumberIcon.css         // CSS file for styling the NumberIcon component.
    NumberIcon.jsx         // Individual question number icon in the progress bar.
    ProgressBar.css        // CSS file for styling the ProgressBar component.
    ProgressBar.jsx        // Displays a progress bar with clickable question numbers.
  App.css                  // Global CSS file for styling the entire app.
  App.jsx                  // Root component that renders the entire app.
  main.jsx                 // Main entry point for the app, where React is rendered.
  .gitignore               // Git ignore file to exclude unwanted files and directories.
  README.md                // Project documentation with instructions for setup and usage.
  eslint.config.js         // ESLint configuration file to maintain consistent coding styles.
  index.html               // HTML file that acts as the entry point for the web app.
  package-lock.json        // Automatically generated file that locks the dependency versions.
  package.json             // Defines the project dependencies and scripts.
  vite.config.js           // Vite configuration file to set up the build tool and development server.

##References
BBC News. (2023, March 24). Fake Trump arrest photos: How to spot an AI-generated image. BBC News. https://www.bbc.com/news/world-us-canada-65069316
Extensive use of ChatGPT for consultation and information gathering
Question 2 photo by Alex Knight. (2017, January 19). Laptop computer beside a coffee mug. Unsplash. https://unsplash.com/photos/laptop-computer-beside-coffee-mug-j4uuKnN43_M
Score control photo by Erwan Hesry. (2018, July 15). Fireworks illustration. Unsplash. https://unsplash.com/photos/fireworks-illustration-WPTHZkA-M4I

##Authors
VEPSo - Kaisa, Ilmar, Tanel 
