<?php
/* =========================================================
 * script appel� lors de la modification du s�lecteur
 * de marque de voiture
 * on fournit la liste des mod�les disponibles sous forme
 * d'un texte ou les options sont s�par�es par une virgule
 * ========================================================= */

// r�cup�ration de la marque de voiture, celle-ci
// est pass�e en param�tre GET

$brand="";
if (isset($_GET['brand'])) $brand=trim($_GET['brand']);

// en fonction de la marque on d�finit la liste des mod�les

if ($brand=="Audi") {
  echo "<choix>,A3,A4,A5,A6,A8";
 } else if ($brand=="BMW") {
  echo "<choix>,Serie 1,Serie 3,Serie 5,Serie 7";
 } else {
  echo "inconnu";
 }

?>
