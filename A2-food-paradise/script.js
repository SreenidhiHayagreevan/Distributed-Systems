'use strict'; // Enable strict mode

/* eslint-env browser, es6 */ 
/* eslint parserOptions: { "ecmaVersion": 2021 } */

// Update visit counter and page views
function updateVisitCounter() {
    var visitCount = localStorage.getItem("pageHits");
    if (!visitCount) visitCount = 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem("pageHits", visitCount);
    var visitCounterElement = document.getElementById("page-views");
    if (visitCounterElement) visitCounterElement.textContent = visitCount;
}

document.addEventListener("DOMContentLoaded", function () {
    updateVisitCounter(); // Increment visit counter on every page load

    // Add event listeners for menu links
    document.querySelectorAll('.menu-btn').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var category = link.getAttribute('data-page');
            history.pushState({}, '', '#' + category); // Update browser history
            updatePageContent(category);
        });
    });

    // Handle page load and hash change
    window.addEventListener('hashchange', function () {
        var page = location.hash.slice(1); // Remove '#' from hash
        updatePageContent(page);
    });

    // Load default page content
    var initialPage = location.hash.slice(1) || 'home'; // Default to home
    updatePageContent(initialPage);
});

// Update the page content based on the selected category
function updatePageContent(category) {
    var contentContainer = document.getElementById('content');
    if (!contentContainer) return;

    switch (category) {
        case 'meat':
            contentContainer.innerHTML = `
                <h2>Meat Menu</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Image</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Grilled Chicken</td>
                            <td><div class="image-box"><img src="images/Chicken.jpg" alt="Grilled Chicken"></div></td>
                            <td>$12.99</td>
                        </tr>
                        <tr>
                            <td>Beef Steak</td>
                            <td><div class="image-box"><img src="images/Beef.jpg" alt="Beef Steak"></div></td>
                            <td>$18.99</td>
                        </tr>
                        <tr>
                            <td>Pork Ribs</td>
                            <td><div class="image-box"><img src="images/Pork.jpg" alt="Pork Ribs"></div></td>
                            <td>$15.99</td>
                        </tr>
                        <tr>
                            <td>Lamb Chops</td>
                            <td><div class="image-box"><img src="images/Lamb.jpg" alt="Lamb Chops"></div></td>
                            <td>$20.99</td>
                        </tr>
                        <tr>
                            <td>Turkey Burger</td>
                            <td><div class="image-box"><img src="images/Turkey.jpg" alt="Turkey Burger"></div></td>
                            <td>$10.99</td>
                        </tr>
                    </tbody>
                </table>
            `;
            break;
        case 'seafood':
            contentContainer.innerHTML = `
                <h2>Seafood Menu</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Image</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Grilled Shrimp</td>
                            <td><div class="image-box"><img src="images/Shrimp.jpg" alt="Grilled Shrimp"></div></td>
                            <td>$14.99</td>
                        </tr>
                        <tr>
                            <td>Salmon Fillet</td>
                            <td><div class="image-box"><img src="images/Salmon.jpg" alt="Salmon Fillet"></div></td>
                            <td>$16.99</td>
                        </tr>
                        <tr>
                            <td>Lobster Tail</td>
                            <td><div class="image-box"><img src="images/Lobster.jpg" alt="Lobster Tail"></div></td>
                            <td>$25.99</td>
                        </tr>
                        <tr>
                            <td>Crab Cakes</td>
                            <td><div class="image-box"><img src="images/Crab.jpg" alt="Crab Cakes"></div></td>
                            <td>$18.99</td>
                        </tr>
                        <tr>
                            <td>Fried Calamari</td>
                            <td><div class="image-box"><img src="images/Calamari.jpg" alt="Fried Calamari"></div></td>
                            <td>$12.99</td>
                        </tr>
                    </tbody>
                </table>
            `;
            break;
        case 'vegetable':
            contentContainer.innerHTML = `
                <h2>Vegetable Menu</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Image</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Grilled Vegetables</td>
                            <td><div class="image-box"><img src="images/GrilledVeg.jpg" alt="Grilled Vegetables"></div></td>
                            <td>$9.99</td>
                        </tr>
                        <tr>
                            <td>Vegetable Stir Fry</td>
                            <td><div class="image-box"><img src="images/StirFry.jpg" alt="Vegetable Stir Fry"></div></td>
                            <td>$10.99</td>
                        </tr>
                        <tr>
                            <td>Caesar Salad</td>
                            <td><div class="image-box"><img src="images/CaesarSalad.jpg" alt="Caesar Salad"></div></td>
                            <td>$8.99</td>
                        </tr>
                        <tr>
                            <td>Roasted Veggies</td>
                            <td><div class="image-box"><img src="images/RoastedVeg.jpg" alt="Roasted Veggies"></div></td>
                            <td>$11.99</td>
                        </tr>
                        <tr>
                            <td>Vegetable Lasagna</td>
                            <td><div class="image-box"><img src="images/VegLasagna.jpg" alt="Vegetable Lasagna"></div></td>
                            <td>$13.99</td>
                        </tr>
                    </tbody>
                </table>
            `;
            break;
        case 'bread_rice':
            contentContainer.innerHTML = `
                <h2>Bread & Rice Menu</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Image</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Garlic Bread</td>
                            <td><div class="image-box"><img src="images/GarlicBread.jpg" alt="Garlic Bread"></div></td>
                            <td>$5.99</td>
                        </tr>
                        <tr>
                            <td>Fried Rice</td>
                            <td><div class="image-box"><img src="images/FriedRice.jpg" alt="Fried Rice"></div></td>
                            <td>$8.99</td>
                        </tr>
                        <tr>
                            <td>Naan Bread</td>
                            <td><div class="image-box"><img src="images/Naan.jpg" alt="Naan Bread"></div></td>
                            <td>$4.99</td>
                        </tr>
                        <tr>
                            <td>Wild Rice Pilaf</td>
                            <td><div class="image-box"><img src="images/WildRice.jpg" alt="Wild Rice Pilaf"></div></td>
                            <td>$9.99</td>
                        </tr>
                        <tr>
                            <td>Cheesy Breadsticks</td>
                            <td><div class="image-box"><img src="images/Breadsticks.jpg" alt="Cheesy Breadsticks"></div></td>
                            <td>$6.99</td>
                        </tr>
                    </tbody>
                </table>
            `;
            break;
        case 'soup':
            contentContainer.innerHTML = `
                <h2>Soup Menu</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Image</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tomato Soup</td>
                            <td><div class="image-box"><img src="images/TomatoSoup.jpg" alt="Tomato Soup"></div></td>
                            <td>$6.99</td>
                        </tr>
                        <tr>
                            <td>Chicken Noodle Soup</td>
                            <td><div class="image-box"><img src="images/ChickenSoup.jpg" alt="Chicken Noodle Soup"></div></td>
                            <td>$7.99</td>
                        </tr>
                        <tr>
                            <td>Clam Chowder</td>
                            <td><div class="image-box"><img src="images/ClamChowder.jpg" alt="Clam Chowder"></div></td>
                            <td>$8.99</td>
                        </tr>
                        <tr>
                            <td>Vegetable Soup</td>
                            <td><div class="image-box"><img src="images/VegSoup.jpg" alt="Vegetable Soup"></div></td>
                            <td>$6.99</td>
                        </tr>
                        <tr>
                            <td>French Onion Soup</td>
                            <td><div class="image-box"><img src="images/OnionSoup.jpg" alt="French Onion Soup"></div></td>
                            <td>$7.99</td>
                        </tr>
                    </tbody>
                </table>
            `;
            break;
        case 'drink':
            contentContainer.innerHTML = `
                <h2>Drink Menu</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Image</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Orange Juice</td>
                            <td><div class="image-box"><img src="images/OrangeJuice.jpg" alt="Orange Juice"></div></td>
                            <td>$3.99</td>
                        </tr>
                        <tr>
                            <td>Iced Tea</td>
                            <td><div class="image-box"><img src="images/IcedTea.jpg" alt="Iced Tea"></div></td>
                            <td>$2.99</td>
                        </tr>
                        <tr>
                            <td>Lemonade</td>
                            <td><div class="image-box"><img src="images/Lemonade.jpg" alt="Lemonade"></div></td>
                            <td>$3.49</td>
                        </tr>
                        <tr>
                            <td>Mojito</td>
                            <td><div class="image-box"><img src="images/Mojito.jpg" alt="Mojito"></div></td>
                            <td>$5.99</td>
                        </tr>
                        <tr>
                            <td>Sparkling Water</td>
                            <td><div class="image-box"><img src="images/SparklingWater.jpg" alt="Sparkling Water"></div></td>
                            <td>$1.99</td>
                        </tr>
                    </tbody>
                </table>
            `;
            break;
        case 'dessert':
            contentContainer.innerHTML = `
                <h2>Dessert Menu</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Image</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chocolate Cake</td>
                            <td><div class="image-box"><img src="images/ChocolateCake.jpg" alt="Chocolate Cake"></div></td>
                            <td>$7.99</td>
                        </tr>
                        <tr>
                            <td>Cheesecake</td>
                            <td><div class="image-box"><img src="images/Cheesecake.jpg" alt="Cheesecake"></div></td>
                            <td>$6.99</td>
                        </tr>
                        <tr>
                            <td>Tiramisu</td>
                            <td><div class="image-box"><img src="images/Tiramisu.jpg" alt="Tiramisu"></div></td>
                            <td>$8.99</td>
                        </tr>
                        <tr>
                            <td>Apple Pie</td>
                            <td><div class="image-box"><img src="images/ApplePie.jpg" alt="Apple Pie"></div></td>
                            <td>$5.99</td>
                        </tr>
                        <tr>
                            <td>Ice Cream Sundae</td>
                            <td><div class="image-box"><img src="images/IceCream.jpg" alt="Ice Cream Sundae"></div></td>
                            <td>$4.99</td>
                        </tr>
                    </tbody>
                </table>
            `;
            break;
        default:
            contentContainer.innerHTML = `
                <p>Welcome 🙏 Please select a category & explore our amazing menu.</p>
            `;
    }
}