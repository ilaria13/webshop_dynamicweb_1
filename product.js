const url = "https://kea-alt-del.dk/t7/api/products/2801";

//fetch data
fetch(url)
  .then(function (response) {
    return response.json(); //get info from json
  })
  .then(function (data) {
    //get the data of each product and go to function (callback)
    showProduct(data);
  });

//populate page
function showProduct(product) {
  console.log(product);
  document.querySelector(".productTitle").textContent =
    product.productdisplayname;
  document.querySelector(".price").textContent = product.price;
  document.querySelector(".brandName").textContent = product.brandname;
  document.querySelector(".colour").textContent = product.basecolour;

  /*https://kea-alt-del.dk/t7/images/webp/640/10000.webp*/
  document.querySelector(
    ".productImg img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".productImg img").alt = product.productdisplayname;
}
