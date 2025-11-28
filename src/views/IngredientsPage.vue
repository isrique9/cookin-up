<script setup lang="ts">
import { ref } from "vue";
import { ingredientCategories } from "@/data/ingredients";
import IngredientList from "@/components/IngredientList.vue";
import SelectedIngredients from "@/components/SelectedIngredients.vue";

const selected = ref<string[]>([]);

function toggleIngredient(item: string) {
  if (selected.value.includes(item))
    selected.value = selected.value.filter(i => i !== item);
  else
    selected.value.push(item);
}
</script>

<template>
  <section class="container">
    <SelectedIngredients
      :selected="selected"
      @remove="toggleIngredient"
    />

    <h2 class="title">Ingredientes</h2>
    <p>Selecione abaixo os ingredientes que você quer usar nesta receita:</p>

    <IngredientList
      :categories="ingredientCategories"
      :selected="selected"
      @toggle="toggleIngredient"
    />

    <div class="center">
      <button class="btn">Buscar receitas!</button>
    </div>
  </section>
</template>

<style scoped>
.container {
  padding: 30px 40px;
  background-color: var(--creme);
  border-radius: 40px;
}
.title {
  text-align: center;
  margin-bottom: 20px;
  color: #2f4a2f;
}

p {
  color: var(--verde-escuro);
  text-align: center;
}
.btn {
  margin-top: 30px;
  padding: 14px 30px;
  font-size: 18px;
  color: white;
  background: #ff6b2c;
  border: none;
  border-radius: 30px;
  cursor: pointer;
}
.center {
  display: flex;
  justify-content: center;
}
</style>
