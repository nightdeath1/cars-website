import styled from "styled-components";

export const CarsFilterSection = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: 2rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: #f5f5f5;
  gap: 10px;
  border-radius: 10px;
  select {
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid #d9d9d9;
    color: #787878;
  }
`;

export const Mark = styled.select`
  width: 30%;

  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;
export const Model = styled.select`
  width: 30%;
  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;
export const YearContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;
export const YearFrom = styled.select`
  width: 48%;
`;
export const YearTo = styled.select`
  width: 48%;
`;
export const Fuel = styled.select`
  width: 30%;
  @media screen and (max-width: 580px) {
    width: 48%;
  }
`;
export const DriveTrain = styled.select`
  width: 30%;
  @media screen and (max-width: 580px) {
    width: 48%;
  }
`;
export const Transmission = styled.select`
  width: 30%;
  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;
export const MileageContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;
export const MileageFrom = styled.select`
  width: 48%;
`;
export const MileageTo = styled.select`
  width: 48%;
`;

export const EngineContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;
export const EngineFrom = styled.select`
  width: 48%;
`;
export const EngineTo = styled.select`
  width: 48%;
`;

export const PriceContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;
export const PriceFrom = styled.select`
  width: 48%;
`;
export const PriceTo = styled.select`
  width: 48%;
`;
export const BottomContainer = styled.div`
  width: 50%;
  display: flex;
  gap: 10px;

  @media screen and (max-width: 580px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const Sort = styled.select`
  width: 50%;
  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;
export const Button = styled.button`
  width: 50%;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #d9d9d9;
  background-color: #29aae3;
  color: white;
  text-transform: uppercase;
  font-weight: bold;

  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;
