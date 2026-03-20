import styled from "styled-components";

export const Container = styled.div`
    margin-top: 40px;
    width: 100%;
`;
export const Title = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;
export const CarouselComponent = styled.div`
    display: flex;
    gap: 10px;

    padding-bottom: 20px;

    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
    display: none;
  }
`