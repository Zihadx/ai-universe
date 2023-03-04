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
           <button type="button" onclick="loadCardDetails()" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#cardDetailsModal"><i class="fa-solid fa-arrow-right"></i>
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
}

// modal style and function start

const loadCardDetails = async id =>{
  
  const url = ` https://openapi.programming-hero.com/api/ai/tool/${id}`
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)
}
// const showCardDetails = data =>{
//   console.log(data)
// }
loadCardDetails()


// modal style and function end
