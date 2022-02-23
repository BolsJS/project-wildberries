const search = function () {
    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > button')

    input.addEventListener('input', (event) => {
        // console.log(event.target.value)
        let inputValue = event.target.value
    })

    searchBtn.addEventListener('click', () => {
        const inputVal = input.value
        console.log("Search input value: ", inputVal)
    })

}

search()