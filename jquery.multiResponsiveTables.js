/**
* This code has been developed by Mohammad M. AlBanna
* Website: www.MBanna.info
* Facebook: www.FB.com/MBanna.info
* 
* The code has been taken from: http://codepen.io/dudleystorey/pen/Geprd
* And converted to support multiple tables and be as jQuery plugin
*/

jQuery.fn.multiResponsiveTables = function() {
    if($(this).length > 0){
       $.each($(this), function(index, val) {
            var headertext = [];
            headers = $(this).find('thead th');
            tablerows = $(this).find('thead th');
            tablebody = $(this).find('tbody tr');

            for (var i = 0; i < headers.length; i++) {
                var current = headers[i];
                headertext.push(current.textContent.replace(/\r?\n|\r/, ''));
            }

            $.each(tablebody, function(index2, tr) { 
                $.each($(tr).find("td"), function(index3, td) { 
                   $(td).attr("data-th",headertext[index3]);
                });
            });
        });
    }
}