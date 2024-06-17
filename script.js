const $ = document
const wrapper = $.querySelector('.wrapper')
const input = $.querySelector('input')
const btn = $.querySelector('button')
const img = $.querySelector('img')

btn.addEventListener('click', () => {
    let inputValue = input.value.trim()
    console.log(inputValue);

    if (inputValue) {
        btn.innerHTML = "Generating QRcode ..."
        img.setAttribute('src',`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`)

        img.addEventListener('load', () => {
            wrapper.classList.add('active')
            btn.innerHTML = "Generating Qr code"
        })
    }

})

input.addEventListener('keyup', () => {
    if (!input.value.trim()){
        wrapper.classList.remove('active')
    }
})