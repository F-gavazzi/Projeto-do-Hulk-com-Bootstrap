function getParams() {
  const apiKey = '73da05e770ee8aa50af741f985f3d075';
  const privateKey = '3cf7931c65386597cab0bad01e535be02738499c';
  const ts = new Date().getTime();
  const hash = md5(`${ts}${privateKey}${apiKey}`);
  
  return {
    ts,
    apiKey,
    hash,
  };

}
function getApi(params) {
  const res = new XMLHttpRequest();
  const url = `http://gateway.marvel.com/v1/public/characters?ts=${params.ts}&apikey=${params.apiKey}&hash=${params.hash}`;
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


function getCard(srcImg ,heroiName, heroiDiv){
  const colPai = document.createElement('div');
  const colFilho = document.createElement('div');
  const text = document.createElement('h3');
  const textChild = document.createElement('p');
  const img = document.createElement('img');
  text.textContent = heroiName
  img.src=srcImg
  colPai.append(colFilho)
  colFilho.append(text)
  colFilho.append(textChild)
  colFilho.append(img)
  heroiDiv.append(colFilho)
  colPai.classList.add(personagem);

}
getCard()