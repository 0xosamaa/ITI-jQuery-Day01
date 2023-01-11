const showButton = $('input[type=button]');
const hiddenItems = $('div:hidden');

showButton.click(function () {
    hiddenItems.show(2000).hide(4000);
});
