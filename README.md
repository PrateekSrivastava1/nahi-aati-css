
# nahi-aati-css

nahi-aati-css is a lightweight and user-friendly CSS library, offering pre-designed styles for typography, buttons, forms, and etc. With a mobile-first approach, it simplifies web development, ensuring responsive and visually appealing designs.

## Contributing

Contributions are always welcome!

See [`CONTRIBUTING.md`](https://github.com/PrateekSrivastava1/nahi-aati-css/blob/main/docs/CONTRIBUTING.md) for ways to get started.

Please adhere to this project's [`CODE_OF_CONDUCT.md`](https://github.com/PrateekSrivastava1/nahi-aati-css/blob/main/docs/CODE_OF_CONDUCT.md).

## Installation

Install nahi-aati-css with npm

```bash
  npm install @prateeksrivastava1/nahi-aati-css --registry=https://npm.pkg.github.com/PrateekSrivastava1
```

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Want to play with some UI Components? just click on the link given below : D

[**nahi-aati-css**](https://prateeksrivastava1.github.io/nahi-aati-css/)

<img width="1512" alt="Screenshot 2023-08-12 at 8 22 30 PM" src="https://github.com/PrateekSrivastava1/nahi-aati-css/assets/65366517/58c9a937-fa77-4e07-9d1c-df7efd5c307e">

## Run Locally

Clone the project

```bash
  git clone https://github.com/PrateekSrivastava1/nahi-aati-css
```

Go to the project directory

```bash
  cd nahi-aati-css
```

Install dependencies

```bash
  yarn install
```

Start Storybook

```bash
  yarn storybook
```

## Tech Stack

**Client:** React, Typescript, Styled Component, Storybook, Jest, Node.

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Usage/Examples

```typescript
import { Button } from '@prateeksrivastava1/nahi-aati-css';

function App() {
  return <Button />;
}
```

## Automated Deployment - The Coolest Feature of This Project! 🚀

Let's talk about what makes this project truly stand out - the seamless and automated deployment process!

Gone are the days of manually running a barrage of commands like npm install, npm build, and npm deploy. With this UI Component Library, I've implemented an efficient CI/CD pipeline using GitHub Actions that takes care of everything for us! 🛠️

**Here's how it works:**

**Making Changes:** Whenever I make any updates or enhancements to the library, I simply commit and push those changes to the main branch. No need to worry about the deployment process anymore!

**Automated Testing:** GitHub CI/CD springs into action automatically, running a suite of tests to ensure that everything is in perfect working order. Any issues or errors are caught early in the process, saving valuable time and effort.

**Hassle-free Build:** After the tests pass, the CI/CD pipeline proceeds to build the library, generating the optimized production-ready code.

**Smooth Deployment:** Once the build is complete, the deployment process takes over. The library is published as a GitHub Package, making it easily accessible for developers worldwide.

**Storybook Automation:** But that's not all! The automation magic extends to Storybook as well. Any changes made to the Storybook configuration are automatically deployed to GitHub Pages, creating a dynamic playground for developers to experiment with the components.

This automated deployment process ensures that the library is always up-to-date and readily available to the developer community. Say goodbye to manual deployment headaches and hello to seamless, efficient, and hassle-free updates!

### Automated Deployment Screenshot

**Failed because of same version, We always need to update the library version:**
<img width="1512" alt="Screenshot 2023-08-12 at 8 25 06 PM" src="https://github.com/PrateekSrivastava1/nahi-aati-css/assets/65366517/9a62694d-cb60-492a-8aaf-1780fdfa8e03">

**Successfull deployment for Library (package)**
<img width="1512" alt="Screenshot 2023-08-12 at 8 25 32 PM" src="https://github.com/PrateekSrivastava1/nahi-aati-css/assets/65366517/7cf9c6a7-0f75-4512-be1c-309dae3caa96">



**Successfull deployment for Storybook**
<img width="1512" alt="Screenshot 2023-08-12 at 8 27 05 PM" src="https://github.com/PrateekSrivastava1/nahi-aati-css/assets/65366517/ed075c42-2095-41a7-83b8-30a3bdf36cb3">
