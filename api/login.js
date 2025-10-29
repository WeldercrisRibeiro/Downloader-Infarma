// api/login.js
import fetch from 'node-fetch'; // se não tiver, instale: npm install node-fetch

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ erro: 'Método não permitido' });
  }

  const { usuario, senha } = req.body || {};

  if (!usuario || !senha) {
    return res.status(400).json({ erro: 'Usuário e senha são obrigatórios' });
  }

  // Usuários agora vêm de uma variável de ambiente
  const users = JSON.parse(process.env.USERS_JSON || '[]');

  const matchedUser = users.find(
    u =>
      u.usuario.toLowerCase() === usuario.toLowerCase() &&
      u.senha.toLowerCase() === senha.toLowerCase()
  );

  const datetime = new Date().toISOString();
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  if (matchedUser) {
    // Envia mensagem para o Telegram
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const message = `✅ Login detectado!\nUsuário: ${matchedUser.usuario}\nHora: ${datetime}\nIP: ${ip}`;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message })
      });
    } catch (error) {
      console.error('Erro ao enviar mensagem para o Telegram:', error);
    }

    return res.status(200).json({ sucesso: true, usuario: matchedUser.usuario });
  } else {
    return res.status(401).json({ sucesso: false, mensagem: 'Usuário ou senha incorretos!' });
  }
}
