import styled from "styled-components";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const renderButtons = () => {
    const links = [
      { name: "profile", to: "/profile" },
      { name: "history", to: "/history" },
      { name: "products", to: "/products" }
    ];
    return links.map(link => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push(link.to)}
        >
          {link.name}
        </Button>
      );
    });
  };

  return <div>{renderButtons()}</div>;
};

const OriginalButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
