<template>
  <div class="about">
    <h2>Personaliza tu pastel</h2>
  </div>
  <div class="container">
    <aside>
      <Preview />
    </aside>
    <main id="section">
      <TopppingsFlavors />
      <TopppingsDecorations />
    </main>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex: 1;
  flex-flow: row-reverse wrap;
  max-width: 100%;
  height: 100%;
  padding: 20px 20px 0 20px;
  /* margin: auto; */
}
.container main,
.container aside {
  flex: 0 100%;
  /* height: 100px; */
}
.container aside {
  /* background: rgba(202, 38, 38, 0.667); */
  justify-content: flex-start;
}
.container main {
  background: #fff;
}
@media (min-width: 600px) {
  .container main {
    flex: 1 0 0px;
  }
  .container aside {
    flex: 0 0 33%;
  }
}
</style>
<script>
// @ is an alias to /src
import TopppingsFlavors from "@/components/Toppings/Flavors.vue";
import TopppingsDecorations from "@/components/Toppings/Decorations.vue";
import Preview from "@/components/Preview.vue";

export default {
  name: "BuyView",
  components: {
    TopppingsFlavors,
    TopppingsDecorations,
    Preview,
  },
};
</script>
