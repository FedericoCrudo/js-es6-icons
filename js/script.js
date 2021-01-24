$(document).ready(function(){
const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    }
  ];
  //prendiamo le categorie
  const colori=[
      "blue",
      "orange",
      "purple"
      
  ];
  const categoria=getType(icons);
  console.log(categoria);
  //stampa categorie
  
  categoria.forEach((element)=>{
      $("#categorie").append(
          `
          <option value="${element}">${element}</option>
          `
      );
  })

  const iconColors=icons.map((element)=>{
        const index=categoria.indexOf(element.type);
        return{
            ...element,
            color: colori[index]
        }
  });   
  console.log(iconColors); //array con l'aggiuta dei colori

  //prendiamo il contenitore dove appendere gli items
  const container=$(".container-items");

  print(iconColors,container);
  //filtro
  $("#categorie").change(function(){
        const select=$(this).val();
        const elementFilter=iconColors.filter(function(element){
        
            return element.type==select;
        });   
       if(elementFilter.length==0){
        print(iconColors,container);
       }else{
           console.log(elementFilter.length);
       print(elementFilter,container);
       }
        
    });



  function print(array,container){
    container.html("");
    array.forEach((element)=>{
        container.append(
            `
        <div class="items">
            <i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i>
           <div class="title">${element.name}</div>
        </div>
            `
        );
    });
  }


  //funzione per prendere categoria
  function getType(array){
       const categoria=[]; 
    array.forEach((element)=>{
        if(!categoria.includes(element.type)){
            categoria.push(element.type);
        }
  });
  return categoria;
  }
  










});


        
 
    
        
          
   

    
