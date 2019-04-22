$(document).ready(function(){
  // on crée le sommaire tout en haut
$('#contenu').before('<div id="sommaire"><ol class="niveau1"></ol></div>');

// Pour chaque titre h1
$('#contenu h1').each(
  function(numTitre1, titre1)
  {
    //numTitre1 est le numéro du h1 en question,partant de 0
    //titre1 est l'élément h1 en question, donc on peut le manipuler avec $(titre1).
    //$('h1:eq('+numTitre1+')') est donc la requête permettant d'accéder à cet h1

    // On ajoute l'id au titre pour l'ancre
    $(titre1).attr('id','ancre-'+numTitre1);
    // On ajoute une ligne avec le texte h1
    //plus le lien vers l'ancre
    $('#sommaire .niveau1').append(
      '<li id="sommaire-'+  numTitre1 + '">'
      +'<a href="#ancre-'+ numTitre1 +'">'
      +$(titre1).text()+'</a>'+'</li>'
    );
    // il ne faut pas oublier d'attribuer un id à cet li
    //pour pouvoir y rajouter des h2 plus tard


    // Si cet h1 a des h2
    if($('#contenu h1:eq('+numTitre1+')+ div.chapitre').length ==1)
    {
      // On crée une liste de sous-parties
      $('#sommaire-' + numTitre1).append(
        '<ol class="niveau2"></ol>'
      );
      // Pour chaque h2 dans le h1 en // QUESTION

      $(
        '#contenu h1:eq('+numTitre1+')+ div.chapitre > h2').each(
          function(numTitre2,titre2)
          {
            // on ajoute l'id au sous titre ,pour l'ancre
            $(titre2).attr(
              'id',
              'ancre-' +numTitre1+'-'
              +numTitre2
            );
            // On ajoute une ligne avec le nom de ce h2
            // avec un lien
            // plus le lien de l'ancre vers le sous titre1
            $('#sommaire-'+numTitre1+' ol').append(
              '<li>'+'<a href ="#ancre-'
              +numTitre1 + '-'
              +numTitre2 + '">'
              +$(titre2).text()+'</a>'
              +'</li>'
            );
          }
        );
    }

  }
);



});
