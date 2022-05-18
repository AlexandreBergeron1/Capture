import styled from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const Description = styled.div`
  padding-right: 5rem;
  padding-top: 5rem;
  h2 {
    font-weight: lighter;
    text-align: center;
  }
  p {
    text-align: center;
  }
  button {
    display: block;
    margin: 0 auto;
  }
`;

export const Image = styled.div`
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
