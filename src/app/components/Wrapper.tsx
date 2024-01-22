type props = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: props) {
  return (
    <div className="">
      {children}
    </div>
  );
}

