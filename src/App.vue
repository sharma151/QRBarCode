<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
body{
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
h2{
  color: indianred;
}
.input-text{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.btn{
  /* width: 100%; */
  background-color:indianred; 
  color: white;
  padding: 14px 20px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;
}
.ph-50{
  padding: 10px 50px;
}
.w-100{
  width: 100%;
}
.m-0{
  margin: 0;
}
.danger{
  width: 100%;
  padding: 0 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid red;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: red;
  color: azure;
}
#qrcode img{
    width: 100%;
    height: auto;
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

/* Template CSS starts here */
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

</style>