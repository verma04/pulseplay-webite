import styled from "styled-components";
export const Section = styled.section`

width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

flex-direction: column;
@media (min-width: 1281px) {
.head {
    margin-bottom: 3rem;
    display: flex;
justify-content: center;
align-items: flex-start;

flex-direction: column;

    width: 100%;
    span {
        margin-bottom: 1rem;
        text-transform: uppercase;
    }
    p {
        font-size: 2rem;
        line-height: 3rem;
    }
}

.teamView {
    margin-top: 4rem;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;


    .team {
        width: 23%;
        height: 20rem;
        margin-bottom: 2rem;
        position: relative;
    }
    
}

.bottom-banner {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    flex-direction: column;
    h2 {
   font-size: 4rem;
   line-height: 4.5rem;
  text-align: center;
    }
     p{
         margin-top: 1.5rem;
     }
    h3 {
        margin-top:2rem;
        font-size: 3rem;
        span {
            color: ${(props) => props.theme.colors.green};
        }
    }
}

}

@media (max-width: 1281px) {
    width: 100%;
    
height: 100%;
.head {
 
    width: 100% !;
    margin-bottom: 3rem;
    display: flex;
justify-content: center;
align-items:flex-start;

flex-direction: column;

 
    span {
        margin-bottom: 1rem;
        text-transform: uppercase;
    }
    p {
        width: 95%;
        font-size: 2rem;
        line-height: 3rem;
    }
}

.teamView {
    margin-top: 4rem;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;


    .team {
        width: 48%;
        height: 20rem;
        margin-bottom: 2rem;
        position: relative;
        
    }
    
}

.bottom-banner {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    flex-direction: column;
    h2 {
        
   font-size: 2rem;
   line-height: 2.5rem;
  text-align: center;
    }
     p{
         text-align: center;
         margin-top: 1.5rem;
     }
    h3 {
        text-align: center;
        margin-top:2rem;
        font-size: 3rem;
        span {
            color: ${(props) => props.theme.colors.green};
        }
    }
}

}


`;
