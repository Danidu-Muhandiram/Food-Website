# PET SHOP

**A pet-care and pet-supplies shopping application for pet owners.**

PET SHOP brings pet products and care services together in one easy-to-explore storefront. Visitors can browse products for different kinds of pets, read product details, use a shopping cart, and learn about available care services.

## Preview

![Animated preview of the PET SHOP website](https://raw.githubusercontent.com/Danidu-Muhandiram/Food-Website/main/public/preview/petshop.gif)

> **Please note:** This project is under development. The website is not yet a complete online store, and some displayed product information is for preview purposes.

## Contents

- [What you can do](#what-you-can-do)
- [Products and services](#products-and-services)
- [Development status](#development-status)
- [Run the project](#run-the-project)
- [Project layout](#project-layout)

## What you can do

- **Explore the shop:** Browse a sample collection of pet food and supplies.
- **View product details:** Open a product page for more information.
- **Use the shopping cart:** Add products, change quantities, or remove items. Your cart is saved in your browser.
- **Discover care services:** Read about care options and prepare an inquiry.
- **Get in touch:** Visit the contact page or use an inquiry form to open a message in your email app.
- **Learn about PET SHOP:** Visit the About page to learn more about the business.

## Products and services

The sample product collection includes food for:

- Cats and dogs
- Birds
- Rabbits
- Fish

The Services section covers:

- Veterinary care
- Grooming
- Pet pharmacy
- Diet and nutrition
- Daycare and boarding

## Development status

The storefront, product browsing, product detail pages, and browser-based cart are in place. The project is still under development, so it is not ready to handle real online orders or confirmed service bookings.

Checkout, customer accounts, live product availability, and booking workflows are not currently available. Product prices and ratings are sample values; contact the business to confirm current prices and availability.

## Run the project

### Requirements

- [Node.js](https://nodejs.org/) and npm

### Start the development server

1. Clone the repository and open its folder:

   ```bash
   git clone https://github.com/Danidu-Muhandiram/Food-Website.git
   cd Food-Website
   ```

2. Install the project packages:

   ```bash
   npm install
   ```

3. Start the local development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local development server. |
| `npm run build` | Creates a production build. |
| `npm run start` | Runs the production build locally. |
| `npm run lint` | Checks the code for lint errors. |

## Project layout

| Path | Purpose |
| --- | --- |
| `src/app/` | Website pages, including the shop, cart, services, About, and Contact pages. |
| `src/components/` | Shared page sections and reusable interface components. |
| `src/lib/` | Product, service, cart, and utility logic. |
| `public/images/` | Product and pet images used on the website. |
