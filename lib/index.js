'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.middleware = exports.action = exports.TYPE = undefined;

var _reduxActions = require('redux-actions');

var _reduxMiddlewareOneshot = require('redux-middleware-oneshot');

var _reduxMiddlewareOneshot2 = _interopRequireDefault(_reduxMiddlewareOneshot);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = exports.TYPE = 'REDUX_MIDDLEWARE_REACT_NATIVE_NETINFO';
var action = exports.action = (0, _reduxActions.createAction)(TYPE);
var middleware = exports.middleware = (0, _reduxMiddlewareOneshot2.default)(function (dispatch) {
    var handle = function handle(isConnected) {
        return dispatch(action({ isConnected: isConnected }));
    };
    _reactNative.NetInfo.isConnected.fetch().done(handle);
    _reactNative.NetInfo.isConnected.addEventListener('change', handle);
});