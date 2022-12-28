let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");
console.log(id);
const URL = "https://63a06c35e3113e5a5c3d3680.mockapi.io/champions/" + id;
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
  let elm = document.getElementById("div_list");
  elm.innerHTML = `<div ${list.id}>
        <div class="div_box text-danger">
            <div class="d-flex">
                <div class="avatar" style="background-image: url(${list.avatar});">
                </div>
                <div>
                    <h1 style="margin-left: 15px;">
                        <span class="d-flex">${list.name}
                        </span>
                        <span> ${list.lane}
                        </span>
                    </h1>
                </div>
            </div>
        </div>
        <div class="text-dark div_skill">
            <div>
                <h6 class="text-black">${list.noitai}</h6>
                <div class="div_cast">
                    <img src="${list.imgnoitai}">
                </div>
                <p>${list.mnoitai}</p>
            </div>
            <div>
                <h6 class="text-black">${list.q}</h6>
                <div class="div_cast">
                    <img src="${list.imgq}">
                </div>
                <p>${list.mq}</p>
            </div>
            <div>
                <h6 class="text-black">${list.w}</h6>
                <div class="div_cast">
                    <img src="${list.imgw}">
                </div>
                <p>${list.mw}</p>
            </div>
            <div>
                <h6 class="text-black">${list.e}</h6>
                <div class="div_cast">
                    <img src="${list.imge}">
                </div>
                <p>${list.me}</p>
            </div>
            <div>
                <h6 class="text-black">${list.r}</h6>
                <div class="div_cast">
                    <img src="${list.imgr}">
                </div>
                <p>${list.mr}</p>
            </div>
            <div>
                <h6>${list.h}</h6>
                <iframe width="560" height="315" src="${list.videoh}"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </div>
    </div>`;
}
