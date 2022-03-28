<template>
   <div class="ticket"><br>
     
     <table id="ticket-details" class="tbl tbl-details">
       <tr><td>Nombre</td><td>Telefono</td></tr>
       <tr v-for="(order,index) in $store.state.orders" :key="index"><td>{{ order.name }}</td><td class="cell-price">{{order.phone}}</td>
       <td><router-link :to="{name:'order', params: {id: index + 1}}"> <button>ver</button></router-link> </td></tr>
     </table>
     <br><br>
     
     <br><br>
     <router-link to="/inventory"><button class="button submitBtn">Inventario de Ingredientes</button></router-link>&nbsp;
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
  name: 'Contador',
  props: {
    id: String,
  }
}
</script>