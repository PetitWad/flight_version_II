<?php
// Contenu du fichier index.php

include 'arrivals.php'; // Inclut le contenu de arrivals.php
include 'departures.php'; // Inclut le contenu de departures.php

?>

<script>
	function autoRefreshPage() {
		location.reload(); // Recharge la page
	}
	// Actualise la page toutes les 30 minutes en millisecondes
	setInterval(autoRefreshPage, 1200000);
</script>
