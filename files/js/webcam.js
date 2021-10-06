var video = document.getElementById("video-player");
var vendorURL = window.URL || window.webkitURL;
navigator.getMedia =   navigator.getUserMedia
					|| navigator.webkitGetUserMedia
					|| navigator.mozGetUserMedia
					|| navigator.msGetUserMedia;
navigator.getMedia(
	{ video: true, audio: true },
	(stream) => {
		//video.src = vendorURL.createObjectURL(stream);
		video.srcObject = stream;
		video.play();
	}, (error) => {
		console.log("Error", error);
	}
);
