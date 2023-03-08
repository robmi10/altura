// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const opensea = async (req, res) => {
  try {
    const options = { method: "GET", headers: { accept: "application/json" } };

    const response = fetch(
      "https://testnets-api.opensea.io/v2/orders/goerli/seaport/listings?asset_contract_address=0x4851512De5bd4D035A56eB95Bb4709452091cac7&limit=1",
      options
    );

    res.status(200).send({ message: "success" });
  } catch (error) {
    console.error({ error });
    res.status(400).send({ message: "error" });
  }
};

export default opensea;
