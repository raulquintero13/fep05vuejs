<template>
  <div>
    

    <img src="../assets/img/pastel.jpg" width="330" />
    <div class="title">
      Pastel de 15 cm <br />
      <span class="priceTag">MX$ 450.00</span>
      {{ $store.state.cart.length }}
      <br /><br />
    </div>
    <div classe="cart-content">
        
      <table class="table" x="">
          <thead><tr><th>id</th><th>Toppings</th><th>Precio</th><th></th></tr></thead>
          <tbody>
              
            <tr v-for="(item, index) in $store.state.cart" :key="item.name">
            <td class="item">{{ item.id }}</td>
            <td class="item">{{ item.name }}</td>
            
            <td class="priceItem">{{ item.price }} </td>
            <td  v-if="!item.notDelete"><button @click="$store.dispatch('delItem',{ item, index , $event }) "  itemId ="4" >X </button></td>

            </tr >
            <tr><td></td><td class="totalTitle">Total</td><td class="total">{{ $store.state.totalOrder }}</td><td></td></tr>
        </tbody>
      </table>

      
        <!-- <button class="button submitBtn" @click="$store.dispatch('checkoutBtn')">Ordenar</button> -->
        <!-- <input
          class="button submitBtn"
          type="submit"
          value="Comprar"
        /> -->
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
        this.miParametro = this.$route.params.id;
    } ,
};
</script>
