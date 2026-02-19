// Ждем полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Таймлайн анимации в GSAP (очень удобно для баннеров)
    var tl = gsap.timeline({repeat: -1, repeatDelay: 2}); // repeat: -1 = бесконечный цикл
    
    // Строим сцену
    tl.set('#product', {opacity: 1, x: -100}) // Поставили товар слева за границей
      .set('#text1', {opacity: 1, scale: 0}) // Текст невидим
      .set('#button', {opacity: 1, y: 50}) // Кнопка внизу
      
      // Анимируем
      .to('#product', {duration: 0.5, x: 0, ease: "power2.out"}) // Выезд товара
      .to('#text1', {duration: 0.3, scale: 1, ease: "back.out(1.7)"}) // Появление текста с пружинкой
      .to('#button', {duration: 0.4, y: 0, ease: "bounce.out"}) // Выпрыгивание кнопки
      
      // Держим паузу
      .to({}, {duration: 2}) // Ждем 2 секунды
      
      // Исчезаем
      .to(['#product', '#text1', '#button'], {duration: 0.4, opacity: 0, ease: "power2.in"});
      
    // --- ОБЯЗАТЕЛЬНАЯ ЧАСТЬ: Обработка клика ---
    document.getElementById('myBanner').addEventListener('click', function() {
        // Ссылка, на которую ведет баннер (берем из data-атрибута или прописываем тут)
        // ВАЖНО: Обычно в сетях используют спец. макросы типа {CLICK_URL}
        var destinationUrl = 'https://твой-сайт.рф/?utm_source=banner&utm_medium=cpc';
        
        // Открываем в новом окне (стандарт для баннеров)
        window.open(destinationUrl, '_blank');
        
        // Или для некоторых сетей:
        // window.parent.location.href = destinationUrl; // Осторожно, может не сработать из-за iframe
    });
});