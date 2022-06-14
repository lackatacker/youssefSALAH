import axios from 'axios'


export default {
async getLink(){
     return axios(process.env.VUE_APP_redirection)
},
redirect(a){
    window.location(a)
}
}