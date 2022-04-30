import styled from "styled-components";

export const Section = styled.section`

@media (min-width: 1281px) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: transparent;

 
  left: 0;
  width: 100%;
  top: 0;


  .client-top {
      width: 80%;
   
      height: 20rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .para {
          width: 65%;
           p {
               font-size: 1.5rem;
               line-height: 2rem;
           }
      }
       ul {
           height: 20%;
           display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
           li {
               font-size: 1rem;
              
           }
           li:nth-child(2) {
               width: 100%;
               background-color: #000100;
               height: 0.1rem;
           }
       }

  }


.client-cover {
    width: 100%;
    height: 30rem;
    position: relative;
}
.client-section {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .section {
        display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 80%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    .section-left {
        width: 20%;
        display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    ul {
        li:nth-child(1) {
            font-size: 1.8rem;
            line-height: 2rem;
        }
         li {
             line-height: 2rem;
         }
    }
    }

    .section-right {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .para {
            p {
                font-size: 1.5rem;
                line-height: 2rem;
            }
        }
        .para-bottom {
            margin-top: 2rem;
            p {
              
                line-height: 2rem;
            }
        }
    }
    }
}
.client-homePage {
margin-top: 3rem;
    .head {
        height: 10%;
        width: 80%;
    h2 {
        font-size: 2rem;
        text-transform: uppercase;
         top: 0%;
         left: 10%;
     
    }
}
   

    height: 100rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    position: relative;
    flex-direction: column;

    .wrapper {
        position: relative;
        
        width: 80%;
        height: 80%;
    }
  
}
.client-social {
    .head {
        height: 10%;
        width: 80%;
    h2 {
        font-size: 2rem;
        text-transform: uppercase;
         top: 0%;
         left: 10%;
     
    }
}
    background-color: white;
    padding-top: 3rem;
    padding-bottom: 3rem;
    height: 50rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    position: relative;
    flex-direction: column;

    .wrapper {
        position: relative;
        
        width: 80%;
        height: 80%;
    }
  
}

.client-bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 4rem;
    .img-wrapper {
        width: 80%;
        height: 30rem;
        position: relative;
    }

    .para {
        width: 80%; 
        p {
            line-height: 2rem;
            margin-top: 0.5rem;
        
        }
    }

}

.space {
width: 100%;
height: 7rem;
background-color: white;
}
.testimonial {
    .head {
        height: 10%;
        width: 80%;
    h2 {
        font-size: 2rem;
        text-transform: uppercase;
         top: 0%;
         left: 10%;
     
    }
}

    padding-top: 3rem;
    padding-bottom: 3rem;

    margin-bottom: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    position: relative;
    flex-direction: column;
    .testiminal-view {
        display: flex;
    justify-content:space-between;
    align-items: center;
    width: 80%;
    .testiminal-left {
        width: 60%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
     
        h2 {
           margin-bottom: 0.7rem;
        font-size: 1.5rem;
    margin-bottom: 0;
        
        }
         #des {
             width: 60%;
            
             margin-top: 0.5rem;
             margin-bottom: 0;
           
         }
          p {
              margin-bottom: 1rem;
          }
        .para {
          width: 100%;
           p {
               font-size: 1.2rem;
               line-height: 1.5rem;
           }
      }

    }

    .testiminal-right {
        width: 30%;
        height: 30rem;
        position: relative;
    }


    }


  
}
}

@media (max-width: 1281px) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: transparent;

 
  left: 0;
  width: 100%;
  top: 0;


  .client-top {
      width: 90%;

      height: 30rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column-reverse;
      .para {
          width: 100%;
           p {
               text-align: center;
               font-size: 1.5rem;
               line-height: 2rem;
           }
      }
       ul {
           margin-top: 2rem;
           height: 20%;
           display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      margin-bottom: 1rem;
           li {
               font-size: 1rem;
               align-items: center;
              
           }
           li:nth-child(2) {
               width: 100%;
               background-color: #000100;
               height: 0.1rem;
           }
       }

  }


.client-cover {
    width: 100%;
    height: 15rem;
    position: relative;
}
.client-section {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    width: 100%;

    .section {
        display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column-reverse;
    width: 90%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    .section-left {
        margin-top: 2rem;
        width: 100%;
        display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    ul {
        li:nth-child(1) {
            font-size: 1.8rem;
            line-height: 2rem;
        }
         li {
             line-height: 2rem;
         }
    }
    }

    .section-right {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .para {
            p {
                font-size: 1.5rem;
                line-height: 2rem;
            }
        }
        .para-bottom {
            margin-top: 2rem;
            p {
              
                line-height: 2rem;
            }
        }
    }
    }
}
.client-homePage {
margin-top: 3rem;
    .head {
        height: 10%;
        width: 80%;
    h2 {
        font-size: 2rem;
        text-transform: uppercase;
         top: 0%;
         left: 10%;
     
    }
}
   

    height: 40rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    position: relative;
    flex-direction: column;

    .wrapper {
        position: relative;
        
        width: 80%;
        height: 80%;
    }
  
}
.client-social {
    .head {
        height: 10%;
        width: 80%;
    h2 {
        font-size: 1.5rem;
        text-transform: uppercase;
         top: 0%;
         left: 10%;
     
    }
}
    background-color: white;
    padding-top: 3rem;
    padding-bottom: 3rem;
    height: 30rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    position: relative;
    flex-direction: column;

    .wrapper {
        position: relative;
        
        width: 80%;
        height: 80%;
    }
  
}

.client-bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 4rem;
    .img-wrapper {
        width: 80%;
        height: 30rem;
        position: relative;
    }

    .para {
        width: 80%; 
        p {
            line-height: 2rem;
            margin-top: 0.5rem;
        
        }
    }

}

.space {
width: 100%;
height: 7rem;
background-color: white;
}
.testimonial {
    .head {
        height: 10%;
        width: 90%;
    h2 {
        font-size: 2rem;
        text-transform: uppercase;
         top: 0%;
         left: 10%;
     
    }
}

    padding-top: 3rem;
    padding-bottom: 3rem;

    margin-bottom: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    position: relative;
    flex-direction: column;
    .testiminal-view {
        display: flex;
    justify-content:space-between;
    align-items: center;
    flex-direction: column-reverse;
    width: 90%;
    .testiminal-left {
        width: 100%;
        h2 {
            margin-top: 3rem;
        font-size: 1.5rem;
        
        }
         #des {
             width: 60%;
             line-height: 1.3rem;
             margin-bottom: 3rem;
         }
        .para {
          width: 100%;
           p {
               font-size: 1.2rem;
               line-height: 1.5rem;
           }
      }

    }

    .testiminal-right {
        width: 100%;
        height: 30rem;
        position: relative;
    }


    }


  
}
}
`;
