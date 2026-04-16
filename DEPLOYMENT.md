# Healing Life Homeocare - Deployment Guide

Complete step-by-step deployment instructions for the MERN stack medical website.

---

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account
- Git
- Vercel account (for frontend)
- Render account (for backend)

---

## 🚀 Quick Start (Local Development)

### 1. Clone the Repository

```bash
cd healing-life-homeocare
```

### 2. Setup Backend

```bash
cd server
npm install
```

Create `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/healing-life?retryWrites=true&w=majority
NODE_ENV=development
```

Start server:
```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd client
npm install
```

Create `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

Start client:
```bash
npm run dev
```

---

## 🌐 Production Deployment

### Backend Deployment (Render)

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Create New Web Service on Render**
   - Go to [render.com](https://render.com)
   - Click "New +" > "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: healing-life-api
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Root Directory**: `server`

3. **Environment Variables**
   Add in Render dashboard:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NODE_ENV=production
   PORT=10000
   ```

4. **Get your backend URL**
   After deployment, Render will provide a URL like:
   `https://healing-life-api.onrender.com`

---

### Frontend Deployment (Vercel)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd client
   vercel
   ```

3. **Configure Environment Variables**
   - Go to Vercel dashboard
   - Select your project
   - Go to Settings > Environment Variables
   - Add variable:
     ```
     VITE_API_URL=https://healing-life-api.onrender.com/api
     ```

4. **Update CORS** (Important!)
   After getting your Vercel URL, update server CORS settings:
   
   In `server/server.js`, update:
   ```javascript
   app.use(cors({
     origin: ['https://your-vercel-url.vercel.app', 'http://localhost:3000'],
     credentials: true
   }));
   ```

---

## 🗄️ MongoDB Atlas Setup

1. **Create Account**
   - Go to [mongodb.com/atlas](https://mongodb.com/atlas)
   - Sign up and create cluster

2. **Create Database**
   - Click "Build a Database"
   - Choose M0 (Free tier)
   - Select region closest to your users
   - Click "Create Deployment"

3. **Create User**
   - Database Access > Add New Database User
   - Create username and password
   - Keep credentials safe!

4. **Network Access**
   - Network Access > Add IP Address
   - Click "Allow Access from Anywhere" (0.0.0.0/0)

5. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Drivers"
   - Select "Node.js"
   - Copy connection string
   - Replace `\u003cpassword\u003e` with your password
   - Add database name: `healing-life`

---

## 🔒 Environment Variables Reference

### Server (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/healing-life?retryWrites=true&w=majority
NODE_ENV=production
```

### Client (.env)
```env
VITE_API_URL=https://your-backend-url.herokuapp.com/api
```

---

## 📱 Post-Deployment Checklist

- [ ] Backend deployed and responding to requests
- [ ] Database connected successfully
- [ ] Frontend deployed with correct API URL
- [ ] CORS configured for frontend domain
- [ ] Test appointment form submission
- [ ] Test contact form submission
- [ ] Check all page navigation
- [ ] Verify WhatsApp button link
- [ ] Test responsive design on mobile
- [ ] Check SEO meta tags are present
- [ ] Verify Google Maps loads correctly

---

## 🔧 Troubleshooting

### CORS Errors
```
Access-Control-Allow-Origin header is missing
```
**Fix**: Add your frontend URL to CORS whitelist in server

### MongoDB Connection Failed
```
MongoNetworkError: connection timed out
```
**Fix**: Check IP whitelist in MongoDB Atlas and verify connection string

### API 404 Errors
**Fix**: Ensure API routes are correctly prefixed with `/api`

### Build Failures on Vercel
**Fix**: Check that `vercel.json` exists or redeploy with `vercel --prod`

---

## 📊 Monitoring

- **Render Dashboard**: Monitor backend logs and performance
- **Vercel Dashboard**: Monitor frontend deployments and analytics
- **MongoDB Atlas**: Monitor database usage and connections

---

## 🔄 Updates & Maintenance

### Updating Backend
```bash
cd server
# Make changes
git add .
git commit -m "Update server"
git push origin main
# Render will auto-deploy
```

### Updating Frontend
```bash
cd client
# Make changes
vercel --prod
```

---

## 📞 Support

For issues or questions:
- Check Render logs for backend errors
- Check browser console for frontend errors  
- Verify environment variables are set correctly
- Ensure CORS is properly configured

---

**Your premium medical website should now be live and accessible! 🎉**