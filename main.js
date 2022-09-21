let text = document.querySelector("textarea");




document.getElementById("upper-case")
                .addEventListener("click",function(){
                    text.value = text.value.toUpperCase();
                });

document.getElementById("lower-case")
                .addEventListener("click",function(){
                    text.value = text.value.toLowerCase();
                });

/*document.getElementById("proper-case")
                .addEventListener("click",function(){
                    let words = text.value.toLowerCase().split(' ');
                    let temp = "";
                    for (let w of words) {
                        temp += capitalize(w) + " ";
                    }
                    text.value = temp;
                });*/


document.getElementById("proper-case").addEventListener("click", function (){
    let text = document.querySelector('textarea').value.toLowerCase().split(" ");
    let sentence = [];
    for (let i=0; i < text.length; i++){
        sentence[i]= text[i].charAt(0).toUpperCase() + text[i].slice(1) //+ " ";
        document.querySelector('textarea').value = sentence.join(" ");
    }
});

document.getElementById("sentence-case")
    .addEventListener("click",function(){
        let words = text.value.toLowerCase().split(' ');
        let result = "";
        for(let i=0; i < words.length; i++){
            if (i === 0) {
                result += capitalize(words[i]) + " ";
            }else {
                let lastWord = words[i - 1];
                if (lastWord.charAt(lastWord.length - 1) === '.') {
                    result += capitalize(words[i]) + " ";
                }else{
                    result += words[i] + " ";
                }
            }
        }
        text.value = result.trimEnd();
    });


let capitalize = function(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}

document.getElementById("save-text-file")
    .addEventListener("click",function (){
        let text2 = document.querySelector("textarea").value;
        download ("text.txt", text2);
    });

// Start file download.





// Start file download.
//download("hello.txt","This is the content of my file :)");

function download(filename, text) {

    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

}
