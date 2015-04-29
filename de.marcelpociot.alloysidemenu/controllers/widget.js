var args = arguments[0] || {};

$.module = require('de.marcelpociot.sidemenu');

// convert children to args based on role
if (args.children) {

	_.each(args.children, function(child) {

		// fix: https://jira.appcelerator.org/browse/TC-3583
		if (!child) {
			return;
		}

		var role = child.role;

		if (role) {
			args[role] = child;
		}
	});
}

// delete irrelevant args
delete args.id;
delete args.__parentSymbol;
delete args.children;

// create actual drawer
$.instance = $.module.createSideMenu(args);

// add as top level view
$.addTopLevelView($.instance);

// expose properties, setters and getters
_.each([
	'contentView',
	'contentWindow',
	'setContentWindow',
	'leftMenuView',
	'rightMenuView',
	'backgroundImage',
	'contentViewScaleValue',
	'scaleContentView',
	'panGestureEnabled',
	'panFromEdge',
	'scaleBackgroundImageView',
	'parallaxEnabled'

], function(key) {
	var cc = key[0].toUpperCase() + key.substring(1);

	var get = exports['get' + cc] || ($['get' + cc] = function() {
		return $.instance[key];
	});
	var set = exports['set' + cc] || ($['set' + cc] = function(val) {
		$.instance[key] = val;
	});

	Object.defineProperty($, key, {
		get: get,
		set: set
	});
});

// exporse other functions
_.each([
	'hideMenuViewController',
	'presentLeftMenuViewController',
	'presentRightMenuViewController',
	'open',
	'close'

], function(fn) {
	if (!exports[fn]) {

		// we need wrapper function for Android
		exports[fn] = function() {
			return $.instance[fn]();
		};
	}
});

// events
exports.on = function(event, callback, context) {
	return $.instance.addEventListener(event, callback);
};

exports.off = function(event, callback, context) {
	return $.instance.removeEventListener(event, callback);
};

exports.trigger = function(event, args) {
	return $.instance.fireEvent(event, args);
};

exports.addEventListener = exports.on;
exports.removeEventListener = exports.off;
exports.fireEvent = exports.trigger;
