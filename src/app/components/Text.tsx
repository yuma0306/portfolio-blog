type props = {
  children: React.ReactNode;
  align?: string;
};

export default function Text({align, children}: props) {
  return (
    <>
      <p className={`${align}`}>{children}</p>
    </>
  )
}
