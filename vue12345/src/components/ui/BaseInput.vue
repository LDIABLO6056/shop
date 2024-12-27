<template>
  <div class="w-full h-full flex justify-center items-center border-2 border-[#0092FB] rounded-md">
    <input
      class="w-full text-center border-none outline-none text-[#91527d] bg-transparent text-base placeholder-blue-500"
      :placeholder="quantity"
      disabled
      type="text"
    />
  </div>
</template>

<script setup>
const props = defineProps(['quantity'])
</script>
