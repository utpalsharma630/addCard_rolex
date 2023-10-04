sum = 0;
document.getElementById('submit').addEventListener('click', function(){
    
    const name = document.getElementById('name');
    const newName = name.value;
    // console.log(newName);

    const price = document.getElementById('price');
    const newPrice = price.value;
    // console.log(newPrice);
    if(!newName){
        return swal("Oops...", "Something went wrong!", "error");
    }
    if(!newPrice){
        return swal("Oops...", "Something went wrong!", "error");
    }

    const list = document.getElementById('list');
    const li = document.createElement('li')
    const li1 = document.createElement('li')
    const li2 = document.createElement('li')
    li.innerText = sum + 1;
    li1.innerText = newName;
    li2.innerText = newPrice;

    
    // li.innerText = list.innerText;
    // li1.innerText = list.innerText;
    // console.log(li);
    // console.log(li1);
    
    list.appendChild(li);
    list.appendChild(li1);
    list.appendChild(li2);

    name.value=''
    price.value=''
    swal("Good job!", "You clicked the button!", "success")

    sum++
    
})