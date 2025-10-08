const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse()
console.log(reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = []
for (i = 0; i < teachers.length; i++){
  
  if (teachers[i].length >= 5){
    longNames.push(teachers[i])
  }
}
console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(5, 1)
console.log(teachers)

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = false
for (i = 0; i < teachers.length; i++){

  if (teachers[i] == 'Fabio'){
    isFabioPresent = true
  } 
}
console.log(isFabioPresent)

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = ''

for (i = 0; i < teachers.length; i++){
  teachersString += teachers[i]

  if (i < teachers.length - 1){
    teachersString += ', '
  }
}
console.log(teachersString)