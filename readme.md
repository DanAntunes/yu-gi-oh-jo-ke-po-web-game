# 🃏 Yu-Gi-Oh! Jo-Ke-Po Edition - Duelo Épico em JavaScript 🐉

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

**Prepare-se para um duelo digital como nenhum outro!** Uma fusão explosiva entre o clássico Jo-Ken-Pô e o universo místico de Yu-Gi-Oh!, onde cartas lendárias decidem o destino do combate!

[![Jogue Agora](https://img.shields.io/badge/JOGUE_AGORA-%23FF0000?style=for-the-badge&logo=firefox&logoColor=white)](https://yu-gi-oh-jo-ke-po-web-game.vercel.app) <!-- Substitua pelo link real -->

![Captura de Tela do Jogo](./src/assets/image/demo/demo_game.gif) <!-- Adicione uma imagem real posteriormente -->

## 🎮 Features Explosivas

- **Batalha Estilizada**: Dragão Branco de Olhos Azuis vs. Mago Negro vs. Exodia!
- **Sistema de Combate RPG**: Estilização pixel-art com elementos de RPG clássico
- **Efeitos Visuais Poderosos**:
  - Trilha sonora épica do duelo egípcio 🎶
  - Animação de cartas em 8-bit
  - Efeitos especiais de batalha
- **Acessibilidade Reinventada**:
  - Compatível com navegação por teclado 🕹️
  - Leitores de tela integrados ♿
  - Design responsivo para todos os dispositivos 📱💻

## ⚡ Como Jogar

🧙 **Magia Simples, Poder Complexo:**
1. Escolha sua carta (Pedra-Papel-Tesoura com esteroides!)
2. Bata na carta do oponente usando o sistema elemental:
   - 🐉 Dragão (Papel) > 🪨 Mago (Pedra)
   - 🪨 Mago (Pedra) > ✂️ Exodia (Tesoura)
   - ✂️ Exodia (Tesoura) > 🐉 Dragão (Papel)
3. Colecione vitórias e domine o ranking!

🎛️ **Controles:**
- Clique nas cartas para selecionar
- Botão "Próximo Duelo" para reiniciar
- Volume controlável via navegador

## 🧩 Core Mechanics

### 🛠️ Arquitetura do Código
O sistema utiliza um padrão de estado centralizado com gestão de eventos modular:

```javascript
// State Management
const state = {
  score: { /* ... */ },
  cardSprites: { /* ... */ },
  fieldCards: { /* ... */ },
  playerSides: { /* ... */ },
  actions: { /* ... */ }
};

// Game Logic Controller
async function checkDuelResults(playerCardId, computerCardId) {
  // Implementação da matriz de resultados
  const duelMatrix = {
    0: { wins: [1], loses: [2] },  // Blue Eyes
    1: { wins: [2], loses: [0] },  // Dark Magician
    2: { wins: [0], loses: [1] }   // Exodia
  };
  // ... (lógica de comparação)
}

// Card System
const cardData = [
  {
    id: 0,
    name: 'Blue Eyes White Dragon',
    type: 'Paper',
    img: `${pathImages}dragon.png`,
    WinOf: [1],
    LoseOf: [2]
  },
  // ... outras cartas
];
```

### 🔑 Principais Funcionalidades
- **State Management**: Objeto central `state` para controle unificado do jogo
- **Modular Design**: Separação clara entre:
  - Lógica de negócio (`engine.js`)
  - Apresentação (`styles.css`)
  - Dados do jogo (`cardData`)
- **Sistema de Eventos**: Handlers para interações:
  - `mouseover`: Preview das cartas
  - `click`: Seleção de cartas
  - `resetDuel()`: Reinicialização do estado

## 📦 Estrutura do Projeto

```bash
src/
├── assets/
│   ├── scripts/
│   │   └── engine.js       # Core game logic
│   └── styles/
│       ├── components/ # CSS modularizado
│       ├── styles/    # Estilos globais
│       └── styles.css        
index.html            # Ponto de entrada principal
```

## 🛠️ Tech Stack Mágica

```bash
# Estrutura Principal
├── HTML5 Semântico
├── CSS3 Moderno (Grid/Flexbox)
└── Vanilla JavaScript ES6+

# Encantamentos Especiais
├── RPGUI Framework Customizado
├── Web Accessibility (ARIA)
└── Google Fonts (Press Start 2P)
```
## 🚀 Recursos Técnicos

### ✅ Boas Práticas Implementadas
1. **Web Accessibility**
   - ARIA roles e labels
   - Suporte a navegação por teclado
   - Contrastes WCAG 2.1 AA

2. **Performance**
   - Pré-carregamento de assets
   - Lazy loading de imagens
   - Web Workers para cálculos complexos

3. **Code Quality**
   - Strict mode JavaScript
   - Error boundaries
   - Validação de tipos

## 🚀 Instalação do Duelista

1. Clone o repositório do duelo:
```bash
git clone https://github.com/DanAntunes/yu-gi-oh-jo-ke-po-web-game
```

2. Entre no portal mágico:
```bash
cd yugioh-jokenpo
```

3. Inicie o desafio:
```bash
abra o arquivo index.html no seu navegador favorito
```

## 👾 Créditos 

- 🎨 Sprites: [OpenGameArt](https://opengameart.org)
- 🔊 Trilha Sonora: "Egyptian Duel" por Jonnyshredder
- 🖌️ Fonte: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)
- 🧩 Inspiração: Konami & Kazuki Takahashi

## 📜 Licença
Distribuído sob licença MIT. Consulte o arquivo [LICENSE](LICENSE) para detalhes.

---
