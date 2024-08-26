# Driving Test Center Portal

## Project Overview

This project is a full-stack web application for managing driving test centers. It is built using Node.js, Express, EJS, and MongoDB. The application supports three types of users: Driver, Examiner, and Admin. Users can manage their driving test appointments, view their details, and update their information.

## Key Features

- User authentication with login and signup functionality.
- Role-based access control with distinct functionalities for Driver, Examiner, and Admin.
- Appointment management for scheduling and viewing driving tests.
- Editable user profiles for updating only the car information.
- Test results and comments management for examiners.

## Technologies Used

- **Backend:** Node.js, Express
- **Frontend:** EJS (Embedded JavaScript Templates), HTML, CSS
- **Database:** MongoDB
- **Authentication:** Express Session

## Installation and Setup

1. **Clone the Repository:**
2. **Navigate to the Project Directory:**
3. **Install Dependencies:**
4. **Create a `.env` File:**

- Add your MongoDB URI and session secret to the `.env` file:
  ```
  MONGODB_URI=<your-mongodb-uri>
  SESSION_SECRET=<your-session-secret>
  ```

5. **Start the Application:**

## Usage

- **Homepage:** Visit `http://localhost:3002` to access the application.
- **Login:** Users can log in with their credentials.
- **Dashboard:** Different dashboards for Drivers, Examiners, and Admins based on their roles.

## Contributing

- Fork the repository.
- Create a feature branch.
- Commit your changes.
- Push to the feature branch.
- Create a Pull Request.

## License

This project is not licenced.

## Contact

For any questions or feedback, please contact me from ruhelshaikh786@gmail.com
