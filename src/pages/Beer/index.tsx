import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BeersContext } from 'contexts/BeersContext'
import { Divider, Col, Row, Button } from 'antd'

import * as S from './styles'


export function Beer() {
  const { beer } = useContext(BeersContext)
  const navigate = useNavigate()

  console.log(beer)

  const transformUnit =  (measurement: string, value: number) => {
    const formatUnit = measurement === 'kilograms' ? value * 1000 : value

    return Intl.NumberFormat("en", {
      notation: "compact",
      style: "unit",
      unit: "gram",
      unitDisplay: "narrow",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(formatUnit)
  }


  return (
    <S.Main>
      <S.Container>
        <Row>
          <Col span={24}>
            <Button type='primary' onClick={() => navigate('/')}>Return Home</Button>
            <S.BeerHeader>
              <S.ImageWrapper>
                <S.Image src={beer.image} alt={`Image of ${beer.name}`} />
              </S.ImageWrapper>
              <S.BeerInfo>
                <S.Name>{beer.name}</S.Name>
                <S.Tagline>{beer.tagline}</S.Tagline>
              </S.BeerInfo>
            </S.BeerHeader>
          </Col>
          <Divider />
        </Row>

        <Row>
          <Col span={24}>
            <S.Content>
              <S.SubTitle>About the beer</S.SubTitle>
              <S.Description>{beer.description}</S.Description>

              <S.SubTitle>Makes a great fit with</S.SubTitle>
              <S.OptionsList>
                {beer.food_pairing?.map((food, index) => (
                  <S.Item key={index}>
                    {food}
                  </S.Item>
                ))}
              </S.OptionsList>

              <S.SubTitle>Ingredients</S.SubTitle>
              {beer.ingredients.malt && (
                <>
                  <S.SubSectionTitle>Malt</S.SubSectionTitle>
                  <S.OptionsList>
                    {beer.ingredients.malt.map((item, index) => (
                      <S.Item key={index}>{item.name} {transformUnit(item.amount.unit, item.amount.value)}</S.Item>
                    ))}
                  </S.OptionsList>
                </>
              )}

              {beer.ingredients.hops && (
                <>
                  <S.SubSectionTitle>Hops</S.SubSectionTitle>
                  <S.OptionsList>
                    {beer.ingredients.hops.map((item, index) => (
                      <S.Item key={index}>{item.name} {transformUnit(item.amount.unit, item.amount.value)}</S.Item>
                    ))}
                  </S.OptionsList>
                </>
              )}

              {beer.ingredients.yeast && (
                <>
                  <S.SubSectionTitle>Yeast</S.SubSectionTitle>
                  <S.OptionsList>
                      <S.Item>{beer.ingredients.yeast}</S.Item>
                  </S.OptionsList>
                </>
              )}
            </S.Content>
          </Col>
        </Row>
      </S.Container>
    </S.Main>
  )
}