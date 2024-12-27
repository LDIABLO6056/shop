<template>
  <div class="w-full h-full flex flex-col justify-center items-center px-20 py-12">
    <div class="md:w-full lg:max-w-[1520px]">
      <h1 class="font-robotoSlab font-bold text-4xl">Продуктовый магазин</h1>
      <TheNavigation />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import TheNavigation from './components/layout/TheNavigation.vue'
</script>
