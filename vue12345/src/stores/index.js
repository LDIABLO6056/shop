import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      products: [
        {
          id: 1,
          name: 'Мясо',
          price: '230',
          unit: 'kg',
          quantity: 0,
          description: 'Говядина высшего качества',
          imageUrl: '/src/assets/images/fine-stake.png'
        },
        {
          id: 2,
          name: 'Хлеб',
          price: '30',
          unit: 'шт',
          quantity: 0,
          description: 'Настоящий хлеб из твердых сортов пшеницы',
          imageUrl: '../assets/images/tasty-bread.png'
        },
        {
          id: 3,
          name: 'Молоко',
          price: '70',
          unit: 'шт',
          quantity: 0,
          description: 'Молоко от элитных коров этой вселенной',
          imageUrl: '../assets/images/choco-milk.png'
        },
        {
          id: 4,
          name: 'Помидоры',
          price: '120',
          unit: 'kg',
          quantity: 0,
          description: 'Самые красные помидоры в мире',
          imageUrl: '../assets/images/tomatoes.png'
        },
        {
          id: 5,
          name: 'Оливковое масло',
          price: '114',
          unit: 'шт',
          quantity: 0,
          description: 'Масло для готовки(не моторное) ',
          imageUrl: '../assets/images/olive-oil.png'
        },
        {
          id: 6,
          name: 'Бананы',
          price: '100',
          unit: 'kg',
          quantity: 0,
          description: 'Лучшие бананы. Магнит для обезьян.',
          imageUrl: '../assets/images/bananas.png'
        }
      ],
      cart: [],
      cartTotal: 0
    }
  },
  actions: {
    addToCart(product) {
      let inCart = false

      this.cart.forEach((el) => {
        if (el.id === product.id) inCart = true
      })

      if (inCart === false) {
        this.cart.push(product)
        product.quantity = 1
      } else product.quantity++
    },
    removeFromCart(product) {
      let productIndex = this.cart.indexOf(product)
      this.cart.splice(productIndex, 1)
      product.quantity = 0
    },
    reduceQuantity(product) {
      product.quantity--
    },
    addToFavorite(product) {
      product.favorite = !product.favorite
    },
    getProductImg(imageUrl) {
      return new URL(imageUrl, import.meta.url).href
    }
  },
  getters: {
    getProducts: (state) => {
      return state.products
    },
    getFavoritesProducts: (state) => {
      return state.products.filter((product) => product.favorite === true)
    }
  }
})
