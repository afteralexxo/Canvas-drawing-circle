let mouse = {
    x: undefined,
    y: undefined
};

window.addEventListener('mousemove', function(event){
    mouse.x = event.x
    mouse.y = event.y
 })

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init()
})

 let maxRadius = 40
 const colorArray = ['#0B3D76' , '#2D6CAE' , '#F2A950' , '#F29849' , '#E7EAE3']
   
const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius){
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.minRadius = radius
    this.color = colorArray[parseInt(Math.random() * 5)]

   this.draw = function(){
    
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
  }


  this.update = function(){
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
        this.dx = -this.dx
    }
    if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
        this.dy = -this.dy
    }
    this.x += this.dx
    this.y += this.dy

    if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 &&
        mouse.y - this.y > -50){
        if(this.radius < maxRadius)
          this.radius += 1
    }
    else if(this.radius > this.minRadius){
        this.radius -= 1
    }

    this.draw()
  }
}

let circleArray = []

    function init(){
        circleArray = []

        for(let i = 0; i< 800; i++){
            let radius = Math.random() * 3 + 1
            let x = Math.random() * (innerWidth - radius * 2) + radius
            let y = Math.random() * (innerHeight - radius * 2) + radius
            let dx = (Math.random() - 0.5)
            let dy = (Math.random() - 0.5)
            
             circleArray.push(new Circle(x, y, dx, dy, radius))
            }
            animate()
    }

function animate(){
    requestAnimationFrame(animate)

    ctx.clearRect(0, 0, innerWidth, innerHeight)

    circleArray.forEach(circle => {
     circle.update()
   }); 
}

init()


 let arr = []
 for(let i=0; i<=100; i++){
    arr.push(i)
 }

 console.log(arr.reduce((e,v) => {
    return e + v
 }));