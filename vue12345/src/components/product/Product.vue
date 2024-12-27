<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full bg-white flex flex-col rounded-2xl px-4 py-6 shadow-custom select-none">
    <div class="w-full h-auto flex justify-end">
      <Heart
        v-if="product.favorite === true"
        class="cursor-pointer"
        :size="iconSize"
        fillColor="#FF2738"
        @click="addProductToFavorite(product)"
      />
      <HeartOutline
        v-else
        class="cursor-pointer"
        :size="iconSize"
        fillColor="#979797"
        @click="addProductToFavorite(product)"
      />
    </div>
    <div class="w-[200px] h-[200px] self-center flex justify-center items-center">
      <img :src="image" alt="product-img" class="w-[80%] h-[80%]" />
    </div>
    <div class="w-full h-[88px] my-6">
      <h6 class="font-robotoSlab font-bold text-2xl text-[#262626]">{{ name }}</h6>
      <p class="font-robotoSlab font-normal text-sm text-[#787878]">{{ description }}</p>
      <h6 class="font-robotoSlab font-bold text-xl text-[#262626] mt-2">
         {{ price }} руб
        <span class="font-robotoSlab font-normal text-base">(за {{ unit }})</span>
      </h6>
    </div>
    <div class="w-full h-[54px] flex justify-center items-center" v-if="product.quantity === 0">
      <BaseButton
        @click="addProductToCart(props.product)"
        text="Добавить"
        button-custom="w-full text-[#0092FB]"
      />
    </div>
    <div class="w-full h-[54px] flex justify-center items-center gap-2" v-else>
      <BaseButton
        text=""
        icon="trash"
        button-custom="bg-[#CDE7FA] text-[#0092FB] border-[#CDE7FA]"
        @click="removeProductFromCart(props.product)"
      />
      <BaseButton
        text=""
        icon="minus"
        button-custom="bg-[#0092FB] text-white"
        :class="product.quantity === 1 ? 'bg-[#D1D1D1] border-[#D1D1D1] cursor-not-allowed' : ''"
        :disabled="product.quantity === 1"
        @click="reduceProductQuantity(props.product)"
      />
      <BaseInput :quantity="product.quantity" />
      <BaseButton
        text=""
        icon="plus"
        button-custom="bg-[#0092FB] text-white"
        @click="addProductToCart(props.product)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProductsStore } from '@/stores/index'

import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'

import HeartOutline from 'vue-material-design-icons/HeartOutline.vue'
import Heart from 'vue-material-design-icons/Heart.vue'

const props = defineProps(['product', 'name', 'image', 'description', 'price', 'unit'])

const productsStore = useProductsStore()

const iconSize = ref(20)

const addProductToCart = (product) => {
  productsStore.addToCart(product)
}

const removeProductFromCart = (product) => {
  productsStore.removeFromCart(product)
}

const reduceProductQuantity = (product) => {
  productsStore.reduceQuantity(product)
}

const addProductToFavorite = (product) => {
  productsStore.addToFavorite(product)
}
</script>
