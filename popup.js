$(function(){
    var color = $('#fontColor').val();
    $('#fontColor').on('change paste keyup', function(){
        color = $(this).val();
    });
    $('#btnChange').click(function(){
        chrome.tabs.query({active: true, currentWindow: true}, function(){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "changeColor", clickedColor:color})
        });
    });
});