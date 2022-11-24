export default function typesToColorBar(type: string | undefined) {
  switch (type) {
    case "normal":
      return "#yellow";
    case "fighting":
      return "#bf3028";
    case "flying":
      return "#a790f0";
    case "poison":
      return "#a140a1";
    case "ground":
      return "#e1c068";
    case "rock":
      return "#b8a138";
    case "bug":
      return "#a8b92e";
    case "ghost":
      return "#705896";
    case "steel":
      return "#b8b7d0";
    case "fire":
      return "#ef8130";
    case "water":
      return "#6891f1";
    case "grass":
      return "#78c94f";
    case "electric":
      return "#f8d139";
    case "psychic":
      return "#ee5688";
    case "ice":
      return "#99d7d8";
    case "dragon":
      return "purple";
    case "dark":
      return "#6f5647";
    case "fairy":
      return "#ee99ac";
  }
}
