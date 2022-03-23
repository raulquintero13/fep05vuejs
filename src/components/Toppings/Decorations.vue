<template>
<div class="toppings-decorations">


<h4>Decoraciones</h4>
  <div class="cards">
    
    <div class="card" v-for="decoration in $store.state.decorations" :key="decoration.id" @click="$store.dispatch('addDecoration',{decoration})">
      <img class="adornos" v-bind:src="decoration.img" style="width:140px"/>
      <p class="control"><button>+ $30.00<br> Agregar</button></p>
    </div>
  </div>
  
  </div>
</template>
<style scoped>
.toppings-decorations{
  text-align: left;
  padding: 10px;
}
	.topping-flavors{
		text-align: left;
		padding: 10px;
	}
	* {
  box-sizing: border-box;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  /* for horizontal aligning of child divs */
  justify-content: left;
  /* for vertical aligning */
  align-items: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 250px;
  margin: 0 2px 10px 10px;
  text-align: center;
  font-family: arial;
  border: 4px solid #358f80;

}
.card:hover{
  border: 4px solid orange;

}
.title{
  padding: 10px;
  /* height: 65px; */
  width:146px;
  /* border-bottom: 2px solid black; */
}
.price {
  color: grey;
  font-size: 22px;
}
.selected{
  border: 4px solid orange;

}
.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #358f80;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 14px;
}

.card button:hover {
  /* opacity: 0.7; */
}
.control{
      margin-bottom: 0px;
      margin-top: 0px;
}
.adornos{
    width:120px;
    
}
.badge {
  font-size: 14px;
  font-weight: normal;
  padding: 8px;
  border-radius: 8px;
  color: white;
  margin-right: 4px;
  vertical-align: text-top;
}
.badge.new {
  background-color: rgb(103, 172, 13);
}
.badge.offer {
  background-color: rgb(197, 107, 33);
}
/* td.cuadro{
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
} */
</style>
<script>
export default {
  name: "Decorations",
  props: {
    // contador: String,
  },
};
</script>