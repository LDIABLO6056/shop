<template>
  <div class="w-full h-auto flex justify-start items-center my-8">
    <RouterLink
      v-for="(link, index) in navLinks"
      :key="index"
      class="p-4 font-roboto font-bold text-sm text-[#848484]"
      :to="link.route"
    >
      {{ link.label }}
    </RouterLink>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const navLinks = ref([
  { label: 'Все продукты', route: '/' },
  { label: 'Закладки', route: '/favorites' },
  { label: 'Предыдущие покупки', route: '/previous' }
])
</script>
