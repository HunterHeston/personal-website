// H2 props
type H2Props = {
  children: React.ReactNode;
};

// H2 component returns an h2 element with a set of tailwind classes.
export default function H2({ children }: H2Props) {
  return <h2 className="text-2xl leading-loose">{children}</h2>;
}
