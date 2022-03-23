<template>
  
  <div class="topping-flavors">
    <h4>Sabores</h4>
    <div class="cards">
      <div v-for="flavor in $store.state.flavors" :key="flavor.name">
        <div  :class="flavor.class" @click="$store.dispatch('addFlavor',{flavor})">
          <h4 class="title">{{ flavor.name }}</h4>
          <p class="control"><button  >+  {{ flavor.price }}<br> Agregar</button></p>
        </div>
      </div>
    </div>
    
  </div>
</template>
<style scoped>
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
  height: 65px;
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

.card:hover {
  /* opacity: 0.7; */
  cursor: pointer;
}
.control{
      margin-bottom: 0px;
      margin-top: 0px;
}
.strawberry{
	background: pink;
	/* border-color: pink; */
  color: black
}
.chocolate{
	background: brown;
	/* border-color: brown; */
  color:white;

}
.vanilla{
	background: beige;
	/* border-color: beige; */
	color: black;
}
.nuez{
	background: rgb(194, 182, 156);
	/* border-color: beige; */
	color: black;
}
</style>
<script>
export default {
  name: "Flavors",
  props: {
    // contador: String,
  },
};
</script>