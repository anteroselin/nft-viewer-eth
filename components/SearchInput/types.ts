export interface ISearchInput {
  className?: string;
  text?: string;
  onChangeHandler?: (x: string) => void;
  onClickHandler?: () => void;
}