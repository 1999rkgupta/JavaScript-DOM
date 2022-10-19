let dropdown = document.querySelector("#dropdown");
let tbody = document.querySelector("tbody");
let div = document.getElementById("cardBlock");
async function empDetails() {
  let data = await window.fetch("./customAPI.json");
  let fdata = await data.json();
  // console.log(fdata);
  let arr = [];
  fdata.map(val => {
    let str = "";
    str += `${val.eName}`;
    arr.push(str);
  });
  // console.log(arr);
  arr.map(e => {
    // console.log(e);
    dropdown.innerHTML += `
        <option value='${e}'>${e}</option>
        `;
  });

  ////!----------------------------------------------------------
  let str = "";
  let form = document.querySelector("#first");
  // console.dir(form);
  form.addEventListener("submit", e => {
    e.preventDefault();
    // console.log(e.target[0].value);
    str = e.target[0].value;
    fdata.map(v => {
      // console.log(v.imgsrc);

      if (str === v.eName) {
        //     tbody.innerHTML = `
        // <tr>
        //    <td>${v.eName}</td>
        //    <td>${v.id}</td>
        //    <td>${v.company}</td>
        //    <td><img src=${v.imgsrc} class=imgs  height="150px" width="120px"></td>
        // </tr>
        //     `;

        div.innerHTML = `<img
            src="${v.imgsrc}"
            alt="" height="150px" width="120px"><aside>
              <h3>Name : ${v.eName}</h3>
              <h3>Id : ${v.id}</h3>
              <h3>Company : ${v.company}</h3>
            </aside>
          `;
        div.style.display = "block";
        e.target[0].value = "";
      }
    });
  });
  ////!---------------------------------------------------
}
empDetails();

