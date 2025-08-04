// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
 let count = 0
  for (let index = 0; index < birdsPerDay.length; index++) {
      count += birdsPerDay[index] 
  }
  return count
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let count = 0
  if(week >1){
  for (let index =(week*7)-7 ; index < (week *7); index++) {
      count = birdsPerDay[index] + count
  }
  return count
  }else{
    for (let index = 0 ; index < 7; index++) {
      count = birdsPerDay[index] + count
  }
  return count 
  }
}
/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let index = 0; index < birdsPerDay.length; index+= 2) {
       birdsPerDay[index] += 1
  }
  return birdsPerDay
}
