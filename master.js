const inText = '[>c] # Centered Title\n\n\tIndented paragraph with a footnote.[^1]\n\tSecond indented paragraph. Second indented paragraph. Second indented paragraph.Second indented paragraph. Second indented paragraph. Second indented paragraph. Second indented paragraph. Second indented paragraph. Second indented paragraph. Second indented paragraph. Second indented paragraph. Second indented paragraph. Second indented paragraph. Second indented paragraph. Second indented paragraph.\n\n# Left Aligned Title\n\nUnindented paragraph with another footnote.[^2]\n\n[^1]: Text of first footnote.\n[^2]: Text of second footnote.\n[^1]: Another paragraph for the first footnote, to show that they can be added anywhere in the document.\n[^1]: Third paragraph for footnote one.\n';

var originalDisplay = document.getElementById('original-display');
var htmlDisplay = document.getElementById('html-display');
var mdDisplay = document.getElementById('md-text');
var downloadHtmlBtn = document.getElementById('download-page-btn');
var downloadMdfcBtn = document.getElementById('download-mdfc-btn');
var downloadMdBtn = document.getElementById('download-md-btn');
var uploadBtn = document.getElementById('upload-mdfc-btn');

originalDisplay.value = inText;

originalDisplay.addEventListener('keyup', function(e){
    updateConversionDisplays();
});

originalDisplay.addEventListener('keydown', function(e){
    if(e.key === 'Tab'){
        e.preventDefault();
        var selectPoint = e.target.selectionStart;
        originalDisplay.value = originalDisplay.value.slice(0,e.target.selectionStart) + '\t' + originalDisplay.value.slice(e.target.selectionStart);
        e.target.selectionStart = selectPoint + 1;
        e.target.selectionEnd = selectPoint + 1;
    }
});

function updateConversionDisplays(){
    htmlDisplay.innerHTML = convertMdfToHtml(originalDisplay.value);
    mdDisplay.value = convertMdfToMd(originalDisplay.value);
}

updateConversionDisplays();


downloadHtmlBtn.onclick = function(e){
    downloadHtmlPage();
}

downloadMdBtn.onclick = function(e){
    downloadMd();
}

downloadMdfcBtn.onclick = function(e){
    downloadMdfc();
}

uploadBtn.onclick = function(e){
    uploadTextFile(function(text){
        originalDisplay.value = text;
        updateConversionDisplays();
    });
}

function downloadHtmlPage(){
    var htmlText = mdfToHtmlPage(originalDisplay.value, 'Test Title');
    downloadTextFile(htmlText, 'converted.html'); 
}

function downloadMd(){
    var mdText = convertMdfToMd(originalDisplay.value);
    downloadTextFile(mdText, 'converted.md'); 
}

function downloadMdfc(){
    downloadTextFile(originalDisplay.value, 'converted.txt'); 
}

function uploadTextFile(callback){
  var fileInput = document.createElement('input');
  fileInput.id = 'fileInput';
  fileInput.type = 'file';
  fileInput.accept = '.txt, .mdfc';

  fileInput.addEventListener('change', function(e){
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      callback(reader.result);
    }

    if(file && file.type && file.type.startsWith('text/')){
      reader.readAsText(file);
    }
  });

  fileInput.click();
}