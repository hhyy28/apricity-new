import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { media } from '@components/bootstrap-grid';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: #5e594d;
  padding: 15px 17px 0 26px;

  ${media.md`
    padding: 0px 207px 24px 26px;
  `}

  ${media.lg`
    padding: 0px 239px 25px 42px;
  `}
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 37px;
`;

export const PaginationButtonNumbers = styled.button`
  background: transparent;
  border: none;
  color: #dfddd8;
  cursor: pointer;
  font-family: 'Panel-Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  outline: none;

  &:focus {
    outline: none;
  }
`;

export const PaginationButtonImg = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;

  ${({ $rotate }) => $rotate && 'transform: $rotate(180deg);'}

  &:focus {
    outline: none;
  }
`;

export const CollectionContainer = styled.div`
  align-items: flex-end;
  color: #cecfca;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  letter-spacing: 1px;
  line-height: 18px;
`;

export const CollectionDef = styled.div`
  color: #cecfca;
  font-family: 'Panel-Sans';
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const CollectionName = styled.p`
  color: #cecfca;
  font-family: 'Panel-Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  margin: 0;
`;

export const SwiperStyled = styled(Swiper)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;
  flex-shrink: 0;
  height: 123px;
  width: 88px;
  margin: 0;

  ${media.sm`
    width: 103px;
    height: 144px;
  `}

  ${media.lg`
    width: 140px;
    height: 192px;
  `}
  
  .swiper-wrapper {
    display: flex;
  }

  .swiper-slide {
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 0 0 16px 8px;

  ${media.sm`
    padding: 0 0 24px 36px;
    gap: 66px;
  `}

  ${media.md`
    padding: 44px 0 0px 36px;
    gap: 66px;
  `}

  ${media.lg`
    padding: 59px 0 33px 155px;
    gap: 65px;
  `}
`;
