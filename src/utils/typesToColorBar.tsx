export default function typesToColorBar(type: string | undefined) {
  switch (type) {
    case "normal":
      return "gray";
    case "fighting":
      return "red";
    case "flying":
      return "purple";
    case "poison":
      return "purple";
    case "ground":
      return "yellow";
    case "rock":
      return "yellow";
    case "bug":
      return "yellow";
    case "ghost":
      return "purple";
    case "steel":
      return "gray";
    case "fire":
      return "red";
    case "water":
      return "blue";
    case "grass":
      return "green";
    case "electric":
      return "yellow";
    case "psychic":
      return "pink";
    case "ice":
      return "blue";
    case "dragon":
      return "purple";
    case "dark":
      return "black";
    case "fairy":
      return "pink";
  }
}
