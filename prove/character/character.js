const aCharacter = {
    name: 'SnortleBlat',
    class: 'Class: Swamp Beast',
    level: 'Level: 5',
    health: '100',
    charlogo: '../images/snortleblat.webp'
};


document.querySelector('#image').setAttribute('src', aCharacter.charlogo);
document.querySelector('#name').textContent = aCharacter.name;
document.querySelector('#class').textContent = aCharacter.class;
document.querySelector('#level').textContent = aCharacter.level;
document.querySelector('#health').textContent = aCharacter.health;
