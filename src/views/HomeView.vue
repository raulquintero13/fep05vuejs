<template>
  <div class="bg">

    <div class="text">

    <h1>
      Ricos pasteles de 15cms. <br>
      Persoanliza tu diseño<br>
      <router-link to="/buy"><button class="button submitBtn">Continuar</button></router-link>
    </h1>
    </div>
  </div>
  <!-- <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        
    </div>
    <Contador /> -->
  <!-- <br> -->
  <!-- {{ ($store.state.id = $route.params.id) }} -->
  
</template> 
<style scoped>
body{
  background: #6999a3;
}
.text{
  padding-right: 40px;
  color: white;
  padding-top:100px;
  line-height: 6em;
}
.bg {
  background-image: url("./fep05vuejs/assets/img/pasteleria-fondo.jpg");
  width: 100%;
  text-align: right;
  /* Full height */
  height: 800px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<script>
// @ is an alias to /src
import Contador from "@/components/Contador.vue";

export default {
  name: "HomeView",
  components: {
    Contador,
  },
};
</script>
