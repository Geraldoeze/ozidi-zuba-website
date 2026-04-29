# GitHub Setup Guide

## Quick Start - Push Code to GitHub

Follow these steps to create a GitHub repository and push your Ozidi Zuba in Kubwa website code:

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in to your account
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the details:
   - **Repository name**: `zuba-in-kubwa-website` (or your preferred name)
   - **Description**: "Ozidi Zuba in Kubwa - Motor Spare Parts & Car Maintenance Website"
   - **Visibility**: Choose "Public" (so it's accessible) or "Private" (if you prefer)
   - **Initialize with README**: Leave unchecked (we already have one)
5. Click "Create repository"

### Step 2: Copy Your Repository URL

After creating the repository, you'll see a page with your repository URL. It will look like:
```
https://github.com/YOUR_USERNAME/zuba-in-kubwa-website.git
```

Copy this URL - you'll need it in the next step.

### Step 3: Push Code to GitHub

Run these commands in your terminal (replace `YOUR_GITHUB_USERNAME` and `YOUR_REPO_NAME` with your actual values):

```bash
cd /vercel/share/v0-project

# Set the new remote URL
git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git

# Verify the remote was updated
git remote -v

# Push all code to GitHub
git push -u origin master
```

#### Example:
```bash
git remote set-url origin https://github.com/johndoe/zuba-in-kubwa-website.git
git push -u origin master
```

### Step 4: Access Your Code on GitHub

Once pushed, you can:
1. Visit `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`
2. View all your files and commit history
3. Use GitHub's web editor to make quick changes
4. Clone the code on other machines
5. Collaborate with team members

## Alternative: Using GitHub CLI

If you have GitHub CLI installed, you can simplify this:

```bash
# Login to GitHub
gh auth login

# Create repository directly from command line
cd /vercel/share/v0-project
gh repo create zuba-in-kubwa-website --source=. --remote=origin --push
```

## Troubleshooting

### Authentication Issues
If you get authentication errors:

1. **Using HTTPS**: Create a Personal Access Token
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate a new token with `repo` scope
   - Use the token as your password when prompted

2. **Using SSH**: Set up SSH keys
   - Generate SSH key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
   - Add to GitHub: Settings → SSH and GPG keys
   - Use SSH URL instead: `git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git`

### Already Have a Remote?
If you get an error that origin already exists:

```bash
# Remove old remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push
git push -u origin master
```

## What Gets Pushed?

Your GitHub repository will include:
- ✅ All website code (Next.js, components, pages)
- ✅ Configuration files (tailwind, next.config, etc.)
- ✅ Documentation (README, guides, checklists)
- ✅ Public assets and images
- ✅ Full commit history

## After Pushing - Next Steps

Once your code is on GitHub:

1. **Share the link**: Give your team the repository URL
2. **Clone elsewhere**: Others can clone with: `git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git`
3. **Make changes**: Edit files and commit: `git add . && git commit -m "your message" && git push`
4. **Continuous Deployment**: Connect to Vercel for automatic deployments when you push

## Connecting to Vercel for Auto-Deploy

1. Go to [Vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Import Git Repository"
4. Paste your GitHub repository URL
5. Select the repository
6. Click "Import"
7. Vercel will automatically deploy your site

Now any time you push to GitHub, Vercel will automatically redeploy!

## Additional Resources

- [GitHub Guides](https://guides.github.com/)
- [Git Documentation](https://git-scm.com/doc)
- [Vercel Deployment](https://vercel.com/docs)
