function getRandomVerse() {
  return verses[Math.floor(Math.random() * verses.length)];
}

function getDailyPsalm() {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  return psalms[dayOfYear % psalms.length];
}

function displayVerse() {
  const verse = getRandomVerse();
  document.getElementById('verseText').textContent = verse.text;
  document.getElementById('verseReference').textContent = verse.reference;
}

function displayPsalm() {
  const psalm = getDailyPsalm();
  document.getElementById('psalmText').textContent = psalm.text;
  document.getElementById('psalmReference').textContent = psalm.reference;
}

function init() {
  displayVerse();
  displayPsalm();
  
  document.getElementById('nextVerseBtn').addEventListener('click', displayVerse);
}

document.addEventListener('DOMContentLoaded', init);