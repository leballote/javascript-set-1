let tree = {
    value: "A",
    children: [
        {
            value: "a",
            children: [{ value: "aa", children: null} ]
        },
        {
            value: "b",
            children: [
                { value: "ba", children: null },
                { value: "bb", children: null }
            ]
        },
        {
            value: "c",
            children: [
                { value: "ca", children: null },
                {
                    value: "cb", children: [{
                        value: "cba", 
                        children: null
                    }]
                }
            ]
        }

    ]
}

function showTreeElements(tree) {
    function buildOut(tree) {
        let out = "";
        out += tree.value + " ";
        if (tree.children) {
            for (let child of tree.children) {
                out += buildOut(child);
            }
        }
        return out;
    }
    console.log(buildOut(tree));
}

showTreeElements(tree);
