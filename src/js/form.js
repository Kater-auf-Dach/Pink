(function() {

  if (!('FormData' in window)) {
    return;
  }

  var ReadyState = {
    'UNSENT': 0,
    'OPENED': 1,
    'HEADERS_RECEIVED': 2,
    'LOADING': 3,
    'DONE': 4
  };

  var KEY_ESC = 27;

  var REQUEST_SUCCESS = 200;
  var REQUEST_FAILURE = 400;
  var REQUEST_FAILURE_TIMEOUT = 10000;

  var modalSuccess = document.querySelector('.modal--success');
  var modalFailure = document.querySelector('.modal--failure');
  var form = document.querySelector('form');
  var modalWindow;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var data = new FormData(form);

    request(data, function(response) {
      console.log(response);
    });
  });

  function request(data, fn) {
    var xhr = new XMLHttpRequest();
    var time = (new Date()).getTime();
    xhr.timeout = REQUEST_FAILURE_TIMEOUT;
    xhr.open('post', 'http://simonenko.su/academy/echo?' + time);

    xhr.onreadystatechange = function(event) {
      var loadedXhr = event.target;
      if (loadedXhr.readyState === ReadyState.DONE) {
        if (loadedXhr.status === REQUEST_SUCCESS) {
          modalWindow = modalSuccess;
          initListener(modalWindow);
          fn(xhr.responseText);
          form.reset();
        }
        if (loadedXhr.status > REQUEST_FAILURE) {
          modalWindow = modalFailure;
          initListener(modalWindow);
        }
      }
      xhr.ontimeout = function() {
        modalWindow = modalFailure;
        initListener(modalWindow);
      };
    };
    xhr.send(data);
  }

  var initListener = function(modalWindow) {
    modalWindow.classList.add('modal--show');
    var modalButton = modalWindow.querySelector('button');

    modalButton.addEventListener('click', function() {
      modalWindow.classList.remove('modal--show');
    });

    window.addEventListener('keydown', function(e) {
      if (e.keyCode === KEY_ESC) {
        modalWindow.classList.remove('modal--show');
      }
    });
  }

})();