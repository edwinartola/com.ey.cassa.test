/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/ey/cassa/test/com/ey/cassa/test/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});