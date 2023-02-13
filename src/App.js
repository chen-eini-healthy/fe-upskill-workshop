/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { ItemList } from "./components/ItemList";

const appCss = css`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

function App() {
  return (
    <div css={appCss}>
      <ItemList />
    </div>
  );
}

export default App;
