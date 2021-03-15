

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
        getContent.appendChild(h1);
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

    const welcome = () => {
        const div = document.createElement('div');
        div.id = "image-box";
        getContent.appendChild(div);

        const getImageBox = document.getElementById('image-box');
        const paragraph = document.createElement('p');
        paragraph.id = "paragraph-header";
        paragraph.innerText = "The best Bratwurst on this side of the World!";
        getImageBox.appendChild(paragraph);

        const img = document.createElement('img');
        img.id = "hello-image";
        img.src = 'images/brat-cartoon.jpg';
        getImageBox.appendChild(img);
    }

    const footer = () => {

        const div = document.createElement('div');
        div.id = "footer";
        getContent.appendChild(div);

        const getFooter = document.getElementById('footer');
        const text = document.createElement('h6');
        text.id = "copyright";
        text.innerHTML = "Copyright &copy; 2021 mhjarvis";
        getFooter.appendChild(text);

        const img = document.createElement('img');
        img.id = "github-image";
        img.src = "images/github.png";
        img.onclick = () => {
            window.location.href = "https://github.com/mhjarvis";
        };
        getFooter.appendChild(img);

        
    }


    createTitle();
    createHeader();
    createMenu();
    welcome();
    footer();



















    console.log("Hello");
})();