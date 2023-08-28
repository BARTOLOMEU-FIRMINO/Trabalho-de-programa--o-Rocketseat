function toggleModel(){
  const html = document.documentElement

  /*if(html.classList.contains('light')){
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }*/

  /* Outra forma */
  html.classList.toggle('light')

  //Pegar a tag imag
  const img = document.querySelector ("#profile img")
  
  //Substituir a imagem 

  if(html.classList.contains('light')){
    img.setAttribute('src','./assets/avatar-light.png')
  } else {
     //Se tiver light mode, adicionar a imagem light
    img.setAttribute('src','./assets/avatar.png')
  }
  //alterar o alt do img na minha logica
  
 


  
}