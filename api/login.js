// api/login.js
//import fetch from 'node-fetch'; // npm install node-fetch se necessário

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ sucesso: false, erro: 'Método não permitido' });
  }

  try {
    const { usuario, senha } = req.body || {};

    if (!usuario || !senha) {
      return res.status(400).json({ sucesso: false, erro: 'Usuário e senha são obrigatórios' });
    }

    // Usuários vêm de variável de ambiente
    const users = JSON.parse(process.env.USERS_JSON || '[]');

    const matchedUser = users.find(
      u =>
        u.usuario.toLowerCase() === usuario.toLowerCase() &&
        u.senha.toLowerCase() === senha.toLowerCase()
    );

    const datetime = new Date().toISOString();
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    if (matchedUser) {
      // Enviar mensagem para o Telegram
      const botToken = process.env.TELEGRAM_BOT_TOKEN;
      const chatId = process.env.TELEGRAM_CHAT_ID;

      if (botToken && chatId) {
        const message = `✅ Login detectado!\nUsuário: ${matchedUser.usuario}\nHora: ${datetime}\nIP: ${ip}`;

        try {
          await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text: message })
          });
        } catch (error) {
          console.error('Erro ao enviar mensagem para o Telegram:', error);
          // Não interrompe a resposta ao cliente
        }
      }

      return res.status(200).json({ sucesso: true, usuario: matchedUser.usuario });
    } else {
      return res.status(401).json({ sucesso: false, mensagem: 'Usuário ou senha incorretos!' });
    }
  } catch (error) {
    console.error('Erro interno na função login:', error);
    return res.status(500).json({ sucesso: false, erro: 'Erro interno no servidor' });
  }
}
