$(document).ready(function() {
	// в диве с классом variants__list ищем все li-шки
	// и по клику на li выполняем функцию
	$('.variants__list').find('li').on('click', function(e) {
		// this  в данном случае - li, на который мы кликнули
		var tabName = $(this).attr('data-name'); // в tabName сохраняем то, что в атрибуте data-name у li-шки

		$('.variants__list li').removeClass('active'); // у ВСЕХ лишек, находящихся в .variants__list удаляем класс "active" 
		$(this).addClass('active'); // а той лишке, на которую нажали, добавляем класс "active"
		
		$(tabName).addClass('active'); // добавляем класс "active" тому блоку-контенту, который нужно отобразить в соответствии с tabName	
	});
});