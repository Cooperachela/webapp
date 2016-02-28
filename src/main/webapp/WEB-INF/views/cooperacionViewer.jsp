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
    <link href="../../css/plugin-min.css" type="text/css" rel="stylesheet">
    <link href="../../css/custom-min.css" type="text/css" rel="stylesheet" >
   <link rel="stylesheet" href="../../css/bootstrap.min.css">
<link rel="stylesheet" href="../../css/cooperachela.css">
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
		<meta property="og:description"   content="Costo ${meta}!" />
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
                      <ul id="nav-mobile" class="side-nav">
                     
                 
                    
                </ul>
            <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="mdi-navigation-menu"></i></a>
           
              
            <a href="#" id="logo-container" class="brand-logo">
                <img src="/img/repartidor.png"></a>
          
               
                <ul class=" hide-on-med-and-down">
                    

               </ul>
          
            </div>
        </div>
    </nav>
</div>
 
  <main class="mdl-layout__content">
    <div class="page-content mdl-grid">
    	
    
    	<div ng-repeat="c in cooperachas" class="mdl-cell mdl-cell--4-col mdl-cell--4-offset mdl-cell--12-col-phone mdl-card mdl-shadow--2dp">
		  <div class="mdl-card__title" style="color:white;">
		    <h2 class="mdl-card__title-text">Cooperacha {{c.id}}</h2>
		  </div>
		  <div class="mdl-card__supporting-text">		   				   
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
		   		<h5>Total {{c.meta}}</h5>
		  </div>
		  <div class="mdl-card__actions mdl-card--border">
		    		    
		  </div>
		  
		</div>
    </div>
  </main>
  	      
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