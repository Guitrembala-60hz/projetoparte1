//Canvas, fase do jogo, fundos de tela, e a logo do menu
var canvas, gamestate, bg, bg2, menu, menu, menuImg1, menuImg2;


//Variavel dos zombies, grupo dos zombies.
var Human, Zombie, grupoHuman, grupoZombie;


//Variavel do jogador, e uma imagem para cada direção do jogador.
var cacador, playCima, playBaixo, playEsq, playDir;


//Variavel para os tiros do jogador, e grupo dos tiros.
var tiro, tiroGrupo;


//Variavel do placar do jogador.
var placar = 0;


//Variáveis para os zombies.
var ZombieEsq, HumanEsq, ZombieEsq, HumanDir, ZombieCima, HumanCima, ZombieBaixo, HumanBaixo;


//Indica que a fase inicial é o menu.
gamestate = "menu";


function preload(){

  //Carrega imagens dos zombies.
  ZombieEsq = loadImage("Zesquerda.png");
  ZombieEsq = loadImage("Zdireita.png");
  ZombieCima = loadImage("Zcima.png");
  ZombieBaixo = loadImage("Zbaixo.png");


  //Carrega imagens dos humanos.
  Humanesq = loadImage("hEsq.png");
  HumanDir = loadImage("hDir.png");
  HumanCima = loadImage("m.png");
  HumanBaixo = loadImage("mB.png");


  //Carrega imagem dos players.
  playBaixo = loadImage("baixo.png");
  playCima = loadImage("cima.png");
  playEsq = loadImage("esquerda.png");
  playDir = loadImage("direita.png");


  //Carrega os fundos de tela.
  bg = loadImage("cenario2.png");
  bg2 = loadImage("fundo2.png");

  //Carrega a imagem da logo.
  menuImg1 = loadImage("telainicial.png");
  menuImg2 = loadImage("telainicial2.png");

}



function setup(){

  //Cria a tela.
  canvas = createCanvas(1700, 850);

  //Cria o jogador e adiciona sua imagem inicial.
  cacador = createSprite(850, 425, 20, 20);
  cacador.addImage(playCima);
  cacador.scale = 0.1;



  //Cria o grupo dos zombies, humanos e dos tiros.
  grupoZombie = new Group();
  grupoHuman = new Group();
  tiroGrupo = new Group();
}



