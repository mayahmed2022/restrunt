



var links = document.querySelectorAll('.nav-link');

for(var i =0 ; i< links.length ; i++){
    links[i].addEventListener('click',function(e){
        var currentMeal =e.target.innerHTML;
        getData(currentMeal);
    })


}


getData("pizza");


function getData(meal){
    var myHttp = new XMLHttpRequest();
myHttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${meal}`);
myHttp.send();
myHttp.addEventListener("readystatechange", function () {
  if (myHttp.readyState == 4) {
    data = JSON.parse(myHttp.response).recipes;
    console.log(data);
    displayData();
   
  }
});

}

var data = [];

function displayData() {
  var cartona = "";
  for (var i = 0; i < data.length; i++) {
    cartona += `
    <div class="col-md-4">
    <div class="card">
      <img src="${data[i].image_url} " alt="" class="card-img-top" height="200px"/>

      <div class="card-body text-center">
        <h5> ${data[i].title} </h5>
        <a class="btn btn-danger" target="_blank" href="${data[i].source_url} ">Source</a>
      </div>
    </div>
  </div>
        `;

    document.getElementById("rowData").innerHTML = cartona;
  }
}
