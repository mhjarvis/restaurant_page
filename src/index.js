

// const content = document.getElementById('content');
// const img = document.createElement('img');
// img.setAttribute('src', './images/die_bratwurst.png')
// img.id = "background-image";

// content.appendChild(img);

const display = (() => {

    const getContent = document.getElementById('content'); //main content div
    const getHeader = document.getElementById('header');

    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const uL = document.createElement('ul');


    const createHeader = () => {
        div.id = "header";
        getContent.appendChild(div);
    }

    const createTitle = () => {
        const header = document.getElementById('header'); //header content div
        h1.id = "title";
        h1.innerText = "Die Bratwurst";
        document.body.appendChild(h1);
    }

    const createMenu = () => {
        const header = document.getElementById('header');
        uL.id = 'nav';
        header.appendChild(uL);

        const arr = ["Home", "Menu", "Contact"];

        for(let i = 0; i < arr.length; i++) {
            const getNav = document.getElementById('nav');
            const li = document.createElement('li');
            let item = arr[i];
            li.id = item;
            li.className = "list-class";
            li.innerText = item;
            getNav.appendChild(li);
        }

        const block = document.createElement('div');
        block.id = "block";
        getContent.appendChild(block);

        const secondBlock = document.createElement('div');
        secondBlock.id = "second-block";
        getContent.appendChild(secondBlock);
    }


    createTitle();
    createHeader();
    createMenu();





















    console.log("Hello");
})();