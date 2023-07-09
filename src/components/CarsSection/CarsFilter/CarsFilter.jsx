import React, {useState} from "react";
import {
  CarsFilterSection,
  Mark,
  Model,
  YearContainer,
  YearFrom,
  YearTo,
  Fuel,
  DriveTrain,
  Transmission,
  MileageContainer,
  MileageFrom,
  MileageTo,
  EngineContainer,
  EngineFrom,
  EngineTo,
  PriceContainer,
  PriceFrom,
  PriceTo,
  BottomContainer,
  Sort,
  Button
} from "./CarsFilterElements";
const CarsFilter = () => {

  return (
    <CarsFilterSection>
      <Mark>
        <option>Любая марка</option>
        <option>Genesis</option>
        <option>Hyundai</option>
      </Mark>
      <Model>
        <option>Любая модель</option>
      </Model>
      <YearContainer>
        <YearFrom>
          <option>Год от</option>
        </YearFrom>
        <YearTo>
          <option>Год до</option>
        </YearTo>
      </YearContainer>
      <Fuel>
        <option>Любой вид топлива</option>
      </Fuel>
      <DriveTrain>
        <option>Любой Привод</option>
      </DriveTrain>
      <Transmission>
        <option>Любая трансмиссия</option>
      </Transmission>
      <MileageContainer>
        <MileageFrom>
          <option>Пробег от</option>
        </MileageFrom>
        <MileageTo>
          <option>Пробег до</option>
        </MileageTo>
      </MileageContainer>
      <EngineContainer>
        <EngineFrom>
          <option>Объем от</option>
        </EngineFrom>
        <EngineTo>
          <option>Объем до</option>
        </EngineTo>
      </EngineContainer>
      <PriceContainer>
        <PriceFrom>
          <option>Цена от</option>
        </PriceFrom>
        <PriceTo>
          <option>Цена до</option>
        </PriceTo>
      </PriceContainer> 
      <BottomContainer>
      <Sort>
        <option>
          Сортировка
        </option>
      </Sort>
      <Button>Поиск</Button>
      </BottomContainer>
    </CarsFilterSection>
  );
};

export default CarsFilter;
