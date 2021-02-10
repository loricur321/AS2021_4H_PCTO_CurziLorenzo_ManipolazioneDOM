
var cognomeNome = "";

jQuery(function() {
    var i = 0, p = 0; 
    var cognomiInseriti = []; 

    jQuery("#btnInserisci").on("click", function() {
       var flag = false;
       var nome = jQuery("#txtNome").val();
       var cognome = jQuery("#txtCognome").val();
       cognomeNome = nome + " " + cognome;
       //alert(cognomeNome);
       cognomiInseriti[i] = cognomeNome;

       if(i >= 1)
       {
            var flag = false;
            for(var j = 0; j < i; j++)
            {
                if(cognomiInseriti[j] == cognomiInseriti[i])
                {
                    jQuery("#Title").html("Attento!");
                    jQuery("#paragraph").html("Nominativo già inserito!");
                    jQuery("#btnSecond").html("Ok");
                    jQuery("#btnFirst").html("Ok");
                    jQuery("#triggerModal").click();
                    flag = true;
                }
            }

            if(!flag)
            {
                p++;
            }
        }
       

       if(!flag)
       {    
            jQuery("#Title").html("Attento!");
            jQuery("#paragraph").html("Confermi l'inserimento del nominativo?");
            jQuery("#btnFirst").html("Si");
            jQuery("#btnSecond").html("No");
            jQuery("#triggerModal").click();
            
            jQuery("#btnFirst").on("click", function() {
                if(p == i)
                {
                    var blocco = jQuery("<p>" + cognome + " " + nome + "</p>");
                    //console.log(blocco);
                    blocco.addClass("nominativi");
                    jQuery("#nominativi").append(blocco);
                    i++;
                }
            });
        }
    });
});
        

