<script>
	function autoRefreshPages() {
		// Recharge les pages arrivals.php et departures.php
		window.location.href = 'arrivals.php';
		setTimeout(function() {
			window.location.href = 'departures.php';
		}, 1000); // Ajoutez un délai d'une secondes pour laisser la première page se recharger
	}

	// Actualise les pages toutes les 20 minutes en millisecondes
	setInterval(autoRefreshPages, 1200000);
</script>
