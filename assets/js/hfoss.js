console.log('Test to see if github pages can run javascript with default template');

/*
// https://datatables.net/examples/basic_init/zero_configuration.html


var script1 = document.createElement('script');
script1.src = 'https://code.jquery.com/jquery-1.12.4.js';
document.head.appendChild(script1);

var script2 = document.createElement('script');
script2.src = 'https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js';
script2.defer = true;
document.head.appendChild(script2);

jQuery(document).ready(function() {
  jQuery('#hfoss ~ table').html().DataTable();
});

document.addEventListener("DOMContentLoaded", function() {
  jQuery('#hfoss ~ table').html().DataTable();
});
*/

/*!
 * tablesort v5.0.2 (2017-11-12)
 * http://tristen.ca/tablesort/demo/
 * Copyright (c) 2017 ; Licensed MIT
*/!function(){function a(b,c){if(!(this instanceof a))return new a(b,c);if(!b||"TABLE"!==b.tagName)throw new Error("Element must be a table");this.init(b,c||{})}var b=[],c=function(a){var b;return window.CustomEvent&&"function"==typeof window.CustomEvent?b=new CustomEvent(a):(b=document.createEvent("CustomEvent"),b.initCustomEvent(a,!1,!1,void 0)),b},d=function(a){return a.getAttribute("data-sort")||a.textContent||a.innerText||""},e=function(a,b){return a=a.trim().toLowerCase(),b=b.trim().toLowerCase(),a===b?0:a<b?1:-1},f=function(a,b){return function(c,d){var e=a(c.td,d.td);return 0===e?b?d.index-c.index:c.index-d.index:e}};a.extend=function(a,c,d){if("function"!=typeof c||"function"!=typeof d)throw new Error("Pattern and sort must be a function");b.push({name:a,pattern:c,sort:d})},a.prototype={init:function(a,b){var c,d,e,f,g=this;if(g.table=a,g.thead=!1,g.options=b,a.rows&&a.rows.length>0)if(a.tHead&&a.tHead.rows.length>0){for(e=0;e<a.tHead.rows.length;e++)if("thead"===a.tHead.rows[e].getAttribute("data-sort-method")){c=a.tHead.rows[e];break}c||(c=a.tHead.rows[a.tHead.rows.length-1]),g.thead=!0}else c=a.rows[0];if(c){var h=function(){g.current&&g.current!==this&&g.current.removeAttribute("aria-sort"),g.current=this,g.sortTable(this)};for(e=0;e<c.cells.length;e++)f=c.cells[e],f.setAttribute("role","columnheader"),"none"!==f.getAttribute("data-sort-method")&&(f.tabindex=0,f.addEventListener("click",h,!1),null!==f.getAttribute("data-sort-default")&&(d=f));d&&(g.current=d,g.sortTable(d))}},sortTable:function(a,g){var h=this,i=a.cellIndex,j=e,k="",l=[],m=h.thead?0:1,n=a.getAttribute("data-sort-method"),o=a.getAttribute("aria-sort");if(h.table.dispatchEvent(c("beforeSort")),g||(o="ascending"===o?"descending":"descending"===o?"ascending":h.options.descending?"descending":"ascending",a.setAttribute("aria-sort",o)),!(h.table.rows.length<2)){if(!n){for(;l.length<3&&m<h.table.tBodies[0].rows.length;)k=d(h.table.tBodies[0].rows[m].cells[i]),k=k.trim(),k.length>0&&l.push(k),m++;if(!l)return}for(m=0;m<b.length;m++)if(k=b[m],n){if(k.name===n){j=k.sort;break}}else if(l.every(k.pattern)){j=k.sort;break}for(h.col=i,m=0;m<h.table.tBodies.length;m++){var p,q=[],r={},s=0,t=0;if(!(h.table.tBodies[m].rows.length<2)){for(p=0;p<h.table.tBodies[m].rows.length;p++)k=h.table.tBodies[m].rows[p],"none"===k.getAttribute("data-sort-method")?r[s]=k:q.push({tr:k,td:d(k.cells[h.col]),index:s}),s++;for("descending"===o?q.sort(f(j,!0)):(q.sort(f(j,!1)),q.reverse()),p=0;p<s;p++)r[p]?(k=r[p],t++):k=q[p-t].tr,h.table.tBodies[m].appendChild(k)}}h.table.dispatchEvent(c("afterSort"))}},refresh:function(){void 0!==this.current&&this.sortTable(this.current,!0)}},"undefined"!=typeof module&&module.exports?module.exports=a:window.Tablesort=a}();


/*!
 * tablesort v5.0.2 (2017-11-12)
 * http://tristen.ca/tablesort/demo/
 * Copyright (c) 2017 ; Licensed MIT
*/!function(){var a=function(a){return a.replace(/[^\-?0-9.]/g,"")},b=function(a,b){return a=parseFloat(a),b=parseFloat(b),a=isNaN(a)?0:a,b=isNaN(b)?0:b,a-b};Tablesort.extend("number",function(a){return a.match(/^[-+]?[£\x24Û¢´€]?\d+\s*([,\.]\d{0,2})/)||a.match(/^[-+]?\d+\s*([,\.]\d{0,2})?[£\x24Û¢´€]/)||a.match(/^[-+]?(\d)*-?([,\.]){0,1}-?(\d)+([E,e][\-+][\d]+)?%?$/)},function(c,d){return c=a(c),d=a(d),b(d,c)})}();

new Tablesort(document.querySelector('#hfoss ~ table'));

console.log('oioi')