const loadData = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.data.tools.slice(0,6)));
};
const displayData = (cards) => {
  // console.log(cards);
  const cardContainer = document.getElementById("card-container");
 
  cardContainer.innerHTML=''

  // show 6 card
  

  cards.forEach((card) => {
    // console.log(card);
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col");
    cardDiv.innerHTML = `
        
        <div class="card h-100">
        <img src="${card.image}" class="card-img-top h-100 p-2 rounded " alt="...">
        <div class="card-body">
          <h4 class="card-title">Features</h4>
         <ol>
           <li>${card.features[0]}</li>
           <li>${card.features[1]}</li>
           <li>${card.features[2] ? card.features[2] : 'Very exiting'}</li>
           <li>${card.features[3] ? card.features[3] : card.name}</li>
         </ol>
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
         <div>
           <h4 class="card-title">${card.name}</h4>
           <p> <span><i class="fa-solid fa-calendar-days"></i></span> ${card.published_in}</p>
         </div>
         <div>
           <button type="button" onclick="loadCardDetails('${card.id}')" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#cardDetailsModal"><i class="fa-solid fa-arrow-right"></i>
           </button>
         </div>
        </div>
      </div>

        `;
    cardContainer.appendChild(cardDiv);
  });
};
loadData();

const showAllData =()=>{
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.data.tools));

    const showAll = document.getElementById("show-all");
  if (displayData > 6) {
    showAll.classList.remove("d-none");
  } else {
    showAll.classList.add("d-none");
  }
}

// modal style and function start

const loadCardDetails = (id) =>{
  
  const url = ` https://openapi.programming-hero.com/api/ai/tool/${id}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>showCardDetails(data))
}
const showCardDetails = data =>{
  console.log(data)
  const detailsFirstPart = document.getElementById('details-first-part');
  detailsFirstPart.innerHTML = `
  <div>
  <h4>${data.data.description} </h4>
  <div class="container text-center">
  <div class="row gap-2 mt-4">
  <div class="col  text-center bg-white p-3 rounded">
  <h5>${data.data.pricing ? data.data.pricing[0].price : " "}</h5>
  <h5>${data.data.pricing ? data.data.pricing[0].plan : " "}</h5>
  </div>
  
  <div class="col text-center bg-white p-3 rounded">
  <h5>${data.data.pricing ? data.data.pricing[1].price : " "}</h5>
  <h5>${data.data.pricing ? data.data.pricing[1].plan : " "}</h5>
  </div>
  
  <div class="col text-center bg-white p-3 rounded">
  <h5>${data.data.pricing ? data.data.pricing[2].price : " "}</h5>
  <h5>${data.data.pricing ? data.data.pricing[2].plan : " "}</h5>
  </div>
  </div>
  </div>

  <div class="mt-4 row">
  <div class="col">
  <h4>Features<h4>
  <ul>
    <li class="fs-6">${data.data.features ? data.data.features[1].feature_name : ""}</li>
    <li class="fs-6">${data.data.features ? data.data.features[2].feature_name : ""}</li>
    <li class="fs-6">${data.data.features ? data.data.features[3].feature_name : ""}</li>
  </ul>
  </div>
  <div class="col">
  <h4>Integrations</h4>
  <ul>
  <li class="fs-6">${data.data.integrations[0] ? data.data.integrations[0] : "No data Found"}
  </li>
  <li class="fs-6">${data.data.integrations[1] ? data.data.integrations[1] : "No data Found"}
  </li>
  <li class="fs-6">${data.data.integrations[2] ? data.data.integrations[2] : "No data Found"}
  </li>
  </ul>
  </div>
  </div>
  </div>
  `
  // show card details second part 
  const detailsSecondPart = document.getElementById('details-second-part');
  detailsSecondPart.innerHTML=`
   <img src="${data.data.image_link[0]}" class="card-img-top rounded" alt="...">
  <h5 class="mt-4">${data.data.input_output_examples[0] ? 
    data.data.input_output_examples[0].input :"No! Not Yet! Take a break!!!" } </h5>
  <p>${data.data.input_output_examples[0] ?
     data.data.input_output_examples[0].output :"No! Not Yet! Take a break!!!" }</p>

  <h5>${data.data.input_output_examples[1] ? 
    data.data.input_output_examples[1].input :"No! Not Yet! Take a break!!!" } </h5>
  <p>${data.data.input_output_examples[1] ?
     data.data.input_output_examples[1].output :"No! Not Yet! Take a break!!!" }</p>

     

  `
  
}
loadCardDetails()






// modal style and function end
