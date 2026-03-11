// Selecionar o input e o container 
const inputBusca = document.querySelector('.search-bar-input input');
const containerBusca = document.querySelector('.search-bar-input');

//Quando o usuário clica dentro da barra para digitar
inputBusca.addEventListener('focus', function() {
    // Adiciona uma borda branca e aumenta um pouco o brilho
    containerBusca.style.border = '2px solid white';
    containerBusca.style.backgroundColor = '#2a2a2a'; // Fica levemente mais claro
});

// Quando o usuário clica fora da barra
inputBusca.addEventListener('blur', function() {
    // Remove a borda para voltar ao estado original
    containerBusca.style.border = 'none';
    containerBusca.style.backgroundColor = '#242424'; // Cor original
});
