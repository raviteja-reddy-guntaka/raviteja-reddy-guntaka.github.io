# Welcome to My Portfolio

Welcome to my personal portfolio website! I’m Raviteja Guntaka, a Software Engineer passionate about building scalable web applications and robust microservices. This site showcases my projects, professional experience, and technical skills.

## About This Portfolio

This portfolio is built using a modern tech stack:
- **React** and **TypeScript** for a dynamic, component-based front-end.
- **CSS** for styling that mirrors a clean, responsive design.
- **Create React App** for project bootstrapping.
- **GitHub Pages** for seamless, static site hosting.

I leverage GitHub Pages to host my portfolio, enabling quick and easy updates while maintaining a fully version-controlled and collaborative environment.

## How It Works

1. **Development**:  
   The portfolio is developed with React, where each section (Header, Projects, Experience, and Footer) is built as a separate component. I use CSS to style the components, including a dynamic background animation and a horizontally scrollable projects section.

2. **Deployment**:  
   The project is configured with a `homepage` field in `package.json` and uses the `gh-pages` package. Running the deploy script builds the app and pushes the static files to the `gh-pages` branch. GitHub Pages then serves the content directly from that branch.

## Fork and Create Your Own Portfolio

Feel free to fork this repository and use it as a starting point for your own portfolio. Here’s how:

1. **Fork the Repository**:  
   Click the "Fork" button at the top-right corner of this GitHub repo.

2. **Clone Your Fork**:  
   ```bash
   git clone https://github.com/<your-username>/<your-forked-repo>.git
   cd <your-forked-repo>
   ```

3. **Install Dependencies**:  
   ```bash
   npm install
   ```

4. **Customize the Content**:  
   Update the components in the `src` folder (e.g., `HeaderPage.tsx`, `Projects.tsx`, `Experience.tsx`) and modify the styles in `App.css` to personalize the content to your liking.

5. **Deploy to GitHub Pages**:  
   Update the `homepage` field in your `package.json` with your custom URL (e.g., `https://<your-username>.github.io/<your-repo-name>`), then run:
   ```bash
   npm run deploy
   ```
   This will build your portfolio and publish it to the `gh-pages` branch.

Enjoy building your own personalized portfolio website!
