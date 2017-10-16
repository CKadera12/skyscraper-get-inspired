(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,160,600],[218,706,42,87],[236,602,47,54],[162,706,54,94],[162,602,72,102],[162,0,160,600],[0,602,160,201]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.skyscraper6trace = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.skyscrapercranberries = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.skyscrapergravy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.skyscrapergreenberries = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.skyscraperpumpkin = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.skyscrapertable = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.skyscraperturkey = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WFM_Logo_White_RGBai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(175,175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAaQgKgLAAgPQAAgOAKgKQAKgLAOABQAPgBAKALQAKAKAAAOQAAAPgKALQgKAJgPABQgOgBgKgJgAAWAYIgPgVQANgBAAgNQAAgPgRAAIgTAAIAAAyIAJAAIAAgVIAFAAIAOAVIAKAAg");
	this.shape_1.setTransform(305.4,234.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgDAAgFIAAgtQAAgLANAAIA+AAQARAAAKAJQALAJAAAPQAAAQgLAJQgKAJgRAAg");
	this.shape_2.setTransform(163.9,260);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(305.6,233);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QAog/BHAAQBGAAAoA/QAqBAAABqQAABrgpBAQgpA/hFAAQhIAAgog+g");
	this.shape_4.setTransform(126.2,205.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgIAAADgIIAZgyQABgDADAAQADAAACADIAZAzQABADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_5.setTransform(130.7,263.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDtQgngDgNgHQgVgLAAghIAAljQAAghAKgMQAKgLAcgFIAdgDQBLAAAqA/QArA/AABvQAABxgrA/QgqA8hGAAIgJAAg");
	this.shape_6.setTransform(239.5,205);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QApg/BGAAQBFAAAqA/QApBAAABqQAABrgpBAQgpA/hGAAQhGAAgpg+g");
	this.shape_7.setTransform(181.9,205.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,350);


(lib.recipes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBTIgRgDIgFADIgFABIgDgBIgEgCQgFgEgEgNQgFgNAAgMQAAgFADgDQACgEAEAAQAIAAAHANIAHAKQAEAGAJAEQAIADAIAAQALAAAGgFQAGgFAAgJQAAgOgagNIgJgEQgZgMgJgKQgIgKAAgQQAAgVAOgNQAPgNAXAAIAKABIAMACIAHgDIAFgBQAIAAAHANQAIAMAAAOQAAAGgDADQgCADgFAAQgDAAgEgDQgDgDgFgIQgGgKgHgEQgGgEgJAAQgIAAgGAGQgGAFAAAIQAAAIAGAFQAGAGATAKIACABQAsAVAAAaQAAAWgRAPQgRAPgaAAg");
	this.shape.setTransform(50.5,-13.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzA8QgXgXAAgiQAAglAXgZQAYgYAjAAQAfAAASASQASARAAAfQAAAJgDADQgDAEgMAAIg8AAQgGAAgCgDQgDgDAAgEQAAgEADgCQACgDAGAAIAgAAIAIgBQACgBAAgDQAAgQgKgKQgKgLgPAAQgTAAgJAQQgJASAAAXQAAAYANASQANATATAAQAMAAAIgEQAIgCAIgFIAGgFQAIgHAEAAQAEAAACADQACACAAADQAAAFgEAFQgEAGgGAFQgOAMgNAEQgNAGgQAAQghAAgWgYg");
	this.shape_1.setTransform(35.3,-13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhNBtQgIgCAAgHQAAgFAHgDIAIgEQADgEABgMQABgNAAgoIAAgZQAAgrgBgNQgCgNgDgCIgHgDQgKgDAAgFQAAgEADgDIAJgFIAXgHQALgDAFAAQAEAAACADQACACAAAGIAAAHIABADIABACIAFgFIAHgEQAKgIAIgDQAJgEAJAAQAeAAAUAWQASAWAAAjQAAAlgVAZQgWAZggAAQgNAAgGgEQgFgEAAgHQAAgDADgDQADgCAEAAIAEAAIAFABQASAAALgPQALgOgBgZQABgbgMgRQgMgQgSAAQgQAAgJAJQgKAJAAAYIAABlIABAQQABAHACACQABACAIACIAGACIADADIABAFQABAGgKACQgJADgXAAQgXAAgIgDg");
	this.shape_2.setTransform(16.9,-11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcBzQgIgDAAgHQAAgGAIgCIAEgCQAFgDABgFQACgFAAgMIAAgLIAAgNIAAgRQAAgZgCgGQgBgJgDgBIgIgDQgJgDAAgGQAAgDADgCQADgEAHgDIAYgHIAQgDQAEAAACADQACADAAAHIAAAKIAAAHIgCAoIAAABIAAAnQAAAQABAGQACAHADABIAGADQAIADAAAGQAAAGgIADQgHACgVAAQgYAAgIgCgAgThQQgHgFAAgJQAAgJAIgGQAHgHALAAQAKAAAGAGQAHAGAAAIQAAAKgHAFQgIAGgKABQgKAAgHgGg");
	this.shape_3.setTransform(3.2,-17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyA8QgXgXAAgiQAAglAYgYQAYgZAjAAQAbAAASAPQATANAAASQAAAIgFAFQgGAEgIAAQgIAAgFgDQgFgEgFgOQgFgLgGgFQgHgEgJAAQgSAAgKANQgLAOAAAZQAAAbAPATQAPASAWAAQAIAAAHgDQAHgBAGgFIAGgFQAJgGAFAAQADAAACACQACACAAADQAAAEgDAGQgEAFgFAFQgNALgNAFQgOAFgQABQggAAgXgYg");
	this.shape_4.setTransform(-9.4,-13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzA8QgXgXAAgiQAAglAXgZQAYgYAjAAQAfAAASASQASARAAAfQAAAJgDADQgDAEgMAAIg8AAQgGAAgCgDQgDgDAAgEQAAgEADgCQACgDAGAAIAgAAIAIgBQACgBAAgDQAAgQgKgKQgKgLgPAAQgTAAgJAQQgJASAAAXQAAAYANASQANATATAAQAMAAAIgEQAIgCAIgFIAGgFQAIgHAEAAQAEAAACADQACACAAADQAAAFgEAFQgEAGgGAFQgOAMgNAEQgNAGgQAAQghAAgWgYg");
	this.shape_5.setTransform(-26.1,-13.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjBQQgQgzgLgKQgLgLgQAAQgNAAAAgKQAAgKALAAQAaAAANgKQAMgKAAgWQABgVgNgLQgNgLgZAAQgMAAgEACQgGACgBAEIgBAOIgBAhIAABGIABAwQABALACACIAIAEQAJADAAAHQAAAHgIADQgJACgaAAQgZAAgJgCQgIgDgBgHQAAgHALgEIAGgDQAEgDACgTQABgTAAgyIgBg8QgCgXgBgDQgDgCgIgEQgJgEAAgGQABgFAEgDQAFgDALAAIAjAAIAfgBIAZAAQAkAAASAPQATAPgBAcQABAVgMAPQgNAQgWAGIAAACQARADAKAKQAJALAJAaIADAQQAHAZAJAAIAFgBIAFAAQADAAADADQACACAAADQABAIgKAFQgJAEgPAAQggAAgKglg");
	this.shape_6.setTransform(-45.7,-17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.recipes, new cjs.Rectangle(-60,-38.5,120.1,42.1), null);


(lib.makedeliciousmemories = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("MAKE\nDELICIOUS\nMEMORIES", "18px 'Rescue'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 94;
	this.text.parent = this;
	this.text.setTransform(0,-29.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.makedeliciousmemories, new cjs.Rectangle(-49,-31.8,98,63.7), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.holidaytips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAxQgDgCAAgCIADgGIAEgFIAJgSQADgHAAgEIgBgEIgFgDQgJgDgDgGQgEgFAAgJQAAgLAGgGQAHgIAKABQAKAAAHAJQAHAJAAAPQAAAKgEALQgEAMgLARIgHANQgEADgDAAQgEABgEgCg");
	this.shape.setTransform(31.8,28.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBTIgRgDIgFADIgFABIgDgBIgEgCQgFgEgEgNQgFgNAAgMQAAgFADgDQACgEAEAAQAIAAAHANIAHAKQAEAGAJAEQAIADAIAAQALAAAGgFQAGgFAAgJQAAgOgagNIgJgEQgZgMgJgKQgIgKAAgQQAAgVAOgNQAPgNAXAAIAKABIAMACIAHgDIAFgBQAIAAAHANQAIAMAAAOQAAAGgDADQgCADgFAAQgDAAgEgDQgDgDgFgIQgGgKgHgEQgGgEgJAAQgIAAgGAGQgGAFAAAIQAAAIAGAFQAGAGATAKIACABQAsAVAAAaQAAAWgRAPQgRAPgaAAg");
	this.shape_1.setTransform(19.9,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhNBtQgIgCAAgHQAAgFAHgDIAIgEQADgEACgMQABgNAAgoIAAgZQAAgrgCgNQgBgNgEgCIgIgDQgJgDAAgFQAAgEADgDIAJgFIAXgHQALgDAFAAQAFAAABADQADACAAAGIAAAHIAAADIABACIAFgFIAHgEQAKgIAIgDQAJgEAJAAQAfAAATAWQASAWAAAjQAAAlgVAZQgWAZggAAQgNAAgGgEQgFgEAAgHQAAgDADgDQADgCAEAAIAEAAIAFABQASAAAKgPQALgOAAgZQAAgbgLgRQgMgQgSAAQgQAAgJAJQgKAJAAAYIAABlIABAQQAAAHACACQADACAGACIAHACIADADIABAFQAAAGgJACQgJADgXAAQgXAAgIgDg");
	this.shape_2.setTransform(3.1,23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcByQgIgCAAgIQAAgEAIgEIAEgCQAFgCABgFQACgGAAgMIAAgLIAAgMIAAgRQAAgZgCgHQgBgHgDgCIgIgDQgJgDAAgFQAAgEADgDQADgCAHgDIAYgIIAQgDQAEAAACADQACADAAAIIAAAJIAAAHIgCAoIAAABIAAAoQAAAOABAHQACAGADACIAGACQAIAEAAAGQAAAGgIACQgHADgVAAQgYAAgIgDgAgThQQgHgFAAgJQAAgJAIgHQAHgGALAAQAKAAAGAGQAHAGAAAJQAAAJgHAGQgIAFgKAAQgKABgHgGg");
	this.shape_3.setTransform(-10.5,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghByQgJgDAAgHQAAgGAJgEQAIgDACgCQACgDABgaIABhLIgBgrIgBgZQgBgFgCgBQgDgBgHAAIgHAAQgLAAgGACQgGADgEAGIgGALIgEALIgFAFQgDACgDAAQgFAAgCgEQgCgFAAgKQAAgVAFgNQAFgNAIAAIACABQAMACAUAAIBdAAQAUAAAMgCIACgBQAIAAAFANQAFANAAAVQAAAKgCAEQgDAFgFAAIgFgCIgFgFIgEgLIgGgLQgEgGgGgDQgGgCgMAAIgGAAQgHAAgCABQgDABgBAFIgBAaIgBAqIABBLQABAaACADQACACAIADQAJAEAAAGQAAAHgJADQgJADgZAAQgYAAgJgDg");
	this.shape_4.setTransform(-25.4,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhJBqQgIgHAAgKQAAgIAGgFQAFgHAIAAIAHACIAFAEIAFAFQAEAHADAAQAIAAAJgMQAIgMAAgMQAAgOgLgZIgCgFIgag2IgOggQgDgGgKgEIgHgEQgCgDAAgDQAAgHAIgDQAJgCAXAAQAYAAAHACQAIACAAAHIgBAFIgDADIgFADQgHACAAADIAEAMIANAgIAMAeQAEAIACAAQACAAAEgIIAKgZIAMgfQAEgMAAgEQAAgFgJgFQgJgFAAgEQAAgFAHgDQAHgDASABQAUAAAGACQAHACAAAHQAAAGgJACIgHACQgJAGgKAbIgFAMIgUAzQgaBCgQAVQgRATgYABQgLgBgIgGg");
	this.shape_5.setTransform(48.3,-11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcBLIgIgIIgHADQgTAOgUAAQgXAAgPgOQgOgOAAgWQAAgZASgOQATgOAhAAQAIAAAEACQAEADAAAGQAAAIgLAAQgPAAgKAIQgKAIAAANQAAANAJAIQAIAHAOAAQAPAAAHgHQAGgGAAgRIAAg8QAAgOgGgIQgGgIgKAAQgIAAgHAEQgHADgGAHIgDAFQgKAMgLAAQgGAAgEgEQgEgEAAgHQAAgPATgLQASgKAeAAQAQAAANAFQANAFAHAIQAFAHACAJQACAKAAAXIAAAzQAAAJABAEQACAFADABIAFABQAKADAAAFQAAAIgLAGQgKAHgPAAQgHAAgIgJg");
	this.shape_6.setTransform(31.8,-14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhFBhQgTgWAAgjQAAgnAVgXQAWgZAiAAIALACQAFABADADQACAEAAAEQAAAJgKAAIgEAAIgEAAQgSAAgLAOQgKANAAAaQAAAbALARQAMARASAAQAQAAAJgKQAJgJAAgSIAAgsIAAhJQAAgLgCgEQgCgFgGgCIgEgBQgKgDAAgGQAAgEAEgDQAEgDAMgFIASgEIAPgCQAFAAADADQACACAAAHIAAAJIgCBiIABBDQABAPADACIALAEQAIACAAAGQAAAHgXAHIgQAFIgMABQgFAAgCgCQgCgDAAgFIAAgIIAAgDIgBgBIgFADIgHAFQgJAIgJADQgJADgKABQgeAAgSgWg");
	this.shape_7.setTransform(14.1,-18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcBzQgIgDAAgHQAAgGAIgCIAEgCQAFgCABgGQACgFAAgMIAAgLIAAgNIAAgRQAAgZgCgGQgBgJgDgBIgIgDQgJgDAAgGQAAgDADgCQADgDAHgEIAYgHIAQgDQAEAAACADQACADAAAHIAAAKIAAAHIgCAoIAAABIAAAnQAAAPABAHQACAHADABIAGADQAIADAAAGQAAAGgIADQgHACgVAAQgYAAgIgCgAgThQQgHgGAAgIQAAgJAIgGQAHgHALAAQAKAAAGAGQAHAGAAAIQAAAKgHAFQgIAHgKAAQgKgBgHgFg");
	this.shape_8.setTransform(-0.6,-18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaBzQgIgCAAgIQAAgEAHgDIAIgFQADgCABgKIABggIAAgZIAAgdIAAgNQAAgogCgLQgBgMgEgCIgJgEQgLgCAAgGQAAgEAEgDQADgCALgEIAWgGIAPgDQAFAAACAEQACACAAAIIAAAMQgCA5AAA6IABA2QABAMACADIAKAEQAHADAAAHQAAAGgIACQgIADgVAAQgXAAgIgDg");
	this.shape_9.setTransform(-9.8,-18.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag6A8QgWgYAAgjQAAgkAYgYQAXgYAjAAQAjABAWAWQAWAXAAAiQAAAkgYAZQgXAZgiAAQgjABgXgYgAgegvQgKANAAAVQAAAfAOAVQANAWATAAQAPAAAKgNQAKgOAAgVQAAgfgOgVQgNgVgTAAQgPAAgKANg");
	this.shape_10.setTransform(-23,-14.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAjBxQgIgDAAgHQAAgHAKgEIAHgDQADgCABgKIABgmIAAgWIgBgGQgDgEgHAAQgIgCgeAAIghABQgKABgCADIgCAEIgBAMIAAANIABAmQABAKADACIAHADQAKAEAAAHQAAAHgIADQgKADgZAAQgZAAgJgDQgJgDAAgHQAAgHAKgEIAHgDQAEgCABgVQACgUAAgvIgCg8QgBgYgCgDQgCgCgIgEQgJgDAAgHQAAgGAIgCQAGgCAegBQAbABAIACQAHACAAAGQAAAHgKADIgHAFQgCABgCAKIgBAvQAAAHAGACQAGACAXABIANAAIAhgCQAKgBAEgCIACgDIAAgGIAAgIIgBgmQgBgJgDgBIgHgFQgKgDAAgHQAAgGAHgCQAIgCAcgBQAdAAAGACQAIADAAAGQAAAHgKADIgIAFQgDACgBAVQgCAWAAArIACA9QABAYACAEQACACAIADQAJADAAAHQAAAHgJADQgJADgZAAQgZAAgKgDg");
	this.shape_11.setTransform(-44.1,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidaytips, new cjs.Rectangle(-58.5,-39.3,117,77.1), null);


(lib.getinspiredturkey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skyscraperturkey();
	this.instance.parent = this;
	this.instance.setTransform(-80,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredturkey, new cjs.Rectangle(-80,-100.5,160,201), null);


(lib.getinspiredtable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skyscrapertable();
	this.instance.parent = this;
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredtable, new cjs.Rectangle(-80,-300,160,600), null);


(lib.getinspiredpumpkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skyscraperpumpkin();
	this.instance.parent = this;
	this.instance.setTransform(-36,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredpumpkin, new cjs.Rectangle(-36,-51,72,102), null);


(lib.getinspiredgreenberries = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skyscrapergreenberries();
	this.instance.parent = this;
	this.instance.setTransform(-27,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredgreenberries, new cjs.Rectangle(-27,-47,54,94), null);


(lib.getinspiredgravy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skyscrapergravy();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredgravy, new cjs.Rectangle(-23.5,-27,47,54), null);


(lib.getinspiredcranberries = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skyscrapercranberries();
	this.instance.parent = this;
	this.instance.setTransform(-21,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredcranberries, new cjs.Rectangle(-21,-43.5,42,87), null);


(lib.ctatext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AgrAyIAAhiIAiAAQAJgBAJADQAKADAIAGQAHAGAFAKIAEAJIABAMIgBAMIgEAKIgFAJIgHAHQgIAFgKAEQgLADgHAAgAgdAmIASAAQAIAAAHgDQAIgCAFgGQAGgEADgIIACgHIABgIIgBgIIgCgHQgDgIgGgEQgFgFgIgCQgHgCgIgBIgSAAg");
	this.shape.setTransform(41.3,-13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D63900").s().p("AggAyIAAhiIA/AAIAAALIgxAAIAAAeIAuAAIAAALIguAAIAAAhIAzAAIAAANg");
	this.shape_1.setTransform(31.8,-13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D63900").s().p("AATAyIgZgtIgOAAIAAAtIgOAAIAAhiIAgAAQAGgBAGACQAHABAEAEQAFADADAFQADAFAAAIQAAAKgHAIQgDADgFABIgJADIAbAugAgUgFIAQAAIAIgBIAHgDQADgBACgDQACgDAAgFQAAgFgCgDIgFgEQgDgDgEAAIgHgBIgRAAg");
	this.shape_2.setTransform(23.5,-13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D63900").s().p("AgGAyIAAhiIANAAIAABig");
	this.shape_3.setTransform(17,-13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D63900").s().p("AggAyIAAhiIAeAAQAHgBAHACQAHACAEADQAFADACAGQADAFAAAHQAAAIgDAEQgCAGgFADQgFADgHACQgGABgHAAIgQAAIAAAsgAgSgFIAPAAIAIAAIAIgEQADgCABgCQACgDAAgFQAAgFgCgDIgFgEQgDgDgEAAIgIgBIgPAAg");
	this.shape_4.setTransform(11.2,-13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D63900").s().p("AgSAxQgIgFgHgGIALgJQAEAFAGADQAFADAHAAIAHgBIAGgDQADgCACgDQABgDAAgFQAAgFgBgDIgGgEIgHgEIgIgDIgKgEIgHgDQgFgEgBgFQgDgEAAgHQAAgHADgGQADgFAFgEQAFgDAGgBIALgCIAIABIAIACQAIADAFAFIgKAKQgDgEgFgDQgFgDgHABIgFAAIgGADQgDACgCAEQgCACAAAFQAAADACADIAEAFIAHADIAGADIALADQAFACAEADQAEADADAEQADAGAAAHQAAAIgEAFQgCAGgFADQgFAFgGABQgGACgGAAQgJAAgJgDg");
	this.shape_5.setTransform(2.7,-13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D63900").s().p("AAZAyIg0hQIAABQIgOAAIAAhiIASAAIAzBOIAAhOIAOAAIAABig");
	this.shape_6.setTransform(-6.6,-13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D63900").s().p("AgGAyIAAhiIANAAIAABig");
	this.shape_7.setTransform(-13.8,-13.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D63900").s().p("AgGAyIAAhXIggAAIAAgLIBNAAIAAALIggAAIAABXg");
	this.shape_8.setTransform(-23.2,-13.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D63900").s().p("AggAyIAAhiIA/AAIAAALIgxAAIAAAeIAuAAIAAALIguAAIAAAhIAzAAIAAANg");
	this.shape_9.setTransform(-31.1,-13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D63900").s().p("AgMAwQgKgEgHgGQgHgIgEgJQgEgJAAgMQAAgLAEgKQAEgJAHgHIAIgGIAJgFQAJgDAKAAIAMABIAKACQAKAEAFAGIgJAKQgFgFgGgDIgIgCIgIgBQgIAAgHADQgHADgFAGQgEAFgEAIQgCAGAAAIQAAAIACAHQAEAIAEAFQAFAFAHADQAHAEAIAAIANgBIALgFIAAgbIgXAAIAAgKIAkAAIAAAuQgIAFgJACIgUACQgLAAgJgEg");
	this.shape_10.setTransform(-41.2,-13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctatext, new cjs.Rectangle(-48.6,-23.9,97.3,21.2), null);


(lib.ctarectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqgCoIAAlOIVBAAIAAFOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectangle, new cjs.Rectangle(-67.2,-16.7,134.5,33.5), null);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.andmore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzA8QgXgXAAgiQAAglAXgZQAYgYAjAAQAfAAASASQASARAAAfQAAAJgDADQgDAEgMAAIg8AAQgGAAgCgDQgDgDAAgEQAAgEADgCQACgDAGAAIAgAAIAIgBQACgBAAgDQAAgQgKgKQgKgLgPAAQgTAAgJAQQgJASAAAXQAAAYANASQANATATAAQAMAAAIgEQAIgCAIgFIAGgFQAIgHAEAAQAEAAACADQACACAAADQAAAFgEAFQgEAGgGAFQgOAMgNAEQgNAGgQAAQghAAgWgYg");
	this.shape.setTransform(61.6,-13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwBQQgIgDAAgHQAAgGAIgCIAEgCQAEgDACgFQACgFAAgMIAAgLIgBgNIAAgKQAAgcgBgJQgBgJgEgCIgHgDQgJgDAAgGQAAgDACgDQADgDAHgDIAWgHIAOgCQAIAAADAVIAAAEIABABQAIgOAJgGQAJgHAJAAQALAAAGAHQAHAGAAAMQAAALgFAGQgFAGgJAAIgIgBIgHgFIgEgGQgBgEgCAAQgLAAgEAPQgEAPAAAwQAAAOABAHQACAIAEABIAHADQAJADAAAGQAAAGgJADQgJACgVAAQgYAAgIgCg");
	this.shape_1.setTransform(47.4,-14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag6A8QgWgYAAgjQAAgjAYgZQAXgYAjAAQAjABAWAWQAWAXAAAiQAAAkgYAZQgXAagiAAQgjAAgXgYgAgegvQgKANAAAVQAAAfAOAVQANAWATAAQAPAAAKgNQAKgOAAgVQAAgfgOgVQgNgVgTAAQgPAAgKANg");
	this.shape_2.setTransform(31.9,-13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA8BxQgJgDAAgHQAAgHAKgEIAHgDQADgCABgHQABgHAAgWIAAgIIAAhDIgBgpIgUA1QgvB6gKAAQgFAAgJgRQgJgQgXg1IgjhQIgBBAIgBAqIABAeQABAHADACIAHADQAKAEAAAHQAAAGgIADQgJADgTABQgSgBgIgDQgIgCAAgIQAAgFAJgEQAJgEABgEQACgHACgpQADgoAAgzIAAgGQAAgQgCgGQgBgFgEgCIgHgEQgLgEAAgHQAAgGAIgCQAHgDAXABIAXAAIAGABQADADAMAcIAJAWIAEAMQAnBfADAAQADAAAPgiQAOgiAUg4IADgKQAFgRAFgGQADgDAGgBIAWAAQAWgBAHADQAHACAAAGQAAAIgJACIgFACQgEADgCAGQgCAHAAAYIACBbQACApABAFQABAFAHACIAEABIAGAEQACACAAAEQAAAHgJADQgJADgaAAQgZAAgIgDg");
	this.shape_3.setTransform(8.4,-17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhFBhQgTgWAAgjQAAgnAVgXQAWgZAiAAIALACQAFABADADQACAFAAAEQAAAIgKAAIgEAAIgEAAQgSAAgLAOQgKANAAAaQAAAaALASQAMARASAAQAQAAAJgKQAJgJAAgSIAAgsIAAhJQAAgLgCgEQgCgFgGgCIgEgBQgKgDAAgFQAAgFAEgDQAEgDAMgFIASgEIAPgDQAFABADADQACACAAAIIAAAIIgCBiIABBDQABAPADACIALAEQAIACAAAFQAAAIgXAHIgQAFIgMABQgFAAgCgDQgCgCAAgFIAAgIIAAgDIgBgBIgFADIgHAFQgJAIgJADQgJADgKABQgegBgSgVg");
	this.shape_4.setTransform(-23.8,-17.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhOBQQgIgDAAgHQAAgGAIgCIAEgCQAEgDACgFQABgFAAgMIAAgLIAAgNIAAgQQAAgZgBgHQgBgJgEgBIgHgDQgKgDAAgGQAAgDADgCQADgEAHgDIAXgHIARgCQAEgBACADQACADAAAEIAAALIABACIABAAIAAAAIABgBIAEgDIADgDQARgQAUAAQALAAALAFQALAFAHAJQAHAJAEALQADANAAAZIAAAVIgBAKIAAAJQAAAMACAFQACAEAEADIAEACQAIACAAAGQAAAHgIADQgHABgZAAQgWAAgIgBQgIgDAAgGQAAgGAIgDIAGgDQAEgCACgHQABgHAAgRQAAgzgGgMQgHgNgRAAQgHAAgIAFQgIAFgEAJQgEAGgBANQgBAMAAAfQAAAQABAFQABAGAEABIAGADQAIADAAAGQAAAGgIADQgIACgVAAQgYAAgIgCg");
	this.shape_5.setTransform(-43.4,-14);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcBLIgIgIIgHADQgTAOgUAAQgXAAgPgOQgOgOAAgWQAAgZASgOQATgOAhAAQAIAAAEACQAEADAAAGQAAAIgLAAQgPAAgKAIQgKAIAAANQAAANAJAIQAIAHAOAAQAPAAAHgHQAGgGAAgRIAAg8QAAgOgGgIQgGgIgKAAQgIAAgHAEQgHADgGAHIgDAFQgKAMgLAAQgGAAgEgEQgEgEAAgHQAAgPATgLQASgKAeAAQAQAAANAFQANAFAHAIQAFAHACAJQACAKAAAXIAAAzQAAAJABAEQACAFADABIAFABQAKADAAAFQAAAIgLAGQgKAHgPAAQgHAAgIgJg");
	this.shape_6.setTransform(-61.2,-13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.andmore, new cjs.Rectangle(-72.5,-38.5,145.1,42.1), null);


(lib.whitelogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WFM_Logo_White_RGBai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.246,0.246,0,0,0,175,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitelogo, new cjs.Rectangle(-43,-43,86.1,86.1), null);


// stage content:
(lib.wideskyscrapergetinspired = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_50 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		
		console.log("this frame works");
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.rollover_color.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.rollover_color.gotoAndPlay(13);
		}
	}
	this.frame_180 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(130).call(this.frame_180).wait(6));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(82.2,302,0.797,0.919,0,0,0,0.1,0.4);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(186));

	// fade-from-white
	this.instance = new lib.blackwideskyscraper();
	this.instance.parent = this;
	this.instance.setTransform(82.1,300);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).wait(177));

	// white-logo
	this.instance_1 = new lib.whitelogo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80,37.1,1.091,1.091);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({scaleX:0.05,scaleY:0.05},0).to({scaleX:1.17,scaleY:1.17,y:37,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1.09,scaleY:1.09,y:37.1},7,cjs.Ease.get(1)).wait(164));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoROJIAArgITrAAIAALgg");
	mask.setTransform(73,90.5);

	// make-delicious-memories
	this.instance_2 = new lib.makedeliciousmemories();
	this.instance_2.parent = this;
	this.instance_2.setTransform(80,139.3);
	this.instance_2.alpha = 0;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({x:79.9,y:50.3},0).to({x:80,y:149.3,alpha:1},10,cjs.Ease.get(1)).to({y:139.3},8,cjs.Ease.get(1)).wait(123));

	// holiday-tips
	this.instance_3 = new lib.holidaytips();
	this.instance_3.parent = this;
	this.instance_3.setTransform(80,215.7);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65).to({alpha:1},10,cjs.Ease.get(1)).wait(111));

	// Recipes
	this.instance_4 = new lib.recipes();
	this.instance_4.parent = this;
	this.instance_4.setTransform(80,284);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75).to({alpha:1},10,cjs.Ease.get(1)).wait(101));

	// and-more
	this.instance_5 = new lib.andmore();
	this.instance_5.parent = this;
	this.instance_5.setTransform(80,319);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(85).to({alpha:1},10,cjs.Ease.get(1)).wait(91));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ArHeIIAAmaIXMAAIAAGag");
	mask_1.setTransform(77.3,192.8);

	// cta-text
	this.instance_6 = new lib.ctatext();
	this.instance_6.parent = this;
	this.instance_6.setTransform(79.5,364.3);
	this.instance_6.alpha = 0;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(97).to({x:79.7,y:307.3},0).to({x:80,y:372.9,alpha:1},10,cjs.Ease.get(1)).to({x:79.5,y:364.3},6,cjs.Ease.get(1)).wait(73));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("ArHfLIAAqZIXMAAIAAKZg");
	mask_2.setTransform(77.3,199.5);

	// cta-rectangle
	this.instance_7 = new lib.ctarectangle();
	this.instance_7.parent = this;
	this.instance_7.setTransform(78.8,350.9);
	this.instance_7.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(97).to({x:80,y:293.9},0).to({y:359.9,alpha:1},10,cjs.Ease.get(1)).to({y:350.9},6,cjs.Ease.get(1)).wait(73));

	// pumpkin
	this.instance_8 = new lib.getinspiredpumpkin();
	this.instance_8.parent = this;
	this.instance_8.setTransform(36,51);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({alpha:1},10).wait(167));

	// green-berries
	this.instance_9 = new lib.getinspiredgreenberries();
	this.instance_9.parent = this;
	this.instance_9.setTransform(133,47);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({alpha:1},10).wait(162));

	// cranberries
	this.instance_10 = new lib.getinspiredcranberries();
	this.instance_10.parent = this;
	this.instance_10.setTransform(21,419.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24).to({alpha:1},10).wait(152));

	// turkey
	this.instance_11 = new lib.getinspiredturkey();
	this.instance_11.parent = this;
	this.instance_11.setTransform(80,499.5);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({alpha:1},10).wait(147));

	// gravy
	this.instance_12 = new lib.getinspiredgravy();
	this.instance_12.parent = this;
	this.instance_12.setTransform(136.5,573);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(35).to({alpha:1},10).wait(141));

	// table
	this.instance_13 = new lib.getinspiredtable();
	this.instance_13.parent = this;
	this.instance_13.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(186));

	// trace
	this.instance_14 = new lib.skyscraper6trace();
	this.instance_14.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(186));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(79.9,290.2,164.4,613.1);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;