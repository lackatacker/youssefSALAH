import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoPage:[],
    cartItems:[],
    items: [
      {
        id:0,
        img: require('@/assets/t0.jpg'),
        title: 'sofa 243',
        price: 156,
        color: 'yellow',
        type: 'sofa'
      }, {
        id:1,
        img: require('@/assets/t1.jpg'),
        title: 'lamp 54',
        price: 756,
        color: 'yellow',
        type: 'lamp'
      }, {
        id:2,
        img: require('@/assets/t2.jpg'),
        title: 'fotal 34',
        price: 362,
        color: 'yellow',
        type: 'chair'
      }, {
        id:3,
        img: require('@/assets/t3.jpg'),
        title: 'fotal324',
        price: 505,
        color: 'red',
        type: 'chair'
      }, {
        id:4,
        img: require('@/assets/t4.jpeg'),
        title: 'sofa-1',
        price: 243,
        color: 'white',
        type: 'sofa'
      }, {
        id:5,
        img: require('@/assets/t5.jpg'),
        title: 'Fotal-2',
        price: 44,
        color: 'white',
        type: 'chair'
      }, {
        id:6,
        img: require('@/assets/t6.jpg'),
        title: 'Fotal-34',
        price: 505,
        color: 'blue',
        type: 'chair'
      }, {
        id:7,
        img: require('@/assets/t7.jpg'),
        title: 'foto-4364',
        price: 432,
        color: 'red',
        type: 'table'
      },
      {
        id:8,
        img: require('@/assets/t8.jpg'),
        title: 'foto-44',
        price: 390,
        color: 'white',
        type: 'table'
      },
      {
        id:9,
        img: require('@/assets/t9.jpg'),
        title: 'foto-34',
        price: 756,
        color: 'yellow',
        type: 'chair'
      },
      {
        id:10,
        img: require('@/assets/t10.png'),
        title: 'foto-23',
        price: 44,
        color: 'white',
        type: 'chair'
      },
      {
        id:11,
        img: require('@/assets/t11.png'),
        title: 'foto-4234',
        price: 156,
        color: 'red',
        type: 'lamp'
      },
      {
        id:12,
        img: require('@/assets/t12.png'),
        title: 'foto-4234',
        price: 756,
        color: 'blue',
        type: 'lamp'
      },
      {
        id:13,
        img: require('@/assets/t13.png'),
        title: 'foto-4234',
        price: 756,
        color: 'white',
        type: 'chair'
      },
      {
        id:14,
        img: require('@/assets/t14.png'),
        title: 'table-32',
        price: 756,
        color: 'white',
        type: 'table'
      }
    ]
  },
  // plugins: [createPersistedState()],
  getters: {
    async priceMthod() {
      console.log('Price method');
    },
    itemsNumber(state){  // Cart Component
      return state.cartItems.length
    },
    totalPrice(state) { // Cart Component
      if (state.cartItems.length != 0){
        let a=0
       state.cartItems.forEach(e=>{console.log(e.title,'is repeated ',parseInt(sessionStorage.getItem(e.id)),' times');a+=e.price*parseInt(sessionStorage.getItem(e.id))})
       return parseInt(a)
      }
    },
    infoLength(state) { // Info Component
      if(state.infoPage.length > 0) {
        return state.infoPage.splice(0, 1)
      }
    },
    items(state) {
      return state.cartItems;
    },

  },
  mutations: {
    addInCart(state, n){
      return state.cartItems.push(n)
    },
    inCart(state, n) {
      if(!sessionStorage.getItem(n.id)){
      sessionStorage.setItem(n.id,1)
      return state.cartItems.push(n)
      }
      sessionStorage.setItem(n.id,parseInt(sessionStorage.getItem(n.id))+1)
      state.cartItems.splice(n.id, 1)
      state.cartItems.push(n)
    },
    outCart(state, n) { // Cart Component
      console.log('-n: ' + JSON.stringify(n))
      let index = state.cartItems.findIndex(x => x.id === n)
      return state.cartItems.splice(index, 1)
    },
    addtoInfo(state, n) { // Info Component
       return state.infoPage.push(n)
    },
  },
})
