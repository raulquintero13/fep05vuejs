<template>
  <div class="about">
    <h2>Completa tus datos</h2>
  </div>
  <div class="container">
    <aside>
      <Preview />
      <div class="formFooter">
      <div >param: {{ this.miParametro }}
        <router-link :to="{name:'checkout',params:{id:'10'}}"><button class="button submitBtn">Terminar Orden</button></router-link>
      </div>
      </div>
    </aside>
    <main id="section">
      <Checkout />
    </main>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex: 1;
  flex-flow: row-reverse wrap;
  max-width: 1080px;
  height: 100%;
  padding: 20px 20px 0 20px;
  margin: auto;
}
.container main,
.container aside {
  flex: 0 100%;
  /* height: 100px; */
}
.container aside {
  /* background: rgba(202, 38, 38, 0.667); */
  justify-content: flex-start;
}
.container main {
  background: #fff;
}
@media (min-width: 600px) {
  .container main {
    flex: 1 0 0px;
  }
  .container aside {
    flex: 0 0 33%;
  }
}
</style>

<script>
// @ is an alias to /src
import Checkout from '@/components/Checkout.vue'
import Preview from "@/components/Preview.vue";


export default {
  name: 'CheckOutView',
  components: {
     Checkout,
     Preview
  }
  
}
</script>
