
$(document).ready(function() {
	$.getJSON("/index.php/apps/canary", function(data) {
		if (data["is_adopter"]) {
			location.reload();
		}
	});
});
