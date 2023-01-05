const root = document.querySelector(':root');

const toggleTheme = document.querySelector('.color__toggle-label input');

toggleTheme.addEventListener('change', function(){
    if(this.checked){
        root.style.setProperty('--light',"#000");
        root.style.setProperty('--dark',"#fff");
        root.style.setProperty('--footer-bg',"#000");
        root.style.setProperty('--box-shadow','0 0 10px rgba( 255, 255, 255, 0.3)');

    }else{
        root.style.setProperty('--light',"#fff");
        root.style.setProperty('--dark',"#000");
        root.style.setProperty('--footer-bg',"#333");
        root.style.setProperty('--box-shadow','0 0 10px rgba(0,0,0,0.1)');

    }
});