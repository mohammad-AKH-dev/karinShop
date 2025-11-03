// paths types

export type subPageType = {
  name: string;
  path: string;
};

export type pageType = {
  name: string;
  path: string;
  subPages: subPageType[] | [];
};

export type categoryType = {
    name: string
    titles?: string[]
    prices?: string[]
    brands?: string[]
    accessories?: string[]
} 



export type pathType = {
  href: string;
  title: string;
  pages: pageType[] | [];
  categories: categoryType[] | []
  $id: string
  $sequence: number
  $createdAt: string
  $updatedAt: string
  $permissions: []
  $databaseId: string
  $collectionId: string
};

export type pathsType = pathType[];

// popular categories types

export type popuarCategoryType = {
  id: string
  title: string
  img: string
}

export type popularCategoriesType = popuarCategoryType[]

// products types 

export type productType = {
  $id: string
  $databaseId: string
  $premissions: []
  $sequence: number
  brand: string
  price: number
  discount: number
  isAvailableToday: boolean
  score: number
  image1: string
  image2: string
  $created_at: string
  $updated_at: string
}

export type productsType = productType[]