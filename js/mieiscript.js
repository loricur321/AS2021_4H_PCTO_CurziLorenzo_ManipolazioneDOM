jQuery(function() {
    var i = 0; 
    var cognomiInseriti = []; 

    jQuery("#btnInserisci").on("click", function() {
       var flag = false;
       var nome = jQuery("#txtNome").val(); 
       var cognome = jQuery("#txtCognome").val();
       var cognomeNome = nome + " " + cognome;
       if(i >= 1) // entro nel controllo solo se vi è presente almeno un nominativo
       {
            for(var j = 0; j < i; j++)
            {
                if(cognomiInseriti[j] == cognomeNome) //controllo che non vi siano nominativi identici a quello già inserito
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
       

       if(!flag) //se non vi sono allora procedo con la stampa del nuovo nominativo
       { 
            cognomiInseriti[i] = cognomeNome;
            jQuery("#Title").html("Attento!");
            jQuery("#paragraph").html("Confermi l'inserimento del nominativo?");
            jQuery("#btnFirst").html("Si");
            jQuery("#btnSecond").html("No");
            jQuery("#triggerModal").click(); //richiedo all'utente se è sicuro di voler inserire il nominativo
            
            jQuery("#btnFirst").on("click", function() {  //in caso affermativo procedo con l'inserimento e la stampa a video
                    var tmp = cognomiInseriti[i].split(" "); //splitto il cognome da stampare
                    var blocco = jQuery("<p>" + tmp[0] + " " + tmp[1] + "</p>"); //e gli aggiunto il tag <p>
                    blocco.addClass("nominativi"); //a cui aggiungerò la classe nominativi in modo da aver stili di font e bordi prestabiliti
                    jQuery("#nominativi").append(blocco);
                    i++;
            });
        }
    });
});
        

