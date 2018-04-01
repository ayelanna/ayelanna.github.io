$(document).ready(function() {
	$("#snowfall").Snowfall({
		//Sizing
		sizingMode: 'window',//Either css (get pixel value from element css), parent (size canvas to parent size), explicit (use values below) or window (full screen canvas)
		width: 800,//In case of sizingMode explicit: use this width for the canvas
		height: 600,//In case of sizingMode explicit: use this height for the canvas

		//Amount of particles
		amount: 148,//Amount of particles that will be created

		//Positioning
		horizontalOffsetLeft:0,//Horizontal offset from the left (can be positive or negative) in px, to shift starting point, useful when having diagonal snow
		horizontalOffsetRight:0,//Horizontal offset from the right (can be positive or negative) in px, to shift starting point, useful when having diagonal snow
		verticalOffsetTop:0,//Vertical offset from the top (can be positive or negative) in px, useful for the start position of the snow above the canvas

		//Vertical speed configuration
		verticalSpeed: 23,//Somewhere between 0.5 and 10 works best
		randomVerticalSpeed: true,//True or false
		minimumRandomVerticalSpeed: 3,//Minimum shouldn't be lower than zero and probably heigher than 0.5
		maxiumumRandomVerticalSpeed: 5,//Maxiumum shouln't be lower than zero and probably lower than 10

		//Horizontal speed configuration
		horizontalSpeed:0,//Somewhere between -10 and 10 works best, negative values for left moving particles
		randomHorizontalSpeed: true,//True or false
		minimumRandomHorizontalSpeed: 2,//Minimum horizontal speed, can be negative for moving to the left.
		maxiumumRandomHorizontalSpeed:5,//Maxiumum horizontal speed, can be negative for moving to the left.
		horizontalMirroring: true,//When set to true, particles which go out of screen horizontally will emerge at the other side

		//Wind
		wind:true,//Set to true to enable a basic wind element to the particles
		minimumWind:2,//Minimum wind speed (can be negative)
		maximumWind:10,//Maximun wind speed (can be negative)
		windPeriod:10,//Period in which the wind comes full circle again and starts again

		//Graphics
		graphicMode: true,//True or false, draws a circle when false
		radius: 4,//In case graphicMode false: radius for drawn circles
		randomRadius: true,//In case graphicMode false: toggle random radius for drawn circles
		minimumRandomRadius:1,//In case graphicMode false: minimum random radius
		maxiumRandomRadius:2,//In case graphicMode false: maximum random radius
		graphics: [
			'images/1.png',
			'images/2.png',
			'images/3.png',
			'images/4.png',
			'images/5.png',
			'images/6.png',
			'images/7.png',
			'images/8.png',
			'images/9.png',
			'images/10.png',
			'images/11.png',
			'images/12.png',
			'images/13.png',
			'images/14.png',
			'images/15.png',
			'images/16.png',
			'images/17.png',
			'images/18.png',
			'images/19.png',
			'images/20.png',
			'images/21.png',
			'images/22.png',
			'images/23.png',
			'images/24.png',
			'images/25.png',
			'images/26.png',
			'images/27.png',
			'images/28.png',
			'images/29.png',
			'images/30.png',
			'images/31.png',
			'images/32.png',
			'images/33.png',
			'images/34.png',
			'images/35.png',
			'images/36.png',
			'images/37.png',
			'images/38.png',
			'images/39.png',
			'images/40.png',
			'images/41.png',
			'images/42.png',
			'images/43.png',
			'images/44.png',
			'images/45.png',
			'images/46.png',
			'images/47.png',
			'images/48.png',
			'images/49.png',
			'images/50.png',
			'images/51.png',
			'images/52.png',
			'images/53.png',
			'images/54.png',
			'images/55.png',
			'images/56.png',
			'images/57.png',
			'images/58.png',
			'images/59.png',
			'images/60.png',
			'images/61.png',
			'images/62.png',
			'images/63.png',
			'images/64.png',
			'images/65.png',
			'images/66.png',
			'images/67.png',
			'images/68.png',
			'images/69.png',
			'images/70.png',
			'images/71.png',
			'images/72.png',
			'images/73.png',
			'images/74.png',
			'images/75.png',
			'images/76.png',
			'images/77.png',
			'images/78.png',
			'images/79.png',
			'images/80.png',
			'images/81.png',
			'images/82.png',
			'images/83.png',
			'images/84.png',
			'images/85.png',
			'images/86.png',
			'images/87.png',
			'images/88.png',
			'images/89.png',
			'images/90.png',
			'images/91.png',
			'images/92.png',
			'images/93.png',
			'images/94.png',
			'images/95.png',
			'images/96.png',
			'images/97.png',
			'images/98.png',
			'images/99.png',
			'images/100.png',
			'images/101.png',
			'images/102.png',
			'images/103.png',
			'images/104.png',
			'images/105.png',
			'images/106.png',
			'images/107.png',
			'images/108.png',
			'images/109.png',
			'images/110.png',
			'images/111.png',
			'images/112.png',
			'images/113.png',
			'images/114.png',
			'images/115.png',
			'images/116.png',
			'images/117.png',
			'images/118.png',
			'images/119.png',
			'images/120.png',
			'images/121.png',
			'images/122.png',
			'images/123.png',
			'images/124.png',
			'images/125.png',
			'images/126.png',
			'images/127.png',
			'images/128.png',
			'images/129.png',
			'images/130.png',
			'images/131.png',
			'images/132.png',
			'images/133.png',
			'images/134.png',
			'images/135.png',
			'images/136.png',
			'images/137.png',
			'images/138.png',
			'images/139.png',
			'images/140.png',
			'images/141.png',
			'images/142.png',
			'images/143.png',
			'images/144.png',
			'images/145.png',
			'images/146.png',
			'images/147.png',
			'images/148.png'
		]//In case graphicMode true: array of image urls to use
	});
});