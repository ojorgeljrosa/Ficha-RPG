function saveInformacoesBasicas() {
    let nomeValue = document.getElementById('input_nomePersonagem');
    let racaValue = document.getElementById('input_raca').value;
    let classeValue = document.getElementById('input_classe').value;
    let alinhamentoValue = document.getElementById('input_alinhamento').value;
    let jogadorValue = document.getElementById('input_nomeJogador').value;
    let experienciaValue = document.getElementById('input_experiencia').value;
    let dadoVida = document.getElementById('ai_dadoVida').innerHTML;


    if (classeValue === "barbaro") {
        dadoVida = "d12";
    } else if (classeValue === "guerreiro" || classeValue === "paladino" || classeValue === "explorador") {
        dadoVida = "d10";
    } else if (classeValue === "clerigo" || classeValue === "ladino" || classeValue === "bruxo" || classeValue === "bardo" || classeValue === "druida" || classeValue === "monge" || classeValue === "artifice") {
        dadoVida = "d8";
    } else if (classeValue === "feiticeiro" || classeValue === "mago" || classeValue === "necromante") {
        dadoVida = "d6";
    }
    document.getElementById('ai_dadoVida').innerHTML = dadoVida;
}

function nivel() {
    let nivel = 0;
    let xpProximoNivel = 0;
    let xpAtual = document.getElementById('input_experiencia').value;
    let numXpAtual = parseInt(xpAtual, 10);
    if (numXpAtual < 300) {
        nivel = 1;
    } else if (numXpAtual >= 300 && numXpAtual < 900) {
        nivel = 2;
        xpProximoNivel = 900;
    } else if (numXpAtual >= 900 && numXpAtual < 2700) {
        nivel = 3;
        xpProximoNivel = 2700;
    } else if (numXpAtual >= 2700 && numXpAtual < 6500) {
        nivel = 4;
        xpProximoNivel = 6500;
    } else if (numXpAtual >= 6500 && numXpAtual < 14000) {
        nivel = 5;
        xpProximoNivel = 14000;
    } else if (numXpAtual >= 14000 && numXpAtual < 23000) {
        nivel = 6;
        xpProximoNivel = 23000;
    } else if (numXpAtual >= 23000 && numXpAtual < 34000) {
        nivel = 7;
        xpProximoNivel = 34000;
    } else if (numXpAtual >= 34000 && numXpAtual < 48000) {
        nivel = 8;
        xpProximoNivel = 48000;
    } else if (numXpAtual >= 48000 && numXpAtual < 64000) {
        nivel = 9;
        xpProximoNivel = 64000;
    } else if (numXpAtual >= 64000 && numXpAtual < 85000) {
        nivel = 10;
        xpProximoNivel = 85000;
    } else if (numXpAtual >= 85000 && numXpAtual < 100000) {
        nivel = 11;
        xpProximoNivel = 100000;
    } else if (numXpAtual >= 100000 && numXpAtual < 120000) {
        nivel = 12;
        xpProximoNivel = 120000;
    } else if (numXpAtual >= 120000 && numXpAtual < 140000) {
        nivel = 13;
        xpProximoNivel = 140000;
    } else if (numXpAtual >= 140000 && numXpAtual < 165000) {
        nivel = 14;
        xpProximoNivel = 165000;
    } else if (numXpAtual >= 165000 && numXpAtual < 195000) {
        nivel = 15;
        xpProximoNivel = 195000;
    } else if (numXpAtual >= 195000 && numXpAtual < 225000) {
        nivel = 16;
        xpProximoNivel = 225000;
    } else if (numXpAtual >= 225000 && numXpAtual < 265000) {
        nivel = 17;
        xpProximoNivel = 265000;
    } else if (numXpAtual >= 265000 && numXpAtual < 305000) {
        nivel = 18;
        xpProximoNivel = 305000;
    } else if (numXpAtual >= 305000 && numXpAtual < 355000) {
        nivel = 19;
        xpProximoNivel = 355000;
    } else if (numXpAtual >= 355000) {
        nivel = 20;
    } else {
        nivel = 0;
    }
    let xpFaltando = xpProximoNivel - numXpAtual;
    document.getElementById('ai_nivel').innerHTML = nivel;
    document.getElementById('ai_xpProximoNivel').innerHTML = xpFaltando;

    // Proeficiência

    let proeficiencia = 2
    let numNivel = parseInt(nivel, 10);
    if (numNivel > 4 && numNivel <= 8) {
        proeficiencia = 3;
    } else if (numNivel > 8 && numNivel <= 12) {
        proeficiencia = 4;
    } else if (numNivel > 12 && numNivel <= 16) {
        proeficiencia = 5;
    } else if (numNivel > 16 && numNivel <= 20) {
        proeficiencia = 6;
    } else if (numNivel > 20) {
        proeficiencia = 7;
    }
    document.getElementById('ai_proeficiencia').innerHTML = proeficiencia;
}
function saveAtributos() {
    let forca = document.getElementById('input_forca').value;
    let numForca = parseInt(forca, 10);
    let destreza = document.getElementById('input_destreza').value;
    let constituicao = document.getElementById('input_constituicao').value;
    let inteligencia = document.getElementById('input_inteligencia').value;
    let sabedoria = document.getElementById('input_sabedoria').value;
    let carisma = document.getElementById('input_carisma').value;
    if (numForca > 20) {
        forca = 20;
    } else {
        forca = parseInt(forca, 10);
    }
    let modFor = Math.floor((forca - 10) / 2);
    let modDes = Math.floor((destreza - 10) / 2);
    let modCons = Math.floor((constituicao - 10) / 2);
    let modInt = Math.floor((inteligencia - 10) / 2);
    let modSab = Math.floor((sabedoria - 10) / 2);
    let modCar = Math.floor((carisma - 10) / 2);
    document.getElementById('ai_modFor').innerHTML = modFor;
    document.getElementById('ai_modDes').innerHTML = modDes;
    document.getElementById('ai_modCons').innerHTML = modCons;
    document.getElementById('ai_modInt').innerHTML = modInt;
    document.getElementById('ai_modSab').innerHTML = modSab;
    document.getElementById('ai_modCar').innerHTML = modCar;

    //iniciativa

    document.getElementById('ai_iniciativa').innerHTML = + modDes;

    //
    let boxHabAcro = document.getElementById('boxHabAcrobacia').checked;;
    let habAcro = document.getElementById('ai_habAcrobacia').innerHTML;
    let proeficiencia = parseInt(document.getElementById('ai_proeficiencia').innerHTML, 10) || 0;

    if (boxHabAcro) {
        habAcro = modDes + proeficiencia;
        document.getElementById('ai_habAcrobacia').innerHTML = habAcro;
    } else {
        habAcro = modDes;
        document.getElementById('ai_habAcrobacia').innerHTML = habAcro;
    }
    let boxHabArcanismo = document.getElementById('boxHabArcanismo').checked;
    let habArcanismo = document.getElementById('ai_habArcanismo').innerHTML;
    if (boxHabArcanismo) {
        habArcanismo = modInt + proeficiencia;
        document.getElementById('ai_habArcanismo').innerHTML = habArcanismo;
    } else {
        habArcanismo = modInt;
        document.getElementById('ai_habArcanismo').innerHTML = habArcanismo;
    }
    let boxHabAtletismo = document.getElementById('boxHabAtletismo').checked;
    let habAtletismo = document.getElementById('ai_habAtletismo').innerHTML;
    if (boxHabAtletismo) {
        habAtletismo = modFor + proeficiencia;
        document.getElementById('ai_habAtletismo').innerHTML = habAtletismo;
    } else {
        habAtletismo = modFor;
        document.getElementById('ai_habAtletismo').innerHTML = habAtletismo;
    }
    let boxHabAtuacao = document.getElementById('boxHabAtuacao').checked;
    let habAtuacao = document.getElementById('ai_habAtuacao').innerHTML;
    if (boxHabAtuacao) {
        habAtuacao = modCar + proeficiencia;
        document.getElementById('ai_habAtuacao').innerHTML = habAtuacao;
    } else {
        habAtuacao = modCar;
        document.getElementById('ai_habAtuacao').innerHTML = habAtuacao;
    }
    let boxHabEnganacao = document.getElementById('boxHabEnganacao').checked;
    let habEnganacao = document.getElementById('ai_habEnganacao').innerHTML;
    if (boxHabEnganacao) {
        habEnganacao = modCar + proeficiencia;
        document.getElementById('ai_habEnganacao').innerHTML = habEnganacao;
    } else {
        habEnganacao = modCar;
        document.getElementById('ai_habEnganacao').innerHTML = habEnganacao;
    }
    let boxHabLidarAnimais = document.getElementById('boxHabLidarAnimais').checked;
    let habLidarAnimais = document.getElementById('ai_habLidarAnimais').innerHTML;
    if (boxHabLidarAnimais) {
        habLidarAnimais = modSab + proeficiencia;
        document.getElementById('ai_habLidarAnimais').innerHTML = habLidarAnimais;
    } else {
        habLidarAnimais = modSab;
        document.getElementById('ai_habLidarAnimais').innerHTML = habLidarAnimais;
    }
    let boxHabIntimidacao = document.getElementById('boxHabIntimidacao').checked;
    let habIntimidacao = document.getElementById('ai_habIntimidacao').innerHTML;
    if (boxHabIntimidacao) {
        habIntimidacao = modCar + proeficiencia;
        document.getElementById('ai_habIntimidacao').innerHTML = habIntimidacao;
    } else {
        habIntimidacao = modCar;
        document.getElementById('ai_habIntimidacao').innerHTML = habIntimidacao;
    }
    let boxHabIntuicao = document.getElementById('boxHabIntuicao').checked;
    let habIntuicao = document.getElementById('ai_habIntuicao').innerHTML;
    if (boxHabIntuicao) {
        habIntuicao = modSab + proeficiencia;
        document.getElementById('ai_habIntuicao').innerHTML = habIntuicao;
    } else {
        habIntuicao = modSab;
        document.getElementById('ai_habIntuicao').innerHTML = habIntuicao;
    }
    let boxHabInvestigacao = document.getElementById('boxHabInvestigacao').checked;
    let habInvestigacao = document.getElementById('ai_habInvestigacao').innerHTML;
    if (boxHabInvestigacao) {
        habInvestigacao = modInt + proeficiencia;
        document.getElementById('ai_habInvestigacao').innerHTML = habInvestigacao;
    } else {
        habInvestigacao = modInt;
        document.getElementById('ai_habInvestigacao').innerHTML = habInvestigacao;
    }
    let boxHabMedicina = document.getElementById('boxHabMedicina').checked;
    let habMedicina = document.getElementById('ai_habMedicina').innerHTML;
    if (boxHabMedicina) {
        habMedicina = modSab + proeficiencia;
        document.getElementById('ai_habMedicina').innerHTML = habMedicina;
    } else {
        habMedicina = modSab;
        document.getElementById('ai_habMedicina').innerHTML = habMedicina;
    }
    let boxHabPercepção = document.getElementById('boxHabPercepcao').checked;
    let habPercepção = document.getElementById('ai_habPercepcao').innerHTML;
    if (boxHabPercepção) {
        habPercepção = modSab + proeficiencia;
        document.getElementById('ai_habPercepcao').innerHTML = habPercepção;
    } else {
        habPercepção = modSab;
        document.getElementById('ai_habPercepcao').innerHTML = habPercepção;
    }
    let boxHabPersuasao = document.getElementById('boxHabPersuasao').checked;
    let habPersuasao = document.getElementById('ai_habPersuasao').innerHTML;
    if (boxHabPersuasao) {
        habPersuasao = modCar + proeficiencia;
        document.getElementById('ai_habPersuasao').innerHTML = habPersuasao;
    } else {
        habPersuasao = modCar;
        document.getElementById('ai_habPersuasao').innerHTML = habPersuasao;
    }
    let boxHabReligiao = document.getElementById('boxHabReligiao').checked;
    let habReligiao = document.getElementById('ai_habReligiao').innerHTML;
    if (boxHabReligiao) {
        habReligiao = modInt + proeficiencia;
        document.getElementById('ai_habReligiao').innerHTML = habReligiao;
    } else {
        habReligiao = modInt;
        document.getElementById('ai_habReligiao').innerHTML = habReligiao;
    }
    let boxHabSobrevivencia = document.getElementById('boxHabSobrevivencia').checked;
    let habSobrevivencia = document.getElementById('ai_habSobrevivencia').innerHTML;
    if (boxHabSobrevivencia) {
        habSobrevivencia = modSab + proeficiencia;
        document.getElementById('ai_habSobrevivencia').innerHTML = habSobrevivencia;
    } else {
        habSobrevivencia = modSab;
        document.getElementById('ai_habSobrevivencia').innerHTML = habSobrevivencia;
    }

    /*Inicio Percepção Passiva*/
    proeficiencia = document.getElementById('ai_proeficiencia').innerHTML; // Obter o valor do bônus de proficiência geral
    const numProeficiencia = parseInt(proeficiencia, 10); // Converter para número

    if (boxHabPercepção){
        sabPassiva = 10 + parseInt(proeficiencia,10) + modSab
    } else {
        sabPassiva = 10 + modSab
    }
    document.getElementById('ai_sabPassiva').innerHTML = sabPassiva;
    /* Fim Percepção Passiva */

    let boxSalvaForca = document.getElementById('boxSalvaForca').checked;
    let salvaForca = document.getElementById('ai_forcaSalvaguarda').innerHTML;
    if (boxSalvaForca) {
        salvaForca = modFor + proeficiencia;
        document.getElementById('ai_forcaSalvaguarda').innerHTML = salvaForca;
    } else {
        salvaForca = modFor;
        document.getElementById('ai_forcaSalvaguarda').innerHTML = salvaForca;
    }
    let boxSalvaDestreza = document.getElementById('boxSalvaDestreza').checked;
    let salvaDestreza = document.getElementById('ai_destrezaSalvaguarda').innerHTML;
    if (boxSalvaDestreza) {
        salvaDestreza = modDes + proeficiencia;
        document.getElementById('ai_destrezaSalvaguarda').innerHTML = salvaDestreza;
    } else {
        salvaDestreza = modDes;
        document.getElementById('ai_destrezaSalvaguarda').innerHTML = salvaDestreza;
    }
    let boxSalvaConstituicao = document.getElementById('boxSalvaConstituicao').checked;
    let salvaConstituicao = document.getElementById('ai_constituicaoSalvaguarda').innerHTML;
    if (boxSalvaConstituicao) {
        salvaConstituicao = modCons + proeficiencia;
        document.getElementById('ai_constituicaoSalvaguarda').innerHTML = salvaConstituicao;
    } else {
        salvaConstituicao = modCons;
        document.getElementById('ai_constituicaoSalvaguarda').innerHTML = salvaConstituicao;
    }
    let boxSalvaInteligencia = document.getElementById('boxSalvaInteligencia').checked;
    let salvaInteligencia = document.getElementById('ai_inteligenciaSalvaguarda').innerHTML;
    if (boxSalvaInteligencia) {
        salvaInteligencia = modInt + proeficiencia;
        document.getElementById('ai_inteligenciaSalvaguarda').innerHTML = salvaInteligencia;
    } else {
        salvaInteligencia = modInt;
        document.getElementById('ai_inteligenciaSalvaguarda').innerHTML = salvaInteligencia;
    }
    let boxSalvaSabedoria = document.getElementById('boxSalvaSabedoria').checked;
    let salvaSabedoria = document.getElementById('ai_sabedoriaSalvaguarda').innerHTML;
    if (boxSalvaSabedoria) {
        salvaSabedoria = modSab + proeficiencia;
        document.getElementById('ai_sabedoriaSalvaguarda').innerHTML = salvaSabedoria;
    } else {
        salvaSabedoria = modSab;
        document.getElementById('ai_sabedoriaSalvaguarda').innerHTML = salvaSabedoria;
    }
    let boxSalvaCarisma = document.getElementById('boxSalvaCarisma').checked;
    let salvaCarisma = document.getElementById('ai_carismaSalvaguarda').innerHTML;
    if (boxSalvaCarisma) {
        salvaCarisma = modCar + proeficiencia;
        document.getElementById('ai_carismaSalvaguarda').innerHTML = salvaCarisma;
    } else {
        salvaCarisma = modCar;
        document.getElementById('ai_carismaSalvaguarda').innerHTML = salvaCarisma;
    }



    /* Inicia saveAtributosCombate */

    //Cálculo de CA

    let ca = 10 + modDes; // CA base
    let armadura = document.getElementById('input_armadura').value;
    let escudo = document.getElementById('input_escudo').value;
    let caEscudo = 0;
    let caArmadura = 0;
    let armaduraValue = parseInt(armadura, 10);
    let modDesMax = modDes;

    if (modDesMax > 2) {
        modDesMax = 2; // Limitar o modificador de Destreza a +2
    }

    if (armadura === "acolchoada") {
        caArmadura = 11 + modDesMax; // CA acolchoada
    } else if (armadura === "couro") {
        caArmadura = 11 + modDesMax; // CA couro
    } else if (armadura === "couroBatido") {
        caArmadura = 12 + modDesMax; // CA couro batido
    } else if (armadura === "cotaDeMalha") {
        caArmadura = 13 + modDesMax; // CA cota de malha
    } else if (armadura === "peles") {
        caArmadura = 12 + modDesMax; // CA gibão de peles
    } else if (armadura === "MalhaCompleta") {
        caArmadura = 16; // CA malha completa
    } else if (armadura === "cotaDeEscamas") {
        caArmadura = 14 + modDesMax; // CA cota de escamas/brunea
    } else if (armadura === "couraca") {
        caArmadura = 14 + modDesMax; // CA couraça
    } else if (armadura === "armaduraDePlacas") {
        caArmadura = 18; // CA armadura de placas
    } else if (armadura === "armaduraCompleta") {
        caArmadura = 20 + modDesMax; // CA armadura completa
    } else if (armadura === "cotaAneis") {
        caArmadura = 14; // CA armadura de escamas
    } else if (armadura === "armaduraTala") {
        caArmadura = 17; // CA armadura de couro
    }

    if (armadura !== "") {
        ca = caArmadura
     } else if (escudo !== "") {
        ca = ca + 2; // CA com escudo;
        } else {
            ca = 10 + modDes; // CA base
        }

    document.getElementById('ai_ca').innerHTML = ca;

    //Fim Cálculo de CA

}