function draw(){

  if(gamestate === "menu"){

    if(frameCount%10 === 0){
      background(menuImg2);
    }
    else if(frameCount%50 !== 0 ){
      background(menuImg1);
    }

    cacador.visible = false;

    if(keyDown(ENTER)){
      gamestate = "fase1";
    }


    drawSprites();
  }


  if(gamestate === "fase1"){

    background(bg);

    noStroke();
    textSize(35);
    fill("white");
    text("Placar : " + placar, 200,100);

    drawSprites();

    cacador.visible = true;
    
  
    if(keyDown(UP_ARROW)){
        atirar(0,-15);
      cacador.addImage(playCima);
    }

    if(keyDown(LEFT_ARROW)){
      atirar(-15,0);
      cacador.addImage(playEsq);
    }

    if(keyDown(DOWN_ARROW)){
      atirar(0,15);
      cacador.addImage(playBaixo);
    }

    if(keyDown(RIGHT_ARROW)){
      atirar(15,0);
      cacador.addImage(playDir);
    }


    if(frameCount%60 === 0){
      criar(0,-5,5);
    }

    if(tiroGrupo.isTouching(grupoZombie)){
      placar = placar +1;
      tiroGrupo.destroyEach();
      grupoZombie.destroyEach();
    }
  
    if(tiroGrupo.isTouching(grupoHuman)){
      placar = placar -1;
      tiroGrupo.destroyEach();
      grupoHuman.destroyEach();
    }

    if(placar === -2){
      gamestate = "morte";
    }

    if(placar === 3){
      grupoHuman.destroyEach();
      grupoZombie.destroyEach();
      placar = 0;
      frameCount = 0;
      gamestate = "fase2";
    }

  }



  if(gamestate === "fase2"){

    background(bg);

    noStroke();
    textSize(35);
    fill("white");
    text("Placar : " + placar, 200,100);

    drawSprites();

    cacador.visible = true;
    
  
    if(keyDown(UP_ARROW)){
        atirar(0,-15);
      cacador.addImage(playCima);
    }

    if(keyDown(LEFT_ARROW)){
      atirar(-15,0);
      cacador.addImage(playEsq);
    }

    if(keyDown(DOWN_ARROW)){
      atirar(0,15);
      cacador.addImage(playBaixo);
    }

    if(keyDown(RIGHT_ARROW)){
      atirar(15,0);
      cacador.addImage(playDir);
    }


    if(frameCount%40 === 0){
      criar(0,-7,7);
    }

    if(tiroGrupo.isTouching(grupoZombie)){
      placar = placar +1;
      tiroGrupo.destroyEach();
      grupoZombie.destroyEach();
    }
  
    if(tiroGrupo.isTouching(grupoHuman)){
      placar = placar -1;
      tiroGrupo.destroyEach();
      grupoHuman.destroyEach();
    }

    if(placar === -2){
      gamestate = "morte";
    }

    if(placar === 3){
      grupoHuman.destroyEach();
      grupoZombie.destroyEach();
      frameCount = 0;
      gamestate = "fase3";
      placar = 0;
    }

  }


  if(gamestate === "fase3"){

    background(bg);

    noStroke();
    textSize(35);
    fill("white");
    text("Placar : " + placar, 200,100);

    drawSprites();

    cacador.visible = true;
    
  
    if(keyDown(UP_ARROW)){
        atirar(0,-15);
      cacador.addImage(playCima);
    }

    if(keyDown(LEFT_ARROW)){
      atirar(-15,0);
      cacador.addImage(playEsq);
    }

    if(keyDown(DOWN_ARROW)){
      atirar(0,15);
      cacador.addImage(playBaixo);
    }

    if(keyDown(RIGHT_ARROW)){
      atirar(15,0);
      cacador.addImage(playDir);
    }


    if(frameCount%60 === 0){
      criar(0,-9,9);
    }

    if(tiroGrupo.isTouching(grupoZombie)){
      placar = placar +1;
      tiroGrupo.destroyEach();
      grupoZombie.destroyEach();
    }
  
    //Se a bala tocar os zombies Humanivoros
    if(tiroGrupo.isTouching(grupoHuman)){
      //Aumenta o placar.
      placar = placar -1;

      //Apaga os zombies Humanivoros e tiros.
      tiroGrupo.destroyEach();
      grupoHuman.destroyEach();

      //Toca o som da morte do zombie.
    }

    //Se o placar for -2, você morre.
    if(placar === -2){
      gamestate = "morte";
    }

    //Se o placar for 6, você passa de fase.
    if(placar === 6){

      //Apaga os zombies.
      grupoHuman.destroyEach();
      grupoZombie.destroyEach();

      //Reseta o placar, frameCount e muda de fase.
     gamestate = "vitoria";
    }

  }


  //O que acontece se você vencer está definido aqui.
  if(gamestate === "vitoria"){

    background("black");
    text("Você ganhou!", 850, 425);
  }

  //O que acontece se você morrer está definido aqui.
  if(gamestate === "morte"){
    background("black");
    text("Você perdeu!", 850, 425);
  }

}


