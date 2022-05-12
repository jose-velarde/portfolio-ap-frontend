# Packages installation
### Eslint
- https://dev.to/alexcamachogz/haz-tu-codigo-de-angular-elegante-con-eslint-y-prettier-1p7h
```bash
# Installar ESLint
npm install --save-dev eslint

# Instalar plugins adicionales
npm install --save-dev @typescript-eslint/eslint-plugin eslint-plugin-prettier

# Instalar Prettier y sus dependencias
npm install --save-dev prettier prettier-eslint eslint-config-prettier
```
- Create .eslintrc.json
- Create .eslintignore
- Modify lint in package.json
- Create .prettierrc.json
- Install Prettier (Code formatter) and ESLint (by Microsoft) vscode extensions
- Add language config to vscode settings.json

### html tailwind parsing
Previous didn't work for html. Trying: 
https://github.com/angular-eslint/angular-eslint

```bash
# Instalar html parser
npm install --save-dev @angular-eslint/template-parser
```
- change .eslintrc config to 
    - https://github.com/ledermann/test-eslint-plugin-tailwindcss/blob/main/.eslintrc


- comment out the following
```json
// "prettier/@typescript-eslint",
```

### Tailwind
- https://tailwindcss.com/docs/guides/angular
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
npm install @tailwindcss/forms@latest

npm i -D eslint-plugin-tailwindcss
ng serve
```
- Follow instructions and add form plugin
- https://tailwindcss.com/docs/plugins#forms

- Install tailwind eslint plugin
- https://github.com/francoismassart/eslint-plugin-tailwindcss
### Icons
- https://www.npmjs.com/package/@fortawesome/angular-fontawesome
```bash
ng add @fortawesome/angular-fontawesome
```
- Installe v6 free icons
# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
