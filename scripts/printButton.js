const printButton = document.querySelector('.printButton');
const printDiv = () => {
  let printDivContent =  document.querySelector('.box').innerHTML;
  let a = window.open('', '', width=200,height=200);
  a.document.write('<html>');
  a.document.write('<head>');
  a.document.write("<link rel='stylesheet' href='styles/style.css'>");
  a.document.write("<link rel='stylesheet' href='styles/box.css'>");
  a.document.write('<head>');
  a.document.write('<body>');
  a.document.write(printDivContent);
  a.document.write('</body>');
  a.document.write('</html>');
    
};

printButton.addEventListener('click', () => {
  printDiv();
});