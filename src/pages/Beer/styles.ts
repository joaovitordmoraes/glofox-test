import styled, { css } from 'styled-components'

export const Main = styled.main`
  padding: 48px 24px;
`

export const Container = styled.div`
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;

  button {
    margin-bottom: 24px;
  }
`

export const BeerHeader = styled.section`
  display: flex;
  gap: 16px;
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 150px;
    border: 1px solid ${theme.colors['gray-300']};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    padding: 8px;
  `}
`

export const Image = styled.img`
  height: 150px;
`

export const BeerInfo = styled.div``

export const Name = styled.h1`
  ${({ theme }) => css`
    font-size: 5.2rem;
    color: ${theme.colors['gray-700']};

    @media (max-width: 576px) {
      font-size: 3.2rem;
    }
  `}
`

export const Tagline = styled.strong`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors['gray-700']};
  `}
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 1.8rem;
    color: ${theme.colors['gray-700']};
    font-weight: 700;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors['gray-700']};
  `}
`

export const OptionsList = styled.ul`
  padding-left: 16px;
`

export const Item = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors['gray-700']};
  `}
`

export const SubSectionTitle = styled.h3`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors['gray-700']};
  `}
`