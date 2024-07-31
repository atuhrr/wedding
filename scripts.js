document.getElementById('languageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém a língua selecionada
    const language = document.getElementById('language').value;

    // Define a URL de redirecionamento baseada na língua selecionada
    let redirectUrl;
    if (language === 'PT') {
        redirectUrl = 'nozze/index-pt.html'; // URL para a versão em português
    } else if (language === 'EN') {
        redirectUrl = 'nozze/index.html'; // URL para a versão em inglês
    } else if (language === 'DE') {
        redirectUrl = 'nozze/index-de.html'; // URL para a versão em alemão
    }

    // Redireciona para a URL correspondente
    window.location.href = redirectUrl;
});
