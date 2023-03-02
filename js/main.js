const loadData = () => {
  const url = "https://openapi.programming-hero.com/api/ai/tools";
  fetch(url)
  .then(res=>res.json())
  .then(data=> displayData(data.data.tools))
};
const displayData = cards =>{
    console.log(cards);
    const cardContainer =document.getElementById('card-container');
    cards.forEach(card=>{
        // console.log(card);
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('col')
        cardDiv.innerHTML= `
        
        <div class="card h-100">
        <img src="${card.image}" class="card-img-top h-100 p-2 rounded " alt="...">
        <div class="card-body">
          <h4 class="card-title">Features</h4>

          <ol>
          <li>${card.features[0]}</li>
          <li>${card.features[1]}</li>
          <li>${card.features[2]}</li>
        </ol>

        </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
        <div>
        <h4 class="card-title">${card.name}</h4>
        <p>  <i class="fa-duotone fa-calendar-days"></i> </p>
        <p>${card.published_in}</p>
        </div>
        <div>
        <button class="btn btn-danger">Details</button>
        </div>
        </div>
      </div>

        `
        cardContainer.appendChild(cardDiv)
    })

}
loadData()
