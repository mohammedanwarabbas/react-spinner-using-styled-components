import React from 'react'
import styled, {keyframes} from 'styled-components'

export default function Home() {

const spin = keyframes`
0%{transform:rotate(0deg);}
100%{transform:rotate(360deg);}
`;
const flicker = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.2; }
    100% { opacity: 1; }
  `;

const SpinnerDiv = styled.div`
width:10rem;
height:10rem;
margin:auto;
border-radius:50%;
border:0.2rem solid rgba(0,0,0,0.2);
border-top:0.2rem solid blue;
animation:${spin} 1s linear infinite;
`
const SpinnerDiv2 = styled.div`
width:10rem;
height:10rem;
margin:auto;
border-radius:50%;
border:0.2rem solid rgba(0,0,0,0.2);
border-top:0.2rem solid blue;
animation:${flicker} 1s infinite,${spin} 1s linear infinite;
`

  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 card'><div className='card-body'><SpinnerDiv></SpinnerDiv></div><div className='card-title'>Spinning</div></div>
            <div className='col-md-6 card'><div className='card-body'><SpinnerDiv2></SpinnerDiv2></div><div className='card-title'>Spinning with opacity changes</div></div>
        </div>
        
        
    </div>
    </>
  )
}
