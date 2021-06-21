//нажатие на картинку
function openImg(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

var t = 0; // текущая четверка
var s = 5; // количество картинок

window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('k1').addEventListener('click', function () {
        change(false);
    })
    document.getElementById('k2').addEventListener('click', function () {
        change(true);
    })
})

//процедура загрузки json
function loadJSON() {
    let arr = [];
    $.getJSON('art/js/imgs.json', function(data) {
        for(let i=0; i<4; i++) {
            arr[i] = 0;
        }
        if (data.imgs[t] != null) {
            arr[0] = data.imgs[t];
            if (data.imgs[t + 1] != null) {
                arr[1] = data.imgs[t + 1];
                if (data.imgs[t + 2] != null) {
                    arr[2] = data.imgs[t + 2];
                    if (data.imgs[t + 3] != null)
                        arr[3] = data.imgs[t + 3];
                }
            }
        }
        loadIMG(arr);
    });
}

//процедура загрузки картинки из json
function loadIMG(arr) {
    $("#img0").attr( {
        'src':'art/images/jojo/'+ arr[0].name,
        'alt': arr[0].type
    });
    $("#img1").attr( {
        'src':'art/images/jojo/'+ arr[1].name,
        'alt': arr[1].type
    });
    $("#img2").attr( {
        'src':'art/images/jojo/'+ arr[2].name,
        'alt': arr[2].type
    });
    $("#img3").attr( {
        'src':'art/images/jojo/'+ arr[3].name,
        'alt': arr[3].type
    });
}

function size() {
    let d;
    $.getJSON('art/js/imgs.json', function(data) {
        d = data.imgs.length;
        s = d;
    });
}

//процедура нажатия на стрелку и переходу к другим картинкам
function change(boot) {
    if (boot === true) { // если правая стрелка
       if(s > (t+4)) {
            t += 4;
            loadJSON();
            size();
       }
    } else { // если левая стрелка
        if (t !== 0) {
            t -= 4;
            loadJSON();
        }
    }
}
