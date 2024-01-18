/* ------------------------------ TASK 6 -----------------------------------
Turimas "products" masyvas. 

Parašykite funkcijas, kurios atliks nurodytas užduotis:
1. funkcija "getAveragePrice" - kaip argumentą priims masyvą ir duoto masyvo
atveju grąžins visų "products" vidutinę kainą kaip skaičių.
2. funkcija "getProductsNames" - kaip argumentą priims masyvą ir duoto masyvo
atveju grąžins visų "products" pavadinimus naujame masyve pvz., ['Product 1', 'Product 2', ...].
3. funkcija "getUniqueCategories" - kaip argumentą priims masyvą ir duoto masyvo
atveju grąžins visų unikalių "products" kategorijų sąrašą.
-------------------------------------------------------------------------- */

const products = [
  { id: "1", name: "Product 1", price: 10, category: "Electronics" },
  { id: "2", name: "Product 2", price: 20, category: "Books" },
  { id: "3", name: "Product 3", price: 30, category: "Clothing" },
  { id: "4", name: "Product 4", price: 40, category: "Electronics" },
  { id: "5", name: "Product 5", price: 50, category: "Books" },
];

function calculateAveragePrice(products) {
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
  const averagePrice = totalPrice / products.length;
  return averagePrice;
}

const averagePrice = calculateAveragePrice(products);
console.log(averagePrice);

function getProductNames(products) {
  return products.map((product) => product.name);
}

const productNames = getProductNames(products);
console.log(productNames);

function getUniqueCategories(products) {
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];
  return uniqueCategories;
}

const uniqueCategories = getUniqueCategories(products);
console.log(uniqueCategories);
