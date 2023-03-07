import { INFT } from "../../lib/store/actions/nftsActions";

export interface INFTCard extends INFT {
  onClick?: () => void;
}