const apiKey = 'A3r4HTxtapOQo3PBi871U13Twv4g7yie';
let userSearch = ""

$(document).ready(() => {
    $("#submit").click(()=>{
        //taking value of the user input
        userSearch = $("#userSearch").val()
        //empty out gif-body 
        $(".gif-body").empty()
        //get request for giphy
        var xhr = $.get(`https://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=${apiKey}&limit=30`);
        xhr.done((res) => {
            const gifs = res.data
            //map through data and pull out image url 
            console.log(userSearch)
            gifs.map((gif) => {
                const imageMedium = gif.images.downsized_medium.url
                $(".gif-body").append('<img src=' + imageMedium + '">"')
            })
        })
    })
});