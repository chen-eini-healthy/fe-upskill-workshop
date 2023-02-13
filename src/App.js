/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { ItemList } from "./components/ItemList";

const appCss = css`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <div css={appCss}>
      <ItemList />
    </div>
  );
}

export default App;
