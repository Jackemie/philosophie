const liste_chap = [
    ["La conscience", true, "https://docs.google.com/document/d/1HAJWjBvjhxO-AU5Dgr_65Lecg8UxUL2F3XFAg4hENlU/edit?usp=sharing"], // Chapitre 1, terminé
    ["Inconscient et Liberté", true, "https://docs.google.com/document/d/1_5UsmNa-qNFsbqrBPfq8lPK3ZDSIonVPHimRpMKoCIE/edit?usp=sharing"], // Chapitre 2, terminé
    ["Le devoir moral en question", true, "https://docs.google.com/document/d/1fK6G_FLgwCNgk4_3KQr_HlCAPC4bXIUSlHPh8MGydxU/edit?usp=sharing"], // Chapitre 3, terminé
    ["Langage et Art poétique", true, "https://docs.google.com/document/d/1p_w8dWlGZ2fv07uQo_Ry25cGWfDczn8dpOVDkYMKuxA/edit?usp=sharing"], // Chapitre 4, terminé
    ["Etat et Justice", true, "https://docs.google.com/document/d/1iFhF6x0oXNTN9rpD_VV2GVzdRuAX3Fsb8XUN1rdE-0g/edit?usp=sharing"], // Chapitre 5, terminé
    ["Le bonheur", false, "https://docs.google.com/document/d/1FIBezOdRksIloRQwRrxmfJn-W9ejL-PcydCLSy9KbUA/edit?usp=sharing"], // Chapitre 6, en cours
    ["Science et Art", false, "https://docs.google.com/document/d/1OB38rtu_yz6XkAGSwK76j5S54Hx7TfRLGMR4u3TnJHw/edit?usp=sharing7"], // Chapitre 7, en cours
    ["La religion", true, "https://docs.google.com/document/d/1PBuD0zxM21nX2IN3sk-HF-_JDfkZjhNiEzXjlNuOlko/edit?usp=sharing"] // Chapitre 8, terminé
];


if (window.location.pathname.includes("chap.html")) {
    const tableau = document.getElementById("dev");
    for (let i = 0; i < liste_chap.length; i++) {
        actual_value = tableau.innerHTML;
        statut = liste_chap[i][1] ? "Terminé !" : "En cours...";
        new_value = `<div class="col-md-7"><div class="blog_box"><div class="blog_img"><img src="images/img-2.png"></div><h4 class="statut">${statut}</h4><h4 class="prep_text">Chapitre ${i+1}</h4><p class="lorem_text">${liste_chap[i][0]}</p><div class="read_bt"><a href="${liste_chap[i][2]}">Voir le Chapitre</a></div></div></div>`
        tableau.innerHTML = actual_value + new_value;
    }
}



if (window.location.pathname.includes("index.html")) {
    //4 premiers chapitres
    const tableau = document.getElementById("dev2");
    for (let i = 0; i < 4; i++) {
        try{
            actual_value = tableau.innerHTML;
            statut = liste_chap[i][1] ? "Terminé !" : "En cours...";
            new_value = `<div class="col-lg-3 col-md-6"><div class="philo_img"><img src="images/img-1.png"></div><h3 class="types_text">Chapitre ${i+1}</h3><h4 class="statut">${statut}</h4><p class="looking_text">${liste_chap[i][0]}</p></div>`
            tableau.innerHTML = actual_value + new_value;
        }catch(err){
            console.log("Il manque un chapitre")
        }
    }

    //Chap 4-8
    const tableau2 = document.getElementById("dev3");
    for (let i = 4; i < 8; i++) {
        try{
            actual_value = tableau2.innerHTML;
            statut = liste_chap[i][1] ? "Terminé !" : "En cours...";
            new_value = `<div class="col-lg-3 col-md-6"><div class="philo_img"><img src="images/img-1.png"></div><h3 class="types_text">Chapitre ${i+1}</h3><h4 class="statut">${statut}</h4><p class="looking_text">${liste_chap[i][0]}</p></div>`
            tableau2.innerHTML = actual_value + new_value;
        }catch(err){
            console.log("Il manque un chapitre sur la page 2")
        }
    }
    
}
