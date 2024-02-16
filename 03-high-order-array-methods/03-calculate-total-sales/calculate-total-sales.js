function calculateTotalSalesWithTax(products, taxRate) {
  const totalSales = products.reduce((sum, product) => {
    sum + product.price * product.quantity
  } , 0);

  const taxAmount = (totalSales * taxRate) / 100;

  const totalSalesWithTax = taxAmount + totalSales
  return parseInt(totalSalesWithTax.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
