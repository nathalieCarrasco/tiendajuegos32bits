<template>
  <div>
    <div class="container mx-4">Juegos con Stock:<b> {{ $store.getters.listaJuegosConStock }}</b></div>
    <ul>
      <li v-for="(juego, index) in $store.state.listaJuegos" :key="index" class="m-3">{{juego.codigo }} |{{ juego.nombre }} | {{ juego.stock }} | {{ juego.precio }}
      <button type="button">Vender</button></li>
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
      this.$store.dispatch("agregarJuegoaVenta", {juego, index,});
    },
  },
};
</script>