import styled from 'styled-components'

export const Section = styled.section`
display:flex;
justify-content:center;
align-items:center;

background-color: transparent;


left: 0;
width:100%;
top:0;
z-index:100;

@media (min-width: 1281px) {
    height: 40rem;
.banner {
    width: 100%;
    height: 100%;
position: relative;
}

.text {
    width: 100%;
    height: 100%;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
.head {
    width: 85%;
    h1 {
        color: white;
    }
}

}
}

@media (max-width: 1281px) {
    height: 25rem;
.banner {
    width: 100%;
    height: 100%;
position: relative;
}

.text {
    width: 100%;
    height: 100%;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
.head {

    width: 90%;
    display: flex;
justify-content: center;
align-items: center;
    h1 {
        color: white;
    }
}

}
}



`