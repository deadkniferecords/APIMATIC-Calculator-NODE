/**
  * @module APIMATICCalculatorLib
  *  
  * Simple calculator API hosted on APIMATIC
  */

var Configuration = require('./configuration');
var Servers = require('./Servers');
var Environments = require('./Environments');
var Logger = require('./LogConfig');
var BaseController = require('./Controllers/BaseController');
var SimpleCalculatorController = require('./Controllers/SimpleCalculatorController');
var APIException = require('./Exceptions/APIException');


function initializer () { }

//Main functional components of APIMATICCalculatorLib
initializer.Configuration = Configuration;
initializer.Servers = Servers;
initializer.Environments = Environments;
initializer.Logger = Logger;
initializer.Logger();
initializer.BaseController = BaseController;
initializer.SimpleCalculatorController = SimpleCalculatorController;

//Main Models of APIMATICCalculatorLib

//Main Exceptions of APIMATICCalculatorLib
initializer.APIException = APIException;

module.exports = initializer;
