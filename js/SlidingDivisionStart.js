
/*
	Name : SlidingDivision
	Create : Le Viet Quang (quang.le@ringierstudios.com)
	Date : 4 - 8 -2012
	Version : 1.0
	Project : 
*/

var scrollingElement1;
var Sliding_content1;

var scrollingElement2;
var Sliding_content2;

var scrollingElement3;
var Sliding_content3;

var scrollingElement4;
var Sliding_content4;

var scrollingElement5;
var Sliding_content5;

var _video;
var _back;
var _text;

var Sliding_masker ;
var check = [[0,0],[0,0],[0,0],[0,0],[0,0]];
var test1 = false;
var test2 = false;

function CheckPlay(n){
	
	if(n==1){
		test1 = true;
		test2 = false;
		for(var i=0; i<5; i++){
			if(check[i][1]==0) {
				test1 = false;
				break;
			}
		}
	}
	if(n==0){
		test2 = true;
		test1 = false;
		for(var i=0; i<5; i++){
			if(check[i][0]==0) {
				test2 = false;
				break;
			}
		}
	}
}

function PlayMovie(){
	_video.style.display = "block";
	_back.style.display = "block";
	_video.play();
}

function ResetMoive(){
	_video.style.display = "none";
	_back.style.display = "none";
	_text.style.display = "none";
	scrollingElement1.reset();
	scrollingElement2.reset();
	scrollingElement3.reset();
	scrollingElement4.reset();
	scrollingElement5.reset();
	/*Sliding_content2.style.top = "-10px";
	Sliding_content3.style.top = "-100px";
	Sliding_content4.style.top = "-40px";
	Sliding_content5.style.top = "-79px";*/
	
}

function onReady(){ 
	document.body.addEventListener('touchmove', preventMovement, false);	
	//document.body.addEventListener('touchend', PlayMovie, false);
	_video = document.getElementById("video");
	_back = document.getElementById("back");
	_text = document.getElementById("text");
	_back.addEventListener('click', ResetMoive, false);
	
	Sliding_content1 = document.getElementById('Sliding_content1');
	Sliding_masker1 = document.getElementById('Sliding_masker1');
	
	Sliding_content2 = document.getElementById('Sliding_content2');
	Sliding_masker2 = document.getElementById('Sliding_masker2');
	
	Sliding_content3 = document.getElementById('Sliding_content3');
	Sliding_masker3 = document.getElementById('Sliding_masker3');
	
	Sliding_content4 = document.getElementById('Sliding_content4');
	Sliding_masker4 = document.getElementById('Sliding_masker4');
	
	Sliding_content5 = document.getElementById('Sliding_content5');
	Sliding_masker5 = document.getElementById('Sliding_masker5');
	
	scrollingElement1 = new SlidingDivision(Sliding_content1, Sliding_masker1, 205, 1124, 205, 768, 0);
	scrollingElement1.scrollX = false;
	
	scrollingElement2 = new SlidingDivision(Sliding_content2, Sliding_masker2, 205, 1124, 205, 768, 1);
	scrollingElement2.scrollX = false;
	
	scrollingElement3 = new SlidingDivision(Sliding_content3, Sliding_masker3, 205, 1124, 205, 768, 2);
	scrollingElement3.scrollX = false;
	
	scrollingElement4 = new SlidingDivision(Sliding_content4, Sliding_masker4, 205, 1124, 205, 768, 3);
	scrollingElement4.scrollX = false;
	
	scrollingElement5 = new SlidingDivision(Sliding_content5, Sliding_masker5, 205, 1124, 205, 768, 4);
	scrollingElement5.scrollX = false;
};

function preventMovement(e){
	e.preventDefault();
};


window.onload = function(){
	onReady();			
}