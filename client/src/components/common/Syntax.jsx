import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Syntax({ children }) {
  return (
    <div className="my-5 text-[13.55px] leading-[27px] font-roboto-slab">
      <SyntaxHighlighter language="javascript" style={oneLight}>
        {children?.[0] ?? ""}
      </SyntaxHighlighter>
    </div>
  );
}
