





import styled from "styled-components";

export const Section = styled.section`

width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #FFCD05;
flex-direction: column;
@media (min-width: 1281px) {
.set {
    width: 90%;
    height: 40rem;
    
    display: flex;
justify-content: flex-end;
align-items: flex-end;

.left{
    display: flex;
justify-content:space-between;
align-items: flex-start;
flex-direction: column;
height: 80%;

width: 50%;
p {
    width: 90%;
color: ${props => props.theme.colors.grey};
font-style: italic;
   
 }
  ul {
      width: 87%;
      display: flex;
justify-content: center;
align-items: flex-end;
flex-direction: column;

          li:nth-child(2){
          
           color: ${props => props.theme.colors.blue};
          }
      

  }
  .btn {
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      h1 {
          font-size: 4rem;
      }
   
      button {
        background-color: ${props => props.theme.colors.darkPink};
        width: 10rem;
        border:none;
        color:white;
        font-size: 1.2rem;
        height: 3rem;
      }
  }
}


.right{
    display: flex;
justify-content: center;
align-items: center;
height: 80%;

width: 50%;
position: relative;
 
}



}

.section2 {
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center ;
    flex-direction: column;
    padding-top: 3rem;
   

    .team-bg {
        width: 100%;
        padding-bottom: 3rem;
height: 30rem;
background-image: url("/aboutus/aboutusBannner.png"); /* The image used */
background-color: #cccccc; /* Used if the image is unavailable */
/* You must set a specified height */
background-position: center; /* Center the image */
background-repeat: no-repeat; /* Do not repeat the image */
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
    }

    .why-join {
        width: ${(props) => props.theme.containerWidth.lg};
        padding-bottom: 3rem;

        h2 {
            font-size: 2rem;
            margin-bottom: 2rem;
        }
         li {
             margin-left: 2rem;
             position: relative;
           list-style: none;
             line-height: 3rem;
             ::after{
                 content: '';
                  background-color: black;
                 width: 0.3rem;
                 height: 0.3rem;
                 position: absolute;
                 left: -1.5%;
                 top: 1.3rem;
                 border-radius: 50%;
             }
         }
    }

    .outer-color {
        width: 100%;
        display: flex;
        justify-content: center;
        background-color:${(props) => props.theme.colors.darkBlue};
    padding-bottom: 5rem;
    .why-live {
        width: ${(props) => props.theme.containerWidth.lg};
        padding-top: 3rem;

        h2 {
            color:white;
            font-size: 2rem;
            margin-bottom: 2rem;
        }
         li {
            color:white;
             margin-left: 2rem;
             position: relative;
           list-style: none;
             line-height: 3rem;
             ::after{
                 content: '';
                  background-color: white;
                 width: 0.3rem;
                 height: 0.3rem;
                 position: absolute;
                 left: -1.5%;
                 top: 1.3rem;
                 border-radius: 50%;
             }
         }
    }

}


}


.slider {
    width: 100%;
    height: 40rem;
    background-color: white;
    display: flex;
justify-content: flex-end;
align-items: flex-end;

.left{
    display: flex;
justify-content:space-evenly;
align-items: flex-start;
flex-direction: column;
height: 80%;

width: 30%;
p {  display: flex;
justify-content:space-evenly;
    width: 90%;
color: ${props => props.theme.colors.grey};
font-style: italic;
border-bottom: 0.5px solid ${props => props.theme.colors.grey};;
padding-bottom: 2rem;
   
 }
  ul {
      width: 87%;
      display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
li:nth-child(1){
          
         font-family:'ManropeBold' ;
         }

          li:nth-child(2){
          
           color: ${props => props.theme.colors.grey};
          }
      

  }

  .social {
      width: 100%;
      display: flex;
      justify-content: flex-start;

  }
  .btn {
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      h1 {
          font-size: 4rem;
      }
   
      button {
        background-color: ${props => props.theme.colors.darkPink};
        width: 10rem;
        border:none;
        color:white;
        font-size: 1.2rem;
        height: 3rem;
      }
  }
}


.right{
    display: flex;
justify-content: space-evenly;
align-items: flex-end;
height: 80%;

width: 60%;
.active {
 position: relative;
 width: 23%;
 height: 100%;

}
.non {
 position: relative;
 width: 23%;
 height: 30%;

 filter: grayscale(100%);
}
}



}

.career {
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    margin-top: 5rem;
    .career-top {

        margin-top: 3rem;
        width: 80%;
         h2 {
             font-size: 2rem;
         }
        p {
            margin-top: 1rem;
            line-height: 1.3;
        }
    }

    .filter {
        h3 {
            margin-top: 1rem;
            font-size: 1.8rem;
        }
        margin-top: 3rem;
        display: flex;
        justify-content:  space-evenly;
        align-items: flex-end;
        width:80%;
        flex-direction: column;
    }

    .career-list {
        width: 80%;
        flex-direction: column;
        align-items: center;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        
        margin-top: 3rem;

        .list {
          margin-bottom: 5rem;
            padding-bottom: 2rem;
            
            display: flex;
        justify-content: space-between;
        flex-direction: column;
        
            border-bottom:1px solid ;
            width: 40%;
            .head {
        
                width: 100%;
                display: flex;
        justify-content: space-between;
        h4 {
                font-size: 1.8rem;
            }

            .btn {
                cursor: pointer;
            }
            }
            .career-list {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                 li {
                     cursor: pointer;
                     color: #FF2E5F;
                     list-style: none;
                     text-transform: uppercase;
                     margin-top: 1rem;
                 }
            }
         
        }

    }

  }
}
@media (max-width: 1281px) {
.set {
    margin-top: 7rem;
    width: 90%;
    height: 50rem;

    display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;

.left{

    display: flex;
justify-content:space-between;
align-items: flex-start;
flex-direction: column;
height: 50%;

width: 100%;
p {
    line-height: 1.3rem;
    width: 100%;
color: ${props => props.theme.colors.grey};
font-style: italic;
   
 }
  ul {
      width: 87%;
      display: flex;
justify-content: center;
align-items: flex-end;
flex-direction: column;

          li:nth-child(2){
          
           color: ${props => props.theme.colors.blue};
          }
      

  }
  .btn {
      display: none;
      width: 100%;
      height: 40%;
   
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      h1 {
          font-size: 4rem;
      }
   
      button {
        background-color: ${props => props.theme.colors.darkPink};
        width: 10rem;
        border:none;
        color:white;
        font-size: 1.2rem;
        height: 3rem;
      }
  }
}


.right{
 
    display: flex;
justify-content: center;
align-items: center;
height: 50%;

width: 100%;
position: relative;
 
}



}

.section2 {
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center ;
    flex-direction: column;
    padding-top: 3rem;
   

    .team-bg {
        width: 100%;
        padding-bottom: 3rem;
height: 30rem;
background-image: url("/aboutus/aboutusBannner.png"); /* The image used */
background-color: #cccccc; /* Used if the image is unavailable */
/* You must set a specified height */
background-position: center; /* Center the image */
background-repeat: no-repeat; /* Do not repeat the image */
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
    }

    .why-join {
        width: ${(props) => props.theme.containerWidth.lg};
        padding-bottom: 3rem;

        h2 {
            font-size: 2rem;
            margin-bottom: 2rem;
        }
         li {
             margin-left: 2rem;
             position: relative;
           list-style: none;
             line-height: 2rem;
             ::after{
                 content: '';
                  background-color: black;
                 width: 0.3rem;
                 height: 0.3rem;
                 position: absolute;
                 left: -4%;
                 top: 1.3rem;
                 border-radius: 50%;
             }
         }
    }

    .outer-color {
        width: 100%;
        display: flex;
        justify-content: center;
        background-color:${(props) => props.theme.colors.darkBlue};
    padding-bottom: 5rem;
    .why-live {
        width: ${(props) => props.theme.containerWidth.lg};
        padding-top: 3rem;

        h2 {
            color:white;
            font-size: 2rem;
            margin-bottom: 2rem;
        }
         li {
            color:white;
             margin-left: 2rem;
             position: relative;
           list-style: none;
             line-height: 3rem;
             ::after{
                 content: '';
                  background-color: white;
                 width: 0.3rem;
                 height: 0.3rem;
                 position: absolute;
                 left: -4%;
                 top: 1.3rem;
                 border-radius: 50%;
             }
         }
    }

}


}


.slider {
    width: 100%;
    height: 40rem;
    background-color: white;
    display: flex;
justify-content: flex-end;
align-items: flex-end;

.left{
    display: flex;
justify-content:space-evenly;
align-items: flex-start;
flex-direction: column;
height: 80%;

width: 30%;
p {  display: flex;
justify-content:space-evenly;
    width: 90%;
color: ${props => props.theme.colors.grey};
font-style: italic;
border-bottom: 0.5px solid ${props => props.theme.colors.grey};;
padding-bottom: 2rem;
   
 }
  ul {
      width: 87%;
      display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
li:nth-child(1){
          
         font-family:'ManropeBold' ;
         }

          li:nth-child(2){
          
           color: ${props => props.theme.colors.grey};
          }
      

  }

  .social {
      width: 100%;
      display: flex;
      justify-content: flex-start;

  }
  .btn {
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      h1 {
          font-size: 4rem;
      }
   
      button {
        background-color: ${props => props.theme.colors.darkPink};
        width: 10rem;
        border:none;
        color:white;
        font-size: 1.2rem;
        height: 3rem;
      }
  }
}


.right{
    display: flex;
justify-content: space-evenly;
align-items: flex-end;
height: 80%;

width: 60%;
.active {
 position: relative;
 width: 23%;
 height: 100%;

}
.non {
 position: relative;
 width: 23%;
 height: 30%;

 filter: grayscale(100%);
}
}



}

.career {
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    margin-top: 5rem;
    .career-top {

        margin-top: 3rem;
        width: 80%;
         h2 {
             font-size: 2rem;
         }
        p {
            margin-top: 1rem;
            line-height: 1.3;
        }
    }

    .filter {
        h3 {
            margin-top: 1rem;
            font-size: 1.8rem;
        }
        margin-top: 3rem;
        display: flex;
        justify-content:  space-evenly;
        align-items: flex-end;
        width:80%;
        flex-direction: column;
    }

    .career-list {
        width: 90%;
        flex-direction: column;
        align-items: center;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        
        margin-top: 3rem;

        .list {
          margin-bottom: 5rem;
            padding-bottom: 2rem;
            
            display: flex;
        justify-content: space-between;
        flex-direction: column;
        
            border-bottom:1px solid ;
            width: 100%;
            .head {
        
                width: 100%;
                display: flex;
        justify-content: space-between;
        h4 {
                font-size: 1.8rem;
            }

            .btn {
                cursor: pointer;
            }
            }
            .career-list {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                 li {
                    cursor: pointer;
                     color: #FF2E5F;
                     list-style: none;
                     text-transform: uppercase;
                     margin-top: 1rem;
                 }
            }
         
        }

    }

  }
}

`;
