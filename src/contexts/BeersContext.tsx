import { createContext, useCallback, useState } from 'react'

export type BeerResponseProps = {
  name: string
  tagline: string
  image: string
  description: string,
  food_pairing: string[]
  ingredients: {
    malt: {
      name: string
      amount: {
        value: number,
        unit: string
      }
    }[]
    hops: {
      name: string
      amount: {
        value: number,
        unit: string
      }
    }[]
    yeast: string
  }
}

type BeersContextData = {
  beer: BeerResponseProps
  setBeer: (newBeer: BeerResponseProps) => void
}

export const BeersContext = createContext({} as BeersContextData)


type BeersContextProviderProps = {
  children: React.ReactNode
}

const initialBeerObj = {
  name: '',
  tagline: '',
  description: '',
  image: '',
  food_pairing: [''],
  ingredients: {
    malt: [
      {
        name: '',
        amount: {
          value: 0,
          unit: ''
        },
      }
    ],
    hops: [
      {
        name: '',
        amount: {
          value: 0,
          unit: ''
        },
      }
    ],
    yeast: ''
  }
}

export function BeersContextProvider({ children }: BeersContextProviderProps) {
  const [beer, setBeer] = useState<BeerResponseProps>(initialBeerObj)

  const updateBeer = useCallback((newBeer: BeerResponseProps) => {
    setBeer(newBeer);
  }, []);

  return (
    <BeersContext.Provider value={{
      beer,
      setBeer: updateBeer
    }}>
      {children}
    </BeersContext.Provider>
  )
}