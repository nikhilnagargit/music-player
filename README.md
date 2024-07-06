# Check Live - 
music-player-liart-ten.vercel.app

# Insights
<img width="1498" alt="Screenshot 2024-07-04 at 10 05 59 AM" src="https://github.com/nikhilnagargit/music-player/assets/44896376/019bc633-2cc8-471c-9275-e8e776a8e9e1">
<img width="294" alt="Screenshot 2024-07-04 at 10 06 37 AM" src="https://github.com/nikhilnagargit/music-player/assets/44896376/d489e120-7c16-4db7-b6c7-42b856199be6">
<img width="298" alt="Screenshot 2024-07-04 at 10 06 45 AM" src="https://github.com/nikhilnagargit/music-player/assets/44896376/fe31a583-d2a1-462f-b76d-d62b1b25384e">



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
