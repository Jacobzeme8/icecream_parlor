const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4
}]

let cart = []

function drawStore(){
  let storeElem = document.getElementById("store")
  let template = ``
  iceCream.forEach(i => template +=`
  <div class="col-2">
        <div class="card">
          <div class="card-body">
            <img src="${i.image}" alt="">
            <h3>${i.name}</h3>
            <h6>price: ${i.price}</h6>
            <button onclick="addItem('${i.name}', iceCream)">Purchase</button>
          </div>
        </div>
      </div>
  `)

  toppings.forEach(t => template +=`
  <div class="col-2">
        <div class="card">
          <div class="card-body">
            <img src="${t.image}" alt="">
            <h3>${t.name}</h3>
            <h6>price: ${t.price}</h6>
            <button onclick="addItem('${t.name}', toppings)">Purchase</button>
          </div>
        </div>
      </div>
  `)

  containers.forEach(c => template +=`
  <div class="col-2">
          <div class="card">
            <div class="card-body">
              <img src="${c.image}" alt="">
              <h3>${c.name}</h3>
              <h6>price: ${c.price}</h6>
              <button onclick="addItem('${c.name}', containers)">Purchase</button>
            </div>
          </div>
        </div>
`)

  storeElem.innerHTML = template
}

drawStore()

function drawCart(){
  let cartElem = document.getElementById("cart")
  let cartTemplate = ` `
  cart.forEach(i => cartTemplate +=`
  <h5 class="col-4">${i.name}</h5>
  `)
  cartElem.innerHTML = cartTemplate
}

function addItem(name, type){
  let itemToAdd = type.find(t => t.name == name)
  cart.push(itemToAdd)
  drawCart()
  totalPrice()
}

function totalPrice(){
  let total = 0;
  cart.forEach(i => total +=i.price)
  let template = `Total Price: ${total} `
  let priceElem = document.getElementById("total-price")
  priceElem.innerText = template
  console.log(total);
}

function checkout(){}
