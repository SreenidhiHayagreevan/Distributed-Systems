const express = require('express');
const app = express();
const PORT = 8081;

// Updated categories and dishes data
const categories = {
    meat: ['beef', 'pork'],
    seafood: ['fish', 'shrimp'],
    vegetables: ['cooked', 'Salad'],
};

const dishes = {
    beef: [
        { name: "Beef Steak", spicy: true, price: 25.99 },
        { name: "Beef Burger", spicy: false, price: 15.99 },
        { name: "Beef Ribs", spicy: false, price: 30.99 }
    ],
    pork: [
        { name: "Pork Chops", spicy: false, price: 18.99 },
        { name: "Spicy Pork BBQ", spicy: true, price: 22.99 },
        { name: "Pulled Pork Sandwich", spicy: false, price: 14.99 }
    ],
    fish: [
        { name: "Grilled Salmon", spicy: false, price: 24.99 },
        { name: "Spicy Tuna Roll", spicy: true, price: 16.99 },
        { name: "Fried Catfish", spicy: false, price: 21.99 }
    ],
    shrimp: [
        { name: "Garlic Butter Shrimp", spicy: false, price: 23.99 },
        { name: "Spicy Shrimp Tacos", spicy: true, price: 17.99 },
        { name: "Shrimp Scampi", spicy: false, price: 22.99 }
    ],
    cooked: [
        { name: "Grilled Veggies", spicy: false, price: 23.99 },
        { name: "Oven Roast Veggies", spicy: true, price: 17.99 },
        { name: "Veggie Shepherd's Pie", spicy: false, price: 22.99 }
    ],
    Salad: [
        { name: "Broccoli Caeser Salad", spicy: false, price: 23.99 },
        { name: "Cucumber Fruit Salad", spicy: true, price: 17.99 },
        { name: "Garden Chickpea Salad", spicy: false, price: 22.99 }
    ],
};

app.get("/search", (req, res) => {
    const { spicy, price } = req.query;
    let results = Object.values(dishes).flat();

    console.log("All dishes:", results);

    if (spicy !== undefined) {
        const isSpicy = spicy.toLowerCase() === "true";
        results = results.filter(dish => dish.spicy === isSpicy);
        console.log(`Filtering by spicy=${isSpicy}, Results:`, results);
    }

    if (price) {
        const decodedPrice = decodeURIComponent(price).trim();
        console.log("Decoded price query:", decodedPrice);

        const match = decodedPrice.match(/^([<>]=?)(\"?\d+\"?)$/);

        if (match) {
            const operator = match[1];
            const amount = parseFloat(match[2].replace(/\"/g, ''));

            console.log(`Filtering dishes where price ${operator} ${amount}`);

            results = results.filter(dish => {
                console.log(`Checking dish: ${dish.name} with price ${dish.price}`);
                switch (operator) {
                    case "<": return dish.price < amount;
                    case "<=": return dish.price <= amount;
                    case ">": return dish.price > amount;
                    case ">=": return dish.price >= amount;
                    default: return false;
                }
            });

            console.log("Filtered results:", results);
        } else {
            console.error("Invalid price format received:", decodedPrice);
            return res.status(400).json({ error: "Invalid price format. Use <, <=, >, >= followed by a number inside double quotes" });
        }
    }

    res.json(results.length ? results : { error: "No dishes found matching the criteria" });
});

app.get('/', (req, res) => {
    res.json(Object.keys(categories));
});

app.get('/:category', (req, res) => {
    const { category } = req.params;
    const subcategories = categories[category];
    if (subcategories) {
        res.json(subcategories);
    } else {
        res.status(404).json({ error: "Category not found" });
    }
});

app.get('/:category/:subcategory', (req, res) => {
    const { subcategory } = req.params;
    const dishList = dishes[subcategory];
    if (dishList) {
        res.json(dishList);
    } else {
        res.status(404).json({ error: "Subcategory not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
