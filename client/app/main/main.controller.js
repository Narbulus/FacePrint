'use strict';
(function() {

function MainController($scope, $http) {
  var self = this;
  this.awesomeThings = [];
  this.myInterval = 0;
  this.slides = {
    {text: '<p>
              A face is an object that has many features.
            <p>
            <ul>
              <li>numberOfEyes</li>
              <li>numberOfNoses</li>
              <li>numberOfMouths</li>
              <li>name</li>
              <li>hasLongHair</li>
            </ul>'
    }
  }

  $http.get('/api/things').then(function(response) {
    self.awesomeThings = response.data;
  });

  this.addThing = function() {
    if (self.newThing === '') {
      return;
    }
    $http.post('/api/things', { name: self.newThing });
    self.newThing = '';
  };

  this.deleteThing = function(thing) {
    $http.delete('/api/things/' + thing._id);
  };
}

angular.module('facePrintApp')
  .controller('MainController', MainController);

})();
