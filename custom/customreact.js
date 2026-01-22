function customRender(reactElement,conatiner){
    /*
    const document=document.reactElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setattribute('herf',reactElement.props.herf)
    domElement.setattribute('target',reactElement.props.target)

    conatiner.appendChild(domElement)
    */

    const domElement = document.createElement
    ( reactElement.type)
    domElement.innerHTML = reactElement.children 
    for (const prop in reactElement.props) {
        if (prop === 'children')continue;
        domElement.setAttribute(prop,reactElement.props[prop])
   
    }
    conatiner.appendChild(domElement)
 
    }


const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer=document.querySelector('#root')

customRender(reactElement, mainContainer)


