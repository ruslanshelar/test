
        var a = document.createElement('a');
        var linkText = document.createTextNode("from external script");
        var firstPartHref = "http://www."
        var secondPartHref = "linkio.com"
        a.appendChild(linkText);
        a.title = "my title text";
        a.href = firstPartHref + secondPartHref
        document.body.appendChild(a);    
