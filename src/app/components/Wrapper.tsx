type Props = {
  children: React.ReactNode;
  addClass?: string;
};

export default function Wrapper({ children, addClass }: Props) {
  return (
    <div className={`grid ${addClass || ''}`}>
      {children}
    </div>
  );
}

