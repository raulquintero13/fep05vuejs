<template>
 
      <header >
        <div class="flex-container">
          <div class="flex-item" id="flex"><img class="logo" src="./assets/img/logo.png" width="125"/></div>
          <div class="raw-item" id="raw"><button>Admin</button></div>
        </div>
    </header>
    <nav id="navigation" class="">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/buy">Comprar</router-link></li>
            <li><a href="#contact">Contactanos</a></li>
            <li style="float:right; color:white"><router-link to="/orders" class="active">Admin ({{$store.state.orders.length}})</router-link></li>
          </ul>
    </nav>
  <router-view />
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 :root{
        --green: #358f80;
        --yellow: #f1e5c2 ;
    }
body{
    margin: 0px;
    padding: 0px;
    /* height: 100vh; */
    font-family: Verdana, Geneva, Tahoma, sans-serif;

}
header{
    background: var(--green);
    color: white;
    /* justify-content: */
}
nav{
    background: var(--yellow);
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: var(--yellow);
}

nav li {
  float: left;
}

nav li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

nav li a:hover {
  background-color: #1a8b62;
  color: white;
}
nav .active {
  background-color: #04AA6D;
  color: white
}

.flex-container {
	display: flex;
	flex-direction: row;
    height: 50px;
    padding: 10px 20px 10px 20px;
} 

.flex-container > .flex-item {
	flex: auto;
    display: flex;
    align-items: center;

}

.flex-container > .raw-item {
    display: flex;
    justify-content: flex-end;
    align-items: center;
	width: 500px;
}
.button {
    font-size: 22px;
    padding: 4px;
  }
  .submitBtn {
    background-color: #0e78e2;
    color: white;
  }
</style>
