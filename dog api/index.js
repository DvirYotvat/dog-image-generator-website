function get_api() {
  let xhttp = new XMLHttpRequest();
  const API_ENDPOINT =
    "https://kjw3jh4pn3.execute-api.us-east-1.amazonaws.com/v1/myresource/";
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(xhttp.responseText);
      let str = `<img src="${data.message}" width="500">`;
      document.getElementById("img_insert").innerHTML = str;
      document.getElementById("tabIcon").href = data.message;
    }
  };
  xhttp.open("GET", API_ENDPOINT), true;
  xhttp.send();
}
