<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        
    </div>
    <Contador />
<br>
{{ $store.state.id = $route.params.id }}
<br>
    <div>
        <button @click="$store.dispatch('bajarContador')">- </button>
        <button @click="$store.dispatch('subirContador')">+ </button>
    </div>
    {{ ($store.state.contador >=0) ? 'es numero positivo' : 'es numero negativo'}}
</template> 

<script>
// @ is an alias to /src
import Contador from '@/components/Contador.vue'


export default {
  name: 'HomeView',
  components: {
     Contador
  }
  
}
</script>
