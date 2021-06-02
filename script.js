var images = ["360_F_282913257_xvNUS9PkPeFtq4VNiiOgazoeXp0UdmYR.jpg","WhatsApp Image 2021-06-02 at 5.33.11 PM.jpeg","WhatsApp Image 2021-06-02 at 5.32.45 PM.jpeg","WhatsApp Image 2021-06-02 at 9.48.13 PM.jpeg","WhatsApp Image 2021-06-02 at 9.36.49 PM.jpeg","WhatsApp Image 2021-06-02 at 9.42.45 PM.jpeg","WhatsApp Image 2021-06-02 at 10.59.56 PM.jpeg"];

var names=["Family Book","Grand Mother","Father","Mother","Brother","Sister","Me"];
var i=0;

function update(){
    i++;
    var number_of_family_members=6
    if(i>number_of_family_members)
    {i=0;
    
    }
    var updatedImage=images[i];
    var updatedName=names[i];
    document.getElementById("My_Family").src=updatedImage;
    document.getElementById("family_name").innerHTML=updatedName;
}
