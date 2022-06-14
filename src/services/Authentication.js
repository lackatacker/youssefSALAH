import axios from 'axios'

let totalPrice=0
export default {
    async getTotalPrice(){
        totalPrice= this.$store.getters.totalPrice
    },
async sendOrder(){
    let authBody= {
        'transactionReference':'1234564589',
        'clientIp':'test',
        'currency':'MAD',
        'transactionAmount':totalPrice,
          }
    await axios({
        method:'post',
        url:process.env.VUE_APP_auth,
        data:authBody
        });
}

}