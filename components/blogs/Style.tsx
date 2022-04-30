import styled from 'styled-components'
export const Section = styled.section`
@media (min-width: 1025px){
.blog-btn-container{
    position: relative;
    margin-top: 5rem;
    .container{
        width: 80%;
        margin: 0 auto;
        .btn-flex{
            display: flex;
            justify-content:space-between;
            .flex-btn{
            
                font-size: 1rem;
                font-family: "manropeRegular";
                cursor: pointer;
                padding: 1rem 1rem;
                border: none;
               background-color: #FFCC06;
           
            }
        }
    }
}
.blogs-container{
    position: relative;
    margin-top: 5rem;
    width: 100%;
    .container{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content:space-between;
        .blogs-content{
            width: 60%;
            position: relative;
            height: 20rem;
            h3{ 
                font-family: "manropeBold";
                font-size: 2rem;
                position: relative;
            }
            position: relative;
        cursor: pointer;
         p {
             position: absolute;
             bottom: 10%;
             font-family: 'ManropeBold';
             color:white;
              width:90%;
              margin-left: 5%;
         }
        }
        .sidebar{
            button{
                padding: 0.4rem 2.5rem;
            }
            h3{
                margin-top:1rem;
                border-bottom: 2px solid #1EBBFD;
                line-height:2em;
                font-size: 1.5rem;
            }
            .sidebar-image{
                position: relative;
            }
            .cta-links{
                h4{
                    margin-top:1rem;
                }
              button{
                  margin: 0.2rem;
                  background-color: #FFAB4D;
                  border: 0;
                  margin-top: 1rem;
                  font-family: "manropeRegular";
                  font-size: 1rem;
                  cursor: pointer;
                 
              }
              .green{
                      background-color:#00A551;
;
                  }
            }
        }
 
    }
}
}

@media (max-width: 768px){
    .blog-btn-container{
        position: relative;
        margin-top: 5rem;
        .container{
            width: 80%;
            margin: 0 auto;
            .btn-flex{
                display: block;
                justify-content:space-between;
                .flex-btn{
                    font-size: 1rem;
                    font-family: "manropeRegular";
                    cursor: pointer;
                    padding: 1.5rem 2rem;
                    border: none;
                   background-color: #FFCC06;
                   width: 100%;
                   margin-top: 1rem;
                }
            }
        }
    }
    .blogs-container{
        position: relative;
        margin-top: 5rem;
        width: 100%;
        .container{
            width: 80%;
            margin: 0 auto;
            display: block;
            justify-content:space-between;
            .blogs-content{
                width: 100%;
                position: relative;
                height: 40vh;
                h3{ 
                    font-family: "manropeBold";
                    font-size: 2rem;
                    position: relative;
                }
                position: relative;
        cursor: pointer;
         p {
             position: absolute;
             bottom: 10%;
             font-family: 'ManropeBold';
             color:white;
              width:90%;
              margin-left: 5%;
         }
            }
            .sidebar{
                button{
                    padding: 0.4rem 2.5rem;
                    margin-top: 1rem;
                }
                h3{
                    margin-top:1rem;
                    border-bottom: 2px solid #1EBBFD;
                    line-height:2em;
                    font-size: 1.5rem;
                }
                .sidebar-image{
                    position: relative;
                }
            }
     
        }
    }
    }
`