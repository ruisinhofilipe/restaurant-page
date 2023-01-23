const elementFactory = (elementType, attributes, textContent) => {
    const build = () => {
        let domElement = document.createElement(elementType);
        for (let key in attributes) {
            domElement.setAttribute(key, attributes[key]);
        }
        domElement.textContent = textContent

        return domElement;
    }
    return { build }
}

export default elementFactory;


