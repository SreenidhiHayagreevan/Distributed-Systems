'use strict'; // Enable strict mode

// Update visit counter and page views
function updateVisitCounter() {
    let visitCount = localStorage.getItem('pageHits');
    if (!visitCount) {
        visitCount = 0;
    }
    visitCount = parseInt(visitCount, 10) + 1; // Add radix parameter (base 10)
    localStorage.setItem('pageHits', visitCount);
    const visitCounterElement = document.getElementById('page-views');
    if (visitCounterElement) {
        visitCounterElement.textContent = visitCount;
    }
}

// Update the page content based on the selected category
function updatePageContent(category) {
    const contentContainer = document.getElementById('content');
    if (!contentContainer) {
        return;
    }

    // Show the container and update its content
    contentContainer.removeAttribute('hidden'); // Make the container visible

    switch (category) {
        case 'meat':
            contentContainer.innerHTML = `
                <h2>Meat Menu</h2>
                <div class="tab-container">
                    <a href="#beef" class="tab-button">Beef</a>
                    <a href="#pork" class="tab-button">Pork</a>
                    <a href="#lamb" class="tab-button">Lamb</a>
                    <a href="#poultry" class="tab-button">Poultry</a>
                </div>
                <div class="text-center mt-4">
                    <a href="index.html" class="btn btn-primary">Home🏠</a>
                </div>
            `;
            break;
        case 'beef':
            contentContainer.innerHTML = `
                <h2>Beef Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Beef Steak</td>
                        <td><img src="images/beef.jpg" alt="Beef Steak" class="dish-image"></td>
                        <td>$15.99</td>
                    </tr>
                    <tr>
                        <td>Beef Burger</td>
                        <td><img src="images/beef-burger.jpg" alt="Beef Burger" class="dish-image"></td>
                        <td>$10.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#meat" class="btn btn-primary">Back to Meat</a>
                </div>
            `;
            break;
        case 'pork':
            contentContainer.innerHTML = `
                <h2>Pork Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Pork Ribs</td>
                        <td><img src="images/pork-ribs.jpg" alt="Pork Ribs" class="dish-image"></td>
                        <td>$15.99</td>
                    </tr>
                    <tr>
                        <td>Pork Chops</td>
                        <td><img src="images/pork-chops.jpg" alt="Pork Chops" class="dish-image"></td>
                        <td>$10.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#meat" class="btn btn-primary">Back to Meat</a>
                </div>
            `;
            break;
        case 'lamb':
            contentContainer.innerHTML = `
                <h2>Lamb Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Lamb Chops</td>
                        <td><img src="images/lamb-chops.jpg" alt="Lamb Chops" class="dish-image"></td>
                        <td>$15.99</td>
                    </tr>
                    <tr>
                        <td>Lamb Curry</td>
                        <td><img src="images/lamb-curry.jpg" alt="Lamb Curry" class="dish-image"></td>
                        <td>$10.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#meat" class="btn btn-primary">Back to Meat</a>
                </div>
            `;
            break;
        case 'poultry':
            contentContainer.innerHTML = `
                <h2>Poultry Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Chicken Wings</td>
                        <td><img src="images/chicken-wings.jpg" alt="Chicken Wings" class="dish-image"></td>
                        <td>$15.99</td>
                    </tr>
                    <tr>
                        <td>Turkey Breast</td>
                        <td><img src="images/turkey-breast.jpg" alt="Turkey Breast" class="dish-image"></td>
                        <td>$10.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#meat" class="btn btn-primary">Back to Meat</a>
                </div>
            `;
            break;
        case 'seafood':
            contentContainer.innerHTML = `
                <h2>Seafood Menu</h2>
                <div class="tab-container">
                    <a href="#fish" class="tab-button">Fish</a>
                    <a href="#shrimp" class="tab-button">Shrimp</a>
                    <a href="#crab" class="tab-button">Crab</a>
                    <a href="#shellfish" class="tab-button">Shellfish</a>
                </div>
                <div class="text-center mt-4">
                    <a href="index.html" class="btn btn-primary">Home🏠</a>
                </div>
            `;
            break;
        case 'fish':
            contentContainer.innerHTML = `
                <h2>Fish Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Grilled Salmon</td>
                        <td><img src="images/salmon.jpg" alt="Grilled Salmon" class="dish-image"></td>
                        <td>$19.99</td>
                    </tr>
                    <tr>
                        <td>Fish Tacos</td>
                        <td><img src="images/fish-tacos.jpg" alt="Fish Tacos" class="dish-image"></td>
                        <td>$12.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#seafood" class="btn btn-primary">Back to Seafood</a>
                </div>
            `;
            break;
        case 'shrimp':
            contentContainer.innerHTML = `
                <h2>Shrimp Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Shrimp Cocktail</td>
                        <td><img src="images/shrimp-cocktail.jpg" alt="Shrimp Cocktail" class="dish-image"></td>
                        <td>$14.99</td>
                    </tr>
                    <tr>
                        <td>Grilled Shrimp Skewers</td>
                        <td><img src="images/grilled-shrimp.jpg" alt="Grilled Shrimp Skewers" class="dish-image"></td>
                        <td>$17.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#seafood" class="btn btn-primary">Back to Seafood</a>
                </div>
            `;
            break;
        case 'crab':
            contentContainer.innerHTML = `
                <h2>Crab Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Crab Cakes</td>
                        <td><img src="images/crab-cakes.jpg" alt="Crab Cakes" class="dish-image"></td>
                        <td>$22.99</td>
                    </tr>
                    <tr>
                        <td>Crab Legs</td>
                        <td><img src="images/crab-legs.jpg" alt="Crab Legs" class="dish-image"></td>
                        <td>$29.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#seafood" class="btn btn-primary">Back to Seafood</a>
                </div>
            `;
            break;
        case 'shellfish':
            contentContainer.innerHTML = `
                <h2>Shellfish Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Lobster Roll</td>
                        <td><img src="images/lobster-roll.jpg" alt="Lobster Roll" class="dish-image"></td>
                        <td>$25.99</td>
                    </tr>
                    <tr>
                        <td>Oysters</td>
                        <td><img src="images/oyster.jpg" alt="Oysters" class="dish-image"></td>
                        <td>$19.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#seafood" class="btn btn-primary">Back to Seafood</a>
                </div>
            `;
            break;
        case 'vegetable':
            contentContainer.innerHTML = `
                <h2>Vegetable Menu</h2>
                <div class="tab-container">
                    <a href="#salad" class="tab-button">Salad</a>
                    <a href="#cooked" class="tab-button">Cooked</a>
                </div>
                <div class="text-center mt-4">
                    <a href="index.html" class="btn btn-primary">Home🏠</a>
                </div>
            `;
            break;
        case 'salad':
            contentContainer.innerHTML = `
                <h2>Salad Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Caesar Salad</td>
                        <td><img src="images/caesar-salad.jpg" alt="Caesar Salad" class="dish-image"></td>
                        <td>$8.99</td>
                    </tr>
                    <tr>
                        <td>Garden Salad</td>
                        <td><img src="images/garden-salad.jpg" alt="Garden Salad" class="dish-image"></td>
                        <td>$7.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#vegetable" class="btn btn-primary">Back to Vegetable</a>
                </div>
            `;
            break;
        case 'cooked':
            contentContainer.innerHTML = `
                <h2>Cooked Vegetable Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Grilled Asparagus</td>
                        <td><img src="images/grilled-asparagus.jpg" alt="Grilled Asparagus" class="dish-image"></td>
                        <td>$10.99</td>
                    </tr>
                    <tr>
                        <td>Roasted Carrots</td>
                        <td><img src="images/roasted-carrots.jpg" alt="Roasted Carrots" class="dish-image"></td>
                        <td>$9.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#vegetable" class="btn btn-primary">Back to Vegetable</a>
                </div>
            `;
            break;
        case 'bread_rice':
            contentContainer.innerHTML = `
                <h2>Bread/Rice Menu</h2>
                <div class="tab-container">
                    <a href="#bread" class="tab-button">Bread</a>
                    <a href="#rice" class="tab-button">Rice</a>
                    <a href="#noodle" class="tab-button">Noodle</a>
                    <a href="#potato" class="tab-button">Potato</a>
                </div>
                <div class="text-center mt-4">
                    <a href="index.html" class="btn btn-primary">Home🏠</a>
                </div>
            `;
            break;
        case 'bread':
            contentContainer.innerHTML = `
                <h2>Bread Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Garlic Bread</td>
                        <td><img src="images/garlic-bread.jpg" alt="Garlic Bread" class="dish-image"></td>
                        <td>$4.99</td>
                    </tr>
                    <tr>
                        <td>French Baguette</td>
                        <td><img src="images/french-baguette.jpg" alt="French Baguette" class="dish-image"></td>
                        <td>$3.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#bread_rice" class="btn btn-primary">Back to Bread/Rice</a>
                </div>
            `;
            break;
        case 'rice':
            contentContainer.innerHTML = `
                <h2>Rice Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Fried Rice</td>
                        <td><img src="images/fried-rice.jpg" alt="Fried Rice" class="dish-image"></td>
                        <td>$9.99</td>
                    </tr>
                    <tr>
                        <td>White Rice</td>
                        <td><img src="images/white-rice.jpg" alt="White Rice" class="dish-image"></td>
                        <td>$5.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#bread_rice" class="btn btn-primary">Back to Bread/Rice</a>
                </div>
            `;
            break;
        case 'noodle':
            contentContainer.innerHTML = `
                <h2>Noodle Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Spaghetti</td>
                        <td><img src="images/spaghetti.jpg" alt="Spaghetti" class="dish-image"></td>
                        <td>$12.99</td>
                    </tr>
                    <tr>
                        <td>Ramen</td>
                        <td><img src="images/ramen.jpg" alt="Ramen" class="dish-image"></td>
                        <td>$11.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#bread_rice" class="btn btn-primary">Back to Bread/Rice</a>
                </div>
            `;
            break;
        case 'potato':
            contentContainer.innerHTML = `
                <h2>Potato Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Mashed Potatoes</td>
                        <td><img src="images/mashed-potatoes.jpg" alt="Mashed Potatoes" class="dish-image"></td>
                        <td>$7.99</td>
                    </tr>
                    <tr>
                        <td>French Fries</td>
                        <td><img src="images/french-fries.jpg" alt="French Fries" class="dish-image"></td>
                        <td>$5.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#bread_rice" class="btn btn-primary">Back to Bread/Rice</a>
                </div>
            `;
            break;
        case 'soup':
            contentContainer.innerHTML = `
                <h2>Soup Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Tomato Soup</td>
                        <td><img src="images/tomato-soup.jpg" alt="Tomato Soup" class="dish-image"></td>
                        <td>$5.99</td>
                    </tr>
                    <tr>
                        <td>Chicken Soup</td>
                        <td><img src="images/chicken-soup.jpg" alt="Chicken Soup" class="dish-image"></td>
                        <td>$6.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#menu" class="btn btn-primary">Back to Menu</a>
                </div>
            `;
            break;
        case 'drink':
            contentContainer.innerHTML = `
                <h2>Drink Menu</h2>
                <div class="tab-container">
                    <a href="#alcohol" class="tab-button">Alcohol</a>
                    <a href="#wine" class="tab-button">Wine</a>
                    <a href="#softdrink" class="tab-button">Soft Drink</a>
                </div>
                <div class="text-center mt-4">
                    <a href="index.html" class="btn btn-primary">Home🏠</a>
                </div>
            `;
            break;
        case 'alcohol':
            contentContainer.innerHTML = `
                <h2>Alcohol Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Beer</td>
                        <td><img src="images/beer.jpg" alt="Beer" class="dish-image"></td>
                        <td>$5.99</td>
                    </tr>
                    <tr>
                        <td>Whiskey</td>
                        <td><img src="images/whiskey.jpg" alt="Whiskey" class="dish-image"></td>
                        <td>$8.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#drink" class="btn btn-primary">Back to Drink</a>
                </div>
            `;
            break;
        case 'wine':
            contentContainer.innerHTML = `
                <h2>Wine Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Red Wine</td>
                        <td><img src="images/red-wine.jpg" alt="Red Wine" class="dish-image"></td>
                        <td>$12.99</td>
                    </tr>
                    <tr>
                        <td>White Wine</td>
                        <td><img src="images/white-wine.jpg" alt="White Wine" class="dish-image"></td>
                        <td>$11.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#drink" class="btn btn-primary">Back to Drink</a>
                </div>
            `;
            break;
        case 'softdrink':
            contentContainer.innerHTML = `
                <h2>Soft Drink Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Coca Cola</td>
                        <td><img src="images/coca-cola.jpg" alt="Coca Cola" class="dish-image"></td>
                        <td>$2.99</td>
                    </tr>
                    <tr>
                        <td>Sprite</td>
                        <td><img src="images/sprite.jpg" alt="Sprite" class="dish-image"></td>
                        <td>$2.49</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#drink" class="btn btn-primary">Back to Drink</a>
                </div>
            `;
            break;
        case 'dessert':
            contentContainer.innerHTML = `
                <h2>Dessert Menu</h2>
                <div class="tab-container">
                    <a href="#cheese" class="tab-button">Cheese</a>
                    <a href="#cookie" class="tab-button">Cookie</a>
                    <a href="#cake" class="tab-button">Cake</a>
                    <a href="#icecream" class="tab-button">Ice Cream</a>
                    <a href="#fruit" class="tab-button">Fruity Bites</a>
                </div>
                <div class="text-center mt-4">
                    <a href="index.html" class="btn btn-primary">Home🏠</a>
                </div>
            `;
            break;
        case 'cheese':
            contentContainer.innerHTML = `
                <h2>Cheese Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Cheddar</td>
                        <td><img src="images/cheddar.jpg" alt="Cheddar" class="dish-image"></td>
                        <td>$6.99</td>
                    </tr>
                    <tr>
                        <td>Brie</td>
                        <td><img src="images/brie.jpg" alt="Brie" class="dish-image"></td>
                        <td>$8.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#dessert" class="btn btn-primary">Back to Dessert</a>
                </div>
            `;
            break;
        case 'cookie':
            contentContainer.innerHTML = `
                <h2>Cookie Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Chocolate Chip</td>
                        <td><img src="images/chocolate-chip-cookie.jpg" alt="Chocolate Chip Cookie" class="dish-image"></td>
                        <td>$4.99</td>
                    </tr>
                    <tr>
                        <td>Oatmeal Raisin</td>
                        <td><img src="images/oatmeal-raisin-cookie.jpg" alt="Oatmeal Raisin Cookie" class="dish-image"></td>
                        <td>$3.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#dessert" class="btn btn-primary">Back to Dessert</a>
                </div>
            `;
            break;
        case 'cake':
            contentContainer.innerHTML = `
                <h2>Cake Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Chocolate Cake</td>
                        <td><img src="images/chocolate-cake.jpg" alt="Chocolate Cake" class="dish-image"></td>
                        <td>$7.99</td>
                    </tr>
                    <tr>
                        <td>Cheesecake</td>
                        <td><img src="images/cheesecake.jpg" alt="Cheesecake" class="dish-image"></td>
                        <td>$8.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#dessert" class="btn btn-primary">Back to Dessert</a>
                </div>
            `;
            break;
        case 'icecream':
            contentContainer.innerHTML = `
                <h2>Ice Cream Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Vanilla</td>
                        <td><img src="images/vanilla-ice-cream.jpg" alt="Vanilla Ice Cream" class="dish-image"></td>
                        <td>$4.99</td>
                    </tr>
                    <tr>
                        <td>Chocolate</td>
                        <td><img src="images/chocolate-ice-cream.jpg" alt="Chocolate Ice Cream" class="dish-image"></td>
                        <td>$5.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#dessert" class="btn btn-primary">Back to Dessert</a>
                </div>
            `;
            break;
        case 'fruit':
            contentContainer.innerHTML = `
                <h2>Fruity Bites Menu</h2>
                <table class="menu-table">
                    <tr>
                        <td>Apple Pie</td>
                        <td><img src="images/apple.jpg" alt="Apple" class="dish-image"></td>
                        <td>$3.99</td>
                    </tr>
                    <tr>
                        <td>Banana Bread</td>
                        <td><img src="images/banana.jpg" alt="Banana" class="dish-image"></td>
                        <td>$2.99</td>
                    </tr>
                </table>
                <div class="text-center mt-4">
                    <a href="#dessert" class="btn btn-primary">Back to Dessert</a>
                </div>
            `;
            break;
        default:
            contentContainer.innerHTML = `
                <h2>Welcome To Our Menu</h2>
                <p>Choose your favorite category and enjoy our food!</p>
            `;
            break;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    updateVisitCounter(); // Increment visit counter on every page load

    // Add event listeners for dropdown menu items
    document.querySelectorAll('.dropdown-item').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const category = link.getAttribute('data-page');
            history.pushState({}, '', `#${category}`); // Update browser history
            updatePageContent(category);
        });
    });

    // Handle page load and hash change
    window.addEventListener('hashchange', function () {
        const page = location.hash.slice(1); // Remove '#' from hash
        updatePageContent(page);
    });

    // Load default page content
    const initialPage = location.hash.slice(1); // No default content
    updatePageContent(initialPage);
});