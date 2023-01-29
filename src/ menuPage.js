import elementFactory from "./elementFactory";
import displayPage from "./displayRightPage";

const loadUpMenu = () => {

    const menuList = {
        lunch:
        {
            'Caldo verde': {
                ingredients: 'soup made with potatoes, chouriço sausage, and thinly sliced collard greens or kale.',
                price: 5,
            },
            'Bacalhau com natas': {
                ingredients: 'baked cod(bacalhau) with onions, diced fried potatoes and double cream, seasoned with nutmeg and white pepper.',
                price: 10,
            },
            'Pastel de nada': {
                ingredients: 'Custard tart made with puff pastry and filled with egg custard. Served with a dusting of powdered sugar and a pinch of cinnamon.',
                price: 2,
            }
        },
        dinner: {
            'Francesinha': {
                ingredients: 'Sandwitch served on a plate made with thick slices of white loaf bread with ham (Portuguese Fiambre), sausage, cheese, and steak and also a special sauce and french fries.',
                price: 10,
            }
        }
    };

    // Create the top Lu
    const mainContainer = elementFactory('div', { class: 'mainContainer' }).build();
    document.body.appendChild(mainContainer);
    const luMenu = elementFactory('lu', { class: 'menu' }).build();
    for (let i = 1; i <= 3; i++) {
        if (i === 1) {
            const liMenu = elementFactory('li', { class: 'menuLi', id: 1 }, 'Menu').build();
            luMenu.appendChild(liMenu);
        } else if (i === 2) {
            const liMenu = elementFactory('li', { class: 'menuLi', id: 2 }, 'Location').build();
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

    // For each menu container (lunch and dinner) I want to have 3 meals and so I need to create a div for each one + title container
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
        const mealDiv = elementFactory('div', { class: 'mealDiv', id: i }).build();
        mealContainerLunch.appendChild(mealDiv);
    }

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
        const mealDiv = elementFactory('div', { class: 'mealDiv', id: i }).build();
        mealContainerDinner.appendChild(mealDiv);
    }

    // Display Right page according to user clicks
    displayPage();
}

export default loadUpMenu;