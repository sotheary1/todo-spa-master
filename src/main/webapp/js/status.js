let $footer = $('footer');

function clear() {
	$footer.empty();
}

function info(message) {
	$footer.html($('<div>').addClass('info').text(message));
}

function error(message) {
	$footer.html($('<div>').addClass('error').text(message));
}

export default { clear, info, error };
