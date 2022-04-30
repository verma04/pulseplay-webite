 import styled from 'styled-components'

export const Section = styled.section`
display:flex;
justify-content:center;
align-items:center;

flex-direction: column;
background-color: transparent;


left: 0;
width:100%;
top:0;
z-index:100;
button {
    cursor: pointer;
}

@media (min-width: 1281px) {
  
.banner {
    height: 40rem;
    width: 100%;

position: relative;
.text {
    width: 100%;
    height: 100%;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
.head {
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
 
    span {
        
        color: #FF0000;
    }
    h1 {
        margin-top: 1rem;
        color: white;
    }
    p {
        margin-top: 3rem;
        font-size: 2rem;
        line-height: 2.5rem;
        color:white;
        align-items: center;
        text-align: center;
         width:50%;
    }
}

}
}

.form {
    margin-bottom: 3rem;
    width: 80%;


    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    input {
        width: 45%;
        height: 3rem;
        margin-top: 2rem;
        border: none;
        border-bottom: 1px solid;
    }

    select {
    
        width: 45%;
        height: 3rem;
        margin-top: 2rem;
        border: none;
        border-bottom: 1px solid;
    
    }

    .btn {
        
        width: 100%;
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        
        button {
            background-color: #FF0000;
            color: white;
            border: none;
            padding: 1rem;
            font-size: 1.2rem;
            width:7rem;
        }
    }

    textarea {
    
    width: 100%;
    height: 3rem;
    margin-top: 2rem;
    height: 3rem;
    border: none;
        border-bottom: 1px solid;

}

}


}

@media (max-width: 1281px) {
  
  .banner {
      height: 40rem;
      width: 100%;
  
  position: relative;
  .text {
      width: 100%;
      height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  .head {
      width: 85%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   
      span {
          
          color: #FF0000;
      }
      h1 {
          font-size: 2rem;
          margin-top: 1rem;
          color: white;
      }
      p {
          margin-top: 3rem;
          font-size: 1.5rem;
          line-height: 2.5rem;
          color:white;
          align-items: center;
          text-align: center;
           width:90%;
      }
  }
  
  }
  }
  
  .form {
      margin-bottom: 3rem;
      width: 80%;
  
  
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      input {
          width: 45%;
          height: 3rem;
          margin-top: 2rem;
          border: none;
          border-bottom: 1px solid;
      }
  
      select {
      
          width: 45%;
          height: 3rem;
          margin-top: 2rem;
          border: none;
          border-bottom: 1px solid;
      
      }
  
      .btn {
          
          width: 100%;
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          
          button {
              background-color: #FF0000;
              color: white;
              border: none;
              padding: 1rem;
              font-size: 1.2rem;
              width:7rem;
          }
      }
  
      textarea {
      
      width: 100%;
      height: 3rem;
      margin-top: 2rem;
      height: 3rem;
      border: none;
          border-bottom: 1px solid;
  
  }
  
  }
  
  
  }





`