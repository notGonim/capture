const { createGlobalStyle } = require("styled-components");

const GlobalStyled = createGlobalStyle`
*{
    margin:0;
    padding :0;
    box-sizing:border-box;
}
html{
        @media (max-width: 1500px) {
            font-size: 85%;
        }
body{
    background:#1b1b1b;
    font-family: 'Inter', sans-serif;

}
button{
    font-weight:bold;
    font-size:1.1.rem;
    cursor: pointer;
    padding:1rem 2rem;
    border :3px solid #23d997;
    background:transparent;
    color:white;
    transition:all 0.5s ease;
    &:hover{
        background-color:#23d997;
        color:white;
    }
}
h2{
    font-weight:lighter;
    font-size:3rem;

}
h3{
    color:white;
}
h4{
    font-weight:bold;
    color:#23d997   ;
}
span{
    font-weight:bold;
    color:#23d997;
}
p{
    padding:3rem 0rem;
    color:#ccc;
    font-size:1.4rem;
    line-height:150%
}
a{
    font-size:1.1rem;
}


`;

export default GlobalStyled;
