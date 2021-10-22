import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// 
const store = new Vuex.Store({
  state: {
    busqueda: "",
    ventadejuegos:[],
    listaJuegos: [
      {codigo: "0001", nombre: "Sekiro", stock: 100, precio: 30000, color: "red", destacado: "true"},
      {codigo: "0002", nombre: "Fifa 21", stock: 100, precio: 25000, color: "blue", destacado: "false"},
      {codigo: "0003", nombre: "Gears of War 4", stock: 100, precio: 15000, color: "green", destacado: "true"},
      {codigo: "0004", nombre: "Mario Tennis Aces", stock: 100, precio: 35000, color: "yellow", destacado: "false"},
      {codigo: "0005", nombre: "Bloodborne", stock: 100, precio: 10000, color: "blue", destacado: "false"},
      {codigo: "0006", nombre: "Forza Horizon 4", stock: 100, precio: 20000, color: "red", destacado: "true"},
    ]
  },
  getters: {
    stockTotal(state) {
      return state.listaJuegos.reduce((accumulator, juego) => {
        accumulator = accumulator + juego.stock
        return accumulator;
      }, 0)
    },
    BusquedaJuegos(state){
      if (state.busqueda === "") {
        return[]
      } else {
        return state.listaJuegos.filter(juego => juego.nombre.toLowerCase().includes(state.busqueda.toLowerCase()))
      }
    },
  
    // segunda parte desafio primero crear cantidad de juegos con stock

  juegosConStock(state){
    return state.listaJuegos.filter(juego => juego.stock > 0)
  },
  listaJuegosConStock(state, getters){
    return getters.juegosConStock.length
  },

},

  // recordar que primero se escribe en mayuscula y luego en minuscula mismo nombre 
  mutations: {
    SET_BUSQUEDA(state, nuevaBusqueda) {
      state.busqueda = nuevaBusqueda
    }
  },
  AGREGAR_CANTIDAD(state, index){
    state.listaJuegos[index].stock++ // agregar 1 
  },
  RESTAR_CANTIDAD(state, index){
    state.listaJuegos[index].stock-- // restar uno 
  },

  

  actions: {
    setBusqueda(context, nuevaBusqueda) {
      context.commit("SET_BUSQUEDA", nuevaBusqueda)
    },
  
  
}});

export default store;