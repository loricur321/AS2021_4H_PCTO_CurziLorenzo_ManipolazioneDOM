jQuery(function() {
    var cognomeNome = "";
    var i = 0; 
    var cognomiInseriti = []; 

    jQuery("#btnInserisci").on("click", function() {
       var flag = false;
       var nome = jQuery("#txtNome").val();
       var cognome = jQuery("#txtCognome").val();
       cognomeNome = nome + " " + cognome;
       //alert(cognomeNome);
       if(i >= 1)
       {
            for(var j = 0; j < i; j++)
            {
                if(cognomiInseriti[j] == cognomeNome)
                {
                    jQuery("#Title").html("Attento!");
                    jQuery("#paragraph").html("Nominativo già inserito!");
                    jQuery("#btnSecond").html("Ok");
                    jQuery("#btnFirst").html("Ok");
                    jQuery("#triggerModal").click();
                    flag = true;
                }
            }
        }
       

       if(!flag)
       { 
            cognomiInseriti[i] = cognomeNome;   
            jQuery("#Title").html("Attento!");
            jQuery("#paragraph").html("Confermi l'inserimento del nominativo?");
            jQuery("#btnFirst").html("Si");
            jQuery("#btnSecond").html("No");
            jQuery("#triggerModal").click();
            
            jQuery("#btnFirst").on("click", function() {
                    var tmp = cognomiInseriti[i].split(" ");
                    var blocco = jQuery("<p>" + tmp[0] + " " + tmp[1] + "</p>");
                    blocco.addClass("nominativi");
                    jQuery("#nominativi").append(blocco);
                    i++;
            });
        }
    });
});
        

