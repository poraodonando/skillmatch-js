console.log("Bem vindo ao Projeto Skill Match")




// RF01 - Perfil do candidato

const candidato = {
    nome: 'Nando  Batista',
    area: 'Front-End',
    habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Godot","Unity5","HTML","CSS"],
    experienciaMeses: 1
}

//RF02 – Criar uma lista de vagas


const lista_vagas = [
  {
    id: 1,
    empresa: "AuraTech",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: ["JavaScript", "GitHub", "Lógica de Programação"],
    salario: 8100,
    modalidade: "Remoto"
  },
  {
    id: 2,
    empresa: "67Lab",
    cargo: "Estágio Front-End",
    requisitos: ["JavaScript", "Kanban", "GitHub"],
    salario: 1800,
    modalidade: "Híbrido"
  },

  {
    id: 3,
    empresa: "AlfaSolutions",
    cargo: "Programador JS Júnior",
    requisitos: ["JavaScript", "Arrays", "Objetos", "Funções", "HTML", "CSS"],
    salario: 6300,
    modalidade: "Presencial"  
  },
  {
    id: 4,
    empresa: "BetaCore",
    cargo: "Front-End Pleno",
    salario:9600,
    requisitos:["HTML","CSS","TypeScript","React","Banco de dados","OOP","Kanban"],
    modalidade:"Remoto"
  }
];

//Obtem uma classificação percentual das habilidades

function obterClassificacao(percentual) {
  if (percentual >= 80){
     return "Alta Compatibilidade";
    }
    
  if (percentual >= 50) {
    return "Média Compatibilidade";
    }
  
    return "Baixa Compatibilidade";
}


//Match de Habilidades

function matchHabilidades(habilidades, requisitos) {
  let encontradas = requisitos.filter((req) => habilidades.includes(req));

  let  faltantes = requisitos.filter((req) => !habilidades.includes(req));

  let compatibilidade = (encontradas.length / requisitos.length) * 100;

  return {
    encontradas,
    faltantes,
    compatibilidade,
  };
}   

//Comparação Candidato x Vagas

function compararCandidatoVagas(candidato, vagas) {
  let resultados = [];

  for (const vaga of lista_vagas) {
    let match = matchHabilidades(candidato.habilidades, vaga.requisitos);

    resultados.push(
      new Vaga(
        vaga.empresa,
        vaga.cargo,
        `${match.compatibilidade.toFixed(0)}%`,
        match.encontradas,
        match.faltantes,
        obterClassificacao(match.compatibilidade),
      ),
    );
  }

  return resultados;
}


// Falta Estudar
function faltaEstudar(candidato, vagas) {
  let contadorMaterias = {};

  for (const vaga of lista_vagas) {
    for (const requisito of vaga.requisitos) {
      if (!candidato.habilidades.includes(requisito)) {
        contadorRequisitos[requisito] = (contadorRequisitos[requisito] || 0) + 1;
      }
    }
  }

  return Object.entries(contadorRequisitos)
    .sort((a, b) => b[1] - a[1])
    .map(([materia, qtd]) => `${materia} (${qtd} vaga(s))`);
} 