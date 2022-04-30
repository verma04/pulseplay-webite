import styled from 'styled-components'

export const Section = styled.section`


    @media  (min-width: 1266px) {
 .flex {
    display:flex;
justify-content:flex-start;
flex-direction: column;
align-items:center;
width: 100%;
padding-top: 2rem;
background-color: #0AC3FF;
min-height: 100vh;

     display:flex;
     justify-content:flex-start;
     align-items:center;
     flex-direction: column;



    position: relative;


    .filter {
        
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
margin-top: 5rem;
        .filter-left {
            display: flex;
            justify-content: center;
            li {
                list-style: none;
                margin-right: 1rem;
            
                font-size: 1.2rem;
            }
            #active {
                color: red;
            }

        }
        .filter-right{
            font-size: 1.2rem;
        }
    }
    

    .client-list {
        width: 80%;
 
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;

    .list {
        margin-bottom: 3rem;
padding-bottom: 3rem;
        width: 47%;
        border-bottom: 1px solid;
        display: flex;
        justify-content:space-evenly;
        align-items: flex-start;
        flex-direction: column;

        position: relative;
    cursor: pointer;
        h2 {
            font-size: 2.5rem;
            color: white;
            
            line-height: 3rem;
        }
         p{
            
             line-height: 2em;
         }

        .arrow {
            position: absolute;
            right: 0%;
            bottom: 10%;
        }

        .play-icon {
            position: absolute;
            right: 0%;
            height: 10rem;
            width: 10rem;
        }
    }

    }

 
    .slide {
        width: 80%;
        background-color: #FFBA06;
        display: flex;
        justify-content: center;
        align-items: center;
        .carousel-status {
    position: absolute;
    bottom: 10%;
    right: 0;
    padding: 5px;
    font-size: 10px;
    text-shadow: 1px 1px 1px rgb(0 0 0 / 90%);
    color: #fff;
}
        .set {
            width: 100%;
            height: 40rem;
        }
          .carousel-root {
              width: 100%;

        }
        .carousel .thumbs {
   
    display: none;

    }

    }

   
   
 
   
 }

}

@media (max-width:  1266px)  {
  .flex {
    display:flex;
justify-content:flex-start;
flex-direction: column;
align-items:center;
width: 100%;

background-color: #0AC3FF;
min-height: 100vh;

     display:flex;
     justify-content:flex-start;
     align-items:center;
     flex-direction: column;



    position: relative;


    .filter {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
margin-top: 5rem;
        .filter-left {
            display: flex;
            justify-content: center;
            li {
                list-style: none;
                margin-right: 1rem;
            
                font-size: 1.2rem;
            }
            #active {
                color: red;
            }

        }
        .filter-right{
            font-size: 1.2rem;
        }
    }
    

    .client-list {
        width: 90%;
 
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;

    .list {
        margin-bottom: 2rem;
   padding-bottom: 2rem;
        width: 90%;
        border-bottom: 1px solid;
        display: flex;
        justify-content:space-evenly;
        align-items: flex-start;
        flex-direction: column;

        position: relative;
    cursor: pointer;
        h2 {
            font-size: 1.5rem;
            color: white;
            
            line-height: 1.5rem;
        }
         p{
            
             line-height: 2em;
         }

        .arrow {
            position: absolute;
            right: 0%;
            bottom: 10%;
        }

        .play-icon {
            position: absolute;
            right: 0%;
            height: 4rem;
            width: 4rem;
        }
    }

    }

 
    .slide {
        width: 80%;
        background-color: #FFBA06;
        display: flex;
        justify-content: center;
        align-items: center;
        .carousel-status {
    position: absolute;
    bottom: 10%;
    right: 0;
    padding: 5px;
    font-size: 10px;
    text-shadow: 1px 1px 1px rgb(0 0 0 / 90%);
    color: #fff;
}
        .set {
            width: 100%;
            height: 40rem;
        }
          .carousel-root {
              width: 100%;

        }
        .carousel .thumbs {
   
    display: none;

    }

    }

   
   
 
   
 }
 
}




`