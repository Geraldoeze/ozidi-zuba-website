# Quick Start: Push Code to GitHub

## Option 1: Using v0's Built-in GitHub Integration (Recommended)

1. Click the **Settings** (⚙️) button in the top right corner of v0
2. Click on **Git** tab
3. Click **"Connect Repository"**
4. Follow the GitHub authorization flow
5. Create a new repository or select existing one
6. Done! Your code is now connected to GitHub

**Advantage**: All your future changes in v0 will automatically push to GitHub with proper commit messages.

---

## Option 2: Manual GitHub Push (If you prefer command line)

### Prerequisites
- Have a GitHub account (free at github.com)
- Have git installed on your computer
- Have the project downloaded/cloned locally

### Step-by-Step Instructions

#### 1. Create Repository on GitHub
```
1. Go to https://github.com/new
2. Enter repository name: ozidi-zuba-kubwa
3. Add description: Motor Spare Parts Website
4. Make it Public
5. DO NOT initialize with README (we already have one)
6. Click "Create repository"
```

#### 2. Get Your Repository URL
GitHub will show you the URL. Copy it. It looks like:
```
https://github.com/YOUR-USERNAME/ozidi-zuba-kubwa.git
```

#### 3. Push Your Code
Open terminal/command prompt and run:

```bash
cd /path/to/ozidi-zuba-kubwa

# Add GitHub as remote
git remote add origin https://github.com/YOUR-USERNAME/ozidi-zuba-kubwa.git

# Rename branch to main
git branch -M main

# Push code to GitHub
git push -u origin main
```

**Replace `YOUR-USERNAME` with your actual GitHub username!**

#### 4. Verify
Visit `https://github.com/YOUR-USERNAME/ozidi-zuba-kubwa` in your browser.
You should see all your files!

---

## Option 3: Using GitHub Desktop (GUI)

1. Download GitHub Desktop from https://desktop.github.com/
2. Sign in with your GitHub account
3. Click "File" → "Add Local Repository"
4. Select your ozidi-zuba-kubwa folder
5. Click "Publish repository"
6. Choose Public
7. Done!

---

## What Gets Pushed

Your repository will include:

```
✅ All source code (app/, components/, lib/)
✅ Configuration files (next.config.mjs, tailwind.config.ts, tsconfig.json)
✅ Documentation (README.md, all guides)
✅ Public assets (sitemap.xml, robots.txt, manifest.json)

❌ node_modules/ (automatically ignored)
❌ .env files (automatically ignored)
❌ .next/ build folder (automatically ignored)
```

---

## After Pushing to GitHub

### Clone on Another Computer
```bash
git clone https://github.com/YOUR-USERNAME/ozidi-zuba-kubwa.git
cd ozidi-zuba-kubwa
pnpm install
pnpm dev
```

### Deploy to Vercel
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Paste your GitHub URL
4. Select Next.js framework
5. Click Deploy
6. Your site goes live instantly!

### Collaborate with Others
1. Go to your GitHub repository
2. Click "Settings" → "Collaborators"
3. Add team members by username or email
4. They can now push changes and help debug

---

## Troubleshooting

### Remote already exists
```bash
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/ozidi-zuba-kubwa.git
```

### Authentication failed
- Use a Personal Access Token instead of password
- GitHub Settings → Developer settings → Personal access tokens
- Create token with 'repo' scope
- Use token as password when prompted

### Permission denied
```bash
# Switch from HTTPS to SSH
git remote set-url origin git@github.com:YOUR-USERNAME/ozidi-zuba-kubwa.git
```

---

## Your Project is Ready!

All 4 commits are prepared and ready to push:
- ✅ Initial project setup
- ✅ Core website pages and SEO
- ✅ Dynamic theme system
- ✅ Gallery page with social media integration

Choose your preferred option above and push now!
