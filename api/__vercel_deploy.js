export default function handler(req, res) {
  res.status(200).json({
    createdAt: process.env.VERCEL_DEPLOYED_AT || new Date().toISOString()
  });
}
