import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
   height: 7rem;
  background-color: transparent;
  a {
    color: black;
    text-decoration: none;
    cursor: pointer !important;   
  }

  position: fixed;
  left: 0;
  width: 100%;
  top: 0;
  z-index: 1000;
  @media (min-width: 1025px) {
    .flex {
      display: flex;
      justify-content: space-between;

      align-items: center;
      height: 100%;
      width: 90%;
      z-index: 100;

      .left {
        width: 20%;
        height: 100%;

        display: flex;
        justify-content: flex-start;

        align-items: center;

        .wrapper {
          
          cursor: pointer;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: relative;
          width: 90%;
          height: 70%;

        
          i {
            display: none;
          }
        }
      }
      .mid {
        width: 50%;
        height: 90%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .list {
          height: 100%;

          width: 10%;
          display: flex;
          justify-content: center;
          align-items: center;

          a {
          
    cursor: pointer !important;   
  
            height: 100%;
            border-top: 3px solid ${(props) => props.theme.colors.blue};
            list-style: none;

            flex-direction: column;
          }
        }
      }
      .right {
        width: 25%;
        height: 100%;

        display: flex;
        justify-content: flex-end;

        align-items: center;
        .btn {
          background: transparent;
          font-family: "Visa-Regular";
          border: none;
        }
      }
    }

    .dropDown {
      z-index: 10;
      top: 100vh;
      width: 100%;
      bottom: 0;
      height: 100%;
      position: fixed;
      background-color: white;
      display: flex;
      justify-content: center;

      align-items: center;
      .drop-parnet {
        width: 90%;
        display: flex;
        justify-content: center;
        height: 100%;

        .hori-line {
          position: absolute;
          height: 0.3%;
          width: 100%;
          background-color: grey;
          left: 0%;
          top: 6rem;
        }

        align-items: center;
        .dropdownLeft {
          .veri-line {
            position: absolute;
            right: 0%;
            top: 10vh;
            height: 90%;
            width: 0.3%;
            background-color: grey;
          }

          width: 50%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          position: relative;

          ul {
            width: 70%;
            height: 75%;

            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
            flex-direction: column;

            a {
              cursor: pointer;
              list-style: none;
              font-size: 2.2rem;
              position: relative;
              text-transform: capitalize;

              width: 100%;
              .index {
                position: absolute;
                font-size: 1rem;
                left: -6%;
                bottom: 0;
              }
            }
            #active {
              color: #164899;
            }
          }
        }

        .dropdownRight {
          margin-top: 1.5rem;
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .main {
            width: 90%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            .wrapper {
              display: flex;
              align-items: flex-start;
              justify-content: flex-start;
              flex-direction: column;
              width: 10rem;
              margin-bottom: 2rem;
              height: 4rem;
              position: relative;
            }
            h2 {
              font-size: 4rem;
            }
          }

          .dropdownRight-container {
            width: 100%;
            height: 75%;
            overflow-y: scroll;
            .list {
              display: flex;
              justify-content: space-around;
              align-items: center;
              width: 70%;

              padding: 1rem;

              ul {
                width: 70%;
                display: flex;
                height: 100%;
                justify-content: flex-start;
                justify-content: space-evenly;
                flex-direction: column;
                li:nth-child(1) {
                  margin-bottom: 0.3rem;
                  font-size: 1rem;
                }
                #grey {
                  font-size: 0.7rem;
                }
              }
            }

            .list:hover {
              background-color: rgba(233, 232, 232, 0.3);
            }
          }
        }
      }
    }
  }

  @media (max-width: 1025px) {
    height: 5rem;
    .flex {
      display: flex;
      justify-content: space-between;

      align-items: center;
      height: 100%;
      width: 90%;
      z-index: 100;

      .left {
        width: 100%;
        height: 100%;
    
        display: flex;
        justify-content: flex-start;

        align-items: center;

        .wrapper {
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: relative;
          width: 80%;
          height: 100%;

          img {
            width: 2rem;
          }
          i {
            display: none;
          }
        }
      }
      .mid {
        width: 50%;
        height: 90%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .list {
          height: 100%;

          width: 10%;
          display: flex;
          justify-content: center;
          align-items: center;

          a {
            height: 100%;
            border-top: 3px solid ${(props) => props.theme.colors.blue};
            list-style: none;

            flex-direction: column;
          }
        }
      }
      .right {
        width: 25%;
        height: 100%;

        display: flex;
        justify-content: flex-end;

        align-items: center;
        .btn {
          background: transparent;
          font-family: "Visa-Regular";
          border: none;
        }
      }
    }

    .dropDown {
      z-index: 10;
      top: 100vh;
      width: 100%;
      bottom: 0;
      height: 100%;
      position: fixed;
      background-color: white;
      display: flex;
      justify-content: center;

      align-items: center;
      .drop-parnet {
        width: 90%;
        display: flex;
        justify-content: center;
        height: 100%;

        .hori-line {
          position: absolute;
          height: 0.3%;
          width: 100%;
          background-color: grey;
          left: 0%;
          top: 10vh;
        }

        align-items: center;
        .dropdownLeft {
 
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          position: relative;

          ul {
            width: 100%;
            height: 75%;
 
            display: flex;
            justify-content: space-evenly;
            align-items:center;
            flex-direction: column;
           

            a {
              
              cursor: pointer;
              list-style: none;
              font-size: 2.2rem;
              position: relative;
              text-transform: capitalize;
     margin-left: 3rem;
              width: 100%;
              .index {
                position: absolute;
                font-size: 1rem;
                
    left: -3%;

            bottom: -10px;
              }
            }
            #active {
              color: #164899;
            }
          }
        }

        .dropdownRight {
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .main {
            width: 90%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            .wrapper {
              display: flex;
              align-items: flex-start;
              justify-content: flex-start;
              flex-direction: column;
              width: 10rem;
              margin-bottom: 2rem;
              height: 4rem;
              position: relative;
            }
            h2 {
              font-size: 4rem;
            }
          }

          .dropdownRight-container {
            width: 100%;
            height: 75%;
            .list {
              display: flex;
              justify-content: space-around;
              align-items: center;
              width: 70%;

              padding: 1rem;

              ul {
                width: 70%;
                display: flex;
                height: 100%;
                justify-content: flex-start;
                justify-content: space-evenly;
                flex-direction: column;
                li:nth-child(1) {
                  margin-bottom: 0.3rem;
                  font-size: 1rem;
                }
                #grey {
                  font-size: 0.7rem;
                }
              }
            }

            .list:hover {
              background-color: rgba(233, 232, 232, 0.3);
            }
          }
        }
      }
    }
  }
