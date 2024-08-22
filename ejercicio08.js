/* Ejercicio 8
Dada una lista de artistas con sus influencias, utiliza bucles anidados para listar todos los artistas y sus influencias directas e imprime cada par por consola.
*/

const artistas = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  {
    name: 'David Bowie',
    influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground']
  },
  {
    name: 'Eddie Vedder',
    influences: ['The Who', 'Neil Yound', 'Jim Morrison']
  },
  {
    name: 'Freddie Mercury',
    influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin']
  },
  {
    name: 'John Lennon',
    influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly']
  }
]

for (let i = 0; i < artistas.length; i++) {
  const artista = artistas[i]
  for (let j = 0; j < artista.influences.length; j++) {
    const influence = artista.influences[j]
    console.log(artista.name + ' - ' + influence)
  }
}
