const menuMain = [...document.querySelectorAll('.menu_main')];

menuMain.forEach(item => {
    const menuSub = [...item.querySelectorAll('.menu .menu_sub')];
    menuSub.forEach(item => {
        item.parentElement.querySelector('a').onclick = () =>  {
            const currentActiveMenuSub = menuSub.find(item =>
                item.className === "menu menu_sub menu_active"
            )
            if (currentActiveMenuSub !== undefined) {
                currentActiveMenuSub.className = "menu menu_sub";
            }
            item.className += " menu_active";
            return false;
        };
    })
});

