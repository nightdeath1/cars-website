import styled from "styled-components";
import { Link } from "react-router-dom";


export const CarsSectionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const CarsContainer = styled.div`
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  margin: 10px auto;
  justify-content: center;

`;


export const CarItem = styled.div`
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 280px;
  background: #fff;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
    transition: 0.3s ease;
  &:hover {
    transform:scale(1.03)
  }
`;

export const CarImage = styled(Link)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const CarBody = styled.div`
  padding: 1rem;
`;

export const CarName = styled.div`
text-decoration: none;
height: 48px;
display: flex;
justify-content: center;
align-items: center;

  p {
    color: black;
    font-weight: bold;
  }
`;

export const CarAttributesContainer = styled.div`
  display: flex;
  background: #f5f5f5;
  padding: 0.5rem;
  flex-wrap: wrap;
  margin: 1rem -1rem;
`;

export const CarAttributesIcon = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
  text-align: left;

  img {
    margin-right: 5px;
  }

  span {
    opacity: 0.6;
    font-size: 14px;
    font-weight: 700;
  }
`;
export const CarId = styled.div``;
export const CarButtonLink = styled(Link)`
width: 50%;
  text-align: center;
  background-color: black;
  color: white;
  padding: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.3s ease;
  margin-bottom: 1rem;
  text-decoration: none;
  &:hover {
    transform:scale(1.05);
    color: white;
  }`
export const CarButton = styled.button`
  /* width: 50%;
  text-align: center;
  background-color: black;
  color: white;
  padding: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.3s ease;
  margin-bottom: 1rem;
  &:hover {
    transform:scale(1.05)
  } */
`;

export const CarPrice = styled.div`
  margin: 1rem;
  text-align: center;
  p {
    color: red;
    font-weight: bold;
    font-size: 1.7rem;
  }
`;
export const CarsFilter = styled.div``;
export const CarsMarks = styled.div``;

export const PaginateContainer = styled.div`
  margin: 1rem;
`