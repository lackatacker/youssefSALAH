import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoPage:[],
    cartItems:[],
    items: [
      {
        id:0,
        img: require('@/assets/t0.jpg'),
        title: 'Ingenico',
        price: 156,
        color: 'yellow',
        type: 'sofa',
        quantity: 1
      }, {
        id:1,
        img: require('@/assets/t1.jpg'),
        title: 'Dejavoo',
        price: 756,
        color: 'yellow',
        type: 'lamp',
        quantity: 1
      }, {
        id:2,
        img: require('@/assets/t2.jpg'),
        title: 'Pax',
        price: 362,
        color: 'yellow',
        type: 'chair',
        quantity: 1
      }, {
        id:3,
        img: require('@/assets/t3.jpg'),
        title: 'Poynt',
        price: 505,
        color: 'red',
        type: 'chair',
        quantity: 1
      }, {
        id:4,
        img: require('@/assets/t4.jpeg'),
        title: 'Verifone',
        price: 243,
        color: 'white',
        type: 'sofa',
        quantity: 1
      }, {
        id:5,
        img: require('@/assets/t5.jpg'),
        title: 'Ingenico',
        price: 44,
        color: 'white',
        type: 'chair',
        quantity: 1
      }, {
        id:6,
        img: require('@/assets/t6.jpg'),
        title: 'Pax',
        price: 505,
        color: 'blue',
        type: 'chair',
        quantity: 1
      }, {
        id:7,
        img: require('@/assets/t7.jpg'),
        title: 'Dejavoo',
        price: 432,
        color: 'red',
        type: 'table',
        quantity: 1
      },
      {
        id:8,
        img: require('@/assets/t8.jpg'),
        title: 'Poynt',
        price: 390,
        color: 'white',
        type: 'table',
        quantity: 1
      },
      {
        id:9,
        img: require('@/assets/t9.jpg'),
        title: 'Verifone',
        price: 756,
        color: 'yellow',
        type: 'chair',
        quantity: 1
      },
      {
        id:10,
        img: require('@/assets/t10.png'),
        title: 'Dejavoo',
        price: 44,
        color: 'white',
        type: 'chair',
        quantity: 1
      },
      {
        id:11,
        img: require('@/assets/t11.png'),
        title: 'Ingenico',
        price: 156,
        color: 'red',
        type: 'lamp',
        quantity: 1
      },
      {
        id:12,
        img: require('@/assets/t12.png'),
        title: 'Poynt',
        price: 756,
        color: 'blue',
        type: 'lamp',
        quantity: 1
      },
      {
        id:13,
        img: require('@/assets/t13.png'),
        title: 'Verifone',
        price: 756,
        color: 'white',
        type: 'chair',
        quantity: 1
      },
      {
        id:14,
        img: require('@/assets/t14.png'),
        title: 'Ingenico',
        price: 756,
        color: 'white',
        type: 'table',
        quantity: 1
      }
    ]
  },
  // plugins: [createPersistedState()],
  getters: {
    itemsNumber(state){  // Cart Component
      return state.cartItems.length
    },
    totalPrice(state) { // Cart Component
      if (state.cartItems.length != 0){
        var a=0
       state.cartItems.forEach(e=>{
        a += e.price*e.quantity;
      });
       return parseInt(a)
      }
      return 0
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
      inCart(state, n) {
        const itemIndex = state.cartItems.findIndex(x => x.id === n.id);
        console.log('itmindex is  ',itemIndex)
        if (itemIndex === -1){
          n.quantity=1
          state.cartItems.push(n)
        }
        else
          state.cartItems[itemIndex].quantity++
    },
    outCart(state, id) { // Cart Component
      const itemIndex = state.cartItems.findIndex(x => x.id === id);
      state.cartItems[itemIndex].quantity--;
    },
    removeItem(state, id){
      const itemIndex = state.cartItems.findIndex(x => x.id === id);
      state.cartItems.splice(itemIndex, 1)
    },
    addtoInfo(state, n) { // Info Component
       return state.infoPage.push(n)
    },
    massAdd(state, params){
      const itemIndex = state.cartItems.findIndex(x => x.id === params.id);
      state.cartItems[itemIndex].quantity+=parseInt(params.numberToModify)
    },
    massRemove(state, params){
      const itemIndex = state.cartItems.findIndex(x => x.id === params.id);
      if(state.cartItems[itemIndex].quantity > params.numberToModify)
      state.cartItems[itemIndex].quantity-=params.numberToModify
      else
      state.cartItems.splice(itemIndex, 1)
    }
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
})
