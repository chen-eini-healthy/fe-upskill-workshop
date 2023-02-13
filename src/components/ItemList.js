/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { getItems } from "../server/data";
import TaskIcon from "@mui/icons-material/Task";
import { Paper } from "@mui/material";

const itemsCss = css`
  margin: 0 100px;
  overflow: auto;
`;

const itemCss = css`
  padding: 8px;
  font-size: 12px;
  margin-bottom: 8px;
  border: 1px black solid;
`;

export function ItemList() {
  const [items, setItmes] = useState([]);

  useEffect(() => {
    getItems(1000).then((data) => setItmes(data));
  });

  return (
    <div css={itemsCss}>
      {items.map(({ id, title, description, status }) => (
        <Paper key={id} css={itemCss}>
          <TaskIcon />
          <h3>{`${title} #${id}`}</h3>
          <p>{description}</p>
          <strong>{`Status: ${status}`}</strong>
        </Paper>
      ))}
    </div>
  );
}
