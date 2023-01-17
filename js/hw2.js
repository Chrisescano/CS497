/*--Consts/DOM Elements--*/
const requestURL = 'https://fakestoreapi.com/products?limit=10';
const container = document.getElementById('products');
const searchBar = document.getElementById('searchbar');
const searchButton = document.getElementById('search');

/*--Variables--*/
let productArray = '';

fetch(requestURL)
.then((res) => res.json())
.then((data) => {
    productArray = data;
    data.map((obj) => {addProduct(obj)});
});

searchButton.onclick = () => {
    container.innerHTML = '';
    for(let i=0; i<productArray.length; i++) {
        if(productArray[i].title.includes(searchBar.value)) {
            addProduct(productArray[i]);
        }
    }
}

//update button look on press
function updateButton(event) {
    let btn = event.target;
    if(btn.getAttribute('class') == 'btn btn-outline-secondary') {
        btn.innerText = 'dismissed';
        btn.setAttribute('class','btn btn-outline-danger');
    } else {
        btn.innerText = 'dismiss';
        btn.setAttribute('class','btn btn-outline-secondary');
    }
}

function addProduct(data) {
    let productHTML = `
    <div class="row">
        <div class="col-md-7">
            <h2>${data.title}</h2>
            <div>Price: $${data.price}</div>
            <p>Description: ${data.description}</p>
            <div>Category: ${data.category}</div>
            <div class="my-3">
                <button class="btn btn-outline-secondary" onclick=updateButton(event)>dismiss</button>
            </div>
        </div>
        <div class="col-md-5">
            <img src="${data.image}" alt="${data.title}">
        </div>
        <hr />
        <br>
    </div>`;
    container.innerHTML+=productHTML;
}