function userdatas(){
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
            
                    // let hi = document.querySelector('.carousel-inner');
                    // console.log("carousel-inner :", hi);
                    
                    // let box = '';
                    // for (let i = 0; i < 3; i++) {
                    //     box += `
                        
                    //          <div class="carousel-item  active">
                    //             <div><img src="${datas[0].image}" style="width:500px; height:500px;"></div> 
                    //             <!--<div><h2>${datas[i].title}</h2></div>--!>
                    //         </div>
                    //         <div class="carousel-item ">
                    //            <div><img src="${datas[i+1].image}" style="width:500px; height:500px;"></div> 
                    //         </div>
                    //         <div class="carousel-item ">
                    //              <div><img src="${datas[i+2].image}" style="width:500px; height:500px;"></div> 
                    //         </div>
                    
                    //     `;
                    let arr =["men's clothing","jewelery","women's clothing","electronics"];
                    console.log(arr)
                    let hi = document.getElementById('carousel-inner1')
                    let box = '';
                    let container = document.getElementById('jewelery');
                    let box2 ='';
                    let section = document.getElementById('womens')
                    let box3 = '';
                    let hello = document.getElementById('electronics')
                    let box4 = '';
                    
                    for (let i = 0; i < datas.length; i++) {

                        for(j = 0 ;j<arr.length-3;j++){
                            if(datas[i].category === arr[0]){
                                box = box+ `
                                <div class="carousel-item ${i === 0 ? 'active' : ''} ">
                                    <div class = "d-flex justify-content-center align-items-center">
                                        
                                            <div>
                                                <div class = " fs-2 fw-bold">${datas[i].title}</div>
                                                <div style="width:700px; " class="pt-4 fs-5"><p>${datas[i].description}</p></div>
                                                
                                                <button  onClick ="handleClick(${datas[i].id})" class="p-2 px-4 bg-warning border-0">Add to cart</button>
                                            </div>
                                            
                                            <div>
                                                <img src="${datas[i].image}" alt="Product Image" class = "image1" style="width:500px; height:500px; padding:20px;">
                                            </div>
                                       
                                    </div>
                                </div>
                                `;
                            }
                            
                            if(datas[i].category === arr[1]){
                                box2 = box2+ `
                                    <div class="shadow p-3 mb-5 bg-body rounded text-center keychain ">
                                        <div>
                                            <div class = "hardy fw-bold ">${datas[i].title.slice(0,20)+"..."}</div>
                                            <div style=" " class="pt-4  dragon"><p>${datas[i].description.slice(0,30)+"..."}</p></div>
                                            
                           
                                        </div>
                                        
                                        <div class="text-center">
                                            <img src="${datas[i].image}" alt="Product Image" class = "image1" style="width:200px; height:200px; padding:20px;">
                                        </div>
                                         <div class="pt-4 text-center"><button  onClick ="handleClick(${datas[i].id})"  class="p-2 px-4 bg-warning border-0">Add to cart</button></div>

                                    </div>
                                    
                                   
                                
                                `;
                            }
                            if(datas[i].category === arr[2]){
                                box3 = box3+ `
                                    <div class="shadow p-3 mb-5 bg-body rounded text-center key">
                                        <div>
                                            <div class = "hardy fw-bold ">${datas[i].title.slice(0,15)+"..."}</div>
                                            <div style=" " class="pt-4  dragon"><p>${datas[i].description.slice(0,15)+"..."}</p></div>
                                            
                           
                                        </div>
                                        
                                        <div class="text-center">
                                            <img src="${datas[i].image}" alt="Product Image" class = "image1" style="width:185px; height:185px; padding:20px;">
                                        </div>
                                         <div class="pt-4 text-center"><button onClick ="handleClick(${datas[i].id})"  class="p-2 px-4 bg-warning border-0">Add to cart</button></div>

                                    </div>
                                    
                                   
                                
                                `;
                            }

                            if(datas[i].category === arr[3]){
                                box4 = box4+ `
                                    <div class="shadow p-3 mb-5 bg-body rounded text-center key">
                                        <div>
                                            <div class = "hardy fw-bold ">${datas[i].title.slice(0,20)+"..."}</div>
                                            <div style=" " class="pt-4  dragon"><p>${datas[i].description.slice(0,15)+"..."}</p></div>
                                            
                           
                                        </div>
                                        
                                        <div class="text-center">
                                            <img src="${datas[i].image}" alt="Product Image" class = "image1" style="width:185px; height:185px; padding:20px;">
                                        </div>
                                         <div class="pt-4 text-center"><button onClick ="handleClick(${datas[i].id})" class="p-2 px-4 bg-warning border-0">Add to cart</button></div>

                                    </div>
                                    
                                   
                                
                                `;
                            }
                        // box += `
                       
                        //     <div class="carousel-item ${i === 0 ? 'active' : ''} ">
                        //         <div class="hi">
                        //             <div style="padding-left:40px; text-align:left;">
                        //                 <div ><h2 class="fs-2 fw-bold">${datas[i].title}</h2></div>
                        //                 <div style="width:700px; " class="pt-4 fs-5"><p>${datas[i].description}</p></div>
                        //                 <div class="pt-4"><button class="p-2 px-4 bg-warning border-0">Add To Cart</button></div>
                        //             </div>
                        //             <div><img src="${datas[i].image}" style="width:500px; height:500px; padding:20px;"></div>

                        //         </div>
                        //     </div>
                        
                        // `;
                    }
                    
                    hi.innerHTML = box;
                    
                    container.innerHTML=box2;

                    section.innerHTML=box3;

                    hello.innerHTML=box4
                    
                    
                      
                }
                  
                
            }
            
        }
    }
}
function handleClick(id){
    console.log("button clicked");
    console.log("button clicked id: ", id);
    window.location.href = `view.html?id=${id}`
    return;
}
 function product(){
    console.log("loading....");

    let location = window.location;
    console.log("location : ",location);

    let querystring = location.search;
    console.log("querystring : ",querystring);

    let urlparams = new URLSearchParams(querystring);
    console.log("url" , urlparams);

    let id = urlparams.get("id");
    console.log("id : ",id);


    let xhr = new XMLHttpRequest();
    console.log("xhr:",xhr);
    xhr.open("get", `https://fakestoreapi.com/products/${id} `)

    xhr.send();

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
            console.log("staus : ",xhr.status);
        
        if (xhr.status === 200){
            console.log("success");

        let userData = xhr.response;
        console.log("userData: ",userData);

        let parsed_userData = JSON.parse (userData);
        console.log("parsed_userData ",parsed_userData);


        let section2 = document.getElementById('first');

        section2.innerHTML=parsed_userData.title

        let section3 = document.getElementById('second');
        section3.innerHTML=parsed_userData.description

        let section4 = document.getElementById('third');
        section4.innerHTML=parsed_userData.category

        let section5 =document.getElementById('img4');
        section5.innerHTML=`<img src="${parsed_userData.image}" style="width:300px; height:300px;">`

        let section6 = document.getElementById('fourth');
        section6.innerHTML=`$ ${parsed_userData.price}`

        let section7 = document.getElementById('fifth');
        section7.innerHTML=`Rating- ${parsed_userData.rating.rate}`

        let section8 = document.getElementById('sixth');
        section8.innerHTML=`Count- ${parsed_userData.rating.count}`
        }
        }

    }
 }
    
