// api/login.js
export default function handler(req, res) {
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

  if (matchedUser) {
    return res.status(200).json({ sucesso: true, usuario: matchedUser.usuario });
  } else {
    return res.status(401).json({ sucesso: false, mensagem: 'Usuário ou senha incorretos!' });
  }
}
