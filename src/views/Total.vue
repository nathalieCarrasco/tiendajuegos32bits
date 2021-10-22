<template>
<div class="card text-center  " >
  <div class="card-header">Tus Productos comprados Son :</div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li v-for="juego in $store.state.ventadejuegos" :key="juego.codigo" class="list-group-item">codigo: {{ juego.codigo }} -  Nombre: {{ juego.nombre }} - Stock: {{ juego.stock }} - Precio:${{ juego.precio }}</li>
    </ul>
  </div>
  <div class="card-footer text-muted"> TOTAL A PAGAR : <span class=" h4 m-3 border border-success">${{ $store.state.ventasTotales}}</span></div>
</div>

</template>

<script>
export default {
  name: 'Total'
};
</script>

<style></style>