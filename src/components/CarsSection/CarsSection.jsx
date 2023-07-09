import React, { useState, useRef, useEffect } from "react";
import CarsFilter from "./CarsFilter/CarsFilter";
import carsData from "../data/CarsData";
import ReactPaginate from "react-paginate";
import {
  CarsSectionContainer,
  CarsContainer,
  CarItem,
  CarImage,
  CarBody,
  CarName,
  CarAttributesContainer,
  CarAttributesIcon,
  CarPrice,
  CarButtonLink,
  PaginateContainer,
} from "./CarsSectionElements";
import MileageImg from "../../img/mileage.png";
import EngineImg from "../../img/engine.png";
import FuelImg from "../../img/fuelType.png";
import TransImg from "../../img/transmission.png";
import DriveImg from "../../img/driveTrain.png";
import BootImg from "../../img/bootType.png";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((product) => (
          <CarItem key={product.id}>
            <CarImage to={`/catalog/${product.id}`} target="_blank">
              <img src={product.image[0]} />
            </CarImage>
            <CarBody>
              <CarName>
                <p>{product.title}</p>
              </CarName>
              <CarAttributesContainer>
                <CarAttributesIcon>
                  <img src={MileageImg} />
                  <span>{product.mileage}</span>
                </CarAttributesIcon>
                <CarAttributesIcon>
                  <img src={EngineImg} />
                  <span>{product.engine}</span>
                </CarAttributesIcon>
                <CarAttributesIcon>
                  <img src={FuelImg} />
                  <span>{product.fuelType}</span>
                </CarAttributesIcon>
                <CarAttributesIcon>
                  <img src={TransImg} />
                  <span>{product.transmission}</span>
                </CarAttributesIcon>
                <CarAttributesIcon>
                  <img src={DriveImg} />
                  <span>{product.driveTrain}</span>
                </CarAttributesIcon>
                <CarAttributesIcon>
                  <img src={BootImg} />
                  <span>{product.bootType}</span>
                </CarAttributesIcon>
              </CarAttributesContainer>
              <CarPrice>
                <p>{product.price}</p>
              </CarPrice>
            </CarBody>
            <CarButtonLink to={`/catalog/${product.id}`} target="_blank">
              {product.buttonLabel}
            </CarButtonLink>
          </CarItem>
        ))}
    </>
  );
}

const CarsSection = () => {
  const itemsPerPage = 4;
  // const [itemOffset, setItemOffset] = useState(0);
  // const endOffset = itemOffset + itemsPerPage;
  // const currentItems = carsData.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(carsData.length / itemsPerPage);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(carsData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(carsData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % carsData.length;
    setItemOffset(newOffset);
  };

  const ServicesRef = useRef(null);

  const gotoServices = () =>
    window.scrollTo({
      top: ServicesRef.current.offsetTop,
      behavior: "smooth",
    });

  return (
    <>
      <CarsSectionContainer ref={ServicesRef}>
        <CarsFilter />
        <CarsContainer>
          <Items currentItems={currentItems} />
        </CarsContainer>
        <PaginateContainer>
          <ReactPaginate
            onClick={gotoServices}
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </PaginateContainer>
      </CarsSectionContainer>
    </>
  );
};

export default CarsSection;

// const [item, setItem] = useState(carsData);

// const menuItems = [...new Set(carsData.map((Val) => Val.brand))];

// const filterItem = (curcat) => {
//   const newItem = carsData.filter((newVal) => {
//     return newVal.brand === curcat;
//   });
//   setItem(newItem);
// };
