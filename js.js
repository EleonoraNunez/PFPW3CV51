// Initialize Cloud Firestore through Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCVNlvi9zyb8HD30nXyAimeU4VDn-6k3Pk",
    authDomain: "legendariogaming-58719.firebaseapp.com",
    projectId: "legendariogaming-58719",
    storageBucket: "legendariogaming-58719.appspot.com",
    messagingSenderId: "893806069957",
    appId: "1:893806069957:web:c3aade3d6714b3b53988ac"
  };

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log("Cargado correctamente")


var db = firebase.firestore()

console.log(db)


var tabla = document.getElementById("tabla")        
db.collection("tienda").get().then((querySnapshot)=>{
tabla.innerHTML="";
querySnapshot.forEach((doc)=>{
tabla.innerHTML+=`
<tr>
<th scope="row">${doc.id}</th>
<th scope="row">${doc.data().Consola}</th>
<th scope="row">${doc.data().Descripcion}</th>
<th scope="row">${doc.data().Precio}</th>
<th scope="row">${doc.data().Videojuego}</th>
</tr>
`
})
})