function saveAtributosCombate() {
    const raca = document.getElementById('input_raca').value; // Obter o valor da classe


    if (raca == "anao" || raca == "gnomo" || raca == "halfling") {
        deslocamento = 7.5;
    } else if (raca === "elfo" || raca === "meioElfo" || raca === "draconato" || raca === "orc" || raca === "humano") {
        deslocamento = 9;
    } else if (raca === "feral" || raca === "troll") {
        deslocamento = 10.5;
    } else {
        deslocamento = 9;
    }
    if (deslocamento < 0) {
        deslocamento = 0; // Ensure deslocamento is non-negative
    }
    document.getElementById('ai_deslocamento').innerHTML = deslocamento + " metros";


}

function saveEquipamentos(){
    let deslocamento = parseInt(document.getElementById('ai_deslocamento').innerHTML.replace(" metros", ""), 10);
    const forca = parseInt(document.getElementById('input_forca').value, 10) || 0; // Obter Força
    let pesoMaximoSobrecarga = forca*2.5; // Peso máximo permitido
    let pesoMaximoGrandeSobrecarga = forca*5; // Peso máximo permitido
    let pesoArmaPrimaria = parseFloat(document.getElementById('pesoArmaPrimaria').value) || 0;
    let pesoArmaSecundaria = parseFloat(document.getElementById('pesoArmaSecundaria').value) || 0;
    let pesoArmadura = parseFloat(document.getElementById('input_armadura').value) || 0;
    let pesoEscudo = parseFloat(document.getElementById('input_escudo').value) || 0;
    let pesoTotal = document.getElementsByClassName('peso');
    let pesoExtra = 0; // Inicializar pesoExtra como 0
    let pesoFinal = 0; // Inicializar peso como 0

    for (let i = 0; i < pesoTotal.length; i++) {
        let pesoParcial = parseFloat(pesoTotal[i].value) || 0;
            pesoParcial = parseFloat(pesoTotal[i].value) || 0; // Garantir que o valor seja numérico
            pesoFinal += pesoParcial;
    }


    document.getElementById('ai_pesoTotal').innerHTML = pesoFinal + " Kg"; // Atualizar o peso total na interface
    updateDeslocamentoESobrecarga(pesoFinal, pesoMaximoSobrecarga, pesoMaximoGrandeSobrecarga, deslocamento);

    function updateDeslocamentoESobrecarga(pesoFinal, pesoMaximoSobrecarga, pesoMaximoGrandeSobrecarga, deslocamento) {
        let pesoExtra = 0;
        if (pesoFinal > pesoMaximoSobrecarga && pesoFinal <= pesoMaximoGrandeSobrecarga) {
            deslocamento = Math.max(0, deslocamento - 3); // Reduzir 3 metros se sobrecarregado
            pesoExtra = pesoFinal - pesoMaximoSobrecarga;
            document.getElementById('sobrecarga').innerHTML = "Você está com uma sobrecarga de " + pesoExtra + "Kg"; // Atualizar mensagem
        } else if (pesoFinal > pesoMaximoGrandeSobrecarga) {
            deslocamento = Math.max(0, deslocamento - 6); // Reduzir 6 metros se grande sobrecarregado
            pesoExtra = pesoFinal - pesoMaximoGrandeSobrecarga;
            document.getElementById('sobrecarga').innerHTML = "Você está com uma grande sobrecarga de " + pesoExtra + "Kg"; // Atualizar mensagem
        } else {
            document.getElementById('sobrecarga').innerHTML = ""; // Limpar mensagem de sobrecarga
        }
        document.getElementById('ai_deslocamento').innerHTML = deslocamento + " metros"; // Atualizar deslocamento
    }


    document.getElementById('ai_deslocamento').innerHTML = deslocamento + " metros";


}

function saveAtaques(){
    const ataque=1
}

function saveHistoria(){
    const historia=0
}
function saveHabilidades(){
    let acrobacia = document.getElementById('boxHabAcrobacia').checked;
    let arcanismo = document.getElementById('boxHabArcanismo').checked;
    const habilidades=0
}

function saveProficiências(){
    const proficiencias=0
}
function saveSalvaguardas(){
    const salvaguardas=0
}

let noturnoAtv = false;
function modoNoturno() {
    noturnoAtv = !noturnoAtv;

    if (noturnoAtv) {
        document.getElementById('style').setAttribute('href', 'style_ noturno.css');
    } else {
        document.getElementById('style').setAttribute('href', 'style_diurno.css');
    }
}

function classe(){
    let classe = document.getElementById('input_classe').value;
}
