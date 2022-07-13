window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; // class "loader hidden"
});
let api =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  let input = document.getElementById("input");
let allItems = document.getElementById("all-items");
function creatBitcoin(allData){
  for (let i = 0; i < allData.length; i++) {
    let item = document.createElement("div");
    let image = document.createElement("img");
    let para = document.createElement("p");
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");
    let para3 = document.createElement("p");
    let para4 = document.createElement("p");
    let para5 = document.createElement("p");
    let imageGraf = document.createElement("img");
    allItems.append(item);
    item.append(image);
    item.append(para);
    item.append(para1);
    item.append(para2);
    item.append(para3);
    item.append(para4);
    item.append(para5);
    item.append(imageGraf);
    item.style.cssText = `${borderColor(allData[i].price_change_percentage_24h)}`
    allItems.style.cssText =
    "display: flex;justify-content: center;flex-wrap: wrap;gap: 41px;";
    image.src = allData[i].image;
    image.style.cssText = "width:40px;";
    image.innerHTML = `<img class="" src="${allData[i].image}" alt="">`;
    para.innerHTML = `<p class = "">${allData[i].name} ${allData[i].symbol}</p>`;
    para2.innerHTML = `<p class = ""> $${allData[i].current_price}</p>`;
    para3.innerHTML = `<p class = "">${allData[i].total_volume}</p>`;
    para4.innerHTML = `<p class = "">${allData[
      i
    ].price_change_percentage_24h.toFixed(1)}</p>`;
    para5.innerHTML = `<p class = "">${allData[i].market_cap}</p>`;
    imageGraf.src = `${grafColor(allData[i].price_change_percentage_24h)}`;
    imageGraf.style.cssText = "width: 200px;height: 90px;";
    function grafColor(number) {
      if (number < 0) {
        return (imageGraf.src = "https://www.coingecko.com/coins/14629/sparkline");
      } else {
        return (imageGraf.src =
          "https://www.coingecko.com/coins/4713/sparkline");
        }
      }
      function borderColor(number) {
        if (number < 0) {
          return (item.style.cssText ="border: 2px solid red;width: 300px;border-radius: 20px");
        } else {
          return (item.style.cssText ="border: 2px solid green;width: 300px;border-radius: 20px");
          }
        }
    }
  }
  
  function filterByUser(user) {
    allItems.innerHTML = "";
    let filterBitcoin = user.filter(function (coin) {
      return coin.name.toLowerCase().includes(input.value);
    });
    creatBitcoin(filterBitcoin);
}

fetch(api)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  creatBitcoin(data);
  input.addEventListener("keyup", function () {
    filterByUser(data);
  });
});
