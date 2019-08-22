console.log(1);

const xhr = new XMLHttpRequest();
xhr.open('GET','/api/users');
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send();

xhr.addEventListener('load',() => {
        console.log(xhr.response);       
        const data=JSON.parse(xhr.response);
        const root = document.querySelector('#root'); 
        const a=data.users; 
             
        data.users.forEach(element => {
            console.log(element);
            let user = document.createElement('h2');
            user.innerHTML = 'This users name is'+' '+`${element.name}`;
            root.append(user);
        });    
})


const btnDel = document.getElementById("submitDel");
btnDel.addEventListener('click',(e) => {
    e.preventDefault(); 
    let userDel= document.getElementById("delUser").value;
    const usD = JSON.stringify (userDel);
    console.log(usD); 

    const xhr1 = new XMLHttpRequest();
    xhr1.open('POST','/api/users', true);
    xhr1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr1.send(usD);
    console.log(usD);
    
    xhr1.addEventListener('load',() => {
        for (i==0; i<a.length; i++ ){
           if(usD===a[i].name){
            delete arr[i];
           }
        };
        console.log(a);
    })
});

const btnAdd = document.getElementById("submitAdd");
btnAdd.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("click");
    let userAdd= document.getElementById("addUser").value;
    const usA = JSON.stringify(userAdd);

    const xhr2 = new XMLHttpRequest();
    xhr2.open('POST','/api/users', true);
    xhr2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr2.send(usA);
    console.log(usA);
    
    xhr2.addEventListener('load',() => {
        a.push(usA);
        console.log(a); 
        
    })
});








