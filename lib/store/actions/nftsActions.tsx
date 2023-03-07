import { EvmChain } from "@moralisweb3/evm-utils";
import Moralis from "moralis";
import { apiKey } from "../../../constants";
import { isValidAddress } from "../../../utils";

export interface INFT {
  description?: string;
  image_url?: string;
  name?: string;
  owner?: string;
  tokenAddress?: string;
  url?: string;
}

Moralis.start({
  apiKey: apiKey,
});

export const getAllNftData = async (address: string) => {
  if (!isValidAddress(address)) {
    alert("Please input valid address");
    return;
  }
  try {
    const chain = EvmChain.ETHEREUM;
    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address,
      chain,
    });
    const nfts: INFT[] = [];
    console.log(response?.result);
    response?.result.map((data) => {
      if (data.metadata) {
        const metadata: any = data.metadata;
        nfts.push({
          description: metadata?.description,
          image_url: metadata?.image_url ? metadata.image_url : metadata?.image,
          name: metadata?.name
            ? metadata.name
            : `${data.name} #${data.tokenId}`,
          owner: address,
          tokenAddress: data.tokenAddress["_value"],
          url: `https://opensea.io/assets/ethereum/${data.tokenAddress["_value"]}/${data.tokenId}`,
        });
      }
    });
    console.log(nfts);
    return nfts;
  } catch (e) {
    console.error(e);
  }
};
