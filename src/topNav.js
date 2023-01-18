const luMenu = document.createElement('lu');
luMenu.classList.add('menu');
for (let i = 0; i < 3; i++) {
    const liMenu = document.createElement('lu');
    liMenu.classList.add('menuLi');
    if (i === 0) {
        liMenu.textContent = 'Menu';
    } else if (i === 1) {
        liMenu.textContent = 'Locations';
    } else {
        liMenu.textContent = 'Contact us';
    }
    luMenu.appendChild(liMenu);
}

export default luMenu;