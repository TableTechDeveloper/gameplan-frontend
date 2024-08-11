# Frontend Project README

## Project Overview

This project is the frontend of a web application designed to allow users to create, join, and leave events. The frontend is built using React and interacts with a backend API to manage user authentication, event participation, and other related functionalities.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Key Components and Hooks](#key-components-and-hooks)
  - [JoinEventButton](#joineventbutton)
  - [LeaveEventButton](#leaveeventbutton)
  - [EventPage](#eventpage)
  - [useFetchSingleEvent](#usefetchsingleevent)
- [Running the Project](#running-the-project)

## Features

- **Event Management**: Users can view event details, join events, and leave events.
- **Authentication**: Secure user authentication with token-based access.
- **Responsive Design**: The application is designed to work on various screen sizes.
- **Dynamic Data Fetching**: The application dynamically fetches and updates event data using custom hooks.

## Setup and Installation

### Prerequisites

- Node.js (version 14.x or higher)
- npm or yarn

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Create a .env file in the root directory and add the following:

```bash
REACT_APP_API_BASE_URL=http://your-api-url
```

4. **Start the development server:**

```bash
npm start
```

## Project Structure

```bash
src/
│
├── assets/
│   ├── bluepiece.svg
│   ├── redpiece.svg
│   └── dice.svg
│
│
├── components/
│   ├── CancelEventButton.jsx
│   ├── DraftEventCard.jsx
│   ├── Footer.jsx
│   ├── GameOwnedCard.jsx
│   ├── GameSearchCard.jsx
│   ├── Hamburger.jsx
│   ├── Header.jsx
│   ├── HomeHeader.jsx
│   ├── JoinEventButton.jsx
│   ├── LeaveEventButton.jsx
│   ├── Logo.jsx
│   ├── NavMenu.jsx
│   ├── ProtectedRoute.jsx
│   ├── TransitionWrapper.jsx
│   ├── UpcomingEventCard.jsx
│   └── UserIcon.jsx
│
├── context/
│   └── UserContext.jsx
│
├── compofunctions/
│   ├── eventActions.jsx
│   ├── fetchGameSearch.jsx
│   ├── Logout.jsx
│   ├── useFetchEvents.jsx
│   ├── useFetchGames.jsx
│   ├── useFetchPublicEvents.jsx
│   ├── useFetchSingleEvent.jsx
│   ├── useFetchUser.jsx
│   └── useGameDetails.jsx
│
├── modals/
│   ├── ConfirmModal.jsx
│   ├── FailModal.jsx
│   ├── LoginModal.jsx
│   ├── Modal.jsx
│   ├── RegisterModal.jsx
│   ├── ResetPasswordModal.jsx
│   └── SuccessModal.jsx
│
├── pages/
│   ├── _TemplatePage_.jsx
│   ├── DiscoverEvents.jsx
│   ├── DiscoverGames.jsx
│   ├── EditEvent.jsx
│   ├── EventPage.jsx
│   ├── GamesOwned.jsx
│   ├── HomePage.jsx
│   ├── MyEvents.jsx
│   └── NewEvent.jsx
│
├── styles/
│   ├── Buttons.css
│   ├── Card.css
│   ├── EventPage.css
│   ├── Footer.css
│   ├── Form.css
│   ├── Graphic.css
│   ├── Hamburger.css
│   ├── Header.css
│   ├── index.css
│   ├── Modal.css
│   ├── NavMenu.css
│   ├── Pages.css
│   ├── TransitionWrapper.css
│   └── variables.css
│
├── styles/
│   ├── dateUtils.css
│   └── gameActions.css
│
├── App.js
└── index.js
```

## Key Components and Hooks

### JoinEventButton

- Location: src/components/JoinEventButton.jsx
- Description: A button that allows users to join an event. It triggers an API call to register the user for the event and updates the event details using the refreshEvent callback.

### LeaveEventButton

- Location: src/components/LeaveEventButton.jsx
- Description: A button that allows users to leave an event. It triggers an API call to remove the user from the event's participant list and refreshes the event details using the refreshEvent callback.

### EventPage

- Location: src/pages/EventPage.jsx
- Description: The main page for displaying detailed information about a specific event. It uses the useFetchSingleEvent hook to fetch and display event details. It also includes buttons for joining or leaving the event.


### useFetchSingleEvent

- Location: src/hooks/useFetchSingleEvent.jsx
- Description: A custom hook for fetching details of a single event. It returns the event data, loading state, error state, and a fetchEvent function for re-fetching the event data.

### Running the Project

#### Configure first

To make the project talk to the locally run backend server modify the **config.js** file first.

Replace
```javascript
export const API_BASE_URL = "https://gameplan-backend-7j9b.onrender.com";
```
with
```javascript
export const API_BASE_URL = process.env.REACT_APP_SERVER_URL;
```

#### Run the project

To run the project locally, use the following commands:
```bash
npm start
```