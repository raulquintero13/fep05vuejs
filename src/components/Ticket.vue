<template>
   <div class="ticket"><br>
     <h3>Ticket del pedido {{ $route.params.id }}</h3>
     <table id="ticket" class="tbl ticket-header">
       <tr><td>Nombre: </td><td>{{ $store.state.orders[$route.params.id -1 ].name }}</td></tr>
       <tr><td>Email: </td><td>{{ $store.state.orders[$route.params.id -1].email }}</td></tr>
       <tr><td>Telefon</td><td>{{ $store.state.orders[$route.params.id -1].phone }}</td></tr>
     </table><br>
     Detalles del pedido
     <table id="ticket-details" class="tbl tbl-details">
       <tr v-for="item in $store.state.cart" :key="item.name"><td>{{ item.name }}</td><td class="cell-price">{{item.price}}</td><td></td></tr>
       <tr><td class="cell-title-total">Total</td><td class="cell-total">$ {{ $store.state.totalOrder }}</td></tr>
     </table>
     <br><br>
     Gracias por su preferencia!
     <br><br><router-link to="/2"><button class="button submitBtn"> Ir al Inicio</button></router-link>
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
    width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
  .tbl{
    width: 320px;
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