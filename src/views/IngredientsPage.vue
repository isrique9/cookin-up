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

    <h3 class="title">Ingredientes</h3>
    <p>Selecione abaixo os ingredientes que você quer usar nesta receita:</p>
    
    <IngredientList
    :categories="ingredientCategories"
    :selected="selected"
    @toggle="toggleIngredient"
    />
    
    <p1>*Atenção: consideramos que você tem em casa sal, pimenta e água.</p1>
    
    <div class="center">
      <button class="btn">Buscar receitas!</button>
    </div>
  </section>
</template>

<style scoped>
.container {
  padding: 30px 40px;
  background-color: var(--creme);
  border-radius: 60px;
}
.title {
  text-align: center;
  margin-bottom: 20px;
  color: var(--verde-medio);
}

h3 {
  font-size: 40px;
  font-family: var(--cabecalhos);
}

p {
  color: var(--verde-escuro);
  font-family: var(--font-family-padrao);
  font-size: 22px;
  text-align: center;
  margin-bottom: 32px;
}

p1 {
  color: var(--cinza);
}

.btn {
  margin-top: 30px;
  padding: 14px 30px;
  max-width: 312px;
  font-size: 18px;
  color: white;
  background: var(--coral);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.btn:hover {
  transform: scale(1.05);
  background: var(--coral-hover);
}

.center {
  display: flex;
  justify-content: center;
}
</style>
