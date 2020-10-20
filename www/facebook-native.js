var exec = require('cordova/exec')

exports.getLoginStatus = function getLoginStatus (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'getLoginStatus', [])
}

exports.showDialog = function showDialog (options, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'showDialog', [options])
}

exports.login = function login (permissions, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'login', permissions)
}

exports.logEvent = function logEvent (name, params, valueToSum, s, f) {
  // Prevent NSNulls getting into iOS, messes up our [command.argument count]
  if (!params && !valueToSum) {
    exec(s, f, 'FacebookConnectPlugin', 'logEvent', [name])
  } else if (params && !valueToSum) {
    exec(s, f, 'FacebookConnectPlugin', 'logEvent', [name, params])
  } else if (params && valueToSum) {
    exec(s, f, 'FacebookConnectPlugin', 'logEvent', [name, params, valueToSum])
  } else {
    f('Invalid arguments')
  }
}

exports.logPurchase = function logPurchase (value, currency, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logPurchase', [value, currency])
}

exports.logPurchaseWithContentInfo = function logPurchaseWithContentInfo (value, currency, contentType, content, contentId, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logPurchase', [value, currency, contentType, content, contentId])
}

exports.logAdClickEvent = function logAdClickEvent (adType, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logAdClickEvent', [adType])
}

exports.logViewContent = function logViewContent (contentType, content, contentId, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logViewContent', [contentType, content, contentId])
}

exports.logViewContentWithCurrency = function logViewContentWithCurrency (contentType, content, contentId, currency, value, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logViewContent', [contentType, content, contentId, currency, value])
}

exports.logEventSearch = function logEventSearch (contentType, content, contentId, searchString, successResult, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logEventSearch', [contentType, content, contentId, searchString, successResult])
}

exports.logEventProductCartAdd = function logEventProductCartAdd (contentType, content, contentId, currency, value, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logEventProductCartAdd', [contentType, content, contentId, currency, value])
}

exports.logEventProductCustomize = function logEventProductCustomize ( s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logEventProductCustomize', [])
}

exports.logEventInitiateCheckout = function logEventInitiateCheckout (contentType, content, contentId, nrItems, hasPaymentInfo, currency, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logEventInitiateCheckout', [contentType, content, contentId, nrItems, hasPaymentInfo, currency])
}

exports.getAccessToken = function getAccessToken (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'getAccessToken', [])
}

exports.logout = function logout (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logout', [])
}

exports.api = function api (graphPath, permissions, s, f) {
  permissions = permissions || []
  exec(s, f, 'FacebookConnectPlugin', 'graphApi', [graphPath, permissions])
}

exports.appInvite = function appLinks (options, s, f) {
  options = options || {}
  exec(s, f, 'FacebookConnectPlugin', 'appInvite', [options])
}

exports.getDeferredApplink = function (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'getDeferredApplink', [])
}

exports.activateApp = function (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'activateApp', [])
}

exports.getDeferredApplink = function (s, f) {
	  exec(s, f, 'FacebookConnectPlugin', 'getDeferredApplink', [])
}
