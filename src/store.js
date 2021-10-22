import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// 
const store = new Vuex.Store({
  state: {
    busqueda: "",
    ventasTotales:0,
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
// agregar getters para la vista de venta 
},

  // recordar que primero se escribe en mayuscula y luego en minuscula mismo nombre 
  mutations: {
    SET_BUSQUEDA(state, nuevaBusqueda) {
      state.busqueda = nuevaBusqueda
    },
  AGREGAR_CANTIDAD(state, index){
    state.listaJuegos[index].stock++ // agregar 1 
  },
  RESTAR_CANTIDAD(state, index){
    state.listaJuegos[index].stock-- // restar uno 
  },
  AGREGAR_VENTA(state , juego){
    state.ventadejuegos.push(juego)
  },
  VENTATOTAL(state,juego){
    state.ventasTotales += juego.precio;
  },
  
},
  actions: {
    setBusqueda(context, nuevaBusqueda) {
      context.commit("SET_BUSQUEDA", nuevaBusqueda)
    },
    agregarVenta({ state, commit }, { juego, index }) {
      const Juegosenventa = state.listaJuegos.findIndex(
        (juegoenventa) => juegoenventa.codigo === juego.codigo
      )
      setTimeout(() => {
        if(Juegosenventa !== -1) {
          commit("AGREGAR_CANTIDAD", Juegosenventa);
          commit("RESTAR_CANTIDAD", index);
        }else{
          commit("RESTAR_CANTIDAD", index)
        }
        setTimeout(() => {
          commit("AGREGAR_VENTA", { ...juego, stock: 1 });
          commit("VENTATOTAL", juego) 
          //alert(`funciona porfis `) 
          alert(` Su venta fue procesada con exito , Nombre del Juego ${ juego.nombre} - Codigo ${ juego.codigo} `);

        },1000)
        
      },2000)
    },
  }
});

export default store;