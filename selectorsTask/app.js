$('p,li').css('background-color', 'red');
$('.a').css('border', '3px solid green');
$('img').css({ width: '300px', height: '300px' });
$('div > p').css({ color: 'cyan', fontSize: '30px' });
$('p:first + p').css({ color: 'blue', fontSize: '40px' });
$('p:first-of-type + p').css({ color: 'cyan', fontSize: '30px' });
$('a[href ^=http]').css('color', 'brown');
$('input[value *=ok]').css('color', 'purple');
$('table tr:first-of-type').css('background-color', 'purple');
$('tr:first').css('background-color', 'purple');
$('table:nth-of-type(2) td:last').css('color', 'green');
$('tr:nth-child(odd)').css('color', 'purple');
$('td:odd').css('color', 'purple');
$('input').css('color', 'blue');
