export default {
	bind: function(object, $view) {
		$('[data-field]', $view).each(function() {
			let key = $(this).attr('data-field');
			if (object[key]) $(this).val(object[key]);
			$(this).change(event => object[key] = $(this).val());
		});
	}
}
