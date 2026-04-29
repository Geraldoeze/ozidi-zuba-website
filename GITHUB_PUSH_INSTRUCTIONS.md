# GitHub Repository Setup & Push Instructions

## Step 1: Create a New Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Fill in the repository details:
   - **Repository name**: `ozidi-zuba-kubwa` (or your preferred name)
   - **Description**: `Motor Spare Parts Website for Ozidi Zuba in Kubwa - Abuja`
   - **Visibility**: Public (so you can access it from anywhere)
   - **Initialize repository**: Leave all unchecked (we already have a git repo locally)

3. Click "Create repository"

## Step 2: Copy Your Repository URL

After creating, GitHub will show you your repository URL. It will be in the format:
```
https://github.com/YOUR-USERNAME/ozidi-zuba-kubwa.git
```

## Step 3: Add the Remote and Push

Run these commands in your terminal/command prompt:

```bash
# Navigate to the project directory
cd path/to/ozidi-zuba-kubwa

# Add the GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/ozidi-zuba-kubwa.git

# Rename branch to main if needed
git branch -M main

# Push all commits to GitHub
git push -u origin main
```

**Replace `YOUR-USERNAME` with your actual GitHub username!**

## Step 4: Verify Push Was Successful

1. Go to your GitHub repository page
2. You should see all your files and commit history
3. You're all set!

## Alternative: Using v0's Built-in GitHub Integration

If you have v0 connected to GitHub:

1. Click the **Settings** button (⚙️) in the top right
2. Go to **Git** section
3. Click "Connect Repository"
4. Create a new repository or select an existing one
5. All changes will be automatically pushed

## Project Structure on GitHub

Your repository will contain:

```
ozidi-zuba-kubwa/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── providers.tsx
│   ├── about/page.tsx
│   ├── products/page.tsx
│   ├── gallery/page.tsx
│   ├── contact/page.tsx
│   └── api/contact/route.ts
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── ThemeSwitcher.tsx
│   ├── GalleryCard.tsx
│   ├── Breadcrumb.tsx
│   └── ui/
├── lib/
│   ├── seo.ts
│   └── utils.ts
├── public/
│   ├── sitemap.xml
│   ├── robots.txt
│   └── manifest.json
├── styles/
│   └── globals.css
├── tailwind.config.ts
├── next.config.mjs
├── package.json
├── README.md
├── GITHUB_SETUP.md
├── DEPLOYMENT_CHECKLIST.md
├── USER_GUIDE.md
└── [other documentation files]
```

## Troubleshooting

### If you get "origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/ozidi-zuba-kubwa.git
```

### If you get authentication errors
- Use a personal access token instead of password
- Go to GitHub Settings > Developer settings > Personal access tokens
- Create a new token with `repo` scope
- Use the token as password when prompted

### If you get "branch is behind"
```bash
git pull origin main --allow-unrelated-histories
```

## Next Steps

1. Clone the repository on another machine:
```bash
git clone https://github.com/YOUR-USERNAME/ozidi-zuba-kubwa.git
cd ozidi-zuba-kubwa
pnpm install
pnpm dev
```

2. The website will be available at `http://localhost:3000`

3. You can now:
   - Make changes locally
   - Commit and push to GitHub
   - Deploy to Vercel directly from GitHub
   - Invite team members to collaborate

## Deploying to Vercel

Once your code is on GitHub, you can deploy to Vercel:

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Paste your GitHub repository URL
4. Select "Next.js" as the framework
5. Click "Deploy"

Vercel will automatically deploy your site and provide a live URL!
