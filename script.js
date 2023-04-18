// Esercizio 1
function exercise1() {
    let myJumbo = document.getElementsByClassName('jumbotron')[0];
    console.log(myJumbo);
    let myH1 = myJumbo.getElementsByTagName('h1')[0];
    console.log(myH1);
    myH1.style.color = 'red';
}

// Esercizio 2
function exercise2() {
    myNav = document.getElementsByTagName('nav')[0];
    console.log(myNav);

    for (let i = 0; i < myNav.children.length; i++) {
        console.log(myNav.children[i]);
    }
}

//Esercizio 3
function exercise3() {
    myJumbo = document.getElementsByClassName('jumbotron')[0];
    console.log(myJumbo);
    myAnchor = myJumbo.getElementsByTagName('a')[0];
    console.log(myAnchor);
}

// Esercizio 4
function exercise4() {
    myBlogPost = document.getElementsByClassName('blog-post')[0];
    console.log(myBlogPost);
}

// Esercizio 5
function exercise5() {
    myMain = document.getElementsByTagName('main')[0];
    myHr = myMain.getElementsByTagName('hr')[0];
    console.log(myHr);
    myHr.style.color ='red';
}

// Esercizio 6
function exercise6() {
    myNav = document.getElementsByTagName('nav')[0];
    // console.log(myNav);

    for (let i = 0; i < myNav.children.length; i = i + 2) {
        console.log(myNav.children[i]);
    }
}

// Esercizio 7
function exercise7() {
    mySideBar = document.getElementsByTagName('aside')[0];
    myArchive = mySideBar.children[1];
    myOl = myArchive.getElementsByTagName('ol')[0];
    myLi = [];

    for (let i = 0; i < myOl.children.length; i++) {
        myLi.push(myOl.children[i].children[0].innerText);
    }

    console.log(myLi);
}

// Esercizio 8
function exercise8() {
    mySecondBlogPost = document.getElementsByClassName('blog-post')[1];
    myAuthor = mySecondBlogPost.getElementsByTagName('a')[0];
    console.log(myAuthor);
}

// Esercizio 9
function exercise9() {
    myThirdBlogPost = document.getElementsByClassName('blog-post')[2];
    myLi = myThirdBlogPost.getElementsByTagName('li')[1];
    console.log(myLi);
}

// Esercizio 10
function exercise10() {
    myAnchorAfterFooter = document.querySelectorAll('footer + a')[0];
    console.log(myAnchorAfterFooter);
}

// Esercizio 11
function exercise11() {
    myBtn = document.getElementsByClassName('blog-pagination')[0].children[1];
    console.log(myBtn);
}

// Esercizio 12
function exercise12() {
    myFooter = document.getElementsByTagName('footer')[0];
    mySecondLink = myFooter.getElementsByTagName('a')[1];
    console.log(mySecondLink);
}


//? Test here:
// exercise1();

// ===========================================================================================

// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
function removeTwitterLink() {
    myAsideBar = document.getElementsByTagName('aside')[0];
    console.log(myAsideBar);
    myOther = myAsideBar.children[2];
    console.log(myOther);
    myTwitterLink = myOther.getElementsByTagName('a')[1];
    console.log(myTwitterLink);

    if(myTwitterLink.innerText == "Twitter") {
        myTwitterLink.remove();
    }
}

//? removeTwitterLink();

// ===========================================================================================

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".
function removeParent() {
    myJumbo = document.getElementsByClassName('jumbotron')[0];
    console.log(myJumbo);
    myAnchor = myJumbo.getElementsByTagName('a')[0];
    console.log(myAnchor);

    // add listener to the anchor
    myAnchor.addEventListener('click', () => {
        myParent = myAnchor.parentNode;
        console.log(myParent);
        myParent.remove();
    });
}

//? Test here:
// removeParent();

// ===========================================================================================

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.
function authorAlert() {
    myBlogPostAuthorArr = document.getElementsByClassName('blog-post-meta');
    console.log(myBlogPostAuthorArr);
    
    for (let i = 0; i < myBlogPostAuthorArr.length; i++) {
        //add hover listener to the anchor
        myBlogPostAuthorArr[i].children[0].addEventListener('mouseover', () => {
            alert(myBlogPostAuthorArr[i].children[0].innerText);
        });        
    }
}

//? Test here:
// authorAlert();