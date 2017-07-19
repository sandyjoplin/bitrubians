'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
    .config(function ($stateProvider, $urlRouterProvider) {

        // ROUTING with ui.router
        $urlRouterProvider.otherwise('/main/list');
        $stateProvider
        // this state is placed in the <ion-nav-view> in the index.html
            .state('main', {
                url: '/main',
                abstract: true,
                templateUrl: 'main/templates/menu.html',
                controller: 'MenuCtrl as menu'
            })
            .state('main.list', {
                url: '/list',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/list.html',
                        // controller: '<someCtrl> as ctrl'
                    }
                }
            })
            .state('main.listDetail', {
                url: '/list/detail',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/list-detail.html',
                        // controller: '<someCtrl> as ctrl'
                    }
                }
            })
            .state('main.debug', {
                url: '/debug',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/debug.html',
                        controller: 'DebugCtrl as ctrl'
                    }
                }
            })
            .state('main.login', {
                url: '/login',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/login.html',
                        controller: 'LoginCtrl as login'
                    }
                }
            })
            .state('main.iniciar', {
                url: '/iniciar',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/iniciar-sesion.html',
                        controller: 'IniciarSesionCtrl as iniciar'
                    }
                }
            })
            .state('main.registrate', {
                url: '/registrate',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/registrate.html',
                        controller: 'RegistrateCtrl as registrate'
                    }
                }
            })
            .state('main.conocenos', {
                url: '/conocenos',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/conocenos.html',
                        controller: 'ConocenosCtrl as conocenos'
                    }
                }
            })
            .state('main.invita', {
                url: '/invita',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/invita.html',
                        controller: 'InvitaCtrl as invita'
                    }
                }
            })
            .state('main.listo', {
                url: '/listo',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/listo.html',
                        controller: 'ListoCtrl as listo'
                    }
                }
            })
            .state('main.home', {
                url: '/home',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/home.html',
                        controller: 'HomeCtrl as home'
                    }
                }
            })
            .state('main.llenarPerfil', {
                url: '/llenarPerfil',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/llenar-perfil.html',
                        controller: 'LlenarPerfilCtrl as llenarPerfil'
                    }
                }
            })
            .state('main.bit', {
                url: '/bit',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/bit.html',
                        controller: 'BitCtrl as bit'
                    }
                }
            })
            .state('main.beats', {
                url: '/beats',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/beats.html',
                        controller: 'BeatsCtrl as beats'
                    }
                }
            })
            .state('main.emocional', {
                url: '/emocional',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/emocional.html',
                        controller: 'EmocionalCtrl as emocional'
                    }
                }
            })
            .state('main.agenda', {
                url: '/agenda',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/agenda.html',
                        controller: 'AgendaCtrl as agenda'
                    }
                }
            })
            .state('main.donaciones', {
                url: '/donaciones',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/donaciones.html',
                        controller: 'DonacionesCtrl as donaciones'
                    }
                }
            })
            .state('main.tarjeta', {
                url: '/tarjeta',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/tarjeta.html',
                        controller: 'TarjetaCtrl as tarjeta'
                    }
                }
            })
            .state('main.facturas', {
                url: '/facturas',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/facturas.html',
                        controller: 'FacturasCtrl as facturas'
                    }
                }
            })
            .state('main.configuracion', {
                url: '/configuracion',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/configuracion.html',
                        controller: 'ConfiguracionCtrl as configuracion'
                    }
                }
            })
            .state('main.ayuda', {
                url: '/ayuda',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/ayuda.html',
                        controller: 'AyudaCtrl as ayuda'
                    }
                }
            })
            .state('main.tuComunidad', {
                url: '/tuComunidad',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/tu-comunidad.html',
                        controller: 'TuComunidadCtrl as tuComunidad'
                    }
                }
            })
            .state('main.amigo', {
                url: '/amigo',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/amigo.html',
                        controller: 'AmigoCtrl as amigo'
                    }
                }
            })
            .state('main.comentarios', {
                url: '/comentarios',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/comentarios.html',
                        controller: 'ComentariosCtrl as comentarios'
                    }
                }
            })
            .state('main.expediente', {
                url: '/expediente',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/expediente.html',
                        controller: 'ExpedienteCtrl as expediente'
                    }
                }
            })
            .state('main.nuevaTarjeta', {
                url: '/nuevaTarjeta',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/nueva-tarjeta.html',
                        controller: 'NuevaTarjetaCtrl as nuevaTarjeta'
                    }
                }
            })
            .state('main.agregarRfc', {
                url: '/agregarRfc',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/agregar-rfc.html',
                        controller: 'AgregarRfcCtrl as agregarRfc'
                    }
                }
            })
            .state('main.preguntas', {
                url: '/preguntas',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/preguntas.html',
                        controller: 'PreguntasCtrl as preguntas'
                    }
                }
            })
            .state('main.historicoRecetas', {
                url: '/historicoRecetas',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/historico-recetas.html',
                        controller: 'HistoricoRecetasCtrl as historicoRecetas'
                    }
                }
            })
            .state('main.consultasPasadas', {
                url: '/consultasPasadas',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/consultas-pasadas.html',
                        controller: 'ConsultasPasadasCtrl as consultasPasadas'
                    }
                }
            })
            .state('main.receta', {
                url: '/receta',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/receta.html',
                        controller: 'RecetaCtrl as receta'
                    }
                }
            })
            .state('main.consulta', {
                url: '/consulta',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/consulta.html',
                        controller: 'ConsultaCtrl as consulta'
                    }
                }
            })
            .state('main.consultas', {
                url: '/consultas',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/consultas.html',
                        controller: 'ConsultasCtrl as consultas'
                    }
                }
            })
            .state('main.perfilMedico', {
                url: '/perfilMedico',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/perfil-medico.html',
                        controller: 'PerfilMedicoCtrl as perfilMedico'
                    }
                }
            })
            .state('main.recomendar', {
                url: '/recomendar',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/recomendar.html',
                        controller: 'RecomendarCtrl as recomendar'
                    }
                }
            })
           .state('main.agregarMedico', {
                url: '/agregarMedico',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/agregar-medico.html',
                        controller: 'AgregarMedicoCtrl as agregarMedico'
                    }
                }
            })
           .state('main.dependiente', {
                url: '/dependiente',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/dependiente.html',
                        controller: 'DependienteCtrl as dependiente'
                    }
                }
            })
         .state('main.alerta', {
                url: '/alerta',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/alerta.html',
                        controller: 'AlertaCtrl as alerta'
                    }
                }
            })
          .state('main.alertaUno', {
                url: '/alertaUno',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/alerta-uno.html',
                        controller: 'AlertaUnoCtrl as alertaUno'
                    }
                }
            })
           .state('main.alertaDos', {
                url: '/alertaDos',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/alerta-dos.html',
                        controller: 'AlertaDosCtrl as alertaDos'
                    }
                }
            })
           .state('main.donacionesUno', {
                url: '/donacionesUno',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/donaciones-uno.html',
                        controller: 'DonacionesUnoCtrl as donacionesUno'
                    }
                }
            })
          .state('main.alertaTres', {
                url: '/alertaTres',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/alerta-tres.html',
                        controller: 'AlertaTresCtrl as alertaTres'
                    }
                }
            })
        .state('main.alertaCuatro', {
                url: '/alertaCuatro',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/alerta-cuatro.html',
                        controller: 'AlertaCuatroCtrl as alertaCuatro'
                    }
                }
            })
          .state('main.alertaCinco', {
                url: '/alertaCinco',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/alerta-cinco.html',
                        controller: 'AlertaCincoCtrl as alertaCinco'
                    }
                }
            })
             .state('main.donacionesDos', {
                url: '/donacionesDos',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/donaciones-dos.html',
                        controller: 'DonacionesDosCtrl as donacionesDos'
                    }
                }
            })
         .state('main.agendaUno', {
                url: '/agendaUno',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/agenda-uno.html',
                        controller: 'AgendaUnoCtrl as agendaUno'
                    }
                }
            })
         .state('main.agendaCita', {
                url: '/agendaCita',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/agenda-cita.html',
                        controller: 'AgendaCitaCtrl as agendaCita'
                    }
                }
            })
        .state('main.compartir', {
                url: '/compartir',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/compartir.html',
                        controller: 'CompartirCtrl as compartir'
                    }
                }
            })
          .state('main.compartirPrivacidad', {
                url: '/compartirPrivacidad',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/compartir-privacidad.html',
                        controller: 'CompartirPrivacidadCtrl as compartirPrivacidad'
                    }
                }
            })
        .state('main.nuevoDependiente', {
                url: '/nuevoDependiente',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/nuevo-dependiente.html',
                        controller: 'NuevoDependienteCtrl as nuevoDependiente'
                    }
                }
            })
         .state('main.grupos', {
                url: '/grupos',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/grupos.html',
                        controller: 'GruposCtrl as grupos'
                    }
                }
            })
           .state('main.nuevoGrupo', {
                url: '/nuevoGrupo',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/nuevo-grupo.html',
                        controller: 'NuevoGrupoCtrl as nuevoGrupo'
                    }
                }
            })
         .state('main.grupoUno', {
                url: '/grupoUno',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/grupo-uno.html',
                        controller: 'GrupoUnoCtrl as grupoUno'
                    }
                }
            })
         .state('main.miembrosGrupos', {
                url: '/miembrosGrupos',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/miembros-grupos.html',
                        controller: 'MiembrosGruposCtrl as miembrosGrupos'
                    }
                }
            })
          .state('main.chatGrupo', {
                url: '/chatGrupo',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/chat-grupo.html',
                        controller: 'ChatGrupoCtrl as chatGrupo'
                    }
                }
            })
         .state('main.servicios', {
                url: '/servicios',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/servicios.html',
                        controller: 'ServiciosCtrl as servicios'
                    }
                }
            })
         .state('main.notificaciones', {
                url: '/notificaciones',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/notificaciones.html',
                        controller: 'NotificacionesCtrl as notificaciones'
                    }
                }
            })
        .state('main.compartirPublicacion', {
                url: '/compartirPublicacion',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/compartir-publicacion.html',
                        controller: 'CompartirPublicacionCtrl as compartirPublicacion'
                    }
                }
            })
           .state('main.modales', {
                url: '/modales',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/modales.html',
                        controller: 'ModalesCtrl as modales'
                    }
                }
            })
          .state('main.cambioCelular', {
                url: '/cambioCelular',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/cambio-celular.html',
                        controller: 'CambioCelularCtrl as cambioCelular'
                    }
                }
            })
           .state('main.cambiocelularUno', {
                url: '/cambiocelularUno',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/cambiocelular-uno.html',
                        controller: 'CambiocelularUnoCtrl as cambiocelularUno'
                    }
                }
            })
          .state('main.cambiocelularDos', {
                url: '/cambiocelularDos',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/cambiocelular-dos.html',
                        controller: 'CambiocelularDosCtrl as cambiocelularDos'
                    }
                }
            })
           .state('main.cambiocelularTres', {
                url: '/cambiocelulaTress',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/cambiocelular-tres.html',
                        controller: 'CambiocelularTresCtrl as cambiocelularTres'
                    }
                }
            })
           .state('main.bloquear', {
                url: '/bloquear',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/bloquear.html',
                        controller: 'BloquearCtrl as bloquear'
                    }
                }
            }) .state('main.videollamada', {
                url: '/videollamada',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/videollamada.html',
                        controller: 'VideollamadaCtrl as videollamada'
                    }
                }
            });
    
    }).config(function ($ionicConfigProvider) {
    $ionicConfigProvider.form.checkbox("circle");
    console.log('configurado');
    
});



