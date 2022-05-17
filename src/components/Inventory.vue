<template>
   <div class="ticket"><br>
     
     <table id="ticket-details" class="tbl tbl-details">
       <tr><td>Producto</td><td class="cell-price"> cantidad</td></tr>
       <tr v-for="product in $store.state.items" :key="product.id"  ><td v-if="product.productType > 1">{{ product.name }}</td><td class="cell-price" v-if="product.productType > 1">{{product.stock}}</td></tr>
     </table>
     <br><br>
     
     <br><br>
     <router-link to="/orders"><button class="button submitBtn">Ver Ordenes</button></router-link>&nbsp;
   </div>
</template>
<style scoped>
  .cell-title-total{
    text-align: right;
    font-weight: bold;
  }
  .cell-total{
    font-weight: bold;
    text-align: right;
  }
  .ticket{
    /* background: red; */
    width: 420px;
    margin-left: auto;
    margin-right: auto;
  }
  .tbl{
    width: 420px;
    /* border: 1px solid black; */
    font-family: 'monospace, Courier New', Courier, monospace;
  }
 
  .cell-price{
    text-align: right;
  }
  td{
    text-align: left;
  }
</style>

<script>
export default {
  name: 'Inventory',
  props: {
    id: String,
  }
}
</script>