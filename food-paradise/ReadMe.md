
## How to Run the Project

1. **Clone the repository** or download the project files.
2. **Host the project on Apache** or any web server to view the site in a browser.
   - You can use `http-server` for a local server:
     ```bash
     npm install -g http-server
     http-server .
     ```
3. Open `index.html` in your browser to view the Food Paradise SPA in action.

## Key Functionalities

### 1. Single Page Application (SPA)
   - Clicking on any category (e.g., **Meat**, **Seafood**, **Desserts**) dynamically updates the content without a full page reload.
   - The URL is updated using the History API, allowing users to bookmark and revisit categories directly (e.g., `index.html#meat`).
   - The **Back** and **Forward** buttons navigate between the main page and selected subpages.

### 2. Page Hit Counter
   - Tracks how many times the page has been visited using **localStorage**. The counter updates each time the page loads.

### 3. Mouse Events
   - Hover over menu items to change their appearance (e.g., highlighting items when hovered).
   - Focus and blur events are implemented for interactive elements, providing a better user experience.

## Screenshot

Here is a screenshot of the main page of the **Food Paradise SPA**:

![Food Paradise Screenshot](images/food-paradise-screenshot.png)

## Future Improvements

- **Advanced Analytics**: Integrate analytics to track user interactions and popular categories.
- **Mobile Optimization**: Further improve responsiveness for mobile devices.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
