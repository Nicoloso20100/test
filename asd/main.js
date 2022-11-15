const containerProduct = document.getElementById('container-product')

let products


const data = [
    {
        "id":1,
        "name": "Camisa",
        "price": 100,
        "discount": 30,
        "img": "https://picsum.photos/180"
    },

    {
        "id":1,
        "name": "Camisa",
        "price": 100,
        "discount": 30,
        "img": "https://picsum.photos/180"
    },

    {
        "id":1,
        "name": "Camisa",
        "price": 100,
        "discount": 30,
        "img": "https://picsum.photos/180"
    },

    {
        "id":1,
        "name": "Camisa",
        "price": 100,
        "discount": 30,
        "img": "https://picsum.photos/180"
    },

]





function showProduct () {
    data.map(product => {
        products = `
        <div class="product">
                <p class="discount">50%</p>
                <img />
                <img class="product__img" src=${product.img} alt='product' />
                <h2 class="product__name">${product.name}</h2>
                <div class="product__details">
                    <p class="product__oldPrice">${product.price}</p>
                    <p class="product__newPrice">${product.price - (product.price * product.discount / 100)}</p>
                </div>
                <button class="cart__button" id="add-button">Comprar</button>
            </div>
        `
        containerProduct.innerHTML += products
        const cartButton = document.getElementById('add-button')
        cartButton.addEventListener('click', (e) => {
            console.log(e);
        })
    })

    
    
}
showProduct()


    




function click (){
    console.log("click");
}




