document.write("<style>#wrapperElem{\
border-radius: 10px; width: 411px; height: 111px;background:green;\
background: #f0f9ff; /* Old browsers */\
background: -moz-linear-gradient(top, #f0f9ff 0%, #cbebff 47%, #a1dbff 100%); /* FF3.6+ */\
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f0f9ff), color-stop(47%,#cbebff), color-stop(100%,#a1dbff)); /* Chrome,Safari4+ */\
background: -webkit-linear-gradient(top, #f0f9ff 0%,#cbebff 47%,#a1dbff 100%); /* Chrome10+,Safari5.1+ */\
background: -o-linear-gradient(top, #f0f9ff 0%,#cbebff 47%,#a1dbff 100%); /* Opera 11.10+ */\
background: -ms-linear-gradient(top, #f0f9ff 0%,#cbebff 47%,#a1dbff 100%); /* IE10+ */\
background: linear-gradient(to bottom, #f0f9ff 0%,#cbebff 47%,#a1dbff 100%); /* W3C */\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f0f9ff', endColorstr='#a1dbff',GradientType=0 ); /* IE6-9 */\
}\
#textElem{\
background:blue;\
width: 300px;\
display:block;\
padding:10px;\
font-size:200%;\
border-radius: 10px 0 10px 0px;\
-webkit-transition:margin 3s ease;\
transition:margin 3s ease;\
-0-transition:margin 3s ease;\
-moz-transition:margin 3s ease;margin: 0 0 0 500px;\
background: rgb(248,80,50); /* Old browsers */\
background: -moz-linear-gradient(top, rgba(248,80,50,1) 0%, rgba(241,111,92,1) 50%, rgba(246,41,12,1) 51%, rgba(240,47,23,1) 71%, rgba(231,56,39,1) 100%); /* FF3.6+ */\
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(248,80,50,1)), color-stop(50%,rgba(241,111,92,1)), color-stop(51%,rgba(246,41,12,1)), color-stop(71%,rgba(240,47,23,1)), color-stop(100%,rgba(231,56,39,1))); /* Chrome,Safari4+ */\
background: -webkit-linear-gradient(top, rgba(248,80,50,1) 0%,rgba(241,111,92,1) 50%,rgba(246,41,12,1) 51%,rgba(240,47,23,1) 71%,rgba(231,56,39,1) 100%); /* Chrome10+,Safari5.1+ */\
background: -o-linear-gradient(top, rgba(248,80,50,1) 0%,rgba(241,111,92,1) 50%,rgba(246,41,12,1) 51%,rgba(240,47,23,1) 71%,rgba(231,56,39,1) 100%); /* Opera 11.10+ */\
background: -ms-linear-gradient(top, rgba(248,80,50,1) 0%,rgba(241,111,92,1) 50%,rgba(246,41,12,1) 51%,rgba(240,47,23,1) 71%,rgba(231,56,39,1) 100%); /* IE10+ */\
background: linear-gradient(to bottom, rgba(248,80,50,1) 0%,rgba(241,111,92,1) 50%,rgba(246,41,12,1) 51%,rgba(240,47,23,1) 71%,rgba(231,56,39,1) 100%); /* W3C */\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f85032', endColorstr='#e73827',GradientType=0 ); /* IE6-9 */\
}</style>");

document.write('<div id="wrapperElem"><p id="textElem">HTML5 gimmick</p><p>Gradients and animations are fun!</p><br/></div>');
//document.write('<a href="http://helios.finn.no/?adlink|989|2331275|0|750|AdId=-3;BnId=0;itime=402662831;key=2203086+org_-2077+67_3+1357+B09809_10490+B09809_10549+B09809_10550+B09809_10295+B09809_10431+B09809_10019+B09809_10411+B09809_10421+B09809_10417+B09809_10416;" target="_blank"><img src="http://aka-cdn-ns.adtech.de/images/AT750_3x3.gif" border="0" alt="AdTech Ad" width="3" height="3"/></a>');
document.getElementById('textElem').style['margin'] = '0 0 0 0'