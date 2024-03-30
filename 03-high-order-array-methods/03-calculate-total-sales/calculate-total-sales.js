/*
function calculateTotalSalesWithTax(products, taxRate) {
  const totalSales = products.reduce((sum, product) => {
    sum + product.price * product.quantity
  } , 0);

  const taxAmount = (totalSales * taxRate) / 100;

  const totalSalesWithTax = taxAmount + totalSales
  return parseInt(totalSalesWithTax.toFixed(2));
}
*/

const products = [
  { name: 'Apple', price: 0.5, quantity: 10 },
  { name: 'Banana', price: 0.3, quantity: 20 },
  { name: 'Orange', price: 0.6, quantity: 15 },
];

function calculateTotalSalesWithTax(products, taxRate) {
  // iterate over products array -  for every item
  // calc totalSale - item.price * item.quantity
  const totalSales = products.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  // calc total tax - taxRate * totalSale / 100
  const totalTax = (taxRate * totalSales) / 100;

  // return totalTax + totalSale
  return parseFloat((totalTax + totalSales).toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
