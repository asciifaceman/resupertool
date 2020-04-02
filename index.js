function handleFetch(url){
    $.get(url, function(data){

        var html = $.parseHTML(data);
        //console.log(html);
        var dom = $(html);
        dom.find('a').each(function() {
            
            var a = $(this);


            var x = a.attr("href");            
            if (x == null ){
                return;
            }

            //console.log(x);
            
            var suffix = x.split('.').pop();
            if (suffix == "png" || suffix == "jpg"){
                var img = $('<img src="'+x+'"/>');
                img.width("25%");
    
                //console.log(img);
                $(this).html($(img));
                $(this).attr('target', '_blank');
                //$(this).replaceWith($(img));
            }
            
        });

        
        console.log("done!");
        $(document.body).append($(dom));
    });
}

function onLoad() {
    tmp = prompt("Supertool Newsletter URL", "http://www.supertool.com/forsale/2020aprillist.html");

    try {
        x = new URL(tmp).hostname;
    } catch {
        alert("not a valid URL (try adding http:// or www.): " + url);
        return
        
    }

    if (x != "supertool.com" && x != "www.supertool.com"){
        console.log(x);
        alert("not a supertool URL");
        return
    }

    url = "https://cors-anywhere.herokuapp.com/" + tmp
    handleFetch(url);
}

$( document ).ready(function(){
    onLoad();
});