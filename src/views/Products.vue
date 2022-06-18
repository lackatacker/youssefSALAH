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
    if (sessionStorage.length!=0) {
      this.$store.state.cartItems = []
      for (var i = 0; i < sessionStorage.length; i++) {
        this.$store.commit('addInCart', this.$store.state.items[i])
      }
    }
  }
}
</script>
