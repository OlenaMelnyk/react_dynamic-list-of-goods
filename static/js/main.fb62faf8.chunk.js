(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{10:function(t,e,n){t.exports=n(19)},16:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(5),s=n.n(o),c=n(1),u=n.n(c),i=n(2),l=n(6),d=n(7),f=n(9),p=n(8);n(16);function m(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var h=function(){var t=Object(i.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return e=t.sent,t.abrupt("return",e.slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(i.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return e=t.sent,t.abrupt("return",e.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=n(3),g=n.n(v),w=(g.a.shape({id:g.a.number.isRequired,name:g.a.string.isRequired,color:g.a.string.isRequired}),function(t){var e,n=t.goods;return a.a.createElement("ul",{className:"goodsList"},(e=n)?e.map((function(t){return a.a.createElement("li",{key:t.id,className:"productElement"},t.name)})):null)});w.defaultProps={goods:[]};var y=function(t){Object(f.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={goods:null},t.showAll=function(){t.requestGoods(m)},t.show5First=function(){t.requestGoods(h)},t.showRedGoods=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.requestGoods(b);case 1:case"end":return e.stop()}}),e)}))),t}return Object(d.a)(n,[{key:"requestGoods",value:function(){var t=Object(i.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,this.setState({goods:n});case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.goods;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Dynamic list of Goods"),a.a.createElement("button",{type:"button",className:"button",onClick:this.showAll},"Get All"),a.a.createElement("button",{type:"button",className:"button",onClick:this.show5First},"Get 5 first"),a.a.createElement("button",{type:"button",className:"button",onClick:this.showRedGoods},"Get Red"),a.a.createElement(w,{goods:t}))}}]),n}(a.a.Component);s.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.fb62faf8.chunk.js.map