const aCharacter = {
    name: 'SnortleBlat',
    class: 'Class: Swamp Beast',
    level: 5,
    health: 100,
    charlogo: '../images/snortleblat.webp',
    attack: function () {
        if (this.level < 10) {
            this.health -= 20;
        }
        if (this.level >= 10) {
            this.health -= 10;
        }
        if (this.health <= 0) {
            alert('Character has died');
            this.health = 100;
            this.level = 5;
        }
        
        return this.health;
    },

    levelUp: function () {
        this.level += 1;
        return this.level;
    }
};




document.querySelector('#image').setAttribute('src', aCharacter.charlogo);
document.querySelector('#name').textContent = aCharacter.name;
document.querySelector('#class').textContent = aCharacter.class;
document.querySelector('#level').textContent = `Level: ${aCharacter.level}`;
document.querySelector('#health').textContent = `Health: ${aCharacter.health}`;



document.querySelector('#attack').addEventListener('click', function() {
    aCharacter.attack();
    document.querySelector('#health').textContent = `Health: ${aCharacter.health}`;
    document.querySelector('#level').textContent = `Level: ${aCharacter.level}`
}); 

document.querySelector('#levelUp').addEventListener('click', function() {
    aCharacter.levelUp();
    document.querySelector('#level').textContent = `Level: ${aCharacter.level}`;
});


