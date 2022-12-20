function vd1() {
  let elmBodyTable = document.getElementById("tbody__user");
  let listUser = [
    {
      id: 1,
      name: "name 1",
      function: "Delete 1",
    },
    {
      id: 2,
      name: "name 2",
      function: "Delete 2",
    },
    {
      id: 3,
      name: "name 3",
      function: "Delete 3",
    },
    {
      id: 4,
      name: "name 4",
      function: "Delete 4",
    },
  ];

  let tempRowTable = "";
  for (let index = 0; index < listUser.length; index++) {
    tempRowTable += formatRowUser(listUser[index]);
  }
  function formatRowUser(user) {
    let _stringTr = `<tr>
    <th scope="row">${user.id}</th>
    <td>${user.name}</td>
    <td>${user.function}</td>
</tr>`;
    return _stringTr;
  }

  elmBodyTable.innerHTML = tempRowTable;
}
function vd2() {
  const LIST_USER_CARD = [
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
  ];

  let elm = document.getElementById("div_content");

  function formatUICard(user) {
    return `
    <div class="card col-3">
        <img
            src="${user.avatar}"
            ,
            class="card-img-top"
            alt="..."
        />
        <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text">
            BLACKPINK - 'BORN PINK' Concert in Seoul Day 2
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `;
  }

  let resUI = "";
  for (let index = 0; index < LIST_USER_CARD.length; index++) {
    resUI += formatUICard(LIST_USER_CARD[index]);
  }

  elm.innerHTML = resUI;
}
vd2();