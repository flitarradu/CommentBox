const demoArr = [
    { id: 0, comments: 'The first comment', email: "f.r@g.com" },
    { id: 1, comments: 'The second omment', email: "sssasar@g.com"},
    { id: 2, comments: 'The third comment', email: "rrrrr@g.com"}
];

const commentsList = $('.commentsList');
const form = $('.myForm');

form.on("submit" ,  function(e){
    e.preventDefault();
   
    let textboxValue = $('.zaTextBox').val();
    generatedID = 3 + Math.floor(Math.random()*999);
    demoArr.push({id: generatedID, comments: textboxValue, email: 'newMail@gmail.com' });

    displayComments(demoArr);
    $(".zaTextBox").val('');
});


function displayComments (arr){
    $(commentsList).empty();
    $('<h2>Here are the comments from the comment boxes:</h2><br>').appendTo(commentsList);
    for( let i = 0; i < arr.length; i++){
        $(`<li>${arr[i].comments}<button type="button" data-value="${arr[i].id}">X</button></li>`).appendTo(commentsList);
    }
}


commentsList.on( 'click',function (e){

    let commId = $(e.target).closest('button').data('value');

    for( let i = 0; i < demoArr.length; i++){
        if (demoArr[i].id === commId){
            demoArr.splice(i,1);
            break;
        }
    }

    displayComments(demoArr);
   
});

