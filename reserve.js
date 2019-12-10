const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('details');
detailsRef.on("child_added", function(snapshot, prevChildKey) {var newPost = snapshot.val();});


function send(){
	var name = document.getElementById("name").value;
	var number = document.getElementById("number").value;
	var email = document.getElementById("email").value;
	var reservation = document.getElementById("reservation").value;

	detailsRef.push().set({
		name: name,
		number: number,
		email: email,
		reservation: reservation
	});
}