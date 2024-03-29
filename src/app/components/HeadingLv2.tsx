type Props = {
  children: string;
};

export default function Section({ children }: Props) {
  return (
    <>
      <h2 className='relative w-fit mx-auto [&+*]:mt-12 pb-4 text-4xl font-bold before:absolute before:right-1/2 before:bottom-0 before:translate-x-1/2 before:w-12 before:h-1 before:bg-cyan-600'>
        {children}
      </h2>
    </>
  );
}

