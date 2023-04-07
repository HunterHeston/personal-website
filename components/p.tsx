type PProps = {
  children: React.ReactNode;
  className?: string;
};

// P component returns an p element with a set of tailwind classes.
export default function P({ children, className }: PProps) {
  return <p className={"my-5 leading-relaxed " + className}>{children}</p>;
}
