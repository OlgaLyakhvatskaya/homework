
((doc) => { 
    doc.addEventListener("DOMContentLoaded", function(){ 
        const img = doc.querySelector("img");
        const imgSize = `${img.clientWidth}px X ${img.clientHeight}px`;
        console.log(imgSize);
    })
})(document);