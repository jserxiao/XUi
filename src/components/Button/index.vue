<template>
  <button class="x-button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'XButton'
})
</script>

<style scoped lang="less">
.x-button {
  border: 1px solid #333;
}
</style>