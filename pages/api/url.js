export default (req, res) => {
  const rpcURL = process.env.RPC_URL;
  const ipfsProjectID = process.env.IPFS_PROJECT_ID;
  const ipfsApiKeySecret = process.env.IPFS_API_KEY_SECRET;
  res.json({ rpcURL, ipfsProjectID, ipfsApiKeySecret });
};
