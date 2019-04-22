<?php
/* =========================================================
 * script appel� lors de la modification du s�lecteur
 * de mod�le de voiture
 * on fournit la liste des moteurs disponibles sous forme
 * d'un texte ou les options sont s�par�es par une virgule
 * ========================================================= */

// r�cup�ration de la marque de voiture, celle-ci
// est pass�e en param�tre GET

$brand="";
if (isset($_GET['brand'])) $brand=trim($_GET['brand']);

// r�cup�ration du mod�le de voiture, celui-ci
// est pass� en param�tre GET

$model="";
if (isset($_GET['model'])) $model=trim($_GET['model']);

// en fonction de la marque et du mod�le on d�finit la liste des
// moteurs

if ($brand=="Audi") {
  switch($model) {
  case "A3": $eng="80,110,130"; break;
  case "A4": $eng="110,130,170"; break;
  case "A5": $eng="80,110,130,170,210"; break;
  case "A6":  $eng="130,170,210"; break;
  case "A8":  $eng="170,210"; break;
  }
 } else if ($brand=="BMW") {
  switch($model) {
  case "Serie 1": $eng="80,110"; break;
  case "Serie 3": $eng="110,130"; break;
  case "Serie 5": $eng="130,150"; break;
  case "Serie 7": $eng="150,170"; break;
  }
 } else {
  $eng="inconnu";
 }

echo "<choix>," . $eng;

?>