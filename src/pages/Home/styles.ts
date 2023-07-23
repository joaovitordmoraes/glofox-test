import styled, { css } from 'styled-components'

export const Main = styled.main`
  padding: 48px 24px;
`

export const Container = styled.div`
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
`

export const SearchTitle = styled.h1`
  margin-bottom: 24px;
`

export const ProductGrid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`