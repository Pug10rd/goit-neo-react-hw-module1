import styledComponents from "styled-components";

export const Description = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Name = styledComponents.p`
    font-weight: bold;
    margin: 10px;
`;

export const Tag = styledComponents.p`
    margin: 0;
    color: grey;
`;

export const Location = styledComponents.p`
    margin: 0;    
    color: grey;
    
`;

export const Stats = styledComponents.ul`
    display: flex;
    justify-content: space-between;
    padding: 0;
`;

export const ListElement = styledComponents.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.3%;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    background-color: #bbbbbb;
`;
