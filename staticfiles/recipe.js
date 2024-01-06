const body = document.getElementById('body');
body.style.backgroundImage = "url('/recipeproject/images/backgroundForMyRecipeWebsite3.png')";
const imgButton = document.getElementById('sidebar-image');
const sidebar = document.getElementById('js-sidebar');
let image = document.getElementById('recipe-image');
const search = document.querySelector('.search');
const searchBtn = document.querySelector('.search-btn');
const changeMode = document.querySelector('.change-mode');
const col1 = body.style.backgroundImage;
const dineIn = document.querySelector('.dine-in');
const splOffers = document.querySelector('.special-offers');
const foodImageContainer = document.querySelector('.food-image-container');
const fetching = document.querySelector('.h2');
const userRequests = document.querySelector('.user-requests');
const xMark = document.getElementById('x-mark');
const cities = ['Visakhapatnam','Hyderabad','Bangalore','Mumbai','Chennai','Kolkota','Ahmedabad','Bhopal','Jaipur','Lucknow',
'Indore','Patna','Delhi','Nagpur','Madurai','Kochi','Ooty','Coimbatore','Vijayawada','Ghaziabad','Ranchi','Guwahati','Mysore','Patna','Amritsar'];
const citiesContainer = document.querySelector('.cities-container');
for(i=0;i<cities.length;i++){
    city = cities[i];
    newElement = document.createElement('div');
    newElement.classList.add('cities');
    newElement.innerHTML = `<button>${city}</button>`;
    citiesContainer.appendChild(newElement)
}
changeMode.addEventListener('click',()=>{
    if(body.style.backgroundImage === col1){
        body.style.backgroundImage = "url('/recipeproject/images/backgroundForMyRecipeWebsite.png')";
        body.style.color = 'white';
        changeMode.style.color = 'aqua';
        searchBtn.addEventListener('mouseover',()=>{
            searchBtn.style.backgroundColor = 'black';
            searchBtn.style.color = 'aqua';
            searchBtn.style.border = '2px solid aqua'
        })
        dineIn.addEventListener('mouseover',()=>{
            dineIn.style.backgroundColor = 'black';
            dineIn.style.color = 'aqua';
            dineIn.style.border = '2px solid aqua'
        })
        searchBtn.addEventListener('mouseout',()=>{
            searchBtn.style.color = 'black';
            searchBtn.style.backgroundColor = 'aqua';
        })
        dineIn.addEventListener('mouseout',()=>{
            dineIn.style.color = 'black';
            dineIn.style.backgroundColor = 'aqua';
        })
        
        searchBtn.style.backgroundColor = 'aqua';
        dineIn.style.backgroundColor = 'aqua'
        searchBtn.style.border = 'aqua'
    }
    else{
        body.style.backgroundImage = col1;
        body.style.color = 'black';
        changeMode.style.color = 'lightyellow'
        searchBtn.addEventListener('mouseover',()=>{
            searchBtn.style.border = '2px solid lightyellow'
            searchBtn.style.backgroundColor = 'transparent';
            searchBtn.style.color = 'lightyellow'
        })
        dineIn.addEventListener('mouseover',()=>{
            dineIn.style.backgroundColor = 'transparent';
            dineIn.style.color = 'lightyellow';
            dineIn.style.border = '2px solid lightyellow'
        })

        searchBtn.addEventListener('mouseout',()=>{
            searchBtn.style.color = 'black';
            searchBtn.style.backgroundColor = 'lightyellow';
        })
        dineIn.addEventListener('mouseout',()=>{
            dineIn.style.color = 'black';
            dineIn.style.backgroundColor = 'lightyellow';
        })
        searchBtn.style.backgroundColor = 'lightyellow';
        dineIn.style.backgroundColor = 'lightyellow';
        searchBtn.style.border = 'lightyellow'

    }
})
imgButton.addEventListener('click',()=> {
    if(sidebar.style.right==='-350px'){
        sidebar.style.right = 0;
    }
    else{
        sidebar.style.right = '-350px';
    }
})

const fetchRecipe = async (userInput)=>{
    fetching.innerHTML = '<div class="loader"></div>'
    const recipe = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`);
    const recipeString = await recipe.json();
    fetching.innerHTML = "";
    recipeString.meals.forEach(meal =>{
        const recipeContainer = document.createElement('div');
        recipeContainer.classList.add('js-recipe');
        recipeContainer.innerHTML = `
        <img src=${meal.strMealThumb}>
        <h3><span>${meal.strMeal}</span></h3>
        <p><span>${meal.strArea}</span></p>
        <p><span>${meal.strCategory}</span></p>
        `
        userRequests.appendChild(recipeContainer)
    })
}

searchBtn.addEventListener('click',(a)=>{
    a.preventDefault();
    searchInput = search.value.trim();
    fetchRecipe(searchInput);
    userRequests.style.visibility = 'visible';
})

xMark.addEventListener('click',()=>{
    search.value = "";
})
function submitForm() {
    alert("Form submission succesful");
}



