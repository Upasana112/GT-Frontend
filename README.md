# Frontend

Upasana Kumari IEC2021112

## Description
This is the frontend application for the Game theory project, a scheduling system for sports facilities. It's built with React and Vite, featuring a dynamic scheduling interface, user management, and booking functionality.


## Deployed Applications
- Frontend: https://gt-frontend-ogo5.onrender.com
- Backend: https://gt-backend-q1j5.onrender.com

## Images


## Prerequisites
To run this project, you need to have the following installed:
- Node.js (version compatible with React 18.3.1)
- npm (comes with Node.js)

## Setup and Installation
1. Clone the repository:
   ```
   git clone [url]
   ```
2. Navigate to the project directory:
   ```
   cd frontend
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Application
To run the application in development mode:

```
npm run dev
```

This will start the Vite development server.

## Building for Production
To build the application for production:

```
npm run build
```

This will generate a production-ready build in the `dist` directory.

## Linting
To run the linter:

```
npm run lint
```

## Preview Production Build
To preview the production build locally:

```
npm run preview
```

## Project Structure
The project consists of several key components:
- `BookingCard.jsx`: Displays individual booking information
- `BookingModal.jsx`: Handles the creation of new bookings
- `ScheduleTable.jsx`: Main component for displaying and managing the schedule
- `Sidebar.jsx`: Navigation component
- `SignupModal.jsx`: Handles new customer registration

## Technologies Used
- React 18.3.1
- Vite 5.4.8
- Tailwind CSS 3.4.14
- Axios for API requests
- React DatePicker for date selection
- React Toastify for notifications

## API Integration
The application interacts with a backend API running on `http://localhost:4040`. Ensure the backend server is running and accessible.

## Assumptions and Limitations
- This project uses Vite as the build tool, which may have different configurations compared to Create React App.
- The project uses ESLint for code linting, ensure you have compatible IDE plugins for the best development experience.
- The application assumes a specific data structure for centers, sports, and bookings from the backend API.

## Special Instructions
- Make sure to set up environment variables for any API endpoints or sensitive information.
- The project uses Tailwind CSS for styling. Customize the `tailwind.config.js` file for any project-specific design tokens.

