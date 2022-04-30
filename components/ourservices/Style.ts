import styled from "styled-components";

export const Section = styled.section`
@media (min-width: 1281px) {

.video-bg {
    position: relative;
    video {
  width: 100%;
  height: 800px;
  object-fit: cover;
  
}
.content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  li {
      width: 90%;
      list-style: none;
  }
h1 {
font-size: 6rem;
line-height: 5.9rem;
color:white
}
}
}


.services {
  margin-bottom: 5rem;
    .view {
          position: absolute;
          z-index: 10;
          bottom: 5%;
         right:5%;
         cursor: pointer;
           p {
            color: ${(props) => props.theme.colors.white};
            border-bottom: 1px solid;
           }
         
      }
     position: relative;
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;

    flex-direction: column;
    align-items: center;
    .heading {
      width: ${(props) => props.theme.containerWidth.lg};
      display: flex;
      justify-content: flex-start;
      position: relative;
   
      align-items: center;
      h2 {
        text-align: left;
      font-size: 2rem;
      color: ${(props) => props.theme.colors.blue};
      position: relative;
        ::after {
          content: "";
          position: absolute;
          width: 110%;
          height: 15%;
          background-color: ${(props) => props.theme.colors.lightBlue};
          bottom: -50%;
          left: -4%;
        }
      }
    }

    .services-list {
       position: relative;
        margin-top: 2rem;
      width: 100%;
 
   
      display: flex;
      justify-content: center;

      flex-direction: column;
      align-items: center;

      .services-detials {
        width: ${(props) => props.theme.containerWidth.lg};
     
        margin-top: 5rem;
        display: flex;
        justify-content: center;

        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        .list {
         
          width: 23%;
    
margin-top: 3rem;
          height: 17rem;
          display: flex;
          
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          cursor: pointer;
position: relative;

          .head {
            
            display: flex;
            justify-content: center;
            
            width: 95%;
            height: 100%;
            position: relative;
            .wrapper {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            #spinner {
                z-index: 100;
                position: absolute;
                top: -20%;
            }

            h3 {
              color: white;
              margin-bottom: 1rem;
            }
           
          }

            p {
       
               margin-top: 2rem;
              

             }

         
        }
      
      }
    }
  }
}

@media (max-width: 1281px) { 

  .video-bg {
    position: relative;
    video {
  width: 100%;
  height: 30rem;
  object-fit: cover;
  
}
.content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  li {
      width: 90%;
      list-style: none;
  }
h1 {
font-size: 3rem;
line-height: 3.5rem;
color:white
}
}
}


.services {
    .view {
          position: absolute;
          z-index: 10;
          bottom: 5%;
         right:5%;
         cursor: pointer;
           p {
            color: ${(props) => props.theme.colors.white};
            border-bottom: 1px solid;
           }
         
      }
     position: relative;
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;

    flex-direction: column;
    align-items: center;
    .heading {
      width: ${(props) => props.theme.containerWidth.lg};
      display: flex;
      justify-content: flex-start;
      position: relative;
   
      align-items: center;
      h2 {
        text-align: left;
      font-size: 2rem;
      color: ${(props) => props.theme.colors.blue};
      position: relative;
        ::after {
          content: "";
          position: absolute;
          width: 110%;
          height: 15%;
          background-color: ${(props) => props.theme.colors.lightBlue};
          bottom: -50%;
          left: -4%;
        }
      }
    }

    .services-list {
       position: relative;
        margin-top: 2rem;
      width: 100%;
 
   
      display: flex;
      justify-content: center;

      flex-direction: column;
      align-items: center;

      .services-detials {
        width: ${(props) => props.theme.containerWidth.lg};
     

        display: flex;
        justify-content: space-between;

        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        .list {
          width: 49%;

          height: 17rem;
          display: flex;
          
          justify-content: center;
          align-items: center;
          flex-direction: column;
          cursor: pointer;

        margin-bottom: 2rem;
          .head {
          
            display: flex;
            justify-content: center;
            
            width: 95%;
            height: 100%;
            position: relative;
            .wrapper {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            #spinner {
               
                top: 10%;
                position: absolute;
            }

            h3 {
              color: white;
              margin-bottom: 1rem;
            }
          }
           p {
    
             text-align: center;
           }

         
        }
      
      }
    }
  }
}




`;
