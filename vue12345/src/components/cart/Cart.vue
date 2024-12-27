<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="w-full">
    <div class="w-full flex mt-4" v-for="product in cart">
      <div class="w-1/2 h-full">
        <h6 class="font-robotoSlab font-bold text-xl">{{ product.name }}</h6>
        <p class="font-robotoSlab font-normal text-base">
          {{ product.price }} - {{ product.quantity }} {{ product.unit }}
        </p>
      </div>
      <div class="w-1/2 h-full flex justify-end">
        <h6 class="font-robotoSlab font-bold text-xl">
           {{ productTotalPrice(product.quantity, product.price) }} руб
        </h6>
      </div>
    </div>
  </div>
  <div class="w-full h-auto flex py-6">
    <div class="w-1/2 h-auto">
      <h6 class="font-robotoSlab font-bold text-2xl">В сумме</h6>
      
    </div>
    <div class="w-1/2 flex justify-end">
      <h6 class="font-robotoSlab font-bold text-2xl"> {{ cartTotal }} руб</h6>
    </div>
  </div>
  <div class="w-full h-auto flex justify-center items-center">
    <BaseButton
      text="Офромить заказ"
      icon="credit-card"
      button-custom="w-full bg-[#0092FB] text-white"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useProductsStore } from '@/stores/index'

import BaseButton from '@/components/ui/BaseButton.vue'

const cart = useProductsStore().cart
const cartTotal = ref('0.00')

const productTotalPrice = (quantity, price) => {
  let total = quantity * price
  return total.toFixed(2)
}

const calculateCartTotal = () => {
  let total = 0
  for (const product of cart) {
    total += parseFloat(productTotalPrice(product.quantity, product.price))
  }
  return total.toFixed(2)
}

watch(cart, () => {
  cartTotal.value = calculateCartTotal()
})
</script>
