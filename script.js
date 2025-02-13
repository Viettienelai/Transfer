// Copy text to clipboard function
document.getElementById('copyBtn').addEventListener('click', function() {
    var text = document.getElementById('textBox').innerText;
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Văn bản đã được sao chép!');
});
