((this,document,jQuery));jQuery.fn.slider=function(a){var e=$.extend({loop:false,itemListContainer:".items",itemList:".item",nextArrow:".next",pageItemCount:1,previousArrow:".previous",visibleItemCount:6},a);var k=$(this);var i=k.find(e.itemListContainer);var b=i.find(e.itemList);var g=k.find(e.previousArrow);var j=k.find(e.nextArrow);var m=b.first().outerWidth(true);var d=b.length;var l=0;function o(){i.css({width:(m*d)+"px"});g.click(f);j.click(n);c()}
function f(){h(-1)}
function n(){h(1)}
function h(p){l+=p*e.pageItemCount;if(p==-1){if(e.loop&&l==-e.pageItemCount){l=d-e.visibleItemCount}else{if(l<0){l=0}}}else{if(p==1){if(e.loop&&l==d-e.visibleItemCount+e.pageItemCount){l=0}else{if(l>d-e.visibleItemCount){l=d-e.visibleItemCount}}}}
i.stop(true,true).animate({"margin-left":-(m*l)+"px"});c()}
function c(){g.show();j.show();if(e.loop){return}
if(l==0){g.hide()}
if(l==d-e.visibleItemCount){j.hide()}
if(d<e.visibleItemCount){g.hide();j.hide()}}
o()};(function(g,f){function e(){var j=f("#showPicker"),i=j.find("#showPickerSlider"),d=i.find(".showPickerItem").length;if(d>0){h(j,i,d)}}
function h(l,j,d){var k=7,i=d>7;j.slider({loop:i,itemListContainer:".showPickerItems",itemList:".showPickerItem",previousArrow:".btn-prev",nextArrow:".btn-next",pageItemCount:k,visibleItemCount:k});l.removeClass("hide");j.removeClass("invisible");f(g).on("mouseover mouseout",".showPickerItem",b)}
function b(j){var d=f(j.currentTarget),i="selected";switch(j.type){case"mouseover":a(d,i);break;case"mouseout":c(d,i);break;default:break}}
function a(d,i){d.addClass(i)}
function c(d,i){d.removeClass(i)}
e()}(document,jQuery));function hideshow(){if(document.getElementById("catlist").style.display=="block"){document.getElementById("catlist").style.display="none";document.getElementById('Bcatlist').classList.remove("top_icon");$("html, body").animate({scrollTop:0},"slow");}
else{document.getElementById("catlist").style.display="block";document.getElementById('Bcatlist').classList.add("top_icon");}}
((jQuery));
