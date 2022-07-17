const menuMain = [...document.querySelectorAll('.menu_main')];

menuMain.forEach(item => {
    const menuSub = [...item.querySelectorAll('.menu .menu_sub')];
    let oldItem = menuSub[0];
    menuSub.forEach(item => {
        item.parentElement.querySelector('a').onclick = () =>  {
            oldItem.className = "menu menu_sub";
            item.className += " menu_active";
            oldItem = item;
            return false;
        };
    })
});

