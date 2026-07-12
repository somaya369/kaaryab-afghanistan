# 💼 KaarYab Afghanistan

A modern opportunity discovery platform built with **Next.js** to help Afghan youth find jobs, internships, scholarships, remote work, training programs, volunteer opportunities, and online courses in one place.

---

## 📝 About the Project
KaarYab Afghanistan is a modern web application developed as part of a university coursework assignment to demonstrate practical skills in modern frontend web development.

The project addresses a common challenge faced by Afghan youth: opportunities are often scattered across different websites, social media pages, and organizations. KaarYab Afghanistan brings these opportunities together into a single platform where users can easily search, filter, save, and manage them through an intuitive and responsive interface.

Beyond solving this problem, the project showcases the implementation of modern React and Next.js development practices, reusable component architecture, responsive UI design, state management, animations, and API integration.

---

## 👥 Target Users & Audience
KaarYab Afghanistan is custom-tailored to support vulnerable and ambitious demographics in the current socio-economic landscape:
* **Students & Fresh Graduates**: Looking for local internships, entry-level roles, and career resources to bridge the gap between education and employment.
* **Women Seeking Remote Work**: Tailored for women in Afghanistan who require secure, work-from-home (remote) employment, online training, or digital skills.
* **Scholarship Seekers**: Afghan youth tracking global educational opportunities, fully funded fellowships, and online degree programs.
* **Organizations & NGOs**: Entities looking for a central, trusted platform to publish and promote their opportunities to top local talent.

---

## 🗂️ Supported Opportunity Categories
The architecture handles diverse opportunity types using specific metadata badges:
* 🏢 **Job**: Professional full-time and part-time local career openings.
* 🎓 **Scholarship**: National and international fully/partially funded educational grants.
* 🚀 **Internship**: Skill-building configurations for students and career starters.
* 💻 **Remote Work / Online Course**: Global remote options and online learning tracks.
* 🤝 **Volunteer Work / Training Program**: Community-driven projects and bootcamps.

---

## 🎯 Objectives
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

---

## ✨ Features

### 🛠️ Opportunity Management
- Browse all opportunities
- View detailed opportunity pages
- Add new opportunities
- Edit opportunities
- Delete opportunities
- Save favorite opportunities
- Featured opportunities
- Deadline countdown
- Expiring Soon badge

### 🔍 Search & Discovery
- Search by title
- Filter by category
- Filter by opportunity type
- Sort opportunities
- Load More pagination

### 📊 Dashboard
- Opportunity statistics
- Interactive charts
- Category overview
- Recent submissions
- Summary cards

### 🎨 User Experience
- Responsive design
- Dark / Light Mode
- Smooth page animations
- Card animations
- Loading skeletons
- Toast notifications
- Confirmation dialogs
- Empty state components

### ⚙️ Technical Features
- Next.js App Router
- Dynamic Routing
- API Routes
- React Context API
- LocalStorage persistence
- Reusable Components
- Clean Folder Structure
- Component-based Architecture

---

## 💻 Technologies

### 🔹 Frontend
- Next.js (App Router)
- React
- JavaScript (ES6+)
- Tailwind CSS

### 🔹 Libraries
- Framer Motion
- Recharts
- React Icons
- React Hot Toast

### 🔹 State Management
- React Context API
- LocalStorage

---

## 📂 Project Structure
```text
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
```

### 📄 Available Pages
* Home (`/`)
* Opportunities (`/opportunities`)
* Opportunity Details (`/opportunities/[id]`)
* Add Opportunity (`/add-opportunity`)
* Edit Opportunity (`/edit-opportunity/[id]`)
* Saved Opportunities (`/saved`)
* Dashboard (`/dashboard`)
* About (`/about`)
* Contact (`/contact`)

---

## 🚀 Running the Project Local

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Go to [http://localhost:3000](http://localhost:3000)

---

## 🎓 Learning Outcomes
This project helped strengthen practical knowledge in:
- Next.js App Router & Server/Client Components
- React Component Architecture & Custom Hooks
- State Management with Context API
- Responsive Web Design using Tailwind CSS Fluid Layouts
- Next.js API Routes and Dynamic URL parameters
- Framer Motion Animations & Orchestration
- Data Persistence using LocalStorage Sync
- Reusable UI Design patterns and Clean Code Organization

---

## 🔮 Future Improvements
- **Authentication**: Implementing NextAuth.js for secure user logs.
- **Database Integration**: Connecting to MongoDB/PostgreSQL via Prisma ORM.
- **Multi-language Support**: Adding Dari and Pashto translations.
- **Admin Dashboard**: Advanced metrics and authorization controls.
- **Email Notifications**: Automatic alerts for newly matching job tags.
- **User Accounts**: Custom candidate profiles and application history tracking.
- **PDF CV Builder**: An automatic resume generator for students.

---

## ✍️ Author
**Somaya Ahmadi**

## 📄 License
This project was developed for educational purposes as part of a university coursework assignment.
