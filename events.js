const events= require ("events"); // Correct spelling
var emitter = new events();

function clicked2(a, b) {
  console.log("Clicked 2 ",a,b);
}

emitter.on("click", clicked2);

emitter.on("click", () => {
  console.log("Clicked");
});

emitter.emit("click",3,5);
