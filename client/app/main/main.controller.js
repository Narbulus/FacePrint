(function() {
  'use strict';

  angular.module('facePrintApp', ['ui.bootstrap'])
    .controller('MainController', MainController);

  function MainController($scope, $http) {
    var self = this;
    var slides = slides=[{text:'<p>A face is an object that has many features</p><ul><li>number of eyes</li><li>numberOfNoses</li><li>numberOfMouths</li><li>name</li><li>hasLongHair</li></ul></p>'},
      {text: '<p>Look, your face already has two features: numberOfEyes and name. Try changing the number of eyes, or rename your face.</p>'},
      {text: '<p>Neat! Now try giving your face a nose, or two, or three... This can be done by changing the numberOfNoses field of your face, similar to numberOfEyes.</p>'},
      {text: '<p>Good! Can you guess how to change the number of mouths that your face has? Hint: your face has a numberOfMouths field.</p>'},
      {text: '<p>So far, all the values you have been giving your face have been numbers. However, some fields store other values, such as booleans.</p>'},
      {text: '<p>Numbers can be 1 or 6, but a boolean can only be True or false</p>'},
      {text: '<p>One boolean (true/false) field that your face has is hasLongHair. What do you think face.hasLongHair = False; will do? Try it!</p>'},
      {text: '<p>Now, use False to try taking away your face\'s long hair. Change it back again if you preferred it long!</p>'},
      {text: '<p>You are getting more comfortable with booleans! Now, try changing the boolean field hasLargeEyes. Can you make the eyes large? Can you make them not large again with False?</p>'},
      {text: '<p>Feel free to tweak your face until you are ready to print it.</p>'}];
    this.slides = slides;

    
    var canvas = document.getElementById("face_drawing");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,150,75);
    this.myInterval = 0;

    /*$http.get('/api/things').then(function(response) {
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
    };*/
  }
})();
