<template>
<div>
<div v-if="this.$route.params.method=='iframe'" id="iframe">
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" :src="link" allowfullscreen></iframe>
</div>
</div>
<div v-if="this.$route.params.method=='html'" v-html="myHTML" id="html">
</div>
<div v-if="this.$route.params.method=='json'" id="json">
</div>
</div>
</template>

<script>
import auth from '../services/Authentication'
import getPayment from '../services/getPayment'
export default {
    data() {
    return {
      authBody: {
    'transactionReference':'1234564589',
    'clientIp':'test',
    'currency':'MAD',
    'transactionAmount':this.$store.getters.totalPrice,
      },
      link: '',
      myHTML:'',
    }
  },
  components: {
  },
  methods: {

},
created(){
  auth.sendOrder()
  if(this.$route.params.method=='iframe')
  getPayment.getLink().then(res =>this.link=res.data)
  if(this.$route.params.method=='redirection')
  getPayment.getLink().then(res => location.href=res.data)
  if(this.$route.params.method=='html')
  getPayment.getHTML().then(res => this.myHTML=res.data)
}
}
</script>