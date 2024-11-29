# Health Insurance Management System for SES Unisure

## Overview
This project is a comprehensive Health Insurance Management System developed for SES Unisure. It is built using Laravel and Inertia with React for the frontend, leveraging modern web development practices to create a robust, efficient, and user-friendly system.

### Key Features
- **Policy Management**: Full CRUD operations for managing insurance policies.
- **Claims Processing**: Automated workflows for claim submission and resolution.
- **Payment Processing**: Authorised users add the payment information for the policy holder.
- **Dynamic Dashboard**: Visual representations of policies, claims, and payments.
- **Responsive Design**: Ensures usability across multiple devices.

---

## Requirements
To run this system, ensure you have the following installed:

1. **Node.js** (v21 or above)
2. **PHP** (v8.3 or above)
3. **Composer** (latest version)
5. **Laravel** (v11)
6. **npm** (v10 or above)

---

## Installation Steps
Follow these steps to set up and run the system:

### 1. Clone the Repository
```bash
git clone https://github.com/Enoch18/health_insurance.git
cd health_insurance
```

### 2. Install Backend Dependencies
```bash
composer install
```

### 3. Install Frontend Dependencies
```bash
npm install
```

### 4. Configure Environment
- Copy the `.env.example` file to `.env`:
  ```bash
  cp .env.example .env
  ```
- Update the `.env` file with your database credentials and other configurations.

### 5. Run Database Migrations
```bash
php artisan migrate
```

### 6. Seed the Database (Optional)
To populate the database with sample data:
```bash
php artisan db:seed
```

### 7. Start the Development Server
- Run the backend server:
  ```bash
  php artisan serve
  ```
- Compile the frontend assets:
  ```bash
  npm run dev
  ```

Access the system at `http://localhost:8000`.

---

## Screenshots
Include screenshots of the following:
1. **Login Page**
2. **Dashboard**
3. **Policy Management Page**
4. **Claims Page**
5. **Payment Page**

(Screenshots to be added here.)

---

## ERD and Database Relationships
The Entity Relationship Diagram (ERD) and database relationship diagram showcase the system's data structure, including:
- Users and their roles
- Policies
- Claims
- Payments

(Diagrams to be included here.)

---

## Development Methodology
This project utilized the Agile methodology to ensure iterative development, early stakeholder feedback, and continuous improvements.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.
