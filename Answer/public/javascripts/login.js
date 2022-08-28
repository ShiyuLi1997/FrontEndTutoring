// $(document).ready(function () {
//     const host = "http://localhost:3000";

//     $('#btn').on('click', function () {
//         alert("clicked")
//         $.ajax({
//             url: `${host}/login`,
//             type: "GET",
//             data: JSON.stringify({
//                 email: $('#email').val(),
//                 password: $('#password').val()
//             }),
//             contentType: "application/json; charset=utf-8",
//             success: function (res) {  
//                 console.log("success");
//             },
//             error: function (e) {
//                 console.log(e);
//             }
//         });   
//     });
// })