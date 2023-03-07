import { INFT } from "../../lib/store/actions/nftsActions";

export interface IModal {
  isOpen: boolean;
  nft?: INFT;
  onClose: () => void;
}