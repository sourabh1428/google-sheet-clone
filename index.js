const boldMake=document.getElementById("makeBold");
const getRC=document.getElementById("getRC");
const hero=document.getElementById("hero");

const underLineMake=document.getElementById("makeUnderLine");
const italicMake=document.getElementById("makeItalic");
const leftMake=document.getElementById("makeLeft");
const rightMake=document.getElementById("makeRight");
const middleMake=document.getElementById("makeMiddle");

const makeBg=document.getElementById("makeBg");
const makeFont=document.getElementById("makeFont");


//creating the header a, b, c, d, e

for (let j = 0; j <= 100; j++) {
    const header = document.createElement("div");
    header.setAttribute("id", "header");

    if(j==0){
        for (let i = 64; i <= 90; i++) {
        if (i == 64) {
            const newr = document.createElement("b");
            newr.setAttribute("contentEditable", "true");
            newr.innerText = "S.R.";
            header.append(newr);
            continue;
        }
        const newr = document.createElement("b");
        newr.setAttribute("contentEditable", "true");
        newr.setAttribute("id", `${j},${i}`);
        newr.innerText = `${String.fromCharCode(i)}`;
        header.appendChild(newr);
    }
}
else{
    for (let i = 64; i <= 90; i++) {
        if (i == 64) {
            const newr = document.createElement("b");
            
            newr.innerText = `${j}`;
            header.append(newr);
            continue;
        }
        const newr = document.createElement("b");
        newr.setAttribute("contentEditable", "true");
        let rown=i-65+1;
        newr.addEventListener("focus",
        ()=>{
            // console.log(j,rown);
            getRC.innerText=`${j}: ${rown}`
        }
            );
        // newr.innerText = `${String.fromCharCode(i)}`;
        newr.setAttribute("id", `${j},${rown}`);
        header.appendChild(newr);
    }



}
    hero.append(header);
}


function cellClicker(event){
    console.log(event.id.value);
}

underLineMake.addEventListener("click",()=>{
    let str=getRC.innerText;
    let ans="";
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)===':')ans+=',';
        else if(str.charAt(i)===' ')continue;
        else{ans=ans+str.charAt(i);}
    }
    
    const uid=document.getElementById(ans);

    uid.style="text-decoration: underline";

});

boldMake.addEventListener("click",()=>{
    let str=getRC.innerText;
    let ans="";
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)===':')ans+=',';
        else if(str.charAt(i)===' ')continue;
        else{ans=ans+str.charAt(i);}
    }
    
    const uid=document.getElementById(ans);
    
    uid.style="font-weight: normal";

})
italicMake.addEventListener("click",()=>{
    let str=getRC.innerText;
    let ans="";
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)===':')ans+=',';
        else if(str.charAt(i)===' ')continue;
        else{ans=ans+str.charAt(i);}
    }
    
    const uid=document.getElementById(ans);

    uid.style="font-style: italic";
 
})

leftMake.addEventListener("click",()=>{
    let str=getRC.innerText;
    let ans="";
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)===':')ans+=',';
        else if(str.charAt(i)===' ')continue;
        else{ans=ans+str.charAt(i);}
    }
    
    const uid=document.getElementById(ans);
    uid.style="text-align:left;"
   
 
})
makeBg.addEventListener("click",()=>{
    let str=getRC.innerText;
    let ans="";
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)===':')ans+=',';
        else if(str.charAt(i)===' ')continue;
        else{ans=ans+str.charAt(i);}
    }
    
    const uid=document.getElementById(ans);
    uid.style="background-color:red;"

 
})
makeFont.addEventListener("click",()=>{
    let str=getRC.innerText;
    let ans="";
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)===':')ans+=',';
        else if(str.charAt(i)===' ')continue;
        else{ans=ans+str.charAt(i);}
    }
    
    const uid=document.getElementById(ans);
    uid.style="color:yellow;"

 
})