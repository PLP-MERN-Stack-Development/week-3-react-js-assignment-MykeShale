[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19822074&assignment_repo_type=AssignmentRepo)
# React.js & Tailwind CSS Assignment

A modern, responsive React application demonstrating component architecture, state management, hooks usage, and API integration with beautiful Tailwind CSS styling.

## 🚀 Live Demo

**[Deploy your application and add the URL here]**

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [API Integration](#-api-integration)
- [State Management](#-state-management)
- [Responsive Design](#-responsive-design)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

## ✨ Features

### 🎯 Core Functionality
- **Task Manager**: Add, complete, delete, and filter tasks with localStorage persistence
- **Posts Explorer**: Fetch and display posts from JSONPlaceholder API with search and pagination
- **Theme Toggle**: Switch between light and dark modes with persistent preferences
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices

### 🛠️ Technical Features
- **Component Architecture**: Reusable UI components (Button, Card, Navbar, Footer)
- **State Management**: React hooks (useState, useEffect, useContext, custom hooks)
- **API Integration**: Fetch data with loading states and error handling
- **Routing**: Client-side routing with React Router
- **Styling**: Utility-first CSS with Tailwind CSS
- **Animations**: Smooth transitions and hover effects

## 🛠️ Technologies Used

- **React 18** - Component-based UI library
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **JSONPlaceholder API** - Mock REST API for posts data
- **LocalStorage** - Client-side data persistence

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Customizable button component
│   ├── Card.jsx        # Content container component
│   ├── Footer.jsx      # Site footer with links
│   ├── Layout.jsx      # Main layout wrapper
│   ├── Navbar.jsx      # Navigation with theme toggle
│   ├── Posts.jsx       # Posts display with API integration
│   └── TaskManager.jsx # Task management functionality
├── context/            # React context providers
│   └── ThemeContext.jsx # Theme management context
├── hooks/              # Custom React hooks
│   └── useLocalStorage.js # LocalStorage persistence hook
├── api/                # API integration
│   └── api.js          # API utility functions
├── pages/              # Page components
│   └── Home.jsx        # Landing page
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Modern web browser
- Code editor (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd week-3-react-js-assignment-MykeShale
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📖 Usage

### Task Manager
- **Add Tasks**: Type in the input field and click "Add Task" or press Enter
- **Complete Tasks**: Check the checkbox next to any task
- **Delete Tasks**: Click the "Delete" button on any task
- **Filter Tasks**: Use the filter buttons (All, Active, Completed)
- **Clear Completed**: Remove all completed tasks at once
- **Statistics**: View total, active, and completed task counts

### Posts Explorer
- **Browse Posts**: View posts from JSONPlaceholder API
- **Search**: Use the search bar to find specific posts
- **Pagination**: Navigate through pages using the pagination controls
- **Loading States**: See loading indicators during API calls
- **Error Handling**: Graceful error messages if API calls fail

### Theme Toggle
- **Switch Themes**: Click the theme toggle button in the navbar
- **Persistent**: Your theme preference is saved in localStorage
- **System Integration**: Automatically applies to all components

## 📸 Screenshots

### Light Mode
![Light Mode Home Page](screenshots/light-home.png)
![Light Mode Task Manager](screenshots/light-tasks.png)
![Light Mode Posts](screenshots/light-posts.png)

### Dark Mode
![Dark Mode Home Page](screenshots/dark-home.png)
![Dark Mode Task Manager](screenshots/dark-tasks.png)
![Dark Mode Posts](screenshots/dark-posts.png)

### Mobile Responsive
![Mobile View](screenshots/mobile-view.png)

*[Add your actual screenshots here]*

## 🔌 API Integration

The application integrates with the JSONPlaceholder API for posts data:

### API Endpoints Used
- `GET /posts` - Fetch posts with pagination
- `GET /posts?q={query}` - Search posts by title or body
- `GET /users` - Fetch user data (available for future use)

### Features
- **Pagination**: Load posts in batches of 10
- **Search**: Real-time search with debouncing
- **Error Handling**: Graceful fallbacks for API failures
- **Loading States**: Visual feedback during data fetching

## 🎛️ State Management

### React Hooks Used
- **useState**: Component-level state management
- **useEffect**: Side effects and API calls
- **useContext**: Theme management across components
- **Custom Hooks**: useLocalStorage for data persistence

### State Structure
```javascript
// Task Manager State
{
  tasks: [],           // Array of task objects
  newTask: '',         // Current input value
  filter: 'all'        // Current filter (all/active/completed)
}

// Posts State
{
  posts: [],           // Array of post objects
  loading: false,      // Loading state
  error: null,         // Error state
  currentPage: 1,      // Current page number
  searchQuery: ''      // Search term
}

// Theme State
{
  isDark: false,       // Dark mode toggle
  toggleTheme: () => {} // Theme toggle function
}
```

## 📱 Responsive Design

The application is fully responsive and optimized for:

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Responsive Features
- **Flexible Grid**: Adapts to screen size
- **Mobile Navigation**: Collapsible navigation on small screens
- **Touch-Friendly**: Appropriate button sizes and spacing
- **Readable Typography**: Scalable font sizes

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   vercel
   ```

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Drag and drop** the `dist` folder to Netlify

### Deploy to GitHub Pages

1. **Add homepage to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name"
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run build && npm run deploy
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Assignment Requirements Checklist

- ✅ **Project Setup**: Vite + React + Tailwind CSS
- ✅ **Component Architecture**: Reusable UI components
- ✅ **State Management**: React hooks implementation
- ✅ **API Integration**: JSONPlaceholder with error handling
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Theme Toggle**: Light/dark mode with persistence
- ✅ **Custom Hooks**: useLocalStorage implementation
- ✅ **Routing**: React Router setup
- ✅ **Animations**: Smooth transitions and effects

## 📄 License

This project is created for educational purposes as part of the React.js and Tailwind CSS assignment.

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [React Router](https://reactrouter.com/)

---

**Built with ❤️ using React, Vite, and Tailwind CSS** 