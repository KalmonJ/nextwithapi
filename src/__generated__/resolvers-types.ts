import { Context } from "../pages/api/graphql";
import { BaseContext } from "@apollo/server";
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

export type Login = {
  __typename?: "Login";
  token: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createProduct: Product;
  createUser?: Maybe<User>;
  deleteProduct: Scalars["Boolean"];
  updateProduct: Product;
};

export type MutationCreateProductArgs = {
  data?: InputMaybe<InputProduct>;
};

export type MutationCreateUserArgs = {
  data?: InputMaybe<UserInput>;
};

export type MutationDeleteProductArgs = {
  id: Scalars["String"];
};

export type MutationUpdateProductArgs = {
  id: Scalars["String"];
};

export type Product = {
  __typename?: "Product";
  category: Scalars["String"];
  description: Scalars["String"];
  id: Scalars["ID"];
  image: Scalars["String"];
  name: Scalars["String"];
  price: Scalars["Float"];
};

export type Query = {
  __typename?: "Query";
  getProduct: Product;
  getUser: User;
  login: Login;
  products: Array<Product>;
  users: Array<User>;
};

export type QueryGetProductArgs = {
  id: Scalars["String"];
};

export type QueryGetUserArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryLoginArgs = {
  data?: InputMaybe<InputLogin>;
};

export type User = {
  __typename?: "User";
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

export type InputLogin = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type InputProduct = {
  category: Scalars["String"];
  description: Scalars["String"];
  image: Scalars["String"];
  name: Scalars["String"];
  price: Scalars["Float"];
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
  info: BaseContext
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: BaseContext
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: BaseContext
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
  info: BaseContext
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: BaseContext
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
  info: BaseContext
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Login: ResolverTypeWrapper<Login>;
  Mutation: ResolverTypeWrapper<{}>;
  Product: ResolverTypeWrapper<Product>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
  inputLogin: InputLogin;
  inputProduct: InputProduct;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars["Boolean"];
  Float: Scalars["Float"];
  ID: Scalars["ID"];
  Login: Login;
  Mutation: {};
  Product: Product;
  Query: {};
  String: Scalars["String"];
  User: User;
  UserInput: UserInput;
  inputLogin: InputLogin;
  inputProduct: InputProduct;
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
  createProduct?: Resolver<
    ResolversTypes["Product"],
    ParentType,
    ContextType,
    Partial<MutationCreateProductArgs>
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
    RequireFields<MutationUpdateProductArgs, "id">
  >;
}>;

export type ProductResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Product"] = ResolversParentTypes["Product"]
> = ResolversObject<{
  category?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  image?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  price?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  getProduct?: Resolver<
    ResolversTypes["Product"],
    ParentType,
    ContextType,
    RequireFields<QueryGetProductArgs, "id">
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
    ContextType
  >;
  users?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
}>;

export type UserResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = ResolversObject<{
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
  Login?: LoginResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;
