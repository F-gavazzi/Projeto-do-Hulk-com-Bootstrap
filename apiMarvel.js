function getParams() {
  const apiKey = "73da05e770ee8aa50af741f985f3d075";
  const privateKey = "3cf7931c65386597cab0bad01e535be02738499c";
  const ts = new Date().getTime();
  const hash = md5(`${ts}${privateKey}${apiKey}`);

  return {
    ts,
    apiKey,
    hash,
  };
}
function cretePersonagem() {
  /////////////////////////////////////////////CONTENT//////////////////////////////////////////////  
  const content = document.querySelector("#content");
  const list = document.querySelector("#list");

  const title = document.createElement("h4");
  title.classList.add("mt-2", "h3");
  title.innerText = "Personagem Marvel";

  const name = document.createElement("h1");
  name.classList.add("h1");
  name.innerText = "Hulk";

  const img = document.createElement("img");
  img.src = "./img/personagem.jpg";
  img.classList.add("img-fluid");

  const text = document.createElement("p");
/////////////////////////////////////////////TABLE//////////////////////////////////////////////////
  const table = document.createElement("table");
  table.classList.add("table", "table-bordered", "mt-4", "text-center");

  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const contentTable = ["ID", "Titulo", "Tipo"];

  contentTable.forEach((item) => {
    const th = document.createElement("th");
    th.innerText = item;

    tr.append(th);
  });
  const tbody = document.createElement("tbody");
  const contentTbody = [
    { id: "398123", titulo: "titulo comic", tipo: "tipo comic" },
    { id: "398123", titulo: "titulo comic", tipo: "tipo comic" },
  ];
  contentTbody.forEach((item) => {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = item.id;

    const td2 = document.createElement("td");
    td2.innerText = item.titulo;

    const td3 = document.createElement("td");
    td3.innerText = item.tipo;

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tbody.append(tr);
  });

  const divTable = document.createElement("div");
  divTable.classList.add("text-center", "align-center");



/////////////////////////////////////////////////////LISTA/////////////////////////////////////////
  const h3 = document.createElement("h3");
  // h3.classList.add("-center")
  h3.innerText = "Histórias";

  const ul = document.createElement("ul");
  ul.classList.add("ml-2");

  const lista = [
    "FREE COMIC BOOK DAY 2013 1 (2013) #1",
    "Hulk (2008) #53",
    "Hulk (2008) #54",
    "Hulk (2008) #55",
  ];
  lista.forEach((item) => {
    const li1 = document.createElement("li");
    li1.innerText = item;

    ul.append(li1);
  });

  const h4List=document.createElement("h4");
  h4List.classList.add("pb-2" , "text-white" , "mt-4" );
  h4List.innerText = "Lista de Aparições (comics)"

  const divList = document.createElement("div");
  divList.classList.add("text-white", "mt-2" , "ml-2");


  ///////////////////////////////////////////////////APPEND/////////////////////////////////////////////
  content.append(title);
  content.append(name);
  content.append(text);
  content.append(img);
  divTable.append(h3);
  divTable.append(table);
  content.append(divTable);
  thead.append(tr);
  table.append(thead);
  table.append(tbody);

  list.append(h4List)
  divList.append(ul);
  list.append(divList);
}
cretePersonagem();


function urlSepara(url){
  const id = url.split("/")
  const item = id.length -1 

}


function getApi(params) {
  const res = new XMLHttpRequest();
  const url = `http://gateway.marvel.com/v1/public/characters/?ts=${params.ts}&apikey=${params.apiKey}&hash=${params.hash}`;
  res.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(res.responseText);
     const heroi = document.querySelector("#heroi");
      response.data.results.forEach(params => {
        const srcImg = params.thumbnail.path + '.'+ params.thumbnail.extension;
        const heroiName= params.name;
        getCard(srcImg , heroiName, heroiName);
      });    
      console.log(response.data.results)
    }

    };
  res.open("GET", url, true);
  res.send();
}

const params = getParams();
getApi(params);


