//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna) => {
  const sequences = {
    "AUG": "Methionine",
    "UUU": "Phenylalanine",
    "UUC": "Phenylalanine",
    "UUA": "Leucine",
    "UUG": "Leucine",
    "UCU": "Serine",
    "UCC": "Serine",
    "UCA": "Serine",
    "UCG": "Serine",
    "UAU": "Tyrosine",
    "UAC": "Tyrosine",
    "UGU": "Cysteine",
    "UGC": "Cysteine",
    "UGG": "Tryptophan",
    "UAA": "STOP",
    "UAG": "STOP",
    "UGA": "STOP"
  }
  if (!rna) return [];
  rna = rna.match(new RegExp('.{1,3}', 'g'));
  const translated = rna.map(sequence => {
    if (!sequences[sequence]) throw 'Invalid codon';
    return sequences[sequence]
  });
  const hasStop = translated.indexOf("STOP") !== -1;
  if (hasStop) translated.splice(translated.indexOf("STOP"));
  return translated;
};
