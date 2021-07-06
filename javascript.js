
// Open MailBox to send an email with the report information
function send_report() {
    
    //Get selected report option
    let opt_str = "";
    let opt = document.getElementById('option_selected').value;
    
    if (opt == 1) {
        opt_str = "Não consigo iniciar sessão na minha conta.";
    } else if (opt == 2) {
        opt_str = "Não consigo finalizar sessao na minha conta.";
    } else if (opt == 3) {
        opt_str = "Não consigo adicionar items ao carrinho.";
    } else if (opt == 4) {
        opt_str = "Não consigo aceder ao meu carrinho.";
    } else if (opt == 5) {
        opt_str = "Não consigo aceder a pagina de pagamento.";
    } else if (opt == 6) {
        opt_str = "O meu pagamento foi mal sucedido.";
    } else if (opt == 7) {
        opt_str = "Outro problema.";
    }

    //Send report email with every single info provided
    var msgbody = document.getElementById('Message').value;
    var link = "mailto:doringooficial@hotmail.com?" +
    "&subject=" + ("Report: " + opt_str) +
    "&body=" + ("Mensagem: " + msgbody + "\n\n\n");
    window.location.href = link;

    //show message on screen
    document.getElementById('success_msg').style.display ='inline';
    setTimeout(function()
    {
        document.getElementById('success_msg').style.display ='none';
    } ,300000); //hide after 5 minutes (300 seconds)

}







// Open MailBox to send an email with the sugestion information
function send_suggestion() {
    
    //suggestion
    let sug_str = "";
    let sug = document.getElementById('suggestion_selected').value;
    
    if (sug == 1) {
        sug_str = "Tenho uma sugestão para o programa.";
    }

    //Send suggestion email with every single info provided
    var msgbody = document.getElementById('Message').value;
    var link = "mailto:doringooficial@hotmail.com?" +
    "&subject=" + ("Sugestão: " + sug_str) +
    "&body=" + ("Mensagem: " + msgbody + "\n\n\n");
    window.location.href = link;

    //show message on screen
    document.getElementById('success_msg').style.display ='inline';
    setTimeout(function()
    {
        document.getElementById('success_msg').style.display ='none';
    } ,300000); //hide after 5 minutes (300 seconds)

}






// Open facebook website on a new tab
function open_fb() {
    window.open('https://www.facebook.com/Doringo-Catering-108579274721684/', '_blank');
}

// Open twitter website on a new tab
function open_twt() {
    window.open('https://twitter.com/doringoofficial', '_blank');
}

// Open instagram website on a new tab
function open_insta() {
    window.open('https://www.instagram.com/doringoofficial/', '_blank');
}






// Show Tooltip with a daily message

function show_daily_msg() {
    
}






