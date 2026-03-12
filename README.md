# 🤖 Chatbot de Atendimento

Um widget de chat interativo e leve, desenvolvido com **JavaScript Puro (Vanilla)**, focado em atendimento automatizado para uma plataforma de cursos.

Este projeto simula um assistente virtual capaz de guiar o usuário de forma inteligente, respondendo perguntas frequentes (FAQ), recomendando cursos e entendendo a intenção do usuário através de uma abordagem híbrida de processamento de texto.

<img width="431" height="554" alt="Captura de tela 2026-03-12 194704" src="https://github.com/user-attachments/assets/8f995fb2-a238-488d-8560-37dc2bff6fda" />


## 🚀 Funcionalidades

* **Interface Flutuante:** Widget expansível/minimizável posicionado no canto da tela, similar a ferramentas reais de suporte (Zendesk, Intercom).
* **Menus Dinâmicos e Guiados:** Se o usuário digitar um termo amplo (ex: "HTML" ou "informações"), o bot intercepta a intenção e gera um menu de opções (Preço, Duração, Conteúdo) para guiar a conversa.
* **Respostas com Ações (Call to Action):** Gera botões interativos (ex: links externos para a Udemy) dependendo do contexto da conversa.
* **Navegação Otimizada:** Suporte nativo ao envio de mensagens pressionando a tecla `Enter`, melhorando a experiência do usuário (UX).
* **Scroll Automático:** A janela de chat rola automaticamente para a mensagem mais recente, mantendo o foco na conversa.
* **Design Modular e Responsivo:** CSS organizado em módulos (`chat.css`, `input.css`, `button.css`) com layout adaptável usando unidades relativas (`rem`) e Flexbox.

## 💬 Exemplos de Interação

O bot é treinado para lidar com diferentes intenções de busca. Experimente digitar:

* **Capacidades do Bot:** *"O que você faz?"*, *"Para que serve esse chat?"* -> O bot se apresenta e lista os tópicos em que pode ajudar.
* **Termos Amplos (Gatilhos):** *"Quero saber sobre o curso de HTML"* ou apenas *"Javascript"* -> O bot oferece um menu específico sobre o curso.
* **Perguntas Específicas:** *"Quanto custa o curso de CSS?"* ou *"Como recebo meu certificado?"* -> O bot busca a resposta exata no banco de dados.
* **Ações Especiais:** *"Quais são os cursos oferecidos"* -> O bot renderiza botões interativos com links externos.

## 🧠 Destaque Técnico: Abordagem Híbrida de Busca

O grande diferencial deste projeto é a sua lógica de processamento de linguagem natural (NLP) simulada no arquivo `script.js`. O bot utiliza um funil de respostas em duas etapas:

1. **Interceptação por Palavras-Chave (Keywords):** Antes de procurar perguntas exatas, o algoritmo verifica se a entrada contém palavras amplas (ex: "informação", "o que você faz"). Isso permite criar menus amigáveis e evitar respostas de "não entendi" para mensagens curtas.
2. **Distância de Levenshtein (Fuzzy Matching):** Caso não caia em um gatilho geral, o bot implementa o cálculo manual da Distância de Levenshtein. Ele calcula o "custo" de transformar a frase do usuário em uma das dezenas de perguntas do banco de dados (array de objetos). Isso garante que o bot entenda frases mesmo com erros de digitação ou abreviações (ex: *"qnto custa curso"*).

## 🛠️ Tecnologias e Técnicas Utilizadas

* **HTML5 & CSS3:** Estrutura semântica, estilização modular, Variáveis e Flexbox.
* **JavaScript (ES6+):** Lógica de interação e manipulação da DOM.
* **Técnicas Praticadas:**
  * Uso intensivo de `EventListeners` (Cliques e eventos de teclado).
  * Criação dinâmica de elementos HTML via JS (`document.createElement`).
  * Utilização de estruturas de repetição e matrizes bidimensionais (algoritmo Levenshtein).
  * Assincronismo visual com `setTimeout` para simular o "tempo de digitação" do bot.
