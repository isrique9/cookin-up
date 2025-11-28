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
  padding: 6px 10px;
  border-radius: 10px;
  background: var(--cinza-claro);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.ingredient-btn:hover {
  transform: scale(1.05);
  background: var(--cinza-claro-hover);
}

.active {
  background: var(--coral);
  color: white;
  border-color: var(--coral);
}

.active:hover {
  background: var(--coral-hover);
  color: white;
  border-color: var(--coral-hover);
}
</style>
