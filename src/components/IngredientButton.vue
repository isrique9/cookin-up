<template>
  <button
    class="ingredient-btn"
    :class="{ active: selected }"
    @click="$emit('toggle', name)"
  >
    {{ name }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  selected: boolean;
}>();

defineEmits(["toggle"]);
</script>

<style scoped>
.ingredient-btn {
  padding: 6px 12px;
  border-radius: 10px;
  background: #f4f4f4;
  border: 1px solid #ddd;
  cursor: pointer;
}
.active {
  background: #ff6b2c;
  color: white;
  border-color: #ff6b2c;
}
</style>
