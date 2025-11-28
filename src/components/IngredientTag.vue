<template>
  <span class="tag">
    {{ name }}
    <button class="x" @click="$emit('remove')">×</button>
  </span>
</template>

<script setup lang="ts">
defineProps<{ name: string }>();
defineEmits(["remove"]);
</script>

<style scoped>
.tag {
  padding: 6px 12px;
  background: #ff6b2c;
  border-radius: 20px;
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.x {
  background: transparent;
  border: none;
  font-size: 14px;
  color: white;
  cursor: pointer;
}
</style>
