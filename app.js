function func() {
	var x = document.getElementById('input').value;
	if (x == '') {
		alert('Please enter a value');
	} else {
		try{
		var url = `https://api.qrserver.com/v1/create-qr-code/?size=55x55&data=${x}`;
		var img = document.getElementById('img');
		var generatedText = document.getElementById('successText');
		generatedText.classList.remove('hide');
		img.src = url;
		generatedText.innerHTML = 'Generated successfully!';
		console.log('Code generated with content ' + x);
		}catch(err) {
		if(err) {
			window.location.reload()
		}
		}
	}
}
// var link = document.createElement('a');
// link.download = 'qr.png';
// link.href = url;
// link.click();
// link.remove();
