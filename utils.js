function checkIfDuplicateExists(arr) {
    if(arr && arr.length > 0)
        return new Set(arr).size !== arr.length
}

function escapeRegExp(string) {
  const specialCharacters = /[.*+?^${}()|[\]\\]/g; 
  return string.replace(specialCharacters, '\\$&');
}

function downloadTextFile(text, filename) {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}