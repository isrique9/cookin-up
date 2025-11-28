<template>
  <div class="selected-container">
    <h4>Sua lista:</h4>
    <div class="tags">
      <IngredientTag 
        v-for="item in selected"
        :key="item"
        :name="item"
        @remove="$emit('remove', item)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import IngredientTag from "./IngredientTag.vue";


defineProps<{ selected: string[] }>();
defineEmits(["remove"]);
</script>

<style scoped>
.selected-container {
  padding: 20px 0;
  margin: 80px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 24px;
}

h4 {
  color:var(--coral);
  text-align: center;
  font-size: 31px;
  font-family: var(--font-family-padrao);
}
</style>
