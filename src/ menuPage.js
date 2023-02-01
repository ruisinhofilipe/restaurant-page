import elementFactory from "./elementFactory";
import displayPage from "./displayRightPage";

const loadUpMenu = () => {
    const lunch = {
        'Caldo verde': {
            ingredients: 'Soup made with potatoes, chouriço sausage, and thinly sliced collard greens or kale.',
            price: 5,
        },
        'Bacalhau com natas': {
            ingredients: 'Baked cod (bacalhau) with onions, diced fried potatoes and double cream, seasoned with nutmeg and white pepper.',
            price: 10,
        },
        'Pastel de nata': {
            ingredients: 'Custard tart made with puff pastry and filled with egg custard. Served with a dusting of powdered sugar and a pinch of cinnamon.',
            price: 2,
        }
    }
    const dinner = {
        Francesinha: {
            ingredients: 'Sandwitch with slices of white loaf bread with ham, sausage, cheese, steak, french fries and special (served on a plate).',
            price: 10,
        },
        'Arroz de polvo': {
            ingredients: 'Cooked diced octopus and rice, incorporated into a rich base of tomatoes, sautéed onions, garlic, and various spices.',
            price: 12,
        },
        'Prego no prato': {
            ingredients: 'Rice, french fries, fried egg and beef steak.',
            price: 9,
        }
    }

    // Create the top Lu
    const mainContainer = elementFactory('div', { class: 'mainContainer' }).build();
    document.body.appendChild(mainContainer);
    const luMenu = elementFactory('lu', { class: 'menu' }).build();
    for (let i = 1; i <= 3; i++) {
        if (i === 1) {
            const liMenu = elementFactory('li', { class: 'menuLi', id: 1 }, 'Home').build();
            luMenu.appendChild(liMenu);
        } else if (i === 2) {
            const liMenu = elementFactory('li', { class: 'menuLi', id: 2 }, 'Menu').build();
            luMenu.appendChild(liMenu);
        } else {
            const liMenu = elementFactory('li', { class: 'menuLi', id: 3 }, 'Contact us').build();
            luMenu.appendChild(liMenu);
        }
    }
    mainContainer.appendChild(luMenu);

    // Create Menus container
    const menusContainer = elementFactory('div', { class: 'menusContainer' }).build();
    mainContainer.appendChild(menusContainer);

    // Create two containers inside the Menu container, one for lunch and another for dinner.
    const menusContainerLunch = elementFactory('div', { class: 'menusContainerLunch' }).build();
    menusContainer.appendChild(menusContainerLunch);
    const menusContainerDinner = elementFactory('div', { class: 'menusContainerDinner' }).build();
    menusContainer.appendChild(menusContainerDinner);

    // Lunch container content
    //// Title container Lunch
    const titleContainerLunch = elementFactory('div', { class: 'titleContainer' }).build();
    menusContainerLunch.appendChild(titleContainerLunch);
    ////// title h2
    const h2Lunch = elementFactory('h2').build();
    h2Lunch.textContent = 'Lunch'
    titleContainerLunch.appendChild(h2Lunch);
    ////// title p
    const pLunch = elementFactory('p').build();
    pLunch.textContent = '11:30am - 4pm';
    titleContainerLunch.appendChild(pLunch);
    //// Meal container Lunch
    const mealContainerLunch = elementFactory('div', { class: 'mealContainer' }).build();
    menusContainerLunch.append(mealContainerLunch);
    for (let i = 1; i <= 3; i++) {
        const mealDiv = elementFactory('div', { class: 'mealDivLunch', id: i }).build();
        mealContainerLunch.appendChild(mealDiv);
    }
    const mealDivLunchNode = document.querySelectorAll('.mealDivLunch');
    mealDivLunchNode.forEach(div => {
        if (div.id == 1) {
            const mealH2 = elementFactory('div', { class: 'mealName' }).build();
            mealH2.textContent = Object.keys(lunch)[0];
            div.appendChild(mealH2);
            const mealP = elementFactory('p', { class: 'mealIngredients' }).build();
            mealP.textContent = lunch['Caldo verde'].ingredients;
            div.appendChild(mealP);
            const mealSecondP = elementFactory('p', { class: 'mealPrice' }).build();
            mealSecondP.textContent = `${lunch['Caldo verde'].price}$`;
            div.appendChild(mealSecondP);
        } else if (div.id == 2) {
            const mealH2 = elementFactory('div', { class: 'mealName' }).build();
            mealH2.textContent = Object.keys(lunch)[1];
            div.appendChild(mealH2);
            const mealP = elementFactory('p', { class: 'mealIngredients' }).build();
            mealP.textContent = lunch['Bacalhau com natas'].ingredients;
            div.appendChild(mealP);
            const mealSecondP = elementFactory('p', { class: 'mealPrice' }).build();
            mealSecondP.textContent = `${lunch['Bacalhau com natas'].price}$`;
            div.appendChild(mealSecondP);
        } else {
            const mealH2 = elementFactory('div', { class: 'mealName' }).build();
            mealH2.textContent = Object.keys(lunch)[2];
            div.appendChild(mealH2);
            const mealP = elementFactory('p', { class: 'mealIngredients' }).build();
            mealP.textContent = lunch['Pastel de nata'].ingredients;
            div.appendChild(mealP);
            const mealSecondP = elementFactory('p', { class: 'mealPrice' }).build();
            mealSecondP.textContent = `${lunch['Pastel de nata'].price}$`;
            div.appendChild(mealSecondP);
        }
    });


    // Dinner container content
    //// Title container Dinner
    const titleContainerDinner = elementFactory('div', { class: 'titleContainer' }).build();
    menusContainerDinner.appendChild(titleContainerDinner);
    ////// title h2
    const h2Dinner = elementFactory('h2').build();
    h2Dinner.textContent = 'Dinner'
    titleContainerDinner.appendChild(h2Dinner);
    ////// title p
    const pDinner = elementFactory('p').build();
    pDinner.textContent = '6pm - 23pm';
    titleContainerDinner.appendChild(pDinner);

    //// Meal container Dinner
    const mealContainerDinner = elementFactory('div', { class: 'mealContainer' }).build();
    menusContainerDinner.append(mealContainerDinner);
    for (let i = 1; i <= 3; i++) {
        const mealDiv = elementFactory('div', { class: 'mealDivDinner', id: i }).build();
        mealContainerDinner.appendChild(mealDiv);
    }
    const mealDivDinnerNode = document.querySelectorAll('.mealDivDinner');
    mealDivDinnerNode.forEach(div => {
        if (div.id == 1) {
            const mealH2 = elementFactory('div', { class: 'mealName' }).build();
            mealH2.textContent = Object.keys(dinner)[0];
            div.appendChild(mealH2);
            const mealP = elementFactory('p', { class: 'mealIngredients' }).build();
            mealP.textContent = dinner.Francesinha.ingredients;
            div.appendChild(mealP);
            const mealSecondP = elementFactory('p', { class: 'mealPrice' }).build();
            mealSecondP.textContent = `${dinner['Francesinha'].price}$`;
            div.appendChild(mealSecondP);
        } else if (div.id == 2) {
            const mealH2 = elementFactory('div', { class: 'mealName' }).build();
            mealH2.textContent = Object.keys(dinner)[1];
            div.appendChild(mealH2);
            const mealP = elementFactory('p', { class: 'mealIngredients' }).build();
            mealP.textContent = dinner['Arroz de polvo'].ingredients;
            div.appendChild(mealP);
            const mealSecondP = elementFactory('p', { class: 'mealPrice' }).build();
            mealSecondP.textContent = `${dinner['Arroz de polvo'].price}$`;
            div.appendChild(mealSecondP);
        } else {
            const mealH2 = elementFactory('div', { class: 'mealName' }).build();
            mealH2.textContent = Object.keys(dinner)[2];
            div.appendChild(mealH2);
            const mealP = elementFactory('p', { class: 'mealIngredients' }).build();
            mealP.textContent = dinner['Prego no prato'].ingredients;
            div.appendChild(mealP);
            const mealSecondP = elementFactory('p', { class: 'mealPrice' }).build();
            mealSecondP.textContent = `${dinner['Prego no prato'].price}$`;
            div.appendChild(mealSecondP);
        }

    });

    // Display Right page according to user clicks
    displayPage();
}

export default loadUpMenu;