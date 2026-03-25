# 🚀 Deployment Guide

> Production-ready deployment checklist for your React project

## Table of Contents

1. [Codebase Hardening](#step-1-codebase-hardening)
2. [Linting & Code Quality](#step-2-eslint--prettier)
3. [GitHub Repository](#step-3-github-repository)
4. [Vercel Deployment](#step-4-vercel-deployment)

---

## Step 1: Codebase Hardening

**Before showing the work publicly, we polish it.**

### ✅ Code Quality Checklist

- [ ] **Remove unused imports** — Clean up all unnecessary dependencies
- [ ] **Consistent naming conventions** — Use PascalCase for components (e.g., `UserCard`, not `cardComponent`)
- [ ] **No `any` types** — Replace with proper TypeScript types
- [ ] **Proper folder structure** — Organized by feature or component type
- [ ] **Single responsibility** — Each component has one clear purpose

---

## Step 2: ESLint + Prettier (Strict Mode)

### Configuration

Update your `eslintrc.json` or ESLint config:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ]
}
```

### Run Linting

```bash
npm run lint
```

> ⚠️ **Critical**: Hook rule violations (missing dependencies, etc.) are one of the most common real-world bugs. Always fix these warnings.

---

## Step 3: GitHub — Professional Repository

### Create a New Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `react-mastery`
3. Choose public or private visibility

### Push Your Code

```bash
git init
git add .
git commit -m "Initial commit - React mastery showcase"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/react-mastery.git
git push -u origin main
```

> **Note**: Replace `YOUR_USERNAME` with your actual GitHub username.

---

## Step 4: Vercel Deployment

### Deploy Your Project

Vercel is the industry standard for React deployments. Follow these steps:

1. **Go to [Vercel](https://vercel.com)** and sign up (GitHub integration recommended)
2. **Import your GitHub repository**
   - Connect your GitHub account
   - Select the `react-mastery` repository
3. **Configure settings** (optional)
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
4. **Click Deploy** and wait for the build to complete

### Access Your Live Site

Once deployed, your application will be live at a URL like:

```
https://react-mastery-[unique-id].vercel.app
```

---

## ✨ Summary

Your React project is now:

- ✅ Linted and formatted
- ✅ Version controlled on GitHub
- ✅ Live on Vercel
