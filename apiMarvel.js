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
function createPersonagem(personagem){
  /////////\\\\\////////////////ID\\\\\\/\/\/\//\/\/\/\/\////ID\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ID/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
  const content = document.querySelector("#content");
  const list = document.querySelector("#list");
//\/\//\/\/\//\/\/\/\//\/\/\/\//\/\/\/CONTENT/\/\/\/\/\/\/\/\/\/\/\/\/\/\/CONTENT\/\/\/\//\//\/\/\//\/\/\/\/\//\/\/\//\/\/\//\\/\
  const title = document.createElement("h3");
  title.classList.add("mt-2", "h5");
  title.innerText = "Personagem Marvel";
  
  const namePersonagem =document.createElement("h1")
  namePersonagem.classList.add("mt-2");
  namePersonagem.innerText= personagem.name;
  
  const text =document.createElement("p")
  text.classList.add("h5", "mt-3")
  text.innerText= personagem.description

  const img =document.createElement("img")
  img.classList.add("img-fluid");
  img.src = `${personagem.thumbnail.path}.${personagem.thumbnail.extension}`;
////////\/\/\/\/\/\//\/\/\/\/\/\/\/TABLE\//\/\/\/;\/\/\/\/\/\/\/\/\/\//\/\/\\/\/\///\/\\//\/\/\/\//\/\//\//\
  const historias = document.createElement("h2");
  historias.classList.add("mt-4", "mb-2", "text-center");
  historias.innerText = "Histórias";

    const table = document.createElement("table");
    table.classList.add("table", "table-bordered", "mt-4");
  
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
  
    const tableTitle = ["ID", "Titulo", "Tipo"];
  
    tableTitle.forEach(element => {
      const th = document.createElement("th");
      th.innerText = element;
  
      tr.append(th); 
    }); 
  
    const tbody = document.createElement("tbody");
  
  
    personagem.stories.items.forEach(element => {
      const tr1 = document.createElement("tr");
  
      const td1 = document.createElement("td");
      td1.innerText = urlId(element.resourceURI);
  
      const td2 = document.createElement("td");
      td2.innerText = element.name;
  
      const td3 = document.createElement("td");
      td3.innerText = element.type;
  
      tr1.append(td1);
      tr1.append(td2);
      tr1.append(td3);
  
      tbody.append(tr1)
      
    })
  

  content.append(title)
  content.append(namePersonagem)
  content.append(text)
  content.append(img)
  content.append(historias)
  content.append(tbody)

}

function urlSepara(url){
  const id = url.split("/")
  const item = id.length -1 

  return id[item];
}

function getApi(params) {
  const res = new XMLHttpRequest();
  const url = `http://gateway.marvel.com/v1/public/characters/1009368?ts=${params.ts}&apikey=${params.apiKey}&hash=${params.hash}&limit=100`;

  res.onreadystatechange = function () {
    if (res.readyState == 4 && res.status == 200) {
      const response = JSON.parse(res.responseText);
      console.log(response.data.results[0]);
      createPersonagem(response.data.results[0]);
    }
  };
  res.open(
    "GET" , url , true );
  res.send();
}

  const apiCalls = getParams();
  getApi(apiCalls);