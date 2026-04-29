# Quick Push Commands

## TL;DR - Just Copy & Paste

### 1. First, create a new empty repository on GitHub.com (don't initialize anything)

### 2. Then run these commands (replace the URL with your GitHub repo URL):

```bash
cd /vercel/share/v0-project

git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

git push -u origin master
```

## That's it! Your code is now on GitHub.

---

## Full Step-by-Step

### Create GitHub Repository:
1. Go to https://github.com/new
2. Enter name: `zuba-in-kubwa-website`
3. Click "Create repository"
4. Copy the HTTPS URL shown (looks like: `https://github.com/yourname/zuba-in-kubwa-website.git`)

### Push Your Code:

```bash
# Navigate to your project
cd /vercel/share/v0-project

# Update the remote to point to your GitHub repo
git remote set-url origin https://github.com/YOUR_USERNAME/zuba-in-kubwa-website.git

# Verify it worked
git remote -v

# Push all code to GitHub
git push -u origin master
```

### Verify Success:
- Visit https://github.com/YOUR_USERNAME/zuba-in-kubwa-website
- You should see all your files!

---

## Current Git Status

```
Branch: master
Commits: 2
Last Commit: feat: add dynamic theme and gallery page

Current Remote: /tmp/v0-git-bundle-1777422661569.bundle (temporary)
```

Your code is ready to push - just update the remote URL!

---

## Common Issues & Fixes

### "Permission denied (publickey)"
→ Use HTTPS instead of SSH, or set up SSH keys on GitHub

### "remote: Repository not found"
→ Check you copied the URL correctly from your GitHub repo

### "fatal: A branch named 'master' already exists"
→ This shouldn't happen. If it does, try: `git push --force-with-lease -u origin master`

---

## Want to Make Changes Later?

```bash
# Make changes to files
# Then:
git add .
git commit -m "Describe what you changed"
git push
```

Done! Your changes are automatically sent to GitHub.
