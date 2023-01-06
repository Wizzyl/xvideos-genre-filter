console.log("hello homepage");
//regex words are space sensitive
window.cuckoldRegex = /cuckold|wife with her lover|wife and her lover|wife with lover|wife and lover|unfaithfull|infiel|husband watches|wife fucking another|girlfriend fucking another|girlfriend gangbang|boyfriend watches|wife gangbang|wife fucking another man|wife fucked by stranger|cuck|cucked|sharing|hotwife|wife fuck my friend|wife fucks my friend|wife fuck my friends|wife fucks my friends|cheating|cheats|bull|horn|swing|swinger|swinger-party|another husband|hot wife/;

$(document).ready(function(){

    $('*[id^=video_]').each(function() {
        let rawString = $(this).text().toLowerCase();
        if (cuckoldRegex.test(rawString)) {
            $(this).remove();
            console.log("REMOVED "+rawString);
        }
    });
});


