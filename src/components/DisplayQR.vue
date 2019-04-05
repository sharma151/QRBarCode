<template>
    <div class="show-qr">
        <div inline-display>
            <div id="qrcode"></div>
        </div>
        <br>
        <div class="inline-display" v-if="isQrDisplayed">
            <a 
                class="btn" 
                id="dnbtn"
                @click="downloadImage"
                download='QR_Code.png'
            >Download</a>
        </div>
    </div>
    
</template>
<script>
import { EventBus } from '../EventBus.js';
export default {
    props: ['QrText'],
    data(){
        return {
            isQrDisplayed: false
        }
    },
    methods:{
        generateCode (elText) {   
            console.log("I am trigged");
            var qrcode = new QRCode("qrcode"); 
            document.getElementById('qrcode').innerHTML = '';  
            if (!elText) {
                alert("Input a text to generate QR Code");
                return;
            }
            qrcode.makeCode(elText);
            this.myText = '';
            this.isQrDisplayed = true;
        },
        downloadImage(){
            var bs16Image = document.getElementById('qrcode').children[1].src;
            var dlnk = document.getElementById('dnbtn');
            console.log(bs16Image);
            dlnk.href = bs16Image;
        }
    }
    
}
</script>
<style>

</style>


