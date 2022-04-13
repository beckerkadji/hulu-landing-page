const tabItem = document.querySelectorAll('.info-tab');
const info_item = document.querySelectorAll('.info-item')
const hrItem = document.querySelectorAll('.hr')

function selectItem (e) {
    removeContent()
    removeTabOpacity()
    removeTabBorder();

    //to select content of tab
    const tabContentItem = document.querySelector(`#info-${this.id}`)

    //to select bottom border of tab
    const tabHr = document.querySelector(`#${this.id}-hr`)

    this.classList.add('tab-opacity')
    tabContentItem.classList.add("show");
    tabHr.classList.add("show-hr")
}

function removeContent () {
    info_item.forEach(item => item.classList.remove("show"))
}

function removeTabOpacity(){
    tabItem.forEach(item => item.classList.remove("tab-opacity"))
}

function removeTabBorder(){
    hrItem.forEach( item => item.classList.remove("show-hr"))
}



tabItem.forEach( item => { item.addEventListener('click', selectItem) })