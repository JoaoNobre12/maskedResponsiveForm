/**
 * Created by joaonobre on 09/02/16.
 */

/*how to fixar o menu direitinho e.e*/

jQuery('document').ready(
    function($){
        var nav = $("#menu");

        $(window).scroll(
            function(){
                if($(this).scrollTop()>60){

                    nav.addClass("fixed");
                }
                else{
                    nav.removeClass("fixed");
                }
            }
        );
    }
);

/*scroll*/
$(document).ready(function(){
    $("a").click(
        function(e){
           e.preventDefault();
            var id = this.innerHTML;


                $('#'+id).ScrollTo();

        }
    );
});