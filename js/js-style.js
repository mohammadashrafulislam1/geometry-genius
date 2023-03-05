var cards = document.getElementsByClassName('card');
for (var i = 0; i < cards.length; i++) {
    cards[i].onmouseover = function(e) {
        var color = '#'+Math.floor(Math.random()*16777215).toString(16);
        var colorString = color;
        this.style['background-color'] = colorString;
    }
    cards[i].onmouseout = function(e) {
        this.style['background-color'] = "#fff";
    }
    
    
}