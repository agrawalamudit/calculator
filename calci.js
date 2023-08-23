let row1=document.querySelectorAll("#row1 button");
let row2=document.querySelectorAll("#row2 button");
let row3=document.querySelectorAll("#row3 button");
let row4=document.querySelectorAll("#row4 button");
let row5=document.querySelectorAll("#row5 button");

let output=document.querySelector("#output");

//rows value appending to output window

for(let i=0;i<row1.length;i++)
{
    row1[i].onclick = () =>
    {
        output.value += row1[i].value;
    }
}

for(let i=0;i<row2.length;i++)
{
    row2[i].onclick = () =>
    {
        output.value += row2[i].value;
    }
}

for(let i=0;i<row3.length;i++)
{
    row3[i].onclick = () =>
    {
        output.value += row3[i].value;
    }
}

for(let i=0;i<row4.length-1;i++)
{
    row4[i].onclick = () =>
    {
        output.value += row4[i].value;
    }
}
row4[3].onclick = () => {
    output.value = eval(output.value);
}
row5[0].onclick= ()=> 
{
    output.value= row5[0].value;
}
row5[1].onclick= () =>
{
    output.value= output.value.substr(0,output.value.length()-1);
}








