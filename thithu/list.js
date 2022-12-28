const URL = "https://63a06c35e3113e5a5c3d3680.mockapi.io/product/";
fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    _renderUICard(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
function _renderUICard(list) {
  let elm = document.getElementById("div_list");
  function formatColumn(list) {
    return `<div class="order-3 col-12 p-3 col-md-4 col-content">
    <div class="container" onclick="goToDetail(${list.id})" ${list.id}>
        <div class="image">
            <img src="${list.image}" style="width: 250px; height: 250px" />
        </div>
        <div class="name m-3">
            <h2>${list.name}</h2>
            <p>${list.p1}</p>
            <p>${list.p2}</p>
            <p>${list.p3}</p>
            <p>${list.p4}</p>
        </div>
    </div>
</div>`;
  }
  let temp = "";

  for (let index = 0; index < list.length; index++) {
    temp += formatColumn(list[index]);
  }

  elm.innerHTML = temp;
}

function goToDetail(userId) {
  console.log("goToDetail", userId);
  window.location.href = `./detail.html?id=${userId}`;
}
