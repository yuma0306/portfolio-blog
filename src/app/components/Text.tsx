type Props = {
  children: React.ReactNode;
  addClass?: string;
};

export default function Text({addClass, children}: Props) {
  return (
    <>
      <p className={`${addClass || ''}`} >{children}</p>
    </>
  )
}
