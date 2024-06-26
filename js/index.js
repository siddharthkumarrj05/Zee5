// hero slider

$(document).ready(function () {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    asNavFor: ".slider-nav",
  });

  $(".slider-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    focusOnSelect: true,
  });
});

// 100 movies cards

let allCards = "";

for (let i = 0; i < 100; i++) {
  allCards += `<div class="col-lg-2 mb-4">
        <div class="card">
            <img src="media/image1.webp" alt="image" id="img" class="card-image">
            <div class="card-title">
                    <h6>Title</h6>
                <div class="d-flex">
                    <p>Rating</p>
                </div>
                <a href="#" target="_blank" class="watch btn"><i class="bi bi-play-fill"></i>Watch</a>
            </div>
        </div>
    </div>`;
}

document.getElementById("AllCards").innerHTML = `<div class="row">${allCards}</div>`;


fetch("https://dummyapi.online/api/movies")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    let card = document.querySelectorAll(".card");
    card.forEach((value, index) => {
        console.log(value)
        value.querySelector("h6").innerText = data[index].movie;
        value.querySelector("p").innerText = "Rating " + data[index].rating;
        value.querySelector("a").attributes[0].value = data[index].imdb_url;
    });
  });

fetch("http://localhost:3000/image")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    let card = document.querySelectorAll(".card");
    card.forEach((value, index) => {
        console.log(value)
        value.querySelector("img").attributes[0].value = data[index].image;
        
    });
  });