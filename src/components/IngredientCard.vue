<template>
  <div class="card">
    <div class="header">
      <slot name="icon" />
    </div>
    <h3>{{ title }}</h3>

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
h3 {
  color: var(--verde-medio);
  font-size: 22px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 8px;
  border-radius: 16px;
  background: white;
  width: 281px;
  height: 306px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.10);
  gap: 8px;
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
  justify-content: center;
}
</style>
