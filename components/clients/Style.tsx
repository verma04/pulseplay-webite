import styled from 'styled-components'

export const Section = styled.section`
display:flex;
justify-content:center;
flex-direction: column;
align-items:center;
height: 5rem;
background-color: #fff;
box-shadow: 0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04);

background-color: ${props => props.theme.colors.darkBlue};
width:100%;
height: 100vh;
z-index:100;
@media (min-width: 1025px) {
 
 .flex {
     display:flex;
     justify-content:space-between;

      align-items:flex-end;
    height:80%;
    position: relative;
    width:60%;

    .arrow-left {
      position: absolute;
      display:flex;
justify-content:center;
align-items:center;
height: 100%;
left: -10rem;

    }

    .arrow-right {
      position: absolute;
      display:flex;
      right: -10%;
justify-content:center;
align-items:center;
height: 100%;
z-index: 10000;
cursor: pointer;

    }
   
   
    .flex-left {
      width: 40%;
      display:flex;
     justify-content:center;
     flex-direction: column;
    
     height: 90%;

      align-items:flex-start;
      h2 {
        color:white;
  
      }
      h3 {
        
        color:white;
      }
      .wrapper{
        display:flex;
        position: relative;
     justify-content:flex-end;


      height: 20%;
      width:  20%;
      
      img {
      
        border-radius: 50%;
      }
      }
    
    }

    .flex-right {
      width: 50%;
      display:flex;
     justify-content:center;
     flex-direction: row;
 
     height: 90%;
  
      align-items:center;
       p {
         padding-top: 1rem;
         color: white;
         font-size: 1.1rem;
       }
    


    }
   
   
 }
 .bottom-bar {

   height: 20%;
 
   background-color: #273ee1bf;
   width: 100%;
   display:flex;
     justify-content:center;
  
      align-items:center;
   .team_bar {
    display:flex;
     justify-content:space-between;
  
      align-items:center;
    
  
      width: 90%;
      height: 100%;
      .teamMember {
height: 100%;
        display:flex;
     justify-content:center;
   cursor: pointer;
      align-items:center;
      flex-direction: column;

      span {
        margin-top: 0.5rem;
        font-size: 1.1rem;
        text-transform: uppercase;
        color:white;
      }

      .wrapper{
        display:flex;
        position: relative;
     justify-content:center;

      align-items:center;
      height: 10rem;
      width: 10rem;
  
      flex-direction: column;
      img {
      
      }
      }
     
      .activeWrapper{
        display:flex;
        position: relative;
     justify-content:center;

      align-items:center;
      height: 15rem;
      width: 15rem;
   
      flex-direction: column;
     
      }

      }
   }
    
    }
   
}
@media (min-width: 768px) and (max-width: 1034px) {
  height: 7vh;
background-color: ${props => props.theme.colors.background};
box-shadow: 0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04);
position:fixed;
width:100%;
top:0;
  .flex {
     display:flex;
     justify-content:space-between;
  
      align-items:center;
    height:100%;
    width:100%;
    box-shadow: 0 0 10px #fff;
   
     .left {
  
    width:20%;
    height:100%;
   
   display:flex;
     justify-content:center;
  
      align-items:center;
      width:7%;
    .wrapper {
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
 
  img {
    width:2rem;
  
  }
  i {
    display:none;
  }
    }
    
     }
     .mid {
        width:20%;
    height:100%;
    display:flex;
    justify-content:flex-end;
      align-items:center;
       img {
           width:60%;
       }
       #sm {
         display:none;
       }
     }
     .right {
        width:20%;
    height:100%;
     
    
    display:flex;
     justify-content:flex-end;
  
      align-items:center;
      .name {
        width:80%;
       
        height:100%;
        display:flex;
        justify-content:center;
      align-items:center;
      .dp {
        height: 3rem;
    width: 3rem;
    border-radius: 39%;
      }
      }
   
      img {
        width:1.5rem;
        margin-left:1rem;
        margin-right:1rem;
      }
      
       i{
         font-size:1.5rem;
         margin-right:1rem;
         cursor: pointer;
         position:relative;
         h4{
          position: absolute;
    top: -43%;
    right: -24%;
    border: 1px solid;
    border-radius: 50%;
    padding: 0.2rem;
    background: black;
    color: white;
         }
        
       }
       .far {
        margin-right:0rem;
       }
     }
 }

}
@media (max-width: 600px)  {
  height: 7vh;
  z-index: 1;
background-color: ${props => props.theme.colors.background};
box-shadow: 0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04);
position:fixed;
width:100%;
background-color:black;
top:0;
  .flex {
     display:flex;
     justify-content:space-between;
     
      align-items:center;
    height:100%;
    width:100%;
    box-shadow: 0 0 10px #fff;
   
     .left {
    
    height:100%;
   
   display:flex;
     justify-content:center;
  
      align-items:center;
      width:11%;
      
    .wrapper {
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
 
  img {
    width:2rem;
  display:none;
  }
  i {
    font-size:1.5rem;
  color:white;
  cursor: pointer;
  }
 
    }
    
     }
     .mid {
      width: 39%;
    padding-left: 5%;
    height:90%;
    display:flex;
    justify-content:flex-end;
      align-items:center;
       img {
           width:100%;
       }
       #lg{
    display:none;
  }
     }
     .right {
        width:20%;
    height:100%;
     
    
    display:flex;
     justify-content:flex-end;
  
      align-items:center;
      .name {
        width:80%;
       
        height:100%;
        display:flex;
        display:none;
        justify-content:center;
      align-items:center;
      span {
      display:none;
      }
      }
   
      img {
        width:1.5rem;
        margin-left:1rem;
        margin-right:1rem;
      }
      
       i{
         font-size:1.5rem;
         margin-right:1rem;
         cursor: pointer;
         position:relative;
       color:white;
         h4{
          position: absolute;
    top: -43%;
    right: -24%;
    border: 1px solid;
    border-radius: 50%;
    padding: 0.2rem;
    background: black;
    color: white;
         }
        
       }
       .wrapper {
         display:none;
       }
       .far {
        margin-right:0rem;
        display:none
       }
     }
     .link {
      transition: opacity .4s ease 0s,top 0s ease 0s;
       position:fixed;
       width:100%;
       height:100%;
       top:4rem;
       display:flex;
       justify-content:flex-start;
       align-items:center;
       background-color:black;
       flex-direction:column;
  
       ul {
         height:40%;
         margin-top:10%;
         width:90%;
       
         display:flex;
       justify-content:flex-start;
       align-items:center;
       background-color:black;
       flex-direction:column;
       li {
         color:white;
         height:15%;
         cursor: pointer;
         font-family: 'Raleway', sans-serif;
       }
     }
     }
 }
 
}
`