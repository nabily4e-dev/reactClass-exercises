# Fast React Pizza Co. Project

## Overview

Fast React Pizza Co. is a web application developed using Vite, JavaScript, and React. This project showcases an interactive menu for a pizza restaurant, highlighting various pizzas with images, ingredients, and prices. The application dynamically renders components and employs conditional rendering for user experience enhancements.

## Project Structure

- **src**
  - **components**
    - `Header.jsx`
    - `Menu.jsx`
    - `Pizza.jsx`
    - `Footer.jsx`
    - `Order.jsx`
    - `App.jsx`
  - `main.css`
- **public**
  - `data.js`
  - `index.html`
  - **images**
    - `prosciutto.jpg`
    - `funghi.jpg`
    - Other pizza images

## Components

### Header
The `Header` component displays the main heading of the application with external and inline styling.

### Menu
The `Menu` component fetches pizza data from `data.js` and displays the menu items. It conditionally renders the list of pizzas or a message indicating that the menu is under development.

### Pizza
The `Pizza` component receives pizza data as props and conditionally renders each pizza item. If a pizza is sold out, it indicates this status within the UI.

### Footer
The `Footer` component shows the operational hours of the restaurant and conditionally renders the `Order` component based on whether the restaurant is open or closed.

### Order
The `Order` component provides information on operational hours and includes a button for placing orders.

### App
The `App` component serves as the root component, aggregating `Header`, `Menu`, and `Footer` components into a single layout.

## Data and Assets

- **Pizza Data**: Pizza details are stored in `data.js`, including the name, ingredients, image path, price, and availability status.
- **Images**: Images of pizzas are stored in the `public/images` directory.

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd pizza-menu-v1.0
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run serve
   ```

## Usage

1. **Main Page**: Displays the header, menu with pizzas, and footer with operational hours.
2. **Conditional Rendering**: The footer dynamically updates to show whether the restaurant is open or closed.
3. **Order Button**: When the restaurant is open, an order button is available for users to place orders.
