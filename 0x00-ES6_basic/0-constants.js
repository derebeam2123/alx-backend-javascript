@@ -1,15 +1,15 @@
export function taskFirst () {
  const task = 'I prefer const when I can.'
  return task
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast () {
  return ' is okay'
export function getLast() {
  return ' is okay';
}

export function taskNext () {
  let combination = 'But sometimes let'
  combination += getLast()
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination
  return combination;
}
