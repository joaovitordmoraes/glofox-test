import { createContext, useCallback, useState } from 'react'

export type BeerResponseProps = {
  name: string
  tagline: string
  image: string
  description: string,
  food_pairing: string[]
}

type BeersContextData = {
  beer: BeerResponseProps
  setBeer: (newBeer: BeerResponseProps) => void
}

export const BeersContext = createContext({} as BeersContextData)


type BeersContextProviderProps = {
  children: React.ReactNode
}

export function BeersContextProvider({ children }: BeersContextProviderProps) {
  const [beer, setBeer] = useState<BeerResponseProps>({
    name: '',
    tagline: '',
    description: '',
    image: '',
    food_pairing: ['']
  })

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