<template>

    <div class="plataforma-sidebar bg-dark text-light p-4">
      <div class="logo mb-4 text-center">
        <img src="@/assets/dashboard/logo.png" alt="Logo" class="img-fluid mb-2" style="max-width: 150px;">
        <p class="mb-0">CENTRO DE INNOVACIÓN</p>
      </div>
      <div class="usuario-info mb-4 text-center">
        <img src="@/assets/dashboard/usuario.webp" alt="Avatar" class="rounded-circle mb-2" style="width: 80px; height: 80px; object-fit: cover;">
        <p class="mb-1">¡Bienvenido!</p>
        <p class="mb-0 font-weight-bold">josué</p>
      </div>
      <div class="menu">
        <h5 class="mb-3">Menú</h5>
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-view  class="nav-link text-light active">
              Niveles Carrera
            </router-view>
          </li>
       
        </ul>
      </div>
     
    </div>

  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
//   import logo from '@/assets/logo.png';
  
  export default {
    name: 'BarraLateralPlataforma',
    components: {
      RouterLink,
    },
  };
  </script>
  
  <style scoped lang="scss">
 .plataforma-sidebar {
  width: 250px;
  background-color: #222; /* Tema oscuro */
  color: #eee;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinear elementos a la izquierda */
  padding: 20px;

  .logo {
    text-align: left; /* Alinear logo a la izquierda */
    margin-bottom: 30px;
    img {
      max-width: 120px;
      margin-bottom: 10px;
    }
    p {
      font-size: 0.9rem;
      color: #aaa;
    }
  }

  .usuario-info {
    text-align: left; /* Alinear info de usuario a la izquierda */
    margin-bottom: 40px;
    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 5px;
    }
    .font-weight-bold {
      color: #fff;
    }
  }

  .menu {
    width: 100%;
    h5 {
      color: #aaa;
      margin-bottom: 15px;
      padding-left: 10px;
    }
    .nav-link {
      display: flex;
      align-items: center;
      padding: 10px 15px;
      border-radius: 5px;
      transition: background-color 0.15s ease-in-out;
      color: #ccc;
      text-decoration: none;

      i {
        margin-right: 10px;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
        color: #fff;
      }

      &.active {
        background-color: #007bff; /* Color primario */
        color: #fff;
        font-weight: bold;
      }
    }
    .nav-item {
      margin-bottom: 8px;
    }
  }

  .configuracion {
    width: 100%;
    padding-bottom: 20px;
    margin-top: auto; /* Empujar al fondo */
    border-top: 1px solid #444;
    padding-top: 20px;
    a {
      display: flex;
      align-items: center;
      color: #aaa;
      text-decoration: none;
      padding: 10px 15px;
      border-radius: 5px;
      transition: background-color 0.15s ease-in-out;
      i {
        margin-right: 10px;
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
        color: #fff;
      }
    }
  }
}
  </style>