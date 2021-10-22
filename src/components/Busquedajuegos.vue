<template>
<div class="container">
    <div class="row">
    <div class="col text-center p-5">
        <div class="input-group mb-3">
        <span class="input-group-text" 
            >Escribe el nombre del producto</span>
        <input
            type="text"
            class="form-control"
            id="basic-url"
            :value="$store.state.busqueda"
            @input="$store.dispatch('setBusqueda', $event.target.value)"
            placeholder="Escribe Nombre del Juego"
        />
        </div>
    </div>
    </div>

    <div class="row">
    <div class="col">
        <table class="table table-bordered">
        <tbody>
            <tr>
            <th scope="row">Cantidad de juegos Disponibles :</th>
            <td>{{$store.state.listaJuegos.length}}</td>
            </tr>
            <tr>
            <th scope="row">Cantidad de stock total :</th>
            <td>{{$store.getters.stockTotal}}</td>
            </tr>
        </tbody>
        </table>
    </div>
    </div>

    <div class="row">
    <div class="col">
        <Listado />
    </div>
    </div>
</div>
</template>
<script>
// import {mapState} from 'vuex'
import Listado from '../views/Listado.vue'
export default {
  components: {Listado}
};
</script>