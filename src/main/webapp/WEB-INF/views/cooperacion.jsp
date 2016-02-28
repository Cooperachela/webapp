<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    
<!DOCTYPE html>
<html>
<head>

	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Cooperacha ${nombre}</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://code.getmdl.io/1.1.1/material.indigo-pink.min.css">

<script defer src="https://code.getmdl.io/1.1.1/material.min.js"></script>


    <!-- CSS  -->
    <link href="/css/plugin-min.css" type="text/css" rel="stylesheet">
    <link href="/css/custom-min.css" type="text/css" rel="stylesheet" >
   <link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/cooperachela.css">
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-74360069-1', 'auto');
  ga('send', 'pageview');
</script>
	<c:if test="${error eq false}">
		<meta property="og:url"           content="http://cooperachela.appspot.com/api/c/${nombre}" />
		<meta property="og:type"          content="website" />
		<meta property="og:title"         content="Cooperachela ${nombre}" />
		<meta name="cooperachela"  content="${nombre}" />	
		<meta property="og:description"   content="Cooperale! llevamos ${total} de ${meta}!" />
		<meta property="og:image"         content="http://cooperachela.appspot.com/img/logo/CC-512.cb.png" />
	</c:if>
	<c:if test="${error eq true}">
		<meta property="og:url"           content="http://cooperachela.appspot.com" />
		<meta property="og:type"          content="website" />
		<meta property="og:title"         content="Cooperachela" />
		<meta name="cooperachela"     content="" />	
		<meta property="og:description"   content="Cooperachela es un espacio para cooperar para las chelas!" />
		<meta property="og:image"         content="http://cooperachela.appspot.com/img/logo/CC-512.cb.png" />
	</c:if>	
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://code.getmdl.io/1.1.1/material.indigo-pink.min.css">
<script defer src="https://code.getmdl.io/1.1.1/material.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>

<link rel="icon" href="/favicon.ico" type="image/x-icon"/>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-74360069-1', 'auto');
  ga('send', 'pageview');
</script>
<style>
.mdl-grid{
margin-bottom: 4em;
margin-top: 4em;
}
.demo-card-wide.mdl-card {
  width: 512px;
}
.demo-card-wide > .mdl-card__title {
  color: #fff;
  height: 176px;
  background: url('/img/banner-card.png') center / cover;
}
.demo-card-wide > .mdl-card__menu {
  color: #fff;
}
</style>
</head>
<body ng-app="CooperachaApp" ng-controller="CooperachaCtrl">

<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-NNLQLB"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NNLQLB');</script>
<!-- End Google Tag Manager -->

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.5&appId=832252386885169";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<script>window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));</script>

<!-- Always shows a header, even in smaller screens. -->
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
<!--Navigation-->
 <div class="navbar-fixed">
    <nav id="nav_f" class="default_color" role="navigation">
        <div class="container">
            <div class="nav-wrapper">
           
            <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="mdi-navigation-menu"></i></a>
           
              
            <a href="#" id="logo-container" class="brand-logo">
                <img src="/img/chelatonlogo2.png"></a>
          
               
                <ul class=" hide-on-med-and-down">
                    <li ><a href="#"><div data-toggle="modal" data-target="#myModal">Iniciar sesión</div></a></li>
                    <li><a href="#work">Cooperacha</a></li>
                    <li><a href="#">
                            <div id="show-dialog" class="material-icons mdl-badge mdl-badge--overlap" data-badge="1"><i class="mdi-maps-local-grocery-store mdl-badge--overlap" data-badge="1"></i></div></a></li>
                    

               </ul>
          
            </div>
        </div>
    </nav>
