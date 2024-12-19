$(function() {
    var version = 0;
  
    if (/mode=reply/.test(window.location.search) && my_getcookie('fa_mention')) {
       document.post.message.value += '@"' + my_getcookie('fa_mention') + '" ';
       my_setcookie('fa_mention',''); 
    } if (!/\/t\d+/.test(window.location.pathname)) return;
  
    for (var a = $(['.btnquote', '.postprofile dt strong a', '.username a', '.postprofile dt a ~ a'][version]), b, d = ['.name strong a', '.author a', '.username a', '.author a', '.post_pseudo a'][version], i = 0, j = a.length, t = document.getElementById('text_editor_textarea'); i<j; i++) {
       b = document.createElement('A');
       b.title = 'Mentionner ' + $(a[i]).closest('.post').find(d + ':not(.fa-mention)').text();
       b.style.marginRight = '3px';
       b.style.fontFamily = 'Open Sans';
       b.style.fontWeight = 'light';
       b.className = 'fa-mention';
       b.innerHTML = '@';
       b.href = '#';
       b.onclick = function() {
          var n = this.title.replace(/^.*?\s/,'');
     
          if ($.sceditor) t.insertText('@"' + n + '" ');
          else {
             my_setcookie('fa_mention', n);
             window.location.href = '/post?t=' + window.location.pathname.replace(/\/t(\d+)-.*/,'$1') + '&mode=reply';
          }
     
          return false;
       };
  
       a[i].parentNode.insertBefore(b, a[i]);
    }
  
    $(function(){
       if (!$.sceditor) return;
       t=$(t).sceditor('instance');
    });
 });