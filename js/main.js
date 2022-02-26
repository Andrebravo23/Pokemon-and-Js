//Creating a Pokemon class and its constructor
class Pokemon {
    //our pokemons will have an id, a name, a gender, a level and, sometimes, they will be holding an item
    constructor(id, name, gender, lvl, item) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.lvl = lvl;
        this.item = item;
    }
}

//it will be easier if we have a constant to store the path
const path = "assets/img/";

//this function will show the information of a selected pokemon
function showInfo(poke) {
    //With the line below we will set the corresponding pokemon gif as the source of our pokePic img
    document.getElementById('pokePic').setAttribute('src', `${path}pokemons/${poke.id}.gif`);
    //We need to show the name of our pokemon
    document.getElementById('pokeName').innerHTML = `${poke.name.toUpperCase()}<br>/${poke.name.toUpperCase()}`;
    //Set the corresponding icon to show its gender
    document.getElementById('pokeGender').setAttribute('src', `${path}${poke.gender}.png`);
    //and show its level and, if it is holding an item, the held item
    document.getElementById('pokeLvl').innerHTML = `Lv${poke.lvl}`;
    document.getElementById('pokeItem').innerHTML = poke.item.toUpperCase();
}

//this array will contain all our pokemons
let pokemons = new Array();
//We will add our pokemons to our array using the constructor method
pokemons.push(new Pokemon('1', 'bulbasaur', 'male', '25', 'leftovers'));
pokemons.push(new Pokemon('2', 'ivysaur', 'female', '36', ''));
pokemons.push(new Pokemon('3', 'venusaur', 'female', '64', ''));
pokemons.push(new Pokemon('4', 'charmander', 'male', '12', ''));
pokemons.push(new Pokemon('5', 'charmeleon', 'male', '30', ''));
pokemons.push(new Pokemon('6', 'charizard', 'female', '63', ''));
pokemons.push(new Pokemon('7', 'squirtle', 'male', '10', ''));
pokemons.push(new Pokemon('8', 'wartortle', 'female', '26', ''));
pokemons.push(new Pokemon('9', 'blastoise', 'male', '49', ''));
pokemons.push(new Pokemon('10', 'caterpie', 'male', '19', ''));
pokemons.push(new Pokemon('11', 'metapod', 'female', '39', ''));
pokemons.push(new Pokemon('12', 'butterfree', 'female', '53', ''));
pokemons.push(new Pokemon('13', 'weedle', 'female', '8', ''));
pokemons.push(new Pokemon('14', 'kakuna', 'male', '20', ''));
pokemons.push(new Pokemon('15', 'beedrill', 'male', '43', 'leftovers'));
pokemons.push(new Pokemon('16', 'pidgey', 'male', '15', ''));
pokemons.push(new Pokemon('17', 'pidgeotto', 'male', '32', ''));
pokemons.push(new Pokemon('18', 'pidgeot', 'female', '47', ''));
pokemons.push(new Pokemon('19', 'rattata', 'female', '13', ''));
pokemons.push(new Pokemon('20', 'raticate', 'male', '22', ''));
pokemons.push(new Pokemon('21', 'spearow', 'female', '12', ''));
pokemons.push(new Pokemon('22', 'fearow', 'male', '29', ''));
pokemons.push(new Pokemon('23', 'ekans', 'female', '13', ''));
pokemons.push(new Pokemon('24', 'arbok', 'male', '27', ''));
pokemons.push(new Pokemon('25', 'pikachu', 'male', '15', ''));
pokemons.push(new Pokemon('26', 'raichu', 'male', '57', ''));
pokemons.push(new Pokemon('27', 'sandshrew', 'male', '20', ''));
pokemons.push(new Pokemon('28', 'sandslash', 'female', '53', ''));
pokemons.push(new Pokemon('29', 'nidoran', 'female', '16', ''));
pokemons.push(new Pokemon('30', 'nidorina', 'female', '44', ''));

//I am too lazy to create 30 pokemon containers on the html file
//so I learned how to clone a single container lmao, here's how:

//we get the original container by its id
const original = document.getElementById('pokeToClone');
//we won't need the id anymore...
original.removeAttribute('id');

//we will clone the original container as many times as pokemons we have
for (let i = 1; i < pokemons.length; i++) {
    let copy = original.cloneNode(true);
    //then we will append the clones to the parent of the original container
    original.parentNode.appendChild(copy);
}

//We are done! now we need to get all our pokeicons to show the icons of our pokemons on the containers
const pokeicons = document.getElementsByClassName('pokeicon');

//for each element with the class "pokeicon" we have we are going to...
for (let i = 0; i < pokeicons.length; i++) {
    //set the icon as the source
    pokeicons[i].setAttribute('src', `${path}pokemons/icons/${i+1}.png`);
    //and add the click event listener, this way you will see the pokemon info when you click the icon
    pokeicons[i].addEventListener('click', function(){showInfo(pokemons[i])});
}