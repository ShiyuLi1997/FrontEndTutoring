$(document).ready(function(){
    // console.log("asdasdasdasd")
    $("button").on("click",function(event){
        // event.prefentDefault()
        this.innerHtml = "Finished"
        $.ajax({
            url: "localhost:3000/todo/",
            dataType: "json",
            type: "PUT",
            data: 1,
            success: ()=>{
                alert("clicked button")
            }
        })
    })
})