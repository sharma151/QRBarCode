<template>
    <div class="qr">
        <h2>Generate your QR Code.</h2>
        <!-- <form> -->
            <input 
                type="text" 
                class="input-text" 
                placeholder="Enter Mobile number, URL, Names to generate QR Code here..."
                v-model="myText"
                required
                maxlength="1000"
            >
            <button 
                type="submit" 
                class="btn"
                @click="generateQR"
            >Generate</button>
        <!-- </form> -->
        <hr>
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
    </div>
</template>
<script>
export default {
    data(){
        return {
            myText: '',
            isQrDisplayed: false
        }
    },
    methods: {
        generateCode () {   
            var qrcode = new QRCode("qrcode");   
            const elText = this.myText;
            if (!elText) {
                //alert("Input a text");
                return;
            }
            qrcode.makeCode(elText);
        },

        generateQR(){ 
            document.getElementById('qrcode').innerHTML = '';
            this.generateCode();
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
.qr{
    margin: 10px 50px;
    text-align: center;
    align-content: center;
}
form{
    margin: 0 250px;
}
#qrcode{
    display: inline-block;
}
</style>