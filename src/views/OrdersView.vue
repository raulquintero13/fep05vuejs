<template>
  <div class="about">
    <h2>Lista de ordenes por atender. </h2>
  </div>
  <div class="ticket-data">
  <Orders/>
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
import Orders from '@/components/Orders.vue'


export default {
  name: 'OrdersView',
  components: {
     Orders,
  }
  
}
</script>
