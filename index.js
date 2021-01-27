let time = 0;
const wave = [];
let slider;
function setup() {
    createCanvas(600, 400)
    slider = createSlider(1, 10, 1)
}

function draw() {
    background(50)

    translate(200, 200)
    

    let x = 0;
    let y = 0;
    for (let i = 0; i < slider.value() ; i++) {
        const n = i * 2 + 1
        let radius = 10 * (4 / (n/PI));
        let prevX = x;
        let prevY = y;
        x += radius * cos(n * time);
        y += radius * sin(n * time);
        
        stroke(255, 100);
        noFill();
        ellipse(prevX,prevY,radius * 2);

//        fill(255)
        stroke(255);
        line(prevX,prevY, x, y)
//        ellipse(x, y, 8);
    }
    
    translate(200, 0)
    line(x-200, y, 0, wave[0])
    wave.unshift(y)
    beginShape();
    noFill()
    for (let i=0; i< wave.length; i++) {
        vertex(i, wave[i])
    }
    endShape();
    time += 0.05;
    
    if (wave.length == 250) {
        wave.pop()
    }
}