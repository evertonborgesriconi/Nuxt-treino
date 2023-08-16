<script setup>

const route = useRoute();

console.log(route.params);
</script>

<template>
    <h1> o id é : {{ $route.params.id }}</h1>
</template>