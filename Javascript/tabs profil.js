// Code by NYXEIA

var selectedColor = {
    "text-transform" : "uppercase"
};
    
var defaultColor = {
    "text-transform" : "lowercase"
};
    
    $( function(){
      $('body')
        .on('click', '.as-above', function(){

          var above = $(this).nextAll(".profilcontent:first");
          var below = $(this).nextAll(".profilcontent2:first");

          if (below.is(":visible")) {
    
            below.hide();
            above.show();
    
            $(this).css(selectedColor);
            $(this).nextAll(".so-below:first").css(defaultColor);
          }
        });
    });
    
    $( function(){
      $('body')
        .on('click', '.so-below', function(){
    
        var above = $(this).nextAll(".profilcontent:first");
        var below = $(this).nextAll(".profilcontent2:first");
    
          if (above.is(":visible")) {
    
            above.hide();
            below.show();
    
            $(this).css(selectedColor);
            $(this).prevAll(".as-above:first").css(defaultColor);
          }
    
        });
    });
    
    
    var $path = ".cadreprofil .profiltabs .profilcontent div";
    var $parent = ".profiltabs";
    
    jQuery(function () {
        $( $path ).each(function( index ) {
    
            var label = $(this).find('.gen > .label');
            var field = label.html() ;

            var found = false;
            switch (field) {
                case "Zone libre : ":
                case "Avatar : ":
                case "Crédits : ":
                case "Messages : ":
                case "Date d'inscription : ":
                case "Triggers : ":
                case "Warnings : ":
                case "Pseudo : ":
                case "Multicomptes : ":
                case "Vos habitudes RPG : ":
                case "Points : ":
                    found = true;
                    break;
                default: 
                    break;
            }
    
            if (found) {
                $(this).parents($parent).find('.profilcontent2').append(this);
            }
     
        });
    
    });