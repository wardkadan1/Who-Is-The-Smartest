# Who-s-The-Smartest

## Project Overview

**Project Name:** Who’s The Smartest  
**Team Leader:** Orr Atalai

1. **Objective**
   "Who’s The Smartest" is an interactive, high-stakes trivia game that challenges players on Jewish and Arab traditions, history, and customs. Players answer 10 questions, starting with 3 lives. Each incorrect answer costs a life, and losing all lives ends the game. Successfully answering all 10 questions without losing all lives earns the player the grand prize of being crowned "The Smartest."

2. **User Objective**
   As a player, I want to engage in an exciting trivia experience to test my knowledge of Jewish and Arab traditions, history, and customs, enjoying the thrill of competition while learning new cultural and historical facts.

3. **Main Technologies**

- **HTML:** Structure the web pages
- **CSS:** Styling and layout
- **JavaScript:** Handle dynamic features, user interactions, and event handling
- **MockAPI:** Store question data in JSON format (e.g., a question format example):
  ```json
  {
    "question": "Which city is considered holy by both Jewish and Muslim people?",
    "answers": ["Mecca", "Jerusalem", "Cairo", "Tel Aviv"],
    "rightAnswer": "Jerusalem",
    "hint": "This city contains the Western Wall and Al-Aqsa Mosque."
  }
  ```

## Features

1. **Homepage**

   - **Details:** A welcoming page introducing the game.
   - **UI:**

     - Full-screen background image
     - Centered buttons: Play, Info, Settings
     - Game logo
     - Figma Design: [Figma Link](https://www.figma.com/design/NsK7X0dTrK8WqMJkM3AnTB/Who's-The-Smartest?node-id=0-1&t=lt7szGch1FjCTM7y-1)

   - **User Stories:**
     - As a user, I want to see explanations for the game.
     - As a user, I want the homepage to be visually appealing and easy to navigate.
   - **Acceptance Criteria:**
     - Responsive design for mobile and desktop
     - Info button opens a popup with game instructions
     - "Start a New Game" button opens a popup prompting for username entry

2. **Game Page**
   - **Details:** 10-question challenge where each correct answer brings the player closer to victory.
   - **UI:**
     - Full-screen background image
     - Middle of the screen: Question with 4 answer buttons
     - Bottom: Hint, Skip, and 50:50 buttons
     - Top: Home and Restart buttons
     - Bottom timers for game (10:00) and each question (1:00)
     - Lives indicator (top-right); game ends if lives reach 0
   - **User Stories:**
     - As a user, if I’m stuck, I want to get a hint.
     - As a user, if I get a question wrong, I want to know the correct answer.
   - **Acceptance Criteria:**
     - Responsive design for mobile and desktop
     - Popups for win/lose:
       - **Lose Popup:** Displays "You lost. 4/10" with Restart and Homepage buttons.
       - **Win Popup:** Displays congratulatory message (e.g., "Brilliant Work! 9/10") with Restart and Homepage buttons. Auto-redirects to the homepage after 20 seconds.

## Schedule and Work Breakdown

**Project Duration:** 4 working days  
**GitHub Repo:** Who’s The Smartest

**Day-by-Day Plan:**

- **Day 1 (22 October): Planning and Setup**
  - Introduction, defining scope, gathering requirements
  - Data structure setup (e.g., question/answer format)
- **Day 2 (28 October): Design and Development**
  - Figma Design: [Figma Link](https://www.figma.com/design/NsK7X0dTrK8WqMJkM3AnTB/Who's-The-Smartest?node-id=0-1&t=lt7szGch1FjCTM7y-1)
  - Basic HTML structure and CSS for Homepage and Game Page
  - Game Scenario Pseudocode:
    - Game loop, handling correct/incorrect answers, life tracking, hints, timers, and API connection
- **Day 3 (29 October): Advanced Development**
  - JavaScript interactions and event handling
- **Day 4 (30 October): Testing and Debugging**
  - Final testing, debugging, and performance tuning

**Task Division:**

**Friday & Saturday - October 25-26**

- **Member Tasks**
  - **Ward:** Data Handling, Homepage UI
  - **Yazan:** Game Page, Background, Logo, Buttons
  - **Orr:** Game Page, Quiz Rectangle

**Sunday & Monday - October 27-28**

- **Members Tasks**
  - **Ghaidaa & Orr:** Check data list, setup questions with 3 lives, add per-question timer, handle question and answer switching
  - **Yazan & Ward:** API connection, answer handling (correct/incorrect display and life deduction), score tracking for winning card

## Development Notes

- **Hints Usage:** Hints are limited to once per game.
- **Hint Types:** Display hint message, remove 2 wrong answers, skip question
- **Timers:**
  - Each question: 60 seconds
  - Game completion: 10 minutes
