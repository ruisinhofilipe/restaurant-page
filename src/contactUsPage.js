import elementFactory from "./elementFactory";
import displayPage from "./displayRightPage";

const contactUsPage = () => {
    const mainContainer = elementFactory('div', { class: 'mainContainer' }).build();
    document.body.appendChild(mainContainer);
    const contactUsContainer = elementFactory('div', { class: 'contactUsContainer' }).build();
    const luMenu = elementFactory('lu', { class: 'menu' });
    const luMenuElement = luMenu.build();
    for (let i = 1; i <= 3; i++) {
        if (i === 1) {
            const liMenu = elementFactory('li', { class: 'menuLi', id: 1 }, 'Home');
            const liMenuElement = liMenu.build();
            luMenuElement.appendChild(liMenuElement);
        } else if (i === 2) {
            const liMenu = elementFactory('li', { class: 'menuLi', id: 2 }, 'Menu');
            const liMenuElement = liMenu.build();
            luMenuElement.appendChild(liMenuElement);
        } else {
            const liMenu = elementFactory('li', { class: 'menuLi', id: 3 }, 'Contact us');
            const liMenuElement = liMenu.build();
            luMenuElement.appendChild(liMenuElement);
        }
    }
    mainContainer.appendChild(luMenuElement);

    const contactUsContainerSecond = elementFactory('div', { class: 'contactUsContainerSecond' }).build();

    // Left side of contactUsContainer
    const locationContainer = elementFactory('div', { class: 'locationContainer left' }).build();
    const locationContainerH2 = elementFactory('h2', { class: 'infoH2' }, 'How to find us:').build();
    const locationContainerImage = elementFactory('div', { class: 'locationContainerImage' }).build();
    locationContainer.appendChild(locationContainerH2);
    locationContainer.appendChild(locationContainerImage);

    // Right side of contactUsContainer
    const infoContainer = elementFactory('div', { class: 'infoContainer right' }).build();

    //// righ side content
    const openingHoursContainer = elementFactory('lu', { class: 'openingHoursContainer' }).build();
    const openingHoursContainerH2 = elementFactory('h2', { class: 'infoH2' }, 'Opening-hours:').build();
    openingHoursContainer.appendChild(openingHoursContainerH2);
    for (let i = 1; i <= 7; i++) {
        const day = elementFactory('li', { class: 'openingDays' }).build();
        switch (i) {
            case 1:
                day.textContent = 'Monday: closed.';
                break;
            case 2:
                day.textContent = 'Tuesday: 6pm - 23pm';
                break;
            case 3:
                day.textContent = 'Wednesday: 11:30am - 4pm and 6pm - 23pm';
                break;
            case 4:
                day.textContent = 'Thursday: 11:30am - 4pm and 6pm - 23pm';
                break;
            case 5:
                day.textContent = 'Friday: 11:30am - 4pm and 6pm - 1am';
                break;
            case 6:
                day.textContent = 'Saturday: 11:30am - 4pm and 6pm - 1am';
                break;
            case 7:
                day.textContent = 'Sunday: 4pm - 22pm';
                break;
            default:
                day.textContent = 'Something went wrong';
                break;
        }
        openingHoursContainer.appendChild(day);
    }
    const contactContainer = elementFactory('div', { class: 'contactContainer' }).build();
    const contactContainerH2 = elementFactory('h2', { class: 'infoH2' }, 'Contact info:').build();
    contactContainer.appendChild(contactContainerH2);
    for (let i = 1; i <= 2; i++) {
        const info = elementFactory('div', { class: 'info' }).build();
        if (i === 1) {
            info.textContent = 'Email address: fakeRestaurantEmail@fake.fake';
        } else {
            info.textContent = 'Phone number = +0 000 000 000';
        }
        contactContainer.appendChild(info);
    }
    infoContainer.appendChild(openingHoursContainer);
    infoContainer.appendChild(contactContainer);

    contactUsContainerSecond.appendChild(locationContainer);
    contactUsContainerSecond.appendChild(infoContainer);

    contactUsContainer.appendChild(contactUsContainerSecond);
    mainContainer.appendChild(contactUsContainer);
    displayPage();
}

export default contactUsPage;