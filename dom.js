(function (win, doc) {
  'use strict';

  function DOM(selector) {
    if (!(this instanceof DOM))
      return new DOM(selector);
    this.element = doc.querySelectorAll(selector);
    return this.get();
  }

  DOM.prototype.forEach = function (callback) {
    Array.prototype.forEach.call(this.element, callback);
  };

  DOM.prototype.off = function (tipoEvento, callback) {
    Array.prototype.forEach.call(this.element, function (currentValue, indice) {
      currentValue.removeEventListener(tipoEvento, callback, false);
    });
  };

  DOM.prototype.on = function (tipoEvento, callback) {
    Array.prototype.forEach.call(this.element, function (currentValue, indice) {
      currentValue.addEventListener(tipoEvento, callback, false);
    });
  };

  DOM.prototype.get = function (indice) {
    if (this.element.length === 1)
      return this.element[0];
    if (indice)
      return this.element[indice];
    return this.element;
  };

  DOM.isType = function (value, tipo) {
    var tipos = {
      'array': '[object Array]',
      'object': '[object Object]',
      'number': '[object Number]',
      'string': '[object String]',
      'undefined': '[object Undefined]',
      'null': '[object Null]'
    };
    return Object.prototype.toString.call(value) === tipos[tipo];
  };
  win.DOM = DOM;
})(window, document);
