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
let delet=0;
let sum=0;
let countLookup=0;
let a=''; 
let b='';
let operator='';

function getEval(a,value,b)
{   
    if(value=='+')
    {
        return a+b;
    }
    if(value=='-')
    {
        return a-b;
    }
    if(value=='/')
    {
        return a/b;
    }
    if(value=='%')
    {
        return a%b;
    }
    if(value=='*')
    {
        return a*b;
    }

    delet=0;
}
bt11.addEventListener("click",get11);
function get11()
{
    a='';
    ans.textContent='';
    input_txt.textContent='';
    operator='';
    countLookup=0;
    b='';
    delet=0;
}
bt13.addEventListener("click",get13);
function get13()
{
    if(countLookup&&b!='')
    {
        a=getEval(Number(a),operator,Number(b));
        b='';
    }
    operator='%';
    if(countLookup)
    {
        input_txt.textContent=a+operator;
        ans.textContent=a;
    }else{
    input_txt.textContent=a+operator+b;
    ans.textContent=a;
   countLookup=1;
    }
    
}
bt14.addEventListener("click",get14);
function get14()
{
    if(countLookup&&b!='')
    {
       a=getEval(Number(a),operator,Number(b));
       b='';
    }
    operator='/';
    if(countLookup)
    {
        input_txt.textContent=a+operator;
        ans.textContent=a;
    }else{
    input_txt.textContent=a+operator+b;
    ans.textContent=a;
   countLookup=1;
    }
    
    
}
bt21.addEventListener("click",get21);
function get21()
{
    if(!countLookup){
        a=a+'7';
    }else{
        b=b+'7';
    }
    input_txt.textContent=a+operator+b;
    delet=0;
     
}
bt22.addEventListener("click",get22);
function get22()
{
    if(!countLookup){
        a=a+'8';
    }else{
        b=b+'8';
    }
    input_txt.textContent=a+operator+b;
    delet=0;
}
bt23.addEventListener("click",get23);
function get23()
{
    if(!countLookup){
        a=a+'9';
    }else{
        b=b+'9';
    }
    input_txt.textContent=a+operator+b;
     delet=0;
}
bt24.addEventListener("click",get24);
function get24()
{
    if(countLookup&&b!='')
    {
        a=getEval(Number(a),operator,Number(b));
        b='';
    }
    operator='*';
    if(countLookup)
    {
        input_txt.textContent=a+operator;
        ans.textContent=a;
    }else{
    input_txt.textContent=a+operator+b;
    ans.textContent=a;
   countLookup=1;
    }
   
}
bt31.addEventListener("click",get31);
function get31()
{
    if(!countLookup){
        a=a+'4';
    }else{
        b=b+'4';
    }
    input_txt.textContent=a+operator+b;
     delet=0;
}
bt32.addEventListener("click",get32);
function get32()
{
    if(!countLookup){
        a=a+'5';console.log(a);
    }else{
        b=b+'5';console.log(b);
    }
    input_txt.textContent=a+operator+b;
     delet=0;
}
bt33.addEventListener("click",get33);
function get33()
{
    if(!countLookup){
        a=a+'6';console.log('a :'+a);
    }else{
        b=b+'6';console.log('b :'+b);
    }
     delet=0;
    input_txt.textContent=a+operator+b;
}
bt34.addEventListener("click",get34);
function get34()
{
   
    if(countLookup&&b!='')
    {
        a=getEval(Number(a),operator,Number(b));
        b='';
    }
    operator='-';
    if(countLookup)
    {
        input_txt.textContent=a+operator;
        ans.textContent=a;
    }else{
    input_txt.textContent=a+operator+b;
    ans.textContent=a;
   countLookup=1;
    }
}
bt41.addEventListener("click",get41);
function get41()
{
    if(!countLookup){
        a=a+'1';
    }else{
        b=b+'1';
    }
    input_txt.textContent=a+operator+b;
     delet=0;
}
bt42.addEventListener("click",get42);
function get42()
{
    if(!countLookup){
        a=a+'2';
    }else{
        b=b+'2';
    }
    input_txt.textContent=a+operator+b;
    delet=0; 
}
bt43.addEventListener("click",get43);
function get43()
{
    if(!countLookup){
        a=a+'3';
    }else{
        b=b+'3';
    }
    input_txt.textContent=a+operator+b;
    delet=0; 
}
bt44.addEventListener("click",get44);
function get44()
{
    
    if(countLookup&&b!='')
    {
        a=getEval(Number(a),operator,Number(b));
        b='';
    }
    operator='+';
    if(countLookup)
    {
        input_txt.textContent=a+operator;
        ans.textContent=a;
    }else{
    input_txt.textContent=a+operator+b;
    ans.textContent=a;
   countLookup=1;
    }
    
    
}

bt51.addEventListener("click",get51);
function get51()
{
    if(!countLookup){
        a=a+'0';
    }else{
        b=b+'0';
    }
    input_txt.textContent=a+operator+b;
    delet=0;
}
bt52.addEventListener("click",get52);
function get52()
{
    if(!countLookup){
        a=a+'.';
    }else{
        b=b+'.';
    }
    input_txt.textContent=a+operator+b;
    delet=0; 
}

 
bt54.addEventListener("click",get54);
function get54()
{   
    delet++;
    if(delet===1)
    {
        if(b!=''){
        b='';
       
        }
        else if(operator!=''){
            operator='';
        }
        else if(a!=''){
            a='';
            countLookup=0;
        }

        input_txt.textContent=a+operator+b;
    }
    if(delet==2)
    {
        if(operator!=''){
            operator='';
        }
        else if(a!=''){
            a='';
            countLookup=0;
        }
        input_txt.textContent=a+operator+b;
    }
    
    if(delet==3)
    {
        if(a){
            a='';
            countLookup=0;
        }
        input_txt.textContent=a+operator+b;
    }

}

const ans=document.querySelector("#ans");
bt53.addEventListener("click",get_ans);
function get_ans()
{
    if(countLookup&&b!='')
    {
        a=getEval(Number(a),operator,Number(b));
        ans.textContent=a;
        a='';
        b='';
        input_txt.textContent=a;
        operator='';
        countLookup=0;
    }
     
    delet=0;
}
 