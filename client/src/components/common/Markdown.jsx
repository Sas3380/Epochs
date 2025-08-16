import MarkdownCompiler from "markdown-to-jsx";
import Syntax from "./Syntax";

export default function Markdown({ children }) {
  return (
    <MarkdownCompiler
      options={{
        forceBlock: true,
        overrides: {
          code: {
            component: Syntax,
            props: {
              className: "code",
            },
          },
        },
      }}
    >
      {children}
    </MarkdownCompiler>
  );
}
