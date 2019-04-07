<template>
    <div class="business">   
        <div class="business-template">
            <h2>Select a Business Template.</h2>
            <div class="template">
                <div class="flip-inner">
                    <div class="front-temp temp1">
                        <div class="temp1-bg"></div>
                        <div class="temp1-name">
                            <Strong>Shashi Ranjan Kumar</Strong>
                            <br><small>S.D.E.T.</small>
                        </div>
                        <div class="temp1-content">
                            <div class="temp1-h"><div style="background-color: red;">E :</div>&nbsp; shashi@cyware.com</div>
                            <div class="temp1-h"><div style="background-color:#b60b0b">P :</div>&nbsp; +91-9852041771</div>
                            <div class="temp1-h"><div style="background-color: red;">W:</div>&nbsp; www.cyware.com</div>
                        </div>
                        <div id="temp-qr">
                            <img src="../assets/QR_Code.png">
                        </div>
                        <div class="red-ts"></div>
                        <div class="red-tb"></div>
                    </div>
                    <div class="back-temp temp1">
                        <div class="temp1-bg"></div>
                        <div class="temp1-name">
                            <Strong>See you Soon bitch!!!</Strong>
                            <br><small>Company Name</small>
                        </div>
                        <div id="temp1-content">
                            <img src="../assets/google.png">
                        </div>
                        <div class="red-ts"></div>
                        <div class="red-tb"></div>
                    </div>
                </div>
            </div>
            <div class="template">
                <div class="flip-inner">
                    <div class="front-temp temp2">
                    </div>
                    <div class="back-temp temp2">
                    </div>
                </div>
            </div>
        </div>
        <div class="business-frm">
            <h2>Generate your business QR</h2>
            <div>
                <form class="m-0" @submit.prevent="generateQR">
                    <div>
                        <label class="label">First Name* :</label>
                        <input 
                            class="input-text" 
                            type="text" 
                            v-model="businessData.fname"
                            placeholder="Enter your first name here..."
                            maxlength="50"
                        >
                    </div>
                    <div>
                        <label class="label">Last Name :</label>
                        <input 
                            class="input-text" 
                            type="text"
                            v-model="businessData.lname"
                            placeholder="Enter your last name here..."
                            maxlength="50"
                        >
                    </div>
                    <div>
                        <label class="label">Email ID* :</label>
                        <input 
                            class="input-text" 
                            type="text"
                            v-model="businessData.email"
                            placeholder="Enter your email here..."
                            maxlength="50"
                        >
                    </div>
                    <div>
                        <label class="label">Website :</label>
                        <input 
                            class="input-text" 
                            type="text"
                            v-model="businessData.website"
                            placeholder="Enter your website here..."
                            maxlength="100"
                        >
                    </div>
                    <div>
                        <label class="label">Designation :</label>
                        <input 
                            class="input-text" 
                            type="text"
                            v-model="businessData.designation"
                            placeholder="Enter your Designation here..."
                            maxlength="150"
                        >
                    </div>
                    <div>
                        <label class="label">Company* :</label>
                        <input 
                            class="input-text" 
                            type="text"
                            v-model="businessData.company"
                            placeholder="Enter your Company here..."
                            maxlength="150"
                        >
                    </div>
                    <div>
                        <label class="label">Mobile Number* :</label>
                        <div class="phone-code">
                            <input 
                                class="input-text country-code" 
                                type="text" 
                                v-model="businessData.countryCode"
                                placeholder="91"
                                maxlength="6"
                            >
                            <input 
                                class="input-text phone" 
                                type="text" 
                                v-model="businessData.phoneNumber"
                                placeholder="Enter phone number here..."
                                maxlength="15"
                            >
                            <span id="plus">+</span>
                        </div>
                    </div> 
                    <button class="btn w-100" type="submit">Generate your business QR Code</button>
                </form>
                <div class="danger" v-for="(error, index) in businessFrmError" :key="index">
                    <p>{{ error }}</p>
                </div>
            </div>
        </div>


        <div class="adds">
            <h2>Business Works!!</h2>
            <!-- <div class="show-qr">
                <div v-if="!isQrDisplayed">
                    <h3>Your QR Will appear here!</h3>
                </div>
                <div>
                    <div class="inline-display">
                        <div id="qrcode"></div> 
                    </div>
                    <div class="inline-display download-btn" v-if="isQrDisplayed">
                        <a 
                            class="btn" 
                            id="dnbtn"
                            @click="downloadImage"
                            download='QR_Code.png'
                        >Download</a>
                    </div>
                </div>
            </div> -->
            <div class="real-temp temp-front"> <!--v-if="picked === 'temp1'" -->
                <div class="temp1-bg"></div>
                <div class="temp1-name">
                    <Strong>{{businessData.fname +" " + businessData.lname}}</Strong>
                    <br><small>{{businessData.designation}}</small>
                </div>
                <div class="temp1-content" v-if="isQrDisplayed">
                    <div class="temp1-h"><div style="background-color: red;">E :</div>&nbsp; {{businessData.email}}</div>
                    <div class="temp1-h"><div style="background-color:#b60b0b">P :</div>&nbsp; {{"+"+businessData.countryCode + "-" + businessData.phoneNumber}}</div>
                    <div class="temp1-h"><div style="background-color: red;">W:</div>&nbsp; {{businessData.website}}</div>
                </div>
                <div id="temp-qr">
                    <div id="qrcode"></div>
                </div>
                <div class="red-ts"></div>
                <div class="red-tb"></div>
            </div>
            <div class="real-temp temp-back"> <!--v-if="picked === 'temp1'" -->
                <div class="back-temp temp1">
                    <div class="temp1-bg"></div>
                    <div class="temp1-name">
                        <Strong>See you Soon bitch!!!</Strong>
                        <br><small>{{businessData.company}}</small>
                    </div>
                    <div id="temp1-content">
                        <img src="../assets/google.png">
                    </div>
                    <div class="red-ts"></div>
                    <div class="red-tb"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            businessData: {
                fname: "",
                lname: "",
                email: "",
                designation: "",
                company: "",
                website: "",
                countryCode: "",
                phoneNumber: ""
            },
            businessFrmError: [],
            bString: '',
            isQrDisplayed: false,
            picked:''
        }
    },
    methods:{
        
        checkBusinssFrm(){
            this.businessFrmError= [];
            if(!this.businessData.fname.trim()){
                this.businessFrmError.push("First Name is required.");
                return true;
            };
            if(this.businessData.fname.trim().search(/^[A-Za-z ]+$/) === -1){
                this.businessFrmError.push("First Name should not contain special character or numbers.")
                return true;
            }
            if(this.businessData.lname && this.businessData.lname.trim().search(/^[A-Za-z ]+$/) === -1){
                this.businessFrmError.push("Last Name should not contain special character or numbers.")
                return true;
            }
            if(!this.businessData.email.trim()){
                this.businessFrmError.push("Email ID is required.");
                return true;
            };
            if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,15})+$/.test(this.businessData.email.trim()))){
                this.businessFrmError.push("Your email id is not valid.")
                return true;
            };
            // if(!(/?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g.test(this.businessData.website.trim()))){
            //     this.businessFrmError.push("Entered website has not a valid domain name.");
            //     return true;
            // };
            if(!this.businessData.company.trim()){
                this.businessFrmError.push("Company name is required.");
                return true;
            };
            if(!this.businessData.countryCode){
                this.businessFrmError.push("Country code is required.");
                return true;
            };
            if(this.businessData.countryCode.search(/^[0-9]+$/) === -1){
                this.businessFrmError.push("Country code must be a numbers.")
                return true;
            }
            if(!this.businessData.phoneNumber){
                this.businessFrmError.push("Phone number is required.");
                return true;
            };
            if(this.businessData.phoneNumber.search(/^[0-9]+$/) === -1){
                this.businessFrmError.push("Phone number must be a numbers.")
                return true;
            };
        },

        createBusinessdata(){
            if(this.checkBusinssFrm()){
                return;
            }
            console.log(this.businessData);

            this.bString = "BEGIN:VCARD\r\nVERSION:2.1\r\n"
            this.bString += "N:" + this.businessData.fname + " " + this.businessData.lname + "\r\n";
            this.bString += "EMAIL:" + this.businessData.email + "\r\n";
            this.bString += "ORG:" + this.businessData.company + "\r\n";
            this.bString += "TITLE:" + this.businessData.designation + "\r\n";
            this.bString += "TEL: +" + this.businessData.countryCode + "-" + this.businessData.phoneNumber + "\r\n";
            this.bString += "END:VCARD"; 
            console.log(this.bString);
            return this.bString;
        },

        generateCode () {   
            var qrcode = new QRCode("qrcode");  
            const elText = this.createBusinessdata();
            if (!elText) {
                alert("Input a text to generate QR Code");
                return;
            }
            qrcode.makeCode(elText);
        },

        generateQR(){ 
            document.getElementById('qrcode').innerHTML = '';
            this.generateCode();
            this.bString = '';
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
.country-code{
    width: 23%;
    display: inline;
    padding-left: 30px;
    }
.phone{
    width: 75%;
    display: inline;
    float: right;
}
.label{
    width: 100%;
    font-weight: bold;
}
.phone-code{
    position: relative;
}
#plus{
    position: absolute;
    top: 13px;
    left: 10px;
    font-size: 20px;
}
.business-frm{
    margin: 10px 0;
    padding: 0 50px 30px 50px;
    flex-grow: 6;
    -webkit-box-shadow: 5px 5px 33px 5px rgba(0,0,0,0.6);
    -moz-box-shadow: 5px 5px 33px 5px rgba(0,0,0,0.6);
    box-shadow: 5px 5px 33px 5px rgba(0,0,0,0.6);
}
.business{
    display: flex;
}
.business-template, .adds{
    flex-grow: 5;
    padding: 0 20px;
    display: flex;
    flex-flow: column;
    margin: 0 20px;
    align-items: center;
}
.show-qr{
    /* margin:20px;*/
    padding: 20px; 
    text-align: center;
    height: 350px;
    border: 1px solid black;
    border-radius: 5px;
}
.download-btn{
    margin-top: 50px;
}
.check-box{
    position: absolute;
    z-index: 10;
}
.real-temp{
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    height: 220px;
    width: 370px;
    -webkit-box-shadow: 3px 3px 33px 3px rgba(0,0,0,0.6);
    -moz-box-shadow: 3px 3px 33px 3px rgba(0,0,0,0.6);
    box-shadow: 3px 3px 33px 3px rgba(0,0,0,0.6);
    position: relative;
}
.temp-back{
    transform: rotateY(180deg);
}
.template{
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    height: 220px;
    width: 370px;
    -webkit-box-shadow: 3px 3px 33px 3px rgba(0,0,0,0.6);
    -moz-box-shadow: 3px 3px 33px 3px rgba(0,0,0,0.6);
    box-shadow: 3px 3px 33px 3px rgba(0,0,0,0.6);
}
#temp-qr{
    width: 80px;
    height: 80px;
    padding: 5px;
    position: absolute;
    top: 90px;
    right: 20px;
    background-color: #fff;
    border-radius: 5px;
}
#temp-qr img{
    width: 80px;
    height: auto;
}
/* Template-2 CSS starts here */
.template:hover .flip-inner {
  transform: rotateY(180deg);
  background-color: #ffffff;
}

