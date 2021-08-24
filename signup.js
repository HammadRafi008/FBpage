function signup() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    console.log(email);
    console.log(password);



    // var db = firebase.firestore();

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log("Login Successfull");

            firebase.firestore().collection("users").doc(user.uid).set({

                email: email,
                uid: user.uid,
                password: password,


            })
                .then(function () {
                    console.log("Data Succesfull");
                }).catch(error => {
                    console.log(error);
                })
            swal({
                title: "Good job!",
                text: "SORRY PRANK HO GYA",
                icon: "success",
                button: "next",
            }).then((value) => {
                location.href = "https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.18169-9/cp0/e15/q65/p320x320/12031994_632360686905764_1186764810782751462_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=85a577&_nc_ohc=fqKUhh_zTkAAX_8wTbx&_nc_ht=scontent.fkhi16-1.fna&oh=e322c8a3f5ae5656cf6f336a71a3862f&oe=614B09D6"
            })


            // location.href = ("./login.html")
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error", errorMessage)
            swal("OOpS!", errorMessage, "error");

            // ..
        });



}


// Login

let Login = (e) => {

    console.log(e);
    e.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // console.log(email);
    // console.log(password);
    var form = document.getElementById('needs-validation')

    if (!form) {
        return
    }
    form.classList.add('was-validated')


    if (!email || !password) {
        swal({
            title: "Empty Fields",
            text: "please fill input fields",
            icon: "error",
            button: "Try Again",
        });
    } else {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log("Login Successfull")
                location.href = ("../us_menu.html")

                firebase.firestore().collection("users").doc(user.uid).set({

                    email: email,
                    uid: user.uid,
                    password: password,


                })
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log("error", errorMessage)

                swal({
                    title: "Error",
                    text: errorMessage,
                    icon: "error",
                    button: "Try Again",
                });
            });
    }






}