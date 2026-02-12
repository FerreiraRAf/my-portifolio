function abrirGmail() {
    const seuEmail = "rafaferreirarosa941@gmail.com";
    const assunto = "Contato Portfólio";
    const corpo = "Olá Rafael,%0A%0AVi seu portfólio e gostaria de entrar em contato.%0A%0AAtenciosamente,";
    
    // Link direto para o Gmail Web
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${seuEmail}&su=${encodeURIComponent(assunto)}&body=${corpo}`;
    
    window.open(gmailUrl, '_blank');
}