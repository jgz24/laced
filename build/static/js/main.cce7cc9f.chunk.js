(this.webpackJsonplaced=this.webpackJsonplaced||[]).push([[0],{37:function(e,t,a){e.exports=a(67)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),o=a.n(r),l=a(10),i=a.n(l),s=a(13),u=(a(43),a(44),a(6)),m=(a(45),a(14)),f=a(4),h=function(e){return{type:"removeCartItem",payload:e}},d=function(e,t){return{type:"deleteActiveFilter",category:e,filterOption:t}},p=function(e,t,a){return{type:"modifyCheckedFilter",category:e,filterOption:t,isChecked:a}},E=function(e){var t=e.slice(28);return(function(){var a=Object(s.a)(i.a.mark((function a(n){var c,r;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return c=a.sent,a.next=6,c.json();case 6:r=a.sent,n({type:"setProducts",products:r}),t.length>0&&n({type:"resetAllFilters"}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}())};var v=Object(m.f)((function(e){var t,a=e.autocompleteArray,r=e.history,o=Object(f.b)(),l=Object(n.useState)([]),m=Object(u.a)(l,2),h=m[0],d=m[1],p=Object(n.useState)(!1),v=Object(u.a)(p,2),g=v[0],b=v[1],k=Object(n.useState)(""),y=Object(u.a)(k,2),O=y[0],C=y[1],j=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a="",a=0===t.length||"shoes"===t.toLowerCase()||"shoe"===t.toLowerCase()?"/search":"/search/".concat(t),o(E(a));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=e.currentTarget.innerText;d([]),b(!1),j(t),C(""),r.push("/?search=".concat(t))},S=function(e){e.preventDefault(),j(O),C(""),r.push("/?search=".concat(O))};if(g&&O){var B=h;h.length>5&&(B=h.slice(1,6)),B.length&&(t=c.a.createElement("ul",{className:"suggestions"},B.map((function(e){return c.a.createElement("li",{key:e,onClick:N},e)}))))}return c.a.createElement("div",null,c.a.createElement("form",{className:"search",method:"GET",onSubmit:S},c.a.createElement("input",{className:"searchBar",onChange:function(e){var t=e.target.value,n=a.filter((function(e){return e.toLowerCase().indexOf(t.toLowerCase())>-1}));d(n),b(!0),C(t)},value:O,type:"text",name:"search",autoComplete:"off"}),c.a.createElement("button",{onClick:S,className:"searchButton",type:"submit"}),t))})),g=(a(51),a(7));function b(){var e=Object(f.c)((function(e){return e.cartItems})),t=Object(n.useState)(0),a=Object(u.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){var t=Object.keys(e).length;o(t)}),[e]),c.a.createElement("div",{className:"cartFlex"},c.a.createElement(g.b,{to:"/checkout"},c.a.createElement("button",{className:"myCart"})),c.a.createElement("p",null,r))}function k(){var e=Object(f.b)();return c.a.createElement("div",null,c.a.createElement("nav",null,c.a.createElement(g.b,{to:"/"},c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return e(E("/search"))},className:"logo"}))),c.a.createElement(v,{autocompleteArray:["Shoes","Men Shoes","Women Shoes","Athletic Shoes","Casual Shoes","Nike","Nike Shoes","Adidas","Adidas Shoes","Vans","Vans Shoes","Converse","Converse Shoes","Basketball","Basketball Shoes","Baseball","Baseball Cleats","Golf","Golf Shoes","Football","Football Cleats","Soccer","Soccer Cleats"]}),c.a.createElement(b,null)))}a(52),a(53);function y(e){var t=e.filters,a=e.products,r=Object(n.useState)(""),o=Object(u.a)(r,2),l=o[0],i=o[1],s=Object(n.useState)(0),m=Object(u.a)(s,2),f=m[0],h=m[1];return Object(n.useEffect)((function(){h(void 0===a.length?0:a.length)}),[a.length]),Object(n.useEffect)((function(){var e=window.location.search.slice(8),a="All Products";if(""!==e){var n=e.split("%20");n.unshift('Searched for: "'),n.push('"'),a=n.join(" "),i(a)}else{var c=Object.keys(t),r=[];c.forEach((function(e){var a=Object.keys(t[e]);if("Gender"===e||"Activity"===e||"Brand"===e||"Sport"===e)a.map((function(a){return!0===t[e][a]?r.push("".concat(a,"\u2022")):""}));else if("Color"===e){var n=[];a.map((function(a){return!0===t[e][a]?n.push(a):""}));for(var c=1;c<=n.length;c++)n.length>0&&c===n.length?r.push("".concat(n[c-1],"\u2022")):r.push("".concat(n[c-1],"+"))}})),r.push("Shoes");var o=r.join("");i("Shoes"===o?a:o)}}),[t,a]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("p",{className:"productInfo"},l),c.a.createElement("div",null,c.a.createElement("p",{className:"productQuantity"},"(".concat(f," Products)"))))),c.a.createElement("div",{className:"container lineBreak-products"}))}a(54),a(55);function O(e){var t=e.category;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"filterCategory"},t),c.a.createElement("button",{className:"dropDownLogo"}))}a(56),a(57);function C(e){var t=e.option,a=e.category,n=e.checked,r=e.handleCheckedChange;return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{className:"categoryLabel"},c.a.createElement("input",{name:t,onChange:function(e){var t=e.target.name,n=e.target.checked;r(a,t,n)},type:"checkbox",checked:n}),t))}function j(e){var t=e.checkedFilter,a=e.category,n=e.handleCheckedChange,r=Object.entries(t);return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"filterFlexColumn"},r.map((function(e,t){return c.a.createElement(C,{key:t,category:a,option:e[0],handleCheckedChange:n,checked:e[1]})}))))}a(58);function N(e){var t=e.filterCategory,a=e.filterOption,n=e.handleActiveFilterClick,r=function(){n(t,a)};return c.a.createElement("div",{className:"activeFilters"},c.a.createElement("button",{className:"filterButton",onClick:r},a),c.a.createElement("button",{className:"filterCrossLogo",onClick:r}))}function S(e){var t=e.filters,a=e.handleCheckedChange,r=e.handleActiveFilterClick,o=Object(n.useState)([]),l=Object(u.a)(o,2),i=l[0],s=l[1];return Object(n.useEffect)((function(){var e=Object.keys(t),a=[];e.forEach((function(e){Object.keys(t[e]).map((function(n){return!0===t[e][n]?a.push({filterCategory:e,filterOption:n}):""}))})),s(a)}),[t]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"filterFlex"},Object.keys(t).map((function(e,n){return c.a.createElement("div",{key:n,className:"filter"},c.a.createElement(O,{category:e}),c.a.createElement(j,{category:e,checkedFilter:t[e],handleCheckedChange:a}))})))),c.a.createElement("div",{className:"container lineBreak-products"}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"filterFlexActiveFilters"},i.map((function(e,t){return c.a.createElement(N,{filterCategory:e.filterCategory,filterOption:e.filterOption,handleActiveFilterClick:r,key:t})})))))}a(59),a(60);var B=a(68);function w(e){var t=e.product,a=Object(n.useState)(!1),r=Object(u.a)(a,2),o=r[0],l=r[1];return Object(n.useEffect)((function(){l(!0)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(B.a,{in:o,timeout:300,classNames:"animation-products"},c.a.createElement("div",{className:"product"},c.a.createElement(g.b,{to:{pathname:"/product/".concat(t.Name),state:t}},c.a.createElement("button",{className:"imageButton"},c.a.createElement("img",{src:t.Img,alt:""}))),c.a.createElement("div",{className:"priceQuantityInfo"},c.a.createElement("p",null,t.Name),c.a.createElement("p",null,"".concat(t.Sport))),c.a.createElement("div",{className:"priceQuantityInfo"},c.a.createElement("p",null,"$".concat(t.Price)),c.a.createElement("p",null,t.Quantity<=4?"".concat(t.Quantity," left!"):"")))))}function F(e){var t=e.products;return 0===Object.keys(t).length?null:c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"filterFlexGrid"},t.map((function(e,t){return c.a.createElement(w,{key:t,product:e})}))))}function I(){var e=Object(f.c)((function(e){return e.activeFilters})),t=Object(f.c)((function(e){return e.checkedFilters})),a=Object(f.c)((function(e){return e.setProducts})),r=Object(f.b)(),o=Object(n.useState)([]),l=Object(u.a)(o,2),i=l[0],s=l[1];Object(n.useEffect)((function(){var t=function(t,a){for(var n=[],c=0;c<t.length;c++)for(var r=0;r<a.length&&("Sort By"===a[r]||"Price"===a[r]||e[a[r]]===t[c][[a[r]]]||t[c][[a[r]]].includes(e[a[r]]));r++)r===a.length-1&&n.push(t[c]);return n};s(function(){var n=Object.keys(e);if(0===n.length)return a;var c=[];return n.includes("Price")&&(c=function(){for(var t=e.Price,n=[],c=0;c<a.length;c++){var r=parseInt(a[c].Price);"$1-$50"===t&&r>50||("$50-$100"===t&&(r<50||r>100)||"$100-$150"===t&&(r<100||r>150)||"$150-$200"===t&&(r<150||r>200)||"$200+"===t&&r<200||n.push(a[c]))}return n}(),0===(n=n.filter((function(e){return"Price"!==e}))).length)?c:(c=c.length>0?t(c,n):t(a,n),n.includes("Sort By")&&(c=function(t){return"Low-High"===e["Sort By"]?t.sort((function(e,t){return e.Price-t.Price})):"High-Low"===e["Sort By"]&&t.sort((function(e,t){return t.Price-e.Price})),t}(c)),c)}())}),[a,e,t]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,{products:i,filters:t}),c.a.createElement(S,{filters:t,handleCheckedChange:function(e,t,a){r(a?function(e,t){return{type:"addActiveFilter",category:e,filterOption:t}}(e,t):d(e,t)),r(p(e,t,a))},handleActiveFilterClick:function(e,t){r(d(e,t)),r(p(e,t,!1))}}),c.a.createElement(F,{products:i}))}a(61);function $(e){var t=e.history,a=e.location,r=Object(f.c)((function(e){return e.cartItems})),o=Object(f.b)(),l=a.state,i=l.Name,s=l.Sport,m=l.Activity,d=l.Img,p=l.Color,E=l.Size,v=l.Quantity,b=l.Brand,k=l.Id,y=Object(n.useState)(""),O=Object(u.a)(y,2),C=O[0],j=O[1],N=Object(n.useState)([]),S=Object(u.a)(N,2),B=S[0],w=S[1],F=function(){t.goBack()};Object(n.useEffect)((function(){var e=Object.keys(r),t="addCartButton";if(0!==e.length)for(var a in e)r[a].Id===k&&(t="deleteCartButton");j(t)}),[r,k]),Object(n.useEffect)((function(){var e="/search/".concat(b);""!==s&"Football"!==s&&(e="/search/".concat(s)),fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){w(e.filter((function(e){return e.Name!==i})))})).catch((function(e){return console.log(e)}))}),[i,s,m,b]);var I=c.a.createElement("div",{className:"similarProducts"},B.length>0&&""!==s&&"Football"!==s?c.a.createElement("h2",null,"Other ".concat(s," Products")):c.a.createElement("h2",null,"Other ".concat(b," Products")),B.map((function(e,t){return c.a.createElement(g.b,{key:t,to:{pathname:"/product/".concat(e.Name),state:e}},c.a.createElement("img",{src:e.Img,title:e.Name,alt:"",height:"100",width:"100"}))})));return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"productInfoContainer"},c.a.createElement("div",{className:"goBack"},c.a.createElement("button",{className:"goBackButtonLogo",onClick:F}),c.a.createElement("button",{className:"goBackButton",onClick:F},"Back")),c.a.createElement("div",{className:"productInfoFlex"},c.a.createElement("img",{className:"productImage",src:d,alt:""}),c.a.createElement("div",{className:"productInformation"},c.a.createElement("h2",null,i),c.a.createElement("p",null,"".concat(s)||"".concat(m)),c.a.createElement("p",null,"Size: ".concat(E)),c.a.createElement("p",null,"Color: ".concat(p)),c.a.createElement("p",null,"".concat(v," in stock!")),c.a.createElement("p",null,"$".concat(a.state.Price)),c.a.createElement("button",{className:C,onClick:function(){"addCartButton"===C?(o({type:"addCartItem",payload:a.state}),j("deleteCartButton")):(o(h(a.state)),j("addCartButton"))}})))),I)}var A=a(16),P=(a(62),a(63),a(31)),x=a.n(P),T=a(22);function L(e){var t,a=e.history,n=Object(f.c)((function(e){return e.cartItems})),r=Object(f.b)(),o=Object.keys(n),l=function(){a.goBack()},u=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=Object(A.a)({},t)).total=p,a.name="".concat(n[o[0]].Name," and more!"),e.next=5,fetch("/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 5:return c=e.sent,e.next=8,c.json();case 8:l=e.sent,console.log(l),"success"===l.status?(Object(T.a)("Success! Thanks for your purchase!",{type:"success",autoClose:3e3}),setTimeout((function(){return r({type:"removeAllCartItems"})}),3e3),setTimeout((function(){return window.location.replace("/")}),3e3)):Object(T.a)("Something went wrong!",{type:"error"});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=0;return o.forEach((function(t){return e+=parseFloat(n[t].Price)})),e}(),d=function(){var e=0;return o.forEach((function(t){return e+=.0775*parseFloat(n[t].Price)})),Math.round(100*e)/100}(),p=m+d;return t=o.length<=0?c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"goBackCheckout"},c.a.createElement("button",{className:"goBackCheckoutLogo"}),c.a.createElement("button",{className:"goBackCheckoutButton",onClick:l},"Back")),c.a.createElement("h1",{className:"yourCart"},"YOUR CART IS EMPTY")):c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"goBackCheckout"},c.a.createElement("button",{className:"goBackCheckoutLogo"}),c.a.createElement("button",{className:"goBackCheckoutButton",onClick:l},"Back")),c.a.createElement("h1",{className:"yourCart"},"YOUR CART"),c.a.createElement("div",{className:"cartItemsFlex"},c.a.createElement("div",{className:"cartItem"},c.a.createElement("h2",null,"Item"),c.a.createElement("h2",null,"Name"),c.a.createElement("h2",null,"Color"),c.a.createElement("h2",null,"Size"),c.a.createElement("h2",null,"Price")),o.map((function(e,t){return c.a.createElement("div",{key:t,className:"cartItem"},c.a.createElement(g.b,{to:{pathname:"/product/".concat(n[e].Name),state:n[e]}},c.a.createElement("img",{src:n[e].Img,title:n[e].Name,alt:"",height:"100",width:"100"})),c.a.createElement("p",null,n[e].Name),c.a.createElement("p",null,n[e].Color.map((function(e){return"".concat(e," ")}))),c.a.createElement("p",null,n[e].Size),c.a.createElement("p",null,"$".concat(n[e].Price)),c.a.createElement("button",{onClick:function(){return r(h(n[e]))}},"REMOVE"))}))),c.a.createElement("div",{className:"totals"},c.a.createElement("div",{className:"cartItemFlex totalValues"},c.a.createElement("p",null,"$".concat(m)),c.a.createElement("p",null,"$".concat(d)),c.a.createElement("p",null,"$".concat(p))),c.a.createElement("div",{className:"cartItemFlex"},c.a.createElement("p",null,"Balance: "),c.a.createElement("p",null,"Tax @ 7.75%: "),c.a.createElement("p",null,"Total: "))),c.a.createElement("div",{className:"stripeButton"},c.a.createElement(x.a,{stripeKey:"pk_test_p3Sim8gJawuffayCyzXKDThx00QtgvDmh3",token:u,billingAddress:!0,shippingAddress:!0,amount:100*p,name:n.length>1?"".concat(n[o[0]].Name," and more!"):"".concat(n[o[0]].Name)}))),c.a.createElement(c.a.Fragment,null,t)}T.a.configure();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(64);var G=a(9),_=a(32),R=a(21),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.payload,n=Object(R.a)(e);switch(t.type){case"addCartItem":return n.push(a),n;case"removeCartItem":return n.filter((function(e){return e.Id!==a.Id}));case"removeAllCartItems":return[];default:return e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=Object(A.a)({},e),n=t.category,c=t.filterOption;switch(t.type){case"addActiveFilter":return a[n]=c,a;case"deleteActiveFilter":return a[n]&&delete a[n],a;case"resetAllFilters":return a={};default:return e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{Gender:{Men:!1,Women:!1},Activity:{Athletic:!1,Casual:!1},Color:{Black:!1,White:!1,Red:!1,Blue:!1,Purple:!1,Yellow:!1,Orange:!1},Brand:{Nike:!1,Adidas:!1,Vans:!1,Converse:!1},Sport:{Basketball:!1,Baseball:!1,Golf:!1,Football:!1,Soccer:!1},Size:{5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1},Price:{"$1-$50":!1,"$50-$100":!1,"$100-$150":!1,"$150-$200":!1,"$200+":!1},"Sort By":{"Low-High":!1,"High-Low":!1}},t=arguments.length>1?arguments[1]:void 0,a=Object(A.a)({},e),n=t.category,c=t.filterOption,r=t.isChecked;switch(t.type){case"modifyCheckedFilter":for(var o=Object.keys(a[n]),l=0;l<o.length;l++)a[n][o[l]]=!1;return a[n][c]=r,a;case"resetAllFilters":return a={Gender:{Men:!1,Women:!1},Activity:{Athletic:!1,Casual:!1},Color:{Black:!1,White:!1,Red:!1,Blue:!1,Purple:!1,Yellow:!1,Orange:!1},Brand:{Nike:!1,Adidas:!1,Vans:!1,Converse:!1},Sport:{Basketball:!1,Baseball:!1,Golf:!1,Football:!1,Soccer:!1},Size:{5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1},Price:{"$1-$50":!1,"$50-$100":!1,"$100-$150":!1,"$150-$200":!1,"$200+":!1},"Sort By":{"Low-High":!1,"High-Low":!1}};default:return e}},V=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,n=a.products;switch(e=void 0!==n?Object(R.a)(n):[],a.type){case"setProducts":return e;default:return t}},W=a(20),D=a(33),H={key:"root",storage:a.n(D).a,whitelist:["cartItems","activeFilters","checkedFilters"]},Y=Object(G.c)({cartItems:z,activeFilters:M,checkedFilters:Q,setProducts:V}),J=Object(W.a)(H,Y);a.d(t,"store",(function(){return X})),a.d(t,"persistor",(function(){return K}));var U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.d,X=Object(G.e)(J,U(Object(G.a)(_.a))),K=Object(W.b)(X);o.a.render(c.a.createElement(f.a,{store:X},c.a.createElement((function(){var e=Object(f.b)();return Object(n.useEffect)((function(){(function(){var t=Object(s.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n="",n=0===a.length||"shoes"===a.toLowerCase()||"shoe"===a.toLowerCase()?"/search":"/search/".concat(a),console.log(n),e(E(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}})()(window.location.search.slice(8))}),[e]),c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,null,c.a.createElement(k,null),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",exact:!0,component:I}),c.a.createElement(m.a,{path:"/?search=:searchTerm",component:I}),c.a.createElement(m.a,{path:"/product/:product",component:$}),c.a.createElement(m.a,{path:"/checkout",exact:!0,component:L}))))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.cce7cc9f.chunk.js.map