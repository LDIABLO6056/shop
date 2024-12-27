<template>
  <button
    class="w-fit h-full flex justify-center items-center font-roboto text-[18px] border-2 border-[#a5b03e] rounded-md px-4 py-3"
    type="button"
    :class="buttonCustom"
  >
    <p :class="text !== '' ? 'mr-2' : 'mr-0'">{{ text }}</p>
    <component :is="iconComponent" :size="iconSize" />
  </button>
</template>

<script setup>
import { ref } from 'vue'

import PlusCircleOutline from 'vue-material-design-icons/PlusCircleOutline.vue'
import MinusCircleOutline from 'vue-material-design-icons/MinusCircleOutline.vue'
import TrashCanOutline from 'vue-material-design-icons/TrashCanOutline.vue'
import CreditCardOutline from 'vue-material-design-icons/CreditCardOutline.vue'

const props = defineProps(['text', 'icon', 'buttonCustom'])

let iconSize = ref(20)

let iconComponent = PlusCircleOutline

switch (props.icon) {
  case 'minus':
    iconComponent = MinusCircleOutline
    break
  case 'trash':
    iconComponent = TrashCanOutline
    break
  case 'credit-card':
    iconComponent = CreditCardOutline
    break
}
</script>
