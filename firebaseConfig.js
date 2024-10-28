// firebaseConfig.js
const firebaseConfig = {
    apiKey: "AIzaSyCfvIeIKuhzWVmOKfdtQy2mZYbTRa3X68Y",
    authDomain: "viyachting-448ce.firebaseapp.com",
    projectId: "viyachting-448ce",
  };
  firebase.initializeApp(firebaseConfig);


  // Register
document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => alert("Registration successful!"))
      .catch(error => console.error("Registration failed:", error));
  });
  
  // Login
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => alert("Login successful!"))
      .catch(error => console.error("Login failed:", error));
  });
  
  // Show boat form for logged-in users
auth.onAuthStateChanged(user => {
    if (user) {
      document.getElementById('boatForm').style.display = 'block';
    } else {
      document.getElementById('boatForm').style.display = 'none';
    }
  });
  
  // Add boat listing to Firestore
  document.getElementById('boatForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('boatTitle').value;
    const price = document.getElementById('boatPrice').value;
    const description = document.getElementById('boatDescription').value;
    db.collection("boats").add({
      title: title,
      price: price,
      description: description,
      userId: auth.currentUser.uid
    }).then(() => {
      alert("Boat posted successfully!");
    }).catch(error => console.error("Error posting boat:", error));
  });
  
  db.collection("boats").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const boat = doc.data();
      const boatElement = document.createElement('div');
      boatElement.innerHTML = `<h3>${boat.title}</h3><p>Price: ${boat.price}</p><p>${boat.description}</p>`;
      document.body.appendChild(boatElement);
    });
  });
  