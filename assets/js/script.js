var div = $('#carre');
var divHeight = div.height();
var divWidth = div.width();
// Si une touche est tapé dans un input
$('input').keydown(function(e) {
  //Récupere la largeur de la fenetre
  var width = $(window).width();
  //Récupere la hauteur de la fenetre
  var height = $(window).height();
  switch (e.which) {
    //Si la touche tapé est 37 (Fleche gauche)
    case 37:
    //Retire 10px par rapport a sa position left
    div.css('left', div.offset().left - 10);
    //Supprime la classe mirror qui inverse l'image
    div.removeClass('mirror');
    //Récupere la position de mon élément par rapport au bord gauche de l'écran
    var myPositionLeft = $(div).offset().left;
    //Si la position de mon élémént est inférieur à 0, le placer à la droite de l'écran
    if (myPositionLeft < 0) {div.css('left', ''); div.css('right', 0)}
    break;
    //Si la touche tapé est 38 (Fleche haut)
    case 38:
    //Retire 10px par rapport a sa position top
    div.css('top', div.offset().top - 10);
    //Récupere la position de mon élément par rapport au bord haut de l'écran
    var myPositionTop = $(div).offset().top;
    //Si la position de mon élémént est inférieur à 0, le placer en bas de l'écran
    if (myPositionTop < 0) {div.css('top', ''); div.css('bottom', 0)}
    break;
    //Si la touche tapé est 39 (Fleche droite)
    case 39:
    //Retire 10px par rapport a sa position left
    div.css('left', div.offset().left + 10);
    //Récupere la position de mon élément par rapport au bord gauche de l'écran
    var myPositionRight = $(div).offset().left;
    //Ajoute la classe mirror qui inverse l'image
    div.addClass('mirror');
    //Si la position de mon élément est supérieur à la largeur de l'écran moins sa propre taille, le placer a la gauche de l'ecran
    if (myPositionRight > (width - divWidth)) {div.css('right', ''); div.css('left', 0)}
    break;
    //Si la touche tapé est 40 (Fleche bas)
    case 40:
    //Retire 10px par rapport a sa position top
    div.css('top', div.offset().top + 10);
    //Récupere la position de mon élément par rapport au bord haut de l'écran
    var myPositionTop = $(div).offset().top;
    //Si la position de mon élément est supérieur à la hauteur de l'écran moins sa propre taille, le placer en haut de l'ecran de l'ecran
    if (myPositionTop > (height - divHeight)) {div.css('bottom', ''); div.css('top', 0)}
    break;
  }
})
