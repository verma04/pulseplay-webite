import styled from 'styled-components'

export const Section = styled.section`

background-color: #EF6CFF;
scroll-snap-align: start;
min-width: 100vw;
height: calc(100vh - var(--scrollbar-height));
  min-width: 100vw;
  scroll-snap-align: start;
  font-size: 3.5ch;
  overflow-y: hidden;

@media (min-width: 1025px) {
display: flex;
justify-content: center;
align-items: center;



.flex-1 {
  width: 100vw;
height: 100vh;
  
    display: flex;
    justify-content: center;
    align-items:flex-start;
    flex-direction: column;
    width: 100vw;

    scroll-snap-align: center;
    .block {
     
      height: 50vh;
      width: 100%;
       border-bottom:  1px solid;
      display: flex;
    justify-content: center;
    position: relative;
      .data {
     
        z-index: 20;
        width: 90%;
        height: 100%;
       cursor: pointer;
        display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 5rem;
      position: relative;
      font-family: SaolDisplay-Regular;
      padding-left: 1rem;
      margin-left: 1rem;
      
      li {
        list-style: none;
        position: absolute;
        font-size: 1.5rem;
       left: -1rem;
        li {
          font-size: 1rem;
          list-style: none;
        }
      }
    }
     p {
       color: white;
     }

     :hover{
       h2 {
         color: white;
       }
     }
      }
      
      .img-ab {
        position: absolute;
        height: 100%;
       width: 100%;
       right: 10%;

   

      }
    }
  }


    

  


}


@media (max-width: 1025px) {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-width: 100vw;


.flex-1 {
  
    display: flex;
    justify-content: center;
    align-items:flex-start;
    flex-direction: column;
    width: 100vw;

    scroll-snap-align: center;
    .block {
      height: 25vh;
      
      width: 100%;
       border:  1px solid;
      display: flex;
    justify-content: center;
    position: relative;


      .data {
     
        margin-top: 3rem;
        width: 80%;
        height: 100%;
       cursor: pointer;
        display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    h2 {
      font-size: 3rem;
      position: relative;
      font-family: SaolDisplay-Regular;
      padding-left: 1rem;
      
      li {
        list-style: none;
        position: absolute;
        font-size: 1.2rem;
        left: -1rem;
  
        li {
          margin-left: -2rem;
          font-size: 1rem;
          list-style: none;
        }
      }
    }
     p {
      margin-left: 1rem;
      font-size: 1.5rem;
       color: white;
     }

     :hover{
       h2 {
         color: white;
       }
     }
      }
    }
  }

 

  


}


`