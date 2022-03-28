<template>
  <div class="about">
    <h2>Inventario de Productos </h2>
  </div>
  <div class="ticket-data">
  <Inventory/>
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
import Inventory from '@/components/Inventory.vue'


export default {
  name: 'InventoryView',
  components: {
     Inventory,
  }
  
}
</script>
