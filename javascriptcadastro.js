// mascara telefone//
function mascara(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}
function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
  v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
  v=v.replace(/^(\d)/,"+$1"); //+55
  v=v.replace(/(.{3})(\d)/,"$1($2"); //Coloca parênteses em volta do DDD
  v=v.replace(/(.{6})(\d)/,"$1)$2"); // coloca parenteses no DDD
  v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id( el ){
return document.getElementById( el );
}
window.onload = function(){
id('telefone').onkeyup = function(){
  mascara( this, mtel );
}
}

/*/mascara telefone fixo//
function mascara(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}
function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
  v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
  v=v.replace(/^(\d)/,"+$1"); //+55
  v=v.replace(/(.{3})(\d)/,"$1($2"); //Coloca parênteses em volta do DDD
  v=v.replace(/(.{6})(\d)/,"$1)$2"); // coloca parenteses no DDD
  v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id( el ){
return document.getElementById( el );
}
window.onload = function(){
id('telefonefixo').onkeyup = function(){
  mascara( this, mtel );
}
}*/


 
    function validarFormulario() {
        const nome = document.getElementById('nome').value;
        const senha = document.getElementById('senha').value;
        const confirmaSenha = document.getElementById('confirmaSenha').value;

        // Validar se os campos obrigatórios estão preenchidos
        const camposObrigatorios = ['nome', 'datanascimento', 'sexo', 'nomematerno', 'cpfusuario', 'telefone', 'telefonefixo', 'endereco', 'login', 'senha', 'confirmaSenha'];
        let camposFaltando = [];
        camposObrigatorios.forEach(campo => {
            const valorCampo = document.getElementById(campo).value.trim();
            if (!valorCampo) {
                camposFaltando.push(campo);
            }
        });

        if (camposFaltando.length > 0) {
            exibirMensagemErro(`Os seguintes campos são obrigatórios: ${camposFaltando.join(', ')}`);
            return;
        }

        // Validar o tamanho do nome
        if (nome.length < 15 || nome.length > 60) {
            exibirMensagemErro('O campo Nome deve ter entre 15 e 60 caracteres.');
            return;
        }

        // Validar o tamanho do login
        if (login.length !== 6) {
            exibirMensagemErro('O campo Login deve ter exatamente 6 caracteres alfabéticos.');
            return;
        }

        // Validar o tamanho da senha
        if (senha.length !== 8) {
            exibirMensagemErro('O campo Senha deve ter exatamente 8 caracteres alfabéticos.');
            return;
        }

        // Verificar se as senhas coincidem
        if (senha !== confirmaSenha) {
            exibirMensagemErro('As senhas não coincidem.');
            return;
        }

        // Se todos os campos forem válidos, enviar o formulário ou realizar ação necessária
        exibirMensagemSucesso('Formulário válido! Enviando...');
    }

    function exibirMensagemErro(mensagem) {
        const messageDiv = document.getElementById('message');
        messageDiv.style.backgroundColor = '#f44336';
        messageDiv.textContent = mensagem;
        messageDiv.style.display = 'block';

        // Esconder a mensagem após 3 segundos
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 3000);
    }

    function exibirMensagemSucesso(mensagem) {
        const messageDiv = document.getElementById('message');
        messageDiv.style.backgroundColor = '#4caf50';
        messageDiv.textContent = mensagem;
        messageDiv.style.display = 'block';

        // Esconder a mensagem após 3 segundos
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 3000);
    }
