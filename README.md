 KaarYab Afghanistan

A modern opportunity discovery platform built with Next.js to help Afghan youth find jobs, internships, scholarships, remote work, training programs, volunteer opportunities, and online courses in one place.

** About the Project**

KaarYab Afghanistan is a modern web application developed as part of a university coursework assignment to demonstrate practical skills in modern frontend web development.

The project addresses a common challenge faced by Afghan youth: opportunities are often scattered across different websites, social media pages, and organizations. KaarYab Afghanistan brings these opportunities together into a single platform where users can easily search, filter, save, and manage them through an intuitive and responsive interface.

Beyond solving this problem, the project showcases the implementation of modern React and Next.js development practices, reusable component architecture, responsive UI design, state management, animations, and API integration.


** Objectives**

The primary objectives of this project were to:

- Design and develop a complete web application using Next.js.
- Build reusable and maintainable React components.
- Implement CRUD functionality.
- Practice modern UI/UX principles.
- Develop responsive layouts using Tailwind CSS.
- Manage application state using Context API.
- Implement API Routes.
- Improve user experience through animations and interactive feedback.
- Follow clean code and scalable project architecture.


** Features**

** Opportunity Management**

- Browse all opportunities
- View detailed opportunity pages
- Add new opportunities
- Edit opportunities
- Delete opportunities
- Save favorite opportunities
- Featured opportunities
- Deadline countdown
- Expiring Soon badge

** Search & Discovery**

- Search by title
- Filter by category
- Filter by opportunity type
- Sort opportunities
- Load More pagination

** Dashboard**

- Opportunity statistics
- Interactive charts
- Category overview
- Recent submissions
- Summary cards

** User Experience**

- Responsive design
- Dark / Light Mode
- Smooth page animations
- Card animations
- Loading skeletons
- Toast notifications
- Confirmation dialogs
- Empty state components

** Technical Features**

- Next.js App Router
- Dynamic Routing
- API Routes
- React Context API
- LocalStorage persistence
- Reusable Components
- Clean Folder Structure
- Component-based Architecture

** Technologies**

### Frontend

- Next.js
- React
- JavaScript (ES6+)
- Tailwind CSS

### Libraries

- Framer Motion
- Recharts
- React Icons
- React Hot Toast

### State Management

- React Context API
- LocalStorage

---

# Project Structure
kaaryab-afghanistan/

├── app/
│   ├── about/
│   │   └── page.jsx
│   ├── add-opportunity/
│   │   └── page.jsx
│   ├── api/
│   │   └── opportunities/
│   │       └── [id]/
│   │           └── route.js
│   ├── contact/
│   │   └── page.jsx
│   ├── dashboard/
│   │   └── page.jsx
│   ├── edit-opportunity/
│   │   └── [id]/
│   │       └── page.jsx
│   ├── opportunities/
│   │   └── [id]/
│   │       └── page.jsx
│   ├── saved/
│   │   └── page.jsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── DashboardCard.jsx
│   ├── EmptyState.jsx
│   ├── Footer.jsx
│   ├── Modal.jsx
│   ├── Navbar.jsx
│   ├── OpportunityCard.jsx
│   ├── OpportunityForm.jsx
│   ├── SearchFilter.jsx
│   └── Toast.jsx
│
├── context/
│   ├── SavedContext.jsx
│   ├── ThemeContext.jsx
│   └── ToastContext.jsx
│
├── data/
│   └── opportunities.js
│
└── lib/
    └── utils.js

# Available Pages

- Home
- Opportunities
- Opportunity Details
- Add Opportunity
- Edit Opportunity
- Saved Opportunities
- Dashboard
- About
- Contact



# Running the Project

Install dependencies
bash
npm install


Start the development server

bash
npm run dev


Open your browser


[http://localhost:3000](http://localhost:3000/)


---
##Project screenshot
<img width="1087" height="3001" alt="screenshot_1783877421442" src="https://github.com/user-attachments/assets/72f51682-43bd-40f9-b809-37847c51fe0c" />


# Learning Outcomes

This project helped strengthen practical knowledge in:

- Next.js App Router
- React Component Architecture
- State Management with Context API
- Responsive Web Design
- Tailwind CSS
- API Routes
- Framer Motion Animations
- Data Persistence using LocalStorage
- Reusable UI Design
- Clean Code Organization

---

# Future Improvements

- Authentication
- Database Integration
- Multi-language Support
- Admin Dashboard
- Email Notifications
- User Accounts
- PDF CV Builder

---

# Author

**Somaya Ahmadi**


# License

This project was developed for educational purposes as part of a university coursework assignment.
