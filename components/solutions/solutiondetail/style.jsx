import styled from 'styled-components';
export const Section = styled.section`
margin-bottom: 5rem;
@media (min-width: 1281px) {  
.block-pulseplay{
    
    position: relative;
    width: 100%;
    .container{
  
        width: 80%;
        margin: 0 auto;
        .blocks-pulseplay{
            display: flex;
            margin-top:-4rem;
            .pulse-block{
                width: 20%;
               background: #fff;
               margin: 1rem;
               padding: 5em 2rem;
               box-shadow: 0px 4px 56px -21px rgba(0, 0, 0, 0.25);
               display: flex;
               justify-content: center;
               align-items: center;
               flex-direction: column;
               .pulse-icon{
                   width:3rem;
                   height:3rem;
                   position: relative;
               }
               h2{ 
                   margin-top: 2rem;
                   font-size: 1.5rem;
                   text-align: center;
                   font-family: "manropeBold";
                   margin-bottom: 1rem;
                   padding: 0 1rem;
                   
               }
               p{
                   text-align: center;
                   font-family: "manropeRegular";
                   padding: 0 1.5rem;
               }
            }
        }

  
    }
}

.section-content {
  width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.section-two {
    width: 80%;
    display: flex;
    justify-content: space-between;
    
    margin-bottom: 5rem;
        margin-top: 5rem;
    .section-two-left {
       
        width: 50%;
        display: flex;
justify-content: flex-start;
align-items: center;
.wrapper {
    width: 80%;
   min-height: 30rem;
    position: relative;
  
}
    }
    .section-two-right {
        width: 50%;
        display: flex;
        justify-content:flex-start;
        flex-direction: column;
        align-items: flex-start;
        h2 {
        font-size: 2rem;
    }
    li {
        margin-top: 1rem;
    }
    }
}

.section-para {

    width: 80%;

    .para {
        p {

 
            width: 100%;
            line-height: 32.78px;
        }
        width: 100%;
    }
}
}
}


@media (max-width: 1281px) {  
.block-pulseplay{
   
    position: relative;
    width: 100%;
    .container{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-direction: column;
        .blocks-pulseplay{
        
            display: flex;
            margin-top:2rem;
            display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 60%;
            .pulse-block{
                width: 100%;
             
               background: #fff;
               margin: 1rem;
               padding: 5em 2rem;
               box-shadow: 0px 4px 56px -21px rgba(0, 0, 0, 0.25);
               display: flex;
               justify-content: center;
               align-items: center;
               flex-direction: column;
               .pulse-icon{
                   width:3rem;
                   height:3rem;
                   position: relative;
               }
               h2{ 
                   margin-top: 2rem;
                   font-size: 1.5rem;
                   text-align: center;
                   font-family: "manropeBold";
                   margin-bottom: 1rem;
                   padding: 0 1rem;
                   
               }
               p{
                   text-align: center;
                   font-family: "manropeRegular";
                   padding: 0 1.5rem;
               }
            }
        }

  
    }
}

.section-content {
  width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.section-two {
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items:center;
    
    margin-bottom: 5rem;
        margin-top: 5rem;
    .section-two-left {
       
        width: 100%;
        display: flex;
justify-content: center;
align-items: center;

.wrapper {
    width: 100%;
   min-height: 30rem;
    position: relative;
  
}
    }
    .section-two-right {
        margin-top: 3rem;
       
        width: 90%;
        display: flex;
        justify-content:center;
        flex-direction: column;
        align-items: flex-start;
        h2 {
        font-size: 2rem;
    }
    li {
        margin-top: 1rem;
    }
    }
}

.section-para {
  
    width: 90%;

    .para {
        p {

 
            width: 100%;
            line-height: 32.78px;
        }
        width: 100%;
    }
}
}
}




  
`   