const apiKey = 'A3r4HTxtapOQo3PBi871U13Twv4g7yie';
let userSearch = ""

$(document).ready(() => {
    //function to clear div before adding new gifs
    const clearPage = () => $(".gif-body").empty()
    //hides filter button
    $("#filter-g").hide()
    $("#filter-pg").hide()
    $("#filter-pg13").hide()
    $("#filter-r").hide()
    //submit button handler
    $("#submit").click(() => {
        //when clicked, all filters show
        $("#filter-g").show()
        $("#filter-pg").show()
        $("#filter-pg13").show()
        $("#filter-r").show()
        //taking value of the user input
        userSearch = $("#userSearch").val()
        //empty out gif-body 
        clearPage()
        //get/send request to giphy
        let xhr = $.get(`https://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=${apiKey}&limit=30`);
        xhr.done((res) => {
            const gifs = res.data
            //map through data and pull out image url 
            console.log(res.data)
            gifs.map((gif) => {
                const imageMedium = gif.images.downsized_medium.url
                $(".gif-body").append('<div class="gif-img"><img src=' + imageMedium + '"></div>')
            })
        })
    })
    $("#filter-pg").click(() => {
        //taking value of the user input
        userSearch = $("#userSearch").val()
        clearPage()
        //get/send request to giphy
        let xhr = $.get(`https://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=${apiKey}&limit=30`);
        xhr.done((res) => {
            const gifs = res.data
            console.log(gifs)
            gifs.map((gif)=>{
                const imageMedium = gif.images.downsized_medium.url
                if (gif.rating === "pg"){
                    $(".gif-body").append('<div class="gif-img"><img src=' + imageMedium + '"></div>')
                } else {
                    return false
                }
            })
        })
    })
    $("#filter-g").click(() => {
        //taking value of the user input
        userSearch = $("#userSearch").val()
        clearPage()
        //get/send request to giphy
        let xhr = $.get(`https://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=${apiKey}&limit=30`);
        xhr.done((res) => {
            const gifs = res.data
            console.log(gifs)
            gifs.map((gif)=>{
                const imageMedium = gif.images.downsized_medium.url
                if (gif.rating === "g"){
                    $(".gif-body").append('<div class="gif-img"><img src=' + imageMedium + '"></div>')  
                } else {
                    return false
                }
            })
        })
    })
    $("#filter-pg13").click(() => {
        //taking value of the user input
        userSearch = $("#userSearch").val()
        clearPage()
        //get/send request to giphy
        let xhr = $.get(`https://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=${apiKey}&limit=30`);
        xhr.done((res) => {
            const gifs = res.data
            console.log(gifs)
            gifs.map((gif)=>{
                const imageMedium = gif.images.downsized_medium.url
                if (gif.rating === "pg-13"){
                    $(".gif-body").append('<div class="gif-img"><img src=' + imageMedium + '"></div>') 
                } else {
                    return false
                }
            })
        })
    })
    $("#filter-r").click(() => {
        //taking value of the user input
        userSearch = $("#userSearch").val()
        clearPage()
        //get/send request to giphy
        let xhr = $.get(`https://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=${apiKey}&limit=30`);
        xhr.done((res) => {
            const gifs = res.data
            console.log(gifs)
            gifs.map((gif)=>{
                const imageMedium = gif.images.downsized_medium.url
                if (gif.rating === "r"){
                    $(".gif-body").append('<div class="gif-img"><img src=' + imageMedium + '"></div>')
                } else {
                    return false
                }
            })
        })
    })
});