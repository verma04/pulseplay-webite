import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 5rem;
  background-color: #fff;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);

  background-color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  height: 100vh;
  z-index: 100;
  overflow: hidden;
  min-width: 100vw;
  scroll-snap-align: start;
   
  @media (min-width: 1025px) {

     p{
       line-height: 1.5rem;
     }
    .flex {
      display: flex;
      justify-content: space-between;

      align-items: flex-end;
      height: 80%;
      position: relative;
      width: 60%;

      .arrow-left {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        left: -10rem;
      }

      .arrow-right {
        position: absolute;
        display: flex;
        right: -10%;
        justify-content: center;
        align-items: center;
        height: 100%;
        z-index: 10000;
        cursor: pointer;
      }

      .flex-left {
        width: 40%;
        display: flex;
        justify-content: center;
        flex-direction: column;

        height: 90%;

        align-items: flex-start;
        h2 {
          color: white;
          font-size: 2rem;
          line-height: 2rem;
       
        }
        h3 {
          padding-top: 0.5rem;
          color: white;
          line-height: 1.5rem;
        }
        .wrapper {
          display: flex;
          position: relative;
          justify-content: flex-end;
  
          height: 50%;
          width: 50%;

          img {
            border-radius: 50%;
          }
        }
      }

      .flex-right {
        width: 50%;
        display: flex;
        justify-content: center;
        flex-direction: row;

        height: 90%;

        align-items: center;
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
      display: flex;
      justify-content: center;

      align-items: center;
      .team_bar {
        display: flex;
        justify-content: space-between;
        overflow-x: scroll;
        align-items: center;

        width: 90%;
        height: 100%;
        .teamMember {
          height: 100%;
          display: flex;
          justify-content: center;
          cursor: pointer;
          align-items: center;
          flex-direction: column;

          span {
            margin-top: 0.5rem;
            font-size: 1.1rem;
            text-transform: uppercase;
            color: white;
          }

          .wrapper {
            margin-left: 2rem;
            display: flex;
            position: relative;
            justify-content: center;

            align-items: center;
            height: 5rem;
            width: 5rem;

            flex-direction: column;
            img {
            }
          }

          .activeWrapper {
            display: flex;
            position: relative;
            justify-content: center;

            align-items: center;
            height: 10rem;
            width: 10rem;

            flex-direction: column;
          }
        }
      }
    }
  }

  @media (max-width: 1025px) {
    .flex {
     
      display: flex;
      justify-content: flex-start;

      align-items: flex-end;
      height: 80%;
      position: relative;
      width: 90%;
      flex-direction: column;

      .arrow-left {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 10%;
        height: 100%;
        left: -10rem;
      }

      .arrow-right {
        position: absolute;
        display: flex;
        right: 0%;
        justify-content: center;
        align-items: center;
        height: 100%;
        bottom: 0;
        z-index: 10000;

        cursor: pointer;
      }

      .flex-left {
        width: 95%;
        display: flex;
        justify-content: space-between;

        height: 30%;

        align-items: center;
        position: relative;
        .data {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          flex-direction: column;
          height: 40%;
          width: 70%;

          h2 {
            font-family: "ManropeLight";
            width: 90%;
            text-align: right;
            color: white;
            right: 10%;
            font-size: 1.5rem;
          }
          h3 {
            margin-top: 0.5rem;
            font-family: "ManropeLight";
            text-align: right;
            width: 90%;
            color: white;

            right: 10%;
            bottom: 20%;
          }
        }
        .wrapper {
          display: flex;
          position: relative;
          justify-content: flex-end;

          height: 100%;
          width: 30%;

          img {
            border-radius: 50%;
          }
        }
      }

      .flex-right {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        height: 60%;

        align-items: center;

        .para {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          height: 100%;

          p {
            font-family: "ManropeLight";
            padding-top: 1rem;
            color: white;
            font-size: 1rem;
            line-height: 1.5rem;
          }
        }
      }
    }
    .bottom-bar {
      height: 20%;

      background-color: #273ee1bf;
      width: 100%;
      display: flex;
      justify-content: center;

      align-items: center;
      .team_bar {
        display: flex;
        justify-content: space-between;
        overflow-x: scroll;
        align-items: center;

        width: 90%;
        .teamMember {
          height: 100%;
          display: flex;
          justify-content: center;
          cursor: pointer;
          align-items: center;
          flex-direction: column;

          span {
            margin-top: 0.5rem;
            font-size: 1.1rem;
            text-transform: uppercase;
            color: white;
          }

          .wrapper {
            display: flex;
            position: relative;
            justify-content: center;

            align-items: center;
            height:5rem;
            width: 5rem;
            margin-left: 1rem;

            flex-direction: column;
            img {
            }
          }

          .activeWrapper {
            display: flex;
            position: relative;
            justify-content: center;

            align-items: center;
            height:6rem;
            width: 6rem;

            flex-direction: column;
          }
        }
      }
    }
  }
`;
