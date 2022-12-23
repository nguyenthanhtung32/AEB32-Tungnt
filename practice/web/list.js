/* const LIST_USER_CARD = [
    {
      name: "Jisoo",
      avatar:
        "https://kpopping.com/documents/80/4/800/221015-BLACKPINK-JISOO-BLACKPINK-World-Tour-BORN-PINK-Concert-at-Seoul-documents-1(1).jpeg?v=9270a",
      city: "Hàn Quốc",
      id: "27",
    },
    {
      name: "Rosé",
      avatar:
        "https://lh3.googleusercontent.com/DT-s4wCctNpPrEf8pLz_ANFAnT9wjpdRDtcUG8SkKl-yp2XqinN7uliFRMnVJ042YiZZgQJMBomCoZybgnb-xqL1P7oPRZ2CKA5WklIpueQtwX4=w960-rj-l80-nu-e365",
      city: "New Zealand",
      id: "25",
    },
    {
      name: "Lisa",
      avatar:
        "https://kpopping.com/documents/3c/3/800/221016-BLACKPINK-LISA-BLACKPINK-World-Tour-BORN-PINK-at-Seoul-documents-5.jpeg?v=b61f5",
      city: "Thái Lan",
      id: "25",
    },
    {
      name: "Jennie",
      avatar:
        "https://kpopping.com/documents/c6/0/800/221016-BLACKPINK-Jennie-BORN-PINK-Concert-in-Seoul-Day-2-documents-1(9).jpeg?v=9270a",
      city: "Hàn Quốc",
      id: "26",
    },
  ]; */

const URL = "https://63a06c35e3113e5a5c3d3680.mockapi.io/users";
getListUser();

function _renderUI(users) {
  let elmBody = document.getElementById("tbody__user");

  function formatRow(user) {
    return `
    <tr>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.city}</td>
      <td>${user.avatar}</td>
      <td>
        <button class="btn btn-success" onclick="goToDetail(${user.id})">Detail</button>
        <button class="btn btn-danger" onclick="deleteUser(${user.id})">Delete</button>
        <button class="btn btn-primary" onclick="handleEdit(${user.id})">Edit</button>
      </td>
    </tr>
    `;
  }

  let bodyTable = "";

  for (let index = 0; index < users.length; index++) {
    bodyTable += formatRow(users[index]);
  }

  elmBody.innerHTML = bodyTable;
}

function getListUser() {
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

function goToDetail(userId) {
  console.log("goToDetail", userId);
  window.location.href = `./detail.html?id=${userId}`;
}

function deleteUser(userId) {
  console.log("deleteUser");
  let user_delete = URL + "/" + userId;
  fetch(user_delete, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      getListUser();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function handleEdit(userId) {
  console.log("handleEdit", userId);
  window.location.href = `./form.html?id=${userId}`;
}
