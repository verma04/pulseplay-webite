import styled from 'styled-components';
export const Section = styled.section`
.banner {
    width: 100%;
    background-image: linear-gradient(
    rgba(0,0,0,0.3),
    rgba(0,0,0,0.3)), url('/servicedetailbanner.png');
   height: 100vh;
   background-repeat: no-repeat;
   width: 100%;
   background-size: cover;
   position: relative;
   top: 0;
   .container{
       width: 80%;
       margin: 0 auto;
       .hero-text{  
       h1{
        font-size:5rem;
        font-family: "manrope";
        font-weight: bold;
        color: #fff;
        top: 50%;
        position: absolute;
        line-height:1.2em;
    }
    .services{
        position: relative;
       
        
        .block-services{
            display: flex;
        }
    }
   }
    }
}  
.our-services{
    margin-top: 10rem;
    width: 100%;
    position: relative;
    .container{
        width: 80%;
        margin: 0 auto;
        position: relative;
        h1 { 
            position: relative;
            border-bottom: 5px solid #1EBBFD;
            line-height: 1.5em;
            width: 18rem;
            font-size: 3rem; 
        }
        .services{
            position: relative;
            .block-services{
                position: relative; 
                display: flex;
                 justify-content: space-around;
                .service-detail{
                    position: relative;
                    display: block;
                    height: 20vh;
                    margin-top: 3rem;
                    width: 10rem;
                    h1{
                    font-size: 1rem;
                    border: none;
                    position: relative;
                    text-align: center;
                    margin-top: 12rem;
                    text-align: justify;
                    font-family: "manrope";
                }
                }
            
            }
            .three-services{
                justify-content:justify;
                display: flex;
                position: relative;
                .service-detail{
                    position: relative;
                    display: block;
                    height: 20vh;
                    width: 10rem;
                    margin: 3rem;
                    h1{
                    font-size: 1rem;
                    border: none;
                    position: relative;
                    text-align: center;
                    margin-top: 12rem;
                    text-align: justify;
                    font-family: "manropeRegular";
                }
            }
        
        }

    }
    
} 
}
.four-pillers{
    margin-top:5rem;
    width:100%;
    .container{
        width:80%;
        margin: 0 auto;
        .pillers{
            padding: 4rem 0;
            border-top: 5px solid #000;
            /* border-bottom: 5px solid #000; */
            width:100%;
            display: flex;
            justify-content:space-around;
            .num-tilte{
                width: 33%;
                p{
                    font-size: 1rem;
                }
                h1{
                    font-size:5rem;
                    font-family: "ManropeBold";
                    
                }
                .dotted{
                    stroke:#000ece;
      stroke-width:3px;
      stroke-linecap:round;
      stroke-dasharray:1,1;
      fill:none;


                }

                .numsr{
                    font-size: 19rem;
                    font-weight: 900    ;
                }
                .text-piller{
                    color: #ED297B;
                    font-family: "manropeRegular";
                    font-size: 4rem;
                    font-weight: 500;
                }
                .design{
                    color: #00A551;
                }
                .build{
                    color: #194B9B
                }
                .perform{
                color: #FFC006;
                }
                p{
                    margin-top:1rem; 
                    line-height:2em;
                    font-family: "manropeRegular";
                }
                
            }
        }
    }
}
.our-process{
    margin-top: 10rem;
    width: 100%;
    .container{
        width: 80%;
        margin: 0 auto;
        .process-detail{
            display: flex;
            justify-content: space-around;
            .process-left-image{
                position: relative;
                 width: 30rem;
                 height: 50vh;
             
            }
            .process-right-content{
                width: 50%;
                p{
                    color: #273EE1;
                    font-size: 1rem;
                    font-family: "manropeRegular";
                }
                .company-commit{
                    position: relative; 
                    margin-top: 6rem;
                    display: flex;
                    width: 100%;

                    justify-content:space-between;
                    .commit{
                        position: relative;
                        width: 30%;
                      
                        h3{
                            font-family: "manropeBold";
                            font-size: 1.5rem;
                            margin-bottom: 1rem ;
                        }
                        p{
                            color: #000;
                            font-family: "manropeRegular";
                        }
                    }
                }
            }
        }
    }
}
`