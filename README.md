# 🤖 Chatbot de Atendimento
Um widget de chat interativo e leve, desenvolvido com **JavaScript Puro (Vanilla)**, focado em atendimento automatizado para uma plataforma de cursos.
Este projeto simula um assistente virtual capaz de responder perguntas frequentes (FAQ) e recomendar cursos, utilizando algoritmos de processamento de texto para entender a intenção do usuário.

## 🚀 Funcionalidades
* **Interface Flutuante:** Widget expansível/minimizável posicionado no canto da tela, similar a ferramentas reais de suporte (Zendesk, Intercom).
* **Processamento de Linguagem Natural (Simulado):** Utiliza o algoritmo de **Distância de Levenshtein** para encontrar a resposta mais adequada, mesmo que o usuário cometa pequenos erros de digitação.
* **Respostas Dinâmicas:** Gera botões de ação (ex: links para cursos) dependendo do contexto da conversa.
* **Design Modular:** CSS organizado em módulos (`chat.css`, `input.css`, `button.css`) para facilitar a manutenção e escalabilidade.
* **Responsividade:** Layout adaptável com unidades relativas (`rem`) e uso de Flexbox.

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estrutura semântica.
* **CSS3:** Estilização modular, Variáveis e Flexbox.
* **JavaScript (ES6+):** Lógica de interação, manipulação do DOM e implementação do algoritmo de busca.

## Técnicas Utilizadas, Praticadas
 * Utilização de EventListeners
 * Uso de funções com o objetivo de construir um chatbox a partir do javascript.
 * Utilização de estruturas de repetição.
 * setTimeout.

## 🧠 Destaque Técnico: Algoritmo de Busca
O diferencial deste projeto é a implementação manual da **Distância de Levenshtein** no arquivo `script.js`. Em vez de buscar apenas por palavras exatas, o bot calcula o "custo" de transformar a frase do usuário em uma das perguntas do banco de dados.

Isso permite que o bot entenda:
* *"Quanto custa o curso?"* (Pergunta exata)
* *"qnto custa curso"* (Com abreviações/erros)
