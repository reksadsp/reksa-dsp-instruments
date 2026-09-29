# Vibe-Coding Your Own Portfolio Website

This is a personal portfolio website, built and published with:

- **Nix** — gives you a working Ruby setup with one command, no manual installs
- **Ruby + the Neocities CLI** — pushes your website to [Neocities](https://neocities.org)
- **GitHub Copilot** — an AI coding assistant that writes and edits the code for you

You do **not** need to know how to program. If you can copy-paste commands and chat with an AI, you can do this.

---

## What you end up with

A live website at `https://YOURNAME.neocities.org` that you can update anytime by typing one command.

---

## Step 0: Install Nix (one time)

Nix installs everything else for you, so you never fight with "it doesn't work on my computer" problems.

1. Open a terminal (on Windows, use the **WSL** Linux terminal or a Mac/Linux terminal).
2. Paste this and press Enter:

   ```bash
   sh <(curl -L https://nixos.org/nix/install) && . ~/.profile
   ```

3. If that prints errors about "flakes", enable them by adding this line to your `~/.config/nix/nix.conf` file (create it if it doesn't exist):

   ```text
   experimental-features = nix-command flakes
   ```

---

## Step 1: Get this project onto your computer

```bash
git clone https://github.com/reksadsp/reksa-dsp-instruments.git
cd reksa-dsp-instruments
```

(Or use GitHub Desktop's **File → Clone repository** if you prefer clicking.)

---

## Step 2: Enter the Nix development environment

Everything you need (Ruby, OpenSSL, the Neocities gem) is declared in the `flake.nix` file. One command sets it all up:

```bash
nix develop
```

The first run downloads Ruby and takes a few minutes. When you see the shell prompt change, you're inside the environment — Ruby is installed and ready, **only inside this terminal**. (If you close the terminal, just run `nix develop` again.)

The shell automatically runs the setup for the Neocities tool:

- `gem install neocities` — installs the Neocities command-line tool
- `bundle install` — wires it up with your project's `Gemfile`

---

## Step 3: Get a GitHub Copilot setup

GitHub Copilot is the AI that writes the actual website code for you.

1. Sign up for GitHub if you haven't, and start a [Copilot subscription](https://github.com/features/copilot) (there is a free tier).
2. Install **VS Code** (a free code editor) and sign in with your GitHub account — Copilot activates automatically.
3. In VS Code, open your project folder (**File → Open Folder**), and open the Copilot Chat panel.
4. Now just talk to it in plain English, for example:

   > "Make my index.html a portfolio page with my name, a short bio, and links to my projects. Use style.css and script.js."

   Copilot writes the code; you click **Accept**. That's the vibe-coding part.

---

## Step 4: Create a Neocities account

1. Go to [neocities.org](https://neocities.org) and create a free account. Your username becomes your web address: `https://USERNAME.neocities.org`.
2. After logging in, open **Settings → API key** and copy the key.

---

## Step 5: Publish your site

Inside your `nix develop` terminal, run:

```bash
neocities login
```

- Enter your username.
- When it asks for a password, paste the **API key** you copied (it's the "password" for the command-line tool).

Then push your website to the internet:

```bash
neocities push .
```

A few seconds later, visit `https://USERNAME.neocities.org` — your site is live. 🎉

Any time you change your files (or Copilot does), just run `neocities push .` again to update the live site.

---

## How the files fit together

| File | What it is |
|---|---|
| `index.html` | Your homepage — the page visitors see |
| `style.css` | Colors, fonts, and layout |
| `script.js` | Interactive behavior (menus, animations) |
| `images/` | Your pictures and artwork |
| `flake.nix` | Tells Nix exactly which tools to install (Ruby, etc.) |
| `Gemfile` | Tells Ruby's bundler which gems the project needs (the `neocities` gem) |

You only ever need to touch the first four — and Copilot can do that for you.

---

## Troubleshooting

- **`nix: command not found`** — close and reopen your terminal, or run `. ~/.profile`.
- **`error: experimental Nix feature 'flakes' is disabled`** — do Step 0 part 3 (add `experimental-features = nix-command flakes`).
- **`neocities: command not found`** — make sure you ran `nix develop` in this terminal first.
- **Login keeps failing** — you must paste the **API key** from Neocities settings, not your account password.
- **`sudo` prompts when entering the shell** — the setup script tries `sudo gem install neocities` first; the plain `gem install` fallback covers you, so you can just cancel the sudo prompt.
- **Want to reset everything and start fresh** — delete the folder and clone again; Nix keeps your system clean.

---

## The whole workflow, day to day

```bash
nix develop          # get your tools
# chat with Copilot, edit files in VS Code
neocities push .     # publish
```

That's it. Happy vibe-coding!
