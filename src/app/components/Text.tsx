type Props = {
  children: React.ReactNode;
  align?: string;
};

export default function Text({align, children}: Props) {
  return (
    <>
      <p className={`${align}`}>{children}</p>
    </>
  )
}
