window.onload = function() {
    let xhr = new XMLHttpRequest();
    console.log("xhr : " , xhr);
    
    xhr.open('get' , 'https://fakestoreapi.com/products');
    
        xhr.send();
    
    
    
    xhr.onreadystatechange = function (){
        console.log("readystate : " , xhr.readyState);
    
        if (xhr.readyState === 4) {
            console.log("status : " , xhr.status);
             
            if(xhr.status === 200) {
    
                let response = xhr.response;
                console.log("response : " , response);
                console.log("typeof(response) : ", typeof(response));
    
                let datas = JSON.parse(response);
               console.log("datas : " , datas);
    
                let txt = document.getElementById('text');
                console.log('text : ',txt);
    
                 let product = datas.find(item => item.id ===1);
                 console.log('product',product);
    
                 if(product){
                    txt.innerHTML=`
                    <div>${product.title}</div>
                    <div style="font-size: 20px; font-weight: 200;padding: 50px 0px 0px 0px">${product.description}</div>
                    <div style="padding:40px 0px 0px 0px;">
                    <button style="font-size:18px; font-weight:100; background-color: rgb(252,93,53); border:none; padding:10px; color:white;">Add To Cart</button>
                    <button style="font-size:18px; font-weight:300; background-color:rgb(255,216,20); border:none; padding:10px;color:white;">Buy Now</button>
                    </div>
                    `;

                    image.innerHTML=`
                    <div><img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" style="width:500px; height:500px;" alt=""></div>
                    `
                  

                 }
                 else{
    
                    txt.innerHTML= `
                    <p> not workingggg</p>
                    `
                 }
                 let second = document.getElementById('text2');
                console.log("text2 : " , second);

                let product1 = datas.find(item => item.id ===2);
                console.log('product1',product1);

                if(product1){

                    second.innerHTML=`
                    <div>${product1.title}</div>
                    <div style="font-size: 20px; font-weight: 200;padding: 50px 0px 0px 0px">${product1.description}</div>
                    <div style="padding:40px 0px 0px 0px;">
                    <button style="font-size:18px; font-weight:100; background-color: rgb(252,93,53); border:none; padding:10px;color:white; ">Add To Cart</button>
                    <button style="font-size:18px; font-weight:300; background-color:rgb(255,216,20); border:none; padding:10px;color:white;">Buy Now</button>
                    </div>
                    
                    `;
                    image2.innerHTML=`
                    <div><img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" style="width:500px; height:500px;" alt=""></div>`
                }
                else{
                    second.innerHTML=`
                    <p>not wrking</p>
                    `;
                }

                let third = document.getElementById('text3');
                console.log("text3 : " , third);

                let product2 = datas.find(item => item.id ===3);
                console.log('product2',product2);

                if(product2){

                    third.innerHTML=`
                    <div>${product2.title}</div>
                    <div style="font-size: 20px; font-weight: 200;padding: 50px 0px 0px 0px">${product2.description}</div>
                     <div style="padding:40px 0px 0px 0px;">
                     <button style="font-size:18px; font-weight:100; background-color: rgb(252,93,53); border:none; padding:10px;color:white; ">Add To Cart</button>
                    <button style="font-size:18px; font-weight:300; background-color:rgb(255,216,20); border:none; padding:10px;color:white;">Buy Now</button>
                    </div>
                    `;
                    image3.innerHTML=`
                    <div><img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" style="width:500px; height:500px;" alt=""></div>`
                }
                else{
                    third.innerHTML=`
                    <p>not wrking</p>
                    `;
                }

               
               

                let section1 = [15, 16, 17,6,7,8];

                // let sub = document.getElementsByClassName('img');
                let sub1 = document.getElementsByClassName('title');
                let sub2 = document.getElementsByClassName('description');
                let sub3 = document.getElementsByClassName('price');
                document.getElementsByClassName('img')[0].src = 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg';
                document.getElementsByClassName('img1')[0].src = 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg';
                document.getElementsByClassName('img2')[0].src = 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg';


                document.getElementsByClassName('img3')[0].src = 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg';
                document.getElementsByClassName('img4')[0].src = 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg';
                document.getElementsByClassName('img5')[0].src = 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg';

                section1.forEach((id, index) => {
                    let product = datas.find(item => item.id === id);
                    if (product) {
                        if (index < sub1.length) {
                            console.log(`Setting image for index ${index}: ${product.img}`);
                            // sub[index].src = product.img;
                            sub1[index].innerHTML = product.title;
                            sub2[index].innerHTML = product.description.slice(0,100)+"........";
                            sub3[index].innerHTML = product.price;
                        } else {
                            console.log('Index out of bounds for sub arrays');
                        }
                    } else {
                        console.log(`Product with id ${id} not found`);
                    }
                });
               

    

                

            }
        }
    }
}    