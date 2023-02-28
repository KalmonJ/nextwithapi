import { GraphQLResolveInfo } from "graphql";
import { Context } from "pages/api/graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cart = {
  __typename?: "Cart";
  id: Scalars["ID"];
  owner: User;
  product: Scalars["String"];
  quantity: Scalars["Int"];
  total: Scalars["Float"];
};

export type Login = {
  __typename?: "Login";
  token: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createCart: Cart;
  createProduct: Product;
  createReview: ProductReview;
  createUser?: Maybe<User>;
  deleteProduct: Scalars["Boolean"];
  updateProduct: Product;
};

export type MutationCreateCartArgs = {
  data?: InputMaybe<InputCart>;
};

export type MutationCreateProductArgs = {
  data: InputProduct;
};

export type MutationCreateReviewArgs = {
  data: InputProductReview;
};

export type MutationCreateUserArgs = {
  data?: InputMaybe<UserInput>;
};

export type MutationDeleteProductArgs = {
  id: Scalars["String"];
};

export type MutationUpdateProductArgs = {
  data: InputProduct;
  id: Scalars["String"];
};

export type Product = {
  __typename?: "Product";
  availability: Scalars["Boolean"];
  category: Scalars["String"];
  descountPercentage: Scalars["Int"];
  description: Scalars["String"];
  id: Scalars["ID"];
  images: Array<ProductImages>;
  name: Scalars["String"];
  price: Scalars["Float"];
  publishedBy: User;
  reviews: Array<ProductReview>;
  salePrice: Scalars["String"];
  salesCount?: Maybe<Scalars["Int"]>;
  stock: Scalars["Int"];
};

export type ProductImages = {
  __typename?: "ProductImages";
  desktop: Scalars["String"];
  mobile?: Maybe<Scalars["String"]>;
  tablet?: Maybe<Scalars["String"]>;
};

export type ProductReview = {
  __typename?: "ProductReview";
  author: User;
  classifications: Scalars["Int"];
  comment: Scalars["String"];
  likes: Scalars["Int"];
  productId: Scalars["ID"];
};

export type Query = {
  __typename?: "Query";
  getCart: Cart;
  getProduct: Product;
  getSession: User;
  getUser: User;
  login: Login;
  products: Array<Product>;
  users: Array<User>;
};

export type QueryGetCartArgs = {
  id?: InputMaybe<Scalars["String"]>;
};

export type QueryGetProductArgs = {
  id: Scalars["String"];
};

export type QueryGetSessionArgs = {
  data?: InputMaybe<InputGetSession>;
};

export type QueryGetUserArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryLoginArgs = {
  data?: InputMaybe<InputLogin>;
};

export type QueryProductsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type User = {
  __typename?: "User";
  cart: Array<Cart>;
  email: Scalars["String"];
  id: Scalars["ID"];
  password: Scalars["String"];
  profileImage?: Maybe<Scalars["String"]>;
  username: Scalars["String"];
};

export type UserInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  profileImage?: InputMaybe<Scalars["String"]>;
  username: Scalars["String"];
};

export type InputCart = {
  owner: Scalars["String"];
  product: Scalars["String"];
  quantity: Scalars["Int"];
  total: Scalars["Float"];
};

export type InputGetSession = {
  token: Scalars["String"];
};

export type InputImages = {
  desktop: Scalars["String"];
  mobile?: InputMaybe<Scalars["String"]>;
  tablet?: InputMaybe<Scalars["String"]>;
};

export type InputLogin = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type InputProduct = {
  category: Scalars["String"];
  description: Scalars["String"];
  images: Array<InputImages>;
  name: Scalars["String"];
  price: Scalars["Float"];
  publishedBy: Scalars["String"];
  stock: Scalars["Int"];
};

export type InputProductReview = {
  author: Scalars["String"];
  classifications: Scalars["Int"];
  comment: Scalars["String"];
  likes: Scalars["Int"];
  productId: Scalars["String"];
};

