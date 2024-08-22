/* Ejercicio 12
Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder. */

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' },
  //añadido (aunque no sea un X-men) para comprobar dos superhéroes con mismo poder
  { name: 'DeadPool', power: 'regeneration' }
]

function findMutantByPower(mutants, power) {
  let foundPowers = 'Lo siento, el poder no ha sido encontrado'
  let foundMutants = []
  for (let i = 0; i < mutants.length; i++) {
    const mutant = mutants[i]
    if (mutant.power === power) {
      foundPowers = '¡Poder encontrado! ' + power + ' --> '
      if (foundMutants !== 0) {
        foundMutants.push(mutant.name)
      } else {
        foundMutants = [mutant.name]
      }
    }
  }

  return foundPowers + foundMutants
}

console.log(findMutantByPower(mutants, 'invisibility'))
console.log(findMutantByPower(mutants, 'magnetism'))
console.log(findMutantByPower(mutants, 'power absorption'))
console.log(findMutantByPower(mutants, 'regeneration'))
