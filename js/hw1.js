//Initializing Variables
let database = [
    {
        "link" : "https://www.amazon.com/dp/B00OIOB90E?ref=ppx_pop_mob_ap_share&fbclid=IwAR1GPZUQl_viFTL5YFzohTGMCT_JkJLnMDb45qV8OLFNa0h7pk6_xpwdi_M",
        "name" : "Pet Dematting Comb",
        "price" : 35.99,
        "description" : "GoPets Dematting Comb with 2 Sided Professional Grooming Rake for Cats & Dogs",
        "category" : "Pet Care",
        "image" : "images/pet_comb.jpg"
    },
    {
        "link" : "https://www.amazon.com/dp/B082W54HTZ?ref=ppx_pop_mob_ap_share&fbclid=IwAR0jcOU2mIzkANgKOsE9kp_ypcCI7R78RlA3E9XF8TMi5lnPSVDX9E-hnJI&th=1",
        "name" : "Water Bottle",
        "price" : 13.99,
        "description" : "Opard Stainless Steel Water Bottle, 32 oz Vacuum Insulated Double Walled Leak Proof Sports Water Bottle with Straw for Gym Travel Camping",
        "category" : "Athletic",
        "image" : "images/waterbottle.jpg"
    },
    {
        "link" : "https://www.amazon.com/dp/B08BV6R26Z?ref=ppx_pop_mob_ap_share&fbclid=IwAR1Ln7jKLZ8BY7n3oYwCQKVKCwf1-AJU-Fp9vHZUnduuwwD33inSxYenyWA&th=1",
        "name" : "Headphones",
        "price" : 32.99,
        "description" : "OneOdio Over Ear Headphone, Wired Bass Headsets with 50mm Driver, Foldable Lightweight Headphones with Share Port and Mic for Recording Monitoring Mixing Podcast Guitar PC TV (Dark Blue)",
        "category" : "Technology",
        "image" : "images/headphones.jpg"
    },
    {
        "link" : "https://www.amazon.com/dp/B07GJBV4T5?ref=ppx_pop_mob_ap_share&fbclid=IwAR0V3t0Mu3XwOEJ4xNXQqG67nsFJH1w8RStSRXTmGc9eEf43xTLB7NtyAAs&th=1",
        "name" : "Laptop BackPack",
        "price" : 25.19,
        "description" : "Laptop Backpack Women Men College Backpacks Bookbag Vintage Backpack Book Bag Fashion Back Pack Anti Theft Travel Backpacks with Charging Port fit 15.6 Inch Laptop Grey",
        "category" : "School Supplies",
        "image" : "images/backpack.jpg"
    }
];

//update search bar on key press
function updateSearchBar(event) {
    let searchbar = event.target;
    document.getElementById("searchterm").innerText = searchbar.value;
}


//update button look on press
function updateButton(event) {
    let btn = event.target;
    if(btn.getAttribute("class") == "btn btn-outline-secondary") {
        btn.innerText = "dismissed";
        btn.setAttribute("class","btn btn-outline-danger");
    } else {
        btn.innerText = "dismiss";
        btn.setAttribute("class","btn btn-outline-secondary");
    }
}

//add product to page
function addProduct(pIndex) {
    //variables
    let elements = "";
    let productContainer = document.createElement("div");
    let productElements = [
        "<div class='col-md-7'>",
        "<h2>","<a href=\'"+database[pIndex].link+"\'>","</a>","</h2>",
        "<div>","</div>",
        "<p>","</p>",
        "<div>","</div>",
        "<div class='my-3'>","<button class='btn btn-outline-secondary' onclick='updateButton(event)'>","</button>","</div>","</div>",
        "<div class='col-md-5'>","<img src=\'"+database[pIndex].image+"\' alt=\'"+database[pIndex].name+"\'>","</div>",
        "<hr />","<br>"];

    //html string
    for(let i=0; i<productElements.length; i++) {
        elements+=productElements[i];
    }

    //set container class and add content
    productContainer.classList.add("row");
    productContainer.innerHTML = elements;

    //set container contents
    productContainer.getElementsByTagName("a")[0].innerText = database[pIndex].name;
    productContainer.getElementsByTagName("div")[1].innerText = "Price: $"+database[pIndex].price;
    productContainer.getElementsByTagName("p")[0].innerText = "Description: "+database[pIndex].description;
    productContainer.getElementsByTagName("button")[0].innerText = "dismiss";
    productContainer.getElementsByTagName("div")[2].innerText = "Category: "+database[pIndex].category;

    document.querySelector("body > div.container").appendChild(productContainer);
}

/*--Main Code--*/
for(let i=0; i<database.length; i++) {
    addProduct(i);
}