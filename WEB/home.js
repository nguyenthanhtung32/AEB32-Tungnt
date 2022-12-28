const URL = "https://63a06c35e3113e5a5c3d3680.mockapi.io/tuong/";
getListCard();
function _renderUI(card) {
  let elm = document.getElementById("div_card");
  function formatCard(card) {
    return `<div onclick="handleClickRow(${card.id})" class="card" style="width: 120px">
    <img src="${card.avatar}" class="card-img-top " alt="...">
    <div class="card-body">
      <h5 class="card-title" style="text-align: center;">${card.name}</h5>
    </div>
  </div>`;
  }
  let temp = "";
  for (let index = 0; index < card.length; index++) {
    temp += formatCard(card[index]);
  }
  elm.innerHTML = temp;
}
function handleClickRow(cardId) {
  console.log("handleClickRow", cardId);
  window.location.href = `./list.html?id=${cardId}`;
}
function getListCard() {
    fetch(URL, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        _renderUI(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }