<script setup lang="ts">


interface Poke {
  name: string;
  type: string;
  evolution: number;
}

const counts = ref([10, 20, 50])
//const double = computed(() => count.value * 2)
console.log(counts.value[2]);
const valor = ref(0);
const increment = () => valor.value++;

const pokemons : Poke = {
    name : "Bulba",
    type : "Grenn",
    evolution: 12
}

console.log(pokemons);



</script>
<template>
    <div v-for="count in counts">
        <div>Profile: {{ count }}</div>
    </div>

    <button @click="increment"> Mais + </button>
    <div>{{ valor }}</div>

</template>

<style>
@import url("./style.css");
</style>