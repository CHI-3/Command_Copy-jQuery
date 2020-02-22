/*
 * The process when clicking Copy button
 * Copyボタンクリック時の処理
 */
$(function(){

    $('button').click(function(){

        var copyTarget = '';
        var elem_num = $(this).prevAll().length;
        var elem_flg = false;

        $($(this).parent().prevAll().get().reverse()).each(function(i, val){

            elem_flg = false;

            if($(this).is('span')){
               copyTarget = copyTarget + $(this).text();
               elem_flg = true;
            }else if ($(this).is('input') && $(this).is(':text')){
               copyTarget = copyTarget + $(this).val();
               elem_flg = true;
            }

        });

        commonForCopy(copyTarget);

				$('.cp_tooltiptext').text("Copied!");

    });

});


/*
 * The body of copy process
 * コピー処理本体
 */
function commonForCopy(copyTarget){

		var copyFrom = document.createElement('textarea');


		copyFrom.textContent = copyTarget;

		var bodyElm = document.getElementsByTagName("body")[0];
		bodyElm.appendChild(copyFrom);


		copyFrom.select();
		var retval = document.execCommand('copy');
		bodyElm.removeChild(copyFrom);

		return retval;

};


/*
 * The process when focusout from Copy button
 * Copyボタンからカーソルアウトした際の処理
 */
$(function(){

				$('.cp_tooltip').mouseleave(function(){
            $('.cp_tooltiptext').text("Copy!");
				});

});


/*
 * The processs of showing and hiding the content under the heading
 * 見出し配下の内容の表示/非表示
 */
$(function(){

    $('h3').click(function(){

        $(this).next('div').slideToggle();
        // $(this).next().siblings('div').slideUp();

    });

});


/*
 * Change the inside of the span element that has the same value as the input ekement, type text
 * テキストボックスと同じnameのspan要素の中身を入力値に変更する
 */
$(function(){

    $('.same-value').focusout(function(){

            $('span[name = "' + $(this).attr('name') + '"]').text($(this).val());
            $('span[name = "' + $(this).attr('name') + '"]').removeClass("text-danger");
            $('span[name = "' + $(this).attr('name') + '"]').addClass("text-primary");

    });

});
