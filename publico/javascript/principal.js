var app = angular.module("colegio", []);
app.controller("formulario", function ($scope) {
  var $fCtr = this;

  $fCtr.nombre = 'alejo';
  $fCtr.preguntas = [{pregunta:''}];

  $fCtr.agregarPregunta = function () {
    $fCtr.preguntas.push([{pregunta:''}]);
  };

  $fCtr.eliminarPregunta = function (posicion) {
    $fCtr.preguntas.splice(posicion, 1);
  };

});
