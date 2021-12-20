var canvas = new fabric.Canvas('myCanvas');
var imageinsert = "";
var newaudio = new Audio('Happy Birthday Song  Happy Birthday To You Song for Kids  The Kiboomers.mp3')

function new_image()
{
    fabric.Image.fromURL('BirthdayIcon.jpg', function(Img){
        imageinsert = Img;

        imageinsert.scaleToWidth(1200);
        imageinsert.scaleToHeight(510);
        imageinsert.set({
            top:130,
            left:200
        })
        canvas.add(imageinsert);
    })
}

new_image()

function Clicked()
{
    newaudio.play()
}