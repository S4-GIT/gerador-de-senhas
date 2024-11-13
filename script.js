// Função para gerar uma senha aleatória
function gerarSenha() {
    const comprimento = document.getElementById("comprimento").value; // Obtém o comprimento da senha
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let senha = "";
    
    // Gerar a senha aleatória
    for (let i = 0; i < comprimento; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indice);
    }

    // Exibe a senha gerada no campo de texto
    document.getElementById("senha").value = senha;
    
    // Atualiza o valor do comprimento da senha
    document.getElementById("comprimentoValor").textContent = comprimento;
}

// Atualiza o valor do comprimento da senha quando o slider for movido
document.getElementById("comprimento").addEventListener("input", function() {
    document.getElementById("comprimentoValor").textContent = this.value;
});
