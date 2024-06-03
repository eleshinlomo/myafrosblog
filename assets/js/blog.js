import { articles } from "./blogdata.js"

// Get Element id
const getId = (id)=>{
    if (typeof id === 'string' ){
     return document.getElementById(id)
    }else{
     throw new error('Id must be a string')
    }
 }


// Handle Articles
document.addEventListener(('DOMContentLoaded'), ()=>{

    const handleArticles = ()=>{
   
    articles.map((article)=>{
        const sectionElement = document.querySelector('.tiles')
        sectionElement.classList.add(article.containerclass)
    
          // Check if the container exists
          if (!sectionElement) {
            console.error("Container element with class 'tiles' not found.");
            return; // Exit the function if container is not found
        }
    
  
    // Article Element
    const articleElement = document.createElement('article')
    articleElement.classList.add(article.articleclass)
    // Span Element
    const spanElement = document.createElement('span')
    spanElement.classList.add(article.spanclass)
    const imageElement = document.createElement('img')
    imageElement.src = article.src
    imageElement.alt = article.alt
    spanElement.appendChild(imageElement)
     // A Element
     const aElement = document.createElement('a')
    //  H2 Element
     const h2Element = document.createElement('h2')
     h2Element.innerText = article.h2
     aElement.appendChild(h2Element)
    // Div Element
    const divElement = document.createElement('div')
    divElement.classList.add(article.divclass)
    const pElement = document.createElement('p')
    pElement.innerText = article.title
    divElement.appendChild(pElement)
   
    aElement.href = article.href
    aElement.append(divElement)

    articleElement.appendChild(spanElement)
    articleElement.appendChild(aElement)
    articleElement.appendChild(divElement)

    sectionElement.appendChild(articleElement)

    })
}

handleArticles()
})



// Menu Items
document.addEventListener(('DOMContentLoaded'), ()=>{
const handleMenuItems = () =>{

    const listId = getId('menu-item')
    const menuItems = [
        {
            routename: 'Home',
            route: '/'
        }, 
        {
            routename: 'About',
            route: 'https://www.myafros.com/aboutpage'
        },
        {
            routename: 'Contact',
            route: 'https://www.myafros.com/contactpage'
        }, 
        {
            routename: 'My Afros',
            route: 'https://myafros.com'
        }, 
    ]
    listId.innerText = ''

    menuItems.map((menuItem)=>{
        const listElement = document.createElement('li')
        const aElement = document.createElement('a')
        aElement.href= menuItem.route
        aElement.innerText = menuItem.routename
        listElement.appendChild(aElement)
        
        listId.appendChild(listElement)
    })

}
handleMenuItems()
})



