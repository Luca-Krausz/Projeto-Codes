// Limpa o Array (localStorage) de itens vendidos após recarregar a página

/*document.addEventListener('DOMContentLoaded', function() {

                localStorage.removeItem('postedItems');
});*/

// Código para adicionar itens à página

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('sell-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 


        var itemData = {
            productName: document.getElementById('product-name').value,
            weight: document.getElementById('weight').value,
            price: document.getElementById('price').value,
            description: document.getElementById('description.value'),

        };

        var itemsArray = JSON.parse(localStorage.getItem('postedItems')) || [];

        itemsArray.push(itemData);

        localStorage.setItem('postedItems', JSON.stringify(itemsArray));

        window.location.href = "seus-itens.html";
    });
});


document.addEventListener('DOMContentLoaded', function() {

    var itemsArrayString = localStorage.getItem('postedItems');
    var itemsArray = JSON.parse(itemsArrayString);


    if (itemsArray && itemsArray.length > 0) {

        itemsArray.forEach(function(itemData) {
            var itemSection = document.createElement('section');
            itemSection.className = 'section';
            itemSection.innerHTML = `
            <img src="IMG/image-icon.png" alt="" id="foto_produto">
            <section>
                <h2>
                ${itemData.productName}
                </h2>
                <h3>
                ${itemData.weight} Kg por ${itemData.price} R$
                </h3>
            </section>
            <a href="chat.html"><img src="IMG/1310190.png" alt="" id="foto_produto"></a>
        `;

            var mainElement = document.querySelector('main');
            mainElement.prepend(itemSection);
        });
    }
});