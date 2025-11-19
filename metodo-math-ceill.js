const doseTotalPrescritaML = 85;

const volumePorFrascoML = 20;

console.log("----- Sistema de Farmácia Vitalis -----");
console.log(`Dose Total Prescrita: ${doseTotalPrescritaML}ml`);
console.log(`Volume por Frasco: ${volumePorFrascoML}ml`);
console.log("-----------------------------------------");

const calculoExato = doseTotalPrescritaML / volumePorFrascoML;

console.log(`Cálculo Exato (Frascos): ${calculoExato}`);

const frascosANecessarios = Math.ceil(calculoExato);

console.log(`Frascos a Enviar (usando Math.ceil): ${frascosANecessarios}`);
console.log("\n");
console.log(`CONCLUSÃO: O paciente receberá ${frascosANecessarios} frascos.
Isso garante que ele tenha os ${doseTotalPrescritaML}ml prescritos,
pois ${frascosANecessarios} frascos totalizam ${frascosANecessarios * volumePorFrascoML}ml.`);

const doseExata = 100;
const calculoExato2 = doseExata / volumePorFrascoML; 
const frascosNecessarios2 = Math.ceil(calculoExato2); 

console.log(`\n--- Teste (Dose de ${doseExata}ml): ${frascosNecessarios2} frascos.`);