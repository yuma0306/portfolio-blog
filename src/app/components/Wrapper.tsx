type Props = {
  children: React.ReactNode;
  addClass?: string;
};

export default function Wrapper({ children, addClass }: Props) {
  return (
    <div className={`grid pt-[65px] ${addClass || ''}`}>
      {children}
    </div>
  );
}

