export function textSizer(size, distance) {
  switch (size) {
    case 10:
      //distance 2 feet
      if (distance === 2) return "text-[34.92mm]";
      //distance 3 feet
      if (distance === 3) return "text-[52.38mm]";
      //distance 4 feet
      if (distance === 4) return "text-[69.84mm]";
      //distance 5 feet
      return "text-[87.3mm]";
    case 9:
      //distance 2 feet
      if (distance === 2) return "text-[17.76mm]";
      //distance 3 feet
      if (distance === 3) return "text-[26.64mm]";
      //distance 4 feet
      if (distance === 4) return "text-[35.52mm]";
      //distance 5 feet
      return "text-[44.4mm]";
    case 8:
      //distance 2 feet
      if (distance === 2) return "text-[12.68mm]";
      //distance 3 feet
      if (distance === 3) return "text-[19.02mm]";
      //distance 4 feet
      if (distance === 4) return "text-[25.36mm]";
      //distance 5 feet
      return "text-[31.7mm]";
    case 7:
      //distance 2 feet
      if (distance === 2) return "text-[8.88mm]";
      //distance 3 feet
      if (distance === 3) return "text-[13.32mm]";
      //distance 4 feet
      if (distance === 4) return "text-[17.76mm]";
      //distance 5 feet
      return "text-[22.2mm]";
    case 6:
      //distance 2 feet
      if (distance === 2) return "text-[7.12mm]";
      //distance 3 feet
      if (distance === 3) return "text-[10.68mm]";
      //distance 4 feet
      if (distance === 4) return "text-[14.24mm]";
      //distance 5 feet
      return "text-[17.8mm]";
    case 5:
      //distance 2 feet
      if (distance === 2) return "text-[5.32mm]";
      //distance 3 feet
      if (distance === 3) return "text-[7.98mm]";
      //distance 4 feet
      if (distance === 4) return "text-[10.64mm]";
      //distance 5 feet
      return "text-[13.3mm]";
    case 4:
      //distance 2 feet
      if (distance === 2) return "text-[4.44mm]";
      //distance 3 feet
      if (distance === 3) return "text-[6.67mm]";
      //distance 4 feet
      if (distance === 4) return "text-[8.88mm]";
      //distance 5 feet
      return "text-[11.1mm]";
    case 3:
      //distance 2 feet
      if (distance === 2) return "text-[3.56mm]";
      //distance 3 feet
      if (distance === 3) return "text-[5.34mm]";
      //distance 4 feet
      if (distance === 4) return "text-[7.12mm]";
      //distance 5 feet
      return "text-[8.9mm]";
    case 2:
      //distance 2 feet
      if (distance === 2) return "text-[2.84mm]";
      //distance 3 feet
      if (distance === 3) return "text-[4.26mm]";
      //distance 4 feet
      if (distance === 4) return "text-[5.68mm]";
      //distance 5 feet
      return "text-[7.1mm]";
    case 1:
      //distance 2 feet
      if (distance === 2) return "text-[2.24mm]";
      //distance 3 feet
      if (distance === 3) return "text-[3.36mm]";
      //distance 4 feet
      if (distance === 4) return "text-[4.48mm]";
      //distance 5 feet
      return "text-[5.6mm]";
    default:
      return "";
  }
}

export function createRandomString(
  length: number,
  letter: string,
  setLetter: React.Dispatch<React.SetStateAction<string>>,
) {
  const chars = "ABDFGHIJKLPQRSWXY";
  let result = "";

  while (result === "") {
    result = chars
      .replace(letter, "")
      .charAt(Math.floor(Math.random() * chars.length));
  }

  setLetter(result);
}
