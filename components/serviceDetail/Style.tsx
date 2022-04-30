import styled from "styled-components";
export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    color:white
  }
  @media (min-width: 1281px) {


    h2 {
        margin-bottom: 2rem;
    }
 
.banner {
    width: 100%;
    height: 40rem;
position: relative;


.text {
    width: 100%;
    height: 100%;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
.head {
    display: flex;
justify-content: flex-start;
align-items: center;

    width: 85%;
    h1 {
        width: 30%;
        font-size: 4rem;
        line-height: 5rem;
        color: white;
    }
}
}
}

  .flex {
    margin-top: 4rem;
      width: 80%;
     
      display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .section-left{
      width: 30%;
      height: 100%;
    
 
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;
  overflow: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 5%;
  .serivce-list {
      margin-bottom: 3rem;
      height: 30rem;
      width: 100%;
      background-color: #273EE1;
      display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
.head {
    height: 10%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
        font-size: 1.5rem;
        color: white;
    }
   
}
ul {
    width: 95%;
        height: 85%;
        display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
overflow-y: scroll;
li {
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 90%;
}
#active {
    background-color: #FC5546;
    color:white
}
 
    }
  }

  }
  .section-right{
      width: 65%;
      height: 100%;
      
      display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  .section-para {
      margin-bottom: 5rem;
    
    display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  h2 {
      margin-bottom: 0.5rem;
      font-size: 2rem;
  } 
  p {
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
      line-height: 2rem;
  }
}

  }
  .section-two {
      margin-bottom: 5rem;
    display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 50rem;


  .section-two-left {
      position: relative;
      width: 50%;
      .wrapper {
        position: relative;
        width: 90% ;
        height: 30rem;
      }
      .wrapper-2 {
        position:absolute;
        width: 50% ;
       
         bottom: -35%;
         left: 40%;
        height: 20rem;
        .wrapper {
        position: relative;
        width: 100% ;
        height: 20rem;
      }
      }
    
  }

  .section-two-right {
      width: 50%;
      
      h2 {
          font-size: 2em;
          margin-bottom: 1rem;
      }
      li {
          margin-top: 2rem;
          margin-left: 1rem;
      }

  }

  }
  }

  .contact {
    margin-bottom: 5rem;
      width: 85%;
      height: 15rem;
      background-image: url('https://pulseplay-website.s3.amazonaws.com/20220424-m67yz-sdd');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-detial{
   width: 85%;
   display: flex;
   height: 100%;
   justify-content: space-between;
   align-items: center;

   .contact-left {
       display: flex;
       justify-content: flex-start;
       align-items: center;
       width: 40%;
      
       h3 {
         
           line-height: 48px;
           color:white;
           font-size: 35px;
       }
   }
   .contact-right {
  
       display: flex;
       justify-content: space-between;
       align-items: center;
       flex-direction: column;
       height: 50%;
       width: 40%;
    
       li {
           font-size: 1rem;
           list-style: none;
           color:white
       }

       .button {
           
           width: 10rem;
           background-color: #FF2E5F;
           display: flex;
           justify-content: center;
           align-items: center;
           height: 3rem;
           span {
               margin-left: 1rem;
           }


       }
      
    
   }
      }
    }


    .chat {
        margin-top: 5rem;
        width: 80%;
        display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .heading {
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
      font-size: 2rem;
  }
  span {
      color: #fc5546;;
      margin-bottom: 0.5rem;
      text-align: center;
  }
}
.expert {
    width: 100%;
    height: 30rem;
     background-color: red;
.carousel-container {
     padding: 20px 0 20px 20px;
}
     .img {
        height: 30rem;
        width: 20rem;
    }
  
}
    }

}
@media (max-width: 1281px) {



    .banner {
    width: 100%;
    height: 25rem;
position: relative;


.text {
    width: 100%;
    height: 100%;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
.head {
    display: flex;
justify-content: flex-start;
align-items: center;

    width: 85%;
    h1 {
        width: 30%;
        font-size: 2.5rem;
        line-height: 3rem;
        color: white;
    }
}
}
}

  .flex {
    margin-top: 4rem;
      width: 90%;
     
      display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .section-left{
      width: 30%;
      height: 100%;
    
 
display: none;
justify-content: flex-start;
flex-direction: column;
align-items: center;
  overflow: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 5%;
  .serivce-list {
      margin-bottom: 3rem;
      height: 30rem;
      width: 100%;
      background-color: #273EE1;
      display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
.head {
    height: 10%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
        font-size: 1.5rem;
        color: white;
    }
   
}
ul {
    width: 95%;
        height: 85%;
        display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
overflow-y: scroll;
li {
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 90%;
}
#active {
    background-color: #FC5546;
    color:white
}
 
    }
  }

  }
  .section-right{
      width: 100%;
      height: 100%;
      
      display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  .section-para {
      margin-bottom: 5rem;
    
    display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  h2 {
      margin-bottom: 0.5rem;
      font-size: 2rem;
  } 
  p {
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
      line-height: 2rem;
  }
}

  }
  .section-two {
      margin-bottom: 5rem;
    display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;



  .section-two-left {
      position: relative;
      width: 90%;
margin-bottom: 2rem;
      .wrapper {
        position: relative;
        width: 90% ;
        height: 20rem;
      }
      .wrapper-2 {
        position:absolute;
        width: 60% ;
       
    
         bottom: 11%;
         left: 40%;
        height: 20rem;
        .wrapper {
        position: relative;
        width: 100% ;
        height: 20rem;
      }
      }
    
  }

  .section-two-right {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      
      h2 {
          font-size: 2em;
      }
      li {
          margin-top: 2rem;
          margin-left: 1rem;
      }

  }

  }
  }

  .contact {
 
      width: 90%;
      height: 20rem;
      background-image: url('https://pulseplay-website.s3.amazonaws.com/20220424-m67yz-sdd');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .contact-detial{
   width: 85%;
   display: flex;
   height: 100%;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: column;

   .contact-left {
       display: flex;
       justify-content: flex-start;
       align-items: center;
       width: 90%;
      
       h3 {
           font-size: 2rem;
           line-height: 3rem;
           color:white;
       }
   }
   .contact-right {
  
       display: flex;
       justify-content: space-between;
       align-items: center;
       flex-direction: column;
       height: 30%;
       width: 40%;
    
       li {
           list-style: none;
           color:white
       }

       .button {
           
           width: 10rem;
           background-color: #FF2E5F;
           display: flex;
           justify-content: center;
           align-items: center;
           height: 3rem;
           span {
               margin-left: 1rem;
           }


       }
      
    
   }
      }
    }


    .chat {
        margin-top: 5rem;
        width: 80%;
        display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .heading {
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
      font-size: 2rem;
      text-align: center;
  }
  span {
      color: #fc5546;;
      margin-bottom: 0.5rem;
      text-align: center;
  }
}
.expert {
    width: 100%;
    height: 30rem;
     background-color: red;
.carousel-container {
     padding: 20px 0 20px 20px;
}
     .img {
        height: 30rem;
        width: 20rem;
    }
  
}
    }

}
    

`;
