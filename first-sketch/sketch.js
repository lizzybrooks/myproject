//create an empty array called people
let people = [];


function setup() {
  createCanvas(400, 400);
}


function draw(){
	background(0);
	fill(200,200,30);
	stroke(200,200,30);

	//draw all the people in that array
	for (let i = 0; i < people.length; i++) {
	    people[i].drawPerson();
	  }
}

//when the mouse is pressed, make a new person to the array at mouseX and mouseY and push it into the array. Then print the array, people, to the console.
function mousePressed() {
  	let p = new Person(mouseX, mouseY);
  	people.push(p);
	print(people);
}

//when any key is pressed, change the color to blue. Since draw is continuously drawing the contents of the array, it will update to make the people blue.
function keyPressed(){
  for (let i = 0; i < people.length; i++) {
      people[i].bluePerson();
    }

}

//person class from which to create new people with similar properties.
class Person {

	constructor(x,y){
		this.x = x;
    		this.y = y;

    		//colors
    		this.r = 200;
    		this.g = 200;
    		this.b = 30;
	}

	drawPerson(){
    		stroke(this.r, this.g, this.b);
    		fill(this.r, this.g, this.b);
		ellipse(this.x,this.y,10,10);
		line(this.x,this.y,this.x,this.y+50);
	}

	movePerson(){
		this.x = mouseX;
		this.y = mouseY;
	}

 	bluePerson(){
    		this.r = 30;
    		this.g = 30;
   		this.b = 250;
	}

}
