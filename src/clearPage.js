export default function clearPage() {
    const mainContainer = document.querySelector('.mainContainer');
    let child = mainContainer.lastElementChild;
    while (child) {
        mainContainer.removeChild(child);
        child = mainContainer.lastElementChild;
    }
    mainContainer.remove();
}