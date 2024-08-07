

function change(element) {
    let id = element.id;
    let eleSrc = element.src;
    let mainImg = document.getElementById('main-img')
    let cont = document.getElementById('cont');
    if (id ==="0") {
        console.log(id)
        cont.style.backgroundColor ='#000';
        mainImg.src = eleSrc;
    } else if (id === '1') {
        cont.style.backgroundColor ='#237ec8';
        mainImg.src = eleSrc;
    } else if (id === '2') {
        cont.style.backgroundColor ='#6b6a65';
        mainImg.src = eleSrc;
    } else if (id === '3') {
        cont.style.backgroundColor ='#c79b53';
        mainImg.src = eleSrc;
    } else if (id === '4') {
        cont.style.backgroundColor ='#c92526';
        mainImg.src = eleSrc;
    }
}
