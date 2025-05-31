<template>
    <form @submit.prevent="agregarDatos">
      <div>
        <label for="id">ID:</label>
        <input type="number" id="id" v-model="id" required />
      </div>
  
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" required />
      </div>
  
      <button type="submit">Agregar</button>
    </form>
  
    <div v-if="mensaje">
      <p>{{ mensaje }}</p>
    </div>
  
    <div v-if="nombres.length > 0">
    <ul>
      <li v-for="item in nombres" :key="item.id">
        {{ item.id }} - {{ item.nombre }}
      </li>
    </ul>
    </div>
    <div v-else>
        No hay carreras registradas
    </div>

  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  
  const id = ref<number | null>(null)
  const nombre = ref<string>('')
  const mensaje = ref<string>('')
  
  // Array de objetos con id y nombre
  const nombres = ref<{ id: number, nombre: string }[]>([])
  
  function agregarDatos() {
    if (id.value !== null && nombre.value.trim() !== '') {
      nombres.value.push({
        id: id.value,
        nombre: nombre.value.trim(),
      })
  
      mensaje.value = `Agregado: ID = ${id.value}, Nombre = ${nombre.value}`
      id.value = null
      nombre.value = ''
    }
  }
  
  onMounted(() => {
    // Simular carga inicial de datos
    nombres.value = [
      { id: 1, nombre: 'Licenciatura' },
      { id: 2, nombre: 'Maestría' }
    ]
  })
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 300px;
  }
  
  label {
    font-weight: bold;
  }
  
  input {
    padding: 0.4rem;
    font-size: 1rem;
  }
  
  button {
    margin-top: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
  }
  </style>
  