# Healing Life Homeocare - Full Stack Medical Website

A premium, modern, and fully responsive medical website for a homeopathy clinic built with the MERN stack (MongoDB, Express, React, Node.js).

## 🏗️ Architecture

### Three-Tier Architecture:
1. **Presentation Layer**: React.js + Tailwind CSS + Framer Motion
2. **Application Layer**: Node.js + Express.js
3. **Data Layer**: MongoDB Atlas

## 📁 Project Structure

```
healing-life-homeocare/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── context/        # React context
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── package.json
├── server/                 # Node.js Backend
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Middleware
│   └── package.json
└── .env                    # Environment variables
```

## 🚀 Features

- **Premium UI/UX**: Modern healthcare design with smooth animations
- **Responsive Design**: Mobile-first, fully responsive
- **Appointment Booking**: Full-stack appointment system
- **Admin Dashboard**: View and manage appointments
- **Animations**: Framer Motion scroll animations and micro-interactions
- **SEO Optimized**: Meta tags, structured data
- **WhatsApp Integration**: Floating chat button

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion, Lucide React
- **Backend**: Node.js, Express.js, CORS, Dotenv
- **Database**: MongoDB Atlas, Mongoose
- **Deployment**: Vercel (Frontend), Render (Backend)

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account
- npm or yarn

### 1. Clone and Setup

```bash
git clone <repository-url>
cd healing-life-homeocare
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create `.env` file in server folder:
```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
NODE_ENV=development
```

Start server:
```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd client
npm install
```

Create `.env` file in client folder:
```env
VITE_API_URL=http://localhost:5000/api
```

Start client:
```bash
npm run dev
```

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/appointments | Create new appointment |
| GET | /api/appointments | Get all appointments |
| DELETE | /api/appointments/:id | Delete appointment |
| POST | /api/contact | Submit contact form |
| GET | /api/testimonials | Get all testimonials |

## 📱 Deployment

### Backend Deployment (Render)

1. Push code to GitHub
2. Create new Web Service on Render
3. Connect GitHub repository
4. Set environment variables:
   - `MONGODB_URI`
   - `NODE_ENV=production`
5. Deploy

### Frontend Deployment (Vercel)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in client folder
3. Set environment variable:
   - `VITE_API_URL`: Your Render backend URL

## 👨‍⚕️ Admin Access

Navigate to `/admin` to view the appointment dashboard.

## 📄 License

MIT License

## 🤝 Support

For support, email support@healinglifehomeocare.com