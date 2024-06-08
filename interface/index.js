// const {urlencoded} =require("body-parser")

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let location = document.getElementById("location").value;
    console.log(location)
    if (location.length != 0) {
        document.getElementById("location").value = ''
    }
    const Data = {
        location: location
    }
//    const formdata =new FormData(Data)/
    const metadata= new URLSearchParams(Data);
    fetch(`/weather?${metadata}`,
        {
            method: 'GET',
            // headers: { 'content-type': 'application/json' },
            // body: formdata
        }
    ).then(()=>{
        history.pushState(null,'',`/weather?${metadata}`)
    })
})