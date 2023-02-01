import clearPage from "./clearPage.js";
import loadUpMenu from "./ menuPage";
import loadUpPage from "./loadPage";
import contactUsPage from "./contactUsPage.js";

export default function displayPage() {
    let liNode = document.querySelectorAll('li');
    liNode.forEach(li => {
        li.addEventListener('click', () => {
            if (li.id == 1) {
                // Display Home content 
                clearPage();
                loadUpPage();
                console.log('home');
            } else if (li.id == 2) {
                // Display Menu content
                clearPage();
                loadUpMenu();
                console.log('Menu');
            } else {
                // Display Contact us content
                clearPage();
                contactUsPage();
                console.log('Contact us content will be displayed ...');
            }
        });
    });
    return { liNode };
}