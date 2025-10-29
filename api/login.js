// api/login.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ sucesso: false, erro: 'Método não permitido' });
  }

  try {
    const { usuario, senha } = req.body || {};

    if (!usuario || !senha) {
      return res.status(400).json({ sucesso: false, erro: 'Usuário e senha são obrigatórios' });
    }

    const users = JSON.parse(process.env.USERS_JSON || '[]');
    const matchedUser = users.find(
      u =>
        u.usuario.toLowerCase() === usuario.toLowerCase() &&
        u.senha.toLowerCase() === senha.toLowerCase()
    );

    const now = new Date();
    const datetime = now.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    if (matchedUser) {
      const botToken = process.env.TELEGRAM_BOT_TOKEN;
      const chatId = process.env.TELEGRAM_CHAT_ID;

      if (botToken && chatId) {
        const message = `✅ *Login detectado!*\n👤 Usuário: ${matchedUser.usuario}\n🕒 Hora: ${datetime}\n🌐 IP: ${ip}`;

        try {
          const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: chatId,
              text: message,
              parse_mode: 'Markdown'
            }),
          });

          const data = await response.json();
          console.log('Resposta do Telegram:', data); // 🔍 log útil
        } catch (error) {
          console.error('Erro ao enviar mensagem para o Telegram:', error);
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
