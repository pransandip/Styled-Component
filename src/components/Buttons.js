import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

export const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const ButtonBlue = styled(Button)`
color: #6CA5BC;
border-color: #6CA5BC;
`;

// export const ReversedButton = props => {
//     console.log(props.children.split('').reverse());
//     console.log(props.children.split('').join(""));
//     console.log(props.children.split('').join("_"));
//     return <Button {...props} children={props.children.split('').reverse()
//     } />
// }

export const ReversedButton = props => <Button {...props} children={props.children?.split('').reverse()} >
    {props.loading && (
        <ClipLoader
          color="#00294d"
          loading={props.loading}
          size={25}
        />
      )}
      <span style={{ marginLeft: `${props.loading ? `15px` : `0px`}` }}>
        {props.text}
      </span>
</Button>

