<template>
  <div class="grid grid-cols-4 gap-8">
    <div class="col-span-3">
      <div class="grid grid-cols-3 gap-8">
        <Product
          v-for="product in products"
          :key="product.id"
          :product="product"
          :name="product.name"
          :description="product.description"
          :image="useProductsStore().getProductImg(product.imageUrl)"
          :price="product.price"
          :unit="product.unit"
          :favorite="product.favorite"
        />
      </div>
    </div>
    <div class="col-span-1 h-auto bg-[#F9FCFE] border border-[#54B1F4] rounded-2xl px-4 py-6">
      <h4 class="font-robotoSlab font-bold text-[28px] mb-6">Your basket</h4>
      <Cart />
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '@/stores/index'

import Product from '@/components/product/Product.vue'
import Cart from '@/components/cart/Cart.vue'

const products = useProductsStore().products
</script>
