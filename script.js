// Quando o formulário for enviado...
document.querySelector(".checkout-form").addEventListener("submit", function (event) {
    // Impede que a página recarregue
    event.preventDefault();

    // Mostra uma mensagem de sucesso
    alert("✅ Compra feita com sucesso! Obrigado por escolher a BG Streetwear 😎");

    // Volta para a página inicial
    window.location.href = "index.html";
});
