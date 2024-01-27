type Props = {
  children: React.ReactNode;
  addClass?: string;
  sectionID?: string;
};

export default function Section({ sectionID, addClass, children }: Props) {
  return (
    <section className={`py-20 px-4 ${addClass || ''}`} {...(sectionID && { id: sectionID })}>
      {children}
    </section>
  );
}
