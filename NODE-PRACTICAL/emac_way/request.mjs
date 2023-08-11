
function encrypt(data) {
	// body...
	return "encrypted data";
}

function send(url,data) {
	// body...
	const encryptedData = encrypt(data);
	console.log(`sending ${encryptedData} to ${url}`)
}

export {
	send,
}