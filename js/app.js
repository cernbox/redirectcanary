
$(document).ready(function() {
	if (OC.currentUser !== false) {
		$.getJSON("/index.php/apps/canary", function(data) {
			if (data["reload"] || data["is_adopter"]) {
				location.reload();
			}
		});
	}
});
