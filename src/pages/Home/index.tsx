import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Divider, Input, Col, Row, Radio } from 'antd'
import { BeersContext } from 'contexts/BeersContext'
import { ProductCard } from 'components/ProductCard'

import * as S from './styles'

type BeerCategoryProps = {
  [key: string]: string
}

type BeerResponseProps = {
  id: number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: string
  abv: number
  ibu: number
  target_fg: number
  target_og: number
  ebc: number
  srm: number
  ph: number
  attenuation_level: number
  volume: {
    value: number
    unit: string
  }
  boil_volume: {
    value: number,
    unit: string
  }
  method: {
    mash_temp: {
      temp: {
        value: number
        unit: string
      }
      duration: number
    }[]
    fermentation: {
      temp: {
        value: number,
        unit: number
      }
    },
    twist: string | null
  }
  ingredients: {
    malt: {
      name: string
      amount: {
        value: number
        unit: string
      }
    }[]
    hops: {
      name: string
      amount: {
        value: number
        unit: string
      }
      add: string
      attribute: string
    }[]
    yeast: string
  }
  food_pairing: string[]
  brewers_tips: string
  contributed_by: string
}

export function Home() {
  const [searchCategory, setSearchCategory] = useState('beer_name')
  const [search, setSearch] = useState('')
  const [beers, setBeers] = useState<BeerResponseProps[]>([])
  const { setBeer } = useContext(BeersContext)
  const navigate = useNavigate()

  const { Search } = Input
  const RadioGroup = Radio.Group

  useEffect(() => {
    const getBeers = async () => {
      const populateReq = search !== '' ? `?${searchCategory}=${search}` : ''

      const response = await fetch(`https://api.punkapi.com/v2/beers${populateReq}`);
      const beers = await response.json();
  
      setBeers(beers)
    }

    getBeers()
  }, [search, searchCategory])

  const beerFilterOptions = [
    { label: 'Name', value: 'beer_name' },
    { label: 'Malt', value: 'malt' },
    { label: 'Hops', value: 'hops' },
    { label: 'Food Pairing', value: 'food' }
  ]

  const beerFilterCategory: BeerCategoryProps = {
    'beer_name': 'Name',
    'malt': 'Malt',
    'hops': 'Hops',
    'food': 'Food Pairing'
  }

  return (
    <S.Main>
      <S.Container>
        <Row>
          <Col span={24}>
            <S.SearchTitle>Searching beers by {beerFilterCategory[searchCategory]}</S.SearchTitle>
            <Search placeholder="Search for the perfect beer" onSearch={(value) => setSearch(value)}/>
            <Divider />
            <RadioGroup options={beerFilterOptions} defaultValue={searchCategory} onChange={(event) => setSearchCategory(event.target.value)} />
          </Col>
        </Row>
        <Row>
        <Col span={24}>
          <Divider />
          <S.ProductGrid>
            {beers?.map((beer) => {
              const slug = beer.name.replace(/[^\w-:]/g, '-').toLowerCase()

              function handleClick() {
                setBeer({
                  name: beer.name,
                  tagline: beer.tagline,
                  description: beer.description,
                  image: beer.image_url,
                  food_pairing: beer.food_pairing,
                  ingredients: beer.ingredients
                })
                navigate(`/beer/${slug}`)
              }

              return (
                <ProductCard
                  key={beer.name}
                  name={beer.name}
                  description={beer.tagline}
                  img={beer.image_url}
                  onButtonClick={handleClick}
                />
              )
            })}
          </S.ProductGrid>
          </Col>
        </Row>
      </S.Container>
    </S.Main>
  )
}
