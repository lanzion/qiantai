import Vue from "vue";
export default {
    // 定义状态 相当于data值
    state: {
        cart:JSON.parse(localStorage.getItem('cart')) || {}
    },
    // 计量属性
    getters: {
        total(state){
            return Object.values(state.cart).reduce((sum, v) => sum += v, 0);
        }
    },
    mutations: {
        // 定义修改状态的方法 用到store.commit()方法
        modify(state,data){
            let {id,num} = data;
            // state.cart[id]=num;
            Vue.set(state.cart,id,num)
            localStorage.setItem('cart', JSON.stringify(state.cart))
            console.log(state.cart);
        },
        del(state,id){
            Vue.delete(state.cart,id);
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    }

}