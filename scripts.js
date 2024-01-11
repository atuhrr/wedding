document.getElementById('languageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var language = document.getElementById('language').value;
    var email = document.getElementById('email').value;

    // Você pode adicionar aqui a lógica para salvar o e-mail em algum lugar, se necessário.

    // Redireciona para a página do vídeo com base no idioma selecionado
    var videoPageUrl = `video_${language.toLowerCase()}.html`; // Assume que você tem páginas video_pt.html, video_en.html e video_de.html
    window.location.href = videoPageUrl;
});
