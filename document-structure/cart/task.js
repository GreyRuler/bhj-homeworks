const cartProducts = document.querySelector('.cart__products')
const products = [...document.querySelectorAll('.product')]

function createCart(productId, imageUrl, count) {
    const cartElement = document.createElement("div")
    cartElement.classList.add("cart__product")
    cartElement.dataset.id = productId
    const imageElement = document.createElement("img")
    imageElement.classList.add("cart__product-image")
    imageElement.setAttribute("src", imageUrl)
    const countElement = document.createElement("div")
    countElement.classList.add("cart__product-count")
    countElement.textContent = count
    const cartRemove = document.createElement("a")
    cartRemove.classList.add("cart__remove")
    cartRemove.innerHTML = '&times;'
    cartRemove.setAttribute("href", "#")
    cartRemove.addEventListener('click', (event) => {
        cartElement.remove()
        cartProducts.parentElement.style.display = "none"
        event.preventDefault()
    })
    cartElement.appendChild(cartRemove)
    cartElement.appendChild(imageElement)
    cartElement.appendChild(countElement)
    return cartElement
}

products.forEach(product => {
    const decrement = product.querySelector('.product__quantity-control_dec')
    const increment = product.querySelector('.product__quantity-control_inc')
    const count = product.querySelector('.product__quantity-value')
    const productAdd = product.querySelector('.product__add')
    const imageElement = product.querySelector('img')
    const productId = product.dataset.id

    decrement.addEventListener('click', () => {
        const value = Number.parseInt(count.textContent)
        if (value !== 1) {
            count.textContent = value - 1
        }
    })
    increment.addEventListener('click', () => {
        count.textContent = Number.parseInt(count.textContent) + 1
    })
    productAdd.addEventListener('click', () => {
        let cartInCartProducts = [...cartProducts.children].find(element =>
            element.dataset.id === productId
        )
        if (cartInCartProducts) {
            const cartCount = cartInCartProducts.querySelector('.cart__product-count')
            cartCount.textContent = Number.parseInt(cartCount.textContent) + Number.parseInt(count.textContent)
        } else {
            cartInCartProducts = createCart(productId, imageElement.getAttribute("src"), count.textContent)
            cartProducts.appendChild(cartInCartProducts)
        }
        cartProducts.parentElement.style.display = "block"

        const cloneImage = imageElement.cloneNode(false)
        cloneImage.classList.add('product-shadow')
        product.querySelector('img').insertAdjacentElement( "beforebegin", cloneImage)
        let top = product.querySelector('img').getBoundingClientRect().top
        let left = product.querySelector('img').getBoundingClientRect().left
        let y = cartInCartProducts.querySelector('img').getBoundingClientRect().top - top + "px"
        let x = cartInCartProducts.querySelector('img').getBoundingClientRect().left - left + "px"
        cloneImage.setAttribute(
            'style',
            `transform: translate(${x},${y});
            transition: all 2s ease-in-out;`
        )
        setTimeout(function() {
            this.remove()
        }.bind(cloneImage), 2000)
    })
})