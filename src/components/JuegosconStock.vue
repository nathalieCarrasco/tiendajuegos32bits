<template>
  <div class="card text-center  " >
    <div class="card-header"> Cantidad De Juegos Con stock :<b> {{ $store.getters.listaJuegosConStock }}</b></div>
    <h2>LISTA DE JUEGOS</h2>
    <ul>
      <li v-for="(juego, index) in $store.state.listaJuegos"
          :key="index" 
          class="m-3">
          {{juego.codigo }}
          |{{ juego.nombre }} 
          | {{ juego.stock }} 
          | {{ juego.precio }}
          <br>
      <button type="button" @click="agregarProducto(juego, index)" class="btn btn-info " >Vender</button></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'JuegosConStock',
  components: {
  },
methods:{
    agregarProducto(juego, index) {
      this.$store.dispatch("agregarVenta", {juego, index,});
    },
  },
};
</script>