import { useEffect, useState } from "react";
import { Divider, Input, Col, Row, Radio } from "antd";

import * as S from './styles'

type beerCategoryProps = {
  [key: string]: string
}

export function Home() {
  const [searchCategory, setSearchCategory] = useState('beer_name')
  const [search, setSearch] = useState('')

  const { Search } = Input
  const RadioGroup = Radio.Group

  useEffect(() => {
    const getBeers = async () => {
      const populateReq = search !== '' ? `?${searchCategory}=${search}` : ''

      const response = await fetch(`https://api.punkapi.com/v2/beers${populateReq}`);
      const beers = await response.json();
  
      console.log(beers)
    }

    getBeers()
  }, [search, searchCategory])

  const beerFilterOptions = [
    { label: 'Name', value: 'beer_name' },
    { label: 'Malt', value: 'malt' },
    { label: 'Hops', value: 'hops' },
    { label: 'Food Pairing', value: 'food' }
  ]

  const beerFilterCategory: beerCategoryProps = {
    'beer_name': 'Name',
    'malt': 'Malt',
    'hops': 'Hops',
    'food': 'Food Pairing'
  }

  return (
    <S.Container>
      <Row>
        <Col span={6}>
          <S.Sidebar>
            <S.SearchTitle>Searching beers by {beerFilterCategory[searchCategory]}</S.SearchTitle>
            <Search placeholder="Search for the perfect beer" onSearch={(value) => setSearch(value)}/>
            <Divider />
            <RadioGroup options={beerFilterOptions} defaultValue={searchCategory} onChange={(event) => setSearchCategory(event.target.value)} />
          </S.Sidebar>
        </Col>
      </Row>
    </S.Container>
  )
}
