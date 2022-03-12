console.clear();

const prompt = require('prompt-sync')();
//PROJETO 1 --------JORNADA DO HERÓI-----------------
console.log('==============================A GRANDE JORNADA DO HÉROI==============================');

let sim=1;

let nao=0;

console.log('Após grandes aventuras, nosso protagonista(Jev) enfim chega a seu desafio final!');
console.log('A partir de agora o sucesso de sua missão depende das suas escolhas feitas anteriormente ');
console.log('Para derrotar o Grande Chefe final, responda se o herói coletou os itens solicitados e realizou as ações necessárias.');

console.log();

let perg1=prompt('Jev conseguiu um Aliado? ');
if (perg1==='sim'||perg1==='SIM'||perg1==='Sim')
    {
    (console.log('Seu Aliado te presenteou com uma **ESPADA LENDÁRIA**'))
        perg1= sim
    }
else if (perg1==='nao'||perg1==='NAO'||perg1==='no') {
    console.log('Espero que consiga se virar com **ESTILETE CEGO**')
        perg1=nao
        };  

console.log()

let perg2=prompt('Jev ajudou o Velho Perdido? ');
    if (perg2==='sim'||perg2==='SIM'||perg2==='Sim') {
        (console.log('Velho Perdido melhorou sua Armadura'))
        perg2= sim
        }
    else if (perg2==='nao'||perg2==='NAO'||perg2==='no') {
        console.log('Poxa, não custava nada ter ajudado, seu ruim!')
    perg2=nao
        };

console.log()
   
let perg3=prompt('Tentou resgatar a Princesa, mas quando chegou ela já tinha dado no pé? ');
    if (perg3==='sim'||perg3==='SIM'||perg3==='Sim'){
        (console.log('Você encontrou **COROA DE RUBIS**, não serve pra nada, mas talvez você consiga seduzir o inimigo. #ArrasouMona'))
        perg3= sim
        }
    else if(perg3==='nao'||perg3==='NAO'||perg3==='no'){console.log('Perdeu a oportunidade de ficar **DIVA**.')
        perg3=nao
        };
 
console.log()

let perg4=prompt('Solucionou o Enigma do Mago? ');
    if (perg4==='sim'||perg4==='SIM'||perg4==='Sim'){
        (console.log('O Mago te presenteou com **COCA-COLA DE CAFÉ**. Ganha velocidade e atenção( E talvez diabetes).'))
        perg4= sim}
    else if(perg4==='nao'||perg4==='NAO'||perg4==='no'){console.log('"Para a inteligência de poucos, temos a ignorância de muitos".')
    perg4=nao
};

console.log()
   
let perg5=prompt('Encontrou o escudo na Caverna? ');
    if (perg5==='sim'||perg5==='SIM'||perg5==='Sim') {
        (console.log('Esse escudo **SUPERIOR** oferece total proteção contra os ataques do Grande Chefe.(Aconselho tomar uma anti-rábica).'))
        perg5= sim}
    else if(perg5==='nao'||perg5==='NAO'||perg5==='no') {(console.log('Deveria ter chamado sua mamãe pra te ajudar.'))
    perg5=nao
}

console.log()
    

let resultado= (perg1+perg2+perg3+perg4+perg5);
let resp1='**Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações**.';
let resp2='***Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita***.';
let resp3='*****Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco****.';
let resp4='*****Você falha, mas ainda consegue fugir da situação*****.';
let resp5='******Você falha miseravelmente******.';

if(resultado===5){console.log(resp1)}
else if (resultado===4){console.log(resp2)}
else if (resultado===3){console.log(resp3)}
else if (resultado===1||resultado===2){console.log(resp4)}
else if(resultado===0){console.log(resp5)};
console.log()
console.log()