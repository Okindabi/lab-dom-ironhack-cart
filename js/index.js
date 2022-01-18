// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  let newTotal = (Number(price) * Number(quantity)).toFixed(2);
  subtotal.innerHTML = newTotal;
  return newTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test
  // ITERATION 2
  let allProducts = document.getElementsByClassName('product');
  let finalTotal = 0;

  for (let i = 0; i < allProducts.length; i++) {
    let productTotal = updateSubtotal(allProducts[i]);
    finalTotal += Number(productTotal);
  }

  let ultimateTotal = document.querySelector('#total-value span');
  console.log(ultimateTotal);
  ultimateTotal.innerHTML = finalTotal.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
