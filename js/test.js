// All data: https://openapi.programming-hero.com/api/ai/tools

// Single data details: https://openapi.programming-hero.com/api/ai/tool/${id}

// Single data Example: https://openapi.programming-hero.com/api/ai/tool/01

/*
 // show 6 card
  const showAll = document.getElementById("show-all");
  if (cards.length > 6) {
    cards = cards.slice(0, 6);
    showAll.classList.remove("d-none");
  } else {
    showAll.classList.add("d-none");
  }
*/
// displayData----------->
const showAll = document.getElementById("show-all");
if (cards.length > 6) {
  cards = cards.slice(0, 6);
  showAll.classList.remove("d-none");
} else {
  showAll.classList.add("d-none");
}



toggleSpiner(false)

document.getElementById('btn-search').addEventListener('click', function(){
  // start loader
  toggleSpiner(true);
  const searchField = document.getElementById('search-field');
  const searchtext = searchField.value;
  loadData(searchtext);
})

const toggleSpiner = isLoading =>{
  const loaderSpiner = document.getElementById('loader')
  if(isLoading){
    loaderSpiner.classList.remove('d-none')
  }
  else{
    loaderSpiner.classList.add('d-none')
  }
}

// show all 
document.getElementById('btn-show-all').addEventListener('click', function(){

  toggleSpiner(true);
  const searchField = document.getElementById('search-field');
  const searchtext = searchField.value;
  loadData(searchtext);
})


cardContainer.innerText=''
const showAll = document.getElementById("show-all");
if (cards.length > 6) {
cards = cards.slice(0, 6);
showAll.classList.remove("d-none");
} else {
cards = cards.slice(0,12);
showAll.classList.add("d-none");
}