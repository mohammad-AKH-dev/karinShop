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
