<template>
    <div class="business">   
        <div class="business-template">
            <h2>Select a Business Template.</h2>
            <template2 :temp2Data="exportResult"></template2>
            <template3 :temp3Data="exportResult"></template3>
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
                                placeholder="Country code"
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
            <!-- <template2 :temp2Data="exportResult"></template2> -->
        </div>
    </div>
</template>
<script>
import template2 from './templates/Template2.vue';
import template3 from './templates/Template3.vue';
export default {
    components: {
        template2,
        template3
    },
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
            exportResult:{},
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
                //alert("Input a text to generate QR Code");
                return;
            }
            qrcode.makeCode(elText);
        },

        generateQR(){ 
            document.getElementById('qrcode').innerHTML = '';
            this.generateCode();
            this.bString = '';
            this.exportResult = this.businessData;
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
<style scoped>
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
