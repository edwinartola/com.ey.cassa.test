/*global QUnit*/

sap.ui.define([
	"com/ey/cassa/test/com/ey/cassa/test/controller/View.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View Controller");

	QUnit.test("I should test the View controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});