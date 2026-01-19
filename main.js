document.getElementById('iniciar-chat').addEventListener('click', iniciarChat);
document.getElementById('botao-enviar').addEventListener('click', enviarMensagem);
document.getElementById('minimize-button').addEventListener('click', enviarMensagem);
document.getElementById('close-button').addEventListener('click', altenarJanelaChat);

/* Declara uma variável para armazenar o nome do usuário. Inicialmente é uma string vazia. */
let nomeUsuario = '';

/* Define um array que contém pares de perguntas e respostas.*/
const qa = [
    /* Cada objeto contém uma 'pergunta' e uma 'resposta' que corresponde ao chatbot.*/
    { pergunta: "olá", resposta: "Olá! Como posso ajudar você hoje?"},
    { pergunta: "oi", resposta: "Oi! Como posso ajudar você hoje"},
    { pergunta: "qual é o seu nome?", resposta: "Eu sou o Chatbot de Atendimento"},
    { pergunta: "como posso acessar a minha conta?", resposta: "Oferecemos Cursos de HTML, CSS, Javascript e React."},
    { pergunta: "quanto custa o curso de HTML?", resposta: "O curso de HTML custa R$ 100,00."},
    { pergunta: "quanto custa o curso de CSS?", resposta: "O curso de CSS custa R$ 120,00." },
    { pergunta: "quanto custa o curso de JavaScript?", resposta: "O curso de JavaScript custa R$ 150,00." },
    { pergunta: "como faço para me inscrever no curso de HTML?", resposta: "Para se inscrever no curso de HTML, acesse a página do curso e clique em 'Inscrever-se'."},
    { pergunta: "como faço para me inscrever no curso de CSS?", resposta: "Para se inscrever no curso de CSS, acesse a página do curso e clique em 'Inscrever-se'." },
    { pergunta: "como faço para me inscrever no curso de JavaScript?", resposta: "Para se inscrever no curso de JavaScript, acesse a página do curso e clique em 'Inscrever-se'." },
]