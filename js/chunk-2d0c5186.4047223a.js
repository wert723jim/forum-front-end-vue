(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c5186"],{"3e42":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container py-5"},[a("div",[a("h1",[t._v(t._s(t.restaurant.name))]),a("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.Category.name)+" ")])]),a("hr"),a("ul",[a("li",[t._v("評論數： "+t._s(t.restaurant.Comments.length)+" ")]),a("li",[t._v("瀏覽次數： "+t._s(t.restaurant.viewCounts)+" ")])]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return t.$router.back()}}},[t._v(" 回上一頁 ")])])},s=[],r=n("c4c3"),c=n("2fa3"),u={data(){return{restaurant:{name:"",Category:{name:""},Comments:[],viewCounts:-1}}},beforeRouteUpdate(t,a,n){const{id:e}=t.params;this.fetchRestaurant(e),n()},created(){const{id:t}=this.$route.params;console.log(t),this.fetchRestaurant(t)},methods:{async fetchRestaurant(t){try{const{data:a}=await r["a"].getRestaurant(t);this.restaurant=a.restaurant}catch(a){c["a"].fire({icon:"warning",title:"無法取得餐廳資料，請稍後再試"})}}}},o=u,i=n("2877"),l=Object(i["a"])(o,e,s,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0c5186.4047223a.js.map