// ---------------------- Change website buttons -------------------------- \\
document.getElementById('exploreHTML').style.display = 'none';
document.getElementById('indexHTML').style.display = 'block';

document.getElementById('exploreBUTTON').addEventListener('click', function () {
  document.getElementById('exploreHTML').style.display = 'block';
  document.getElementById('indexHTML').style.display = 'none';
});

document.getElementById('indexBUTTON').addEventListener('click', function () {
  document.getElementById('exploreHTML').style.display = 'none';
  document.getElementById('indexHTML').style.display = 'block';
});