.flip-inner{
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1.5s;
    transform-style: preserve-3d;
}
.back-temp, .front-temp{
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    background-size: 371px 220px;
    background-repeat: no-repeat;
}
.front-temp{
    z-index: 3;
    display: flex;
    position: relative;
}
.back-temp{
    transform: rotateY(180deg);
    z-index: 1;
}
.temp1-bg{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background-color: #000;
    -webkit-clip-path: polygon(55% 0, 100% 0, 100% 100%, 70% 100%);
    clip-path: polygon(55% 0, 100% 0, 100% 100%, 70% 100%);
}
.temp1-name{
    position: absolute;
    top: 25px;
    left: 0;
    width: 220px;
    height: 30px;
    display: inline-block;
    color: #fff;
    padding: 5px 20px;
    text-transform: uppercase;
    line-height: 1;
    background-color: red;
    -webkit-clip-path: polygon(0 1%, 95% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 1%, 95% 0, 100% 100%, 0% 100%);
}
.temp1-content{
    position: absolute;
    top: 140px;
    left: 20px;
    width: 200px;
    height: 90px;
    display: inline-block;
}
#temp1-content img{
    margin-top: 70px;
    width: 200px;
    height: auto;
}
.temp1-h{
    color: gray;
    font-size: 12px;
    line-height: 1.5;
}
.temp1-h div{
    background-color: red; 
    width: 14px;
    padding: 0 5px;
    color: #fff;
    font-weight: bold;
    display: inline-block;
}
.red-ts{
    position:absolute;
    width: 85px;
    height: 30px;
    background-color: #be1e1e;
    top: 64px;
    left: 207px;
    -webkit-clip-path: polygon(63% 0, 15% 0, 24% 100%);
    clip-path: polygon(63% 0, 15% 0, 24% 100%);
}
.red-tb{
    top: 70px;
    left: 93px;
    position: absolute;
    background-color: #be1e1e;
    width: 200px;
    height: 150px;
    -webkit-clip-path: polygon(84% 100%, 71% 35%, 55% 100%);
    clip-path: polygon(84% 100%, 71% 35%, 55% 100%);
}

.temp2{
    background-image: url('../assets/1657e775446eefc.png');
    overflow:hidden;
}
.temp2-content{
    width:50%;
    height: 100%;
    padding: 10px;
    color: #000;
    text-align: right;
}


/* Media Querry starts here */
@media only screen and (max-width: 1000px){
    .business-frm{
        padding: 0;
    }
    .country-code{
        width: 30%
    }
    .phone{
        width: 65%;
    }
    .business-template, .adds{
        flex-grow: 6;
    /* border: 1px solid black; */
    }
    .business{
        flex-flow: column;
        padding: 20px;
    }
    .business-frm{
        padding: 10px;
    }
}
</style>
