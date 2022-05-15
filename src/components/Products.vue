<template>
<div class="toppings-decorations">


<h4>Decoraciones</h4>
<div class="cards">
  <div class="card">ONE</div>
  <div class="card">TWO</div>
  <div class="card">THREE</div>
</div>
  <table>
    <tbody>
      <tr>
        <td class="cuadro">
          <img class="adornos" src="./assets/img/adornos/felizCumple.webp" />
          <div class="price">
            <input type="checkbox" id="ad1" value="ad1" />
            <label for="ad1">ad001 <br />  + $ 30.00</label>
          </div>
        </td>
        <td class="cuadro">
          <img class="adornos" src="./assets/img/adornos/happyBirthday.webp" />
          <div class="price">
            <input type="checkbox" id="ad1" value="ad1" />
            <label for="ad1">ad001 <br />  + $ 30.00</label>
          </div>
        </td>
        <td class="cuadro">
          <img class="adornos" src="./assets/img/adornos/happyBirthday2.webp" />
          <div class="price">
            <input type="checkbox" id="ad1" value="ad1" />
            <label for="ad1"
              >ad001 <br />
              + $ 30.00</label
            >
          </div>
        </td>
      </tr>
      <tr>
        <td class="cuadro">
          <img class="adornos" src="./assets/img/adornos/happyBirthday3.webp" />
          <div class="price">
            <input type="checkbox" id="ad1" value="ad1" />
            <label for="ad1"
              >ad001 <br />
              + $ 30.00</label
            >
          </div>
        </td>
        <td class="cuadro">
          <img class="adornos" src="./assets/img/adornos/hapy50.webp" />
          <div class="price">
            <input type="checkbox" id="ad1" value="ad1" />
            <label for="ad1"
              >ad001 <br />
              + $ 30.00</label
            >
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>
<style scoped>
.toppings-decorations{
  text-align: left;
  padding: 10px;
}
.adornos{
    width:120px;
    
}
td.cuadro{
    padding:0;
    text-align: center;
    margin: 10px;
    border: 2px solid #358f80;
    vertical-align: bottom;
    color:white;
}
td.cuadro:hover{
    border: 2px solid orange;
}
.price{
    margin:0;
    padding:0;
    background-color: #358f80;
}
.cards {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
}
@media (min-width: 600px) {
  .cards { grid-template-columns: repeat(2, 1fr); }
}
.card {
  background-color: dodgerblue;
  color: white;
  padding: 1rem;
  height: 4rem;
}
</style>
<script>
export default {
  name: "Products",
  props: {
    // contador: String,
  },
};
</script>
