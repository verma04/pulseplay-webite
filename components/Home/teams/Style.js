import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  background-color: #fff;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);

  background-color: ${(props) => props.theme.colors.team};

  height: 100vh;
  z-index: 100;
  min-width: 100vw;
  scroll-snap-align: start;
  @media (min-width: 1025px) {
    .flex {
      display: flex;
      justify-content: space-between;

      align-items: flex-end;
      height: 100%;
      position: relative;
      min-width: 100vw;

      .arrow-left {
        position: absolute;
        display: flex;
        left: 2%;
        justify-content: center;
        align-items: center;
        height: 100%;
      }

      .arrow-right {
        position: absolute;
        display: flex;
        right: 2%;
        justify-content: center;
        align-items: center;
        height: 100%;
        z-index: 2;
        cursor: pointer;
      }

      .flex-left {
        width: 50%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        height: 90%;

        align-items: center;
        .teamMember {
          width: 70%;
          display: flex;
          justify-content: center;
          flex-direction: column;

          height: 80%;
          h2 {
            font-size: 4rem;
          }
          h3 {
            margin-top: 0.5rem;

            margin-bottom: 1rem;

            font-size: 1.5rem;
          }
          p {
            font-size: 1.1rem;
            line-height: 1.5rem;
          }
        }
      }

      .flex-right {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;

        height: 90%;

        align-items: center;
        .wrapper {
          display: flex;
          position: relative;
          justify-content: flex-end;

          height: 100%;
          width: 100%;

          img {
            border-radius: 50%;
          }
        }
      }

      .bottom-bar {
        position: absolute;
        height: 20%;
        bottom: 0;
        left: 0;
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
            margin-left: 3rem;
            height: 100%;
            display: flex;
            justify-content: center;
            cursor: pointer;
            align-items: center;
            flex-direction: column;

            span {
              margin-top: 0.5rem;
              font-size: 0.8rem;
              text-align: center;
              text-transform: uppercase;
              color: white;
            }

            .wrapper {
              display: flex;
              position: relative;
              justify-content: center;

              align-items: center;
              height: 4rem;
              width: 4rem;
              border-radius: 50%;
              flex-direction: column;
              img {
                border-radius: 50%;
              }
            }

            .activeWrapper {
              display: flex;
              position: relative;
              justify-content: center;

              align-items: center;
              height: 5rem;
              width: 5rem;
              border-radius: 50%;
              flex-direction: column;
              img {
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .flex {
      display: flex;
      justify-content: space-between;

      align-items: flex-end;
      height: 100%;
      position: relative;
      width: 100%;
      flex-direction: column;

      .arrow-left {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        left: 5%;
      }

      .arrow-right {
        right: 5%;
        position: absolute;
        display: flex;

        justify-content: center;
        align-items: center;
        height: 100%;
        z-index: 2;
        cursor: pointer;
      }

      .flex-left {
        width: 100%;

        display: flex;
        justify-content: space-between;
        flex-direction: column;

        height: 40%;

        align-items: center;
        .teamMember {
          width: 90%;
          display: flex;
          justify-content: center;
          flex-direction: column;

          height: 100%;
          h2 {
            font-family: "ManropeLight";
            text-align: center;
            font-size: 2.2rem;
          }
          h3 {
            font-family: "ManropeLight";
            text-align: center;
            margin-top: 0.5rem;

            margin-bottom: 1rem;

            font-size: 1.5rem;
          }
          p {
            font-family: "ManropeLight";
            font-size: 0.8rem;
            line-height: 1rem;
          }
        }
      }

      .flex-right {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;

        height: 60%;

        align-items: center;
        .wrapper {
          display: flex;
          position: relative;
          justify-content: flex-end;

          height: 100%;
          width: 100%;

          img {
            border-radius: 50%;
          }
        }
      }

      .bottom-bar {
        position: absolute;
        height: 15%;
        bottom: 0;
        left: 0;
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
            margin-left: 3rem;
            height: 100%;
            display: flex;
            justify-content: center;
            cursor: pointer;
            align-items: center;
            flex-direction: column;

            span {
              margin-top: 0.5rem;
              font-size: 0.8rem;
              text-align: center;
              text-transform: uppercase;
              color: white;
            }

            .wrapper {
              display: flex;
              position: relative;
              justify-content: center;

              align-items: center;
              height: 4rem;
              width: 4rem;
              border-radius: 50%;
              flex-direction: column;
              img {
                border-radius: 50%;
              }
            }

            .activeWrapper {
              display: flex;
              position: relative;
              justify-content: center;

              align-items: center;
              height: 5rem;
              width: 5rem;
              border-radius: 50%;
              flex-direction: column;
              img {
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
  }
`;
