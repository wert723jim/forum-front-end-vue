(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be2cb5d8"],{be6c:function(t,e,a){"use strict";var r=a("2fa3");const s=()=>localStorage.getItem("token");e["a"]={categories:{get(){return r["b"].get("/admin/categories",{headers:{Authorization:"Bearer "+s()}})},create({name:t}){return r["b"].post("/admin/categories",{name:t},{headers:{Authorization:"Bearer "+s()}})},delete(t){return r["b"].delete("/admin/categories/"+t,{headers:{Authorization:"Bearer "+s()}})},update({categoryId:t,name:e}){return r["b"].put("/admin/categories/"+t,{name:e},{headers:{Authorization:"Bearer "+s()}})}},restaurants:{get(){return r["b"].get("/admin/restaurants",{headers:{Authorization:"Bearer "+s()}})},getDetail(t){return r["b"].get("/admin/restaurants/"+t,{headers:{Authorization:"Bearer "+s()}})},create({formData:t}){return r["b"].post("/admin/restaurants",t,{headers:{Authorization:"Bearer "+s()}})},update({restaurantId:t,formData:e}){return r["b"].put("/admin/restaurants/"+t,e,{headers:{Authorization:"Bearer "+s()}})},delete(t){return r["b"].delete("/admin/restaurants/"+t,{headers:{Authorization:"Bearer "+s()}})}}}},f91c:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("h1",[t._v(t._s(t.restaurant.name))]),e("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),e("div",{staticClass:"col-md-4"},[e("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t._f("emptyImage")(t.restaurant.image)}}),e("div",{staticClass:"well"},[e("ul",{staticClass:"list-unstyled"},[e("li",[e("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),e("li",[e("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),e("li",[e("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),e("div",{staticClass:"col-md-8"},[e("p",[t._v(t._s(t.restaurant.description))])])]),e("hr"),e("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v("回上一頁")])])},s=[],n=a("2708"),i=a("be6c"),o=a("2fa3"),u={name:"AdminRestaurant",mixins:[n["a"]],data(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:""}}},beforeRouteUpdate(t,e,a){const{id:r}=t.params;this.fetchRestaurant(r),a()},mounted(){const{id:t}=this.$route.params;this.fetchRestaurant(t)},methods:{async fetchRestaurant(t){try{const{data:e}=await i["a"].restaurants.getDetail(t),{restaurant:a}=e;this.restaurant={...this.restaurant,id:a.id,name:a.name,categoryName:a.Category.name,image:a.image,openingHours:a.opening_hours,tel:a.tel,address:a.address,description:a.description}}catch(e){Object(o["a"])({icon:"warning",title:"無法取得餐廳資料，請稍後再試"})}}}},d=u,c=a("2877"),l=Object(c["a"])(d,r,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-be2cb5d8.a76ba748.js.map