`;
export const Section = styled.section`

a {
    color: white;
    text-decoration: none;
  }

  a {
    cursor: pointer;
  }
@media (min-width: 1025px) {
  .footer{

    width:100%;
    background-color:#000000;
    position:relative;
    padding: 3rem 0;
    background-image: url('/footer.png');
    background-repeat: no-repeat;
    background-size: cover;
    .container{
      width:85%;
      margin: 0 auto;
      .footer-container{
        width:100%;
        display: flex;
        justify-content:space-between;
        h3{
          color:#fff;
          font-family: 'manropeBold';
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }
        li{
          color: #fff;
          list-style: none;
          font-family: 'manropeRegular';
          line-height: 2em;
          font-size: 1rem;
        }
        .col-footer{
          width:20%;
          .col-about{
            margin-top: 10rem;
          }
          .col-media{
            margin-top: 6rem;
          }
            .contact-details{
              margin-top:2rem;
            }
        }
      }
      .footer-copyright{
        margin-top: 3rem;
        display: flex;
        justify-content:space-between;
        li{
          color: #fff;
          list-style: none;
          font-family: 'manropeRegular';
        }
        .social-copyright{
          display: flex;

          a {
            padding-left: 1rem;
             i {
               font-size: 1.2rem;
             }
          }
          justify-content:space-between;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .footer{
    width:100%;
    background-color:#000000;
    position:relative;
    padding: 3rem 0;
    background-image: url('/footer.png');
    background-repeat: no-repeat;
    background-size: cover;
    .container{
      width:80%;
      margin: 0 auto;
      .footer-container{
        width:100%;
        display: block;
        justify-content:space-between;
        h3{
          color:#fff;
          font-family: 'manropeBold';
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }
        li{
          color: #fff;
          list-style: none;
          font-family: 'manropeRegular';
          line-height: 2em;
          font-size: 1rem;
        }
        .col-footer{
          width:100%;
          margin-top: 5rem;
          .col-about{
            margin-top: 5rem;
          }
          .col-media{
            margin-top: 6rem;
          }
            .contact-details{
              margin-top:2rem;
            }
        }
      }
      .footer-copyright{
        margin-top: 3rem;
        display: block;
        justify-content:space-between;
        li{
          i {
            margin-top: 0.5rem;
            font-size: 1.5rem;
          }
          color: #fff;
          list-style: none;
          font-family: 'manropeRegular';
        }
        .social-copyright{
          display: block;
          justify-content:space-between;
          margin-top: 5rem;
        }
      }
    }
  }
}
`
