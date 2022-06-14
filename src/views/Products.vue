<template>
  <div>
    <Breadc />
    <Grid />
  </div>
</template>

<script>
import Breadc from '@/Components/ProductsPage/Breadc.vue'
import Grid from '@/Components/ProductsPage/Grid.vue'

export default {
  components: {
    Breadc, Grid
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
