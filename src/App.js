import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buscador from "./Componentes/Buscador/Buscador";
import Detalles from "./Componentes/Detalles/Detalles";

function App() {
  const pokemones = [
    {
      name: "Aron",
      color: "#8789D0",
      id: 304,
      type: ["Steel", "Rock"],
      weight: 60.0,
      height: 0.4,
      moves: ["Sturdy, ", "Rock-Head"],
      description:
        "it eats iron ore - and sometimes railroad tracks - to build up the the steel armor that protects its body.",
      stats: {
        HP: 50,
        APK: 70,
        DEF: 100,
        SATK: 40,
        SDEF: 40,
        SPD: 30,
      }
    },
    {
      name: "Bulbasaur",
      color: "#74CB48",
      id: 1,
      type: ["Grass", "Poison"],
      weight: 6.9,
      height: 0.7,
      moves: ["Chlorophyll Overgrow"],
      description:
        "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
      stats: {
        HP: 45,
        APK: 49,
        DEF: 49,
        SATK: 65,
        SDEF: 65,
        SPD: 45,
      }
    },


    {
      name: "Ivysaur",
      color: "#74CB48",
      id: 2,
      type: ["Grass", "Poison"],
      weight: 13.0,
      height: 1.0,
      moves: ["Overgrow"],
      description:
        "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
      stats: {
        HP: 60,
        APK: 62,
        DEF: 63,
        SATK: 80,
        SDEF: 80,
        SPD: 60,
      }
    },

    {
      name: "Venusaur",
      color: "#74CB48",
      id: 3,
      type: ["Grass", "Poison"],
      weight: 100.0,
      height: 2.0,
      moves: ["Overgrow"],
      description:
        "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
      stats: {
        HP: 80,
        APK: 82,
        DEF: 83,
        SATK: 100,
        SDEF: 100,
        SPD: 80,
      }
    },

    {
      name: "Charmander",
      color: "#F57D31",
      id: 4,
      type: ["Fire"],
      weight: 8.5,
      height: 0.6,
      moves: ["Mega-Punch, ", "Fire-Punch"],
      description:
        "it has a preference for hot things. when it rains, steam is said to spout from the tip of his tail.",
      stats: {
        HP: 39,
        APK: 52,
        DEF: 43,
        SATK: 60,
        SDEF: 50,
        SPD: 65,
      }
    },

    {
      name: "Charmeleon",
      color: "#F57D31",
      id: 5,
      type: ["Fire"],
      weight: 19.0,
      height: 1.1,
      moves: ["Blaze"],
      description:
        "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
      stats: {
        HP: 58,
        APK: 64,
        DEF: 58,
        SATK: 80,
        SDEF: 65,
        SPD: 80,
      }
    },

    {
      name: "Charizard",
      color: "#F57D31",
      id: 6,
      type: ["Fire", "Flying"],
      weight: 90.5,
      height: 1.7,
      moves: ["Blaze"],
      description:
        "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
      stats: {
        HP: 78,
        APK: 84,
        DEF: 78,
        SATK: 109,
        SDEF: 85,
        SPD: 100,
      }
    },

    {
      name: "Squirtle",
      color: "#6493EB",
      id: 7,
      type: ["Water"],
      weight: 9.0,
      height: 0.5,
      moves: ["Torrent, ", "Rain-Dish"],
      description:
        "When it retracts its long neck into its shell, it squirts out  water with vigorous force.",
      stats: {
        HP: 44,
        APK: 48,
        DEF: 65,
        SATK: 50,
        SDEF: 64,
        SPD: 43,
      }
    },

    {
      name: "Wartortle",
      color: "#6493EB",
      id: 8,
      type: ["Water"],
      weight: 22.5,
      height: 1.0,
      moves: ["Torrent"],
      description:
        "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
      stats: {
        HP: 63,
        APK: 80,
        DEF: 65,
        SATK: 50,
        SDEF: 80,
        SPD: 58,
      }
    },

    {
      name: "Blastoise",
      color: "#6493EB",
      id: 9,
      type: ["Water"],
      weight: 85.5,
      height: 1.6,
      moves: ["Torrent"],
      description:
        "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
      stats: {
        HP: 79,
        APK: 83,
        DEF: 100,
        SATK: 85,
        SDEF: 105,
        SPD: 78,
      }
    },

    {
      name: "Caterpie",
      color: "#A7B723",
      id: 10,
      type: ["Bug"],
      weight: 2.92,
      height: 0.3,
      moves: ["Shield Dust"],
      description:
        "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
      stats: {
        HP: 45,
        APK: 30,
        DEF: 35,
        SATK: 20,
        SDEF: 20,
        SPD: 45,
      }
    },

    {
      name: "Metapod",
      color: "#A7B723",
      id: 11,
      type: ["Bug"],
      weight: 9.9,
      height: 0.7,
      moves: ["Shed Skin"],
      description:
        "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
      stats: {
        HP: 50,
        APK: 20,
        DEF: 55,
        SATK: 25,
        SDEF: 25,
        SPD: 30,
      }
    },

    {
      name: "Butterfree",
      color: "#A7B723",
      id: 12,
      type: ["Bug", "Flying"],
      weight: 32,
      height: 1.1,
      moves: ["Compound-Eyes, ", "Tinted-Lens"],
      description:
        "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
      stats: {
        HP: 80,
        APK: 45,
        DEF: 50,
        SATK: 90,
        SDEF: 80,
        SPD: 70,
      }
    },

    {
      name: "Weedle",
      color: "#A7B723",
      id: 13,
      type: ["Bug", "Poison"],
      weight: 3.2,
      height: 0.3,
      moves: ["Shield Dust"],
      description:
        "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
      stats: {
        HP: 40,
        APK: 35,
        DEF: 30,
        SATK: 20,
        SDEF: 20,
        SPD: 50,
      }
    },

    {
      name: "Kakuna",
      color: "#A7B723",
      id: 14,
      type: ["Bug", "Poison"],
      weight: 10.0,
      height: 0.6,
      moves: ["Shed Skin"],
      description:
        "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
      stats: {
        HP: 45,
        APK: 25,
        DEF: 50,
        SATK: 25,
        SDEF: 25,
        SPD: 35,
      }
    },

    {
      name: "Beedrill",
      color: "#A7B723",
      id: 15,
      type: ["Bug", "Poison"],
      weight: 29.50,
      height: 1.0,
      moves: ["Swarm"],
      description:
        "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
      stats: {
        HP: 65,
        APK: 90,
        DEF: 40,
        SATK: 45,
        SDEF: 80,
        SPD: 75,
      }
    },

    {
      name: "Pidgey",
      color: "#AAA67F",
      id: 16,
      type: ["Normal", "Flying"],
      weight: 1.8,
      height: 0.3,
      moves: ["Vista Lince, ", "Tumbos"],
      description:
        "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
      stats: {
        HP: 40,
        APK: 45,
        DEF: 40,
        SATK: 35,
        SDEF: 35,
        SPD: 56,
      }
    },

    {
      name: "Pidgeotto",
      color: "#AAA67F",
      id: 17,
      type: ["Normal", "Flying"],
      weight: 30.0,
      height: 1.1,
      moves: ["Keen Eye, ", "Tangled Feet"],
      description:
        "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.",
      stats: {
        HP: 63,
        APK: 60,
        DEF: 55,
        SATK: 50,
        SDEF: 50,
        SPD: 71,
      }
    },

    {
      name: "Pidgeot",
      color: "#AAA67F",
      id: 18,
      type: ["Normal", "Flying"],
      weight: 39.5,
      height: 1.5,
      moves: ["Keen Eye, ", "Tangled Feet"],
      description:
        "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
      stats: {
        HP: 83,
        APK: 80,
        DEF: 75,
        SATK: 70,
        SDEF: 70,
        SPD: 101,
      }
    },

    {
      name: "Rattata",
      color: "#AAA67F",
      id: 19,
      type: ["Normal"],
      weight: 3.5,
      height: 0.3,
      moves: ["Run Away, ", "Guts"],
      description:
        "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.",
      stats: {
        HP: 30,
        APK: 56,
        DEF: 35,
        SATK: 25,
        SDEF: 35,
        SPD: 72,
      }
    },

    {
      name: "Raticate",
      color: "#AAA67F",
      id: 20,
      type: ["Normal"],
      weight: 18.5,
      height: 0.7,
      moves: ["Run Away, ", "Guts"],
      description:
        "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
      stats: {
        HP: 55,
        APK: 81,
        DEF: 60,
        SATK: 50,
        SDEF: 70,
        SPD: 97,
      }
    },

    {
      name: "Spearow",
      color: "#AAA67F",
      id: 21,
      type: ["Normal", "Flying"],
      weight: 2.0,
      height: 0.3,
      moves: ["Keen Eye"],
      description:
        "Inept at flying high. However, it can fly around very fast to protect its territory.",
      stats: {
        HP: 40,
        APK: 60,
        DEF: 30,
        SATK: 31,
        SDEF: 31,
        SPD: 70,
      }
    },

    {
      name: "Fearow",
      color: "#AAA67F",
      id: 22,
      type: ["Normal", "Flying"],
      weight: 38.0,
      height: 1.2,
      moves: ["Vista Lince"],
      description:
        "A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly.",
      stats: {
        HP: 65,
        APK: 90,
        DEF: 65,
        SATK: 61,
        SDEF: 61,
        SPD: 100,
      }
    },

    {
      name: "Ekans",
      color: "#a43e9e",
      id: 23,
      type: ["Poison"],
      weight: 6.9,
      height: 2.0,
      moves: ["Shed Skin, ", "Intimidate"],
      description:
        "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.",
      stats: {
        HP: 35,
        APK: 60,
        DEF: 44,
        SATK: 40,
        SDEF: 54,
        SPD: 55,
      }
    },

    {
      name: "Arbok",
      color: "#a43e9e",
      id: 24,
      type: ["Poison"],
      weight: 65.0,
      height: 3.5,
      moves: ["Shed Skin, ", "Intimidate"],
      description:
        "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
      stats: {
        HP: 60,
        APK: 95,
        DEF: 69,
        SATK: 65,
        SDEF: 79,
        SPD: 80,
      }
    },

    {
      name: "Pikachu",
      color: "#F9CF30",
      id: 25,
      type: ["Electric"],
      weight: 6.0,
      height: 0.4,
      moves: ["Mega-Punch, ", "Pay-Day"],
      description:
        "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
      stats: {
        HP: 35,
        APK: 55,
        DEF: 40,
        SATK: 50,
        SDEF: 50,
        SPD: 90,
      }
    },

    {
      name: "Raichu",
      color: "#F9CF30",
      id: 26,
      type: ["Electric"],
      weight: 30.0,
      height: 0.8,
      moves: ["Static"],
      description:
        "Its long tail serves as a ground to protect itself from its own high-voltage power.",
      stats: {
        HP: 60,
        APK: 90,
        DEF: 55,
        SATK: 90,
        SDEF: 80,
        SPD: 110,
      }
    },

    {
      name: "Sandshrew",
      color: "#dec16b",
      id: 27,
      type: ["Ground"],
      weight: 12.0,
      height: 0.6,
      moves: ["Sand Veil"],
      description:
        "It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokémon rids itself of dirt and moisture clinging to its body.",
      stats: {
        HP: 50,
        APK: 75,
        DEF: 85,
        SATK: 20,
        SDEF: 30,
        SPD: 40,
      }
    },

    {
      name: "Sandslash",
      color: "#dec16b",
      id: 28,
      type: ["Ground"],
      weight: 29.5,
      height: 1.0,
      moves: ["Sand Veil"],
      description:
        "The drier the area Sandslash lives in, the harder and smoother the Pokémon’s spikes will feel when touched.",
      stats: {
        HP: 55,
        APK: 75,
        DEF: 100,
        SATK: 110,
        SDEF: 55,
        SPD: 65,
      }
    },

    {
      name: "Nidoran♀",
      color: "#a43e9e",
      id: 29,
      type: ["Poison"],
      weight: 7.0,
      height: 0.4,
      moves: ["Poison Point, ", "Rivalry"],
      description:
        "Females are more sensitive to smells than males. While foraging, they’ll use their whiskers to check wind direction and stay downwind of predators.",
      stats: {
        HP: 55,
        APK: 47,
        DEF: 52,
        SATK: 41,
        SDEF: 40,
        SPD: 40,
      }
    },

    {
      name: "Nidorina",
      color: "#a43e9e",
      id: 30,
      type: ["Poison"],
      weight: 20.0,
      height: 0.8,
      moves: ["Poison Point, ", "Rivalry"],
      description:
        "The horn on its head has atrophied. It’s thought that this happens so Nidorina’s children won’t get poked while their mother is feeding them.",
      stats: {
        HP: 70,
        APK: 62,
        DEF: 67,
        SATK: 55,
        SDEF: 55,
        SPD: 56,
      }
    },

    {
      name: "Nidoqueen",
      color: "#a43e9e",
      id: 31,
      type: ["Poison", "Ground"],
      weight: 60.0,
      height: 1.3,
      moves: ["Poison Point, ", "Rivalry"],
      description:
        "Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.",
      stats: {
        HP: 90,
        APK: 92,
        DEF: 87,
        SATK: 75,
        SDEF: 85,
        SPD: 76,
      }
    },

    {
      name: "Nidoran♂",
      color: "#a43e9e",
      id: 32,
      type: ["Poison"],
      weight: 9.0,
      height: 0.5,
      moves: ["Poison Point, ", "Rivalry"],
      description:
        "The horn on a male Nidoran’s forehead contains a powerful poison. This is a very cautious Pokémon, always straining its large ears.",
      stats: {
        HP: 46,
        APK: 57,
        DEF: 40,
        SATK: 50,
        SDEF: 40,
        SPD: 40,
      }
    },

    {
      name: "Nidorino",
      color: "#a43e9e",
      id: 33,
      type: ["Poison"],
      weight: 19.8,
      height: 0.9,
      moves: ["Poison Point, ", "Rivalry"],
      description:
        "With a horn that’s harder than diamond, this Pokémon goes around shattering boulders as it searches for a moon stone.",
      stats: {
        HP: 61,
        APK: 72,
        DEF: 57,
        SATK: 55,
        SDEF: 55,
        SPD: 65,
      }
    },

    {
      name: "Nidoking",
      color: "#a43e9e",
      id: 34,
      type: ["Poison", "Ground"],
      weight: 62.0,
      height: 1.4,
      moves: ["Poison Point, ", "Rivalry"],
      description:
        "When it goes on a rampage, it’s impossible to control. But in the presence of a Nidoqueen it’s lived with for a long time, Nidoking calms down.",
      stats: {
        HP: 81,
        APK: 102,
        DEF: 77,
        SATK: 85,
        SDEF: 75,
        SPD: 85,
      }
    },

    {
      name: "Clefairy",
      color: "#e69eac",
      id: 35,
      type: ["Fairy"],
      weight: 7.5,
      height: 0.6,
      moves: ["Cute Charm"],
      description:
        "It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.",
      stats: {
        HP: 70,
        APK: 45,
        DEF: 48,
        SATK: 60,
        SDEF: 65,
        SPD: 35,
      }
    },

    {
      name: "Clefable",
      color: "#e69eac",
      id: 36,
      type: ["Fairy"],
      weight: 40.0,
      height: 1.3,
      moves: ["Magic Guard"],
      description:
        "A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people.",
      stats: {
        HP: 95,
        APK: 70,
        DEF: 73,
        SATK: 95,
        SDEF: 90,
        SPD: 60,
      }
    },

    {
      name: "Vulpix",
      color: "#F57D31",
      id: 37,
      type: ["Fire"],
      weight: 9.9,
      height: 0.6,
      moves: ["Flash Fire"],
      description:
        "While young, it has six gorgeous tails. When it grows, several new tails are sprouted.",
      stats: {
        HP: 38,
        APK: 41,
        DEF: 40,
        SATK: 50,
        SDEF: 65,
        SPD: 65,
      }
    },

    {
      name: "Ninetales",
      color: "#F57D31",
      id: 38,
      type: ["Fire"],
      weight: 19.9,
      height: 1.1,
      moves: ["Flash Fire"],
      description:
        "It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.",
      stats: {
        HP: 73,
        APK: 76,
        DEF: 75,
        SATK: 84,
        SDEF: 100,
        SPD: 100,
      }
    },

    {
      name: "Jigglypuff",
      color: "#AAA67F",
      id: 39,
      type: ["Normal", "Fairy"],
      weight: 5.5,
      height: 0.5,
      moves: ["Cute Charm, ", "Competitive"],
      description:
        "Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep.",
      stats: {
        HP: 115,
        APK: 45,
        DEF: 20,
        SATK: 45,
        SDEF: 25,
        SPD: 20,
      }
    },

    {
      name: "Wigglytuff",
      color: "#AAA67F",
      id: 40,
      type: ["Normal", "Fairy"],
      weight: 12.0,
      height: 1.0,
      moves: ["Cute Charm, ", "Competitive"],
      description:
        "The more air it takes in, the more it inflates. If opponents catch it in a bad mood, it will inflate itself to an enormous size to intimidate them.",
      stats: {
        HP: 140,
        APK: 70,
        DEF: 45,
        SATK: 85,
        SDEF: 50,
        SPD: 45,
      }
    },

    {
      name: "Zubat",
      color: "#a43e9e",
      id: 41,
      type: ["Poison", "Flying"],
      weight: 7.5,
      height: 0.8,
      moves: ["Inner Focus"],
      description:
        "It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill.",
      stats: {
        HP: 40,
        APK: 45,
        DEF: 35,
        SATK: 30,
        SDEF: 40,
        SPD: 55,
      }
    },

    {
      name: "Golbat",
      color: "#a43e9e",
      id: 42,
      type: ["Poison", "Flying"],
      weight: 55.0,
      height: 1.6,
      moves: ["Inner Focus"],
      description:
        "It loves to drink other creatures’ blood. It’s said that if it finds others of its kind going hungry, it sometimes shares the blood it’s gathered.",
      stats: {
        HP: 75,
        APK: 80,
        DEF: 70,
        SATK: 65,
        SDEF: 75,
        SPD: 90,
      }
    },

    {
      name: "Oddish",
      color: "#74cb48",
      id: 43,
      type: ["Grass", "Poison"],
      weight: 5.4,
      height: 0.5,
      moves: ["Chlorophyll"],
      description:
        "If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.",
      stats: {
        HP: 45,
        APK: 50,
        DEF: 55,
        SATK: 75,
        SDEF: 65,
        SPD: 30,
      }
    },

    {
      name: "Gloom",
      color: "#74cb48",
      id: 44,
      type: ["Grass", "Poison"],
      weight: 8.6,
      height: 0.8,
      moves: ["Chlorophyll"],
      description:
        "Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.",
      stats: {
        HP: 60,
        APK: 65,
        DEF: 70,
        SATK: 85,
        SDEF: 75,
        SPD: 40,
      }
    },

    {
      name: "Vileplume",
      color: "#74cb48",
      id: 45,
      type: ["Grass", "Poison"],
      weight: 18.6,
      height: 1.2,
      moves: ["Chlorophyll"],
      description:
        "It has the world’s largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
      stats: {
        HP: 75,
        APK: 80,
        DEF: 85,
        SATK: 110,
        SDEF: 90,
        SPD: 50,
      }
    },

    {
      name: "Paras",
      color: "#a7b723",
      id: 46,
      type: ["Bug", "Grass"],
      weight: 5.4,
      height: 0.3,
      moves: ["Effect Spore, ", "Dry Skin"],
      description:
        "Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition.",
      stats: {
        HP: 35,
        APK: 75,
        DEF: 55,
        SATK: 45,
        SDEF: 55,
        SPD: 25,
      }
    },

    {
      name: "Parasect",
      color: "#a7b723",
      id: 47,
      type: ["Bug", "Grass"],
      weight: 29.5,
      height: 1.0,
      moves: ["Effect Spore, ", "Dry Skin"],
      description:
        "The bug host is drained of energy by the mushroom on its back. The mushroom appears to do all the thinking.",
      stats: {
        HP: 60,
        APK: 95,
        DEF: 80,
        SATK: 60,
        SDEF: 80,
        SPD: 30,
      }
    },

    {
      name: "Venonat",
      color: "#a7b723",
      id: 48,
      type: ["Bug", "Poison"],
      weight: 30.0,
      height: 1.0,
      moves: ["Tinted Lens"],
      description:
        "Its large eyes act as radar. In a bright place, you can see that they are clusters of many tiny eyes.",
      stats: {
        HP: 60,
        APK: 55,
        DEF: 50,
        SATK: 40,
        SDEF: 55,
        SPD: 45,
      }
    },

    {
      name: "Venomoth",
      color: "#a7b723",
      id: 49,
      type: ["Bug", "Poison"],
      weight: 12.5,
      height: 1.5,
      moves: ["Shield Dust, ", "Tinted Lens"],
      description:
        "The powdery scales on its wings are hard to remove from skin. They also contain poison that leaks out on contact.",
      stats: {
        HP: 70,
        APK: 65,
        DEF: 60,
        SATK: 90,
        SDEF: 75,
        SPD: 90,
      }
    },

    {
      name: "Diglett",
      color: "#dec16b",
      id: 50,
      type: ["Ground"],
      weight: 0.8,
      height: 0.2,
      moves: ["Sand Veil, ", "Arena Trap"],
      description:
        "If a Diglett digs through a field, it leaves the soil perfectly tilled and ideal for planting crops.",
      stats: {
        HP: 10,
        APK: 55,
        DEF: 25,
        SATK: 35,
        SDEF: 45,
        SPD: 95,
      }
    },

    {
      name: "Dugtrio",
      color: "#dec16b",
      id: 51,
      type: ["Ground"],
      weight: 33.3,
      height: 0.3,
      moves: ["Sand Veil, ", "Arena Trap"],
      description:
        "A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground.",
      stats: {
        HP: 35,
        APK: 100,
        DEF: 50,
        SATK: 50,
        SDEF: 70,
        SPD: 120,
      }
    },

    {
      name: "Meowth",
      color: "#aaa67f",
      id: 52,
      type: ["Normal"],
      weight: 4.2,
      height: 0.4,
      moves: ["Pickup, ", "Technician"],
      description:
        "It loves to collect shiny things. If it’s in a good mood, it might even let its Trainer have a look at its hoard of treasures.",
      stats: {
        HP: 40,
        APK: 45,
        DEF: 35,
        SATK: 40,
        SDEF: 40,
        SPD: 90,
      }
    },

    {
      name: "Persian",
      color: "#aaa67f",
      id: 53,
      type: ["Normal"],
      weight: 32.0,
      height: 1.0,
      moves: ["Technician, ", "Limber"],
      description:
        "Getting this prideful Pokémon to warm up to you takes a lot of effort, and it will claw at you the moment it gets annoyed.",
      stats: {
        HP: 65,
        APK: 70,
        DEF: 60,
        SATK: 65,
        SDEF: 65,
        SPD: 115,
      }
    },

    {
      name: "Psyduck",
      color: "#649eb6",
      id: 54,
      type: ["Water"],
      weight: 19.6,
      height: 0.8,
      moves: ["Damp, ", "Cloud Nine"],
      description:
        "Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt, apparently the pain subsides for a while.",
      stats: {
        HP: 50,
        APK: 52,
        DEF: 48,
        SATK: 65,
        SDEF: 50,
        SPD: 55,
      }
    },

    {
      name: "Golduck",
      color: "#649eb6",
      id: 55,
      type: ["Water"],
      weight: 76.6,
      height: 1.7,
      moves: ["Damp, ", "Cloud Nine"],
      description:
        "This Pokémon lives in gently flowing rivers. It paddles through the water with its long limbs, putting its graceful swimming skills on display.",
      stats: {
        HP: 80,
        APK: 82,
        DEF: 78,
        SATK: 95,
        SDEF: 80,
        SPD: 85,
      }
    },

    {
      name: "Mankey",
      color: "#c12239",
      id: 56,
      type: ["Fighting"],
      weight: 28.0,
      height: 0.5,
      moves: ["Vital Spirit, ", "Anger Point"],
      description:
        "An agile Pokémon that lives in trees. It angers easily and will not hesitate to attack anything.",
      stats: {
        HP: 40,
        APK: 80,
        DEF: 35,
        SATK: 35,
        SDEF: 45,
        SPD: 70,
      }
    },

    {
      name: "Primeape",
      color: "#c12239",
      id: 57,
      type: ["Fighting"],
      weight: 32.0,
      height: 1.0,
      moves: ["Vital Spirit, ", "Anger Point"],
      description:
        "It stops being angry only when nobody else is around. To view this moment is very difficult.",
      stats: {
        HP: 65,
        APK: 105,
        DEF: 60,
        SATK: 60,
        SDEF: 70,
        SPD: 95,
      }
    },

    {
      name: "Growlithe",
      color: "#f57d31",
      id: 58,
      type: ["Fire"],
      weight: 19.0,
      height: 0.7,
      moves: ["Intimidate, ", "Flash Fire"],
      description:
        "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
      stats: {
        HP: 55,
        APK: 70,
        DEF: 45,
        SATK: 70,
        SDEF: 50,
        SPD: 60,
      }
    },

    {
      name: "Arcanine",
      color: "#f57d31",
      id: 59,
      type: ["Fire"],
      weight: 155.0,
      height: 1.9,
      moves: ["Intimidate, ", "Flash Fire"],
      description:
        "The sight of it running over 6,200 miles in a single day and night has captivated many people.",
      stats: {
        HP: 90,
        APK: 110,
        DEF: 80,
        SATK: 100,
        SDEF: 80,
        SPD: 95,
      }
    },

    {
      name: "Poliwag",
      color: "#649eb6",
      id: 60,
      type: ["Water"],
      weight: 12.4,
      height: 0.6,
      moves: ["Damp, ", "Water Absorb"],
      description:
        "For Poliwag, swimming is easier than walking. The swirl pattern on its belly is actually part of the Pokémon’s innards showing through the skin.",
      stats: {
        HP: 40,
        APK: 50,
        DEF: 40,
        SATK: 40,
        SDEF: 40,
        SPD: 90,
      }
    },

    {
      name: "Poliwhirl",
      color: "#649eb6",
      id: 61,
      type: ["Water"],
      weight: 20.0,
      height: 1.0,
      moves: ["Damp, ", "Water Absorb"],
      description:
        "Staring at the swirl on its belly causes drowsiness. This trait of Poliwhirl’s has been used in place of lullabies to get children to go to sleep.",
      stats: {
        HP: 65,
        APK: 65,
        DEF: 65,
        SATK: 50,
        SDEF: 50,
        SPD: 90,
      }
    },

    {
      name: "Poliwrath",
      color: "#649eb6",
      id: 62,
      type: ["Water", "Fighting"],
      weight: 54.0,
      height: 1.3,
      moves: ["Damp, ", "Water Absorb"],
      description:
        "Its body is solid muscle. When swimming through cold seas, Poliwrath uses its impressive arms to smash through drift ice and plow forward.",
      stats: {
        HP: 90,
        APK: 95,
        DEF: 95,
        SATK: 70,
        SDEF: 90,
        SPD: 70,
      }
    },

    {
      name: "Abra",
      color: "#fb5584",
      id: 63,
      type: ["Psychic"],
      weight: 19.5,
      height: 0.9,
      moves: ["Inner Focus, ", "Synchronize"],
      description:
        "This Pokémon uses its psychic powers while it sleeps. The contents of Abra’s dreams affect the powers that the Pokémon wields.",
      stats: {
        HP: 25,
        APK: 20,
        DEF: 15,
        SATK: 105,
        SDEF: 55,
        SPD: 90,
      }
    },

    {
      name: "Kadabra",
      color: "#fb5584",
      id: 64,
      type: ["Psychic"],
      weight: 56.5,
      height: 1.3,
      moves: ["Inner Focus, ", "Synchronize"],
      description:
        "Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow.",
      stats: {
        HP: 40,
        APK: 35,
        DEF: 30,
        SATK: 120,
        SDEF: 70,
        SPD: 105,
      }
    },

    {
      name: "Alakazam",
      color: "#fb5584",
      id: 65,
      type: ["Psychic"],
      weight: 48.0,
      height: 1.5,
      moves: ["Inner Focus, ", "Synchronize"],
      description:
        "Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow.",
      stats: {
        HP: 55,
        APK: 50,
        DEF: 45,
        SATK: 135,
        SDEF: 95,
        SPD: 120,
      }
    },

    {
      name: "Machop",
      color: "#c12239",
      id: 66,
      type: ["Fighting"],
      weight: 19.5,
      height: 0.8,
      moves: ["Guts, ", "No Guard"],
      description:
        "Its whole body is composed of muscles. Even though it’s the size of a human child, it can hurl 100 grown-ups.",
      stats: {
        HP: 70,
        APK: 80,
        DEF: 50,
        SATK: 35,
        SDEF: 35,
        SPD: 35,
      }
    },

    {
      name: "Machoke",
      color: "#c12239",
      id: 67,
      type: ["Fighting"],
      weight: 70.5,
      height: 1.5,
      moves: ["Guts, ", "No Guard"],
      description:
        "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.",
      stats: {
        HP: 80,
        APK: 100,
        DEF: 70,
        SATK: 50,
        SDEF: 60,
        SPD: 45,
      }
    },

    {
      name: "Machamp",
      color: "#c12239",
      id: 68,
      type: ["Fighting"],
      weight: 130.0,
      height: 1.6,
      moves: ["Guts, ", "No Guard"],
      description:
        "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.",
      stats: {
        HP: 90,
        APK: 130,
        DEF: 80,
        SATK: 65,
        SDEF: 85,
        SPD: 55,
      }
    },

    {
      name: "Bellsprout",
      color: "#74cb48",
      id: 69,
      type: ["Grass", "Poison"],
      weight: 4.0,
      height: 0.7,
      moves: ["Chlorophyll"],
      description:
        "Prefers hot and humid places. It ensnares tiny bugs with its vines and devours them.",
      stats: {
        HP: 50,
        APK: 75,
        DEF: 35,
        SATK: 70,
        SDEF: 30,
        SPD: 40,
      }
    },

    {
      name: "Weepinbell",
      color: "#74cb48",
      id: 70,
      type: ["Grass", "Poison"],
      weight: 6.4,
      height: 1.0,
      moves: ["Chlorophyll"],
      description:
        "When hungry, it swallows anything that moves. Its hapless prey is dissolved by strong acids.",
      stats: {
        HP: 65,
        APK: 90,
        DEF: 50,
        SATK: 85,
        SDEF: 55,
        SPD: 45,
      }
    },

    {
      name: "Victreebel",
      color: "#74cb48",
      id: 71,
      type: ["Grass", "Poison"],
      weight: 15.5,
      height: 1.7,
      moves: ["Chlorophyll"],
      description:
        "Lures prey with the sweet aroma of honey. Swallowed whole, the prey is dissolved in a day, bones and all.",
      stats: {
        HP: 80,
        APK: 105,
        DEF: 65,
        SATK: 100,
        SDEF: 70,
        SPD: 70,
      }
    },

    {
      name: "Tentacool",
      color: "#649eb6",
      id: 72,
      type: ["Water", "Poison"],
      weight: 45.5,
      height: 0.9,
      moves: ["Clear Body, ", "Liquid Ooze"],
      description:
        "Tentacool is not a particularly strong swimmer. It drifts across the surface of shallow seas as it searches for prey.",
      stats: {
        HP: 40,
        APK: 40,
        DEF: 35,
        SATK: 50,
        SDEF: 100,
        SPD: 70,
      }
    },

    {
      name: "Tentacruel",
      color: "#649eb6",
      id: 73,
      type: ["Water", "Poison"],
      weight: 55.0,
      height: 1.6,
      moves: ["Clear Body, ", "Liquid Ooze"],
      description:
        "When the red orbs on Tentacruel’s head glow brightly, watch out. The Pokémon is about to fire off a burst of ultrasonic waves.",
      stats: {
        HP: 80,
        APK: 70,
        DEF: 65,
        SATK: 80,
        SDEF: 120,
        SPD: 100,
      }
    },

    {
      name: "Geodude",
      color: "#b69e31",
      id: 74,
      type: ["Rock", "Ground"],
      weight: 55.0,
      height: 1.6,
      moves: ["Rock Head, ", "Sturdy"],
      description:
        "Commonly found near mountain trails and the like. If you step on one by accident, it gets angry.",
      stats: {
        HP: 40,
        APK: 80,
        DEF: 100,
        SATK: 30,
        SDEF: 30,
        SPD: 20,
      }
    },

    {
      name: "Graveler",
      color: "#b69e31",
      id: 75,
      type: ["Rock", "Ground"],
      weight: 105.0,
      height: 1.0,
      moves: ["Rock Head, ", "Sturdy"],
      description:
        "Often seen rolling down mountain trails. Obstacles are just things to roll straight over, not avoid.",
      stats: {
        HP: 55,
        APK: 95,
        DEF: 115,
        SATK: 45,
        SDEF: 45,
        SPD: 35,
      }
    },

    {
      name: "Golem",
      color: "#b69e31",
      id: 76,
      type: ["Rock", "Ground"],
      weight: 300.0,
      height: 1.4,
      moves: ["Rock Head, ", "Sturdy"],
      description:
        "Once it sheds its skin, its body turns tender and whitish. Its hide hardens when it’s exposed to air.",
      stats: {
        HP: 80,
        APK: 120,
        DEF: 130,
        SATK: 55,
        SDEF: 65,
        SPD: 45,
      }
    },

    {
      name: "Ponyta",
      color: "#f57d31",
      id: 77,
      type: ["Fire"],
      weight: 30.0,
      height: 1.0,
      moves: ["Run Away, ", "Flash Fire"],
      description:
        "It can’t run properly when it’s newly born. As it races around with others of its kind, its legs grow stronger.",
      stats: {
        HP: 50,
        APK: 85,
        DEF: 55,
        SATK: 65,
        SDEF: 65,
        SPD: 90,
      }
    },

    {
      name: "Rapidash",
      color: "#f57d31",
      id: 78,
      type: ["Fire"],
      weight: 95.0,
      height: 1.7,
      moves: ["Run Away, ", "Flash Fire"],
      description:
        "This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.",
      stats: {
        HP: 65,
        APK: 100,
        DEF: 70,
        SATK: 80,
        SDEF: 80,
        SPD: 105,
      }
    },

    {
      name: "Slowpoke",
      color: "#649eb6",
      id: 79,
      type: ["Water", "Psychic"],
      weight: 36.0,
      height: 1.2,
      moves: ["Oblivious, ", "Own Tempo"],
      description:
        "Slow-witted and oblivious, this Pokémon won’t feel any pain if its tail gets eaten. It won’t notice when its tail grows back, either.",
      stats: {
        HP: 90,
        APK: 65,
        DEF: 65,
        SATK: 40,
        SDEF: 40,
        SPD: 15,
      }
    },

    {
      name: "Slowbro",
      color: "#649eb6",
      id: 80,
      type: ["Water", "Psychic"],
      weight: 78.5,
      height: 1.6,
      moves: ["Oblivious, ", "Own Tempo"],
      description:
        "Slowpoke became Slowbro when a Shellder bit on to its tail. Sweet flavors seeping from the tail make the Shellder feel as if its life is a dream.",
      stats: {
        HP: 95,
        APK: 75,
        DEF: 110,
        SATK: 100,
        SDEF: 80,
        SPD: 30,
      }
    },

    {
      name: "Magnemite",
      color: "#f9cf30",
      id: 81,
      type: ["Electric", "Steel"],
      weight: 6.0,
      height: 0.3,
      moves: ["Sturdy, ", "Magnet Pull"],
      description:
        "At times, Magnemite runs out of electricity and ends up on the ground. If you give batteries to a grounded Magnemite, it’ll start moving again.",
      stats: {
        HP: 25,
        APK: 35,
        DEF: 70,
        SATK: 95,
        SDEF: 55,
        SPD: 45,
      }
    },

    {
      name: "Magneton",
      color: "#f9cf30",
      id: 82,
      type: ["Electric", "Steel"],
      weight: 60.0,
      height: 1.0,
      moves: ["Sturdy, ", "Magnet Pull"],
      description:
        "This Pokémon is three Magnemite that have linked together. Magneton sends out powerful radio waves to study its surroundings.",
      stats: {
        HP: 50,
        APK: 60,
        DEF: 95,
        SATK: 120,
        SDEF: 70,
        SPD: 70,
      }
    },

    {
      name: "Farfetch'd",
      color: "#aaa67f",
      id: 83,
      type: ["Normal", "Flying"],
      weight: 15.0,
      height: 0.8,
      moves: ["Keen Eye, ", "Inner Focus"],
      description:
        "The stalk this Pokémon carries in its wings serves as a sword to cut down opponents. In a dire situation, the stalk can also serve as food.",
      stats: {
        HP: 52,
        APK: 90,
        DEF: 55,
        SATK: 58,
        SDEF: 62,
        SPD: 60,
      }
    },

    {
      name: "Doduo",
      color: "#aaa67f",
      id: 84,
      type: ["Normal", "Flying"],
      weight: 39.2,
      height: 1.4,
      moves: ["Run Away, ", "Early Bird"],
      description:
        "Its short wings make flying difficult. Instead, this Pokémon runs at high speed on developed legs.",
      stats: {
        HP: 35,
        APK: 85,
        DEF: 45,
        SATK: 35,
        SDEF: 35,
        SPD: 75,
      }
    },

    {
      name: "Dodrio",
      color: "#aaa67f",
      id: 85,
      type: ["Normal", "Flying"],
      weight: 85.2,
      height: 1.8,
      moves: ["Run Away, ", "Early Bird"],
      description:
        "One of Doduo’s two heads splits to form a unique species. It runs close to 40 mph in prairies.",
      stats: {
        HP: 60,
        APK: 110,
        DEF: 70,
        SATK: 60,
        SDEF: 60,
        SPD: 110,
      }
    },

    {
      name: "Seel",
      color: "#649eb6",
      id: 86,
      type: ["Water"],
      weight: 90.0,
      height: 1.1,
      moves: ["Thick Fat, ", "Hydration"],
      description:
        "Loves freezing-cold conditions. Relishes swimming in a frigid climate of around 14 degrees Fahrenheit.",
      stats: {
        HP: 65,
        APK: 45,
        DEF: 55,
        SATK: 45,
        SDEF: 70,
        SPD: 45,
      }
    },

    {
      name: "Dewgong",
      color: "#649eb6",
      id: 87,
      type: ["Water", "Ice"],
      weight: 120.0,
      height: 1.7,
      moves: ["Thick Fat, ", "Hydration"],
      description:
        "Its entire body is a snowy white. Unharmed by even intense cold, it swims powerfully in icy waters.",
      stats: {
        HP: 90,
        APK: 70,
        DEF: 80,
        SATK: 70,
        SDEF: 95,
        SPD: 70,
      }
    },

    {
      name: "Grimer",
      color: "#a43e9e",
      id: 88,
      type: ["Poison"],
      weight: 30.0,
      height: 0.9,
      moves: ["Stench, ", "Sticky Hold"],
      description:
        "Made of congealed sludge. It smells too putrid to touch. Even weeds won’t grow in its path.",
      stats: {
        HP: 80,
        APK: 80,
        DEF: 50,
        SATK: 40,
        SDEF: 50,
        SPD: 25,
      }
    },

    {
      name: "Muk",
      color: "#a43e9e",
      id: 89,
      type: ["Poison"],
      weight: 30.0,
      height: 1.2,
      moves: ["Stench, ", "Sticky Hold"],
      description:
        "Smells so awful, it can cause fainting. Through degeneration of its nose, it lost its sense of smell.",
      stats: {
        HP: 105,
        APK: 105,
        DEF: 75,
        SATK: 65,
        SDEF: 100,
        SPD: 50,
      }
    },

    {
      name: "Shellder",
      color: "#649eb6",
      id: 90,
      type: ["Water"],
      weight: 4.0,
      height: 0.3,
      moves: ["Shell Armor, ", "Skill Link"],
      description:
        "It swims facing backward by opening and closing its two-piece shell. It is surprisingly fast.",
      stats: {
        HP: 30,
        APK: 65,
        DEF: 100,
        SATK: 45,
        SDEF: 25,
        SPD: 40,
      }
    },

    {
      name: "Cloyster",
      color: "#649eb6",
      id: 91,
      type: ["Water", "Ice"],
      weight: 132.5,
      height: 1.5,
      moves: ["Shell Armor, ", "Skill Link"],
      description:
        "Its shell is extremely hard. It cannot be shattered, even with a bomb. The shell opens only when it is attacking.",
      stats: {
        HP: 50,
        APK: 95,
        DEF: 180,
        SATK: 85,
        SDEF: 45,
        SPD: 70,
      }
    },

    {
      name: "Gastly",
      color: "#70559B",
      id: 92,
      type: ["Ghost", "Poison"],
      weight: 0.1,
      height: 1.3,
      moves: ["Levitate"],
      description:
        "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
      stats: {
        HP: 30,
        APK: 35,
        DEF: 30,
        SATK: 100,
        SDEF: 35,
        SPD: 80,
      }
    },

    {
      name: "Haunter",
      color: "#70559B",
      id: 93,
      type: ["Ghost", "Poison"],
      weight: 0.1,
      height: 1.6,
      moves: ["Levitate"],
      description:
        "Its tongue is made of gas. If licked, its victim starts shaking constantly until death eventually comes.",
      stats: {
        HP: 45,
        APK: 50,
        DEF: 45,
        SATK: 115,
        SDEF: 55,
        SPD: 95,
      }
    },

    {
      name: "Gengar",
      color: "#70559B",
      id: 94,
      type: ["Ghost", "Poison"],
      weight: 40.5,
      height: 1.5,
      moves: ["Cursed Body"],
      description:
        "On the night of a full moon, if shadows move on their own and laugh, it must be Gengar’s doing.",
      stats: {
        HP: 60,
        APK: 65,
        DEF: 60,
        SATK: 130,
        SDEF: 75,
        SPD: 110,
      }
    },

    {
      name: "Onix",
      color: "#b69e31",
      id: 95,
      type: ["Rock", "Ground"],
      weight: 210.0,
      height: 8.8,
      moves: ["Rock Head", "Sturdy"],
      description:
        "As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.",
      stats: {
        HP: 35,
        APK: 45,
        DEF: 160,
        SATK: 30,
        SDEF: 45,
        SPD: 70,
      }
    },

    {
      name: "Drowzee",
      color: "#fb5584",
      id: 96,
      type: ["Psychic"],
      weight: 32.4,
      height: 1.0,
      moves: ["Insomnia", "Forewarn"],
      description:
        "If you sleep by it all the time, it will sometimes show you dreams it had eaten in the past.",
      stats: {
        HP: 60,
        APK: 48,
        DEF: 45,
        SATK: 43,
        SDEF: 90,
        SPD: 42,
      }
    },

    {
      name: "Hypno",
      color: "#fb5584",
      id: 97,
      type: ["Psychic"],
      weight: 75.6,
      height: 1.6,
      moves: ["Insomnia", "Forewarn"],
      description:
        "Avoid eye contact if you come across one. It will try to put you to sleep by using its pendulum.",
      stats: {
        HP: 85,
        APK: 73,
        DEF: 70,
        SATK: 73,
        SDEF: 115,
        SPD: 67,
      }
    },

    {
      name: "Krabby",
      color: "#649eb6",
      id: 98,
      type: ["Water"],
      weight: 6.5,
      height: 0.4,
      moves: ["Shell Armor, ", "Hyper Cutter"],
      description:
        "It can be found near the sea. The large pincers grow back if they are torn out of their sockets.",
      stats: {
        HP: 30,
        APK: 105,
        DEF: 90,
        SATK: 25,
        SDEF: 25,
        SPD: 50,
      }
    },

    {
      name: "Kingler",
      color: "#649eb6",
      id: 99,
      type: ["Water"],
      weight: 60.0,
      height: 1.3,
      moves: ["Shell Armor, ", "Hyper Cutter"],
      description:
        "Its large and hard pincer has 10,000-horsepower strength. However, being so big, it is unwieldy to move.",
      stats: {
        HP: 55,
        APK: 130,
        DEF: 115,
        SATK: 50,
        SDEF: 50,
        SPD: 75,
      }
    },

    {
      name: "Voltorb",
      color: "#f9cf30",
      id: 100,
      type: ["Electric"],
      weight: 10.4,
      height: 0.5,
      moves: ["Static, ", "Soundproof"],
      description:
        "It is said to camouflage itself as a Poké Ball. It will self-destruct with very little stimulus.",
      stats: {
        HP: 40,
        APK: 30,
        DEF: 50,
        SATK: 55,
        SDEF: 55,
        SPD: 100,
      }
    },

    {
      name: "Electrode",
      color: "#f9cf30",
      id: 101,
      type: ["Electric"],
      weight: 66.6,
      height: 1.2,
      moves: ["Static, ", "Soundproof"],
      description:
        "Stores electrical energy inside its body. Even the slightest shock could trigger a huge explosion.",
      stats: {
        HP: 60,
        APK: 50,
        DEF: 70,
        SATK: 80,
        SDEF: 80,
        SPD: 150,
      }
    },

    {
      name: "Exeggcute",
      color: "#74cb48",
      id: 102,
      type: ["Grass", "Psychic"],
      weight: 2.5,
      height: 0.4,
      moves: ["Static, ", "Soundproof"],
      description:
        "Though it may look like it’s just a bunch of eggs, it’s a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.",
      stats: {
        HP: 60,
        APK: 40,
        DEF: 80,
        SATK: 60,
        SDEF: 45,
        SPD: 40,
      }
    },

    {
      name: "Exeggutor",
      color: "#74cb48",
      id: 103,
      type: ["Grass", "Psychic"],
      weight: 120.0,
      height: 2.0,
      moves: ["Chlorophyll"],
      description:
        "Each of Exeggutor’s three heads is thinking different thoughts. The three don’t seem to be very interested in one another.",
      stats: {
        HP: 95,
        APK: 95,
        DEF: 85,
        SATK: 125,
        SDEF: 75,
        SPD: 55,
      }
    },

    {
      name: "Cubone",
      color: "#dec16b",
      id: 104,
      type: ["Ground"],
      weight: 6.5,
      height: 0.4,
      moves: ["Rock Head"],
      description:
        "When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.",
      stats: {
        HP: 50,
        APK: 50,
        DEF: 95,
        SATK: 40,
        SDEF: 50,
        SPD: 35,
      }
    },

    {
      name: "Marowak",
      color: "#dec16b",
      id: 105,
      type: ["Ground"],
      weight: 45.0,
      height: 1.0,
      moves: ["Rock Head"],
      description:
        "This Pokémon overcame its sorrow to evolve a sturdy new body. Marowak faces its opponents bravely, using a bone as a weapon.",
      stats: {
        HP: 60,
        APK: 80,
        DEF: 110,
        SATK: 50,
        SDEF: 80,
        SPD: 45,
      }
    },

    {
      name: "Hitmonlee",
      color: "#c12239",
      id: 106,
      type: ["Fighting"],
      weight: 49.8,
      height: 1.5,
      moves: ["Limber, ", "Reckless"],
      description:
        "This amazing Pokémon has an awesome sense of balance. It can kick in succession from any position.",
      stats: {
        HP: 50,
        APK: 120,
        DEF: 53,
        SATK: 35,
        SDEF: 110,
        SPD: 87,
      }
    },

    {
      name: "Hitmonchan",
      color: "#c12239",
      id: 107,
      type: ["Fighting"],
      weight: 50.2,
      height: 1.4,
      moves: ["Keen Eye, ", "Iron Fist"],
      description:
        "Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.",
      stats: {
        HP: 50,
        APK: 105,
        DEF: 79,
        SATK: 35,
        SDEF: 110,
        SPD: 76,
      }
    },

    {
      name: "Lickitung",
      color: "#aaa67f",
      id: 108,
      type: ["Normal"],
      weight: 65.5,
      height: 1.2,
      moves: ["Oblivious"],
      description:
        "If this Pokémon’s sticky saliva gets on you and you don’t clean it off, an intense itch will set in. The itch won’t go away, either.",
      stats: {
        HP: 90,
        APK: 55,
        DEF: 75,
        SATK: 60,
        SDEF: 75,
        SPD: 30,
      }
    },

    {
      name: "Koffing",
      color: "#a43e9e",
      id: 109,
      type: ["Poison"],
      weight: 1.0,
      height: 0.9,
      moves: ["Levitate, ", "Neutralizing Gas"],
      description:
        "Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.",
      stats: {
        HP: 40,
        APK: 65,
        DEF: 95,
        SATK: 60,
        SDEF: 45,
        SPD: 34,
      }
    },

    {
      name: "Weezing",
      color: "#a43e9e",
      id: 110,
      type: ["Poison"],
      weight: 9.5,
      height: 1.2,
      moves: ["Levitate, ", "Neutralizing Gas"],
      description:
        "It mixes gases between its two bodies. It’s said that these Pokémon were seen all over the Galar region back in the day.",
      stats: {
        HP: 65,
        APK: 90,
        DEF: 120,
        SATK: 85,
        SDEF: 70,
        SPD: 60,
      }
    },

    {
      name: "Rhyhorn",
      color: "#dec16b",
      id: 111,
      type: ["Ground", "Rock"],
      weight: 115.0,
      height: 1.0,
      moves: ["Rock Head, ", "Lightning Rod"],
      description:
        "Strong, but not too bright, this Pokémon can shatter even a skyscraper with its charging tackles.",
      stats: {
        HP: 80,
        APK: 85,
        DEF: 95,
        SATK: 30,
        SDEF: 30,
        SPD: 25,
      }
    },

    {
      name: "Rhydon",
      color: "#dec16b",
      id: 112,
      type: ["Ground", "Rock"],
      weight: 120.0,
      height: 1.9,
      moves: ["Rock Head, ", "Lightning Rod"],
      description:
        "It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.",
      stats: {
        HP: 105,
        APK: 130,
        DEF: 120,
        SATK: 45,
        SDEF: 45,
        SPD: 40,
      }
    },

    {
      name: "Chansey",
      color: "#aaa67f",
      id: 113,
      type: ["Normal"],
      weight: 34.6,
      height: 1.1,
      moves: ["Natural Cure, ", "Serene Grace"],
      description:
        "The egg Chansey carries is not only delicious but also packed with nutrition. It’s used as a high-class cooking ingredient.",
      stats: {
        HP: 200,
        APK: 5,
        DEF: 5,
        SATK: 35,
        SDEF: 105,
        SPD: 50,
      }
    },

    {
      name: "Tangela",
      color: "#74cb48",
      id: 114,
      type: ["Grass"],
      weight: 35.0,
      height: 1.0,
      moves: ["Chlorophyll, ", "Leaf Guard"],
      description:
        "Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon’s true appearance remains a mystery.",
      stats: {
        HP: 65,
        APK: 55,
        DEF: 115,
        SATK: 100,
        SDEF: 40,
        SPD: 60,
      }
    },

    {
      name: "Kangaskhan",
      color: "#aaa67f",
      id: 115,
      type: ["Normal"],
      weight: 80.0,
      height: 2.2,
      moves: ["Early Bird, ", "Scrappy"],
      description:
        "Although it’s carrying its baby in a pouch on its belly, Kangaskhan is swift on its feet. It intimidates its opponents with quick jabs.",
      stats: {
        HP: 105,
        APK: 95,
        DEF: 80,
        SATK: 40,
        SDEF: 80,
        SPD: 90,
      }
    },

    {
      name: "Horsea",
      color: "#649eb6",
      id: 116,
      type: ["Water"],
      weight: 8.0,
      height: 0.4,
      moves: ["Swift Swim"],
      description:
        "Horsea makes its home in oceans with gentle currents. If this Pokémon is under attack, it spits out pitch-black ink and escapes.",
      stats: {
        HP: 30,
        APK: 40,
        DEF: 70,
        SATK: 70,
        SDEF: 25,
        SPD: 60,
      }
    },

    {
      name: "Seadra",
      color: "#649eb6",
      id: 117,
      type: ["Water"],
      weight: 25.0,
      height: 1.2,
      moves: ["Poison Point"],
      description:
        "It’s the males that raise the offspring. While Seadra are raising young, the spines on their backs secrete thicker and stronger poison.",
      stats: {
        HP: 55,
        APK: 65,
        DEF: 95,
        SATK: 95,
        SDEF: 45,
        SPD: 85,
      }
    },

    {
      name: "Goldeen",
      color: "#649eb6",
      id: 118,
      type: ["Water"],
      weight: 15.0,
      height: 0.6,
      moves: ["Swift Swim"],
      description:
        "Its dorsal, pectoral, and tail fins wave elegantly in water. That is why it is known as the Water Dancer.",
      stats: {
        HP: 45,
        APK: 67,
        DEF: 60,
        SATK: 35,
        SDEF: 50,
        SPD: 63,
      }
    },

    {
      name: "Seaking",
      color: "#649eb6",
      id: 119,
      type: ["Water"],
      weight: 39.0,
      height: 1.3,
      moves: ["Swift Swim"],
      description:
        "In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.",
      stats: {
        HP: 80,
        APK: 92,
        DEF: 65,
        SATK: 65,
        SDEF: 80,
        SPD: 68,
      }
    },

    {
      name: "Staryu",
      color: "#649eb6",
      id: 120,
      type: ["Water"],
      weight: 34.5,
      height: 0.8,
      moves: ["Natural Cure"],
      description:
        "If you visit a beach at the end of summer, you’ll be able to see groups of Staryu lighting up in a steady rhythm.",
      stats: {
        HP: 30,
        APK: 45,
        DEF: 55,
        SATK: 70,
        SDEF: 55,
        SPD: 85,
      }
    },

    {
      name: "Starmie",
      color: "#649eb6",
      id: 121,
      type: ["Water", "Psychic"],
      weight: 80.0,
      height: 1.1,
      moves: ["Natural Cure"],
      description:
        "This Pokémon has an organ known as its core. The organ glows in seven colors when Starmie is unleashing its potent psychic powers.",
      stats: {
        HP: 60,
        APK: 75,
        DEF: 85,
        SATK: 100,
        SDEF: 85,
        SPD: 115,
      }
    },

    {
      name: "mrMime",
      color: "#fb5584",
      id: 122,
      type: ["Psychic", "Fairy"],
      weight: 54.5,
      height: 1.3,
      moves: ["Soundproof, ", "Filter"],
      description:
        "The broadness of its hands may be no coincidence—many scientists believe its palms became enlarged specifically for pantomiming.",
      stats: {
        HP: 40,
        APK: 45,
        DEF: 65,
        SATK: 100,
        SDEF: 120,
        SPD: 90,
      }
    },

    {
      name: "Scyther",
      color: "#a7b723",
      id: 123,
      type: ["Bug", "Flying"],
      weight: 56.0,
      height: 1.5,
      moves: ["Swarm, ", "Technician"],
      description:
        "As Scyther fights more and more battles, its scythes become sharper and sharper. With a single slice, Scyther can fell a massive tree.",
      stats: {
        HP: 70,
        APK: 110,
        DEF: 80,
        SATK: 55,
        SDEF: 80,
        SPD: 105,
      }
    },

    {
      name: "Jynx",
      color: "#9ad6df",
      id: 124,
      type: ["Ice", "Psychic"],
      weight: 40.6,
      height: 1.4,
      moves: ["Oblivious, ", "Forewarn"],
      description:
        "In certain parts of Galar, Jynx was once feared and worshiped as the Queen of Ice.",
      stats: {
        HP: 65,
        APK: 50,
        DEF: 35,
        SATK: 115,
        SDEF: 95,
        SPD: 95,
      }
    },

    {
      name: "Electabuzz",
      color: "#f9cf30",
      id: 125,
      type: ["Electric"],
      weight: 30.0,
      height: 1.1,
      moves: ["Static"],
      description:
        "Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.",
      stats: {
        HP: 65,
        APK: 83,
        DEF: 57,
        SATK: 95,
        SDEF: 85,
        SPD: 105,
      }
    },

    {
      name: "Magmar",
      color: "#f57d31",
      id: 126,
      type: ["Fire"],
      weight: 44.5,
      height: 1.3,
      moves: ["Flame Body"],
      description:
        "Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.",
      stats: {
        HP: 65,
        APK: 95,
        DEF: 57,
        SATK: 100,
        SDEF: 85,
        SPD: 93,
      }
    },

    {
      name: "Pinsir",
      color: "#a7b723",
      id: 127,
      type: ["Bug"],
      weight: 55.0,
      height: 1.5,
      moves: ["Hyper Cutter"],
      description:
        "These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.",
      stats: {
        HP: 65,
        APK: 125,
        DEF: 100,
        SATK: 55,
        SDEF: 70,
        SPD: 85,
      }
    },

    {
      name: "Tauros",
      color: "#AAA67F",
      id: 128,
      type: ["Normal"],
      weight: 88.4,
      height: 1.4,
      moves: ["Intimidate"],
      description:
        "When Tauros begins whipping itself with its tails, it’s a warning that the Pokémon is about to charge with astounding speed.",
      stats: {
        HP: 75,
        APK: 100,
        DEF: 95,
        SATK: 40,
        SDEF: 70,
        SPD: 110,
      }
    },

    {
      name: "Magikarp",
      color: "#649eb6",
      id: 129,
      type: ["Water"],
      weight: 10.0,
      height: 0.9,
      moves: ["Swift Swim"],
      description:
        "It is virtually worthless in terms of both power and speed. It is the most weak and pathetic Pokémon in the world.",
      stats: {
        HP: 20,
        APK: 10,
        DEF: 55,
        SATK: 15,
        SDEF: 20,
        SPD: 80,
      }
    },

    {
      name: "Gyarados",
      color: "#649eb6",
      id: 130,
      type: ["Water", "Flying"],
      weight: 235.0,
      height: 6.5,
      moves: ["Intimidate"],
      description:
        "It has an extremely aggressive nature. The Hyper Beam it shoots from its mouth totally incinerates all targets.",
      stats: {
        HP: 95,
        APK: 125,
        DEF: 79,
        SATK: 60,
        SDEF: 100,
        SPD: 81,
      }
    },

    {
      name: "Lapras",
      color: "#649eb6",
      id: 131,
      type: ["Water", "Ice"],
      weight: 220.0,
      height: 2.5,
      moves: ["Water Absorb"],
      description:
        "A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.",
      stats: {
        HP: 130,
        APK: 85,
        DEF: 80,
        SATK: 85,
        SDEF: 95,
        SPD: 60,
      }
    },

    {
      name: "Ditto",
      color: "#AAA67F",
      id: 132,
      type: ["Normal"],
      weight: 4.0,
      height: 0.3,
      moves: ["Limber Imposter"],
      description:
        "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
      stats: {
        HP: 48,
        APK: 48,
        DEF: 48,
        SATK: 48,
        SDEF: 48,
        SPD: 48,
      }
    },

    {
      name: "Eevee",
      color: "#AAA67F",
      id: 133,
      type: ["Normal"],
      weight: 6.5,
      height: 0.3,
      moves: ["Run Away, ", "Adaptability"],
      description:
        "It has the ability to alter the composition of its body to suit its surrounding environment.",
      stats: {
        HP: 55,
        APK: 55,
        DEF: 50,
        SATK: 45,
        SDEF: 65,
        SPD: 55,
      }
    },

    {
      name: "Vaporeon",
      color: "#649eb6",
      id: 134,
      type: ["Water"],
      weight: 29.0,
      height: 1.0,
      moves: ["Water Absorb"],
      description:
        "When Vaporeon’s fins begin to vibrate, it is a sign that rain will come within a few hours.",
      stats: {
        HP: 130,
        APK: 65,
        DEF: 60,
        SATK: 110,
        SDEF: 95,
        SPD: 65,
      }
    },

    {
      name: "Jolteon",
      color: "#f9cf30",
      id: 135,
      type: ["Electric"],
      weight: 24.5,
      height: 0.8,
      moves: ["Volt Absorb"],
      description:
        "If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes.",
      stats: {
        HP: 65,
        APK: 65,
        DEF: 60,
        SATK: 110,
        SDEF: 95,
        SPD: 130,
      }
    },

    {
      name: "Flareon",
      color: "#f57d31",
      id: 136,
      type: ["Fire"],
      weight: 25.0,
      height: 0.9,
      moves: ["Flash Fire"],
      description:
        "Once it has stored up enough heat, this Pokémon’s body temperature can reach up to 1,700 degrees Fahrenheit.",
      stats: {
        HP: 65,
        APK: 130,
        DEF: 60,
        SATK: 95,
        SDEF: 110,
        SPD: 65,
      }
    },

    {
      name: "Porygon",
      color: "#AAA67F",
      id: 137,
      type: ["Normal"],
      weight: 36.5,
      height: 0.8,
      moves: ["Trace, ", "Download"],
      description:
        "State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.",
      stats: {
        HP: 65,
        APK: 60,
        DEF: 70,
        SATK: 85,
        SDEF: 75,
        SPD: 40,
      }
    },

    {
      name: "Omanyte",
      color: "#b69e31",
      id: 138,
      type: ["Rock", "Water"],
      weight: 7.5,
      height: 0.4,
      moves: ["Shell Armor"],
      description:
        "Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem.",
      stats: {
        HP: 35,
        APK: 40,
        DEF: 100,
        SATK: 90,
        SDEF: 55,
        SPD: 35,
      }
    },

    {
      name: "Omastar",
      color: "#b69e31",
      id: 139,
      type: ["Rock", "Water"],
      weight: 35.0,
      height: 1.0,
      moves: ["Shell Armor"],
      description:
        "Weighed down by a large and heavy shell, Omastar couldn’t move very fast. Some say it went extinct because it was unable to catch food.",
      stats: {
        HP: 70,
        APK: 60,
        DEF: 125,
        SATK: 115,
        SDEF: 70,
        SPD: 55,
      }
    },

    {
      name: "Kabuto",
      color: "#b69e31",
      id: 140,
      type: ["Rock", "Water"],
      weight: 11.5,
      height: 0.5,
      moves: ["Swift Swim"],
      description:
        "This species is almost entirely extinct. Kabuto molt every three days, making their shells harder and harder.",
      stats: {
        HP: 30,
        APK: 80,
        DEF: 90,
        SATK: 55,
        SDEF: 45,
        SPD: 55,
      }
    },

    {
      name: "Kabutops",
      color: "#b69e31",
      id: 141,
      type: ["Rock", "Water"],
      weight: 40.5,
      height: 1.3,
      moves: ["Swift Swim"],
      description:
        "Kabutops slices its prey apart and sucks out the fluids. The discarded body parts become food for other Pokémon.",
      stats: {
        HP: 60,
        APK: 115,
        DEF: 105,
        SATK: 65,
        SDEF: 70,
        SPD: 80,
      }
    },

    {
      name: "Aerodactyl",
      color: "#b69e31",
      id: 142,
      type: ["Rock", "Flying"],
      weight: 59.0,
      height: 1.8,
      moves: ["Rock Head"],
      description:
        "This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.",
      stats: {
        HP: 80,
        APK: 105,
        DEF: 65,
        SATK: 60,
        SDEF: 70,
        SPD: 130,
      }
    },

    {
      name: "Snorlax",
      color: "#aaa67f",
      id: 143,
      type: ["Normal"],
      weight: 460.0,
      height: 2.1,
      moves: ["Thick Fat"],
      description:
        "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.",
      stats: {
        HP: 160,
        APK: 110,
        DEF: 65,
        SATK: 65,
        SDEF: 110,
        SPD: 30,
      }
    },

    {
      name: "Articuno",
      color: "#9ad6df",
      id: 144,
      type: ["Ice", "Flying"],
      weight: 55.4,
      height: 1.7,
      moves: ["Pressure"],
      description:
        "It’s said that this Pokémon’s beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.",
      stats: {
        HP: 90,
        APK: 85,
        DEF: 100,
        SATK: 95,
        SDEF: 125,
        SPD: 85,
      }
    },

    {
      name: "Zapdos",
      color: "#f9cf30",
      id: 145,
      type: ["Electric", "Flying"],
      weight: 52.6,
      height: 1.6,
      moves: ["Pressure"],
      description:
        "This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds.",
      stats: {
        HP: 90,
        APK: 90,
        DEF: 85,
        SATK: 125,
        SDEF: 90,
        SPD: 100,
      }
    },

    {
      name: "Moltres",
      color: "#f57d31",
      id: 146,
      type: ["Fire", "Flying"],
      weight: 60.0,
      height: 2.0,
      moves: ["Pressure"],
      description:
        "It’s one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.",
      stats: {
        HP: 90,
        APK: 100,
        DEF: 90,
        SATK: 125,
        SDEF: 85,
        SPD: 90,
      }
    },

    {
      name: "Dratini",
      color: "#7037ff",
      id: 147,
      type: ["Dragon"],
      weight: 3.3,
      height: 1.8,
      moves: ["Shed Skin"],
      description:
        "Dratini dwells near bodies of rapidly flowing water, such as the plunge pools of waterfalls. As it grows, Dratini will shed its skin many times.",
      stats: {
        HP: 41,
        APK: 64,
        DEF: 45,
        SATK: 50,
        SDEF: 50,
        SPD: 50,
      }
    },

    {
      name: "Dragonair",
      color: "#7037ff",
      id: 148,
      type: ["Dragon"],
      weight: 16.5,
      height: 4.0,
      moves: ["Shed Skin"],
      description:
        "This Pokémon lives in pristine oceans and lakes. It can control the weather, and it uses this power to fly into the sky, riding on the wind.",
      stats: {
        HP: 61,
        APK: 84,
        DEF: 65,
        SATK: 70,
        SDEF: 70,
        SPD: 70,
      }
    },

    {
      name: "Dragonite",
      color: "#7037ff",
      id: 149,
      type: ["Dragon", "Flying"],
      weight: 16.5,
      height: 4.0,
      moves: ["Inner Focus"],
      description:
        "It’s a kindhearted Pokémon. If it spots a drowning person or Pokémon, Dragonite simply must help them.",
      stats: {
        HP: 91,
        APK: 134,
        DEF: 95,
        SATK: 100,
        SDEF: 100,
        SPD: 80,
      }
    },

    {
      name: "Mewtwo",
      color: "#FB5584",
      id: 150,
      type: ["Psychic"],
      weight: 122.0,
      height: 2.0,
      moves: ["Pressure"],
      description:
        "Its DNA is almost the same as Mew’s. However, its size and disposition are vastly different.",
      stats: {
        HP: 106,
        APK: 110,
        DEF: 90,
        SATK: 154,
        SDEF: 90,
        SPD: 130,
      }
    },

    {
      name: "Mew",
      color: "#FB5584",
      id: 151,
      type: ["Psychic"],
      weight: 4.0,
      height: 0.4,
      moves: ["Syncronize"],
      description:
        "When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.",
      stats: {
        HP: 100,
        APK: 100,
        DEF: 100,
        SATK: 100,
        SDEF: 100,
        SPD: 100,
      }
    },

  ];
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Buscador pokemones={pokemones} />} />
          <Route
            path="detalles/:nombre"
            element={<Detalles pokemones={pokemones} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
