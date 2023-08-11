const inputFields = document.querySelectorAll("input")
const complainSpans = document.querySelectorAll(".form-span")
const confirmButton = document.querySelector("#confirm-button")
const thankyou =document.querySelector(".thankyou-container")
const thankyouButton = document.getElementById("thankyou")
const form = document.querySelector("#the-form")

const imgNumber = document.querySelector("#img-number")
const imgName = document.querySelector("#img-name")
const imgMonth = document.querySelector("#img-month")
const imgYear = document.querySelector("#img-year")
const cardCvc = document.querySelector("#card-ccv")




confirmButton.addEventListener("click", (e) => {
    e.preventDefault()
    if (inputFields[0].value.length === 0) {
        inputFields[0].style.border = "1px solid hsl(0, 100%, 66%)"
        complainSpans[0].classList.remove("no-display")
        complainSpans[0].innerHTML = "Can't be blank"
    }
    if (inputFields[1].value.length === 0) {
        inputFields[1].style.border = "1px solid hsl(0, 100%, 66%)"
        complainSpans[1].classList.remove("no-display")
        complainSpans[1].innerHTML = "Can't be blank"
    }
    if (inputFields[2].value.length === 0 || inputFields[3].value.length === 0) {
        inputFields[2].style.border = "1px solid hsl(0, 100%, 66%)"
        inputFields[3].style.border = "1px solid hsl(0, 100%, 66%)"
        complainSpans[2].classList.remove("no-display")
        complainSpans[2].innerHTML = "Can't be blank"
    }
    if (inputFields[4].value.length === 0) {
        inputFields[4].style.border = "1px solid hsl(0, 100%, 66%)"
        complainSpans[3].classList.remove("no-display")
        complainSpans[3].innerHTML = "Can't be blank"
    }

    if (
        inputFields[0].value.length > 0 &&
        inputFields[1].value.length > 0 &&
        inputFields[2].value.length > 0 &&
        inputFields[3].value.length > 0 &&
        inputFields[4].value.length > 0 
    ) 
    {
        thankyou.classList.remove("no-display")
        form.classList.add("no-display")
    }
    imgNumber.innerHTML = inputFields[1].value
    imgName.innerHTML = inputFields[0].value
    imgMonth.innerHTML = inputFields[2].value
    imgYear.innerHTML = inputFields[3].value
    cardCvc.innerHTML = inputFields[4].value
    // if (isNaN(inputFields[1].value)) {
    //     console.log("nana")
    //     complainSpans[1].innerHTML = "Wrong format, numbers only"
    // }
})

thankyouButton.addEventListener("click", () => {
    location.reload()
})
