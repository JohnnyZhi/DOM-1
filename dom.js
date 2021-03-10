window.dom = {
    find(selector, scope){
        return (scope || document).querySelectorAll(selector)
    },
    style(node, name, value){
        node.style[name] = value
    },
    each(NodeList, fn){
        for(let i = 0;i<NodeList.length;i++){
            fn.call(null,NodeList[i])
        }
    }
}