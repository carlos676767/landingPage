const email = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmação de Inscrição</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color:#2A3332;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border: 3px solid black;
        }
        .header {
            text-align: center;
            padding: 20px 0;
            background-color: black;
            border-radius: 8px 8px 0 0;
            color: #ffffff;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .header img {
            width: 100%;
            border-radius: 8px 8px 0 0;
        }
        .content {
            padding: 20px;
            color: white;
        }
        .content p {
            margin: 0 0 20px;
            line-height: 1.6;
        }
        .content a {
            color:white;
            border: 2px solid #9293EE;
            text-decoration: none;
        }
        .images {
            display: flex;
            justify-content: space-between;
            margin: 20px 0;
        }
        .images img {
            width: 48%;
            border-radius: 8px;
        }
        .cta-button {
            display: block;
            width: 100%;
            text-align: center;
            background-color: #9293EE;
            color: #ffffff;
            text-decoration: none;
            padding: 15px 0;
            margin: 20px 0;
            border-radius: 5px;
            font-size: 18px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #999999;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <img src="https://imgur.com/o2oWjRX.png" alt="Imagem do Evento">
            <h1>Confirmação de Inscrição</h1>
        </div>
        <div class="content">
            <p>Olá</p>
            <p>Obrigado por se inscrever no nosso mega evento de programação! Estamos muito empolgados em tê-lo(a) conosco.</p>
            <p>Este será um evento online imperdível, onde você terá a oportunidade de aprender, se conectar e se inspirar com grandes nomes da programação.</p>
            <p>Aqui estão os detalhes do evento:</p>
            <p>
                <strong>Data:</strong> 25 de Julho de 2024<br>
                <strong>Local:</strong> Online
            </p>
            <div class="images">
                <img src="https://img.freepik.com/vetores-gratis/conceito-de-programadores-com-design-plano_23-2147860985.jpg?t=st=1718930033~exp=1718933633~hmac=ccc4cc22236824d297c47dbdc13b2fec9c534521f221f0ffb8f1e6e07af33593&w=740" alt="Imagem 1">
                <img src="https://img.freepik.com/vetores-gratis/pessoas-usando-tecnologico-dispositivos-cobranca_23-2148113454.jpg?t=st=1718930057~exp=1718933657~hmac=4304f495b94d542be9b95ffe48570a56ad775c18bbfb4082f29dbd80f3bda090&w=740" alt="Imagem 2">
            </div>
            <p>Para facilitar a comunicação e fornecer atualizações em tempo real, convidamos você a se juntar ao nosso grupo no WhatsApp:</p>
            <a class="cta-button" href="https://chat.whatsapp.com/SeuLinkDoGrupo" target="_blank">Juntar-se ao Grupo no WhatsApp</a>
            <p>Se tiver qualquer dúvida, não hesite em nos contatar.</p>
            <p>Atenciosamente,</p>
            <p>Equipe de Organização do Evento</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Evento de Programação. Todos os direitos reservados.</p>
        </div>
    </div>
</body>
</html>
`


module.exports = email