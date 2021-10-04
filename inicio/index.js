let template_portafolio = gid('template-portafolio').content,
portafolio_fragment = document.createDocumentFragment(),
section = $('.section-port')

function pintar_portafolio(data){
    let newData = Object.values(data)
    newData.forEach(element => {
        let title= element.title,
        img = element.img,
        portafoliotitle = $('.template-title', template_portafolio),
        portafolioimg = $('.template-img',template_portafolio)
        portafoliotitle.textContent = title
        portafolioimg.setAttribute("src", img)
        const portafolio_clone = template_portafolio.cloneNode(true)
        portafolio_fragment.appendChild(portafolio_clone)
        return
        
    });
    section.appendChild(portafolio_fragment)


}

addEventListener("DOMContentLoaded", async (e) =>{
     fetch("inicio/portafolio.json")
    .then(res => res.json())
    .then(data =>  pintar_portafolio(data))
})
