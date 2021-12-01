import styled from 'styled-components';



export const ImgLink= styled.a`
font-size: 2.0rem;
color:black;
text-Decoration:none;
`

export const Bl= styled.a`

font-size: 1.1rem;
color:white;
text-Decoration:none;
&:hover {
	color: green;
	transition: 200ms ease-in;
}
`

export const Lan= styled.a`
aline-items:center;
font-size: 0.5rem;
color:white;
text-Decoration:none;




&:hover {
	color: green;
	transition: 200ms ease-in;
}

`
export const Form= styled.div`




justify-content: center;
padding:80px;
margin:  auto;
aline-item:center;
widht:400px;
font-size:20px;
color:black;

`
export const Cont= styled.div`


background:lightgray;
color: black;
padding:30px;
justify-content: center;
aline-item:center;


`

export const Back= styled.div`


 color:red;
 display:flex;
 flex-direction:row;
 justify-content:center;
 aline-items:center:


@media screen and (max-width: 768px) {
    

	display:flex;
	flex-direction:column;
	font-size:8px;
    
  }

`
export const Tech=styled.div`

display:flex;
flex-direction:row;
justify-content:center;


@media screen and (max-width: 500px) {
    
	


	
    p{
     display:none

	}

	}


`

export const ContactLink = styled.a`{

color: black;
font-size: 1.8rem;
padding: 2rem;
text-decoration:none;


&:hover {
	color: gray;
	transition: 200ms ease-in;
}

@media screen and (max-width: 768px) {
    

	display:flex;
	flex-direction:row;
	font-size:30px;
	padding:10px;
	
    p{
     display:none

	}

	}
    
  }







}
`
export const Container= styled.div`


color: black;
text-align: justify;
padding: 20px;


`

export const Photo=styled.img`
 
height: 250px;
border-radius: 25px;
@media screen and (max-width: 500px) {
   
	height: 150px;	

	
    
  }


`
export const Img=styled.img`
 
height: 150px;


`





