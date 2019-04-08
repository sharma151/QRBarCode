<template>
    <div class="template">
        <div class="flip-inner">
            <div class="front-temp temp3">
                <div class="temp3-bg"></div>
                <div class="temp3-web">
                    <small>{{temp3Data.website || 'www.yourwebsite.com'}}</small>
                </div>
                <div class="company-logo">
                    <i class="fab fa-joomla"></i>
                </div>
                <div class="temp3-content">
                    <p>{{temp3Data.fname && temp3Data.lname ? (temp3Data.fname +" " + temp3Data.lname) : 'Shashi Ranjan Kumar'}}</p>
                    <small>{{temp3Data.designation|| 'Designation'}}</small>
                </div>
                <div class="phone-h">
                    <i class="fas fa-phone"></i>
                </div>
                <div class="phone-v">
                    <small>{{temp3Data.countryCode && temp3Data.phoneNumber? "+"+temp3Data.countryCode + "-" + temp3Data.phoneNumber : '+91-98xxxxxx98'}}</small>
                </div>
                <div class="email-h">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="email-v">
                    <small>{{temp3Data.website || 'www.example.com'}}</small>
                </div>
            </div>
            <div class="back-temp">
                <div class="temp3-bg-back"></div>
                <div id="temp3-qr">
                    <div id="qrcode"></div>
                    <img src="../../assets/QR_Code.png" v-if="!temp3Data.fname">
                </div> 
                <div class="temp3-company">
                    <p>{{temp3Data.company||'Company Name'}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['temp3Data']
}
</script>
<style scoped>
.temp3-bg, .temp3-bg-back{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background-image: url("../../assets/template3bg.png");
}
.temp3-bg{
    -webkit-clip-path: polygon(60% 0, 100% 0, 100% 100%, 60% 100%, 50% 65%);
    clip-path: polygon(60% 0, 100% 0, 100% 100%, 60% 100%, 50% 65%);
}
.company-logo{
    position: absolute;
    font-size: 50px;
    transform: rotate(45deg);
    left: 75px;
    top: 15px;
    color: #be0045;
}
.temp3-web{
    position: absolute;
    bottom: 15px;
    left: 0;
    width: 176px;
    height: 15px;
    display: inline-block;
    color: #fff;
    font-size: 12px;
    text-align: center;
    padding: 5px 20px;
    text-transform: uppercase;
    line-height: 0.8;
    background-image:radial-gradient( #d38598 , #ec0036);
    /* background-color: #d7224e; */
    -webkit-clip-path: polygon(0 0%, 94% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 0%, 94% 0, 100% 100%, 0% 100%);
}
.temp3-content{
    position: absolute;
    top: 95px;
    left: 10px;
    width: 250px;
    height: 90px;
    display: inline-block;
}
.temp3-content p{
    margin: 0;
    text-decoration: underline gray;
    text-transform: uppercase;
    font-size: 15px;
    line-height: .4;
    font-weight: 700;
}
.temp3-content small{
    color: gray;
    text-transform: uppercase;
    font-size: 12px; 
}

#temp3-qr{
    width: 80px;
    height: 80px;
    padding: 5px;
    position: absolute;
    top: 50px;
    left: 140px;
    background-color: #fff;
    border-radius: 5px;
}
#temp3-qr img{
    width: 80px;
}
.temp3-company{
    position: absolute;
    top: 145px;
    color: #fff;
    font-size: 23px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    font-family: 'Great Vibes', cursive;
    width: 100%;
    height: 100%;
}
.phone-h{
    position: absolute;
    top: 117px;
    right: 151px;
    background-color: black;
    color: #fff;
    font-size: 12px;
    padding: 0 10px;
    width: 12px;
    line-height: 1.6;
    height: 20px;
    -webkit-clip-path: polygon(16% 0, 100% 0%, 83% 100%, 0% 100%);
    clip-path: polygon(16% 0, 100% 0%, 83% 100%, 0% 100%);
}
.phone-v{
    position: absolute;
    top: 117px;
    left: 220px;
    color: #fff;
    font-size: 12px;
}
.email-h{
    position: absolute;
    top: 146px;
    right: 151px;
    background-color: black;
    color: #fff;
    font-size: 12px;
    padding: 0 10px;
    width: 12px;
    line-height: 1.6;
    height: 20px;
    -webkit-clip-path: polygon(0% 0, 70% 0%, 100% 100%, 30% 100%);
    clip-path: polygon(0% 0, 70% 0%, 100% 100%, 30% 100%);
}
.email-v{
    position: absolute;
    top: 145px;
    left: 219px;
    color: #fff;
    font-size: 12px;
}
</style>


