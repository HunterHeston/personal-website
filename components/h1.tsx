// H1 props
type H1Props = {
  children: React.ReactNode;
};

// H1 component returns an h1 element with a set of tailwind classes.
export default function H1({ children }: H1Props) {
  return (
    <h1 className="leading-loose text-4xl font-semibold text-accent tracking-tight">
      {children}
    </h1>
  );
}
