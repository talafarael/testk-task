export interface ErrorProps {
  error: string;
}
export const Error = ({ error }: ErrorProps) => {
  return <div>{error}</div>;
};
