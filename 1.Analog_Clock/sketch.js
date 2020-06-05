// Clock in Javascript
// 28/5/2020
// Made by - Samyak Bambole
// Inspiration - The Coding Train

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    alert('Click Ok to look at the current time!'); 
    alert('This is a really good clock and it refreshes every second!'); 
    alert('Made by - Samyak Bambole')
}

function draw() {
    // put drawing code here
    background(0, 0, 255, 70); 
    
    let h = nf(hour(), 2, 0); 
    let m = nf(minute(), 2, 0); 
    let s = nf(second(), 2, 0);
    
    let time = `${h}:${m}:${s}`;
    
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(128);
    text(time, width/2, height/2);

    let information = `Current Time:`; 

    fill(255);
    textSize(32);
    text(information, width/2, 240);     
}