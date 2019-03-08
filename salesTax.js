var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function sumArray(array) {
  var sum = 0;
  for (var index in array) {
    sum += array[index];
  }
  return sum;
}

function calculateSalesTax(salesData, taxRates) {

  var totalSales = 0;
  for (var obj of salesData) {
    totalSales = sumArray(obj.sales)
    console.log(totalSales);
    };
  }

var results = calculateSalesTax(companySalesData, salesTaxRates);

function calculateTax (taxRate, totalSales) {
  return totalSales * taxRate;
}

function getTaxRate (province, taxRateObj) {
  return taxRateObj[province]
}

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/