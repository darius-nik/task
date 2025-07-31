# 🔐 Authentication Page and Redirect to Dashboard (Next.js + TypeScript + SCSS Modules)

A modern, responsive authentication system with **beautiful live animated backgrounds** built with Next.js, TypeScript, and SCSS Modules. Features a stunning light blue theme with floating particles, interactive canvas animations, and seamless dark mode support.

![Live Background Demo](https://img.shields.io/badge/Live-Background-blue?style=for-the-badge)
![Dark Mode](https://img.shields.io/badge/Dark-Mode-Enabled-green?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)

## ✨ Features

### 🎨 **Live Animated Background**
- **Interactive Canvas Particles**: 30 floating particles with dynamic connections
- **CSS Floating Elements**: 10 additional animated particles with glowing effects
- **Animated Gradients**: Multi-layered shifting gradients for depth
- **Responsive Design**: Optimized for all screen sizes
- **Dark Mode Adaptation**: Automatic theme switching with smooth transitions

### 🔐 **Authentication System**
- **Modern Authentication Flow**: Complete login/logout functionality
- **Form Validation**: Schema-based validation using Zod for phone numbers
- **User Data Management**: Fetches and displays random user profiles
- **Session Persistence**: Local storage for user session management

### 🎯 **UI/UX Features**
- **Glass Morphism**: Modern glass effect design with backdrop blur
- **Responsive Design**: Beautiful UI that works on all devices
- **Dark Mode Toggle**: Beautiful theme switching with smooth animations
- **Loading States**: Elegant loading spinners and transitions
- **Error Handling**: Clear validation feedback and error messages

### 🛠 **Technical Features**
- **TypeScript**: Full type safety throughout the application
- **SCSS Modules**: Modern styling with proper nesting and CSS variables
- **Reusable Components**: Modular Input, Button, and ThemeToggle components
- **Context API**: Centralized state management for authentication and themes
- **Performance Optimized**: Efficient animations and responsive design

## 🛠 Tech Stack

- **Next.js 14** (App Router) - React framework
- **TypeScript** - Full type safety
- **SCSS Modules** - Modern CSS with nesting
- **Zod** - Schema validation
- **React Hooks** - State management
- **Context API** - Global state management
- **Canvas API** - Interactive particle animations

## 📁 Project Structure

```
├── app/
│   ├── auth/
│   │   ├── page.tsx          # Authentication page
│   │   └── page.module.scss  # Auth page styles
│   ├── dashboard/
│   │   ├── page.tsx          # Dashboard page
│   │   └── page.module.scss  # Dashboard styles
│   ├── globals.scss          # Global styles & live background
│   ├── layout.tsx            # Root layout with LiveBackground
│   └── page.tsx              # Home page (redirects to auth)
├── components/
│   └── ui/
│       ├── Button.tsx        # Reusable button component
│       ├── Button.module.scss
│       ├── Input.tsx         # Reusable input component
│       ├── Input.module.scss
│       ├── ThemeToggle.tsx   # Dark mode toggle
│       ├── ThemeToggle.module.scss
│       ├── LiveBackground.tsx # Interactive animated background
│       └── LiveBackground.module.scss
├── contexts/
│   ├── AuthContext.tsx       # Authentication context
│   └── ThemeContext.tsx      # Theme management context
├── lib/
│   ├── api.ts               # API service functions
│   └── validation.ts        # Zod validation schemas
├── types/
│   └── index.ts             # TypeScript interfaces
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd auth-dashboard-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Usage

### Authentication Flow

1. **Visit the app**: You'll be redirected to `/auth`
2. **Enter phone number**: Use format (e.g., `09123456789`)
3. **Validation**: The form validates the phone number format
4. **Login**: Click "Login" to fetch random user data
5. **Dashboard**: You'll be redirected to `/dashboard` with user info

### Phone Number Validation

The application validates phone numbers:
- Must be exactly 11 digits
- Must start with "09"
- Example: `09123456789`

### Dashboard Features

- **User Profile**: Displays fetched user information with enhanced details
- **User Avatar**: Shows user's profile picture with online indicator
- **User Stats**: Age, phone, registration date, ID info, nationality, and username
- **Location Details**: Coordinates and timezone information
- **Dark Mode**: Toggle between light and dark themes
- **Logout**: Click "Logout" to sign out

## 🌟 Live Background Features

### ✨ **Animated Elements**
- **Canvas Particles**: 30 interactive particles with dynamic connections
- **CSS Particles**: 10 floating elements with glowing effects
- **Gradient Animations**: Multi-layered shifting gradients
- **Theme Responsive**: Automatic adaptation to light/dark modes

### 🎨 **Color Themes**
- **Light Mode**: Soft blue gradients (#e0f2fe, #b3e5fc, #81d4fa, #4fc3f7)
- **Dark Mode**: Deeper blue gradients (#0c1e35, #1a365d, #2d5a8b, #3b82f6)
- **Smooth Transitions**: 0.3s ease transitions between themes

### 📱 **Responsive Design**
- **Desktop**: Full particle animations and effects
- **Tablet**: Optimized particle count for performance
- **Mobile**: Simplified animations for better performance

## 🎨 Design Features

- **Modern UI**: Clean, professional design with gradients and glass morphism
- **Responsive**: Works perfectly on mobile, tablet, and desktop
- **Dark Mode**: Beautiful theme toggle with smooth transitions
- **Live Backgrounds**: Interactive animated gradients and floating elements
- **Glass Morphism**: Modern glass effect design with backdrop blur
- **Loading States**: Beautiful loading spinners
- **Error Handling**: Clear error messages and validation feedback

## 🔧 Customization

### Live Background Customization

The live background can be customized in `app/globals.scss`:

```scss
:root {
  /* Light Theme Colors - Light Blue Theme */
  --bg-primary: #e0f2fe;
  --bg-secondary: #b3e5fc;
  --bg-accent: #81d4fa;
  --bg-highlight: #4fc3f7;
  --particle-color: rgba(59, 130, 246, 0.3);
  --particle-color-2: rgba(6, 182, 212, 0.2);
  --particle-color-3: rgba(16, 185, 129, 0.15);
}

[data-theme="dark"] {
  /* Dark Theme Colors - Dark Blue Theme */
  --bg-primary: #0c1e35;
  --bg-secondary: #1a365d;
  --bg-accent: #2d5a8b;
  --bg-highlight: #3b82f6;
  --particle-color: rgba(96, 165, 250, 0.2);
  --particle-color-2: rgba(34, 211, 238, 0.15);
  --particle-color-3: rgba(16, 185, 129, 0.1);
}
```

### Components

All UI components are reusable and customizable:

```tsx
<Input
  id="phoneNumber"
  name="phoneNumber"
  placeholder="Enter phone number"
  value={value}
  onChange={handleChange}
  error={error}
/>

<Button
  variant="primary"
  size="md"
  loading={isLoading}
  onClick={handleClick}
>
  Login
</Button>

<ThemeToggle />
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 480px
- **Tablet**: 480px - 768px  
- **Desktop**: > 768px

## 🔒 Security Features

- **Form Validation**: Client-side validation with Zod
- **Type Safety**: Full TypeScript implementation
- **Error Handling**: Comprehensive error management
- **Session Management**: Secure localStorage usage

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Environment Variables

No environment variables required for this demo application.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Zod](https://zod.dev/) for schema validation
- [RandomUser.me](https://randomuser.me/) for the API
- [Inter Font](https://fonts.google.com/specimen/Inter) for typography
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) for interactive animations

## 🎯 Future Enhancements

- [ ] Add more particle effects and animations
- [ ] Implement user authentication with real backend
- [ ] Add more dashboard widgets and charts
- [ ] Implement real-time notifications
- [ ] Add more theme options and customization

---

**Note**: This is a demonstration project showcasing modern web development techniques with beautiful live backgrounds. In a production environment, you would want to implement proper authentication with JWT tokens, secure API endpoints, and additional security measures. 