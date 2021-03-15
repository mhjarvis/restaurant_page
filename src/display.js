const display = (() => {

    const getContent = document.getElementById('content'); //main content div

    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const uL = document.createElement('ul');


    const createHeader = () => {        //header div and page title
        div.id = "header";
        getContent.appendChild(div);

        h1.id = "title";
        h1.title = "Die Bratwurst";
        h1.innerText = "Die Bratwurst";
        getContent.appendChild(h1); 

        const block = document.createElement('div');        //red-colored div
        block.id = "block";
        getContent.appendChild(block);

        const secondBlock = document.createElement('div');  //yellow-colored div
        secondBlock.id = "second-block";
        getContent.appendChild(secondBlock);
    };

    const createMenu = () => {
        const arr = ["Home", "Menu", "Contact"];        //menu items
        const header = document.getElementById('header');
        uL.id = 'nav';
        header.appendChild(uL);

        for(let i = 0; i < arr.length; i++) {
            const getNav = document.getElementById('nav');
            const li = document.createElement('li');
            let item = arr[i];
            li.id = item;
            li.className = "list-class";
            li.innerText = item;
            getNav.appendChild(li);
        };
    };

    const welcome = () => {
        const div = document.createElement('div');
        div.id = "image-box";
        getContent.appendChild(div);

        const getImageBox = document.getElementById('image-box');
        const paragraph = document.createElement('p');
        paragraph.id = "paragraph-header";
        paragraph.innerText = "The best Bratwurst on this side of the Planet!";
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
        const text = document.createElement('p');
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
    };

    createHeader();
    createMenu();
    welcome();
    footer();

})();

export default display;