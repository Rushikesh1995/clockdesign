window.onscroll=function()
{
    scrollFunction()
};
function scrollFunction(){

    if(document.body.scrollTop>80 || document.documentElement.scrollTop>80)
    {
        document.getElementById("navbar").style.padding="0px 10px";
       
        document.getElementById("logo").style.fontSize="25px";
        document.getElementById("logo").style.background="#1e2222";
        document.getElementById("navbar").style.background="#1e2222";
        document.getElementById("logo1").style.background="#1e2222";
        document.getElementById("search1").style.background="#1e2222";
    }
    else{
        document.getElementById("navbar").style.padding="15px 10px";
        document.getElementById("logo").style.fontSize="35px";
        
        document.getElementById("logo1").style.background="black";
        document.getElementById("search1").style.background="black";
        document.getElementById("logo").style.background="black";
        document.getElementById("navbar").style.background="black";
    }
}
