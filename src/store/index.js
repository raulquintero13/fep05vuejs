import { createStore } from "vuex";
import router from "@/router";

export default createStore({
  state: {
    contador: 0,
    totalOrder: 450,
    cart: [
      {
        id: 1,
        name: "Pastel 15cm",
        price: 450.0,
        notDelete: true,
      },
    ],
    customer: {
        name: '',
        email: '',
        phone: '',
    },
    items: [
      {
        id: 7,
        name: "Pastel 15 cm",
        price: 450.0,
        stock: 0,
        productType: 1,
        class: "card strawberry",
        images: [
          {
            image: "",
            thumbnail: "",
          },
        ],
      },
      {
        id: 8,
        name: "Pastel 30 cm",
        price: 600.0,
        stock: 0,
        productType: 1,
        class: "card strawberry",
        images: [
          {
            image: "",
            thumbnail: "",
          },
        ],
      },
      {
        id: 9,
        name: "Pastel 45 cm",
        price: 800.0,
        stock: 0,
        productType: 1,
        class: "card strawberry",
        images: [
          {
            image: "",
            thumbnail: "",
          },
        ],
      },
    
      {
        id: 10,
        name: "Fresa",
        price: 30.0,
        stock: 0,
        productType: 2,
        class: "card strawberry",
      },
      {
        id: 11,
        name: "Vainilla",
        price: 40.0,
        stock: 0,
        productType: 2,
        class: "card vanilla",
      },
      {
        id: 12,
        name: "Chocolate",
        price: 50.0,
        stock: 0,
        productType: 2,
        class: "card chocolate",
      },
      {
        id: 13,
        name: "Nuez",
        price: 50.0,
        stock: 0,
        productType: 2,
        class: "card nuez",
      },
      {
        id: 1,
        name: "feliz001",
        img: "../../assets/img/adornos/feliz10.png",
        stock: 0,
        price: 200.0,
        productType: 3,
      },
      {
        id: 2,
        name: "happy001",
        img: "../../assets/img/adornos/happy20.png",
        stock: 0,
        productType: 3,
        price: 200.0,
      },
      {
        id: 3,
        name: "happy002",
        img: "../../assets/img/adornos/happy30.png",
        stock: 0,
        productType: 3,
        price: 200.0,
      },
      {
        id: 4,
        name: "happy003",
        img: "../../assets/img/adornos/happy40.png",
        stock: 0,
        productType: 3,
        price: 200.0,
      },
      {
        id: 5,
        name: "happy004",
        img: "../../assets/img/adornos/happy60.png",
        stock: 0,
        productType: 3,
        price: 200.0,
      },
      {
        id: 6,
        name: "happy005",
        img: "../../assets/img/adornos/happy50.png",
        stock: 0,
        productType: 3,
        price: 200.0,
      },
    ],
  },
  getters: {},
  mutations: {
    subirContador(state) {
      state.contador++;
    },
    bajarContador(state) {
      state.contador--;
    },
    addItem(state, payload) {
        console.log("show item", payload);
        console.log("show cart", state.cart);
      state.cart.push(payload.item);
      state.totalOrder += payload.item.price;
    },
    delItem(state, payload) {
      state.cart.splice(payload.index, 1);
      console.log("cartDeleted", state.cart);
      state.totalOrder -= payload.item.price;
    },
  },
  actions: {
    subirContador() {
      console.log("subir");
      this.commit("subirContador");
    },
    bajarContador() {
      this.commit("bajarContador");
    },
    addItem(state, payload){
        const item = payload.item;
        console.log('item added');
        const position = this.state.cart.findIndex((cart) => cart.id == item.id);
        console.log('position', position);
        if (position<0){
            this.commit("addItem", { item });
        }
    },
    delItem(state, payload, event) {
      console.log("payload", payload);

      console.log("event", this);
      // $event.target.attributes[0].value
      const item = payload.item;
      const index = payload.index;
      const position = this.state.cart.findIndex((item) => item.id == 10);
      console.log("position", position);
      this.commit("delItem", { item, index });
    },
    checkoutBtn() {
        router.push('/checkout');
    },
  },
  modules: {},
});
