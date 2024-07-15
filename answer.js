// ## Food Delivery Questions

// ### Setup Data

const orders = [
  {
    id: 1,
    dishName: "Burger",
    category: "Fast Food",
    chef: "John Doe",
    ratings: [5, 4, 5],
  },
  {
    id: 2,
    dishName: "Pizza",
    category: "Italian",
    chef: "Jane Smith",
    ratings: [4, 3, 5],
  },
  {
    id: 3,
    dishName: "Sushi",
    category: "Japanese",
    chef: "Tom Brown",
    ratings: [5, 5, 4],
  },
  {
    id: 4,
    dishName: "Salad",
    category: "Healthy",
    chef: "Alice Green",
    ratings: [3, 4, 5],
  },
  {
    id: 5,
    dishName: "Pasta",
    category: "Italian",
    chef: "Gowtam Tinnanuri",
    ratings: [4, 4, 5],
  },
];

const moreOrders = [
  {
    id: 6,
    dishName: "Tacos",
    category: "Mexican",
    chef: "Carlos Ruiz",
    ratings: [4, 5, 4],
  },
  {
    id: 7,
    dishName: "Ramen",
    category: "Japanese",
    chef: "Yuki Tanaka",
    ratings: [5, 4, 5],
  },
];

// ### Questions

// 1. 🍽️ Filter and Join Dish Names

//    Write a function that filters out dishes with ratings below 4, then returns a string of dish names separated by commas.

console.log(getHighRatedDishes(orders));
// Should print: "Burger, Sushi, Pasta, Tacos, Ramen"

function getHighRatedDishes(orders) {
  const highRatedDishes = orders
    .filter((order) => order.ratings.every((rating) => rating >= 4))
    .map((order) => order.dishName);
  return highRatedDishes.join(", ");
}

function getHighRatedDishes(orders) {
  const highRatedDishes = orders
    .filter((order) => order.ratings.every((rating) => (rating = 4)))
    .map((order) => order.dishName);
  return highRatedDishes.join(", ");
}
// 2. 🍔 Slice and Map Dish Names

//    Write a function that slices the first N dishes from the orders array, maps their names, and joins them into a single string.

console.log(getFirstNDishNames(orders, 3));
// Should print: "Burger, Pizza, Sushi"
function getFirstNDishNames(orders, n) {
  return orders
    .slice(0, n)
    .map((order) => order.dishName)
    .join(", ");
}

// 3. 🍲 Merge Orders with Default Values

//    Write a function that merges two arrays of food orders

console.log(mergeOrders(orders, moreOrders)); // Should print the merged array of orders
console.log(mergeOrders(orders)); // Should print the original array of orders
function mergeOrders(orders, moreOrders = []) {
  return [...orders, ...moreOrders];
}

// 4. 🥗 Fetch Dish Names by IDs

//    Write a function that accepts multiple order IDs, fetches the dish names, and returns a formatted string using the rest operator, nullish coalescing, and template literals.

//    ```js
console.log(getDishNamesByIds(orders, 1, 3, 5));
// Should print: Selected Dishes: Burger, Pasta, Sushi
console.log(getDishNamesByIds(orders, 1, 6));
// Should print: Selected Dishes: Burger, Unknown Dish
console.log(getDishNamesByIds(orders, 5, 1));
// Should print: Selected Dishes: Sushi, Burger

function getDishNamesByIds(orders, ...ids) {
  const dishNames = ids.map((id) => {
    const order = orders.find((order) => order.id === id);
    return order?.dishName ?? "Unknown Dish";
  });
  return `Selected Dishes:${dishNames.join(",")}`;
}

// 5. 🍜 List Dish Names and Categories

//    Write a function that accepts any number of food orders and returns a formatted string listing their dish names and categories using the rest operator, nullish coalescing, and template literals.

//    ```js
console.log(listOrders(...orders));
// Should print: Burger (Fast Food), Pizza (Italian), Sushi (Japanese), Salad (Healthy), Pasta (Italian)
console.log(listOrders(orders[0], orders[1], orders[111]));
// Should print: Burger (Fast Food), Pizza (Italian), Unknown Dish (Unknown Category)

function listOrders(...orders) {
  const orderDetails = orders.map((order) => {
    const dishName = order?.dishName ?? "Unknown Dish";
    const dishCategory = order?.category ?? "Unknown Category";
    return `${dishName} (${dishCategory})`;
  });
  return orderDetails.join(", ");
}

// 6. 📊 Calculate Total Ratings for Chefs

//    Write a function that calculates the total number of ratings for each chef.
console.log(getTotalRatingsForChefs(orders));
// Should print: { "John Doe": 6, "Jane Smith": 3, "Tom Brown": 3, "Alice Green": 3 }

function getTotalRatingsForChefs() {}

function getTotalRatingsForChefs(orders) {
  return orders.reduce((chefRatings, order) => {
    const chef = order.chef;
    const totalRatings = order.ratings.reduce((sum, rating) => sum + rating, 0);
  });
}

// Output: { "John Doe": 14, "Jane Smith": 12, "Tom Brown": 14, "Alice Green": 12, "Gowtam Tinnanuri": 13, "Carlos Ruiz": 13, "Yuki Tanaka": 14 }

// # 7. Refactoring `getOrderDetails`

// Improve `getOrderDetails` through several refactoring steps.

// ### **Original Function**

const order = {
  dish: {
    name: "Burger",
    category: "Fast Food",
  },
  quantity: 2,
  price: 5.0,
};

function getOrderDetails(o) {
  const dishName = o.dish.name;
  const dishCategory = o.dish.category;
  const orderQuantity = o.quantity;
  const orderPrice = o.price;

  return `${dishName} (${dishCategory}) x${orderQuantity} costs $${orderPrice}`;
}
console.log(getOrderDetails(order));

// ---

// # 8. Refactoring `displayOrderSummary` 🚚

// Refactor `displayOrderSummary` to improve handling of missing data and enhance code clarity.

// ### **Example Data**

// ```javascript
// function displayOrderSummary(orderId) {
//   const order = orders.find((o) => o.id === orderId);
//   if (
//     order &&
//     order.dish &&
//     order.dish.name &&
//     order.dish.category &&
//     order.quantity &&
//     order.price
//   ) {
//     console.log(
//       `${order.dish.name} (${order.dish.category}) x${order.quantity} costs $${order.price}`,
//     );
//   } else {
//     console.log("Some order data is missing.");
//   }
// }

// displayOrderSummary(1);
// displayOrderSummary(2);
// displayOrderSummary(3);
// ```

// // 1.Answer
// function getHighRatedDishes(orders) {
//   const highRatedDishes = orders
//     .filter((order) => order.ratings.every((rating) => rating >= 4))
//     .map((order) => order.dishName);
//   return highRatedDishes;
// }
// // 2.Answer
