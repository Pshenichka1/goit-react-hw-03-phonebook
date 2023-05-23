import styled from 'styled-components';

const Item = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
font-weight: 500;
font-size: 22px;
color: #15151c;`

const ButtonDel = styled.button`
font-weight: 500;
font-size: 22px;
background-color: #c04641;
border-radius: 10px;
&:hover: 
background-color: #cd716b;`

export { Item, ButtonDel };