</div>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Title</span>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link" href="">Link</a>
      <a class="mdl-navigation__link" href="">Link</a>
      <a class="mdl-navigation__link" href="">Link</a>
      <a class="mdl-navigation__link" href="">Link</a>
    </nav>
  </div>
  <main class="mdl-layout__content">
    <div class="page-content mdl-grid">
    	
    	<div id="noCoopera" ng-show="vacio()" class="mdl-cell mdl-cell--4-col mdl-cell--4-offset mdl-cell--12-col-phone mdl-card mdl-shadow--2dp">
		  <div class="mdl-card__title" style="color:white;">
		    <h2 class="mdl-card__title-text">Cooperachas</h2>
		  </div>
		  <div class="mdl-card__supporting-text">
		   Tu no tienes cooperaciones activas
		  </div>
		  <div class="mdl-card__actions mdl-card--border">
		    <a ng-click="abrirNuevo()" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
		      Crear cooperacha
		    </a>
			</div>
		</div>
    	<div ng-repeat="c in cooperachas" class="mdl-cell mdl-cell--4-col mdl-cell--4-offset mdl-cell--12-col-phone mdl-card mdl-shadow--2dp">
		  <div class="mdl-card__title" style="color:white;">
		    <h2 class="mdl-card__title-text">Cooperacha {{c.id}}</h2>
		  </div>
		  <div class="mdl-card__supporting-text">
		   		<h5>Miembros</h5>
		   		<ul class="mdl-list" >
		   		    		   		
	   				<li class="mdl-list__item mdl-list__item--two-line" ng-repeat="m in c.miembros">
	   					<span class="mdl-list__item-primary-content">
	   						<span>
	   						{{m.nombre}}
	   						</span>
	   						<span class="mdl-list__item-sub-title">$ {{m.aportacion}}</span>		   					
	   					</span>
	   				</li>
	   			
		   		</ul>		   		
		   		<h5>Productos</h5>
		   		<ul class="mdl-list mdl-list__item" >		   		    
		   			<li class="mdl-list__item mdl-list__item--two-line" ng-repeat="p in c.productos">
		   				<span class="mdl-list__item-primary-content">		   		
		   					<span>
		   						{{p.nombre}}
		   					</span>
		   					<span class="mdl-list__item-sub-title">{{p.cantidad}}</span>		   					
		   				</span>
		   			</li>
		   			
		   		</ul>
		   		<h5>Llevamos {{c.total}} de {{c.meta}}</h5>
		  </div>
		  <div class="mdl-card__actions mdl-card--border">
		    <a ng-click="cooperar()" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
		      Cooperar
		    </a>
		    <a ng-click="agregarChela()" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
		      Mas chelas
		    </a>
		    <a ng-click="abrirPedido()" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
		      Hacer pedido
		    </a>		    
		  </div>
		  <div class="mdl-card__menu" style="color:white;">
		    <button ng-click="compartir(c)" class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
		      <i class="material-icons">share</i>
		    </button>
		  </div>
		</div>
    </div>
  </main>
  	<dialog class="mdl-dialog new">
	    <h4 class="mdl-dialog__title">Cooperacha</h4>
	    <div class="mdl-dialog__content">
	       <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label ng-class:{'is-invalid':errorNuevo};">
		    <input ng-change="limpiaError()" ng-model="nuevoTxt" class="mdl-textfield__input" type="text" id="nuevoTxt">
		    <label class="mdl-textfield__label" for="nuevoTxt">Nombre de la cooperacha</label>
		    <span class="mdl-textfield__error">Ese nombre ya existe por favor elije otro.</span>
		    
		  </div>
	    </div>
	    <div class="mdl-dialog__actions">
	      <button ng-click="crear()" type="button" class="mdl-button">Aceptar</button>
	      <button ng-click="cerrarNuevo()" type="button" class="mdl-button close">Cerrar</button>
	    </div>
	  </dialog>
	  <dialog class="mdl-dialog share">
	    <h4 class="mdl-dialog__title">Compartir</h4>
	    <div class="mdl-dialog__content">
	      <ul class="mdl-list">
  			<li class="mdl-list__item">
    			<span class="mdl-list__item-primary-content">
	      			<div class="fb-share-button" data-href="{{link}}" data-layout="button"></div>
	      		</span>
	      	</li>	   
	      	<li class="mdl-list__item">
    			<span class="mdl-list__item-primary-content">
	      			<div id="share-twitter"></div>
	      			
	      		</span>
	      	</li>	   
	      	   	
	      </ul>
	    </div>
	    <div class="mdl-dialog__actions">	      
	      <button ng-click="cerrarShare()" type="button" class="mdl-button close">Cerrar</button>
	    </div>
	  </dialog>
	  <dialog class="mdl-dialog login">
	    <h4 class="mdl-dialog__title">Iniciar sesión</h4>
	    <div class="mdl-dialog__content">
	      <ul class="mdl-list">
  			<li class="mdl-list__item">
    			<span class="mdl-list__item-primary-content">
	      			<fb:login-button scope="public_profile,email" onlogin="checkLoginFB();"></fb:login-button>
	      		</span>
	      	</li>	      	
	      </ul>
	    </div>
	    <div class="mdl-dialog__actions">	      
	      <button ng-click="cerrarShare()" type="button" class="mdl-button close">Cerrar</button>
	    </div>
	  </dialog>
	   <dialog class="mdl-dialog cooperar">
	    <h4 class="mdl-dialog__title">Cooperar</h4>
	    <div class="mdl-dialog__content">
	       <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label ng-class:{'is-invalid':errorNuevo};">
		    <input ng-change="limpiaError()" ng-model="montoChela" class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="montoChela">
		    <label class="mdl-textfield__label" for="montoChela">¿Con cuanto cooperas?</label>
		    <span class="mdl-textfield__error">Este no es un número.</span>
		    
		  </div>	      
	    </div>
	    <div class="mdl-dialog__actions">	      
	      <button ng-click="pagar()" type="button" class="mdl-button close">Cooperar</button>
	      <button ng-click="cerrarCooperar()" type="button" class="mdl-button close">Cerrar</button>
	    </div>
	  </dialog>
	   <dialog class="mdl-dialog pedido">
	    <h4 class="mdl-dialog__title">Realizar pedido</h4>
	    <div class="mdl-dialog__content">
	      ¿Desea que le entregemos el pedido en su domicilio o quiere recogerlo en la tienda?
	    </div>
	    <div class="mdl-dialog__actions">	      
	      <button ng-click="recoger()" type="button" class="mdl-button close">EN TIENDA</button>
	      <button ng-click="pedir()" type="button" class="mdl-button close">A DOMICILIO</button>	      
	    </div>
	  </dialog>
	   <form id="formPaypal" action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_xclick">
            <input type="hidden" name="business" value="danyel.nerv-faciliator@gmail.com">
            <input type="hidden" name="lc" value="ES">
            <input type="hidden" name="item_name" value="Cooperachelas">
            <input type="hidden" name="button_subtype" value="services">
            <input type="hidden" name="no_note" value="0">
            <input type="hidden" name="no_shipping" value="2">
            <input type="hidden" name="amount" ng-value="montoChela">
            <input type="hidden" name="currency_code" value="MXN">
            <input type="hidden" name="return" value="http://cooperachela.appspot.com/api/c/{{currentId}}/{{nombre}}/{{userid}}/{{userType}}/payment">
            <input type="hidden" name="rm" value="2">            
            <input type="hidden" name="custom" value="{{currentId}}">            
            <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted">            
          </form>
          
          <!--Footer-->
