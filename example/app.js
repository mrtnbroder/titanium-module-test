// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
// var label = Ti.UI.createLabel();
// win.add(label);
win.open();

// TODO: write your module tests here
var TestCam = require('TestCam');
Ti.API.info("module is => " + TestCam);

// label.text = TestCam.example();

// Ti.API.info("module exampleProp is => " + TestCam.exampleProp);
// TestCam.exampleProp = "This is a test value";
var bla = TestCam.createView();

// win.add(bla);

bla.open();

// Ti.API.info("camera is => " + TestCam.isCameraAvailable());
// var bla = TestCam.createView();

// bla.takePhoto();

// Ti.API.info("bla is => " + bla);

// bla.open();