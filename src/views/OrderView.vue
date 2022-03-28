<template>
  <div class="about">
    <h2>Detalle de la orden </h2>
  </div>
  <div class="ticket-data">
  <OrderDetails/>
  </div>
</template>
<style scoped>
  .ticket-data{
    /* width:1080px; */
    text-align: center;
  }
</style>
<script>
// @ is an alias to /src
import OrderDetails from '@/components/OrderDetails.vue'


export default {
  name: 'OrderView',
  components: {
     OrderDetails,
  }
  
}
</script>
