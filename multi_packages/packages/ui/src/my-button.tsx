type Props = {
  label: string;
};
export const MyButton: React.FC<Props> = (props: Props) => {
  return <button>{props.label}</button>;
};
