type Props = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: Props) {
  return (
    <div className="">
      {children}
    </div>
  );
}

