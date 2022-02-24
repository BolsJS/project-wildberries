const getGoods = () => {

    const links = document.querySelectorAll('.navigation-link')

    const getData = (menuItem) => {
        fetch('/db/db.json')
            .then((res) => res.json())
            .then((data) => localStorage.setItem(menuItem, JSON.stringify(data)))
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            getData(link.innerHTML);
        })
    })

    //localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4, 5, 6]))
    //const goods = JSON.parse(localStorage.getItem('goods'))
    //console.log(goods)
}

getGoods()