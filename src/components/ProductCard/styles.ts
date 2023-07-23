import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors['gray-300']};
    border-radius: ${theme.radius.small};
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding: 16px;
    border-bottom: 1px solid ${theme.colors['gray-300']};
    border-top-left-radius: ${theme.radius.small};
    border-top-right-radius: ${theme.radius.small};
  `}
`

export const Image = styled.img`
  height: 150px;
`

export const DescriptionList = styled.dl`
  padding: 16px;
`

export const Name = styled.dt`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-weight: 700;
    color: ${theme.colors['gray-900']};
    margin-bottom: 4px;
  `}
`

export const Description = styled.dd`
  ${({ theme }) => css`
    font-size: 1.4rem;
    color: ${theme.colors['gray-700']};
    margin-bottom: 16px;
  `}
`
