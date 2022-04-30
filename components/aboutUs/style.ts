import styled from "styled-components";

export const Section = styled.section`
@media (min-width: 1281px) {
  width: 100%;
  display: flex;
  justify-content: center;

  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
   p {
     line-height: 1.5rem;
   }

  .heading {
    h2 {
      text-align: left;
      font-size: 2rem;
      color: ${(props) => props.theme.colors.blue};
      position: relative;

      ::after {
        content: "";
        position: absolute;
        width: 10%;
        height: 15%;
        background-color: ${(props) => props.theme.colors.lightBlue};
        bottom: -50%;
        left: 0%;
      }
    }
  }

  .ourbrand-section {
    position: relative;
    width: 100%;
    height: 10rem;
    /* background-color: #000; */
    display: block;
    /* margin: 0 auto; */
    justify-content: center;
  }
  .values {
    .view {
      position: absolute;
      bottom: 0%;
      right: 0%;
      cursor: pointer;
      p {
        color: ${(props) => props.theme.colors.blue2};
        border-bottom: 1px solid;
      }
    }
    position: relative;
    margin-top: 2rem;
    width: ${(props) => props.theme.containerWidth.lg};

    .heading {
      h2 {
        text-align: left;
        font-size: 2rem;
        color: ${(props) => props.theme.colors.blue};
        position: relative;

        ::after {
          content: "";
          position: absolute;
          width: 10%;
          height: 15%;
          background-color: ${(props) => props.theme.colors.lightBlue};
          bottom: -20%;
          left: 0%;
        }
      }
    }

    .section-2 {
      width: 100%;
      height: 40rem;

      display: flex;
      justify-content: space-evenly;
      align-items: center;
      #active {
        background-color: ${(props) => props.theme.colors.blue1};
        p {
          color: ${(props) => props.theme.colors.white};
        }
        .wrapper {
          h3 {
            color: white;
          }
        }
      }
      .list {
        width: 28%;
        height: 60%;
        background-color: ${(props) => props.theme.colors.white};
        box-shadow: 2px 2px 5px 17px rgba(245, 241, 241, 0.75);
        border-radius: 50%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        .wrapper {
          position: relative;
          height: 20%;
          width: 20%;
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          align-items: center;
          h3 {
            margin-bottom: -35%;
          }
        }
        p {
          width: 80%;
          text-align: center;
          line-height: 1.5rem;
        }
      }
    }
  }

  .approch {
    .view {
      position: absolute;
      z-index: 10;
      bottom: 5%;
      right: 5%;
      cursor: pointer;
      p {
        color: ${(props) => props.theme.colors.white};
        border-bottom: 1px solid;
      }
    }
    position: relative;
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;

    flex-direction: column;
    align-items: center;
    .heading {
      width: ${(props) => props.theme.containerWidth.lg};
      display: flex;
      justify-content: flex-start;

      align-items: center;
      h2 {
        ::after {
          content: "";

          width: 110%;

          left: -4%;
        }
      }
    }
  .wrapper {
    position: relative;
    width: 100%;
    width: 40rem;
  }

    .approch-list {
      position: relative;
      margin-top: 2rem;
      width: 100%;
      height: 40rem;
      display: flex;
      justify-content: center;

      flex-direction: column;
      align-items: center;

      .approch-detials {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;

        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        .list {
          width: 33%;

          height: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          .head {
            display: flex;
            justify-content: flex-start;
            width: 90%;

            h3 {
              color: white;
              margin-bottom: 1rem;
            }
          }

          p {
            width: 90%;
          }
        }
        .list:nth-child(1) {
        
          background: linear-gradient(180deg, #007EFF 0%, #7AB9F9 100%);
          position: relative;
          ::after {
            content: "";
            position: absolute;
            width: 4%;
            background-color: white;
            height: 6%;
            border-radius: 50%;
            bottom: -2.5%;
            right: -2%;
            z-index: 10;
          }
        }

        .list:nth-child(2) {

background: linear-gradient(180deg, #E3B604 0%, #FBDD6A 100%);
        
          position: relative;
          ::after {
            content: "";
            position: absolute;
            width: 4%;
            background-color: white;
            height: 6%;
            border-radius: 50%;
            bottom: -2.5%;
            right: -2%;
            z-index: 10;
          }
        }
        .list:nth-child(3) {
          background: linear-gradient(180deg, #21B85D 0%, rgba(14, 225, 98, 0.58) 100%);
        }
        .list:nth-child(4) {
          background: linear-gradient(180deg, rgba(219, 25, 242, 0.28) 0%, #DB19F2 100%);
        }
        .list:nth-child(5) {
          background: linear-gradient(180deg, rgba(55, 74, 236, 0.31) 0%, #2131B8 100%);
        }
        .list:nth-child(6) {
         background: linear-gradient(360deg, #1EBBFD 0%, rgba(51, 197, 246, 0.41) 100%);
        }
      }
    }
  }
  .journey {
    .view {
      position: absolute;
      z-index: 10;
      bottom: 5%;
      right: 5%;
      cursor: pointer;
      p {
        color: ${(props) => props.theme.colors.black};
        border-bottom: 1px solid;
      }
    }
    position: relative;
    margin-top: 3rem;
    width: 100%;

    height: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .journey-left {
      width: 40%;

      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      .heading {
        margin-top: 10%;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-direction: column;
        width: 80%;

        height: 30%;
        h2 {
          ::after {
            content: "";
            position: absolute;
            width: 110%;
            height: 15%;
            background-color: ${(props) => props.theme.colors.lightBlue};
            bottom: -20%;
            left: 0%;
          }
        }
      }
      .wrapper {
        width: 100%;
        position: relative;
        height: 50%;
      }
    }

    .journey-right {
      width: 60%;
      background-color: ${(props) => props.theme.colors.skyBlue};
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;
      .journey-list {
        height: 90%;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-left: 1px solid #7ecaed;
        .list {
          width: 100%;
          height: 25%;

          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          .ellipse {
            width: 4rem;
            height: 4rem;

            border-radius: 50%;
            margin-left: -8%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          ul {
            margin-left: 2rem;
            li {
              h4 {
                margin-bottom: 0.5rem;
                color: #0f445a;
                text-transform: uppercase;
              }
            }
          }
        }
      }
    }
  }

  .ecosystem {
    .view {
      position: absolute;
      z-index: 10;
      bottom: 0%;
      right: 5%;
      cursor: pointer;
      p {
        color: ${(props) => props.theme.colors.black};
        border-bottom: 1px solid;
      }
    }
    position: relative;
    margin-top: 3rem;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .heading {
      width: ${(props) => props.theme.containerWidth.lg};
      display: flex;
      justify-content: flex-start;

      align-items: flex-start;
      flex-direction: column;

      .bold {
        font-family: "ManropeRegular";
        padding-bottom: 1rem;
      }
      p {
        padding-top: 1rem;
      }
      h2 {
        margin-bottom: 3rem;
        ::after {
          content: "";

          width: 110%;

          left: -4%;
        }
      }
    }

    .imgArry {
      margin-top: 3rem;
      margin-bottom: 3rem;
      width: ${(props) => props.theme.containerWidth.lg};
      display: flex;
      justify-content: space-between;
      .wrapper {
        width: 30%;
        height: 20rem;
        position: relative;
      }
    }
  }

  .digital {
    margin-top: 4rem;
    margin-bottom: 4rem;
    display: flex;
  justify-content: center;
width: 100%;
  flex-direction: column;
  align-items:center;
  .heading {
      width: ${(props) => props.theme.containerWidth.lg};
      display: flex;
      justify-content: flex-start;

      align-items: flex-start;
      flex-direction: column;

      .bold {
        font-family: "ManropeRegular";
        padding-bottom: 1rem;
      }
      p {
        padding-top: 1rem;
      }
      h2 {
        margin-bottom: 3rem;
        ::after {
          content: "";

          width: 110%;

          left: -4%;
        }
      }
    }
    .wrapper {
      width: 100%;
      height: 30rem;
      position: relative;
    }
  }
}

@media (max-width: 1281px) {
  width: 100%;
  display: flex;
  justify-content: center;

  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
   p {
     line-height: 1.5rem;
   }

  .heading {
    h2 {
      text-align: left;
      font-size: 2rem;
      color: ${(props) => props.theme.colors.blue};
      position: relative;

      ::after {
        content: "";
        position: absolute;
        width: 10%;
        height: 15%;
        background-color: ${(props) => props.theme.colors.lightBlue};
        bottom: -50%;
        left: 0%;
      }
    }
  }

  .ourbrand-section {
    position: relative;
    width: 100%;
    height: 10rem;
    /* background-color: #000; */
    display: block;
    /* margin: 0 auto; */
    justify-content: center;
  }
  .values {
    .view {
      position: absolute;
      bottom: 0%;
      right: 0%;
      cursor: pointer;
      p {
        color: ${(props) => props.theme.colors.blue2};
        border-bottom: 1px solid;
      }
    }
    position: relative;
    margin-top: 2rem;
    width: ${(props) => props.theme.containerWidth.lg};

    .heading {
      h2 {
        text-align: left;
        font-size: 2rem;
        color: ${(props) => props.theme.colors.blue};
        position: relative;

        ::after {
          content: "";
          position: absolute;
          width: 30%;
          height: 15%;
          background-color: ${(props) => props.theme.colors.lightBlue};
          bottom: -20%;
          left: 0%;
        }
      }
    }

    .section-2 {
      width: 100%;
   

      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      #active {
        background-color: ${(props) => props.theme.colors.blue1};
        p {
          color: ${(props) => props.theme.colors.white};
        }
        .wrapper {
          h3 {
            color: white;
          }
        }
      }
      .list {
        width: 20rem;
        margin-top: 3rem;
        height: 20rem;
        background-color: ${(props) => props.theme.colors.white};
        box-shadow: 2px 2px 5px 17px rgba(245, 241, 241, 0.75);
        border-radius: 50%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        .wrapper {
          position: relative;
          height: 20%;
          width: 20%;
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          align-items: center;
          h3 {
            margin-bottom: -35%;
          }
        }
        p {
          width: 80%;
          text-align: center;
          line-height: 1.5rem;
        }
      }
    }
  }

  .approch {
    .view {
      display: none;
      position: absolute;
      z-index: 10;
      bottom: 5%;
      right: 5%;
      cursor: pointer;
      p {
        color: ${(props) => props.theme.colors.white};
        border-bottom: 1px solid;
      }
    }
    position: relative;
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;

    flex-direction: column;
    align-items: center;
    .heading {
      width: ${(props) => props.theme.containerWidth.lg};
      display: flex;
      justify-content: flex-start;

      align-items: center;
      h2 {
        ::after {
          content: "";

          width: 110%;

          left: -4%;
        }
      }
    }
  .wrapper {
    position: relative;
    width: 100%;
    width: 40rem;
  }

    .approch-list {
      position: relative;
      margin-top: 2rem;
      width: 100%;
      
      display: flex;
      justify-content: center;

      flex-direction: column;
      align-items: center;

      .approch-detials {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;

        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        .list {
          width: 100%;

          height: 20rem;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          .head {
            display: flex;
            justify-content: flex-start;
            width: 90%;

            h3 {
              color: white;
              margin-bottom: 1rem;
            }
          }

          p {
            width: 90%;
          }
        }
        .list:nth-child(1) {
        
          background: linear-gradient(180deg, #007EFF 0%, #7AB9F9 100%);
          position: relative;
          ::after {
            content: "";
            position: absolute;
            width: 4%;
            background-color: white;
            height: 6%;
            border-radius: 50%;
            bottom: -2.5%;
            right: -2%;
            z-index: 10;
          }
        }

        .list:nth-child(2) {

background: linear-gradient(180deg, #E3B604 0%, #FBDD6A 100%);
        
          position: relative;
          ::after {
            content: "";
            position: absolute;
            width: 4%;
            background-color: white;
            height: 6%;
            border-radius: 50%;
            bottom: -2.5%;
            right: -2%;
            z-index: 10;
          }
        }
        .list:nth-child(3) {
          background: linear-gradient(180deg, #21B85D 0%, rgba(14, 225, 98, 0.58) 100%);
        }
        .list:nth-child(4) {
          background: linear-gradient(180deg, rgba(219, 25, 242, 0.28) 0%, #DB19F2 100%);
        }
        .list:nth-child(5) {
          background: linear-gradient(180deg, rgba(55, 74, 236, 0.31) 0%, #2131B8 100%);
        }
        .list:nth-child(6) {
         background: linear-gradient(360deg, #1EBBFD 0%, rgba(51, 197, 246, 0.41) 100%);
        }
      }
    }
  }
  .journey {
    .view {
      display: none;
      position: absolute;
      z-index: 10;
      bottom: 5%;
      right: 5%;
      cursor: pointer;
      p {
        color: ${(props) => props.theme.colors.black};
        border-bottom: 1px solid;
      }
    }
    position: relative;
    margin-top: 3rem;
    width: 100%;

    height: 80rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .journey-left {
      width: 100%;

      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      .heading {
        margin-top: 10%;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-direction: column;
        width: 80%;

        height: 30%;
        h2 {
          ::after {
            content: "";
            position: absolute;
            width: 110%;
            height: 15%;
            background-color: ${(props) => props.theme.colors.lightBlue};
            bottom: -20%;
            left: 0%;
          }
        }
      }
      .wrapper {
        width: 100%;
        position: relative;
        height: 50%;
      }
    }

    .journey-right {
      width: 100%;
      background-color: ${(props) => props.theme.colors.skyBlue};
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;
      .journey-list {
        height: 90%;
        width:80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-left: 1px solid #7ecaed;
        .list {
          width: 100%;
          height: 25%;

          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          .ellipse {
            width: 4rem;
            height: 4rem;

            border-radius: 50%;
            margin-left: -8%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          ul {
            margin-left: 2rem;
            li {
              h4 {
                margin-bottom: 0.5rem;
                color: #0f445a;
                text-transform: uppercase;
              }
            }
          }
        }
      }
    }
  }

  .ecosystem {
    .view {
      position: absolute;
      z-index: 10;
      bottom: 0%;
      right: 5%;
      cursor: pointer;
      p {
        color: ${(props) => props.theme.colors.black};
        border-bottom: 1px solid;
      }
    }
    position: relative;
    margin-top: 3rem;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .heading {
      width: ${(props) => props.theme.containerWidth.lg};
      display: flex;
      justify-content: flex-start;

      align-items: flex-start;
      flex-direction: column;

      .bold {
        font-family: "ManropeRegular";
        padding-bottom: 1rem;
      }
      p {
        padding-top: 1rem;
      }
      h2 {
        margin-bottom: 3rem;
        ::after {
          content: "";

          width: 110%;

          left: -4%;
        }
      }
    }

    .imgArry {
      margin-top: 3rem;
      margin-bottom: 3rem;
      width: ${(props) => props.theme.containerWidth.lg};
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .wrapper {
        width: 100%;
        height: 20rem;
        position: relative;
      }
    }
  }

  .digital {
    margin-top: 4rem;
    margin-bottom: 4rem;
    display: flex;
  justify-content: center;
width: 100%;
  flex-direction: column;
  align-items:center;
  .heading {
      width: ${(props) => props.theme.containerWidth.lg};
      display: flex;
      justify-content: flex-start;

      align-items: flex-start;
      flex-direction: column;

      .bold {
        font-family: "ManropeRegular";
        padding-bottom: 1rem;
      }
      p {
        padding-top: 1rem;
      }
      h2 {
        margin-bottom: 3rem;
        ::after {
          content: "";

          width: 110%;

          left: -4%;
        }
      }
    }
    .wrapper {
      width: 100%;
      height: 30rem;
      position: relative;
    }
  }
}
`;
