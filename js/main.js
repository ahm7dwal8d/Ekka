
// Header Links 

$(".links .container i").click(function () {
    $(".links .container .link").slideToggle("2000")
})

// Product Section 

let ProductHead = document.querySelectorAll(".product .product-links li")


ProductHead.forEach((li)=> {
    li.addEventListener("click" , RemoveActiveClass)
    li.addEventListener("click" , MangeBox)
})

function RemoveActiveClass() {
    ProductHead.forEach((li)=> {
        li.classList.remove("active")
        this.classList.add("active")
    })
}

let ProductBox = document.querySelectorAll(".product .box")

function MangeBox() {
    ProductBox.forEach((box)=> {
        box.style.display = "none"
    })
    document.querySelectorAll(this.dataset.class).forEach((el)=> {
        el.style.display = "block"
    })
}

let ProductOne = document.querySelectorAll(".product .one .size div")


ProductOne.forEach((one)=> {
    one.addEventListener("click" , ProductSizeActive)
})
function ProductSizeActive() {
    ProductOne.forEach((one)=> {

        one.classList.remove("active")

        this.classList.add("active")
    })
}

let ProductTwo = document.querySelectorAll(".product .two .size div")

ProductTwo.forEach((two)=> {
    two.addEventListener("click" , ProductSizeActive)
})
function ProductSizeActive() {
    ProductTwo.forEach((two)=> {

        two.classList.remove("active")

        this.classList.add("active")
    })
}

let ProductThree = document.querySelectorAll(".product .three .size div")

ProductThree.forEach((three)=> {
    three.addEventListener("click" , ProductSizeActive)
})
function ProductSizeActive() {
    ProductThree.forEach((three)=> {

        three.classList.remove("active")

        this.classList.add("active")
    })
}

let ProductFour = document.querySelectorAll(".product .four .size div")

ProductFour.forEach((four)=> {
    four.addEventListener("click" , ProductSizeActive)
})
function ProductSizeActive() {
    ProductFour.forEach((four)=> {

        four.classList.remove("active")

        this.classList.add("active")
    })
}

let ProductFive = document.querySelectorAll(".product .five .size div")

ProductFive.forEach((five)=> {
    five.addEventListener("click" , ProductSizeActive)
})
function ProductSizeActive() {
    ProductFive.forEach((five)=> {

        five.classList.remove("active")

        this.classList.add("active")
    })
}

let ProductSix = document.querySelectorAll(".product .six .size div")

ProductSix.forEach((six)=> {
    six.addEventListener("click" , ProductSizeActive)
})
function ProductSizeActive() {
    ProductSix.forEach((six)=> {

        six.classList.remove("active")

        this.classList.add("active")
    })
}

let ProductSeven = document.querySelectorAll(".product .seven .size div")

ProductSeven.forEach((seven)=> {
    seven.addEventListener("click" , ProductSizeActive)
})
function ProductSizeActive() {
    ProductSeven.forEach((seven)=> {

        seven.classList.remove("active")

        this.classList.add("active")
    })
}

let ProductEight = document.querySelectorAll(".product .eight .size div")

ProductEight.forEach((eight)=> {
    eight.addEventListener("click" , ProductSizeActive)
})
function ProductSizeActive() {
    ProductEight.forEach((eight)=> {

        eight.classList.remove("active")

        this.classList.add("active")
    })
}

let ProductNine = document.querySelectorAll(".product-two .nine .size div")

ProductNine.forEach((nine)=> {
    nine.addEventListener("click" , ProductTowSizeActive)
})
function ProductTowSizeActive() {
    ProductNine.forEach((nine)=> {

        nine.classList.remove("active")

        this.classList.add("active")
    })
}

let ProductTen = document.querySelectorAll(".product-two .ten .size div")

ProductTen.forEach((ten)=> {
    ten.addEventListener("click" , ProductTowSizeActive)
})
function ProductTowSizeActive() {
    ProductTen.forEach((ten)=> {

        ten.classList.remove("active")

        this.classList.add("active")
    })
}

let ProductEleven = document.querySelectorAll(".product-two .eleven .size div")

ProductEleven.forEach((eleven)=> {
    eleven.addEventListener("click" , ProductTowSizeActive)
})
function ProductTowSizeActive() {
    ProductEleven.forEach((eleven)=> {

        eleven.classList.remove("active")

        this.classList.add("active")
    })
}

let ProductTwive = document.querySelectorAll(".product-two .twive .size div")

ProductTwive.forEach((twive)=> {
    twive.addEventListener("click" , ProductTowSizeActive)
})
function ProductTowSizeActive() {
    ProductTwive.forEach((twive)=> {

        twive.classList.remove("active")

        this.classList.add("active")
    })
}



// Cate Section 

let CateText = document.querySelectorAll(".cate .container .info > div")

CateText.forEach((box)=> {
    box.addEventListener("click" , RemoveActiveClass)
})
function RemoveActiveClass() {
    CateText.forEach((box)=> {
        box.classList.remove("active")
        this.classList.add("active")
    })
}

// ButtonToUp

let ButtonToUp = document.querySelector("span.to-top")

ButtonToUp.addEventListener("click" , function () {

    window.scrollTo({
        left:0,
        top:0,
        behavior: "smooth"
    })

})

window.onscroll = function () {

    // ButtonToUp

    if (window.scrollY >= 1000) {

        ButtonToUp.classList.add("active")

    } else {

        ButtonToUp.classList.remove("active")

    }
}

