<template>
  <div class="table table-bordered">
    <ul v-if="$store.getters.BusquedaJuegos.length > 0">
      <li v-for="juego in $store.getters.BusquedaJuegos" :key="juego.codigo" :style="{'background-color': juego.color}">{{juego.codigo}} | {{juego.nombre}} | {{juego.stock}} | {{juego.precio}}</li>
    </ul>
  </div>
</template>
