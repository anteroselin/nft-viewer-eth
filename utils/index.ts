import Web3 from "web3";

export const getStyledAddress = (address: string) : string => {
  let result = "";
  result += address.slice(0, 4);
  result += "...";
  result += address.slice(address.length - 4, address.length);
  return result;
};

export const isValidAddress = (address: string) : boolean => {
  if (!Web3.utils.isAddress(address)) return false;
  else return true;
}