const container = document.querySelector('#container');

const userinput = prompt("Please enter a number (1-100) to determine the size of the EtchaSketch");
document.getElementById("reset").onclick = function () {
    location.reload();} 

if (userinput > 0 && userinput < 101 ) {

    const rownumber = userinput; 
    const columnnumber = rownumber;
    document.documentElement.style.setProperty("--rowNum", rownumber);
    document.documentElement.style.setProperty("--colNum", columnnumber);

   

        let color = "black"

    let x = 0;
    while (rownumber * columnnumber > x) {
        var div = document.createElement('div');
        div.className = "gridcells";
        container.appendChild(div);
        div.onmouseover = function (blue) {
            this.style.backgroundColor = color;
             }   
        x++;
    }

}

else {
    alert("You have entered a value outside of 1-100. Please reset and try again.");
}