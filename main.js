var images = 
["https://i.pinimg.com/originals/fb/02/3a/fb023a96d61a0c5e9a3a38beb1dede1f.jpg" , 
"https://img.favpng.com/22/6/15/tom-mcgrath-the-boss-baby-francis-francis-dreamworks-animation-father-png-favpng-tBagbAya121fwyW226NF2ya6J.jpg", 
"https://image.shutterstock.com/image-vector/working-mom-260nw-158801603.jpg",
"https://i.pinimg.com/736x/77/d4/15/77d41520a3f07995b184797a3734bf44.jpg",
"https://us.123rf.com/450wm/dualororua/dualororua1710/dualororua171000193/88695052-vector-illustration-of-cute-little-girl-cartoon.jpg?ver=6",
"https://cdn.imgbin.com/0/13/15/imgbin-grandparent-grandfather-grandpa-grandpa-art-background-man-wearing-vest-and-dress-shirt-H2brpK9cxN4NRenzWkt0JRnAu.jpg"];

var names = ["Family book", "Rishi Mishra", "Pooja Mishra", "Siddhant Mishra", "Soumya Mishra", "Hari Shankar Mishra"];


var i = 0;
function update()
{
   
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("Family_image").src = updatedImage;
    document.getElementById("Family_member_name").innerHTML = updatedName;


}