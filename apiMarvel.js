function getParams() {
  const keyPublic = "73da05e770ee8aa50af741f985f3d075";
  const keyPrivate = "3cf7931c65386597cab0bad01e535be02738499c";
  const ts = new Date().getTime();
  const hash = md5(`${ts}${keyPrivate}${keyPublic}`);
  return {
    ts,
    keyPublic,
    hash,
  };
}


function getApi() {
  const res = new XMLHttpRequest();
  res.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(res.responseText); 
      console.log(response);
    }
  };
  res.open("GET",`http://gateway.marvel.com/v1/public/characters?ts=${params.ts}&apikey=${params.keyPublic}&hash=${params.hash}`,true); 
  res.send();
}
const params = getParams();
const requisicao = getApi(params);


function getPerson(){

}