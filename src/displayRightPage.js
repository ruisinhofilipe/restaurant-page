import clearPage from "./clearPage.js";
import loadUpMenu from "./ menuPage";
import loadUpPage from "./loadPage";

export default function displayPage() {
    let liNode = document.querySelectorAll('li');
    liNode.forEach(li => {
        li.addEventListener('click', () => {
            if (li.id == 1) {
                // Display Menu content 
                clearPage();
                loadUpMenu();
                console.log('Menu content will be displayed ...');
            } else if (li.id == 2) {
                // Display Location content
                clearPage();
                // Running the loadPage only to check if everything is working according to user clicks
                loadUpPage();
                console.log('Location content will be displayed ...');
            } else if (li.id == 3) {
                // Display Contact us content
                console.log('Contact us content will be displayed ...');
            } else {
                console.log('Load page');
            }
        });
    });
    return { liNode };
}