// Code by NYXEIA

var selectedColor = {"color" : "var(--link)"};
    
    var defaultColor = {
      "color" : "var(--beige)"};
    
    var labelColor = selectedColor;
    
    $( function(){
      $('body')
        .on('click', '.as-above', function(){

        console.log("click AS ABOVE");
    
          var above = $(this).nextAll(".profilcontent:first");
          var below = $(this).nextAll(".profilcontent2:first");
        
          console.log(below);

          if (below.is(":visible")) {

            console.log("show AS ABOVE");
    
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

        console.log("click SO BELOW");
    
        var above = $(this).nextAll(".profilcontent:first");
        var below = $(this).nextAll(".profilcontent2:first");
    
          if (above.is(":visible")) {

            console.log("show SO BELOW");
    
            above.hide();
            below.show();
    
            $(this).css(selectedColor);
            $(this).prevAll(".as-above:first").css(defaultColor);
          }
    
        });
    });
    
    
    var $path = ".post_profile .post_userinfo .user_field";
    var $parent = ".post_profile";
    
    jQuery(function () {
        $( $path ).each(function( index ) {
    
            var label = $(this).find('.label > span:first-child');
            var field = label.html() ;
    
            var found = false;
            switch (field) {
                case "Alias":
                case "Genre":
                case "Age":
                case "Zone libre":
                case "Dollars":
                case "Statut":
                case "Occupation":
                case "Habitation":
                    found = true;
                    break;
                default: 
                    break;
            } 
    
            if (found){
                $(this).parents($parent).find('.p-box-corps').append(this);
                label.css(labelColor);
            }
     
        });
    
    });
    
    jQuery(function () {
        $( $path ).each(function( index ) {
    
            var label = $(this).find('.label > span:first-child');
            var field = label.html() ;
    
            var found = false;
            switch (field) {
                case "Déchirures":
                case "Altérations":
                case "Limites":
                case "Stigmates":
                case "Inventaire":
                case "Mémo RP":
                    found = true;
                    break;
                default: 
                    break;
            } 
    
            if (found) {
                $(this).parents($parent).find('.p-box-esprit').append(this);
                label.css(labelColor);
            }
     
        });
    
    });