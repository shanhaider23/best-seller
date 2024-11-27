Certainly! Below is an updated version of the `README.md` that includes a section about BEM (Block, Element, Modifier) methodology for CSS class naming.

---

# Best Seller - E-Commerce Application

## Live Demo

You can view the live version of the application deployed on Netlify at the following link:

[Best Seller - E-Commerce](https://prismatic-crisp-best.netlify.app/products)

Explore the product listings and enjoy the dynamic features!

Welcome to the Best Seller project! This is a modern e-commerce web application built with **Vue.js**, **Vuex**, and **TypeScript**. The application allows users to browse products, view product details, filter products by categories, and manage promotions, making it a great showcase of a dynamic product listing page (PLP), product detail page (PDP), and various features of an online store.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Configuration](#configuration)
- [Common Errors and Solutions](#common-errors-and-solutions)
- [BEM Methodology](#bem-methodology)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The **Best Seller** project is designed to simulate the core features of an e-commerce website. The project includes product listings, category filtering, promotions, and more. It has been built with the latest frontend technologies, including Vue.js (version 3), TypeScript, and Vuex for state management. The data is fetched from a mock API (`/data/data.json`) to populate products, categories, and promotions.

### Core Features:

1. **Product Listing Page (PLP)**: Displays a list of products with filtering and pagination options.
2. **Product Detail Page (PDP)**: Shows detailed information about a selected product, including images, descriptions, and pricing.
3. **Category Filtering**: Users can filter products by categories displayed in the sidebar.
4. **Promotions**: Show promotional banners or spots on the main page.
5. **Vuex Store**: Manages state for products, categories, and promotions.

## Technologies Used

- **Vue.js**: A progressive JavaScript framework for building user interfaces. Vue 3 is used with Composition API and single-file components.
- **TypeScript**: A statically typed superset of JavaScript that compiles to JavaScript, enhancing development with type safety.
- **Vuex**: A state management library for Vue.js, used to manage the application's state such as products, categories, and promotions.
- **Axios**: A promise-based HTTP client for making requests to the mock API to fetch product data.
- **Vue Router**: The official router for Vue.js, which handles navigation between pages.
- **SCSS**: A preprocessor scripting language that is interpreted into CSS, used to style the application with modular, reusable styles.
- **ESLint & Prettier**: Code linting and formatting tools to ensure code quality and consistency.

## Project Setup

To get started with this project, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/best-seller.git
cd best-seller
```

### 2. Install Dependencies

Use `npm` (or `yarn`) to install all the required dependencies:

```bash
npm install
```

or

```bash
yarn install
```

### 3. Run the Development Server

Once the dependencies are installed, run the development server to start the application:

```bash
npm run serve
```

or

```bash
yarn serve
```

The application should now be running at `http://localhost:8080`.

### 4. Build for Production

To build the application for production:

```bash
npm run build
```

or

```bash
yarn build
```

This will generate optimized files in the `dist/` directory.

## Features

### **1. Product Listing Page (PLP)**

The PLP displays products fetched from the API. Products can be filtered by categories, and the page dynamically updates based on user selections.

### **2. Product Detail Page (PDP)**

When a user clicks on a product, they are directed to the PDP, where more details about the product, such as description, images, price, and more, are displayed.

### **3. Sidebar Category Filters**

The sidebar allows users to filter products based on categories. This is managed through Vuex state, which stores the available categories and selected filters.

### **4. Promotions**

Promotions or promotional banners are displayed at the top of the main page, showing special offers and discounts.

### **5. Vuex Store Management**

Vuex is used to manage the state of the application. It contains modules for products, categories, and promotions, providing a centralized way to manage state across the app.

- **State**: Stores data like products, categories, and promotions.
- **Getters**: Retrieves state data with computed properties.
- **Mutations**: Updates the state data synchronously.
- **Actions**: Contains asynchronous logic, such as fetching data from an API.

### **6. TypeScript Integration**

TypeScript enhances code quality and ensures type safety across the project. Types are defined for components, API responses, and Vuex store modules.

### **7. SCSS Styling**

The app uses SCSS for styling, with modular styles for different components like the header, sidebar, and product list. This ensures easy maintainability and scalability.

## Folder Structure

Here is an overview of the project folder structure:

```
/src
  /assets        # Static assets (images, fonts, etc.)
  /components    # Reusable Vue components (e.g., ProductCard, Sidebar)
  /store         # Vuex store modules (products, categories, promotions)
  /views         # Vue pages (e.g., ProductList, ProductDetail)
  /router        # Vue Router configuration
  /types         # TypeScript types and interfaces
  /styles        # SCSS files
  /api           # API functions for fetching data (e.g., `getApi`)

public/
  index.html     # Main HTML template

package.json     # Project metadata and dependencies
tsconfig.json    # TypeScript configuration
eslint.json      # ESLint configuration
```

- **`/components`**: Contains reusable Vue components such as `ProductCard`, `Sidebar`, and `ProductFilter`.
- **`/store`**: Vuex store modules that manage the application state, like `products`, `categories`, and `promotions`.
- **`/views`**: Vue pages like `ProductList.vue` and `ProductDetail.vue`.
- **`/types`**: TypeScript interfaces and types for better type safety.
- **`/styles`**: Contains global styles and SCSS files.

## Configuration

### `tsconfig.json`

The TypeScript configuration is set up to target **ES2015** and includes necessary library files (`ES2015`, `DOM`). This configuration ensures proper TypeScript type checking and compatibility with Vue 3 and async functions.

### Vuex Store Configuration

The store is configured with modules for products, categories, and promotions. Each module has actions for fetching data, mutations for updating the state, and getters for retrieving specific pieces of data.

## BEM Methodology

The **Best Seller** project follows the **BEM (Block, Element, Modifier)** methodology for naming CSS classes. BEM is a popular convention for structuring class names in a clear and consistent way, which helps in maintaining a scalable and modular codebase.

### BEM Structure:

1. **Block**: The main component or element (e.g., `product-list`, `sidebar`).
2. **Element**: A part of the block that performs a specific function (e.g., `product-list__item`, `sidebar__link`).
3. **Modifier**: A variation of a block or element (e.g., `product-list__item--featured`, `sidebar__link--active`).

This approach ensures that the CSS is modular and reusable, and that there is no naming conflict between different components or elements. Here's an example of how it's used:

```scss
/* Block */
.product-list {
	display: flex;
	flex-wrap: wrap;
}

/* Element */
.product-list__item {
	width: 30%;
	margin: 10px;
}

/* Modifier */
.product-list__item--featured {
	border: 2px solid #ff6600;
}
```

In the above example:

- `.product-list` is the block.
- `.product-list__item` is the element inside the block.
- `.product-list__item--featured` is a modifier that styles a specific type of product item.

Using BEM allows for easy understanding and maintenance of the styles across large projects.

## Common Errors and Solutions

### Error: `Property '$store' does not exist on type 'CreateComponentPublicInstance'`

**Solution**: Ensure that Vuex is correctly set up in your Vue application. If using TypeScript, you may need to explicitly declare `this.$store` in your component's `defineComponent` setup.

### Error: `Could not find module '@/types'`

**Solution**: Ensure the TypeScript path aliases are configured correctly. This can be done in `tsconfig.json` by adding the `paths` property under `compilerOptions` to resolve paths like `@/types`.

### Error: `An async function or method in ES5 requires the 'Promise' constructor`

**Solution**: Update the `tsconfig.json` to target ES2015 or later to enable support for async/await and the `Promise` constructor.
