import logo from './logo.svg';
import './App.css';

function App() {
  const pokemones = [{
    name: 'Aron',
    id: 304,
    type: ["steel", "rock"],
    weight: 60.0,
    height: 0.4,
    moves: 'sturdy rock-head',
    description: 'it eats iron ore - and sometimes railroad tracks - to build up the the steel armor that protects its body.',
    HP: 50,
    APK: 70,
    DEF: 100,
    SATK: 40,
    SDEF: 40,
    SPD: 30
  },
{
  name: 'Bulbasaur',
    id: 1,
    type: ["grass", "poison"],
    weight: 6.9,
    height: 0.7,
    moves: 'chlorophyll overgrow',
    description: 'there is a plant seed on its back right from the day this Pokemon is born. the seed slowly grows larger',
    HP: 45,
    APK: 49,
    DEF: 49,
    SATK: 65,
    SDEF: 65,
    SPD: 45
},
{
  name: 'Butterfree',
    id: 12,
    type: ["bug", "flying"],
    weight: 32,
    height: 1.1,
    moves: 'compound-eyes tinted-lens',
    description: 'in battle, it flaps its wings at great speed to release highly toxic dust into the air',
    HP: 80,
    APK: 45,
    DEF: 50,
    SATK: 90,
    SDEF: 80,
    SPD: 70
},
{name: 'Charmander',
    id: 4,
    type: 'fire',
    weight: 8.5,
    height: 0.6,
    moves: 'mega-punch fire-punch',
    description: 'it has a preference for hot things. when it rains, steam is said to spout from the tip of his tail.',
    HP: 39,
    APK: 52,
    DEF: 43,
    SATK: 60,
    SDEF: 50,
    SPD: 65},
  {
    name: 'Ditto',
    id: 132,
    type: "normal",
    weight: 4.0,
    height: 0.3,
    moves: 'limber imposter',
    description: 'it can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.',
    HP: 48,
    APK: 48,
    DEF: 48,
    SATK: 48,
    SDEF: 48,
    SPD: 48
  },
  {
    name: 'Gastly',
    id: 92,
    type: ["ghost", "type"],
    weight: 0.1,
    height: 1.3,
    moves: 'levitate',
    description: 'born from gases, anyone would faint if engulfed by its gaseous body, which contains poison',
    HP: 30,
    APK: 35,
    DEF: 30,
    SATK: 100,
    SDEF: 35,
    SPD: 80
  },
  {
    name: 'Mew',
    id: 152,
    type: "psychic",
    weight: 4.0,
    height: 0.4,
    moves: 'syncronize',
    description: 'when viewed through a microscope, this Pokemon`s short, fine, delicate hair can be seen.',
    HP: 100,
    APK: 100,
    DEF: 100,
    SATK: 100,
    SDEF: 100,
    SPD: 100
  }
  ]
  return (
    <div className="App">

    </div>
  );
}

export default App;
