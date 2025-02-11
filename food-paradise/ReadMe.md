# Food Paradise - Single Page Application (SPA)

## Project Overview

**Food Paradise** is a dynamic **Single Page Application (SPA)** designed to showcase various food categories, allowing users to explore different food items, drinks, and desserts. The application makes use of modern web technologies such as **HTML**, **CSS**, and **JavaScript** to provide a smooth, interactive, and user-friendly experience. The page dynamically updates content without full page reloads, making use of the **History API** for handling navigation and bookmarking.

### Features:
- **SPA Navigation**: Dynamically update the content without page reloads. The URL changes based on the selected category (e.g., `index.html#meat`).
- **History API**: The browser's back and forward buttons allow users to navigate between the main page and category subpages seamlessly. Bookmarks can be used to directly access specific categories.
- **Page Hit Counter**: The number of page views is tracked and displayed using **localStorage**.
- **Mouse Events**: Hover effects and focus/blur events enhance interactivity across menu items.
- **Progressive Enhancement**: The structure, presentation, and behavior are separated for better maintainability and scalability.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Features](#features)
3. [How to Run](#how-to-run)
4. [Key Functionalities](#key-functionalities)
5. [Screenshot](#screenshot)
6. [Technologies Used](#technologies-used)
7. [Future Enhancements](#future-enhancements)
8. [License](#license)

## Project Structure

Here is the directory structure for the **Food Paradise** project:

## Project Structure
```plaintext
food-paradise/
│
├── index.html
├── style.css
├── script.js
├── food.mp4
│
├── images/
│   ├── Chicken.jpg
│   ├── Beef.jpg
│   ├── Pork.jpg
│   ├── Lamb.jpg
│   ├── Turkey.jpg
│   ├── Shrimp.jpg
│   ├── Salmon.jpg
│   ├── Lobster.jpg
│   ├── Crab.jpg
│   ├── Calamari.jpg
│   ├── GrilledVeg.jpg
│   ├── StirFry.jpg
│   ├── CaesarSalad.jpg
│   ├── RoastedVeg.jpg
│   ├── VegLasagna.jpg
│   ├── GarlicBread.jpg
│   ├── FriedRice.jpg
│   ├── Naan.jpg
│   ├── WildRice.jpg
│   ├── Breadsticks.jpg
│   ├── TomatoSoup.jpg
│   ├── ChickenSoup.jpg
│   ├── ClamChowder.jpg
│   ├── VegSoup.jpg
│   ├── OnionSoup.jpg
│   ├── OrangeJuice.jpg
│   ├── IcedTea.jpg
│   ├── Lemonade.jpg
│   ├── Mojito.jpg
│   ├── SparklingWater.jpg
│   ├── ChocolateCake.jpg
│   ├── Cheesecake.jpg
│   ├── Tiramisu.jpg
│   ├── ApplePie.jpg
│   └── IceCream.jpg
│
└── README.md (optional)
```

## How to Run

To run the project locally, follow these steps:

1. **Clone the repository** or download the files.
2. **Host the project** on any web server, or use a local server such as [http-server](https://www.npmjs.com/package/http-server):
   - Install `http-server` globally:
     ```bash
     npm install -g http-server
     ```
   - Run the project in your local server:
     ```bash
     http-server .
     ```
3. Open your browser and navigate to `http://localhost:8080/index.html` (or the URL provided by your local server).

## Key Functionalities

### 1. **Single Page Application (SPA)**
   - The webpage updates dynamically based on user interaction. When a user clicks on a category (e.g., **Meat**, **Seafood**, **Drinks**, **Desserts**), the page does not reload, and only the content related to that category is updated.
   - The URL is updated using the `History API`, allowing users to bookmark specific subpages (e.g., `index.html#meat`) and return directly to them.

### 2. **History API**
   - Users can navigate between pages using the **Back** and **Forward** buttons in the browser. The application uses the `history.pushState()` and `window.onpopstate` methods to manage this navigation.
   - This allows users to share links to specific categories and easily return to previous categories.

### 3. **Page Hit Counter**
   - Every time a user visits the page, the number of page views is incremented. This count is stored in the browser's `localStorage`, so it persists across page reloads.
   - The page hit counter is displayed on the site to let users know how popular the page is.

### 4. **Mouse Events (Focus/Blur and Hover Effects)**
   - **Hover effects**: The website has hover effects on the menu items to highlight them when a user hovers over them.
   - **Focus/Blur events**: Interactive elements like buttons and links have focus and blur effects to provide a better user experience.

## Screenshot

Here is a screenshot of the main page of the **Food Paradise SPA**:

![Food Paradise Screenshot](images/food-paradise-screenshot.png)

## Technologies Used

- **HTML5**: For the structure of the web pages.
- **CSS3**: For styling the pages and creating a responsive design.
- **JavaScript**: For implementing dynamic content updates, handling user interactions, and managing the History API.
- **localStorage**: For storing the page hit count.
- **History API**: For handling back and forward navigation and enabling bookmarks.

## Future Enhancements

- **Analytics Integration**: Integrating an analytics tool (like Google Analytics) to track user interactions more comprehensively.
- **Mobile Optimization**: Further enhance the responsiveness of the website to support a wider variety of mobile devices.
- **User Authentication**: Add a feature for users to log in and save their favorite food categories.
- **Search Functionality**: Implement a search feature to allow users to search for specific food items across all categories.

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this project for personal or educational purposes. See the [LICENSE](LICENSE) file for more details.

---

Thank you for reviewing this project! Please feel free to provide any feedback or suggestions for improvement.
