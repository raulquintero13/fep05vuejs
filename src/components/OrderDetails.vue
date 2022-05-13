<template>
  <div>
    

    <img src="../assets/img/pastel.jpg" width="330" />
    <div class="title">
      Pastel de 15 cm <br />
      <span class="priceTag">MX$ 450.00</span>
      <br /><br />param: {{ $route.params.id}}
    </div>
    <div classe="cart-content">
        
      <table class="table" x="">
          <thead><tr><th>id</th><th>Toppings</th><th>Precio</th><th></th></tr></thead>
          <tbody>
              
            <tr v-for="(item) in $store.state.orders[$route.params.id - 1 ].order" :key="item.name">
            <td class="item">{{ item.id }}</td>
            <td class="item">{{ item.name }}</td>
            
            <td class="priceItem">{{ item.price }} </td>
           

            </tr >
            <tr><td></td><td class="totalTitle">Total</td><td class="total">{{ $store.state.totalOrder }}</td><td></td></tr>
        </tbody>
      </table>

      <br><br>
     <router-link to="/orders"><button class="button submitBtn">Ver Ordenes</button></router-link>&nbsp;
        
    </div>
  </div>
</template>
<style scoped>
  
  .formFooter {
    padding-top: 20px;
    text-align: center;
  }

  .details {
    width: 100%;
    text-align: center;
  }
  th {
    border: 1px solid gray;
    background: #dddddd;
  }
  td.total {
    text-align: right;
    font-size: 16px;
  }
  .table {
    width: 350px;
    margin-left: auto;
    margin-right: auto;
  }
  table.details {
    width: 300px;
  }
  td.item {
    text-align: left;
  }
  td.priceItem {
    text-align: right;
  }
  .total {
    text-align: left;
    font-weight: bold;
    border-top: 1px solid black;
  }
  .totalTitle{
    text-align: right;
    font-weight: bold;
  }
  .formGroup {
    padding: 4px;
  }
</style>
<script>
export default {
  name: "Preview",
  props: {
    // id: String,
  },
  miParametro: null,
    mounted(){
      // console.log(this.$route.params);
        // this.miParametro = this.$route.params.id;
        // console.log('id', this.$route.params.id);
        // console.log('order',this.$store.state.orders[0 ].order[0]);
    } ,
};
</script>
