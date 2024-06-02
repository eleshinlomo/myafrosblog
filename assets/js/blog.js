
const getId = (id)=>{
   if (typeof id === 'string' ){
    return document.getElementById(id)
   }else{
    throw new error('Id must be a string')
   }
}

document.addEventListener(('DOMContentLoaded'), ()=>{
const handleMenuItems = () =>{
    const listId = getId('menu-item')
    const menuItems = [
        'Home', 
        'About', 
        'Contact',
        
    ]
    listId.innerText = ''

    menuItems.forEach((content)=>{
        const listElement = document.createElement('li')
        listElement.innerText = content
        listId.appendChild(listElement)
    })

    return 'done'
}
handleMenuItems()
})




const blogContent = () =>{
    const text = 'This is content'
    return text
}