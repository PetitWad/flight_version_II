export function getLogoUrlByAirline(airlinelogoArray, targetLogo) {
    // Recherche un objet dans le tableau qui a le même logo que la cible.
    const finLogo = airlinelogoArray.find(logo => logo.sigle_airline === targetLogo);
  
    return finLogo ? finLogo.logo_url : null;
  }
  