let friends = ["chevy", "angelica", "ethan", "gail", "alan", "filinta", "josh", "dersim"];

for(var j = 0; j < friends.length; j++) {
    console.log(friends[j]);

    if(friends[j] == "filinta") {
        console.log("Found him!");
        break;
    }
}

var count = 0;
while(count < friends.length) {
    console.log(friends[count]);
    count++;
}
