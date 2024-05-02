export function textSizer(size, distance) {
  switch (size) {
    case 10:
      //distance 2 feet
      if (distance === 2) return "text-[71.91mm]";
      //distance 3 feet
      if (distance === 3) return "text-[72.91mm]";
      //distance 4 feet
      if (distance === 4) return "text-[73.91mm]";
      //distance 5 feet
      return "text-[78.74mm]";
    case 9:
      //distance 2 feet
      if (distance === 2) return "text-[60.57mm]";
      //distance 3 feet
      if (distance === 3) return "text-[65.57mm]";
      //distance 4 feet
      if (distance === 4) return "text-[67.21mm]";
      //distance 5 feet
      return "text-[68.58mm]";
    case 8:
      //distance 2 feet
      if (distance === 2) return "text-[49.21mm]";
      //distance 3 feet
      if (distance === 3) return "text-[52.34mm]";
      //distance 4 feet
      if (distance === 4) return "text-[53.91mm]";
      //distance 5 feet
      return "text-[55.88mm]";
    case 7:
      //distance 2 feet
      if (distance === 2) return "text-[35.91mm]";
      //distance 3 feet
      if (distance === 3) return "text-[38.41mm]";
      //distance 4 feet
      if (distance === 4) return "text-[39.47mm]";
      //distance 5 feet
      return "text-[45.72mm]";
    case 6:
      //distance 2 feet
      if (distance === 2) return "text-[25.91mm]";
      //distance 3 feet
      if (distance === 3) return "text-[27.69mm]";
      //distance 4 feet
      if (distance === 4) return "text-[28.51mm]";
      //distance 5 feet
      return "text-[33.02mm]";
    case 5:
      //distance 2 feet
      if (distance === 2) return "text-[20.17mm]";
      //distance 3 feet
      if (distance === 3) return "text-[21.54mm]";
      //distance 4 feet
      if (distance === 4) return "text-[22.24mm]";
      //distance 5 feet
      return "text-[22.86mm]";
    case 4:
      //distance 2 feet
      if (distance === 2) return "text-[11.56mm]";
      //distance 3 feet
      if (distance === 3) return "text-[12.37mm]";
      //distance 4 feet
      if (distance === 4) return "text-[13.19mm]";
      //distance 5 feet
      return "text-[17.78mm]";
    case 3:
      //distance 2 feet
      if (distance === 2) return "text-[8.66mm]";
      //distance 3 feet
      if (distance === 3) return "text-[9.25mm]";
      //distance 4 feet
      if (distance === 4) return "text-[9.76mm]";
      //distance 5 feet
      return "text-[10.16mm]";
    case 2:
      //distance 2 feet
      if (distance === 2) return "text-[5.77mm]";
      //distance 3 feet
      if (distance === 3) return "text-[6.17mm]";
      //distance 4 feet
      if (distance === 4) return "text-[6.55mm]";
      //distance 5 feet
      return "text-[7.62mm]";
    case 1:
      //distance 2 feet
      if (distance === 2) return "text-[3.85mm]";
      //distance 3 feet
      if (distance === 3) return "text-[4.12mm]";
      //distance 4 feet
      if (distance === 4) return "text-[4.38mm]";
      //distance 5 feet
      return "text-[5.08mm]";
    default:
      return "";
  }
}

export function createRandomString(
  length: number,
  setLetter: React.Dispatch<React.SetStateAction<string>>,
) {
  const chars = "ABDFGHIJKLNPQRSUWXY";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  setLetter(result);
}
