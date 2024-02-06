function displayData(data){
    console.log(data);
    document.querySelector("#inp1").value+=data;
}
function Calculation(){
    try{
    console.log('cal');
    let num=document.querySelector('#inp1').value;
    let a=eval(num)
    console.log(a)
    document.querySelector("#inp1").value=a;}
    catch(e){
        document.querySelector("#inp1").value='invalid'; 
    }
}
function Clear1(){
    document.querySelector("#inp1").value="";
    console.log(document.querySelector("#inp1").value="");
}
function Delete1(){
    let remove=document.querySelector("#inp1");
    remove.value=remove.value.slice(0,-1);
    console.log('del');
}

document.addEventListener('keydown',function (event){
    const userkey=event.key;
    const inputKey= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Delete'];
    if(inputKey.includes(userkey)){
        event.preventDefault();
        if(userkey==="Enter"){
            Calculation();
        }else if(userkey==="Backspace"){
            Delete1();
        }else if(userkey==="Delete"){
             Clear1();
        }else {
            displayData(userkey)
        } 
    }
});