<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cb04e91 (As3 bhaa)
var qouts = [
    {
        q: "So many books, so little time.",
        qI: "b0.jpg",
        qN: "Frank Zappa",
    },
    {
        q: "Be yourself; everyone else is already taken.",
        qI: "b1.jpg",
        qN: "Oscar Wilde",
    },
    {
        q: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. ",
        qI: "b22jpg.jpg",
        qN: "Marilyn Monroe",
    },
    {
        q: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        qI: "b3.jpg",
        qN: "Albert Einstein",
    },
    {
        q: "A room without books is like a body without a soul.",
        qI: "b4.jpg",
        qN: "Marcus Tullius Cicero",
    },
]


var index;
var lIndex;
var carton = "";
var dis = [];

function change() {



    if (dis.length == qouts.length) dis = [];
    do {
        index = Math.round(Math.random() * ((qouts.length) - 1));
    } while (index == lIndex || dis.includes(index))
    dis.push(index);
    lIndex = index;
    carton = `
    <div class="content py-5  d-flex flex-column  w-100  align-items-center  ">

            <img src="img/${qouts[index].qI}" class="border border-3 rounded-4 border-white" alt="">

            <span class="display-4 fs-2 my-3 fw-bold position-relative  p-2">${qouts[index].qN}</span>

            <p id="pra" class="display-4 fs-4 fw-medium w-75 pt-2 " ><q>${qouts[index].q}</q></p>
        </div>
        <div class="btnCopy  w-100 d-flex pb-2">
        <button onclick="copy()"
        class="btn btn-dark border border-2 fs-4  border-white p-3  text-center rounded-pill "></button>
        <button class="btnn w-25 " onclick="change()">Take Your Quotes</button>
            </div>
    `
    console.log(index);
    document.getElementById("demo").innerHTML = carton;
}

function copy() {
    var copyText = document.getElementById("pra");
    copyText.ariaSelected;
    navigator.clipboard.writeText(copyText.textContent);
    console.log(copyText.textContent);
}


<<<<<<< HEAD
=======
=======
var getName = document.getElementById("sName")
var getUrl = document.getElementById("url")
var getUrl1 = document.getElementById("url1")
var webList = [];

if (localStorage.getItem("Urls") != null) {

    webList = JSON.parse(localStorage.getItem("Urls"));
    display();
}

var reEx = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
function add() {
    var urls = {
        name: getName.value,
        url: getUrl.value,
    }
    console.log(reEx.test(getUrl.value));
    if (getName.value == "" || getUrl.value == "" || reEx.test(getUrl.value) == false || getName.value.length < 4) {
        document.getElementById("card").classList.remove("d-none");


    }
    else {
        webList.push(urls);
        localStorage.setItem("Urls", JSON.stringify(webList));
        display();
        emptyInput();
        console.log(webList);
    }
}

function display() {
    cartona = "";
    for (let i = 0; i < webList.length; i++) {
        if (i % 2 == 0) {

            cartona += `
    
                <tr class="table-danger">
                    <td>${i + 1}</td>
                    <td>${webList[i].name}</td>
                    <td><a target="_blank" href="${webList[i].url}" class="btn btn-dark"><i
                                class="fa-solid fa-eye pe-1"></i>Visit</a></td>
                                <td><button onclick="delet(${i})" class="btn btn-white border border-1 border-black  shadow"><i
                                class="fa-solid fa-trash-can pe-1"></i>Delete</button></td>
                                <td><button onclick="Update1(${i})"  type="button" class="green btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <span><i class="fa-solid fa-pen"></i></span> Update
                </button></td>
                </tr>
            `
        } else {
            cartona += `
    
                <tr>
                    <td>${i + 1}</td>
                    <td>${webList[i].name}</td>
                    <td><a target="_blank" href="${webList[i].url}" class="btn btn-dark"><i
                                class="fa-solid fa-eye pe-1"></i>Visit</a></td>
                                <td><button onclick="delet(${i})" class="btn border border-1 border-black  btn-white shadow"><i
                                class="fa-solid fa-trash-can pe-1"></i>Delete</button></td>
                                <td><button onclick="Update1(${i})"  type="button" class="green btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <span><i class="fa-solid fa-pen"></i></span> Update
                </button></td>
                </tr>
            `

        }
    }
    document.getElementById('tables').innerHTML = cartona;
}

function emptyInput() {
    getName.value = "";
    getUrl.value = "";

}
function delet(index) {
    webList.splice(index, 1);
    localStorage.setItem("Urls", JSON.stringify(webList));
    display();


}
function clearAll() {
    localStorage.clear();
    display();

}
var indexs;
function Update1(index) {
    indexs = index;
    document.getElementById("sName1").value = webList[index].name
    document.getElementById("url1").value = webList[index].url
}
function Update2() {
    var newOb = {
        name: document.getElementById("sName1").value,
        url: document.getElementById("url1").value
    }
    if (newOb.name == "" || newOb.url == "" || reEx.test(getUrl1.value) == false || newOb.name.length < 4) {
        document.getElementById("card").classList.remove("d-none");
    }
    else {
        webList.splice(indexs, 1, newOb);
        localStorage.setItem("Urls", JSON.stringify(webList));
        display();
    }
}

function hide() {
    document.getElementById("card").classList.add("d-none");;

}

function valid(prs) {
    if (prs.length > 3 || prs == "") {
        document.getElementById("sName").style.border = " 2px solid blue";
        document.getElementById("sName").style.boxShadow = "0 0 0 0.25rem rgba(0,0,255,0.25) ";
        document.getElementById("sName1").style.border = " 2px solid blue";
        document.getElementById("sName1").style.boxShadow = "0 0 0 0.25rem rgba(0,0,255,0.25) ";

    }
    else {
        document.getElementById("sName").style.border = " 2px solid red";
        document.getElementById("sName").style.boxShadow = "0 0 0 0.25rem rgba(255,0,0,0.25)";
        document.getElementById("sName1").style.boxShadow = "0 0 0 0.25rem rgba(255,0,0,0.25)";
        document.getElementById("sName1").style.border = " 2px solid red";

    }
}

function validUrl(prs) {
    console.log(reEx.test(prs));
    if (reEx.test(prs) == true || prs == "") {
        document.getElementById("url").style.border = " 2px solid blue";
        document.getElementById("url").style.boxShadow = "0 0 0 0.25rem rgba(0,0,255,0.25) ";
        document.getElementById("url1").style.border = " 2px solid blue";
        document.getElementById("url1").style.boxShadow = "0 0 0 0.25rem rgba(0,0,255,0.25) ";
    }
    else {

        document.getElementById("url").style.border = " 2px solid red";
        document.getElementById("url").style.boxShadow = "0 0 0 0.25rem rgba(255,0,0,0.25)";
        document.getElementById("url1").style.boxShadow = "0 0 0 0.25rem rgba(255,0,0,0.25)";
        document.getElementById("url1").style.border = " 2px solid red";

    }
}
>>>>>>> c714049 (As3 Bahaa)
>>>>>>> cb04e91 (As3 bhaa)
