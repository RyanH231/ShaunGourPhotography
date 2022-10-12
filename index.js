
const image = document.getElementById("photo");

OpenNav = ()=>
{
    document.getElementById("navbar").classList.toggle("inactive");
}

function ChangeToLandscape ()
{
    image.src = "PhotoThree.jpg";
}

ChangeToPortrait = ()=>
{
    image.src = "PhotoOne.jpg";
}

ChangeToWedding = ()=>
{
    image.src = "PhotoTwo.jpg";   
}

