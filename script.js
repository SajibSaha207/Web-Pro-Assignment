const loadBtn = document.getElementById("loadBtn");
const dataList = document.getElementById("dataList");

loadBtn.addEventListener("click", () => {
  const saha = new XMLHttpRequest();
  // api url: https://github.com/SajibSaha207/Web-Pro-Assignment/blob/main/get.json
  saha.open(
    "GET",
    "https://github.com/SajibSaha207/Web-Pro-Assignment/blob/main/get.json",
    true
  );

  saha.onload = () => {
    let data = JSON.parse(saha.responseText);
    let list = document.getElementById("dataList");
    let str = "";
    for (i in data) {
      for (j in data[i]) {
        str += `<p>${j} : ${data[i][j]}<p>`;
      }
    }
    list.innerHTML = str;
  };

  saha.send();
});
