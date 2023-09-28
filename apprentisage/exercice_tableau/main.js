let names = [];
i = 0
names.push("Vincent", "Paul", "Arthur")


for (var i = 0; i < names.length ; i +=1 ) {
   names[i] = (names[i] + " va à la pêche")
    console.log(names[i]);
}

names.forEach((name) => {
    name += " et au tennis"
    console.log(name)
})