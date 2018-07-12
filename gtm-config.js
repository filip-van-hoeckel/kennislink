// @Publicaties
// Custom Dimensions, toe te voegen voor het GTM Script
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event' : 'pageview',
    'dimension1' : '<Auteur>',
    'dimension2' : '<Vakgebied>',
    'dimension3' : '<Onderwerp>',            //deze is niet meer in gebruik voor zover ik weet
    'dimension4' : '<Thema>',
    'dimension5' : '<Publicatiedatum>',
    'dimension6' : '<Activiteit>',  // alleen geldig voor evenementen
    'dimension7' : '<Organisatie>',        // alleen geldig voor evenementen
    'dimension8' : '<Evenement>'       // alleen geldig voor evenementen
});




