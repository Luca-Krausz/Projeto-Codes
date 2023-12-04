// Adicionar itens na página de venda de itens

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('sell-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Create an object to store the item data
        var itemData = {
            productName: document.getElementById('product-name').value,
            weight: document.getElementById('weight').value,
            price: document.getElementById('price').value,
            description: document.getElementById('description').value,
            // Since files can't be stored in localStorage, we will not handle the image for now
        };

        // Convert the object into a string to store in localStorage
        var itemDataString = JSON.stringify(itemData);

        // Store the item data string in localStorage using a unique key
        localStorage.setItem('postedItem', itemDataString);

        // Redirect to the "your-items" page
        window.location.href = "seus-itens.html";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the item data string from localStorage
    var itemDataString = localStorage.getItem('postedItem');

    // Convert the string back into an object
    var itemData = JSON.parse(itemDataString);

    if (itemData) {
        // Create the HTML elements to display the item
        var itemSection = document.createElement('section');
        itemSection.id = 'section';
        itemSection.innerHTML = `
            <img src="IMG/image-icon.png" alt="" id="foto_produto">
            <section>
                <h2>
                ${itemData.productName}
                </h2>
                <h3>
                ${itemData.price} R$ por ${itemData.weight} Kg
                </h3>
            </section>
            <a href="chat.html"><img src="IMG/1310190.png" alt="" id="foto_produto"></a>
        `;

        // Append the new section to the main element
        var mainElement = document.querySelector('main');
        mainElement.insertBefore(itemSection, mainElement.firstChild);
    }
});