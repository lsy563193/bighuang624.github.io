document.body.addEventListener('copy', function (e) {
    if (window.getSelection().toString() && window.getSelection().toString().length > 44) {
        setClipboardText(e);
    }
});
 
function setClipboardText(event) {
    var clipboardData = event.clipboardData || window.clipboardData;
    if (clipboardData) {
        event.preventDefault();
 
        var htmlData = ''
            + '著作权归作者所有。<br>'
            + '商业转载请联系作者获得授权，非商业转载请注明出处。<br>'
            + '作者：大黄菌（Kyon Huang）<br>'
            + '链接：' + window.location.href + '<br>'
            + '来源：大黄菌的个人博客<br><br>'
            + window.getSelection().toString();
        var textData = ''
            + '著作权归作者所有。\n'
            + '商业转载请联系作者获得授权，非商业转载请注明出处。\n'
            + '作者：大黄菌（Kyon Huang）\n'
            + '链接：' + window.location.href + '\n'
            + '来源：大黄菌的个人博客\n\n'
            + window.getSelection().toString();
 
        clipboardData.setData('text/html', htmlData);
        clipboardData.setData('text/plain',textData);
    }
}