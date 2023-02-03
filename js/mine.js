$(".whiteSideBar .closeBtn i").click(function () {
  var curLeft = $(".whiteSideBar").css("left");
  if (curLeft == "0px") {
    $(".blackSideBar").animate({ left: 0 }, 500);
    $(".whiteSideBar").animate({ left: "250px" }, 500);
    $(".whiteSideBar .closeBtn i").addClass("fa-times");
    $(".blackSideBar ul li:nth-child(1)").animate(
      { opacity: "1", paddingTop: "25px" },
      1100
    );
    $(".blackSideBar ul li:nth-child(2)").animate(
      { opacity: "1", paddingTop: "25px" },
      1200
    );
    $(".blackSideBar ul li:nth-child(3)").animate(
      { opacity: "1", paddingTop: "25px" },
      1300
    );
    $(".blackSideBar ul li:nth-child(4)").animate(
      { opacity: "1", paddingTop: "25px" },
      1400
    );
    $(".blackSideBar ul li:nth-child(5)").animate(
      { opacity: "1", paddingTop: "25px" },
      1500
    );
    $(".blackSideBar ul li:nth-child(6)").animate(
      { opacity: "1", paddingTop: "25px" },
      1600
    );
  } else {
    $(".blackSideBar").animate({ left: "-250px" }, 500);
    $(".whiteSideBar").animate({ left: 0 }, 500);
    $(".whiteSideBar .closeBtn i").removeClass("fa-times");
    $(".blackSideBar ul li").animate(
      { opacity: "0", paddingTop: "500px" },
      500
    );
  }
});

var allMovies;
var imgPath = "https://image.tmdb.org/t/p/w500";

function AjaxReq() {
  var http = new XMLHttpRequest();
  http.open("GET","https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k");
  http.send();
  http.addEventListener("readystatechange", function () {
    if (http.readyState == 4 && http.status == 200) {
      allMovies = JSON.parse(http.response);
      allMovies = allMovies.results;
      display();
    }
  });
}
AjaxReq()
function display() {
  var total = ``;
  for (var i = 0; i < allMovies.length; i++) {
    total +=`<div class="col-md-6 col-lg-4">
        <div class="test rounded my-4">
        <img src="` +imgPath +allMovies[i].poster_path +`" class="img-fluid rounded">
        <div class="overlay rounded">
        <h2>` +allMovies[i].title +`</h2>
        <p>` +allMovies[i].overview +`</p>
        <p> rate: ` +allMovies[i].vote_average +`</p>
        <p>` +allMovies[i].release_date +`</p>
        </div>      
        </div>
      </div>`;
  }
  $("#printMovies").html(total);  
}

$("#searchMovie1").keyup(function () { 
    var searchArray = [];

    var search = document.getElementById("searchMovie1").value;

    for(var i = 0 ; i < allMovies.length ; i++){
        if(allMovies[i].title.toLowerCase().includes(search.toLowerCase())){
            var saver = allMovies[i];
            searchArray.push(saver);
        }
    }


    var total = ``
    for(var i = 0 ; i < searchArray.length ; i++){
        total += total +=`<div class="col-lg-4">
        <div class="test rounded mb-4">
        <img src="` +imgPath +searchArray[i].poster_path +`" class="img-fluid rounded">
        <div class="overlay rounded">
        <h2>` +searchArray[i].title +`</h2>
        <p>` +searchArray[i].overview +`</p>
        <p> rate: ` +searchArray[i].vote_average +`</p>
        <p>` +searchArray[i].release_date +`</p>
        </div>      
        </div>
      </div>`;
    }
     $("#printMovies").html(total);
});

$("#searchMovie2").keyup(function () { 
    var searchArray = [];

    var search = document.getElementById("searchMovie2").value;

    for(var i = 0 ; i < allMovies.length ; i++){
        if(allMovies[i].title.toLowerCase().includes(search.toLowerCase())){
            var saver = allMovies[i];
            searchArray.push(saver);
        }
    }


    var total = ``
    for(var i = 0 ; i < searchArray.length ; i++){
        total += total +=`<div class="col-lg-4">
        <div class="test rounded mb-4">
        <img src="` +imgPath +searchArray[i].poster_path +`" class="img-fluid rounded">
        <div class="overlay rounded">
        <h2>` +searchArray[i].title +`</h2>
        <p>` +searchArray[i].overview +`</p>
        <p> rate: ` +searchArray[i].vote_average +`</p>
        <p>` +searchArray[i].release_date +`</p>
        </div>      
        </div>
      </div>`;
    }
     $("#printMovies").html(total);
});


var myName = document.getElementById("myName")
var myNameRegex = /^[a-zA-Z]+$/
userNameAlert = document.getElementById("namealert")
$("#contact input").keyup(function () { 
    if(myNameRegex.test(myName.value)){
        userNameAlert.style.display= "none"
    }
    else{
        userNameAlert.style.display= "block"
    }
});

var myEmail = document.getElementById("myEmail")
var myEmailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
userEmailAlert = document.getElementById("emailalert")
$("#contact input").keyup(function () { 
    if(myEmailRegex.test(myEmail.value)){
        userEmailAlert.style.display= "none"
    }
    else{
        userEmailAlert.style.display= "block"
    }
});

var myPhone = document.getElementById("myPhone")
var myPhoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
userPhoneAlert = document.getElementById("phonealert")
$("#contact input").keyup(function () { 
    if(myPhoneRegex.test(myPhone.value)){
        userPhoneAlert.style.display= "none"
    }
    else{
        userPhoneAlert.style.display= "block"
    }
});

var myAge = document.getElementById("myAge")
var myAgeRegex = /^[1-9][0-9]?$|^100$/
userAgeAlert = document.getElementById("agealert")
$("#contact input").keyup(function () { 
    if(myAgeRegex.test(myAge.value)){
        userAgeAlert.style.display= "none"
    }
    else{
        userAgeAlert.style.display= "block"
    }
});

var myPass = document.getElementById("myPass")
var myPassRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
userPassAlert = document.getElementById("passalert")
$("#contact input").keyup(function () { 
    if(myPassRegex.test(myPass.value)){
        userPassAlert.style.display= "none"
    }
    else{
        userPassAlert.style.display= "block"
    }
});

var myRePass = document.getElementById("myRePass")
userRePassAlert = document.getElementById("repassalert")
$("#contact input").keyup(function () { 
    if(myPass.value==myRePass.value){
        userRePassAlert.style.display= "none"
    }
    else{
        userRePassAlert.style.display= "block"
    }
});