//Função que da tiro.
function atirar(velX, velY){

  //O sprite da bala é criado.
  tiro = createSprite(850,425,5,5);

  //Define a velocidade, quantidade de tempo que a bala fica na tela e a cor da bala.
  tiro.velocityX = velX;
  tiro.velocityY = velY;
  tiro.lifetime = 300;
  tiro.shapeColor = "yellow";
  
  //Adiciona o sprite de tiro ao grupo.
  tiroGrupo.add(tiro);

}

    //Cria os zombies da fase 1.
    function criar(a,b,c){

      //Número aleatório que define qual zombie é criado, e sua direção.
      var rand = Math.round(random(1,2));
      var rand2 = Math.round(random(1,4));


      //Condicional : Se o número aleatório for 1, cria zombies.
      if(rand === 1){
    
        //Cria sprite do zombie.
        Zombie = createSprite(30,30,0,0);
        Zombie.scale = 0.2;

        //Adiciona ao grupo Zombie o sprite.
        grupoZombie.add(Zombie);
    

        //Define a direção do zombie.
        switch(rand2){
    
          //zombie que vem de baixo.
          case 1:
            //Quanto tempo o sprite fica na tela.
            Zombie.lifetime = 100;

            //As posições do sprite.
            Zombie.x = 850;
            Zombie.y = 1800;

            //As velocidades do sprite.
            Zombie.velocityX = a;
            Zombie.velocityY = b;
            //Adiciona uma imagem ao zombie.
            Zombie.addImage(ZombieBaixo);
          break;

          //zombie que vem de cima.
          case 2:
            //Quanto tempo o sprite fica na tela.
            Zombie.lifetime = 100;

            //As posições do sprite.
            Zombie.x = 850;
            Zombie.y = -100;

            //As velocidades do sprite.
            Zombie.velocityX = a;
            Zombie.velocityY = c;

            //Adiciona uma imagem ao zombie.
            Zombie.addImage(ZombieCima);
          break;

          //zombie que vem da direita.
          case 3:
            //Quanto tempo o sprite fica na tela.
            Zombie.lifetime = 200;

            //As posições do sprite.
            Zombie.x = 1900;
            Zombie.y = 425;

            //As velocidades do sprite.
            Zombie.velocityX = b;
            Zombie.velocityY = a;

            //Adiciona uma imagem ao zombie.
            Zombie.addImage(ZombieEsq);
          break;

          //zombie que vem da esquerda.
          case 4:
            //Quanto tempo o sprite fica na tela.
            Zombie.lifetime = 200;

            //As posições do sprite.
            Zombie.x = -100;
            Zombie.y = 425;

            //As velocidades do sprite.
            Zombie.velocityX = c;
            Zombie.velocityY = a;

            //Adiciona uma imagem ao zombie.
            Zombie.addImage(ZombieEsq);
          break;
        }
      }
      //Condicional: Se número aleatório for 2, crie zombies.
      else if(rand === 2){
    
        //Cria o sprite dos humanos.
        Human = createSprite(40,40,0,0);
        Human.scale = 0.1;

        //Adiciona os humanos ao grupo de humanos.
        grupoHuman.add(Human);
    
        //Define a direção do humano.
        switch(rand2){
    
          //humano que vem de baixo.
          case 1:
            //Quanto tempo o sprite fica na tela.
            Human.lifetime = 100;

            //As posições do sprite.
            Human.x = 850;
            Human.y = 1800;

            //As velocidades do sprite.
            Human.velocityX = a;
            Human.velocityY = b;

            //Adiciona uma imagem ao humano.
            Human.addImage(HumanBaixo);
          break;
    
          //zombie que vem de cima.
          case 2:
            //Quanto tempo o sprite fica na tela.
            Human.lifetime = 100;

            //As posições do sprite.
            Human.x = 850;
            Human.y = -100;

            //As velocidades do sprite.
            Human.velocityX = a;
            Human.velocityY = c;

            //Adiciona uma imagem ao humano.
            Human.addImage(HumanCima);
          break;
          
          //zombie que vem da direita.
          case 3:
            //Quanto tempo o sprite fica na tela.
            Human.lifetime = 200;

            //As posições do sprite.
            Human.x = 1900;
            Human.y = 425;

            //As velocidades do sprite.
            Human.velocityX = b;
            Human.velocityY = a;

            //Adiciona uma imagem ao humano.
            Human.addImage(HumanDir);
          break;
          
          //humano que vem da esquerda.
          case 4:
            //Quanto tempo o sprite fica na tela.
            Human.lifetime = 200;

            //As posições do sprite.
            Human.x = -100;
            Human.y = 425;

            //As velocidades do sprite.
            Human.velocityX = c;
            Human.velocityY = a;

            //Adiciona uma imagem ao humano.
            Human.addImage(Humanesq);
          break;
        }
      }
      }



