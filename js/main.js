let theInput = document.querySelector(".meetYourMatch .form-group input");
let getButton = document.querySelector(".meetYourMatch form button");
const data = [
    {
        name : "Alex",
        type : "Cat",
        age :3,
        Gender : "Male",
        location : "UAE",
        sotry : "It was very sick",
        imageUrl : "pet-03.png"
    },
    {
        name : "Messi",
        type : "Dog",
        age :2,
        Gender : "Male",
        location : "Amman",
        sotry : "his leg was broke",
        imageUrl : "pet-02.png"
    },
    {
        name : "Melca",
        type : "Bird",
        age :1,
        Gender : "Female",
        location : "KSA",
        imageUrl : "pet-01.png"
    },
]


document.querySelector(".meetYourMatch .form-group input").addEventListener('keyup' , filterItems)


function filterItems(e) {
    e.preventDefault();
    let inputValue = document.querySelector(".meetYourMatch .form-group input").value;
    const filterData = data.filter((item) => item.location.toLowerCase().includes(inputValue.toLowerCase()));
    renderResult(filterData);
};

function renderResult(items) {
    const resultNode = document.querySelector(".is-searchResults");
    const result = items.map(item => (
        `<div class="widget">
            <div class="widget__image">
                <img src="images/${item.imageUrl}" alt="pet image">
            </div>
            <div class="widget__desc">
                <h4>${item.name}</h4>
                <p class="gender">${item.Gender} | ${item.age <= 1 ? "babe" : item.age > 1 && item.age < 2 ? "Young" : "old"} </p>
                <p class="city">${item.location}</p>
            </div>
        </div>`

    ))
    resultNode.innerHTML = result;
}
const fruits = ['Apple', 'Lemon', 'Mango', 'Apple', 'Orange'];
const index = fruits.lastIndexOf('Apple')
console.log(index)


function lastElm(arr,ind) {
    // write your code here
    for(let i = 0 ; i < arr.length;i++){
        console.log(arr[arr.length -1]);
    };
}
console.log(lastElm([22,23,24],2));