<footer id="contact" class="page-footer default_color scrollspy">
    <div class="container">  
        <div class="row">
            <div class="col l4 s12 center">
                <h5 class="white-text"> 01-800-MODELONOW<br>
                  (01-800-6633566)</h5>
            </div>
            <div class="col l4 s12 center">
                 <ul>
                    <li><a class="white-text" href="#">POLÍTICAS DE PRIVACIDAD</a></li>
                    <li><a class="white-text" href="#"> POLÍTICAS DE USO</a></li>
                    <li><a class="white-text" href="#"> RESTRICCIONES DE ENTREGA</a></li>
                </ul>
                
            </div>
            <div class="col l4 s12 center">
              
                <p class="white-text">PERMISO COFEPRIS: 143300201A2948
Sólo para mayores de edad
Todo con medida</p>
            </div>
        </div>
    </div>
    <div class="footer-copyright default_color">
        <div class="container center ">
            <p class="margino">  Hecho por <a class="white-text" href="#">CodeCaster team</a> para <a class="white-text" href="http://materializecss.com/"><img src="/img/logo-modelonow.png"></a>
            </p><br>
            <br>
        </div>
    </div>
</footer>
</div>
	<script>
		var app = angular.module("CooperachaApp", []);
	</script>
	<script src="/js/controllers/cooperacha.js"></script>
</body>
</html>