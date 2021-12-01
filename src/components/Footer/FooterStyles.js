import styled from 'styled-components';

export const Container = styled.div`
display:flex;
background: black;
bottom: 0;
justify-content: center;
margin: 0 auto;
aline-item:center;
max-width: 1000px


  

@media screen and (max-width: 768px) {
	justify-content: center;
    font-size: 1.0rem;
   `
export const Email= styled.a`

color: #fff;
font-size: 0.8rem;
padding: 2rem;
justify-content: start;



&:hover {
	color: gray;
	transition: 200ms ease-in;
}

`

export const FooterLink = styled.a`

color: #fff;
font-size: 1.8rem;
padding: 2rem;
text-decoration:none;


&:hover {
	color: gray;
	transition: 200ms ease-in;
}
`;

