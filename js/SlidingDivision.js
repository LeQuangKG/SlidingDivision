
/*
	Name : SlidingDivision
	Create : Le Viet Quang (quang.le@ringierstudios.com)
	Date : 1 - 8 -2012
	Version : 1.0
	Project : 
*/

function SlidingDivision(slidingElement, maskElement, width, height, visibleWidth, visibleHeight,n){
    this.currentX = 0;
	this.currentY = -350*(Math.random());  
    this.self = slidingElement;
    this.style = this.self.style;    
    this.scrollX = true;
    this.scrollY = true;
	this.index = n;
    
    this.style.left = this.currentX + "px";
    this.style.top = this.currentY + "px";
    
    this.mask = maskElement;
    this.acX = 0;
    this.acY = 0;
    this.decay = 0.4;
    this.timer;
	this.drag = false;
    
    this.fingerPlacementX = 0;
    this.fingerPlacementY = 0;
	
	this.width = width;
    this.height = height;
    
    this.visibleWidth = visibleWidth;
    this.visibleHeight = visibleHeight;
    
    this.maximumScrollWidth = this.width - this.visibleWidth;
    this.maximumScrollHeight = this.height - this.visibleHeight;
    
    slidingElement.addEventListener('touchstart', this.create(this, this.placement), false);
    slidingElement.addEventListener('touchmove', this.create(this, this.movement), false);
	slidingElement.addEventListener('touchend', this.create(this, this.endmove), false);
	
	slidingElement.addEventListener('mousedown', this.create(this, this.placement), false);
    slidingElement.addEventListener('mousemove', this.create(this, this.movement), false);
	slidingElement.addEventListener('mouseup', this.create(this, this.endmove), false);
    
}


SlidingDivision.prototype.placement = function(e){
	e.preventDefault();
	this.drag = true;
	if(e.pageX){
		 this.fingerPlacementX = e.pageX;
    	 this.fingerPlacementY = e.pageY; 
	}
	else{
		this.fingerPlacementX = e.targetTouches[0].pageX;
		this.fingerPlacementY = e.targetTouches[0].pageY; 
	}
}

SlidingDivision.prototype.movement = function(e){
    e.preventDefault();
	if(this.drag == false) return;
	if(e.pageX){
		var updatedFingerPlacementX = e.pageX;
		var updatedFingerPlacementY = e.pageY;
	}
	else{
		var updatedFingerPlacementX = e.targetTouches[0].pageX;
		var updatedFingerPlacementY = e.targetTouches[0].pageY;
	}
    
    var deltaXmovement = (updatedFingerPlacementX - this.fingerPlacementX) * .6;
    var deltaYmovement = (updatedFingerPlacementY - this.fingerPlacementY) * .6;
    
    
    this.fingerPlacementX = updatedFingerPlacementX;
    this.fingerPlacementY = updatedFingerPlacementY;
    this.acX += deltaXmovement;
    this.acY += deltaYmovement;
    this.ease();    
}

SlidingDivision.prototype.endmove = function(){
	this.drag = false;
	if(test1 == true){
			_video.style.display = "block";
			_back.style.display = "block";
			_video.play();
	}
	if(test2 == true){
			_text.style.display = "block";
			_back.style.display = "block";
	}
}



SlidingDivision.prototype.ease = function(){
    if (this.timer == undefined) {
        this.timer = setInterval(this.create(this, this.scrolling), 50);
    }
}


SlidingDivision.prototype.scrolling = function(){

    this.currentX += this.acX;
    this.currentY += this.acY;  
    
    var zerosnapBackTop = (this.currentY - this.currentY * this.decay);
    var totalHeightSnapBack = (this.currentY - (this.maximumScrollHeight + this.currentY) * this.decay);    
    
    var zerosnapBackLeft = (this.currentX - this.currentX * this.decay);
    var totalWidthSnapBack = (this.currentX - (this.maximumScrollWidth + this.currentX) * this.decay);    
    if (this.scrollX) {
        this.currentX = (this.currentX > 0) ? zerosnapBackLeft : (this.currentX < -this.maximumScrollWidth) ? totalWidthSnapBack : this.currentX;
        this.acX *= .7;
        this.style.left = parseInt(this.currentX) + "px";
    }
    
    if (this.scrollY) {
        //this.currentY = (this.currentY > 0) ? zerosnapBackTop : (this.currentY < -this.maximumScrollHeight) ? totalHeightSnapBack : this.currentY
        this.acY *= .7;
		if(this.currentY >= 0) {
			
			this.currentY = 0; 
		}
		else if(this.currentY <= - this.maximumScrollHeight) {
			
			this.currentY = -this.maximumScrollHeight;
		}
		if(this.currentY >= -10){
			check[this.index][0] = 1;
			CheckPlay(0);
		}
		else if(this.currentY <= - this.maximumScrollHeight+5){
			check[this.index][1] = 1;
			CheckPlay(1);
		}
		else{
			check[this.index][0] = 0;
			check[this.index][1] = 0;
		}
        this.style.top = parseInt(this.currentY) + "px";
    }
}
SlidingDivision.prototype.create = function(obj, func){
    var f = function(){
        var target = arguments.callee.target;
        var func = arguments.callee.func;
        return func.apply(target, arguments);
    };
    
    f.target = obj;
    f.func = func;
    return f;
}


SlidingDivision.prototype.update = function(){	
    this.width = this.style.width.slice(0, -2);
    this.height = this.style.height.slice(0, -2);
    this.visibleWidth = this.mask.style.width.slice(0, -2);
    this.visibleHeight = this.mask.style.height.slice(0, -2);
    
    this.maximumScrollWidth = this.width - this.visibleWidth;
    this.maximumScrollHeight = this.height - this.visibleHeight;  
}

SlidingDivision.prototype.reset = function(){
    clearInterval(this.timer);
    this.timer = null;
    this.acY = this.fingerPlacementX = this.currentX = 0;
    this.acX = this.fingerPlacementY = this.currentY = (-350*(Math.random()));
    this.style.left = this.currentX + "px";
    this.style.top = (-350*(Math.random()))+ "px";
	check[this.index][0] = 0;
	check[this.index][1] = 0;
}




