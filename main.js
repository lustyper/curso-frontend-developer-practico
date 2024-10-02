const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoshoppingCartContainer)

function toggleDesktopMenu() {
    // Verifica si el shoppingCartContainer o el menudesktop no estan cerrados
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    

    // Cierra el shoppingCartContainer si está abierto
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    // Alterna la visibilidad del menú de escritorio
    desktopMenu.classList.toggle('inactive');
    

    // Cierra el shoppingCartContainer si el menú de escritorio está abierto
    if (!isDesktopMenuClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
}



function toggleMobileMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')
    
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoshoppingCartContainer() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive')
    
    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

{/* <body>
<section class="main-container">
  <div class="cards-container">

    <div class="product-card">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      <div class="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div>
</section>
</body> */}

function renderProducts(arr) {
  for (const product of arr) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
  
    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.image)
    // product= {name, price, image} -> product.image
  
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
  
    const productInfoDiv = document.createElement('div')
  
    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.price
    const productName = document.createElement('p')
    productName.innerText = '$' + product.name
  
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
  
  
    const productInfoFigure = document.createElement('figure')
    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
  
    productInfoFigure.appendChild(productImgCart)
  
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
  
    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)
  
    cardsContainer.appendChild(productCard)
  
  
  }
  
} 
renderProducts(productList)