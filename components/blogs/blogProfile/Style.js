import styled from 'styled-components'
export const Section = styled.section`
@media (min-width: 1025px){
margin-bottom: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .flex {
        width: 80%;
        

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .flex-1 {
        margin-top: 5rem;
        width: 70%;
        display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
        font-size: 3rem;
    }
     p {
         margin-bottom: 0.5rem;
         margin-top: 0.5rem;
         width: 100%;
         display: flex;
         justify-content: center;
         flex-direction: column;
         h2 {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    line-height: 4rem;
}
     }
    }

    .flex-2 {
        width: 27%;
        display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    margin-top: 5rem;
    flex-direction: column;
  
    position: sticky;
  top: 0;
    .news-list {

        margin-bottom: 2rem;
        width: 100%;
        height: 18rem;
    
        position: relative;
        cursor: pointer;
         p {
             position: absolute;
             bottom: 3%;
             color:white;
              width:90%;
              margin-left: 5%;
         }

    }
      



    }
    

    }


}

@media (max-width:1035px){


    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .flex {
        width: 100%;
        

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    
    h1 {
        font-size: 2rem;
    }

    .flex-1 {
        margin-top: 5rem;
        width: 90%;
        display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
     p {
         margin-bottom: 0.5rem;
         margin-top: 0.5rem;
         width: 100%;
         display: flex;
         justify-content: center;
         flex-direction: column;
         h2 {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    line-height: 2rem;
}
     }
    }

    .flex-2 {
        width: 90%;
        display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    margin-top: 5rem;
    flex-direction: column;
  
    position: sticky;
  top: 0;
    .news-list {

        margin-bottom: 2rem;
        width: 100%;
        height: 18rem;
    
        position: relative;
        cursor: pointer;
         p {
             position: absolute;
             bottom: 3%;
             color:white;
              width:90%;
              margin-left: 5%;
         }

    }
      



    }
    

    }
   
    }
`