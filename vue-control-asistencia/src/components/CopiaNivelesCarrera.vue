<template>
  
  
  <div class="container-fluid">
    
    <div class="row">
      <!-- Barra lateral ocupa 2 columnas -->
      <div class="col">
        <BarraLateralPlataforma />
      </div>

      <!-- Contenido principal centrado ocupa 10 columnas -->
      <div class="col-md-10 col-xxl-10 d-flex justify-content-center">
        <div class="ol-md-8 col-xxl-8">
          <h1 class="my-4 text-center">Gestión de Niveles de Carrera</h1>

          <form @submit.prevent="handleSubmit" class="mb-4">
            <div class="input-group mb-3">
              <input
                v-model="datosForm.nombre"
                placeholder="Nombre del nivel"
                required
                class="form-control"
              />
              <button type="submit" class="btn btn-primary">
                {{ editMode ? 'Actualizar' : 'Agregar' }}
              </button>
            </div>
          </form>

          <ul class="list-group">
            <li
              v-for="nivel in niveles"
              :key="nivel.id"
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              {{ nivel.nombre }}
              <div>
                <button @click="editNivel(nivel)" class="btn btn-sm btn-warning me-2">Editar</button>
                <button @click="deleteNivel(nivel.id)" class="btn btn-sm btn-danger">Eliminar</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, onMounted } from 'vue'
import BarraLateralPlataforma from './plataforma/BarraLateral.vue'


export default {

  components: {
    BarraLateralPlataforma
  },

  setup() {
    const niveles = ref([]) //Array para almacenar regs simulando la tabla NivelesCarrera
    const datosForm = ref({ id: 0, nombre: '' })
    const editMode = ref(false)
    const editId = ref(null)

    const fetchNiveles = async () => {
      // Aquí iría la lógica para obtener los registros desde la API
      // Por ejemplo:
      // const response = await fetch('/api/niveles');
      // niveles.value = await response.json();
      const response = await fetch(`http://localhost:3000/nivelesCarrera`)
      niveles.value = await response.json()
      // niveles.value = [{ id: 1, nombre: 'Licenciatura' }]
    }

    const handleSubmit = async () => {
      if (editMode.value) {
         // Aquí iría la lógica para actualizar el registro en la API
        // Por ejemplo:
  
        const response = await fetch(`http://localhost:3000/nivelesCarrera/${editId.value}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(datosForm.value),
        });

        if (response.ok) {
          const index = niveles.value.findIndex((n) => n.id === editId.value);
          if (index !== -1) {
            niveles.value[index] = { ...datosForm.value, id: editId.value };
          }
          editMode.value = false;
          editId.value = null;
        
           } else {
            alert.error('Error al actualizar el nivel', await response.text())
          }

 

    

  
      } else {
        // Aquí iría la lógica para agregar el registro a la API
        // Por ejemplo:
        const response = await fetch('http://localhost:3000/nivelesCarrera', {
        method: 'POST',
        headers: {
       'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre: datosForm.value.nombre}),
        });


        if (response.ok) {

          const newNivel = await response.json();
        //const  newNivel = { ...datosForm.value, id: niveles.value.length + 1 }
           niveles.value.push(newNivel)
        
        
           } else {
              alert.error('Error al agregar el nivel', await response.text())
          }
   
      }
      datosForm.value = { id: 0, nombre: '' }
    }
     //const  newNivel = { ...datosForm.value, id: niveles.value.length + 1 }

    const editNivel = (nivel) => {
      datosForm.value = { id: nivel.id, nombre: nivel.nombre }
      editMode.value = true
      editId.value = nivel.id
    }

    const deleteNivel = async (id) => {
      // Aquí iría la lógica para eliminar el registro de la API
      // Por ejemplo:
    
        const response = await fetch(`http://localhost:3000/nivelesCarrera/${id}`, {
           method: 'DELETE'
           });

         if (response.ok) {

           niveles.value = niveles.value.filter((n) => n.id !== id)
          }else{

            alert.error('Error al eliminar el nivel', await response.text())
          }

    }

    onMounted(fetchNiveles)

    return {
      niveles,
      datosForm,
      editMode,
      handleSubmit,
      editNivel,
      editId,
      deleteNivel,
    }
  },
}
</script>

<style scoped>
.form-niveles-carrera{


  align-items: center;
align-content: center;
}
form {
  margin-bottom: 20px;

}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
button {
  margin-left: 10px;
}
</style>
