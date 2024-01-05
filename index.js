let jogadores = [
  {
    "nome": "Elvis",
    "vitorias": 160,
    "derrotas": 140
  },
  {
    "nome": "Luna",
    "vitorias": 180,
    "derrotas": 32
  },
  {
    "nome": "Bento",
    "vitorias": 380,
    "derrotas": 270
  }
]

calcularNivelJogadores(jogadores)

function calcularNivelJogadores(jogadores) {
  let nivel

  for (const jogador of jogadores) {
    const saldoDeVitorias = jogador["vitorias"] - jogador["derrotas"]

    if (saldoDeVitorias <= 10) {
      nivel = "Ferro"
    } else if (saldoDeVitorias >= 11 && saldoDeVitorias <= 20) {
      nivel = "Bronze"
    } else if (saldoDeVitorias >= 21 && saldoDeVitorias <= 50) {
      nivel = "Prata"
    } else if (saldoDeVitorias >= 51 && saldoDeVitorias <= 80) {
      nivel = "Ouro"
    } else if (saldoDeVitorias >= 81 && saldoDeVitorias <= 90) {
      nivel = "Diamante"
    } else if (saldoDeVitorias >= 91 && saldoDeVitorias <= 100) {
      nivel = "Lendário"
    } else if (saldoDeVitorias > 100) {
      nivel = "Imortal"
    }

    console.log("O jogador " + jogador["nome"] + " tem saldo de " + saldoDeVitorias + " vitórias e está no nível " + nivel)
  }
}

