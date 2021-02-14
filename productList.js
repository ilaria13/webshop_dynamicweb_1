const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url) //fetch the data
  .then(function (res) {
    //we get a response
    return res.json(); //we return a json
  })
  .then(function (data) {
    //when we receive the data and we'll the function
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct); //loop trough the data and call a function for each product
}
/*
<template id="productTemplate">
                <article class="saleItem soldOut onSale">
                    <a href="productPage.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/10000.webp" alt="Blue T20 Indian Cricket Jersey"></a>

                        <div class="detailItem">
                        <h3 class="price"><span><del>400,00 kr</del></span> 400,00 kr</h3>
                        </div>
                        <div class="discounted">
                            <h3><span><strong>-34% </strong></span>360,00 kr </h3>
                          </div>
                </article>
            </template>
 */
function showProduct(product) {
  console.log(product);
  //this function is going to receive one item at time
  //grab the template
  const template = document.querySelector("#productTemplate").content;
  //clone it
  const copy = template.cloneNode(true);
  //change content
  copy.querySelector(".name span").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent = product.price;
  copy.querySelector(
    ".productImage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  //check if sould out or discount
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  }
  //grab parent
  const parent = document.querySelector(".productList");
  //append
  parent.appendChild(copy);
}
