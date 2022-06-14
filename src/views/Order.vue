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
      <button type="button" class="btn btn-primary mr-3" data-toggle="modal" data-target="#exampleModal">Proceed to
        payment Iframe</button>
      <button type="button" class="btn btn-secondary mr-3" @click="redirect">Proceed to
        payment Redirection</button>
      <button type="button" class="btn btn-success mr-3">Proceed to payment JSON Based</button>
      <button type="button" class="btn btn-dark mr-3" @click="$router.push('/payment/html')">Proceed to payment HTML
        Display</button>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" :src="link" allowfullscreen></iframe>
            </div>  
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadc from '@/Components/ProductsPage/Breadc.vue'
import getPayment from '../services/getPayment'
export default {
  data(){
    return {
    link:'',
  }
  },
  components: {
    Breadc,
  },
  computed:{

  },
  methods: {
    redirect(){
      window.location.href=this.link
    }
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
  getPayment.getLink().then((res) =>this.link=res.data)
  }
}
</script>