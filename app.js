const apiKey = 'A3r4HTxtapOQo3PBi871U13Twv4g7yie';

$(document).ready(() => {

    //function to clear div before adding new gifs
    const clearPage = () => $(".gif-body").empty()

    //create functions to hide/show filter buttons
    const showFilter = () => {
        $(".filter-btn-container").show()
    }
    const hideFilter = () => {
       $(".filter-btn-container").hide()
    }
    //function fetchs gifs from api
    const fetchGifs = (userSearch) => {
        //taking value of the user input
       return $.get(`https://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=${apiKey}&limit=30`)
    }
    //hides filters buttons as soon as page loads
    hideFilter()

    //submit button handler
    $("#submit").click(() => {
        event.preventDefault()
        const userSearch = $("#userSearch").val()
        console.log(userSearch)
        //when clicked, all filters show
        showFilter()
        //empty out gif-body 
        clearPage()
        //get/send request to giphy
        fetchGifs(userSearch).done((res) => {
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
        const userSearch = $("#userSearch").val()
        clearPage()
        //get/send request to giphy
        fetchGifs(userSearch).done((res) => {
            const gifs = res.data
            console.log(gifs)
            gifs.map((gif) => {
                const imageMedium = gif.images.downsized_medium.url
                if (gif.rating === "pg") {
                   return $(".gif-body").append('<div class="gif-img"><img src=' + imageMedium + '"></div>')
                } 
            })
        })
    })
    $("#filter-g").click(() => {
        //taking value of the user input
        const userSearch = $("#userSearch").val()
        clearPage()
        //get/send request to giphy
        fetchGifs(userSearch).done((res) => {
            const gifs = res.data
            console.log(gifs)
            gifs.map((gif) => {
                const imageMedium = gif.images.downsized_medium.url
                if (gif.rating === "g") {
                    return $(".gif-body").append('<div class="gif-img"><img src=' + imageMedium + '"></div>')
                }
            })
        })
    })
    $("#filter-pg13").click(() => {
        //taking value of the user input
        const userSearch = $("#userSearch").val()
        clearPage()
        //get/send request to giphy
        fetchGifs(userSearch).done((res) => {
            const gifs = res.data
            console.log(gifs)
            gifs.map((gif) => {
                const imageMedium = gif.images.downsized_medium.url
                if (gif.rating === "pg-13") {
                    return $(".gif-body").append('<div class="gif-img"><img src=' + imageMedium + '"></div>')
                }
            })
        })
    })
    $("#filter-r").click(() => {
        //taking value of the user input
        const userSearch = $("#userSearch").val()
        clearPage()
        //get/send request to giphy
        fetchGifs(userSearch).done((res) => {
            const gifs = res.data
            console.log(gifs)
            gifs.map((gif) => {
                const imageMedium = gif.images.downsized_medium.url
                if (gif.rating === "r") {
                    return $(".gif-body").append('<div class="gif-img"><img src=' + imageMedium + '"></div>')
                }
            })
        })
    })
});