import styled from 'styled-components';
export const Section = styled.section`
.container{
  width:80%;
    margin: 0 auto;
    position: relative;
    .career-listing{
       margin-top: 10rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      
      .banner-content{
        width: 50%;
       
        .content-wrapper {
          #career {
          color: #FF2E5F;
          font-size: 20px;
          font-family: 'manropeRegular';
        }
          h1 {
         font-size: 2.5rem;
         margin-bottom: 2rem;
         margin-top: 1rem;
          }
          h5 {
         font-size: 20px;
         font-family: 'manropeRegular';
          line-height: 2em;
        
          span {
            font-weight: bold;
          } 
        }
          button.btn-apply {
           background-color: #FF2E5F;
         outline: none;
      border: none;
      cursor: pointer;
      margin-top: 2rem;
      color: #FFFFFF;
      font-family: 'ManropeRegular';
      font-size: 1.5rem;
      padding: 15px;
}
          }
        
    }
  }
}
.listing-container{
    margin-top: 15rem;

    .job-listing {
      margin-top: 3rem;
        h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        p { 
          font-family: 'ManropeRegular';
          margin-top: 2rem;
          font-size: 20px;
        }
    }
  }
  .btn-container{
    margin-top: 5rem;
    width: 70%;
    justify-content: space-between;
    display: flex;
    p{
      font-family: 'ManropeRegular';
      font-size: 1.5rem;
      margin-top: 2.5rem;
    }
}
    .btn-apply{
      background-color: #FF2E5F;
         outline: none;
      border: none;
      cursor: pointer;
      margin-top: 2rem;
      color: #FFFFFF;
      font-family: 'ManropeRegular';
      font-size: 1.5rem;
      padding: 20px 28px;
    }
    .green{
      background-color: #009468;
;
    }
  }
  .all-jobs{
    margin-top: 3rem;
    background: transparent;
    padding: 15px;
    outline: none;
    font-size: 1.5rem;
    border: 2px solid #FF2E5F;
    cursor: pointer;
  
}   
.banner-block {
    position: relative;
    width: 50%;
    .banner-image{
     height: 70vh;
     width: 100%;
     position: relative;
    }
}
.about-pulseplay{

  display: block;
  margin: 0 auto;
  width: 100%;
  margin-top: -5rem;
  margin-bottom: 5rem ;
  position: relative;

  .pulseplay-content{
    padding: 5rem 0;
    width: 80%;
    background-color: #0070E2;

    margin: 0 auto;
    padding-bottom: 2 rem;
    h2{
      padding: 0 3.5rem 0 3.5rem;
      color: #fff;
      font-size: 2.5rem;
    
    }
    p{
      color: #fff;
      padding: 0 3.5rem 0 3.5rem;
      margin-top: 2.5rem;
      font-family: 'manropeRegular';
      font-size: 20px;
    }
  
}
.slide-section{
  margin-top: 10rem;
  h1{
    font-size:4rem;
  }
}

`
