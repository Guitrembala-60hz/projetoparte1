//Canvas, fase do jogo, fundos de tela, e a logo do menu
var canvas, gamestate, bg, bg2, menu, menu, menuImg1, menuImg2;


//Variavel dos dinossauros, grupo dos dinossauros.
var dinoHerb, dinoCarn, grupoHerb, grupoCarn;


//Variavel para os sons.
var tiroSom, dinoMorte, dinoCriado;


//Variavel do jogador, e uma imagem para cada direção do jogador.
var cacador, playCima, playBaixo, playEsq, playDir;


//Variavel para o helicoptero do player, grupo de helicopteros inimigos, imagem do helicoptero do player, e imagem do helicoptero inimigo.
var helicoptero, helicopteroGrupo, heliPlayer, heliInim;


//Variavel para os tiros do jogador, e grupo dos tiros.
var tiro, tiroGrupo;


//Variavel do placar do jogador.
var placar = 0;


//Variáveis para os dinossauros.
var carnEsq, herbEsq, carnDir, herbDir, carnCima, herbCima, carnBaixo, herbBaixo;


//Indica que a fase inicial é o menu.
gamestate = "menu";


function preload(){

  //Carrega imagens dos dinossauros carnivoros.
  carnEsq = loadImage("Zesquerda.png");
  carnDir = loadImage("Zdireita.png");
  carnCima = loadImage("Zcima.png");
  carnBaixo = loadImage("Zbaixo.png");


  //Carrega imagens dos dinossauros herbivoros.
  herbEsq = loadImage("hEsq.png");
  herbDir = loadImage("hDir.png");
  herbCima = loadImage("m.png");
  herbBaixo = loadImage("mB.png");


  //Carrega os sons.
  dinoCriado = loadSound("criado.mp3");
  dinoMorte = loadSound("morte.mp3");
  tiroSom = loadSound("tiro.mp3");


  //Carrega imagens dos helicópteros.
  heliPlayer = loadImage("heliPlayer.png");
  heliInim = loadImage("heliInim.png"); 


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



  //Cria o grupo dos helicopteros inimigos, dinossauros, e dos tiros.
  helicopteroGrupo = new Group();
  grupoCarn = new Group();
  grupoHerb = new Group();
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
      tiroSom.play();
    }

    if(keyDown(LEFT_ARROW)){
      atirar(-15,0);
      cacador.addImage(playEsq);
      tiroSom.play();
    }

    if(keyDown(DOWN_ARROW)){
      atirar(0,15);
      cacador.addImage(playBaixo);
      tiroSom.play();
    }

    if(keyDown(RIGHT_ARROW)){
      atirar(15,0);
      cacador.addImage(playDir);
      tiroSom.play();
    }


    if(frameCount%60 === 0){
      criarDino(0,-5,5);
      dinoCriado.play();
    }

    if(tiroGrupo.isTouching(grupoCarn)){
      placar = placar +1;
      tiroGrupo.destroyEach();
      grupoCarn.destroyEach();
      dinoMorte.play();
    }
  
    if(tiroGrupo.isTouching(grupoHerb)){
      placar = placar -1;
      tiroGrupo.destroyEach();
      grupoHerb.destroyEach();
      dinoMorte.play();
    }

    if(placar === -2){
      gamestate = "morte";
    }

    if(placar === 3){
      grupoHerb.destroyEach();
      grupoCarn.destroyEach();
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
      tiroSom.play();
    }

    if(keyDown(LEFT_ARROW)){
      atirar(-15,0);
      cacador.addImage(playEsq);
      tiroSom.play();
    }

    if(keyDown(DOWN_ARROW)){
      atirar(0,15);
      cacador.addImage(playBaixo);
      tiroSom.play();
    }

    if(keyDown(RIGHT_ARROW)){
      atirar(15,0);
      cacador.addImage(playDir);
      tiroSom.play();
    }


    if(frameCount%40 === 0){
      criarDino(0,-7,7);
      dinoCriado.play();
    }

    if(tiroGrupo.isTouching(grupoCarn)){
      placar = placar +1;
      tiroGrupo.destroyEach();
      grupoCarn.destroyEach();
      dinoMorte.play();
    }
  
    if(tiroGrupo.isTouching(grupoHerb)){
      placar = placar -1;
      tiroGrupo.destroyEach();
      grupoHerb.destroyEach();
      dinoMorte.play();
    }

    if(placar === -2){
      gamestate = "morte";
    }

    if(placar === 3){
      grupoHerb.destroyEach();
      grupoCarn.destroyEach();
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
      tiroSom.play();
    }

    if(keyDown(LEFT_ARROW)){
      atirar(-15,0);
      cacador.addImage(playEsq);
      tiroSom.play();
    }

    if(keyDown(DOWN_ARROW)){
      atirar(0,15);
      cacador.addImage(playBaixo);
      tiroSom.play();
    }

    if(keyDown(RIGHT_ARROW)){
      atirar(15,0);
      cacador.addImage(playDir);
      tiroSom.play();
    }


    if(frameCount%60 === 0){
      criarDino(0,-9,9);
      dinoCriado.play();
    }

    if(tiroGrupo.isTouching(grupoCarn)){
      placar = placar +1;
      tiroGrupo.destroyEach();
      grupoCarn.destroyEach();
      dinoMorte.play();
    }
  
    //Se a bala tocar os dinossauros herbivoros
    if(tiroGrupo.isTouching(grupoHerb)){
      //Aumenta o placar.
      placar = placar -1;

      //Apaga os dinossauros herbivoros e tiros.
      tiroGrupo.destroyEach();
      grupoHerb.destroyEach();

      //Toca o som da morte do dinossauro.
      dinoMorte.play();
    }

    //Se o placar for -2, você morre.
    if(placar === -2){
      gamestate = "morte";
    }

    //Se o placar for 6, você passa de fase.
    if(placar === 6){

      //Apaga os dinossauros.
      grupoHerb.destroyEach();
      grupoCarn.destroyEach();

      //Reseta o placar, frameCount e muda de fase.
      placar = 0;
      frameCount = 0;
      gamestate = "fase4";
    }

  }



  if(gamestate === "fase4"){

    //Define o fundo de tela.
    background(bg2);

    //Desenha os sprites.
    drawSprites();

    //Adiciona imagem de helicoptero ao player e ajusta sua posição.
    cacador.addImage(heliPlayer);
    cacador.y = 700;

    //Se clicar seta para esquerda, o helicoptero se move.
    if(keyDown(LEFT_ARROW)){
      cacador.x = cacador.x-9;
    }

    //Se clicar seta para direita, o helicoptero se move.
    if(keyDown(RIGHT_ARROW)){
      cacador.x = cacador.x+9;
    }

    //A cada 70 frames um helicoptero é criado.
    if(frameCount%70 === 0){
      criarHelicoptero();
    }

    //Se seu helicopter tocar um inimigo você perde.
    if(cacador.isTouching(helicopteroGrupo)){
      placar = -1;
      gamestate = "morte";
    }

    //Se framecount for 1000, você ganha.
    if(frameCount === 1000 && placar > -1){
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

    //Cria os dinossauros da fase 1.
    function criarDino(a,b,c){

      //Número aleatório que define qual dinossauro é criado, e sua direção.
      var rand = Math.round(random(1,2));
      var rand2 = Math.round(random(1,4));


      //Condicional : Se o número aleatório for 1, cria dinossauros carnivoros.
      if(rand === 1){
    
        //Cria sprite do dinossauro.
        dinoCarn = createSprite(30,30,0,0);
        dinoCarn.scale = 0.2;

        //Adiciona ao grupo carnívoro o sprite.
        grupoCarn.add(dinoCarn);
    

        //Define a direção do dinossauro.
        switch(rand2){
    
          //Dinossauro que vem de baixo.
          case 1:
            //Quanto tempo o sprite fica na tela.
            dinoCarn.lifetime = 100;

            //As posições do sprite.
            dinoCarn.x = 850;
            dinoCarn.y = 1800;

            //As velocidades do sprite.
            dinoCarn.velocityX = a;
            dinoCarn.velocityY = b;
            //Adiciona uma imagem ao dinossauro.
            dinoCarn.addImage(carnBaixo);
          break;

          //Dinossauro que vem de cima.
          case 2:
            //Quanto tempo o sprite fica na tela.
            dinoCarn.lifetime = 100;

            //As posições do sprite.
            dinoCarn.x = 850;
            dinoCarn.y = -100;

            //As velocidades do sprite.
            dinoCarn.velocityX = a;
            dinoCarn.velocityY = c;

            //Adiciona uma imagem ao dinossauro.
            dinoCarn.addImage(carnCima);
          break;

          //Dinossauro que vem da direita.
          case 3:
            //Quanto tempo o sprite fica na tela.
            dinoCarn.lifetime = 200;

            //As posições do sprite.
            dinoCarn.x = 1900;
            dinoCarn.y = 425;

            //As velocidades do sprite.
            dinoCarn.velocityX = b;
            dinoCarn.velocityY = a;

            //Adiciona uma imagem ao dinossauro.
            dinoCarn.addImage(carnDir);
          break;

          //Dinossauro que vem da esquerda.
          case 4:
            //Quanto tempo o sprite fica na tela.
            dinoCarn.lifetime = 200;

            //As posições do sprite.
            dinoCarn.x = -100;
            dinoCarn.y = 425;

            //As velocidades do sprite.
            dinoCarn.velocityX = c;
            dinoCarn.velocityY = a;

            //Adiciona uma imagem ao dinossauro.
            dinoCarn.addImage(carnEsq);
          break;
        }
      }
      //Condicional: Se número aleatório for 2, crie dinossauros herbivoros.
      else if(rand === 2){
    
        //Cria o sprite dos dinossauros herbivoros.
        dinoHerb = createSprite(40,40,0,0);
        dinoHerb.scale = 0.1;

        //Adiciona os dinossauros herbivoros ao grupo de herbivoros.
        grupoHerb.add(dinoHerb);
    
        //Define a direção do dinossauro.
        switch(rand2){
    
          //Dinossauro que vem de baixo.
          case 1:
            //Quanto tempo o sprite fica na tela.
            dinoHerb.lifetime = 100;

            //As posições do sprite.
            dinoHerb.x = 850;
            dinoHerb.y = 1800;

            //As velocidades do sprite.
            dinoHerb.velocityX = a;
            dinoHerb.velocityY = b;

            //Adiciona uma imagem ao dinossauro.
            dinoHerb.addImage(herbBaixo);
          break;
    
          //Dinossauro que vem de cima.
          case 2:
            //Quanto tempo o sprite fica na tela.
            dinoHerb.lifetime = 100;

            //As posições do sprite.
            dinoHerb.x = 850;
            dinoHerb.y = -100;

            //As velocidades do sprite.
            dinoHerb.velocityX = a;
            dinoHerb.velocityY = c;

            //Adiciona uma imagem ao dinossauro.
            dinoHerb.addImage(herbCima);
          break;
          
          //Dinossauro que vem da direita.
          case 3:
            //Quanto tempo o sprite fica na tela.
            dinoHerb.lifetime = 200;

            //As posições do sprite.
            dinoHerb.x = 1900;
            dinoHerb.y = 425;

            //As velocidades do sprite.
            dinoHerb.velocityX = b;
            dinoHerb.velocityY = a;

            //Adiciona uma imagem ao dinossauro.
            dinoHerb.addImage(herbDir);
          break;
          
          //Dinossauro que vem da esquerda.
          case 4:
            //Quanto tempo o sprite fica na tela.
            dinoHerb.lifetime = 200;

            //As posições do sprite.
            dinoHerb.x = -100;
            dinoHerb.y = 425;

            //As velocidades do sprite.
            dinoHerb.velocityX = c;
            dinoHerb.velocityY = a;

            //Adiciona uma imagem ao dinossauro.
            dinoHerb.addImage(herbEsq);
          break;
        }
      }
      }

  //Função que cria os helicopteros inimigos.
  function criarHelicoptero(){

  //Cria o sprite de helicoptero.
  helicoptero = createSprite(0,-50,40,40);
  
  //Define uma posição aleatória.
  helicoptero.x =  Math.round(random(100,1600));

  //Define a velocidde.
  helicoptero.velocityY = 5;

  //Adiciona o sprite ao grupo.
  helicopteroGrupo.add(helicoptero);

  //Adiciona imagem ao sprite.
  helicoptero.addImage(heliInim);
  }

