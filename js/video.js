var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log("New speed is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
	console.log("New speed is", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location", video.currentTime);
	let newTime = video.currentTime + 15;
	if (newTime >= video.duration) {
		video.currentTime = 0;
		console.log("Going back to beginning");
	}
	else {
		video.currentTime = video.currentTime + 15
	} 
	console.log("New location", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (document.querySelector("#mute").innerHTML == "Mute") {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		document.querySelector("#volume").innerHTML = "0%";
		document.querySelector("#slider").value = document.querySelector("#slider").min;
	}
	else if (document.querySelector("#mute").innerHTML == "Unmute"){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		document.querySelector("#volume").innerHTML = "100%";
		document.querySelector("#slider").value = document.querySelector("#slider").max;
	};
});

document.querySelector("#slider").addEventListener("click", function() {
	let newVolume_decimal = document.querySelector("#slider").value / 100; 
	let newVolume = newVolume_decimal * 100;
	video.volume = newVolume_decimal;
	document.querySelector("#slider").value = newVolume;
	document.querySelector("#volume").innerHTML = newVolume + "%";
	console.log(newVolume_decimal);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.setAttribute("class", "oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.setAttribute("class", "video");
});



