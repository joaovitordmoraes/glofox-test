import { Button } from 'antd'

import * as S from './styles'

export type ProductCardProps = {
  img: string
  name: string
  description: string
  onButtonClick: () => void
}

export function ProductCard({ img, name, description, onButtonClick}: ProductCardProps) {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.Image src={img} alt={`Image of ${name}`} />
      </S.ImageWrapper>
      <S.DescriptionList>
        <S.Name>{name}</S.Name>
        <S.Description>{description}</S.Description>
        <Button type="primary" onClick={onButtonClick} block>
          See more
        </Button>
      </S.DescriptionList>
    </S.Wrapper>
  )
}