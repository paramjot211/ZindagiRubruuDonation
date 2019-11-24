function load() {
    var mydata = JSON.parse(data);

       for (var i = 0; i < 3; i++) {
        storyData = mydata[i];
        var storyId = "story" + storyData["id"];
        var heading = storyData["heading"];
        var cotent = storyData["text"];
        var videoImageUrl = storyData["image/video"];

        var div = document.getElementById(storyId);
        var childrens = div.children;
        for (let element of childrens) {           
                if (element.id == "videoImageStyle") {
                    element.src = videoImageUrl;
                }
                if (element.id == "text") {
                    element.innerHTML = cotent;
                }
                if (element.id == "heading") {
                    element.innerText = heading;
                }  
                if (element.id == "ancheorStyle") {
                    element.href = "DonerCorner.html#" + storyId;
                }           
        }
    }
}

function loadDonerPage() {
    var mydata = JSON.parse(data);

    var div = document.getElementById('story');

    for (var i = 0; i < 4; i++) {
        storyData = mydata[i];
        var storyId = "story" + storyData["id"];
        var heading = storyData["heading"];
        var cotent = storyData["text"];
        var videoImageUrl = storyData["image/video"];

        var div = document.getElementById(storyId);
        var childrens = div.children;
        for (let element of childrens) {   
            if (element.id == "storyheading") {
                element.innerText = heading;
            }  
            if(element.id == "storybody")
            {

                var storyBodyChildren = element.children;
                for(let child of storyBodyChildren)
                {

                    if (child.id == "storyImageVideo") {
                        child.src = videoImageUrl;
                    }
                    if (child.id == "storyParagraph") {
                        child.innerHTML = cotent;
                    }
                    
                    if (child.id == "ancheorStyle") {
                        child.href = "DonerCorner.html#" + storyId;
                    }     

                }
            }
            
                      
        }
    }
}