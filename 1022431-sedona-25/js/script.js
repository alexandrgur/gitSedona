var block=document.querySelector(".appointment-search-btn");
var popup=document.querySelector(".hide-form");
var form=popup.querySelector(".appointment-form");
var arrival=popup.querySelector("[name=data-arrival]");
var departure=popup.querySelector("[name=data-departure]");
var adults=popup.querySelector("[name=adults]");
var children=popup.querySelector("[name=children]");
var storage=localStorage.getItem("adults");
var number=localStorage.getItem("children");

block.addEventListener("click", function (evt) {
  popup.classList.toggle("visual");
  if (storage && number) {
    adults.value=storage;
    children.value=number;
  }
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value || !children.value ) {
    evt.preventDefault();
    console.log("Не хватает данных");
  } else {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value);
  }
});
