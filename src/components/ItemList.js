/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { getItems } from "../data";
import { css } from "@emotion/react";

const itemsCss = css`
  width: 500px;
  height: 500px;
  overflow: auto;
  background-color: beige;
`;

const itemCss = css`
  margin-bottom: 8px;
`;

export function ItemList() {
  const [items, setItmes] = useState([]);

  useEffect(() => {
    getItems(10000).then((data) => setItmes(data));
  });

  return (
    <div css={itemsCss}>
      {items.map(({ id, title, description }) => (
        <div key={id} css={itemCss}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}
