console.log("hello video");

$(document).ready(function(){
    $('*[class=page-title]').each(function() {
        
        let rawString = $(this).text().toLowerCase();
        if (cuckoldRegex.test(rawString)) {
            history.back()
            $("#main").remove();
            console.log("REMOVED "+rawString);
        }
    });

    function tagCheck(){
        let vidPageTags = $('div.video-metadata.video-tags-list.ordered-label-list.cropped');
        let tagString = vidPageTags.text().toLowerCase();
        console.log(tagString);
        if (cuckoldRegex.test(tagString)) {
            history.back()
            $("#main").remove();
            console.log("REMOVED "+tagString);
        }
    }

    // tag check for different timeouts since xvideos does not register new tags instantly
    tagCheck();
    setTimeout(tagCheck,250);
    setTimeout(tagCheck,500);
    setTimeout(tagCheck,1000);
    setTimeout(tagCheck,2000);



});