<template>
    {{ $store.state.contador}}
    <!-- {{ id }} -->
</template>

<script>
export default {
  name: 'Contador',
  props: {
    // id: String,
  }
}
</script>