type Props = {
  children: React.ReactNode;
  addClass?: string;
};

export default function Inner({ children, addClass }: Props) {
  return (
    <div className={`container m-auto ${addClass || ''}`}>
      {children}
    </div>
  );
}

