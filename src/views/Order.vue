<template>
  <div id="global">
    <h3 class="text-secondary display-5 text-center my-5">Confirm your purchase!</h3>
    <div class="d-flex justify-content-center pb-3">
      <div class="card">
        <div class="d-flex card-header justify-content-center">
          ORDER
        </div>
        <div class="card-body">
          <p class="card-text">
            <label class="blockquote">Amount:</label> {{tp}}<br>
            <label class="blockquote">Currency:</label> {{currency}}<br>
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
      <button type="button" class="btn btn-success mr-3" @click="$router.push('/payment')">Proceed to payment JSON Based</button>
      <button type="button" class="btn btn-dark mr-3" @click="handleHtml">Proceed to payment HTML
        Display</button>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="container-fluid" role="document" >
        <div class="modal-content">
          <div class="modal-header">
          </div>
          <div class="modal-body">
            <div class="embed-responsive embed-responsive-16by9">
            <iframe id="myIframe" class="embed-responsive-item" :src="link" allowfullscreen></iframe>
            </div>  
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadc from '@/Components/ProductsPage/Breadc.vue'
import getPayment from '../services/getPayment'
import auth from '../services/Authentication'
export default {
  data(){
    return {
    link:'',
    currency:process.env.VUE_APP_currency,
    htmlData:'',
  }
  },
  components: {
    Breadc,
  },
  computed:{
    tp()   
    {return this.$store.getters.totalPrice}
  },
  methods: {
    redirect(){
      window.location.href=this.link
    },
    async handleHtml(){
      await getPayment.getHTML().then(res=>this.htmlData=res.data)
      document.getElementById('global').innerHTML=this.htmlData
  },

  },
  created() {
  auth.sendOrder(this.tp).then(console.log('tp   ',this.tp))
  getPayment.getLink().then(res =>this.link=res.data)
  console.log(this.tp)
  }
}

</script>