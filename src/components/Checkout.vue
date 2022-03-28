<template>
  <div class="formulario"> 
    <h4>Llena el formulario</h4>
    <div class="form">
        <div class="formGroup"><label for="fname">Name:</label><input class="textInput" type="text" name="fullName" v-model="$store.state.customer.name"></div>
        <div class="formGroup"><label for="fname">Email:</label><input class="textInput" type="email" name="eMail" v-model="$store.state.customer.email"></div>
        <div class="formGroup"><label for="fname">Tel:</label><input class="textInput" type="text" name="phone" v-model="$store.state.customer.phone"></div>
        <div id="errorMsg" class="errorMsg"></div>
    </div>


  </div>
</template>
<style scoped>
  .errorMsg{
    color: red;
    padding-left: 80px;
    font-size: 12px;
  }
 .formulario{
   width: 100%;
   text-align: left;
   padding: 60px;
 }
 .form{
   width: 100%;
   margin-bottom: 40px;
 }
 .formGroup{
   display: block;
   /* border:1px solid black; */
   padding: 4px;
 }
  label{
  width: 70px;
  display: inline-block;
  padding:4px;
  }
  input{
    font-size: 16px;
    height: 28px;
  }
  .textInput{
    min-width: 400px;
  }
</style>
<script>
export default {
  name: "Checkout",
  props: {
    // contador: String,
  },
};
</script>