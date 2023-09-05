const res1= fetch("https://jsonplaceholder.typicode.com/users");
res1.then((data)=>data.json()).then((data1)=>{

    for(var i=0; i<data1.length;i++)
 {
    console.log(data1[i])
    const  div= document.createElement("div");
    div.innerHTML=`
        <div class="row row-cols-1 row-cols-md-3">
        
    <div class="col">
      <div class="card">
    
        <div class="card-body">
          <h5 class="card-title"><b>Name:&nbsp;${data1[i].name}</b></h5>
          <p class="card-text">Email:&nbsp;${data1[i].email}</p>
          <p class="card-text">Street:&nbsp;${data1[i].address.street}</p>
          <p class="card-text">City:&nbsp;${data1[i].address.city}</p>
         
        </div>
      </div>
    </div>
    </div>`;
    document.body.append(div);
} 
  
});