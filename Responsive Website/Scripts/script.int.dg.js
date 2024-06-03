!window.jQuery && document.write(unescape('%3Cscript src="http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.10.2.min.js"%3E%3C/script%3E')); 

!function(e,t,r){function n(){for(;d[0]&&"loaded"==d[0][f];)c=d.shift(),c[o]=!i.parentNode.insertBefore(c,i)}for(var s,a,c,d=[],i=e.scripts[0],o="onreadystatechange",f="readyState";s=r.shift();)a=e.createElement(t),"async"in i?(a.async=!1,e.body.appendChild(a)):i[f]?(d.push(a),a[o]=n):e.write("<"+t+' src="'+s+'" defer></'+t+">"),a.src=s}(document,"script",['Scripts/helpers.min.js','Scripts/animations.js'])

if(Page=='home'){
!function(e,t,r){function n(){for(;d[0]&&"loaded"==d[0][f];)c=d.shift(),c[o]=!i.parentNode.insertBefore(c,i)}for(var s,a,c,d=[],i=e.scripts[0],o="onreadystatechange",f="readyState";s=r.shift();)a=e.createElement(t),"async"in i?(a.async=!1,e.body.appendChild(a)):i[f]?(d.push(a),a[o]=n):e.write("<"+t+' src="'+s+'" defer></'+t+">"),a.src=s}(document,"script",['Scripts/fluid_dg.min.js'])
}

$(window).load(function(e) {
$('.shownext').click(function(){$('.subdd').hide('fast'); $(this).next().slideToggle('fast');});
$('.dd_next').click(function(){
$(this).next().slideToggle('fast');$(this).toggleClass('dd_next_act');})

$(window).scroll(function(){
if($(this).scrollTop()>0){$('.top2').addClass('t2_fixer'); $('.top2_b').css({'display':'block'})}
else{$('.top2').removeClass('t2_fixer'); $('.top2_b').css({'display':'none'})}
}) 


$("#back-top").hide();	
$(function () {$(window).scroll(function () {if ($(this).scrollTop() > 100) {$('#back-top').fadeIn();} else {$('#back-top').fadeOut();}});
$('#back-top a').click(function () {$('body,html').animate({scrollTop: 0}, 800);return false;});
});


$("#clnt-scr").owlCarousel({autoplay:true,dots:true,nav:false,navText: [ '', '' ],items:3,responsive:{0:{items:1},479:{items:1},767:{items:2},991:{items:3},1200:{items:4}}});

$("#serv-scrl").owlCarousel({autoplay:false,dots:false,loop:false,nav:false,navText: [ '', '' ],items:3,responsive:{0:{items:1},479:{items:1},767:{items:2},991:{items:3},1200:{items:3}}});

$("#pj_scl,#pj_sc12,#pj_sc13,#pj_sc14,#pj_sc15").owlCarousel({autoplay:true,dots:true,nav:false,navText: [ '', '' ],items:1,responsive:{0:{items:1},479:{items:1},767:{items:1},991:{items:1},1200:{items:1}}});


if(Page=='home'){
$(function(){$('#fluid_dg_wrap_1').fluid_dg({thumbnails: false,height:"35%",navigation:'false',minHeight:'120',fx:'simpleFade,scrollRight,scrollLeft',navigationHover:'false',dots:'true',playPause:'false',loader:'none',hover:'false',time:3000,onLoaded:function(){$('#Page_loader').fadeOut()}});})


wow = new WOW({animateClass: 'animated', mobile: false, offset: 200 });
wow.init();

var a=0;$(window).scroll(function(){var t=$("#counter").offset().top-window.innerHeight;0==a&&$(window).scrollTop()>t&&($(".counter-value").each(function(){var t=$(this),n=t.data("count");$({countNum:parseInt(t.data('start'))}).animate({countNum:n},{duration:3e3,easing:"swing",step:function(){t.text(Math.floor(this.countNum))},complete:function(){t.text(this.countNum);t.attr('data-start',t.text())}})}),a=1)})

}
});