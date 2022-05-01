import styled from "styled-components";

export const Section = styled.section`

width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

flex-direction: column;
position: relative;
margin-bottom: 3rem;
@media (min-width: 1281px) {

    .bg-img {
       top:2%;
        width: 50%;
        height: 40rem;
        right: 5%;
        position:absolute;
      

        display: flex;
        justify-content: flex-end;
        align-items: center;
        .grey-bg {
            display: flex;
            justify-content: flex-end;
       
   width: 50%;
   height: 100rem;
        }


    }

h2 {
        font-size: 3em;
        line-height: 4rem;
        position: relative;
     

      ::after {
        content: "";
        position: absolute;
        width: 35%;
        height: 5%;
        background-color: ${(props) => props.theme.colors.lightBlue};
        bottom: 0%;
        left: 0%;
      
    
  }
    } 

.banner {
    width: 100%;
    height: 40rem;
   
    display: flex;
justify-content: center;
align-items: flex-end;

.banner-left {

    height: 100%;
    width: 55%;
    background-color: red;
  background-image: url("/rectangle.jpg");
  background-color: #cccccc;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
    position: relative;
    z-index: 100;

    .social {
        position: absolute;
        right: 5%;
        width: 20%;
        height: 100%;
    
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
         
    li {
        cursor: pointer;
            margin-top: 2rem;
            height: 1.5rem;
            width: 1.5rem;
            position: relative;
            list-style: none;
        }
    }
}

.banner-right {
    height: 80%;
    width: 40%;
  
    position: relative; 
    display: flex;
      margin-left: 8%;
    justify-content: center;
    
  
    .about {
        position: absolute;
        left: -10%;
        width: 20%;
        height: 100%;
    
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        .svg {
            width: 100px;
            height: 110px;
        }
    }
    align-items: center;
    .head {
        margin-left: 30%;
        h1 {
            color: #0060FF;
        }
        h3 {
margin-top: 1rem;
  color:#FF2E5F
        }
    }
}

}


.description {
    margin-top: 5rem;
    width: 80%;
   
   
    display: flex;
justify-content: space-between;
align-items:flex-start;



.description-left {
    height: 80%;
    width: 40%;

  
    h2 {
        font-size: 3em;
        line-height: 4rem;
        position: relative;
     

      ::after {
        content: "";
        position: absolute;
        width: 35%;
        height: 5%;
        background-color: ${(props) => props.theme.colors.lightBlue};
        bottom: 0%;
        left: 0%;
      
    
  }
    } 
    
    .para {
        margin-top: 1rem; 
        P{
            line-height: 1.5rem;
        }
    }
} 

.description-right {
    height: 80%;
    width: 40%;
   
    position: relative; 
    display: flex;
    justify-content: space-between;
  
    align-items:flex-start;
    flex-direction: column;
    h2 {
        font-size: 3em;
        line-height: 4rem;
        position: relative;
     

      ::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 5%;
        background-color: ${(props) => props.theme.colors.lightBlue};
        bottom: -10%;
        left: 0%;
      
    
  }
    }
    .line {
        margin-top: 3rem;
        width: 100%;
        
        display: flex;
    justify-content: space-between;
  
    align-items:center;
    flex-direction: row;
    h3 {
     
    }
   
    }
    h2 {
        font-size: 3em;
        line-height: 4rem;
    }
   
}


}

.dream {
    width: 80%;
    height: 20rem;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    .list {
        width: 60%;
   
         height: 6rem;
        display: flex;
    justify-content: center;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .img-wrapper {
        width: 10%;
        height: 100%;
    }
    .data {
  height: 100%;
        width: 70%;
        display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid red;

    .list-right {
    
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 80%;
        color: #ED297B;
        
        p {
            line-height: 1.2rem;
            width: 90%;
            text-align: right;
         
        }
   
    }

    }


    }

}

.work {

    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .heading {
        display: flex;
justify-content: flex-start;
width: 80%;
h2 {
    margin-top: 5rem;
        font-size: 3em;
        line-height: 4rem;
        position: relative;
     

      ::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 5%;
        background-color: ${(props) => props.theme.colors.lightBlue};
        bottom: -10%;
        left: 0%;
      
    
  }
    }
    }

    .work-list {
    margin-top: 3rem;
        width: 100%;
        background-color: #26A9E0;
        display: flex;
        justify-content: center;
        align-items: center;
  

        .list {
            width: 80%;
            display: flex;
        justify-content:space-between;
        align-items: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;


        .data {
            margin-bottom: 2rem;
            width: 30%;
            height: 20rem;
            position: relative;
        }

        }
    
    }
    
}


.memories {

width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

.heading {
    display: flex;
justify-content: flex-start;
width: 80%;
h2 {
margin-top: 5rem;
    font-size: 3em;
    line-height: 4rem;
    position: relative;
 

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 5%;
    background-color: ${(props) => props.theme.colors.lightBlue};
    bottom: -10%;
    left: 0%;
  

}
}
}

.work-list {
margin-top: 3rem;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;


    .list {
        width: 100%;
        display: flex;
    justify-content:center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;


    .data {
   
        width: 20%;
        height: 20rem;
        position: relative;
    }

    }

}

}
}

@media (max-width: 1281px) { 

    h2 {
        font-size: 3em;
        line-height: 4rem;
        position: relative;
     

      ::after {
        content: "";
        position: absolute;
        width: 35%;
        height: 5%;
        background-color: ${(props) => props.theme.colors.lightBlue};
        bottom: 0%;
        left: 0%;
      
    
  }
    } 

.banner {
    width: 100%;
  
   
    display: flex;
justify-content: center;
align-items: center;
flex-direction:column-reverse;
position: relative;

.banner-left {
    background-image: url("/rectangle.jpg");
  background-color: #cccccc;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

    height: 40rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;


    .social {
        position: absolute;
         left: 5%;
        width: 100%;
        height: 100%;
        top: 0%;

        display: flex;
        justify-content:center;
        align-items: flex-start;
        flex-direction:column;

        li {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 10%;
   
        }

         
    li {
        cursor: pointer;
            margin-top: 2rem;
            height: 1.5rem;
            width: 1.5rem;
            position: relative;
            list-style: none;
        }
    }


}

.banner-right {
   
    width: 90%;
   
  
    display: flex;
    justify-content: center;
    .about {
        position: absolute;
          top: 0%;
        width: 90%;
        height: 20%;
        top: 5%;
     
        display: flex;
        justify-content: space-between;
        align-items: center;
        .svg {
            width: 70px;
            height: 71px;
        }
      
    }
    align-items: center;
    .head {
        display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
        h1 {
            color: #0060FF;
            text-align: center;
            font-size: 2.2rem;
        }
        h3 {
            font-size: 0.9rem;
margin-top: 1rem;
  color:#FF2E5F
        }
    }
}

}


.description {
    margin-top:  2rem !important;
    width: 100%;
   
   
    display: flex;
justify-content: space-between;
align-items:center;
flex-direction: column;



.description-left {
    height: 80%;
    width: 90%;

  
    h2 {
        font-size: 3em;
        line-height: 4rem;
        position: relative;
     

      ::after {
        content: "";
        position: absolute;
        width: 35%;
        height: 5%;
        background-color: ${(props) => props.theme.colors.lightBlue};
        bottom: 0%;
        left: 0%;
      
    
  }
    } 
    
    .para {
        margin-top: 1rem; 
        P{
            line-height: 1.5rem;
        }
    }
} 

.description-right {
    height: 100%;
    width: 90%;
   
    margin-top: 3rem;
    position: relative; 
    display: flex;
    justify-content: space-between;
  
    align-items:flex-start;
    flex-direction: column;
    h2 {
        font-size: 3em;
        line-height: 4rem;
        position: relative;
     

      ::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 5%;
        background-color: ${(props) => props.theme.colors.lightBlue};
        bottom: -10%;
        left: 0%;
      
    
  }
    }
    .line {
        margin-top: 3rem;
        width: 100%;
        
        display: flex;
    justify-content: space-between;
  
    align-items:center;
    flex-direction: row;
    h3 {
     
    }
   
    }
    h2 {
        font-size: 3em;
        line-height: 4rem;
    }
   
}


}

.dream {
    width: 100%;
   
    height: 20rem;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .list {

        width: 90%;
      
        display: flex;
    justify-content: center;
    display: flex;
    justify-content:space-between;
    align-items: center;

    border-bottom:  1px solid #C9C3C3;
    padding-bottom: 1rem;
    padding-top: 1.5rem;
    .data {
      
  height: 100%;
        width: 100%;
        display: flex;
    justify-content: space-between;

    .list-right {
        display: flex;
        justify-content: flex-end;
        width: 50%;
        color: #ED297B; p {
            width: 90%;
            line-height: 1.2rem;
            text-align: right;
        }
    }

    }


    }

}

.work {

    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .heading {
        display: flex;
justify-content: flex-start;
width: 90%;
h2 {
    margin-top: 5rem;
        font-size: 3em;
        line-height: 4rem;
        position: relative;
     

      ::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 5%;
        background-color: ${(props) => props.theme.colors.lightBlue};
        bottom: -10%;
        left: 0%;
      
    
  }
    }
    }

    .work-list {
    margin-top: 3rem;
        width: 100%;
        background-color: #26A9E0;
        display: flex;
        justify-content: center;
        align-items: center;
  

        .list {
            width: 90%;
            display: flex;
        justify-content:space-between;
        align-items: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;


        .data {
            margin-bottom: 2rem;
            width: 49%;
            height: 20rem;
            position: relative;
        }

        }
    
    }
    
}


.memories {

width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

.heading {
    display: flex;
justify-content: flex-start;
width: 90%;
h2 {
margin-top: 5rem;
    font-size: 3em;
    line-height: 4rem;
    position: relative;
 

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 5%;
    background-color: ${(props) => props.theme.colors.lightBlue};
    bottom: -10%;
    left: 0%;
  

}
}
}

.work-list {
margin-top: 3rem;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;


    .list {
        width: 100%;
        display: flex;
    justify-content:center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;


    .data {
   
        width: 50%;
        height: 20rem;
        position: relative;
    }

    }

}

}
}

`;
