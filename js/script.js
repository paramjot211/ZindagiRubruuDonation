
var stories = [
    {
        "id": "1",
        "heading": "Member of Parliament Visit",
        "text": "Member of Parliament India, Navjot Kaur Sidhu a doctor and a former member of Punjab Legislative Assembly, vists Zindgi RubRu Foundation’s office and award ceremony was hosted for volunteer's who have done extensive works with us.",
        "image/video" : "videos/video2.mp4"
    },
    {
        "id": "1",
        "heading": "Computer Architecture",
        "text": "Computers"
    },
    {
        "id": "1",
        "heading": "Computer Architecture",
        "text": "Computers"
    }
]

var element = document.getElementById("1");
    var children = element.children;
    for(let element of children)
    {
        if(element.id == "heading")
        {
            element.outertext= "Member of Parliament Visit";
        }else if(element.id=="text")
        {
            element.innnerHTML="test";
        }
    }

function CreateStoriesForHomePage() {

    var element = document.getElementById("1");
    var children = element.children;
    for(let element of children)
    {
        if(element.id == "heading")
        {
            element.outertext= "Member of Parliament Visit";
        }else if(element.id=="text")
        {
            element.innnerHTML="test";
        }
    }

}