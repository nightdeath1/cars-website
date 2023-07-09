import styled from "styled-components";

export const BannerContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 500px;
  position: relative;
  z-index: 1;
`;

export const BannerBG = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const BannerContent = styled.div`    z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;

h1 {
    color: #fff;
    font-size: 48px;
    text-align: center;
};

p {
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
}
`
export const BannerBtnWrapper = styled.div`
       margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
    border-radius: 50px;
    background: rgba(231, 231, 250, 0.95);
    white-space: nowrap;
    padding: 14px 48px;
    color: black;
    font-size: 20px;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer; 
    }
`
