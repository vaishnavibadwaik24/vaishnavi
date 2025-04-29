# Yushabh Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## 🚀 Technologies Used

- React 18
- TypeScript
- Vite
- ESLint for code quality
- Modern CSS/SCSS for styling

## 🛠️ Setup and Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd yushabh-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🔧 Development

This project uses:
- TypeScript with incremental builds for faster development
- Vite for lightning-fast HMR (Hot Module Replacement)
- ESLint for code quality

### TypeScript Configuration

The project includes two TypeScript configurations:
- `tsconfig.app.json` - For the main application code
- `tsconfig.node.json` - For Vite configuration and other Node.js code

## 📝 ESLint Configuration

For production development, the ESLint configuration includes type-aware lint rules. The configuration can be expanded as shown below:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

## 🌐 Deployment

Build the project for production:
```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to your hosting platform of choice.

## 📄 License

[Your chosen license]
