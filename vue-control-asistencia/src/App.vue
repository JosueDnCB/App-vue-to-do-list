<script setup lang="ts">

import NivelesCarrera from './components/CopiaNivelesCarrera.vue'
</script>



<template>
  <div id="app">
    <main>
    <router-view></router-view> <!-- Aquí se renderizarán las vistas -->
    <NivelesCarrera /> 
    <!-- Barra de navegación (si es global) -->
  </main>
  </div>
</template>

