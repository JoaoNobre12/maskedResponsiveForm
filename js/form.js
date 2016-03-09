/**
 * Created by joaonobre on 09/02/16.
 */

jQuery(
    function($){

        $("#izip").mask("99999-999");
        $('#idate').mask('99/99/9999');
        $('#iphone').mask("(99) 9999-9999?9");
    }
);

var validateNomEmpty = function (inputField){
    if(inputField.value.length == 0){
        alert("Pleaze, enter a value:");
        $("#imessage").focus();
    }
};

    var form = document.getElementsByTagName('form');


