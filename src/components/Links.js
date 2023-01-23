import styled from "styled-components";

// export const Link = ({ className, children, terget, href}) => (
//     <a className={className} target={terget} href={href}>
//         {children}
//     </a>
// );

export const Link = (props) => (
    <a {...props}>
        {props.children}
    </a>
);

export const StyleLink = styled(Link)`
color: palevioletred;
font-weight: bold;
`;


