<template>
    <div class="template">
        <div class="flip-inner">
            <div class="front-temp temp2">
                <div class="temp2-bg"></div>
                <div class="temp2-name">
                    <Strong>{{temp2Data.fname && temp2Data.lname ? (temp2Data.fname +" " + temp2Data.lname) : 'Your Name'}}</Strong>
                    <br><small>{{temp2Data.designation|| 'Designation'}}</small>
                </div>
                <div class="temp2-content">
                    <div class="temp2-h">
                        <div style="background-color: red;">E</div>
                        &nbsp; {{temp2Data.email || "username@example.com"}}
                        </div>
                    <div class="temp2-h">
                        <div style="background-color:#b60b0b">P</div>
                        &nbsp; {{temp2Data.countryCode && temp2Data.phoneNumber? "+"+temp2Data.countryCode + "-" + temp2Data.phoneNumber : '+91-98xxxxxx98'}}
                        </div>
                    <div class="temp2-h" v-if="temp2Data.website">
                        <div style="background-color: red;">W</div>
                        &nbsp; {{temp2Data.website || 'www.example.com'}}
                        </div>
                </div>
                <div id="temp2-qr">
                    <div id="qrcode"></div>
                    <img src="../../assets/QR_Code.png" v-if="!temp2Data.fname">
                </div>
                <div class="red-ts"></div>
                <div class="red-tb"></div>
            </div>
            <div class="back-temp temp2">
                <div class="temp2-bg"></div>
                <div class="temp2-name">
                    <Strong>See you Soon bitch!!!</Strong>
                    <br><small>{{temp2Data.company || 'Company'}}</small>
                </div>
                <div id="temp2-content">
                    <img src="../../assets/google.png">
                </div>
                <div class="red-ts"></div>
                <div class="red-tb"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['temp2Data']
}
</script>
<style scoped>
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
    z-index: 2;
    display: flex;
    position: relative;
}
.back-temp{
    transform: rotateY(180deg);
    z-index: 1;
}
.temp2-bg{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background-color: #000;
    -webkit-clip-path: polygon(55% 0, 100% 0, 100% 100%, 70% 100%);
    clip-path: polygon(55% 0, 100% 0, 100% 100%, 70% 100%);
}
.temp2-name{
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
.temp2-content{
    position: absolute;
    top: 120px;
    left: 20px;
    width: 250px;
    height: 90px;
    display: inline-block;
}
#temp2-content img{
    margin-top: 70px;
    width: 200px;
    height: auto;
}
.temp2-h{
    color: gray;
    font-size: 12px;
    line-height: 1.5;
    word-wrap: break-word;
}
.temp2-h div{
    background-color: red; 
    width: 16px;
    padding: 0 5px;
    color: #fff;
    font-weight: bold;
    display: inline-block;
}
#temp2-qr{
    width: 80px;
    height: 80px;
    padding: 5px;
    position: absolute;
    top: 90px;
    right: 20px;
    background-color: #fff;
    border-radius: 5px;
}
#temp2-qr img{
    width: 80px;
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
</style>


