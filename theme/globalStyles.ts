import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   body {
     font-family: "ManropeLight", monospace;

     transition: all 0.50s linear; 
     ::-webkit-scrollbar {
  width: 10px;
}

input {
   font-family: "ManropeLight",
}
button {
   font-family: "ManropeLight",
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
  }
  
  #head {
     font-size: 4rem;
  }

  h1 , h2 , h3 , h6 , h4 {
   font-family: "ManropeBold", monospace;

  }
  h2{
     font-size: 4rem;
  }
   p{
      font-family: "ManropeLight", monospace;
      line-height: 1.5rem;
   }
   li {
      font-family: "ManropeLight", monospace;
   }
   li {
      line-height: 1.5rem;
   }
   button {
      line-height: 1.5rem;
  
   }

 
  `