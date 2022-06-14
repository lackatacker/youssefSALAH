<template>
  <div>
    <h3 class="text-secondary display-5 text-center my-5">Confirm your purchase!</h3>
    <div class="d-flex justify-content-center pb-3">
      <div class="card">
        <div class="d-flex card-header justify-content-center">
          ORDER
        </div>
        <div class="card-body">
          <p class="card-text">
            <label class="blockquote">Amount:</label> {{this.$store.getters.totalPrice}}<br>
            <label class="blockquote">Currency:</label> MAD<br>
            <label class="blockquote">Number of Items:</label> {{this.$store.getters.itemsNumber}}
          </p>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center py-4">
      <router-link to="/payment/iframe">
      <button type="button" class="btn btn-primary mr-3">Proceed to payment Iframe</button>
      </router-link>
      <!-- <router-link to="/payment/redirection"> -->
      <button type="button" class="btn btn-secondary mr-3" @click="$router.push('/payment/redirection')">Proceed to payment Redirection</button>
      <!-- </router-link> -->
      <button type="button" class="btn btn-success mr-3">Proceed to payment JSON Based</button>
      <button type="button" class="btn btn-dark mr-3" @click="$router.push('/payment/html')">Proceed to payment HTML Display</button>
    </div>

  </div>
</template>

<script>
import Breadc from '@/Components/ProductsPage/Breadc.vue'
export default {
  components: {
    Breadc,
  },
  computed:{

  },
  methods: {

  },
  created() {
    var itemsStr = localStorage.getItem('cartItems')
    if (itemsStr) {
      this.$store.state.cartItems = []
      var items = JSON.parse(itemsStr)
      for (var i = 0; i < items.length; i++) {
        this.$store.commit('inCart', items[i])
      }
    }
  }
}
</script>