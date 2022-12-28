let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");
console.log(id);

const URL = "https://63a06c35e3113e5a5c3d3680.mockapi.io/product/" + id;

fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    _renderInfoCard(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function _renderInfoCard(list) {
  let elm = document.getElementById("info_card");
  elm.innerHTML = `<div class="col-12 col-md-4 col-content">
    <div class="container" ${list.id}>
        <div class="image">
            <img src="${list.image}" style="width: 180px; height: 180px" />
        </div>
        <div class="name">
            <h2>${list.name}</h2>
            <p>${list.p1}</p>
            <p>${list.p2}</p>
            <p>${list.p3}</p>
            <p>${list.p4}</p>
        </div>
    </div>
</div>`;
}
function goToDetail(cardId) {
    console.log("goToDetail", cardId);
    window.location.href = `./detail.html?id=:${cardId}`;
  }