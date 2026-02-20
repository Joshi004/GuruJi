# Hosting GuruJi Fun Food Menu on GitHub Pages

## How GitHub Pages Works

GitHub Pages is a **free static site hosting service** built into GitHub. It takes the files in a specific branch or folder of your repository and serves them as a live website at a public URL.

For a Vite + React app:
1. Your source code lives in the `main` branch (`src/`, `index.html`, etc.)
2. You run `npm run build` which produces a `dist/` folder containing plain HTML, CSS, and JS
3. You push that `dist/` folder's contents to a special branch called `gh-pages`
4. GitHub Pages serves the `gh-pages` branch as your live website

---

## What the Live URL Will Look Like

Since the GitHub account is **Joshi004** and the repository will be named (for example) `gurujifunfood-menu`:

```
https://joshi004.github.io/gurujifunfood-menu/
```

This is the URL you will encode into your QR code so customers can scan and open the menu.

> If you name the repository exactly `Joshi004.github.io`, GitHub gives you a root URL: `https://joshi004.github.io` — but that only allows one such repository per account. For a restaurant menu it is simpler to use a named repo.

---

## Step-by-Step: How It Will Work

```
Your Mac                        GitHub                        Customer's Phone
────────────                    ──────                        ─────────────────
Edit menu / code
      │
      ▼
npm run build          ──►   git push to main
      │                           │
      ▼                           ▼
dist/ folder           ──►   gh-pages branch  ──►  GitHub Pages CDN
                                                         │
                                                         ▼
                                               https://joshi004.github.io/
                                                  gurujifunfood-menu/
                                                         │
                                               QR Code ──┘
                                                         │
                                                         ▼
                                               Customer scans & sees menu
```

---

## One-Time Setup Steps

### 1. Create a GitHub Repository
- Go to [github.com](https://github.com) and log in as **Joshi004**
- Click **New repository**
- Name it `gurujifunfood-menu` (or any name you prefer)
- Set it to **Public** (required for free GitHub Pages)
- Do **not** add a README (the project already has files)

### 2. Link Your Local Project to GitHub
Run these commands once inside the `gurujifunfood-menu/` folder:
```bash
git init
git remote add origin https://github.com/Joshi004/gurujifunfood-menu.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 3. Install the Deployment Tool
```bash
npm install --save-dev gh-pages
```
`gh-pages` is a small npm package that automates pushing your `dist/` folder to the `gh-pages` branch.

### 4. Configure Vite for the Sub-path
Because the site lives at `/gurujifunfood-menu/` (not at the root `/`), Vite needs to know this when building. A single line is added to `vite.config.js`:
```js
base: '/gurujifunfood-menu/',
```
Without this, links to CSS/JS files would break on the live site.

### 5. Add Deploy Scripts to `package.json`
Two lines are added to the `scripts` section:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
- `predeploy` runs automatically before `deploy` — it builds the production files
- `deploy` pushes the `dist/` folder to the `gh-pages` branch on GitHub

### 6. Enable GitHub Pages in Repository Settings
- Go to your repo on GitHub → **Settings** → **Pages**
- Under **Source**, select **Deploy from a branch**
- Choose branch: `gh-pages`, folder: `/ (root)`
- Click **Save**

This only needs to be done once. After that, every `npm run deploy` automatically updates the live site.

---

## How to Update the Menu in the Future

Whenever you want to change a price, add an item, or remove something:

1. Edit `src/data/menuData.js` on your Mac
2. Run one command:
   ```bash
   npm run deploy
   ```
3. Wait ~60 seconds — the live site at the QR code URL is updated

No login to any hosting dashboard needed.

---

## The Deployment Script (What It Will Do Automatically)

We can create a single shell script `deploy.sh` that handles everything in one double-click:

```
deploy.sh
  │
  ├─ Runs: npm run build        (creates dist/ with optimised files)
  │
  ├─ Runs: gh-pages -d dist     (pushes dist/ to gh-pages branch)
  │
  └─ Prints: "✅ Live at https://joshi004.github.io/gurujifunfood-menu/"
```

---

## Summary of What Will Be Changed in the Codebase

| File | What Changes | Why |
|---|---|---|
| `vite.config.js` | Add `base: '/gurujifunfood-menu/'` | Fixes asset paths on GitHub Pages |
| `package.json` | Add `predeploy` and `deploy` scripts + `gh-pages` dev dependency | Enables `npm run deploy` command |
| `deploy.sh` *(new)* | One-click deploy script | Convenience wrapper |

**No component or menu data files are touched.** The menu content stays exactly as-is.

---

## Cost

| Item | Cost |
|---|---|
| GitHub account | Free |
| GitHub Pages hosting | Free (public repo) |
| Custom domain (optional) | Your domain registrar's price |

---

## Optional: Custom Domain

If you want the URL to be something like `menu.gurujifunfood.com` instead of the github.io URL:
1. Add a `CNAME` file to the `dist/` folder containing your domain name
2. Point your domain's DNS to GitHub's servers
3. Set the custom domain in GitHub Pages settings

This is optional — the `github.io` URL works perfectly for QR codes.
