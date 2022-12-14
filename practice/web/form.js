const URL_USER = "https://63a06c35e3113e5a5c3d3680.mockapi.io/users";
let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");
console.log(id);
if (id) {
  getUser();
}
function getUser() {
  fetch(`${URL_USER}/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let elmName = document.getElementById("inputName");
      let elmCity = document.getElementById("inputCity");
      let elmAvatar = document.getElementById("inputAvatar");
      elmName.value = data.name;
      elmCity.value = data.city;
      elmAvatar.value = data.avatar;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function handleSubmit() {
  let elmName = document.getElementById("inputName");
  let elmCity = document.getElementById("inputCity");
  let elmAvatar = document.getElementById("inputAvatar");

  let user = {
    name: elmName.value,
    city: elmCity.value,
    avatar: elmAvatar.value,
  };
  if (id) {
    updateUser(user);
  } else {
    postUser(user);
  }
}
function postUser(user) {
  fetch(URL_USER, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function updateUser(user) {
  fetch(`${URL_USER}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
