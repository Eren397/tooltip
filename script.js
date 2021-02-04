const tooltips = document.querySelectorAll('.map img')
const spanY = document.querySelector('.y')
const spanX = document.querySelector('.x')

tooltips.forEach(tool => {
    tool.addEventListener('mouseover', onMouseOver)
})

function onMouseOver(){
    let tooltip = createBox(this)
    this.addEventListener('mousemove', onMouseMove)
    onMouseMove.element = tooltip
    this.addEventListener('mouseleave', onMouseLeave)
    onMouseLeave.element = tooltip
    onMouseLeave.remover = this
}

const onMouseLeave = {
    handleEvent(){
        this.element.remove()
        this.remover.removeEventListener('mouseleave', onMouseLeave)
        this.remover.removeEventListener('mousemove', onMouseMove)
    }
}


const onMouseMove = {
    handleEvent(e){
        this.element.style.top = e.layerY  -100 + 'px'
        this.element.style.left = e.layerX - 100 + 'px'
        spanY.innerHTML = e.layerY 
        spanX.innerHTML = e.layerX
    }
}
function createBox(msg){
    let tooltip = document.createElement('div')
    tooltip.classList.add('tooltip')
    let txt = msg.getAttribute('aria-label')
    tooltip.innerText = txt
    document.body.appendChild(tooltip)
    return tooltip
}