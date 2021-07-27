const input_txt=document.querySelector('#down')
const bt11=document.querySelector('#b11')
const bt13=document.querySelector('#b13')
const bt14=document.querySelector('#b14')
const bt21=document.querySelector('#b21')
const bt22=document.querySelector('#b22')
const bt23=document.querySelector('#b23')
const bt24=document.querySelector('#b24')
const bt31=document.querySelector('#b31')
const bt32=document.querySelector('#b32')
const bt33=document.querySelector('#b33')
const bt34=document.querySelector('#b34')
const bt41=document.querySelector('#b41')
const bt42=document.querySelector('#b42')
const bt43=document.querySelector('#b43')
const bt44=document.querySelector('#b44')
const bt51=document.querySelector('#b51')
const bt52=document.querySelector('#b52')
const bt54=document.querySelector('#b54')
const bt53=document.querySelector('#b53')
let countLookup=0;
function invalid(count)
{
    if(count>1)
    {
        alert('Two Operators Not Allowed');
        return 0;
    }else{
        return 1;
    }
}

function glob(value)
{
    console.log(value);
    var textnode = document.createTextNode(value);   
    input_txt.appendChild(textnode);
}
bt11.addEventListener("click",get11);
function get11()
{
    input_txt.textContent='';
    document.querySelector('#ans').textContent='=';
}
bt13.addEventListener("click",get13);
function get13()
{
    countLookup++;
    if(invalid(countLookup)){
    glob("%");
    }
}
bt14.addEventListener("click",get14);
function get14()
{
    countLookup++;
    if(invalid(countLookup)){
    glob("/");
    }
}
bt21.addEventListener("click",get21);
function get21()
{
    countLookup=0;
    glob("7");
     
}
bt22.addEventListener("click",get22);
function get22()
{
    countLookup=0;
    glob("8");
    
}
bt23.addEventListener("click",get23);
function get23()
{
    countLookup=0;
    glob("9");
}
bt24.addEventListener("click",get24);
function get24()
{
    countLookup++;
    if(invalid(countLookup)){
    glob("*");
    }
}
bt31.addEventListener("click",get31);
function get31()
{
    countLookup=0;
    glob("4");
}
bt32.addEventListener("click",get32);
function get32()
{
    countLookup=0;
    glob("5");
}
bt33.addEventListener("click",get33);
function get33()
{
    countLookup=0;
    glob("6");
}
bt34.addEventListener("click",get34);
function get34()
{
    countLookup++;
    if(invalid(countLookup)){
    glob("-");
    }
}
bt41.addEventListener("click",get41);
function get41()
{
    countLookup=0;
    glob("1");
}
bt42.addEventListener("click",get42);
function get42()
{
    countLookup=0;
    glob("2");
}
bt43.addEventListener("click",get43);
function get43()
{
    countLookup=0;
     glob("3");
}
bt44.addEventListener("click",get44);
function get44()
{
    countLookup++;
    if(invalid(countLookup)){
    glob("+");
    }
}

bt51.addEventListener("click",get51);
function get51()
{
    countLookup=0;
    glob("0");
}
bt52.addEventListener("click",get52);
function get52()
{
    countLookup++;
    if(invalid(countLookup)){
    glob(".");
    }
}

bt54.addEventListener("click",get54);
function get54()
{
    console.log(input_txt.textContent);
    input_txt.textContent=input_txt.textContent.substring(0,input_txt.textContent.length-1) 
    
}

const ans=document.querySelector("#ans");
bt53.addEventListener("click",get_ans);
function get_ans()
{
    if(input_txt.textContent.length<=1){
        alert('Please Enter Valid Input')
        ans.textContent='=';
    }
  
  console.log(eval(input_txt.textContent));
  let total=eval(input_txt.textContent);
  ans.textContent='='+total;
    
}
 