export type InputUpdateProduct = {
  availability?: InputMaybe<Scalars["Boolean"]>;
  category: Scalars["String"];
  descountPercentage?: InputMaybe<Scalars["Int"]>;
  images: Array<InputMaybe<InputImages>>;
  name: Scalars["String"];
  price: Scalars["Float"];
  salePrice?: InputMaybe<Scalars["Float"]>;
  salesCount?: InputMaybe<Scalars["Int"]>;
  stock: Scalars["Int"];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Cart: ResolverTypeWrapper<Cart>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Login: ResolverTypeWrapper<Login>;
  Mutation: ResolverTypeWrapper<{}>;
  Product: ResolverTypeWrapper<Product>;
  ProductImages: ResolverTypeWrapper<ProductImages>;
  ProductReview: ResolverTypeWrapper<ProductReview>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
  inputCart: InputCart;
  inputGetSession: InputGetSession;
  inputImages: InputImages;
  inputLogin: InputLogin;
  inputProduct: InputProduct;
  inputProductReview: InputProductReview;
  inputUpdateProduct: InputUpdateProduct;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars["Boolean"];
  Cart: Cart;
  Float: Scalars["Float"];
  ID: Scalars["ID"];
  Int: Scalars["Int"];
  Login: Login;
  Mutation: {};
  Product: Product;
  ProductImages: ProductImages;
  ProductReview: ProductReview;
  Query: {};
  String: Scalars["String"];
  User: User;
  UserInput: UserInput;
  inputCart: InputCart;
  inputGetSession: InputGetSession;
  inputImages: InputImages;
  inputLogin: InputLogin;
  inputProduct: InputProduct;
  inputProductReview: InputProductReview;
  inputUpdateProduct: InputUpdateProduct;
}>;

export type CartResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Cart"] = ResolversParentTypes["Cart"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  product?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  total?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoginResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Login"] = ResolversParentTypes["Login"]
> = ResolversObject<{
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  createCart?: Resolver<
    ResolversTypes["Cart"],
    ParentType,
    ContextType,
    Partial<MutationCreateCartArgs>
  >;
  createProduct?: Resolver<
    ResolversTypes["Product"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductArgs, "data">
  >;
  createReview?: Resolver<
    ResolversTypes["ProductReview"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateReviewArgs, "data">
  >;
  createUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    Partial<MutationCreateUserArgs>
  >;
  deleteProduct?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProductArgs, "id">
  >;
  updateProduct?: Resolver<
    ResolversTypes["Product"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProductArgs, "data" | "id">
  >;
}>;

export type ProductResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Product"] = ResolversParentTypes["Product"]
> = ResolversObject<{
  availability?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  category?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  descountPercentage?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  images?: Resolver<
    Array<ResolversTypes["ProductImages"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  price?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  publishedBy?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  reviews?: Resolver<
    Array<ResolversTypes["ProductReview"]>,
    ParentType,
    ContextType
  >;
  salePrice?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  salesCount?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  stock?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductImagesResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["ProductImages"] = ResolversParentTypes["ProductImages"]
> = ResolversObject<{
  desktop?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  mobile?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  tablet?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductReviewResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["ProductReview"] = ResolversParentTypes["ProductReview"]
> = ResolversObject<{
  author?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  classifications?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  comment?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  likes?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  getCart?: Resolver<
    ResolversTypes["Cart"],
    ParentType,
    ContextType,
    Partial<QueryGetCartArgs>
  >;
  getProduct?: Resolver<
    ResolversTypes["Product"],
    ParentType,
    ContextType,
    RequireFields<QueryGetProductArgs, "id">
  >;
  getSession?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    Partial<QueryGetSessionArgs>
  >;
  getUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    Partial<QueryGetUserArgs>
  >;
  login?: Resolver<
    ResolversTypes["Login"],
    ParentType,
    ContextType,
    Partial<QueryLoginArgs>
  >;
  products?: Resolver<
    Array<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    Partial<QueryProductsArgs>
  >;
  users?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
}>;

export type UserResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = ResolversObject<{
  cart?: Resolver<Array<ResolversTypes["Cart"]>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  password?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  profileImage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Cart?: CartResolvers<ContextType>;
  Login?: LoginResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductImages?: ProductImagesResolvers<ContextType>;
  ProductReview?: ProductReviewResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;
