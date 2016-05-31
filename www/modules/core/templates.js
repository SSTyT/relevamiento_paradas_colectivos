angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width\">\n    <meta http-equiv=\"Content-Security-Policy\" content=\"default-src *; style-src \'self\' \'unsafe-inline\'; script-src * \'self\' \'unsafe-inline\' \'unsafe-eval\' \'unsafe-inline\'; media-src * ;connect-src * ; img-src data: * \'self\';\">\n    <title>Paradas</title>\n    <link href=\"css/styles.css\" rel=\"stylesheet\">\n    <link rel=\"stylesheet\" href=\"lib/leaflet/dist/leaflet.css\" />\n    <link rel=\"stylesheet\" href=\"lib/leaflet-control-geocoder/dist/Control.Geocoder.css\" />\n    <link href=\"lib/ion-autocomplete/dist/ion-autocomplete.css\" rel=\"stylesheet\">\n\n    <!-- <link rel=\"stylesheet\" href=\"lib/ionic/css/ionic.css\"> -->\n    <!-- IF using Sass (run gulp sass first), then uncomment below and remove the CSS includes above-->\n    <link rel=\"stylesheet\" href=\"lib/ionic-material/dist/ionic.material.min.css\">\n    <!-- ionic/angularjs js -->\n    <!-- cordova script (this will be a 404 during development) -->\n   \n</head>\n\n<body ng-app=\"ParadApp\">\n    <ion-nav-view animation=\"slide-left-right\"></ion-nav-view>\n    <!-- libs -->\n    <!-- <script src=\"lib/angular/angular.js\"></script> -->\n    <!-- <script src=\"lib/angular-animate/angular-animate.js\"></script> -->\n    <!-- <script src=\"lib/angular-sanitize/angular-sanitize.js\"></script> -->\n    <!-- <script src=\"lib/angular-ui-router/release/angular-ui-router.js\"></script> -->\n    <script src=\"lib/ionic/js/ionic.bundle.js\"></script>\n    <script src=\"lib/ngCordova/dist/ng-cordova.js\"></script>\n    <script src=\"cordova.js\"></script>\n    <script src=\"lib/angular-dynamic-locale/src/tmhDynamicLocale.js\"></script>\n    <script src=\"lib/angular-translate/angular-translate.js\"></script>\n    <script src=\"lib/angular-translate-loader-static-files/angular-translate-loader-static-files.js\"></script>\n    <script src=\"lib/localforage/dist/localforage.js\"></script>\n    <script src=\"lib/leaflet/dist/leaflet-src.js\"></script>\n    <script src=\"lib/angular-leaflet-directive/dist/angular-leaflet-directive.js\"></script>\n    <script src=\"lib/leaflet-control-geocoder/dist/Control.Geocoder.js\"></script>\n    <script src=\"lib/ionic/js/ionic.bundle.js\"></script>\n    <script src=\"lib/ionic-material/dist/ionic.material.min.js\"></script>\n    <script src=\"lib/ion-md-input/js/ion-md-input.js\"></script>\n    <script src=\"lib/ion-autocomplete/dist/ion-autocomplete.js\"></script>\n\n\n    <!-- your app\'s js -->\n    <script src=\"app.js\"></script>\n    <script src=\"modules/core/templates.js\"></script>\n    <script src=\"modules/core/modules.js\"></script>\n    <script src=\"modules/core/services.js\"></script>\n\n    <script src=\"modules/services/camera.service.js\"></script>\n    <script src=\"modules/services/wizard.service.js\"></script>\n    <script src=\"modules/services/paradas.service.js\"></script>\n    <script src=\"modules/services/location.service.js\"></script>\n    <script src=\"modules/services/network.service.js\"></script>\n    <script src=\"modules/services/storage.service.js\"></script>\n    <script src=\"modules/services/leafleatHelper.service.js\"></script>\n\n    <script src=\"modules/detail/detail.controller.js\"></script>\n    <script src=\"modules/login/login.controller.js\"></script>\n    <script src=\"modules/map/map.controller.js\"></script>\n    <script src=\"modules/map/map.fab.button.controller.js\"></script>\n    <script src=\"modules/search/search.controller.js\"></script>\n    <script src=\"modules/wizard/wizard.controller.js\"></script>\n    <script src=\"modules/wizard/step1/step1.controller.js\"></script>\n    <script src=\"modules/wizard/step2/step2.controller.js\"></script>\n    <script src=\"modules/wizard/step3/step3.controller.js\"></script>\n    <script src=\"modules/wizard/step3/wizard.step3.fab.controller.js\"></script>\n    <script src=\"modules/wizard/last/last.controller.js\"></script>\n    <script src=\"modules/wizard/common/focus.directive.js\"></script>\n</body>\n\n</html>\n");
$templateCache.put("detail/detail.tmpl.html","<ion-view view-title=\"Parada {{vm.fields.id}}\">\n  \n    <ion-content data-tap-disabled=\"true\">\n        <div class=\"list\">\n            \n         \n\n            <div id=\"detailMap\"></div>\n\n\n            <label ng-click=\"vm.showMe()\"class=\"item item-input item-floating-label\">\n                <span class=\"input-label\">Calle</span>\n                <input type=\"text\" ng-model=\"vm.fields.calle\" placeholder=\"Calle\">\n            </label>\n            <label class=\"item item-input item-floating-label\">\n                <span class=\"input-label\">Numero</span>\n                <input type=\"text\" ng-model=\"vm.fields.numero\" placeholder=\"Numero\">\n            </label>\n            <label class=\"item item-input item-floating-label\">\n                <span class=\"input-label\">Coordenadas</span>\n                <input type=\"text\" ng-model=\"vm.fields.coordenadas\" disabled=\"\">\n            </label>\n            <label class=\"item item-input item-select\">\n                <div class=\"input-label\">Paridad</div>\n                <select ng-model=\"vm.fields.paridad\">\n                    <option>PAR</option>\n                    <option>INPAR</option>\n                </select>\n            </label>\n            <label class=\"item item-input item-floating-label\">\n                <span class=\"input-label\">Entre Calle 1</span>\n                <input type=\"text\" ng-model=\"vm.fields.entre1\" placeholder=\"Entre Calle 1\">\n            </label>\n            <label class=\"item item-input item-floating-label\">\n                <span class=\"input-label\">Entre Calle 2</span>\n                <input type=\"text\" ng-model=\"vm.fields.entre2\" placeholder=\"Entre Calle 2\">\n            </label>\n            <label class=\"item item-input item-select\">\n                <div class=\"input-label\">Linea</div>\n                <select>\n                    <option>59</option>\n                    <option>60</option>\n                    <option selected>68</option>\n                    <option>152</option>\n                </select>\n            </label>\n            <label class=\"item item-input item-select\">\n                <div class=\"input-label\">Ramal</div>\n                <select>\n                    <option>uno</option>\n                    <option>dos</option>\n                    <option selected>tres</option>\n                    <option>cuatro</option>\n                </select>\n            </label>\n            <label class=\"item item-input item-floating-label\">\n                <span class=\"input-label\">Capacidad</span>\n                <input type=\"text\" ng-model=\"vm.fields.capacidad\" placeholder=\"Capacidad\">\n            </label>\n            <label class=\"item item-input item-floating-label\">\n                <span class=\"input-label\">Observaciones</span>\n                <textarea ng-model=\"vm.fields.observcaciones\" placeholder=\"Observaciones\" name=\"Observaciones\" rows=\"5\"></textarea>\n            </label>\n            <label class=\"item item-input item-select\">\n                <div class=\"input-label\">Tipo</div>\n                <select ng-model=\"vm.fields.tipo\">\n                    <option>Poste 1 </option>\n                    <option>Poste 2 </option>\n                    <option>Poste 3 </option>\n                    <option>Poste 4 </option>\n                    <option>Refugio 1 </option>\n                    <option>Refugio 2 </option>\n                    <option>No oficial </option>\n                </select>\n            </label>\n            <label class=\"item item-input item-select\">\n                <div class=\"input-label\">Estado</div>\n                <select ng-model=\"vm.fields.estado\">\n                    <option value=\"1\">Bueno</option>\n                    <option value=\"2\">Requiere mantenimiento</option>\n                    <option value=\"3\">infraestructura inexistente</option>\n                    <option calue=\"4\">No oficial</option>\n                </select>\n            </label>\n            <label class=\"item item-input item-select\">\n                <div class=\"input-label\">Foto</div>\n                <img ng-src=\"\" alt=\"\">\n            </label>\n        </div>\n        <button class=\"button button-block\" ng-click=\"vm.next()\">Siguiente</button>\n    </ion-content>\n</ion-view>\nDETAIL TMPL parada calle numero coordenadas paridad entre1 entre2 capacidad observaciones tipo: estado: link_foto revisar recorrido linea ramal direccion descripcion fecha_actualizacion demarcacion cordon_pintado darsena_pintada\n");
$templateCache.put("login/login.tmpl.html","\n<ion-view view-title=\"Login\" align-title=\"left\">\n    <ion-content scroll=\"false\" id=\"login-background\" >\n		<div class=\"hero no-header flat\">\n            <br>    \n            <i class=\"ion-map icon hero-icon royal-bg\"></i>\n            <h1>Relevamiento de Paradas</h1>\n            <h1>{{vm.network}}</h1>\n\n        </div>\n        <br>    \n        <div class=\"list fields\">\n            <ion-md-input placeholder=\"Username\" highlight-color=\"balanced\" ng-model=\"vm.user.name\" type=\"text\"></ion-md-input>\n            <ion-md-input placeholder=\"Password\" highlight-color=\"balanced\" ng-model=\"vm.user.pass\" type=\"password\"></ion-md-input>\n        </div>\n        <div class=\"padding\">\n            <button ng-click=\"vm.login()\" class=\"button button-full button-assertive ink\">Login</button>\n        </div>\n        <!--         \n            <div class=\"button-bar social-login\">\n            <button class=\"button button-small button-border icon-left ion-social-google button-assertive-900\">Google+</button>\n            <button class=\"button button-small button-border icon-left ion-social-twitter button-calm-900\">Twitter</button>\n            <button class=\"button button-small button-border icon-left ion-social-facebook button-positive-900\">Facebook</button>\n        </div> -->\n    </ion-content>\n</ion-view>\n");
$templateCache.put("menu/menu.tmpl.html","<ion-side-menus enable-menu-with-back-views=\"true\" ng-cloak>\n    <ion-side-menu-content>\n        <ion-nav-bar class=\"bar-assertive-900\" ng-class=\"{expanded: isExpanded, \'has-header-fab-left\': hasHeaderFabLeft, \'has-header-fab-right\': hasHeaderFabRight}\" align-title=\"left\">\n            <ion-nav-back-button class=\"no-text\">\n            </ion-nav-back-button>\n            <ion-nav-buttons side=\"left\">\n                <button class=\"button button-icon button-clear ion-android-more-vertical\" menu-toggle=\"left\">\n                </button>\n            </ion-nav-buttons>\n        </ion-nav-bar>\n        <ion-nav-view name=\"fabContent\"></ion-nav-view>\n        <ion-nav-view name=\"viewContent\" animation=\"slide-left-right\"></ion-nav-view>\n    </ion-side-menu-content>\n    <ion-side-menu side=\"left\">\n        <ion-header-bar class=\"dark-bg expanded menu-header\">\n            <span class=\"avatar\" style=\"background: url(\'img/icon.png\'); background-size: cover;\"></span>\n            <h2>Paradas</h2>\n        </ion-header-bar>\n        <ion-content class=\"stable-bg has-expanded-header\">\n            <ion-list>\n                <ion-item menu-close href=\"#/app/mapa\">\n                    Mapa\n                </ion-item>\n                <ion-item menu-close href=\"#/app/asistente/paso1\">\n                    Nueva Parada\n                </ion-item>\n                <ion-item menu-close ng-click=\"login()\">\n                    Login\n                </ion-item>\n                <ion-item menu-close href=\"#/app/buscar\">\n                    Buscar\n                </ion-item>\n                <ion-item menu-close href=\"#/app/detalle\">\n                    Detalle\n                </ion-item>\n            </ion-list>\n        </ion-content>\n    </ion-side-menu>\n</ion-side-menus>\n");
$templateCache.put("map/fab.tmpl.html","<button ng-click=\"vm.openWizard()\" id=\"fab-friends\" class=\"button button-fab button-fab-bottom-right on expanded button-energized-900 spin\">\n	<i class=\"icon ion-plus\"></i>\n</button>\n");
$templateCache.put("map/map.tmpl.html","<ion-view title=\"Mapa de Paradas\">\n    <ion-nav-buttons side=\"right\">                \n        <button ng-click=\"vm.locate();\" class=\"button-icon icon ion-pinpoint\"></button>\n    </ion-nav-buttons>\n\n\n\n    <ion-content  scroll=\"false\" data-tap-disabled=\"true\">\n           <div  id=\"map\"></div>\n\n    </ion-content>\n</ion-view>\n");
$templateCache.put("search/search.tmpl.html","<ion-view title=\"Busqueda\">\n    <ion-nav-buttons side=\"left\">\n        <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\n    </ion-nav-buttons>\n    <ion-nav-buttons side=\"right\">\n        <button ng-click=\"vm.locate();\" class=\"button button-icon icon ion-pinpoint\"></button>\n    </ion-nav-buttons>\n    <ion-content data-tap-disabled=\"true\">\n        \n        <p>BUSQUEDA</p>\n        <p>BUSQUEDA</p>\n        <p>BUSQUEDA</p>\n        <p>BUSQUEDA</p>\n        <p>BUSQUEDA</p>\n        <p>BUSQUEDA</p>\n        <p>BUSQUEDA</p>\n        <p>BUSQUEDA</p>\n        <p>BUSQUEDA</p>\n        <p>BUSQUEDA</p>\n        \n    </ion-content>\n</ion-view>\n");
$templateCache.put("wizard/wizard.tmpl.html","<!-- <ion-view view-title=\"Wizard\"> -->\n	<!-- <ion-content> -->\n 		<ion-nav-view name=\"step-view\"></ion-nav-view>\n<ion-nav-view name=\"step-three-fab\"></ion-nav-view>\n	\n	<!-- </ion-content> -->\n<!-- </ion-view>\n -->\n\n\n");
$templateCache.put("wizard/last/last.tmpl.html","<ion-view view-title=\"confirmacion Parada {{vm.fields.name}}\">\n\n    <ion-content data-tap-disabled=\"true\">\n        <div class=\"list\">\n         \n            <leaflet lf-center=\"vm.fields.coordenadas\" markers=\"vm.map.markers\" height=\"300px\" width=\"100%\"></leaflet>\n            <label class=\"item item-input item-floating-label\">\n                <span class=\"input-label\">Calle</span>\n                <input type=\"text\" ng-model=\"vm.fields.calle\" placeholder=\"Calle\">\n            </label>\n            <label class=\"item item-input item-floating-label\">\n                <span class=\"input-label\">Numero</span>\n                <input type=\"text\" ng-model=\"vm.fields.numero\" placeholder=\"Numero\">\n            </label>\n            <label class=\"item item-input item-floating-label\">\n                <span class=\"input-label\">Coordenadas</span>\n                <input type=\"text\" ng-model=\"vm.fields.coordenadas\" disabled=\"\">\n            </label>\n            <label class=\"item item-input item-select\">\n                <div class=\"input-label\">Paridad</div>\n                <select ng-model=\"vm.fields.paridad\">\n                    <option>PAR</option>\n                    <option>INPAR</option>\n                </select>\n            </label>\n            <label class=\"item item-input item-floating-label\">\n                <span class=\"input-label\">Entre Calle 1</span>\n                <input type=\"text\" ng-model=\"vm.fields.entre1\" placeholder=\"Entre Calle 1\">\n            </label>\n            <label class=\"item item-input item-floating-label\">\n                <span class=\"input-label\">Entre Calle 2</span>\n                <input type=\"text\" ng-model=\"vm.fields.entre2\" placeholder=\"Entre Calle 2\">\n            </label>\n            <label class=\"item item-input item-floating-label\">\n                <span class=\"input-label\">Capacidad</span>\n                <input type=\"text\" ng-model=\"vm.fields.capacidad\" placeholder=\"Capacidad\">\n            </label>\n            <label class=\"item item-input item-floating-label\">\n                <span class=\"input-label\">Observaciones</span>\n                <textarea ng-model=\"vm.fields.observcaciones\" placeholder=\"Observaciones\" name=\"Observaciones\" rows=\"5\"></textarea>\n            </label>\n            <label class=\"item item-input item-select\">\n                <div ng-model=\"vm.fields.lineas\" class=\"input-label\">Linea</div>\n                <select>\n                    <option>59</option>\n                    <option>60</option>\n                    <option selected>68</option>\n                    <option>152</option>\n                </select>\n            </label>\n            <label class=\"item item-input item-select\">\n                <div ng-model=\"vm.fields.ramales\" class=\"input-label\">Ramal</div>\n                <select>\n                    <option>uno</option>\n                    <option>dos</option>\n                    <option selected>tres</option>\n                    <option>cuatro</option>\n                </select>\n            </label>\n            <label class=\"item item-input item-select\">\n                <div class=\"input-label\">Tipo</div>\n                <select ng-model=\"vm.fields.tipo\">\n                    <option>Poste 1 </option>\n                    <option>Poste 2 </option>\n                    <option>Poste 3 </option>\n                    <option>Poste 4 </option>\n                    <option>Refugio 1 </option>\n                    <option>Refugio 2 </option>\n                    <option>No oficial </option>\n                </select>\n            </label>\n            <label class=\"item item-input item-select\">\n                <div class=\"input-label\">Estado</div>\n                <select ng-model=\"vm.fields.estado\">\n                    <option value=\"1\">Bueno</option>\n                    <option value=\"2\">Requiere mantenimiento</option>\n                    <option value=\"3\">infraestructura inexistente</option>\n                    <option calue=\"4\">No oficial</option>\n                </select>\n            </label>\n            <label class=\"item item-input item-select\">\n                <div class=\"input-label\">Foto</div>\n                <img ng-src=\"\" alt=\"\">\n            </label>\n        </div>\n        <button class=\"button button-block\" ng-click=\"vm.next()\">Siguiente</button>\n    </ion-content>\n</ion-view>\nDETAIL TMPL parada calle numero coordenadas paridad entre1 entre2 capacidad observaciones tipo: estado: link_foto revisar recorrido linea ramal direccion descripcion fecha_actualizacion demarcacion cordon_pintado darsena_pintada\n");
$templateCache.put("wizard/step1/step1.tmpl.html","<ion-view view-title=\"Localizacion Nueva Parada\">\n    <ion-nav-buttons side=\"right\">\n        <button ng-click=\"vm.locate();\" class=\"button-icon icon ion-pinpoint\"></button>\n    </ion-nav-buttons>\n    <ion-content data-tap-disabled=\"true\">\n        <div class=\"\">\n            <div style=\"height:400px; width:100%;\" id=\"step1Map\"></div>\n            <!-- <leaflet lf-center=\"vm.map.center\" markers=\"vm.map.markers\" height=\"400px\" width=\"100%\" id=\"step1Map\"></leaflet> -->\n\n        </div>\n        <form ng-submit=\"vm.keyboardSubmit($event)\" navalidate>\n            <div class=\"list\">\n                <label class=\"item item-input item-floating-label\">\n                    <span class=\"input-label\">Calle</span>\n                    <input type=\"text\" ng-model=\"vm.fields.nombre\" next-focus id=\"field1\" placeholder=\"Calle\">\n                </label>\n                <label class=\"item item-input item-floating-label\">\n                    <span class=\"input-label\">Numeracion</span>\n                    <input type=\"number\" ng-model=\"vm.fields.numero\" next-focus id=\"field2\" placeholder=\"Numeracion\">\n                </label>\n                <label class=\"item item-input item-floating-label\">\n                    <span class=\"input-label\">Coordenadas</span>\n                    <span ng-if=\"vm.fields.correccion\" class=\"modification-label\">Corregida</span>\n                    <span ng-if=\"vm.fields.correccion\" class=\"precition-label\"> Precision: {{vm.fields.precision}}Mts</span>\n\n                    <input type=\"text\" ng-model=\"vm.fields.coordenadas\" disabled=\"\">\n                </label>\n                <label class=\"item item-input item-select\">\n                    <div class=\"input-label\">Paridad</div>\n                    <select ng-model=\"vm.fields.paridad\">\n                        <option>PAR</option>\n                        <option>INPAR</option>\n                    </select>\n                </label>\n                <label class=\"item item-input item-floating-label\">\n                    <span class=\"input-label\">Entre Calle 1</span>\n                    <input type=\"text\" ng-model=\"vm.fields.entre1\" placeholder=\"Entre Calle 1\">\n                </label>\n                <label class=\"item item-input item-floating-label\">\n                    <span class=\"input-label\">Entre Calle 2</span>\n                    <input type=\"text\" ng-model=\"vm.fields.entre2\" placeholder=\"Entre Calle 2\">\n                </label>\n                <button class=\"button button-block\" ng-click=\"vm.next()\">Siguiente</button>\n            </div>\n        </form>\n       \n    </ion-content>\n</ion-view>\n");
$templateCache.put("wizard/step2/step2.tmpl.html","<ion-view view-title=\"Linea y ramal\">\n    <ion-nav-buttons side=\"left\">\n        <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\n    </ion-nav-buttons>\n    <ion-content data-tap-disabled=\"true\">\n        <div class=\"list\">\n            <label class=\"item item-input item-select\">\n                <div class=\"input-label\">Linea</div>\n\n            <input \n                ion-autocomplete \n                type=\"text\" \n                select-items-label=\"Select your items...\"\n                 item-value-key=\"label\"\n                  item-view-value-key=\"label\"\n                items-method=\"vm.getLineas()\" \n                ng-model=\"vm.fields.lineas\"\n                class=\"ion-autocomplete\"\n                autocomplete=\"off\" \n                 cancel-label=\"Cancelar\" \n                 model-to-item-method= \"modelToItemMethod\"\n            />\n            </label>\n            \n          <p>  {{vm.fields}}</p>\n<!-- \n            <label class=\"item item-input\">\n                <span class=\"input-label\">Multiple select autocomplete</span>\n                <input ion-autocomplete type=\"text\" readonly=\"readonly\" class=\"ion-autocomplete\" autocomplete=\"off\"\n                       ng-model=\"model\"\n                       item-value-key=\"name\"\n                       item-view-value-key=\"view\"\n                       items-method=\"vm.getLineas()\"\n                       items-method-value-key=\"items\"\n                       placeholder=\"Enter test query ...\"\n                       items-clicked-method=\"vm.itemsClicked(callback)\"\n                       items-removed-method=\"vm.itemsRemoved(callback)\"\n                       max-selected-items=\"3\"/>\n            </label>\n -->\n\n        <!--<label class=\"item item-input item-select\">\n                <div class=\"input-label\">Ramal</div>\n                <select>\n                    <option>uno</option>\n                    <option>dos</option>\n                    <option selected>tres</option>\n                    <option>cuatro</option>\n                </select>\n            </label>-->\n        </div>\n        <button class=\"button button-block\" ng-click=\"vm.next()\">Siguiente</button>\n    </ion-content>\n</ion-view>\n");
$templateCache.put("wizard/step3/fab.tmpl.html","<button ng-click=\"vm.takePicture()\" id=\"fab-friends\" class=\"button button-fab button-fab-bottom-right on expanded button-energized-900 spin\">\n	<i class=\"icon ion-camera\"></i>\n</button>\n");
$templateCache.put("wizard/step3/overlay.tmpl.html","<div class=\"picture-overlay\">\n	<img class=\"image-full\"src=\"vm.picture.src\" alt=\"\">\n	<div class=\"image-caption\">\n		<div class=\"title\">\n			{{vm.picture.title}}\n		</div>\n		<div class=\"subtitle\">\n			{{vm.picture.subtitle}}\n		</div>\n		\n	</div>\n	<button ng-click=\"vm.deletePicture(picture.id)\"  class=\"button button-fab  on expanded button-energized-900 spin\">\n		<i class=\"icon ion-android-close\"></i>\n	</button>\n</div>");
$templateCache.put("wizard/step3/step3.tmpl.html","<ion-view view-title=\"Estado y Foto\">\n\n\n 	<ion-content data-tap-disabled=\"true\">\n	    <div class=\"list\">\n\n	    <div class=\"picture-wrapper\" ng-repeat=\"picture in vm.pictures\">\n		 	<img ng-src = \"{{picture.src}}\">\n		 	<div class=\"caption\">\n		 		<div class=\"title\">{{picture.title}}</div>\n		 		<div class=\"subtitle\">{{picture.subtitle}}</div>\n		 	</div>\n		 	<div class=\"actions-bar\">\n		 		<button ng-click=\"vm.deletePicture(picture.id)\"  class=\"button button-fab on expanded button-energized-900 spin\">\n					<i class=\"icon ion-more\"></i>\n				</button>\n\n		 		<button ng-click=\"vm.deletePicture(picture.id)\"  class=\"button button-fab  on expanded button-energized-900 spin\">\n					<i class=\"icon ion-trash-b\"></i>\n				</button>\n\n		 	</div>\n	    </div>\n		 <button class=\"button button-block\" ng-click=\"vm.next()\">Siguiente</button>\n		</div>\n	</ion-content>\n</ion-view> \n\n\n\n	\n");}]);