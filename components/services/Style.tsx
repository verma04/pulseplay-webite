import styled from 'styled-components';
export const Section = styled.section`
.services{
    position: relative;
    width:100%;
    .container{
        width: 80%;
        margin: 0 auto;
        .services-block{
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           padding: 5rem 0;
           width: 100%;
           .service{
               width: 16%;
               margin-top: 2rem;
           }
        }
    }
}
`