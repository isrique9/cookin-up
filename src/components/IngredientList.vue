<template>
  <div class="grid">
    <IngredientCard
      v-for="cat in categories"
      :key="cat.title"
      :title="cat.title"
      :items="cat.items"
      :selectedList="selected"
      @toggle="$emit('toggle', $event)"
    >
      <template #icon>
        <img :src="cat.icon" class="icon" />
      </template>
    </IngredientCard>
  </div>
</template>

<script setup lang="ts">
import IngredientCard from "./IngredientCard.vue";

defineProps<{
  categories: {
    title: string;
    icon: string;
    items: string[];
  }[];
  selected: string[];
}>();

defineEmits(["toggle"]);
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}
.icon {
  width: 28px;
}
</style>
