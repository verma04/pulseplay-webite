import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.team};

 
  min-width: 100vw;
  scroll-snap-align: start;

  @media (min-width: 1025px) {
    .flex {
      height: 100vh;
      display: flex;
      justify-content: space-between;

      align-items: flex-end;
      height: 100%;
      position: relative;
      width: 100%;

      .flex-left {
        width: 60%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background: ${(props) => props.theme.colors.blue};
        height: 100%;

        align-items: center;
        .top {
          width: 50%;

          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;
          span {
            color: ${(props) => props.theme.colors.white};
          }
          h2 {
            line-height: 2rem;
            font-size: 2rem;
            color: ${(props) => props.theme.colors.white};
          }
        }
      }

      .flex-right {
        width: 40%;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        background: ${(props) => props.theme.colors.green};
        height: 100%;

        align-items: center;

        form {
          h2 {
            color: white;
            font-size: 2rem;
          }
          width: 80%;
          height: 95%;

          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
          input {
            background: ${(props) => props.theme.colors.green};
            width: 90%;
            height: 3rem;
            padding-left: 1rem;
            border: 1px solid white;
            color: white;
            ::placeholder {
              /* Most modern browsers support this now. */
              color: white;
            }
          }
          select {
            background: ${(props) => props.theme.colors.green};
            width: 95%;
            height: 3rem;
            padding-left: 1rem;
            border: 1px solid white;
            color: white;
            ::placeholder {
              /* Most modern browsers support this now. */
              color: white;
            }
          }
          textarea {
             border: 1px solid white;
            background: ${(props) => props.theme.colors.green};
            width: 90%;
            color: white;
            height: 20%;
            padding-top: 1rem;
            padding-left: 1rem;
            font-size: 1rem;
            ::placeholder {
              /* Most modern browsers support this now. */
              color: white;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1025px) {
    .flex {
      height: 70rem;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: flex-end;
    
      position: relative;
      width: 100%;

      .flex-left {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background: ${(props) => props.theme.colors.blue};
        height: 30%;

        align-items: center;
        .top {
          width: 90%;

          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          span {
            align-items: center;
            color: ${(props) => props.theme.colors.white};
          }
          h2 {
            margin-top: 1rem;
            align-items: center;
            font-size: 2rem;
            color: ${(props) => props.theme.colors.white};
          }
        }
      }

      .flex-right {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        background: ${(props) => props.theme.colors.green};
        height: 70%;

        align-items: center;

        form {
          h2 {
            color: white;
            font-size: 2rem;
          }
          width: 90%;
          height: 95%;

          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
          input {
            padding-left: 1rem;
            background: ${(props) => props.theme.colors.green};
            width: 90%;
            height: 3rem;
            border: 1px solid white;
            color: white;
            ::placeholder {
              /* Most modern browsers support this now. */
              color: white;
            }
          }
          select {
            background: ${(props) => props.theme.colors.green};
            width: 95%;
            height: 3rem;
            padding-left: 1rem;
            border: 1px solid white;
            color: white;
            ::placeholder {
              /* Most modern browsers support this now. */
              color: white;
            }
          }
          textarea {
            background: ${(props) => props.theme.colors.green};
            width: 95%;
            color: white;
            height: 30%;
            padding-top: 1rem;
            padding-left: 1rem;
            font-size: 1rem;
            border: 1px solid white;
            ::placeholder {
              /* Most modern browsers support this now. */
              color: white;
            }
          }
        }
      }
    }
  }
`;
