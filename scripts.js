const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttonMapAll = document.querySelector('.map-all');
const buttonSumAll = document.querySelector('.sum-all');
const buttonFilterAll = document.querySelector('.filter-all');

function showAll(productsArray) {
    let liItems = '';

    productsArray.forEach(product => {
        liItems += `
            <li>
                ${product.src ? `<img src="${product.src}" alt="${product.name}">` : ''}
                <p>${product.name}</p>
                <p class="item-price">R$ ${product.price.toFixed(2)}</p>
            </li>
        `;
    });

    list.innerHTML = liItems;
}

function mapAllItems() {
    const discountedPrices = menuOptions.map(product => ({
        ...product,
        price: product.price * 0.9
    }));

    showAll(discountedPrices);
}

function sumAllItems() {
    const totalValue = menuOptions.reduce(
        (acc, product) => acc + product.price,
        0
    );

    list.innerHTML = `
        <li>
            <p>Valor total do pedido:</p>
            <p class="item-price">R$ ${totalValue.toFixed(2)}</p>
        </li>
    `;
}

function filterAllItems() {
    const veganItems = menuOptions.filter(product => product.vegan);
    showAll(veganItems);
}

// Eventos
buttonShowAll.addEventListener('click', () => showAll(menuOptions));
buttonMapAll.addEventListener('click', mapAllItems);
buttonSumAll.addEventListener('click', sumAllItems);
buttonFilterAll.addEventListener('click', filterAllItems);
