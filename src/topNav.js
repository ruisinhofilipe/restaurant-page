const luMenu = document.createElement('lu');
luMenu.classList.add('menu');
for (let i = 0; i < 3; i++) {
    const liMenu = document.createElement('lu');
    liMenu.classList.add('menuLi');
    if (i === 0) {
        liMenu.textContent = 'Menu';
    } else if (i === 1) {
        liMenu.textContent = 'Location';
    } else {
        liMenu.textContent = 'Contact us';
    }
    luMenu.appendChild(liMenu);
}

// const elementFactory = (elementType) => {
//     this.elementType = elementType;
//     this.attributes = {};
//     this.children = [];

//     const addAttributes = (attributes) => {
//         for (let i of Object.keys(attributes)) {
//             this.attributes[i] = attributes[i];
//         }
//         return this;
//     }
// }

// const luMenu = document.createElement()

export default luMenu;