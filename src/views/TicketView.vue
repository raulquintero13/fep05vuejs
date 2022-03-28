<template>
  <div class="about">
    <h2>Gracias por tu pedido! pronto te avisaremos cuando este listo. </h2>
  </div>
  <div class="ticket-data">
  <Ticket/>
  </div>
</template>
<style scoped>
  .ticket-data{
    /* width:1080px; */
    text-align: center;
  }
</style>
<script>
// @ is an alias to /src
import Ticket from '@/components/Ticket.vue'


export default {
  name: 'TicketView',
  components: {
     Ticket,
  }
  
}
</script>
