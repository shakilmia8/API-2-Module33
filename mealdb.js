const loadSearch = async () => {
    const input = document.getElementById('input-search');
    const inputText = input.value;
    input.value = '';
    if (inputText == '') {
        const not = document.getElementById('null');
        not.innerHTML = `<h1> Pleas text something search box</h1>`
    }
    else {
        const not = document.getElementById('null');
        not.textContent = '';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;

        const res = await fetch(url);
        const data = await res.json();
        displayShow(data.meals);

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => displayShow(data.meals));
    }
};

const displayShow = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    // searchResult.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.textContent = '';
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="displayFood(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}
                </p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);

    });
};

const displayFood = async mealID => {
    // console.log(mealID);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;

    const res = await fetch(url);
    const data = await res.json();
    foodDetail(data.meals[0]);

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => foodDetail(data.meals[0]))
}

const foodDetail = meal => {
    const food = document.getElementById('food-details');
    food.textContent = '';
    const div = document.createElement('div');
    div.textContent = '';
    div.classList.add('card');
    div.innerHTML = `
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
    food.appendChild(div);
};
