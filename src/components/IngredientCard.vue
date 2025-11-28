<template>
  <div class="card">
    <div class="header">
      <slot name="icon" />
      <h3>{{ title }}</h3>
    </div>

    <div class="ingredients">
      <IngredientButton 
        v-for="item in items"
        :key="item"
        :name="item"
        :selected="selectedList.includes(item)"
        @toggle="$emit('toggle', item)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import IngredientButton from "./IngredientButton.vue";

defineProps<{
  title: string;
  items: string[];
  selectedList: string[];
}>();

defineEmits(["toggle"]);
</script>

<style scoped>
.card {
  padding: 20px;
  border-radius: 16px;
  background: white;
  min-width: 260px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.10);
}

.header {
  display: flex;
  align-items: center;
  gap: 10px;
}
.ingredients {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}
</style>
