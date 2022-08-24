export default (req, res) => {
  const rpcURL = process.env.RPC_URL;
  const ipfsProjectID = process.env.IPFS_PROJECT_ID;
  const apiKey = process.env.API_KEY;
  res.json({ rpcURL, ipfsProjectID, apiKey });
};
