(function() {

  var elements = document.querySelectorAll('.minus-plus');
  for (var i = 0; i < elements.length; i++) {
    if (!elements[i].querySelector('input').hasAttribute('disabled')) {
      initNumberField(elements[i]);
    }
  }

  function initNumberField(parent) {
    var input = parent.querySelector('input');
    var minus = parent.querySelector('.minus-plus__btn--minus');
    var plus = parent.querySelector('.minus-plus__btn--plus');

    minus.addEventListener('click', function() {
      changeNumber(false);
    });
    plus.addEventListener('click', function() {
      changeNumber(true);
    });

    function changeNumber(operation) {
      var value = parseFloat(input.value);

      if (isNaN(value)) {
        value = 0;
      }
      if (operation) {
        input.value = value + 1;
        if (input.value > 30) {
          input.value = 30;
        }
      } else {
          input.value = value - 1;
        if (input.value < 1) {
          input.value = 0;
        }
      }
    }
  }

})();