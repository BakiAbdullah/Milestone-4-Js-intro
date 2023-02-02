function milesTokm(miles) {
  const kilometer = miles * 1.60934;
  return kilometer; 
}

const mile = 140;
const kiloMeter = milesTokm(mile);
console.log(kiloMeter);