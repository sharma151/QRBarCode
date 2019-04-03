<template>
  <div class="pagemargin">
    <div class="header">
      <div class="nav">
        <div class="logo">
          <router-link to="/">QB</router-link>
        </div>
        <div class="links" :class="{'medialink': toggled}">
          <ul>
            <router-link class="nav-link" tag="li" to="/qr-code" active-class="active"><a>QR Code</a></router-link>
            <router-link class="nav-link" tag="li" to="/bar-code" active-class="active"><a>Bar Code</a></router-link>
            <router-link class="nav-link" tag="li" to="/business" active-class="active"><a>Business</a></router-link>
            <router-link class="nav-link" tag="li" to="more" active-class="active"><a>More</a></router-link>
          </ul>
        </div>
        <div class="toggle">
          <div class="hamburger" @click="onToggle">
            |||
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      toggled: false
    }
  },
  methods:{
    onToggle(){
      //console.log("toggle clicked");
      this.toggled = !this.toggled;
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pagemargin{
  background-color: black;
  color:floralwhite;
  padding: 0 180px;
}
.header{
  margin: 0;
  padding: 10px;
  font-size: 35px;
  font-weight: 400;
  margin: 0;
  width: 100%;
}
.nav{
  display: flex;
  width: 100%;
  display: flex;
  align-items: baseline;
}
.logo{
  display: inline-block;
  flex-grow: 2;
}
.links{
  flex-grow: 8;
}
.links ul{
  margin: 0;
}
.links li{
  display: inline-block;
  margin: 0 30px;
  color: aliceblue;
}
.nav-link a{
  text-decoration: none;
  color: aliceblue;
  font-size: 25px;
  font-weight: 100;
}
.toggle{
  display: inline-block;
  display: none;
  flex-grow: 2;
}
.hamburger{
  -ms-transform: rotate(90deg); /* IE 9 */
  -webkit-transform: rotate(90deg); /* Safari */
  transform: rotate(90deg);
}
.active a{
  /* border-bottom: 2px bold indianred; */
  color:indianred;
}

/* Media Querry starts here */
@media only screen and (max-width: 1000px){
  .links{
    display: none;
  }
  .pagemargin{
    padding: 0 20px;
  }
  .logo{
    flex-grow: 2;
  }
  .toggle{
    display: flex;
    flex-grow: 10;
    justify-content: flex-end;
    padding: 0 20px 0 0;
  }
  .medialink{
    display: block;
    position: absolute;
    width: 190px;
    right: 0px;
    top: 50px;
    background-color: black;
    z-index: 99999;
  }
  .medialink ul{
    padding-left: 0px;
  }
}

</style>
