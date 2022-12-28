const URL_CARD = "https://63a06c35e3113e5a5c3d3680.mockapi.io/tuong";
let urlForm = new URLSearchParams(window.location.search);
let id = urlForm.get("id");
console.log(id);
if (id) {
  getCard();
}
function getCard() {
  fetch(`${URL_CARD}/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let elmId = document.getElementById("inputId");
      let elmName = document.getElementById("inputName");
      let elmAvatar = document.getElementById("inputAvatar");
      elmId.value = data.id;
      elmName.value = data.name;
      elmAvatar.value = data.avatar;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function handleSubmit() {
  let elmId = document.getElementById("inputId");
  let elmName = document.getElementById("inputName");
  let elmAvatar = document.getElementById("inputAvatar");

  let card = {
    id: elmId.value,
    name: elmName.value,
    avatar: elmAvatar.value,
  };
  postCard(card);
}
function postCard(card) {
  fetch(URL_CARD, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(card),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
