import { createStore } from 'vuex'
import router from '@/router'

export default createStore({
  state: {
    contador: 0, 
    totalOrder: 450,
    cart: [
        {
            id:1,
            name: 'Pastel 15cm',
            price: 450.00,
            notDelete: true,
        }
    ],
    products: [
        {
            id: 7,
            name: "Pastel 15 cm",
            price: 450.00,
            stock: 0,
            images:[
                {
                    image: "",
                    thumbnail: ""
                }
            ]
        },
        {
            id: 8,
            name: "Pastel 30 cm",
            price: 600.00,
            stock: 0,
            images:[
                {
                    image: "",
                    thumbnail: ""
                }
            ]
        },
        {
            id: 9,
            name: "Pastel 45 cm",
            price: 800.00,
            stock: 0,
            images:[
                {
                    image: "",
                    thumbnail: ""
                }
            ]
        }
    ],
    flavors: [
        {
            id: 10,
            name: "Fresa",
            price: 30.00,
            class: 'card strawberry',
        },
        {
            id: 11,
            name: "Vainilla",
            price: 40.00,
            class: 'card vanilla',
        },
        {
            id: 12,
            name: "Chocolate",
            price: 50.00,
            class: 'card chocolate',
        },
        
        {
            id: 13,
            name: "Nuez",
            price: 50.00,
            class: 'card nuez',
        }
    ],
    decorations: [
        {
            id: 1,
            name: 'feliz001',
            img: '../../assets/img/adornos/feliz10.png',
            price: 200.00
        },
        {
            id: 2,
            name: 'happy001',
            img: '../../assets/img/adornos/happy20.png',
            price: 200.00
        },
        {
            id: 3,
            name: 'happy002',
            img: '../../assets/img/adornos/happy30.png',
            price: 200.00
        },
        {
            id: 4,
            name: 'happy003',
            img: '../../assets/img/adornos/happy40.png',
            price: 200.00
        },
        {
            id: 5,
            name: 'happy004',
            img: '../../assets/img/adornos/happy60.png',
            price: 200.00
        },
        {
            id: 6,
            name: 'happy005',
            img: '../../assets/img/adornos/happy50.png',
            price: 200.00
        }

    ]
},
  getters: {
  },
  mutations: {
      subirContador(state){
          state.contador++;
      },
      bajarContador(state){
          state.contador--;
      },
      addItem(state, payload){
          state.cart.push(payload.item);
          state.totalOrder += payload.item.price;
          console.log('show item', payload);
          console.log('show cart', state.cart);
      },
      delItem(state, payload){
          state.cart.splice(payload.index,1);
          console.log('cartDeleted', state.cart);
          state.totalOrder -= payload.item.price;

      }
  },
  actions: {
      subirContador(){
          console.log('subir');
          this.commit("subirContador");
      },
      bajarContador(){
          this.commit("bajarContador")
      },
      addFlavor(state,payload){
        // console.log(payload.flavor);
        const item = payload.flavor;
        // const prodId = this.state.cart.findIndex(prod => prod.id != item.id; console.log(prod.id, item.id)})
        // console.log('index', prodId, prodId);
        // if(prodId < 0)
        {
            console.log('added');
            this.commit('addItem', { item });
        }
      },
      delItem(state,payload,event){
				console.log('payload', payload);
        
					console.log('event' ,this);
					// $event.target.attributes[0].value
          const item = payload.item;
					const index = payload.index;
          const position = this.state.cart.findIndex(item => item.id == 10);
          console.log('position', position);
          this.commit('delItem', {item, index});
    	},
      addDecoration(state,payload){
        const item = payload.decoration;
        // const prodId = this.state.cart.findIndex((element => element.id == item.id);
        // console.log('show c', prodId, prodId);
        // if(prodId < 0)
        {
            console.log('added');
            this.commit('addItem', { item });
        }
      },
			checkoutBtn(){
				// router.push('/checkout');
			}
  },
  modules: {
  }
})
