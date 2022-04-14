const tabItem = document.querySelectorAll('.info-tab');
const info_item = document.querySelectorAll('.info-item');

function selectItem (e) {
    removeContent()
    removeTabOpacity()

    //to select content of tab
    const tabContentItem = document.querySelector(`#info-${this.id}`)

    this.classList.add('tab-opacity')
    this.classList.add('opacity')
    tabContentItem.classList.add("show");
}


function removeContent () {
    info_item.forEach(item => item.classList.remove("show"))
}

function removeTabOpacity(){
    tabItem.forEach(item => item.classList.remove("tab-opacity"))
    tabItem.forEach(item => item.classList.remove("opacity"))
}


tabItem.forEach( item => { item.addEventListener('click', selectItem) })