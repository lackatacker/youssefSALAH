import axios from 'axios'

export default {
    // async getTotalPrice(){
async sendOrder(a){
    let authBody= {
        'transactionReference':'1234564589',
        'clientIp':'test',
        'currency':'MAD',
        'transactionAmount': a,
          };
    await axios({
        method:'post',
        url:process.env.VUE_APP_auth,
        data:authBody
        });
}
}