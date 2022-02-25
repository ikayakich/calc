//Get Elements
const ipt1=document.getElementById('ipt1');
const ipt2=document.getElementById('ipt2');
var sel=document.getElementById('sel');
const start=document.getElementById('start');
const result=document.getElementById('result');
const reset=document.getElementById('reset');

//Make valiables
var bef=0;
var aft=0;
var text=null;
var selv=null;

//main
const startf=()=>{
    selv=sel.value;
    bef=ipt1.value;
    aft=ipt2.value;
    bef=parseInt(bef);
    aft=parseInt(aft);
    if(isNaN(bef)||isNaN(aft)){
        text='Error';
        result.innerHTML='<h2 id="result">'+text+'</h2>';
        ipt1.value=null;
        ipt2.value=null;
        return;
    }
    if(selv=='add'){
        text=bef+aft;
        result.innerHTML='<h2 id="result">'+text+'</h2>';
        ipt1.value=text;
        ipt2.value=null;
    }else if(selv=='minus'){
        text=bef-aft;
        result.innerHTML='<h2 id="result">'+text+'</h2>';
        ipt1.value=text;
        ipt2.value=null;
    }else if(selv=='milt'){
        text=bef*aft;
        result.innerHTML='<h2 id="result">'+text+'</h2>';
        ipt1.value=text;
        ipt2.value=null;
    }else if(selv=='divi'){
        text=bef/aft;
        result.innerHTML='<h2 id="result">'+text+'</h2>';
        ipt1.value=text;
        ipt2.value=null;
    }
}

const resetf=()=>{
    text=null;
    result.innerHTML='<h2 id=result></h2>'
    ipt1.value=null;
    ipt2.value=null;
}

start.addEventListener('click',startf);
reset.addEventListener('click',resetf);