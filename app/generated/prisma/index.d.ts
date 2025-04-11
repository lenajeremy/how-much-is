
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model State
 * 
 */
export type State = $Result.DefaultSelection<Prisma.$StatePayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model Market
 * 
 */
export type Market = $Result.DefaultSelection<Prisma.$MarketPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model PriceReport
 * 
 */
export type PriceReport = $Result.DefaultSelection<Prisma.$PriceReportPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more States
 * const states = await prisma.state.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more States
   * const states = await prisma.state.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.state`: Exposes CRUD operations for the **State** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.state.findMany()
    * ```
    */
  get state(): Prisma.StateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.market`: Exposes CRUD operations for the **Market** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Markets
    * const markets = await prisma.market.findMany()
    * ```
    */
  get market(): Prisma.MarketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.priceReport`: Exposes CRUD operations for the **PriceReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceReports
    * const priceReports = await prisma.priceReport.findMany()
    * ```
    */
  get priceReport(): Prisma.PriceReportDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    State: 'State',
    City: 'City',
    Market: 'Market',
    Item: 'Item',
    Unit: 'Unit',
    PriceReport: 'PriceReport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "state" | "city" | "market" | "item" | "unit" | "priceReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      State: {
        payload: Prisma.$StatePayload<ExtArgs>
        fields: Prisma.StateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findFirst: {
            args: Prisma.StateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findMany: {
            args: Prisma.StateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          create: {
            args: Prisma.StateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          createMany: {
            args: Prisma.StateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          delete: {
            args: Prisma.StateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          update: {
            args: Prisma.StateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          deleteMany: {
            args: Prisma.StateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          upsert: {
            args: Prisma.StateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          aggregate: {
            args: Prisma.StateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateState>
          }
          groupBy: {
            args: Prisma.StateGroupByArgs<ExtArgs>
            result: $Utils.Optional<StateGroupByOutputType>[]
          }
          count: {
            args: Prisma.StateCountArgs<ExtArgs>
            result: $Utils.Optional<StateCountAggregateOutputType> | number
          }
        }
      }
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      Market: {
        payload: Prisma.$MarketPayload<ExtArgs>
        fields: Prisma.MarketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          findFirst: {
            args: Prisma.MarketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          findMany: {
            args: Prisma.MarketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          create: {
            args: Prisma.MarketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          createMany: {
            args: Prisma.MarketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          delete: {
            args: Prisma.MarketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          update: {
            args: Prisma.MarketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          deleteMany: {
            args: Prisma.MarketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          upsert: {
            args: Prisma.MarketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          aggregate: {
            args: Prisma.MarketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarket>
          }
          groupBy: {
            args: Prisma.MarketGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketCountArgs<ExtArgs>
            result: $Utils.Optional<MarketCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      PriceReport: {
        payload: Prisma.$PriceReportPayload<ExtArgs>
        fields: Prisma.PriceReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload>
          }
          findFirst: {
            args: Prisma.PriceReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload>
          }
          findMany: {
            args: Prisma.PriceReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload>[]
          }
          create: {
            args: Prisma.PriceReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload>
          }
          createMany: {
            args: Prisma.PriceReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload>[]
          }
          delete: {
            args: Prisma.PriceReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload>
          }
          update: {
            args: Prisma.PriceReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload>
          }
          deleteMany: {
            args: Prisma.PriceReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PriceReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload>[]
          }
          upsert: {
            args: Prisma.PriceReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceReportPayload>
          }
          aggregate: {
            args: Prisma.PriceReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceReport>
          }
          groupBy: {
            args: Prisma.PriceReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceReportCountArgs<ExtArgs>
            result: $Utils.Optional<PriceReportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    state?: StateOmit
    city?: CityOmit
    market?: MarketOmit
    item?: ItemOmit
    unit?: UnitOmit
    priceReport?: PriceReportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StateCountOutputType
   */

  export type StateCountOutputType = {
    cities: number
  }

  export type StateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | StateCountOutputTypeCountCitiesArgs
  }

  // Custom InputTypes
  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateCountOutputType
     */
    select?: StateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeCountCitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
  }


  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    markets: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    markets?: boolean | CityCountOutputTypeCountMarketsArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountMarketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketWhereInput
  }


  /**
   * Count Type MarketCountOutputType
   */

  export type MarketCountOutputType = {
    priceReports: number
  }

  export type MarketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    priceReports?: boolean | MarketCountOutputTypeCountPriceReportsArgs
  }

  // Custom InputTypes
  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCountOutputType
     */
    select?: MarketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeCountPriceReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceReportWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    units: number
    priceReports: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | ItemCountOutputTypeCountUnitsArgs
    priceReports?: boolean | ItemCountOutputTypeCountPriceReportsArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountPriceReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceReportWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    priceReports: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    priceReports?: boolean | UnitCountOutputTypeCountPriceReportsArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountPriceReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceReportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model State
   */

  export type AggregateState = {
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  export type StateAvgAggregateOutputType = {
    id: number | null
  }

  export type StateSumAggregateOutputType = {
    id: number | null
  }

  export type StateMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type StateMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type StateCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type StateAvgAggregateInputType = {
    id?: true
  }

  export type StateSumAggregateInputType = {
    id?: true
  }

  export type StateMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type StateMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type StateCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type StateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which State to aggregate.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned States
    **/
    _count?: true | StateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateMaxAggregateInputType
  }

  export type GetStateAggregateType<T extends StateAggregateArgs> = {
        [P in keyof T & keyof AggregateState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateState[P]>
      : GetScalarType<T[P], AggregateState[P]>
  }




  export type StateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateWhereInput
    orderBy?: StateOrderByWithAggregationInput | StateOrderByWithAggregationInput[]
    by: StateScalarFieldEnum[] | StateScalarFieldEnum
    having?: StateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateCountAggregateInputType | true
    _avg?: StateAvgAggregateInputType
    _sum?: StateSumAggregateInputType
    _min?: StateMinAggregateInputType
    _max?: StateMaxAggregateInputType
  }

  export type StateGroupByOutputType = {
    id: number
    name: string
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  type GetStateGroupByPayload<T extends StateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateGroupByOutputType[P]>
            : GetScalarType<T[P], StateGroupByOutputType[P]>
        }
      >
    >


  export type StateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cities?: boolean | State$citiesArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["state"]>

  export type StateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["state"]>

  export type StateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["state"]>

  export type StateSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type StateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["state"]>
  export type StateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | State$citiesArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "State"
    objects: {
      cities: Prisma.$CityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["state"]>
    composites: {}
  }

  type StateGetPayload<S extends boolean | null | undefined | StateDefaultArgs> = $Result.GetResult<Prisma.$StatePayload, S>

  type StateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StateCountAggregateInputType | true
    }

  export interface StateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['State'], meta: { name: 'State' } }
    /**
     * Find zero or one State that matches the filter.
     * @param {StateFindUniqueArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StateFindUniqueArgs>(args: SelectSubset<T, StateFindUniqueArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one State that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StateFindUniqueOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StateFindUniqueOrThrowArgs>(args: SelectSubset<T, StateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StateFindFirstArgs>(args?: SelectSubset<T, StateFindFirstArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StateFindFirstOrThrowArgs>(args?: SelectSubset<T, StateFindFirstOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.state.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.state.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateWithIdOnly = await prisma.state.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StateFindManyArgs>(args?: SelectSubset<T, StateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a State.
     * @param {StateCreateArgs} args - Arguments to create a State.
     * @example
     * // Create one State
     * const State = await prisma.state.create({
     *   data: {
     *     // ... data to create a State
     *   }
     * })
     * 
     */
    create<T extends StateCreateArgs>(args: SelectSubset<T, StateCreateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many States.
     * @param {StateCreateManyArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StateCreateManyArgs>(args?: SelectSubset<T, StateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many States and returns the data saved in the database.
     * @param {StateCreateManyAndReturnArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many States and only return the `id`
     * const stateWithIdOnly = await prisma.state.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StateCreateManyAndReturnArgs>(args?: SelectSubset<T, StateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a State.
     * @param {StateDeleteArgs} args - Arguments to delete one State.
     * @example
     * // Delete one State
     * const State = await prisma.state.delete({
     *   where: {
     *     // ... filter to delete one State
     *   }
     * })
     * 
     */
    delete<T extends StateDeleteArgs>(args: SelectSubset<T, StateDeleteArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one State.
     * @param {StateUpdateArgs} args - Arguments to update one State.
     * @example
     * // Update one State
     * const state = await prisma.state.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StateUpdateArgs>(args: SelectSubset<T, StateUpdateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more States.
     * @param {StateDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.state.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StateDeleteManyArgs>(args?: SelectSubset<T, StateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const state = await prisma.state.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StateUpdateManyArgs>(args: SelectSubset<T, StateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States and returns the data updated in the database.
     * @param {StateUpdateManyAndReturnArgs} args - Arguments to update many States.
     * @example
     * // Update many States
     * const state = await prisma.state.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more States and only return the `id`
     * const stateWithIdOnly = await prisma.state.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StateUpdateManyAndReturnArgs>(args: SelectSubset<T, StateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one State.
     * @param {StateUpsertArgs} args - Arguments to update or create a State.
     * @example
     * // Update or create a State
     * const state = await prisma.state.upsert({
     *   create: {
     *     // ... data to create a State
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State we want to update
     *   }
     * })
     */
    upsert<T extends StateUpsertArgs>(args: SelectSubset<T, StateUpsertArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.state.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends StateCountArgs>(
      args?: Subset<T, StateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StateAggregateArgs>(args: Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>

    /**
     * Group by State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateGroupByArgs['orderBy'] }
        : { orderBy?: StateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the State model
   */
  readonly fields: StateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for State.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cities<T extends State$citiesArgs<ExtArgs> = {}>(args?: Subset<T, State$citiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the State model
   */
  interface StateFieldRefs {
    readonly id: FieldRef<"State", 'Int'>
    readonly name: FieldRef<"State", 'String'>
  }
    

  // Custom InputTypes
  /**
   * State findUnique
   */
  export type StateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findUniqueOrThrow
   */
  export type StateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findFirst
   */
  export type StateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findFirstOrThrow
   */
  export type StateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findMany
   */
  export type StateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which States to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State create
   */
  export type StateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to create a State.
     */
    data: XOR<StateCreateInput, StateUncheckedCreateInput>
  }

  /**
   * State createMany
   */
  export type StateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State createManyAndReturn
   */
  export type StateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State update
   */
  export type StateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to update a State.
     */
    data: XOR<StateUpdateInput, StateUncheckedUpdateInput>
    /**
     * Choose, which State to update.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State updateMany
   */
  export type StateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
    /**
     * Limit how many States to update.
     */
    limit?: number
  }

  /**
   * State updateManyAndReturn
   */
  export type StateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
    /**
     * Limit how many States to update.
     */
    limit?: number
  }

  /**
   * State upsert
   */
  export type StateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The filter to search for the State to update in case it exists.
     */
    where: StateWhereUniqueInput
    /**
     * In case the State found by the `where` argument doesn't exist, create a new State with this data.
     */
    create: XOR<StateCreateInput, StateUncheckedCreateInput>
    /**
     * In case the State was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateUpdateInput, StateUncheckedUpdateInput>
  }

  /**
   * State delete
   */
  export type StateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter which State to delete.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State deleteMany
   */
  export type StateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which States to delete
     */
    where?: StateWhereInput
    /**
     * Limit how many States to delete.
     */
    limit?: number
  }

  /**
   * State.cities
   */
  export type State$citiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    cursor?: CityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * State without action
   */
  export type StateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
  }


  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityAvgAggregateOutputType = {
    id: number | null
    stateId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CitySumAggregateOutputType = {
    id: number | null
    stateId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CityMinAggregateOutputType = {
    id: number | null
    name: string | null
    stateId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    stateId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    name: number
    stateId: number
    latitude: number
    longitude: number
    _all: number
  }


  export type CityAvgAggregateInputType = {
    id?: true
    stateId?: true
    latitude?: true
    longitude?: true
  }

  export type CitySumAggregateInputType = {
    id?: true
    stateId?: true
    latitude?: true
    longitude?: true
  }

  export type CityMinAggregateInputType = {
    id?: true
    name?: true
    stateId?: true
    latitude?: true
    longitude?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    name?: true
    stateId?: true
    latitude?: true
    longitude?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    name?: true
    stateId?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _avg?: CityAvgAggregateInputType
    _sum?: CitySumAggregateInputType
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: number
    name: string
    stateId: number
    latitude: number | null
    longitude: number | null
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateId?: boolean
    latitude?: boolean
    longitude?: boolean
    state?: boolean | StateDefaultArgs<ExtArgs>
    markets?: boolean | City$marketsArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateId?: boolean
    latitude?: boolean
    longitude?: boolean
    state?: boolean | StateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateId?: boolean
    latitude?: boolean
    longitude?: boolean
    state?: boolean | StateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectScalar = {
    id?: boolean
    name?: boolean
    stateId?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type CityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "stateId" | "latitude" | "longitude", ExtArgs["result"]["city"]>
  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | StateDefaultArgs<ExtArgs>
    markets?: boolean | City$marketsArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | StateDefaultArgs<ExtArgs>
  }
  export type CityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | StateDefaultArgs<ExtArgs>
  }

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      state: Prisma.$StatePayload<ExtArgs>
      markets: Prisma.$MarketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      stateId: number
      latitude: number | null
      longitude: number | null
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityFindUniqueArgs>(args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityFindFirstArgs>(args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityFindManyArgs>(args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends CityCreateArgs>(args: SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityCreateManyArgs>(args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {CityCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CityCreateManyAndReturnArgs>(args?: SelectSubset<T, CityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends CityDeleteArgs>(args: SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityUpdateArgs>(args: SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityDeleteManyArgs>(args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityUpdateManyArgs>(args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities and returns the data updated in the database.
     * @param {CityUpdateManyAndReturnArgs} args - Arguments to update many Cities.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CityUpdateManyAndReturnArgs>(args: SelectSubset<T, CityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(args: SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    state<T extends StateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StateDefaultArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    markets<T extends City$marketsArgs<ExtArgs> = {}>(args?: Subset<T, City$marketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the City model
   */
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'Int'>
    readonly name: FieldRef<"City", 'String'>
    readonly stateId: FieldRef<"City", 'Int'>
    readonly latitude: FieldRef<"City", 'Float'>
    readonly longitude: FieldRef<"City", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City createManyAndReturn
   */
  export type CityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
  }

  /**
   * City updateManyAndReturn
   */
  export type CityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to delete.
     */
    limit?: number
  }

  /**
   * City.markets
   */
  export type City$marketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    where?: MarketWhereInput
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    cursor?: MarketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model Market
   */

  export type AggregateMarket = {
    _count: MarketCountAggregateOutputType | null
    _avg: MarketAvgAggregateOutputType | null
    _sum: MarketSumAggregateOutputType | null
    _min: MarketMinAggregateOutputType | null
    _max: MarketMaxAggregateOutputType | null
  }

  export type MarketAvgAggregateOutputType = {
    id: number | null
    cityId: number | null
  }

  export type MarketSumAggregateOutputType = {
    id: number | null
    cityId: number | null
  }

  export type MarketMinAggregateOutputType = {
    id: number | null
    name: string | null
    cityId: number | null
  }

  export type MarketMaxAggregateOutputType = {
    id: number | null
    name: string | null
    cityId: number | null
  }

  export type MarketCountAggregateOutputType = {
    id: number
    name: number
    cityId: number
    _all: number
  }


  export type MarketAvgAggregateInputType = {
    id?: true
    cityId?: true
  }

  export type MarketSumAggregateInputType = {
    id?: true
    cityId?: true
  }

  export type MarketMinAggregateInputType = {
    id?: true
    name?: true
    cityId?: true
  }

  export type MarketMaxAggregateInputType = {
    id?: true
    name?: true
    cityId?: true
  }

  export type MarketCountAggregateInputType = {
    id?: true
    name?: true
    cityId?: true
    _all?: true
  }

  export type MarketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Market to aggregate.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Markets
    **/
    _count?: true | MarketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketMaxAggregateInputType
  }

  export type GetMarketAggregateType<T extends MarketAggregateArgs> = {
        [P in keyof T & keyof AggregateMarket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarket[P]>
      : GetScalarType<T[P], AggregateMarket[P]>
  }




  export type MarketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketWhereInput
    orderBy?: MarketOrderByWithAggregationInput | MarketOrderByWithAggregationInput[]
    by: MarketScalarFieldEnum[] | MarketScalarFieldEnum
    having?: MarketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketCountAggregateInputType | true
    _avg?: MarketAvgAggregateInputType
    _sum?: MarketSumAggregateInputType
    _min?: MarketMinAggregateInputType
    _max?: MarketMaxAggregateInputType
  }

  export type MarketGroupByOutputType = {
    id: number
    name: string
    cityId: number
    _count: MarketCountAggregateOutputType | null
    _avg: MarketAvgAggregateOutputType | null
    _sum: MarketSumAggregateOutputType | null
    _min: MarketMinAggregateOutputType | null
    _max: MarketMaxAggregateOutputType | null
  }

  type GetMarketGroupByPayload<T extends MarketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketGroupByOutputType[P]>
            : GetScalarType<T[P], MarketGroupByOutputType[P]>
        }
      >
    >


  export type MarketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cityId?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    priceReports?: boolean | Market$priceReportsArgs<ExtArgs>
    _count?: boolean | MarketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["market"]>

  export type MarketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cityId?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["market"]>

  export type MarketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cityId?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["market"]>

  export type MarketSelectScalar = {
    id?: boolean
    name?: boolean
    cityId?: boolean
  }

  export type MarketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cityId", ExtArgs["result"]["market"]>
  export type MarketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    priceReports?: boolean | Market$priceReportsArgs<ExtArgs>
    _count?: boolean | MarketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }
  export type MarketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $MarketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Market"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
      priceReports: Prisma.$PriceReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      cityId: number
    }, ExtArgs["result"]["market"]>
    composites: {}
  }

  type MarketGetPayload<S extends boolean | null | undefined | MarketDefaultArgs> = $Result.GetResult<Prisma.$MarketPayload, S>

  type MarketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketCountAggregateInputType | true
    }

  export interface MarketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Market'], meta: { name: 'Market' } }
    /**
     * Find zero or one Market that matches the filter.
     * @param {MarketFindUniqueArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketFindUniqueArgs>(args: SelectSubset<T, MarketFindUniqueArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Market that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketFindUniqueOrThrowArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Market that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindFirstArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketFindFirstArgs>(args?: SelectSubset<T, MarketFindFirstArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Market that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindFirstOrThrowArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Markets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Markets
     * const markets = await prisma.market.findMany()
     * 
     * // Get first 10 Markets
     * const markets = await prisma.market.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketWithIdOnly = await prisma.market.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketFindManyArgs>(args?: SelectSubset<T, MarketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Market.
     * @param {MarketCreateArgs} args - Arguments to create a Market.
     * @example
     * // Create one Market
     * const Market = await prisma.market.create({
     *   data: {
     *     // ... data to create a Market
     *   }
     * })
     * 
     */
    create<T extends MarketCreateArgs>(args: SelectSubset<T, MarketCreateArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Markets.
     * @param {MarketCreateManyArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const market = await prisma.market.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketCreateManyArgs>(args?: SelectSubset<T, MarketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Markets and returns the data saved in the database.
     * @param {MarketCreateManyAndReturnArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const market = await prisma.market.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Markets and only return the `id`
     * const marketWithIdOnly = await prisma.market.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Market.
     * @param {MarketDeleteArgs} args - Arguments to delete one Market.
     * @example
     * // Delete one Market
     * const Market = await prisma.market.delete({
     *   where: {
     *     // ... filter to delete one Market
     *   }
     * })
     * 
     */
    delete<T extends MarketDeleteArgs>(args: SelectSubset<T, MarketDeleteArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Market.
     * @param {MarketUpdateArgs} args - Arguments to update one Market.
     * @example
     * // Update one Market
     * const market = await prisma.market.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketUpdateArgs>(args: SelectSubset<T, MarketUpdateArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Markets.
     * @param {MarketDeleteManyArgs} args - Arguments to filter Markets to delete.
     * @example
     * // Delete a few Markets
     * const { count } = await prisma.market.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketDeleteManyArgs>(args?: SelectSubset<T, MarketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Markets
     * const market = await prisma.market.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketUpdateManyArgs>(args: SelectSubset<T, MarketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets and returns the data updated in the database.
     * @param {MarketUpdateManyAndReturnArgs} args - Arguments to update many Markets.
     * @example
     * // Update many Markets
     * const market = await prisma.market.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Markets and only return the `id`
     * const marketWithIdOnly = await prisma.market.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarketUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Market.
     * @param {MarketUpsertArgs} args - Arguments to update or create a Market.
     * @example
     * // Update or create a Market
     * const market = await prisma.market.upsert({
     *   create: {
     *     // ... data to create a Market
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Market we want to update
     *   }
     * })
     */
    upsert<T extends MarketUpsertArgs>(args: SelectSubset<T, MarketUpsertArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketCountArgs} args - Arguments to filter Markets to count.
     * @example
     * // Count the number of Markets
     * const count = await prisma.market.count({
     *   where: {
     *     // ... the filter for the Markets we want to count
     *   }
     * })
    **/
    count<T extends MarketCountArgs>(
      args?: Subset<T, MarketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Market.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketAggregateArgs>(args: Subset<T, MarketAggregateArgs>): Prisma.PrismaPromise<GetMarketAggregateType<T>>

    /**
     * Group by Market.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketGroupByArgs['orderBy'] }
        : { orderBy?: MarketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Market model
   */
  readonly fields: MarketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Market.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    priceReports<T extends Market$priceReportsArgs<ExtArgs> = {}>(args?: Subset<T, Market$priceReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Market model
   */
  interface MarketFieldRefs {
    readonly id: FieldRef<"Market", 'Int'>
    readonly name: FieldRef<"Market", 'String'>
    readonly cityId: FieldRef<"Market", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Market findUnique
   */
  export type MarketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market findUniqueOrThrow
   */
  export type MarketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market findFirst
   */
  export type MarketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market findFirstOrThrow
   */
  export type MarketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market findMany
   */
  export type MarketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Markets to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market create
   */
  export type MarketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The data needed to create a Market.
     */
    data: XOR<MarketCreateInput, MarketUncheckedCreateInput>
  }

  /**
   * Market createMany
   */
  export type MarketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Markets.
     */
    data: MarketCreateManyInput | MarketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Market createManyAndReturn
   */
  export type MarketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * The data used to create many Markets.
     */
    data: MarketCreateManyInput | MarketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Market update
   */
  export type MarketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The data needed to update a Market.
     */
    data: XOR<MarketUpdateInput, MarketUncheckedUpdateInput>
    /**
     * Choose, which Market to update.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market updateMany
   */
  export type MarketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to update.
     */
    limit?: number
  }

  /**
   * Market updateManyAndReturn
   */
  export type MarketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Market upsert
   */
  export type MarketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The filter to search for the Market to update in case it exists.
     */
    where: MarketWhereUniqueInput
    /**
     * In case the Market found by the `where` argument doesn't exist, create a new Market with this data.
     */
    create: XOR<MarketCreateInput, MarketUncheckedCreateInput>
    /**
     * In case the Market was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketUpdateInput, MarketUncheckedUpdateInput>
  }

  /**
   * Market delete
   */
  export type MarketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter which Market to delete.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market deleteMany
   */
  export type MarketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Markets to delete
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to delete.
     */
    limit?: number
  }

  /**
   * Market.priceReports
   */
  export type Market$priceReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    where?: PriceReportWhereInput
    orderBy?: PriceReportOrderByWithRelationInput | PriceReportOrderByWithRelationInput[]
    cursor?: PriceReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceReportScalarFieldEnum | PriceReportScalarFieldEnum[]
  }

  /**
   * Market without action
   */
  export type MarketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    name: string
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    units?: boolean | Item$unitsArgs<ExtArgs>
    priceReports?: boolean | Item$priceReportsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | Item$unitsArgs<ExtArgs>
    priceReports?: boolean | Item$priceReportsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      units: Prisma.$UnitPayload<ExtArgs>[]
      priceReports: Prisma.$PriceReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    units<T extends Item$unitsArgs<ExtArgs> = {}>(args?: Subset<T, Item$unitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    priceReports<T extends Item$priceReportsArgs<ExtArgs> = {}>(args?: Subset<T, Item$priceReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly name: FieldRef<"Item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.units
   */
  export type Item$unitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    cursor?: UnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Item.priceReports
   */
  export type Item$priceReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    where?: PriceReportWhereInput
    orderBy?: PriceReportOrderByWithRelationInput | PriceReportOrderByWithRelationInput[]
    cursor?: PriceReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceReportScalarFieldEnum | PriceReportScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitAvgAggregateOutputType = {
    id: number | null
    itemId: number | null
  }

  export type UnitSumAggregateOutputType = {
    id: number | null
    itemId: number | null
  }

  export type UnitMinAggregateOutputType = {
    id: number | null
    name: string | null
    itemId: number | null
  }

  export type UnitMaxAggregateOutputType = {
    id: number | null
    name: string | null
    itemId: number | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    name: number
    itemId: number
    _all: number
  }


  export type UnitAvgAggregateInputType = {
    id?: true
    itemId?: true
  }

  export type UnitSumAggregateInputType = {
    id?: true
    itemId?: true
  }

  export type UnitMinAggregateInputType = {
    id?: true
    name?: true
    itemId?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    name?: true
    itemId?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    name?: true
    itemId?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _avg?: UnitAvgAggregateInputType
    _sum?: UnitSumAggregateInputType
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: number
    name: string
    itemId: number
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    itemId?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    priceReports?: boolean | Unit$priceReportsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    itemId?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    itemId?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectScalar = {
    id?: boolean
    name?: boolean
    itemId?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "itemId", ExtArgs["result"]["unit"]>
  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    priceReports?: boolean | Unit$priceReportsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type UnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
      priceReports: Prisma.$PriceReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      itemId: number
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {UnitCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {UnitUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnitUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    priceReports<T extends Unit$priceReportsArgs<ExtArgs> = {}>(args?: Subset<T, Unit$priceReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'Int'>
    readonly name: FieldRef<"Unit", 'String'>
    readonly itemId: FieldRef<"Unit", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit createManyAndReturn
   */
  export type UnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit updateManyAndReturn
   */
  export type UnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit.priceReports
   */
  export type Unit$priceReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    where?: PriceReportWhereInput
    orderBy?: PriceReportOrderByWithRelationInput | PriceReportOrderByWithRelationInput[]
    cursor?: PriceReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceReportScalarFieldEnum | PriceReportScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


  /**
   * Model PriceReport
   */

  export type AggregatePriceReport = {
    _count: PriceReportCountAggregateOutputType | null
    _avg: PriceReportAvgAggregateOutputType | null
    _sum: PriceReportSumAggregateOutputType | null
    _min: PriceReportMinAggregateOutputType | null
    _max: PriceReportMaxAggregateOutputType | null
  }

  export type PriceReportAvgAggregateOutputType = {
    id: number | null
    price: number | null
    itemId: number | null
    unitId: number | null
    marketId: number | null
  }

  export type PriceReportSumAggregateOutputType = {
    id: number | null
    price: number | null
    itemId: number | null
    unitId: number | null
    marketId: number | null
  }

  export type PriceReportMinAggregateOutputType = {
    id: number | null
    price: number | null
    itemId: number | null
    unitId: number | null
    marketId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PriceReportMaxAggregateOutputType = {
    id: number | null
    price: number | null
    itemId: number | null
    unitId: number | null
    marketId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PriceReportCountAggregateOutputType = {
    id: number
    price: number
    itemId: number
    unitId: number
    marketId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PriceReportAvgAggregateInputType = {
    id?: true
    price?: true
    itemId?: true
    unitId?: true
    marketId?: true
  }

  export type PriceReportSumAggregateInputType = {
    id?: true
    price?: true
    itemId?: true
    unitId?: true
    marketId?: true
  }

  export type PriceReportMinAggregateInputType = {
    id?: true
    price?: true
    itemId?: true
    unitId?: true
    marketId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PriceReportMaxAggregateInputType = {
    id?: true
    price?: true
    itemId?: true
    unitId?: true
    marketId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PriceReportCountAggregateInputType = {
    id?: true
    price?: true
    itemId?: true
    unitId?: true
    marketId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PriceReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceReport to aggregate.
     */
    where?: PriceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceReports to fetch.
     */
    orderBy?: PriceReportOrderByWithRelationInput | PriceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceReports
    **/
    _count?: true | PriceReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceReportMaxAggregateInputType
  }

  export type GetPriceReportAggregateType<T extends PriceReportAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceReport[P]>
      : GetScalarType<T[P], AggregatePriceReport[P]>
  }




  export type PriceReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceReportWhereInput
    orderBy?: PriceReportOrderByWithAggregationInput | PriceReportOrderByWithAggregationInput[]
    by: PriceReportScalarFieldEnum[] | PriceReportScalarFieldEnum
    having?: PriceReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceReportCountAggregateInputType | true
    _avg?: PriceReportAvgAggregateInputType
    _sum?: PriceReportSumAggregateInputType
    _min?: PriceReportMinAggregateInputType
    _max?: PriceReportMaxAggregateInputType
  }

  export type PriceReportGroupByOutputType = {
    id: number
    price: number
    itemId: number
    unitId: number
    marketId: number
    createdAt: Date
    updatedAt: Date
    _count: PriceReportCountAggregateOutputType | null
    _avg: PriceReportAvgAggregateOutputType | null
    _sum: PriceReportSumAggregateOutputType | null
    _min: PriceReportMinAggregateOutputType | null
    _max: PriceReportMaxAggregateOutputType | null
  }

  type GetPriceReportGroupByPayload<T extends PriceReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceReportGroupByOutputType[P]>
            : GetScalarType<T[P], PriceReportGroupByOutputType[P]>
        }
      >
    >


  export type PriceReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    itemId?: boolean
    unitId?: boolean
    marketId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceReport"]>

  export type PriceReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    itemId?: boolean
    unitId?: boolean
    marketId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceReport"]>

  export type PriceReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    itemId?: boolean
    unitId?: boolean
    marketId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceReport"]>

  export type PriceReportSelectScalar = {
    id?: boolean
    price?: boolean
    itemId?: boolean
    unitId?: boolean
    marketId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PriceReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "itemId" | "unitId" | "marketId" | "createdAt" | "updatedAt", ExtArgs["result"]["priceReport"]>
  export type PriceReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type PriceReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type PriceReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }

  export type $PriceReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceReport"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs>
      market: Prisma.$MarketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      price: number
      itemId: number
      unitId: number
      marketId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["priceReport"]>
    composites: {}
  }

  type PriceReportGetPayload<S extends boolean | null | undefined | PriceReportDefaultArgs> = $Result.GetResult<Prisma.$PriceReportPayload, S>

  type PriceReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceReportCountAggregateInputType | true
    }

  export interface PriceReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceReport'], meta: { name: 'PriceReport' } }
    /**
     * Find zero or one PriceReport that matches the filter.
     * @param {PriceReportFindUniqueArgs} args - Arguments to find a PriceReport
     * @example
     * // Get one PriceReport
     * const priceReport = await prisma.priceReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceReportFindUniqueArgs>(args: SelectSubset<T, PriceReportFindUniqueArgs<ExtArgs>>): Prisma__PriceReportClient<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PriceReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceReportFindUniqueOrThrowArgs} args - Arguments to find a PriceReport
     * @example
     * // Get one PriceReport
     * const priceReport = await prisma.priceReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceReportFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceReportClient<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceReportFindFirstArgs} args - Arguments to find a PriceReport
     * @example
     * // Get one PriceReport
     * const priceReport = await prisma.priceReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceReportFindFirstArgs>(args?: SelectSubset<T, PriceReportFindFirstArgs<ExtArgs>>): Prisma__PriceReportClient<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceReportFindFirstOrThrowArgs} args - Arguments to find a PriceReport
     * @example
     * // Get one PriceReport
     * const priceReport = await prisma.priceReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceReportFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceReportClient<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PriceReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceReports
     * const priceReports = await prisma.priceReport.findMany()
     * 
     * // Get first 10 PriceReports
     * const priceReports = await prisma.priceReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceReportWithIdOnly = await prisma.priceReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceReportFindManyArgs>(args?: SelectSubset<T, PriceReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PriceReport.
     * @param {PriceReportCreateArgs} args - Arguments to create a PriceReport.
     * @example
     * // Create one PriceReport
     * const PriceReport = await prisma.priceReport.create({
     *   data: {
     *     // ... data to create a PriceReport
     *   }
     * })
     * 
     */
    create<T extends PriceReportCreateArgs>(args: SelectSubset<T, PriceReportCreateArgs<ExtArgs>>): Prisma__PriceReportClient<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PriceReports.
     * @param {PriceReportCreateManyArgs} args - Arguments to create many PriceReports.
     * @example
     * // Create many PriceReports
     * const priceReport = await prisma.priceReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceReportCreateManyArgs>(args?: SelectSubset<T, PriceReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceReports and returns the data saved in the database.
     * @param {PriceReportCreateManyAndReturnArgs} args - Arguments to create many PriceReports.
     * @example
     * // Create many PriceReports
     * const priceReport = await prisma.priceReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceReports and only return the `id`
     * const priceReportWithIdOnly = await prisma.priceReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceReportCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PriceReport.
     * @param {PriceReportDeleteArgs} args - Arguments to delete one PriceReport.
     * @example
     * // Delete one PriceReport
     * const PriceReport = await prisma.priceReport.delete({
     *   where: {
     *     // ... filter to delete one PriceReport
     *   }
     * })
     * 
     */
    delete<T extends PriceReportDeleteArgs>(args: SelectSubset<T, PriceReportDeleteArgs<ExtArgs>>): Prisma__PriceReportClient<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PriceReport.
     * @param {PriceReportUpdateArgs} args - Arguments to update one PriceReport.
     * @example
     * // Update one PriceReport
     * const priceReport = await prisma.priceReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceReportUpdateArgs>(args: SelectSubset<T, PriceReportUpdateArgs<ExtArgs>>): Prisma__PriceReportClient<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PriceReports.
     * @param {PriceReportDeleteManyArgs} args - Arguments to filter PriceReports to delete.
     * @example
     * // Delete a few PriceReports
     * const { count } = await prisma.priceReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceReportDeleteManyArgs>(args?: SelectSubset<T, PriceReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceReports
     * const priceReport = await prisma.priceReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceReportUpdateManyArgs>(args: SelectSubset<T, PriceReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceReports and returns the data updated in the database.
     * @param {PriceReportUpdateManyAndReturnArgs} args - Arguments to update many PriceReports.
     * @example
     * // Update many PriceReports
     * const priceReport = await prisma.priceReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PriceReports and only return the `id`
     * const priceReportWithIdOnly = await prisma.priceReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PriceReportUpdateManyAndReturnArgs>(args: SelectSubset<T, PriceReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PriceReport.
     * @param {PriceReportUpsertArgs} args - Arguments to update or create a PriceReport.
     * @example
     * // Update or create a PriceReport
     * const priceReport = await prisma.priceReport.upsert({
     *   create: {
     *     // ... data to create a PriceReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceReport we want to update
     *   }
     * })
     */
    upsert<T extends PriceReportUpsertArgs>(args: SelectSubset<T, PriceReportUpsertArgs<ExtArgs>>): Prisma__PriceReportClient<$Result.GetResult<Prisma.$PriceReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PriceReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceReportCountArgs} args - Arguments to filter PriceReports to count.
     * @example
     * // Count the number of PriceReports
     * const count = await prisma.priceReport.count({
     *   where: {
     *     // ... the filter for the PriceReports we want to count
     *   }
     * })
    **/
    count<T extends PriceReportCountArgs>(
      args?: Subset<T, PriceReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceReportAggregateArgs>(args: Subset<T, PriceReportAggregateArgs>): Prisma.PrismaPromise<GetPriceReportAggregateType<T>>

    /**
     * Group by PriceReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceReportGroupByArgs['orderBy'] }
        : { orderBy?: PriceReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceReport model
   */
  readonly fields: PriceReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    market<T extends MarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketDefaultArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PriceReport model
   */
  interface PriceReportFieldRefs {
    readonly id: FieldRef<"PriceReport", 'Int'>
    readonly price: FieldRef<"PriceReport", 'Float'>
    readonly itemId: FieldRef<"PriceReport", 'Int'>
    readonly unitId: FieldRef<"PriceReport", 'Int'>
    readonly marketId: FieldRef<"PriceReport", 'Int'>
    readonly createdAt: FieldRef<"PriceReport", 'DateTime'>
    readonly updatedAt: FieldRef<"PriceReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PriceReport findUnique
   */
  export type PriceReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    /**
     * Filter, which PriceReport to fetch.
     */
    where: PriceReportWhereUniqueInput
  }

  /**
   * PriceReport findUniqueOrThrow
   */
  export type PriceReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    /**
     * Filter, which PriceReport to fetch.
     */
    where: PriceReportWhereUniqueInput
  }

  /**
   * PriceReport findFirst
   */
  export type PriceReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    /**
     * Filter, which PriceReport to fetch.
     */
    where?: PriceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceReports to fetch.
     */
    orderBy?: PriceReportOrderByWithRelationInput | PriceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceReports.
     */
    cursor?: PriceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceReports.
     */
    distinct?: PriceReportScalarFieldEnum | PriceReportScalarFieldEnum[]
  }

  /**
   * PriceReport findFirstOrThrow
   */
  export type PriceReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    /**
     * Filter, which PriceReport to fetch.
     */
    where?: PriceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceReports to fetch.
     */
    orderBy?: PriceReportOrderByWithRelationInput | PriceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceReports.
     */
    cursor?: PriceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceReports.
     */
    distinct?: PriceReportScalarFieldEnum | PriceReportScalarFieldEnum[]
  }

  /**
   * PriceReport findMany
   */
  export type PriceReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    /**
     * Filter, which PriceReports to fetch.
     */
    where?: PriceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceReports to fetch.
     */
    orderBy?: PriceReportOrderByWithRelationInput | PriceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceReports.
     */
    cursor?: PriceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceReports.
     */
    skip?: number
    distinct?: PriceReportScalarFieldEnum | PriceReportScalarFieldEnum[]
  }

  /**
   * PriceReport create
   */
  export type PriceReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceReport.
     */
    data: XOR<PriceReportCreateInput, PriceReportUncheckedCreateInput>
  }

  /**
   * PriceReport createMany
   */
  export type PriceReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceReports.
     */
    data: PriceReportCreateManyInput | PriceReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceReport createManyAndReturn
   */
  export type PriceReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * The data used to create many PriceReports.
     */
    data: PriceReportCreateManyInput | PriceReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceReport update
   */
  export type PriceReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceReport.
     */
    data: XOR<PriceReportUpdateInput, PriceReportUncheckedUpdateInput>
    /**
     * Choose, which PriceReport to update.
     */
    where: PriceReportWhereUniqueInput
  }

  /**
   * PriceReport updateMany
   */
  export type PriceReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceReports.
     */
    data: XOR<PriceReportUpdateManyMutationInput, PriceReportUncheckedUpdateManyInput>
    /**
     * Filter which PriceReports to update
     */
    where?: PriceReportWhereInput
    /**
     * Limit how many PriceReports to update.
     */
    limit?: number
  }

  /**
   * PriceReport updateManyAndReturn
   */
  export type PriceReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * The data used to update PriceReports.
     */
    data: XOR<PriceReportUpdateManyMutationInput, PriceReportUncheckedUpdateManyInput>
    /**
     * Filter which PriceReports to update
     */
    where?: PriceReportWhereInput
    /**
     * Limit how many PriceReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceReport upsert
   */
  export type PriceReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceReport to update in case it exists.
     */
    where: PriceReportWhereUniqueInput
    /**
     * In case the PriceReport found by the `where` argument doesn't exist, create a new PriceReport with this data.
     */
    create: XOR<PriceReportCreateInput, PriceReportUncheckedCreateInput>
    /**
     * In case the PriceReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceReportUpdateInput, PriceReportUncheckedUpdateInput>
  }

  /**
   * PriceReport delete
   */
  export type PriceReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
    /**
     * Filter which PriceReport to delete.
     */
    where: PriceReportWhereUniqueInput
  }

  /**
   * PriceReport deleteMany
   */
  export type PriceReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceReports to delete
     */
    where?: PriceReportWhereInput
    /**
     * Limit how many PriceReports to delete.
     */
    limit?: number
  }

  /**
   * PriceReport without action
   */
  export type PriceReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceReport
     */
    select?: PriceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceReport
     */
    omit?: PriceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceReportInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StateScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stateId: 'stateId',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const MarketScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cityId: 'cityId'
  };

  export type MarketScalarFieldEnum = (typeof MarketScalarFieldEnum)[keyof typeof MarketScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    itemId: 'itemId'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const PriceReportScalarFieldEnum: {
    id: 'id',
    price: 'price',
    itemId: 'itemId',
    unitId: 'unitId',
    marketId: 'marketId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PriceReportScalarFieldEnum = (typeof PriceReportScalarFieldEnum)[keyof typeof PriceReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type StateWhereInput = {
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    id?: IntFilter<"State"> | number
    name?: StringFilter<"State"> | string
    cities?: CityListRelationFilter
  }

  export type StateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cities?: CityOrderByRelationAggregateInput
  }

  export type StateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    cities?: CityListRelationFilter
  }, "id" | "name">

  export type StateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: StateCountOrderByAggregateInput
    _avg?: StateAvgOrderByAggregateInput
    _max?: StateMaxOrderByAggregateInput
    _min?: StateMinOrderByAggregateInput
    _sum?: StateSumOrderByAggregateInput
  }

  export type StateScalarWhereWithAggregatesInput = {
    AND?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    OR?: StateScalarWhereWithAggregatesInput[]
    NOT?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"State"> | number
    name?: StringWithAggregatesFilter<"State"> | string
  }

  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: IntFilter<"City"> | number
    name?: StringFilter<"City"> | string
    stateId?: IntFilter<"City"> | number
    latitude?: FloatNullableFilter<"City"> | number | null
    longitude?: FloatNullableFilter<"City"> | number | null
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
    markets?: MarketListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    state?: StateOrderByWithRelationInput
    markets?: MarketOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_stateId?: CityNameStateIdCompoundUniqueInput
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    name?: StringFilter<"City"> | string
    stateId?: IntFilter<"City"> | number
    latitude?: FloatNullableFilter<"City"> | number | null
    longitude?: FloatNullableFilter<"City"> | number | null
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
    markets?: MarketListRelationFilter
  }, "id" | "name_stateId">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    _count?: CityCountOrderByAggregateInput
    _avg?: CityAvgOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
    _sum?: CitySumOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"City"> | number
    name?: StringWithAggregatesFilter<"City"> | string
    stateId?: IntWithAggregatesFilter<"City"> | number
    latitude?: FloatNullableWithAggregatesFilter<"City"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"City"> | number | null
  }

  export type MarketWhereInput = {
    AND?: MarketWhereInput | MarketWhereInput[]
    OR?: MarketWhereInput[]
    NOT?: MarketWhereInput | MarketWhereInput[]
    id?: IntFilter<"Market"> | number
    name?: StringFilter<"Market"> | string
    cityId?: IntFilter<"Market"> | number
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    priceReports?: PriceReportListRelationFilter
  }

  export type MarketOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    city?: CityOrderByWithRelationInput
    priceReports?: PriceReportOrderByRelationAggregateInput
  }

  export type MarketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_cityId?: MarketNameCityIdCompoundUniqueInput
    AND?: MarketWhereInput | MarketWhereInput[]
    OR?: MarketWhereInput[]
    NOT?: MarketWhereInput | MarketWhereInput[]
    name?: StringFilter<"Market"> | string
    cityId?: IntFilter<"Market"> | number
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    priceReports?: PriceReportListRelationFilter
  }, "id" | "name_cityId">

  export type MarketOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    _count?: MarketCountOrderByAggregateInput
    _avg?: MarketAvgOrderByAggregateInput
    _max?: MarketMaxOrderByAggregateInput
    _min?: MarketMinOrderByAggregateInput
    _sum?: MarketSumOrderByAggregateInput
  }

  export type MarketScalarWhereWithAggregatesInput = {
    AND?: MarketScalarWhereWithAggregatesInput | MarketScalarWhereWithAggregatesInput[]
    OR?: MarketScalarWhereWithAggregatesInput[]
    NOT?: MarketScalarWhereWithAggregatesInput | MarketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Market"> | number
    name?: StringWithAggregatesFilter<"Market"> | string
    cityId?: IntWithAggregatesFilter<"Market"> | number
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    name?: StringFilter<"Item"> | string
    units?: UnitListRelationFilter
    priceReports?: PriceReportListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    units?: UnitOrderByRelationAggregateInput
    priceReports?: PriceReportOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    units?: UnitListRelationFilter
    priceReports?: PriceReportListRelationFilter
  }, "id" | "name">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    name?: StringWithAggregatesFilter<"Item"> | string
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: IntFilter<"Unit"> | number
    name?: StringFilter<"Unit"> | string
    itemId?: IntFilter<"Unit"> | number
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    priceReports?: PriceReportListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    itemId?: SortOrder
    item?: ItemOrderByWithRelationInput
    priceReports?: PriceReportOrderByRelationAggregateInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_itemId?: UnitNameItemIdCompoundUniqueInput
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    name?: StringFilter<"Unit"> | string
    itemId?: IntFilter<"Unit"> | number
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    priceReports?: PriceReportListRelationFilter
  }, "id" | "name_itemId">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    itemId?: SortOrder
    _count?: UnitCountOrderByAggregateInput
    _avg?: UnitAvgOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
    _sum?: UnitSumOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Unit"> | number
    name?: StringWithAggregatesFilter<"Unit"> | string
    itemId?: IntWithAggregatesFilter<"Unit"> | number
  }

  export type PriceReportWhereInput = {
    AND?: PriceReportWhereInput | PriceReportWhereInput[]
    OR?: PriceReportWhereInput[]
    NOT?: PriceReportWhereInput | PriceReportWhereInput[]
    id?: IntFilter<"PriceReport"> | number
    price?: FloatFilter<"PriceReport"> | number
    itemId?: IntFilter<"PriceReport"> | number
    unitId?: IntFilter<"PriceReport"> | number
    marketId?: IntFilter<"PriceReport"> | number
    createdAt?: DateTimeFilter<"PriceReport"> | Date | string
    updatedAt?: DateTimeFilter<"PriceReport"> | Date | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }

  export type PriceReportOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    itemId?: SortOrder
    unitId?: SortOrder
    marketId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    item?: ItemOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    market?: MarketOrderByWithRelationInput
  }

  export type PriceReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PriceReportWhereInput | PriceReportWhereInput[]
    OR?: PriceReportWhereInput[]
    NOT?: PriceReportWhereInput | PriceReportWhereInput[]
    price?: FloatFilter<"PriceReport"> | number
    itemId?: IntFilter<"PriceReport"> | number
    unitId?: IntFilter<"PriceReport"> | number
    marketId?: IntFilter<"PriceReport"> | number
    createdAt?: DateTimeFilter<"PriceReport"> | Date | string
    updatedAt?: DateTimeFilter<"PriceReport"> | Date | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }, "id">

  export type PriceReportOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    itemId?: SortOrder
    unitId?: SortOrder
    marketId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PriceReportCountOrderByAggregateInput
    _avg?: PriceReportAvgOrderByAggregateInput
    _max?: PriceReportMaxOrderByAggregateInput
    _min?: PriceReportMinOrderByAggregateInput
    _sum?: PriceReportSumOrderByAggregateInput
  }

  export type PriceReportScalarWhereWithAggregatesInput = {
    AND?: PriceReportScalarWhereWithAggregatesInput | PriceReportScalarWhereWithAggregatesInput[]
    OR?: PriceReportScalarWhereWithAggregatesInput[]
    NOT?: PriceReportScalarWhereWithAggregatesInput | PriceReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PriceReport"> | number
    price?: FloatWithAggregatesFilter<"PriceReport"> | number
    itemId?: IntWithAggregatesFilter<"PriceReport"> | number
    unitId?: IntWithAggregatesFilter<"PriceReport"> | number
    marketId?: IntWithAggregatesFilter<"PriceReport"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PriceReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PriceReport"> | Date | string
  }

  export type StateCreateInput = {
    name: string
    cities?: CityCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateInput = {
    id?: number
    name: string
    cities?: CityUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cities?: CityUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cities?: CityUncheckedUpdateManyWithoutStateNestedInput
  }

  export type StateCreateManyInput = {
    id?: number
    name: string
  }

  export type StateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CityCreateInput = {
    name: string
    latitude?: number | null
    longitude?: number | null
    state: StateCreateNestedOneWithoutCitiesInput
    markets?: MarketCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: number
    name: string
    stateId: number
    latitude?: number | null
    longitude?: number | null
    markets?: MarketUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    state?: StateUpdateOneRequiredWithoutCitiesNestedInput
    markets?: MarketUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    markets?: MarketUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: number
    name: string
    stateId: number
    latitude?: number | null
    longitude?: number | null
  }

  export type CityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MarketCreateInput = {
    name: string
    city: CityCreateNestedOneWithoutMarketsInput
    priceReports?: PriceReportCreateNestedManyWithoutMarketInput
  }

  export type MarketUncheckedCreateInput = {
    id?: number
    name: string
    cityId: number
    priceReports?: PriceReportUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: CityUpdateOneRequiredWithoutMarketsNestedInput
    priceReports?: PriceReportUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cityId?: IntFieldUpdateOperationsInput | number
    priceReports?: PriceReportUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type MarketCreateManyInput = {
    id?: number
    name: string
    cityId: number
  }

  export type MarketUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MarketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cityId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemCreateInput = {
    name: string
    units?: UnitCreateNestedManyWithoutItemInput
    priceReports?: PriceReportCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    name: string
    units?: UnitUncheckedCreateNestedManyWithoutItemInput
    priceReports?: PriceReportUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    units?: UnitUpdateManyWithoutItemNestedInput
    priceReports?: PriceReportUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    units?: UnitUncheckedUpdateManyWithoutItemNestedInput
    priceReports?: PriceReportUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: number
    name: string
  }

  export type ItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UnitCreateInput = {
    name: string
    item: ItemCreateNestedOneWithoutUnitsInput
    priceReports?: PriceReportCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateInput = {
    id?: number
    name: string
    itemId: number
    priceReports?: PriceReportUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    item?: ItemUpdateOneRequiredWithoutUnitsNestedInput
    priceReports?: PriceReportUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    priceReports?: PriceReportUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    id?: number
    name: string
    itemId: number
  }

  export type UnitUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type PriceReportCreateInput = {
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    item: ItemCreateNestedOneWithoutPriceReportsInput
    unit: UnitCreateNestedOneWithoutPriceReportsInput
    market: MarketCreateNestedOneWithoutPriceReportsInput
  }

  export type PriceReportUncheckedCreateInput = {
    id?: number
    price: number
    itemId: number
    unitId: number
    marketId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceReportUpdateInput = {
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutPriceReportsNestedInput
    unit?: UnitUpdateOneRequiredWithoutPriceReportsNestedInput
    market?: MarketUpdateOneRequiredWithoutPriceReportsNestedInput
  }

  export type PriceReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    unitId?: IntFieldUpdateOperationsInput | number
    marketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceReportCreateManyInput = {
    id?: number
    price: number
    itemId: number
    unitId: number
    marketId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceReportUpdateManyMutationInput = {
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    unitId?: IntFieldUpdateOperationsInput | number
    marketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CityListRelationFilter = {
    every?: CityWhereInput
    some?: CityWhereInput
    none?: CityWhereInput
  }

  export type CityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StateScalarRelationFilter = {
    is?: StateWhereInput
    isNot?: StateWhereInput
  }

  export type MarketListRelationFilter = {
    every?: MarketWhereInput
    some?: MarketWhereInput
    none?: MarketWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MarketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CityNameStateIdCompoundUniqueInput = {
    name: string
    stateId: number
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CityAvgOrderByAggregateInput = {
    id?: SortOrder
    stateId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CitySumOrderByAggregateInput = {
    id?: SortOrder
    stateId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CityScalarRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type PriceReportListRelationFilter = {
    every?: PriceReportWhereInput
    some?: PriceReportWhereInput
    none?: PriceReportWhereInput
  }

  export type PriceReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarketNameCityIdCompoundUniqueInput = {
    name: string
    cityId: number
  }

  export type MarketCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
  }

  export type MarketAvgOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
  }

  export type MarketMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
  }

  export type MarketMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
  }

  export type MarketSumOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
  }

  export type UnitListRelationFilter = {
    every?: UnitWhereInput
    some?: UnitWhereInput
    none?: UnitWhereInput
  }

  export type UnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type UnitNameItemIdCompoundUniqueInput = {
    name: string
    itemId: number
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    itemId?: SortOrder
  }

  export type UnitAvgOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    itemId?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    itemId?: SortOrder
  }

  export type UnitSumOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UnitScalarRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type MarketScalarRelationFilter = {
    is?: MarketWhereInput
    isNot?: MarketWhereInput
  }

  export type PriceReportCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    itemId?: SortOrder
    unitId?: SortOrder
    marketId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceReportAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    itemId?: SortOrder
    unitId?: SortOrder
    marketId?: SortOrder
  }

  export type PriceReportMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    itemId?: SortOrder
    unitId?: SortOrder
    marketId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceReportMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    itemId?: SortOrder
    unitId?: SortOrder
    marketId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceReportSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    itemId?: SortOrder
    unitId?: SortOrder
    marketId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CityCreateNestedManyWithoutStateInput = {
    create?: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput> | CityCreateWithoutStateInput[] | CityUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CityCreateOrConnectWithoutStateInput | CityCreateOrConnectWithoutStateInput[]
    createMany?: CityCreateManyStateInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type CityUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput> | CityCreateWithoutStateInput[] | CityUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CityCreateOrConnectWithoutStateInput | CityCreateOrConnectWithoutStateInput[]
    createMany?: CityCreateManyStateInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CityUpdateManyWithoutStateNestedInput = {
    create?: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput> | CityCreateWithoutStateInput[] | CityUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CityCreateOrConnectWithoutStateInput | CityCreateOrConnectWithoutStateInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutStateInput | CityUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: CityCreateManyStateInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutStateInput | CityUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: CityUpdateManyWithWhereWithoutStateInput | CityUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CityUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput> | CityCreateWithoutStateInput[] | CityUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CityCreateOrConnectWithoutStateInput | CityCreateOrConnectWithoutStateInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutStateInput | CityUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: CityCreateManyStateInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutStateInput | CityUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: CityUpdateManyWithWhereWithoutStateInput | CityUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type StateCreateNestedOneWithoutCitiesInput = {
    create?: XOR<StateCreateWithoutCitiesInput, StateUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: StateCreateOrConnectWithoutCitiesInput
    connect?: StateWhereUniqueInput
  }

  export type MarketCreateNestedManyWithoutCityInput = {
    create?: XOR<MarketCreateWithoutCityInput, MarketUncheckedCreateWithoutCityInput> | MarketCreateWithoutCityInput[] | MarketUncheckedCreateWithoutCityInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutCityInput | MarketCreateOrConnectWithoutCityInput[]
    createMany?: MarketCreateManyCityInputEnvelope
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
  }

  export type MarketUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<MarketCreateWithoutCityInput, MarketUncheckedCreateWithoutCityInput> | MarketCreateWithoutCityInput[] | MarketUncheckedCreateWithoutCityInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutCityInput | MarketCreateOrConnectWithoutCityInput[]
    createMany?: MarketCreateManyCityInputEnvelope
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StateUpdateOneRequiredWithoutCitiesNestedInput = {
    create?: XOR<StateCreateWithoutCitiesInput, StateUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: StateCreateOrConnectWithoutCitiesInput
    upsert?: StateUpsertWithoutCitiesInput
    connect?: StateWhereUniqueInput
    update?: XOR<XOR<StateUpdateToOneWithWhereWithoutCitiesInput, StateUpdateWithoutCitiesInput>, StateUncheckedUpdateWithoutCitiesInput>
  }

  export type MarketUpdateManyWithoutCityNestedInput = {
    create?: XOR<MarketCreateWithoutCityInput, MarketUncheckedCreateWithoutCityInput> | MarketCreateWithoutCityInput[] | MarketUncheckedCreateWithoutCityInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutCityInput | MarketCreateOrConnectWithoutCityInput[]
    upsert?: MarketUpsertWithWhereUniqueWithoutCityInput | MarketUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: MarketCreateManyCityInputEnvelope
    set?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    disconnect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    delete?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    update?: MarketUpdateWithWhereUniqueWithoutCityInput | MarketUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: MarketUpdateManyWithWhereWithoutCityInput | MarketUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: MarketScalarWhereInput | MarketScalarWhereInput[]
  }

  export type MarketUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<MarketCreateWithoutCityInput, MarketUncheckedCreateWithoutCityInput> | MarketCreateWithoutCityInput[] | MarketUncheckedCreateWithoutCityInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutCityInput | MarketCreateOrConnectWithoutCityInput[]
    upsert?: MarketUpsertWithWhereUniqueWithoutCityInput | MarketUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: MarketCreateManyCityInputEnvelope
    set?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    disconnect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    delete?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    update?: MarketUpdateWithWhereUniqueWithoutCityInput | MarketUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: MarketUpdateManyWithWhereWithoutCityInput | MarketUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: MarketScalarWhereInput | MarketScalarWhereInput[]
  }

  export type CityCreateNestedOneWithoutMarketsInput = {
    create?: XOR<CityCreateWithoutMarketsInput, CityUncheckedCreateWithoutMarketsInput>
    connectOrCreate?: CityCreateOrConnectWithoutMarketsInput
    connect?: CityWhereUniqueInput
  }

  export type PriceReportCreateNestedManyWithoutMarketInput = {
    create?: XOR<PriceReportCreateWithoutMarketInput, PriceReportUncheckedCreateWithoutMarketInput> | PriceReportCreateWithoutMarketInput[] | PriceReportUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: PriceReportCreateOrConnectWithoutMarketInput | PriceReportCreateOrConnectWithoutMarketInput[]
    createMany?: PriceReportCreateManyMarketInputEnvelope
    connect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
  }

  export type PriceReportUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<PriceReportCreateWithoutMarketInput, PriceReportUncheckedCreateWithoutMarketInput> | PriceReportCreateWithoutMarketInput[] | PriceReportUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: PriceReportCreateOrConnectWithoutMarketInput | PriceReportCreateOrConnectWithoutMarketInput[]
    createMany?: PriceReportCreateManyMarketInputEnvelope
    connect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
  }

  export type CityUpdateOneRequiredWithoutMarketsNestedInput = {
    create?: XOR<CityCreateWithoutMarketsInput, CityUncheckedCreateWithoutMarketsInput>
    connectOrCreate?: CityCreateOrConnectWithoutMarketsInput
    upsert?: CityUpsertWithoutMarketsInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutMarketsInput, CityUpdateWithoutMarketsInput>, CityUncheckedUpdateWithoutMarketsInput>
  }

  export type PriceReportUpdateManyWithoutMarketNestedInput = {
    create?: XOR<PriceReportCreateWithoutMarketInput, PriceReportUncheckedCreateWithoutMarketInput> | PriceReportCreateWithoutMarketInput[] | PriceReportUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: PriceReportCreateOrConnectWithoutMarketInput | PriceReportCreateOrConnectWithoutMarketInput[]
    upsert?: PriceReportUpsertWithWhereUniqueWithoutMarketInput | PriceReportUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: PriceReportCreateManyMarketInputEnvelope
    set?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    disconnect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    delete?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    connect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    update?: PriceReportUpdateWithWhereUniqueWithoutMarketInput | PriceReportUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: PriceReportUpdateManyWithWhereWithoutMarketInput | PriceReportUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: PriceReportScalarWhereInput | PriceReportScalarWhereInput[]
  }

  export type PriceReportUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<PriceReportCreateWithoutMarketInput, PriceReportUncheckedCreateWithoutMarketInput> | PriceReportCreateWithoutMarketInput[] | PriceReportUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: PriceReportCreateOrConnectWithoutMarketInput | PriceReportCreateOrConnectWithoutMarketInput[]
    upsert?: PriceReportUpsertWithWhereUniqueWithoutMarketInput | PriceReportUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: PriceReportCreateManyMarketInputEnvelope
    set?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    disconnect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    delete?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    connect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    update?: PriceReportUpdateWithWhereUniqueWithoutMarketInput | PriceReportUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: PriceReportUpdateManyWithWhereWithoutMarketInput | PriceReportUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: PriceReportScalarWhereInput | PriceReportScalarWhereInput[]
  }

  export type UnitCreateNestedManyWithoutItemInput = {
    create?: XOR<UnitCreateWithoutItemInput, UnitUncheckedCreateWithoutItemInput> | UnitCreateWithoutItemInput[] | UnitUncheckedCreateWithoutItemInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutItemInput | UnitCreateOrConnectWithoutItemInput[]
    createMany?: UnitCreateManyItemInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type PriceReportCreateNestedManyWithoutItemInput = {
    create?: XOR<PriceReportCreateWithoutItemInput, PriceReportUncheckedCreateWithoutItemInput> | PriceReportCreateWithoutItemInput[] | PriceReportUncheckedCreateWithoutItemInput[]
    connectOrCreate?: PriceReportCreateOrConnectWithoutItemInput | PriceReportCreateOrConnectWithoutItemInput[]
    createMany?: PriceReportCreateManyItemInputEnvelope
    connect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
  }

  export type UnitUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<UnitCreateWithoutItemInput, UnitUncheckedCreateWithoutItemInput> | UnitCreateWithoutItemInput[] | UnitUncheckedCreateWithoutItemInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutItemInput | UnitCreateOrConnectWithoutItemInput[]
    createMany?: UnitCreateManyItemInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type PriceReportUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<PriceReportCreateWithoutItemInput, PriceReportUncheckedCreateWithoutItemInput> | PriceReportCreateWithoutItemInput[] | PriceReportUncheckedCreateWithoutItemInput[]
    connectOrCreate?: PriceReportCreateOrConnectWithoutItemInput | PriceReportCreateOrConnectWithoutItemInput[]
    createMany?: PriceReportCreateManyItemInputEnvelope
    connect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
  }

  export type UnitUpdateManyWithoutItemNestedInput = {
    create?: XOR<UnitCreateWithoutItemInput, UnitUncheckedCreateWithoutItemInput> | UnitCreateWithoutItemInput[] | UnitUncheckedCreateWithoutItemInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutItemInput | UnitCreateOrConnectWithoutItemInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutItemInput | UnitUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: UnitCreateManyItemInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutItemInput | UnitUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutItemInput | UnitUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type PriceReportUpdateManyWithoutItemNestedInput = {
    create?: XOR<PriceReportCreateWithoutItemInput, PriceReportUncheckedCreateWithoutItemInput> | PriceReportCreateWithoutItemInput[] | PriceReportUncheckedCreateWithoutItemInput[]
    connectOrCreate?: PriceReportCreateOrConnectWithoutItemInput | PriceReportCreateOrConnectWithoutItemInput[]
    upsert?: PriceReportUpsertWithWhereUniqueWithoutItemInput | PriceReportUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: PriceReportCreateManyItemInputEnvelope
    set?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    disconnect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    delete?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    connect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    update?: PriceReportUpdateWithWhereUniqueWithoutItemInput | PriceReportUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: PriceReportUpdateManyWithWhereWithoutItemInput | PriceReportUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: PriceReportScalarWhereInput | PriceReportScalarWhereInput[]
  }

  export type UnitUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<UnitCreateWithoutItemInput, UnitUncheckedCreateWithoutItemInput> | UnitCreateWithoutItemInput[] | UnitUncheckedCreateWithoutItemInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutItemInput | UnitCreateOrConnectWithoutItemInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutItemInput | UnitUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: UnitCreateManyItemInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutItemInput | UnitUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutItemInput | UnitUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type PriceReportUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<PriceReportCreateWithoutItemInput, PriceReportUncheckedCreateWithoutItemInput> | PriceReportCreateWithoutItemInput[] | PriceReportUncheckedCreateWithoutItemInput[]
    connectOrCreate?: PriceReportCreateOrConnectWithoutItemInput | PriceReportCreateOrConnectWithoutItemInput[]
    upsert?: PriceReportUpsertWithWhereUniqueWithoutItemInput | PriceReportUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: PriceReportCreateManyItemInputEnvelope
    set?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    disconnect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    delete?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    connect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    update?: PriceReportUpdateWithWhereUniqueWithoutItemInput | PriceReportUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: PriceReportUpdateManyWithWhereWithoutItemInput | PriceReportUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: PriceReportScalarWhereInput | PriceReportScalarWhereInput[]
  }

  export type ItemCreateNestedOneWithoutUnitsInput = {
    create?: XOR<ItemCreateWithoutUnitsInput, ItemUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutUnitsInput
    connect?: ItemWhereUniqueInput
  }

  export type PriceReportCreateNestedManyWithoutUnitInput = {
    create?: XOR<PriceReportCreateWithoutUnitInput, PriceReportUncheckedCreateWithoutUnitInput> | PriceReportCreateWithoutUnitInput[] | PriceReportUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: PriceReportCreateOrConnectWithoutUnitInput | PriceReportCreateOrConnectWithoutUnitInput[]
    createMany?: PriceReportCreateManyUnitInputEnvelope
    connect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
  }

  export type PriceReportUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<PriceReportCreateWithoutUnitInput, PriceReportUncheckedCreateWithoutUnitInput> | PriceReportCreateWithoutUnitInput[] | PriceReportUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: PriceReportCreateOrConnectWithoutUnitInput | PriceReportCreateOrConnectWithoutUnitInput[]
    createMany?: PriceReportCreateManyUnitInputEnvelope
    connect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
  }

  export type ItemUpdateOneRequiredWithoutUnitsNestedInput = {
    create?: XOR<ItemCreateWithoutUnitsInput, ItemUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutUnitsInput
    upsert?: ItemUpsertWithoutUnitsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutUnitsInput, ItemUpdateWithoutUnitsInput>, ItemUncheckedUpdateWithoutUnitsInput>
  }

  export type PriceReportUpdateManyWithoutUnitNestedInput = {
    create?: XOR<PriceReportCreateWithoutUnitInput, PriceReportUncheckedCreateWithoutUnitInput> | PriceReportCreateWithoutUnitInput[] | PriceReportUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: PriceReportCreateOrConnectWithoutUnitInput | PriceReportCreateOrConnectWithoutUnitInput[]
    upsert?: PriceReportUpsertWithWhereUniqueWithoutUnitInput | PriceReportUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: PriceReportCreateManyUnitInputEnvelope
    set?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    disconnect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    delete?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    connect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    update?: PriceReportUpdateWithWhereUniqueWithoutUnitInput | PriceReportUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: PriceReportUpdateManyWithWhereWithoutUnitInput | PriceReportUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: PriceReportScalarWhereInput | PriceReportScalarWhereInput[]
  }

  export type PriceReportUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<PriceReportCreateWithoutUnitInput, PriceReportUncheckedCreateWithoutUnitInput> | PriceReportCreateWithoutUnitInput[] | PriceReportUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: PriceReportCreateOrConnectWithoutUnitInput | PriceReportCreateOrConnectWithoutUnitInput[]
    upsert?: PriceReportUpsertWithWhereUniqueWithoutUnitInput | PriceReportUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: PriceReportCreateManyUnitInputEnvelope
    set?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    disconnect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    delete?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    connect?: PriceReportWhereUniqueInput | PriceReportWhereUniqueInput[]
    update?: PriceReportUpdateWithWhereUniqueWithoutUnitInput | PriceReportUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: PriceReportUpdateManyWithWhereWithoutUnitInput | PriceReportUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: PriceReportScalarWhereInput | PriceReportScalarWhereInput[]
  }

  export type ItemCreateNestedOneWithoutPriceReportsInput = {
    create?: XOR<ItemCreateWithoutPriceReportsInput, ItemUncheckedCreateWithoutPriceReportsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutPriceReportsInput
    connect?: ItemWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutPriceReportsInput = {
    create?: XOR<UnitCreateWithoutPriceReportsInput, UnitUncheckedCreateWithoutPriceReportsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutPriceReportsInput
    connect?: UnitWhereUniqueInput
  }

  export type MarketCreateNestedOneWithoutPriceReportsInput = {
    create?: XOR<MarketCreateWithoutPriceReportsInput, MarketUncheckedCreateWithoutPriceReportsInput>
    connectOrCreate?: MarketCreateOrConnectWithoutPriceReportsInput
    connect?: MarketWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ItemUpdateOneRequiredWithoutPriceReportsNestedInput = {
    create?: XOR<ItemCreateWithoutPriceReportsInput, ItemUncheckedCreateWithoutPriceReportsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutPriceReportsInput
    upsert?: ItemUpsertWithoutPriceReportsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutPriceReportsInput, ItemUpdateWithoutPriceReportsInput>, ItemUncheckedUpdateWithoutPriceReportsInput>
  }

  export type UnitUpdateOneRequiredWithoutPriceReportsNestedInput = {
    create?: XOR<UnitCreateWithoutPriceReportsInput, UnitUncheckedCreateWithoutPriceReportsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutPriceReportsInput
    upsert?: UnitUpsertWithoutPriceReportsInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutPriceReportsInput, UnitUpdateWithoutPriceReportsInput>, UnitUncheckedUpdateWithoutPriceReportsInput>
  }

  export type MarketUpdateOneRequiredWithoutPriceReportsNestedInput = {
    create?: XOR<MarketCreateWithoutPriceReportsInput, MarketUncheckedCreateWithoutPriceReportsInput>
    connectOrCreate?: MarketCreateOrConnectWithoutPriceReportsInput
    upsert?: MarketUpsertWithoutPriceReportsInput
    connect?: MarketWhereUniqueInput
    update?: XOR<XOR<MarketUpdateToOneWithWhereWithoutPriceReportsInput, MarketUpdateWithoutPriceReportsInput>, MarketUncheckedUpdateWithoutPriceReportsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CityCreateWithoutStateInput = {
    name: string
    latitude?: number | null
    longitude?: number | null
    markets?: MarketCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutStateInput = {
    id?: number
    name: string
    latitude?: number | null
    longitude?: number | null
    markets?: MarketUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutStateInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput>
  }

  export type CityCreateManyStateInputEnvelope = {
    data: CityCreateManyStateInput | CityCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type CityUpsertWithWhereUniqueWithoutStateInput = {
    where: CityWhereUniqueInput
    update: XOR<CityUpdateWithoutStateInput, CityUncheckedUpdateWithoutStateInput>
    create: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput>
  }

  export type CityUpdateWithWhereUniqueWithoutStateInput = {
    where: CityWhereUniqueInput
    data: XOR<CityUpdateWithoutStateInput, CityUncheckedUpdateWithoutStateInput>
  }

  export type CityUpdateManyWithWhereWithoutStateInput = {
    where: CityScalarWhereInput
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyWithoutStateInput>
  }

  export type CityScalarWhereInput = {
    AND?: CityScalarWhereInput | CityScalarWhereInput[]
    OR?: CityScalarWhereInput[]
    NOT?: CityScalarWhereInput | CityScalarWhereInput[]
    id?: IntFilter<"City"> | number
    name?: StringFilter<"City"> | string
    stateId?: IntFilter<"City"> | number
    latitude?: FloatNullableFilter<"City"> | number | null
    longitude?: FloatNullableFilter<"City"> | number | null
  }

  export type StateCreateWithoutCitiesInput = {
    name: string
  }

  export type StateUncheckedCreateWithoutCitiesInput = {
    id?: number
    name: string
  }

  export type StateCreateOrConnectWithoutCitiesInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutCitiesInput, StateUncheckedCreateWithoutCitiesInput>
  }

  export type MarketCreateWithoutCityInput = {
    name: string
    priceReports?: PriceReportCreateNestedManyWithoutMarketInput
  }

  export type MarketUncheckedCreateWithoutCityInput = {
    id?: number
    name: string
    priceReports?: PriceReportUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketCreateOrConnectWithoutCityInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutCityInput, MarketUncheckedCreateWithoutCityInput>
  }

  export type MarketCreateManyCityInputEnvelope = {
    data: MarketCreateManyCityInput | MarketCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type StateUpsertWithoutCitiesInput = {
    update: XOR<StateUpdateWithoutCitiesInput, StateUncheckedUpdateWithoutCitiesInput>
    create: XOR<StateCreateWithoutCitiesInput, StateUncheckedCreateWithoutCitiesInput>
    where?: StateWhereInput
  }

  export type StateUpdateToOneWithWhereWithoutCitiesInput = {
    where?: StateWhereInput
    data: XOR<StateUpdateWithoutCitiesInput, StateUncheckedUpdateWithoutCitiesInput>
  }

  export type StateUpdateWithoutCitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StateUncheckedUpdateWithoutCitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MarketUpsertWithWhereUniqueWithoutCityInput = {
    where: MarketWhereUniqueInput
    update: XOR<MarketUpdateWithoutCityInput, MarketUncheckedUpdateWithoutCityInput>
    create: XOR<MarketCreateWithoutCityInput, MarketUncheckedCreateWithoutCityInput>
  }

  export type MarketUpdateWithWhereUniqueWithoutCityInput = {
    where: MarketWhereUniqueInput
    data: XOR<MarketUpdateWithoutCityInput, MarketUncheckedUpdateWithoutCityInput>
  }

  export type MarketUpdateManyWithWhereWithoutCityInput = {
    where: MarketScalarWhereInput
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyWithoutCityInput>
  }

  export type MarketScalarWhereInput = {
    AND?: MarketScalarWhereInput | MarketScalarWhereInput[]
    OR?: MarketScalarWhereInput[]
    NOT?: MarketScalarWhereInput | MarketScalarWhereInput[]
    id?: IntFilter<"Market"> | number
    name?: StringFilter<"Market"> | string
    cityId?: IntFilter<"Market"> | number
  }

  export type CityCreateWithoutMarketsInput = {
    name: string
    latitude?: number | null
    longitude?: number | null
    state: StateCreateNestedOneWithoutCitiesInput
  }

  export type CityUncheckedCreateWithoutMarketsInput = {
    id?: number
    name: string
    stateId: number
    latitude?: number | null
    longitude?: number | null
  }

  export type CityCreateOrConnectWithoutMarketsInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutMarketsInput, CityUncheckedCreateWithoutMarketsInput>
  }

  export type PriceReportCreateWithoutMarketInput = {
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    item: ItemCreateNestedOneWithoutPriceReportsInput
    unit: UnitCreateNestedOneWithoutPriceReportsInput
  }

  export type PriceReportUncheckedCreateWithoutMarketInput = {
    id?: number
    price: number
    itemId: number
    unitId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceReportCreateOrConnectWithoutMarketInput = {
    where: PriceReportWhereUniqueInput
    create: XOR<PriceReportCreateWithoutMarketInput, PriceReportUncheckedCreateWithoutMarketInput>
  }

  export type PriceReportCreateManyMarketInputEnvelope = {
    data: PriceReportCreateManyMarketInput | PriceReportCreateManyMarketInput[]
    skipDuplicates?: boolean
  }

  export type CityUpsertWithoutMarketsInput = {
    update: XOR<CityUpdateWithoutMarketsInput, CityUncheckedUpdateWithoutMarketsInput>
    create: XOR<CityCreateWithoutMarketsInput, CityUncheckedCreateWithoutMarketsInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutMarketsInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutMarketsInput, CityUncheckedUpdateWithoutMarketsInput>
  }

  export type CityUpdateWithoutMarketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    state?: StateUpdateOneRequiredWithoutCitiesNestedInput
  }

  export type CityUncheckedUpdateWithoutMarketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PriceReportUpsertWithWhereUniqueWithoutMarketInput = {
    where: PriceReportWhereUniqueInput
    update: XOR<PriceReportUpdateWithoutMarketInput, PriceReportUncheckedUpdateWithoutMarketInput>
    create: XOR<PriceReportCreateWithoutMarketInput, PriceReportUncheckedCreateWithoutMarketInput>
  }

  export type PriceReportUpdateWithWhereUniqueWithoutMarketInput = {
    where: PriceReportWhereUniqueInput
    data: XOR<PriceReportUpdateWithoutMarketInput, PriceReportUncheckedUpdateWithoutMarketInput>
  }

  export type PriceReportUpdateManyWithWhereWithoutMarketInput = {
    where: PriceReportScalarWhereInput
    data: XOR<PriceReportUpdateManyMutationInput, PriceReportUncheckedUpdateManyWithoutMarketInput>
  }

  export type PriceReportScalarWhereInput = {
    AND?: PriceReportScalarWhereInput | PriceReportScalarWhereInput[]
    OR?: PriceReportScalarWhereInput[]
    NOT?: PriceReportScalarWhereInput | PriceReportScalarWhereInput[]
    id?: IntFilter<"PriceReport"> | number
    price?: FloatFilter<"PriceReport"> | number
    itemId?: IntFilter<"PriceReport"> | number
    unitId?: IntFilter<"PriceReport"> | number
    marketId?: IntFilter<"PriceReport"> | number
    createdAt?: DateTimeFilter<"PriceReport"> | Date | string
    updatedAt?: DateTimeFilter<"PriceReport"> | Date | string
  }

  export type UnitCreateWithoutItemInput = {
    name: string
    priceReports?: PriceReportCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutItemInput = {
    id?: number
    name: string
    priceReports?: PriceReportUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutItemInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutItemInput, UnitUncheckedCreateWithoutItemInput>
  }

  export type UnitCreateManyItemInputEnvelope = {
    data: UnitCreateManyItemInput | UnitCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type PriceReportCreateWithoutItemInput = {
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    unit: UnitCreateNestedOneWithoutPriceReportsInput
    market: MarketCreateNestedOneWithoutPriceReportsInput
  }

  export type PriceReportUncheckedCreateWithoutItemInput = {
    id?: number
    price: number
    unitId: number
    marketId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceReportCreateOrConnectWithoutItemInput = {
    where: PriceReportWhereUniqueInput
    create: XOR<PriceReportCreateWithoutItemInput, PriceReportUncheckedCreateWithoutItemInput>
  }

  export type PriceReportCreateManyItemInputEnvelope = {
    data: PriceReportCreateManyItemInput | PriceReportCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type UnitUpsertWithWhereUniqueWithoutItemInput = {
    where: UnitWhereUniqueInput
    update: XOR<UnitUpdateWithoutItemInput, UnitUncheckedUpdateWithoutItemInput>
    create: XOR<UnitCreateWithoutItemInput, UnitUncheckedCreateWithoutItemInput>
  }

  export type UnitUpdateWithWhereUniqueWithoutItemInput = {
    where: UnitWhereUniqueInput
    data: XOR<UnitUpdateWithoutItemInput, UnitUncheckedUpdateWithoutItemInput>
  }

  export type UnitUpdateManyWithWhereWithoutItemInput = {
    where: UnitScalarWhereInput
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyWithoutItemInput>
  }

  export type UnitScalarWhereInput = {
    AND?: UnitScalarWhereInput | UnitScalarWhereInput[]
    OR?: UnitScalarWhereInput[]
    NOT?: UnitScalarWhereInput | UnitScalarWhereInput[]
    id?: IntFilter<"Unit"> | number
    name?: StringFilter<"Unit"> | string
    itemId?: IntFilter<"Unit"> | number
  }

  export type PriceReportUpsertWithWhereUniqueWithoutItemInput = {
    where: PriceReportWhereUniqueInput
    update: XOR<PriceReportUpdateWithoutItemInput, PriceReportUncheckedUpdateWithoutItemInput>
    create: XOR<PriceReportCreateWithoutItemInput, PriceReportUncheckedCreateWithoutItemInput>
  }

  export type PriceReportUpdateWithWhereUniqueWithoutItemInput = {
    where: PriceReportWhereUniqueInput
    data: XOR<PriceReportUpdateWithoutItemInput, PriceReportUncheckedUpdateWithoutItemInput>
  }

  export type PriceReportUpdateManyWithWhereWithoutItemInput = {
    where: PriceReportScalarWhereInput
    data: XOR<PriceReportUpdateManyMutationInput, PriceReportUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemCreateWithoutUnitsInput = {
    name: string
    priceReports?: PriceReportCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutUnitsInput = {
    id?: number
    name: string
    priceReports?: PriceReportUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutUnitsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutUnitsInput, ItemUncheckedCreateWithoutUnitsInput>
  }

  export type PriceReportCreateWithoutUnitInput = {
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    item: ItemCreateNestedOneWithoutPriceReportsInput
    market: MarketCreateNestedOneWithoutPriceReportsInput
  }

  export type PriceReportUncheckedCreateWithoutUnitInput = {
    id?: number
    price: number
    itemId: number
    marketId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceReportCreateOrConnectWithoutUnitInput = {
    where: PriceReportWhereUniqueInput
    create: XOR<PriceReportCreateWithoutUnitInput, PriceReportUncheckedCreateWithoutUnitInput>
  }

  export type PriceReportCreateManyUnitInputEnvelope = {
    data: PriceReportCreateManyUnitInput | PriceReportCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type ItemUpsertWithoutUnitsInput = {
    update: XOR<ItemUpdateWithoutUnitsInput, ItemUncheckedUpdateWithoutUnitsInput>
    create: XOR<ItemCreateWithoutUnitsInput, ItemUncheckedCreateWithoutUnitsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutUnitsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutUnitsInput, ItemUncheckedUpdateWithoutUnitsInput>
  }

  export type ItemUpdateWithoutUnitsInput = {
    name?: StringFieldUpdateOperationsInput | string
    priceReports?: PriceReportUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutUnitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    priceReports?: PriceReportUncheckedUpdateManyWithoutItemNestedInput
  }

  export type PriceReportUpsertWithWhereUniqueWithoutUnitInput = {
    where: PriceReportWhereUniqueInput
    update: XOR<PriceReportUpdateWithoutUnitInput, PriceReportUncheckedUpdateWithoutUnitInput>
    create: XOR<PriceReportCreateWithoutUnitInput, PriceReportUncheckedCreateWithoutUnitInput>
  }

  export type PriceReportUpdateWithWhereUniqueWithoutUnitInput = {
    where: PriceReportWhereUniqueInput
    data: XOR<PriceReportUpdateWithoutUnitInput, PriceReportUncheckedUpdateWithoutUnitInput>
  }

  export type PriceReportUpdateManyWithWhereWithoutUnitInput = {
    where: PriceReportScalarWhereInput
    data: XOR<PriceReportUpdateManyMutationInput, PriceReportUncheckedUpdateManyWithoutUnitInput>
  }

  export type ItemCreateWithoutPriceReportsInput = {
    name: string
    units?: UnitCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutPriceReportsInput = {
    id?: number
    name: string
    units?: UnitUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutPriceReportsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutPriceReportsInput, ItemUncheckedCreateWithoutPriceReportsInput>
  }

  export type UnitCreateWithoutPriceReportsInput = {
    name: string
    item: ItemCreateNestedOneWithoutUnitsInput
  }

  export type UnitUncheckedCreateWithoutPriceReportsInput = {
    id?: number
    name: string
    itemId: number
  }

  export type UnitCreateOrConnectWithoutPriceReportsInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutPriceReportsInput, UnitUncheckedCreateWithoutPriceReportsInput>
  }

  export type MarketCreateWithoutPriceReportsInput = {
    name: string
    city: CityCreateNestedOneWithoutMarketsInput
  }

  export type MarketUncheckedCreateWithoutPriceReportsInput = {
    id?: number
    name: string
    cityId: number
  }

  export type MarketCreateOrConnectWithoutPriceReportsInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutPriceReportsInput, MarketUncheckedCreateWithoutPriceReportsInput>
  }

  export type ItemUpsertWithoutPriceReportsInput = {
    update: XOR<ItemUpdateWithoutPriceReportsInput, ItemUncheckedUpdateWithoutPriceReportsInput>
    create: XOR<ItemCreateWithoutPriceReportsInput, ItemUncheckedCreateWithoutPriceReportsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutPriceReportsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutPriceReportsInput, ItemUncheckedUpdateWithoutPriceReportsInput>
  }

  export type ItemUpdateWithoutPriceReportsInput = {
    name?: StringFieldUpdateOperationsInput | string
    units?: UnitUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutPriceReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    units?: UnitUncheckedUpdateManyWithoutItemNestedInput
  }

  export type UnitUpsertWithoutPriceReportsInput = {
    update: XOR<UnitUpdateWithoutPriceReportsInput, UnitUncheckedUpdateWithoutPriceReportsInput>
    create: XOR<UnitCreateWithoutPriceReportsInput, UnitUncheckedCreateWithoutPriceReportsInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutPriceReportsInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutPriceReportsInput, UnitUncheckedUpdateWithoutPriceReportsInput>
  }

  export type UnitUpdateWithoutPriceReportsInput = {
    name?: StringFieldUpdateOperationsInput | string
    item?: ItemUpdateOneRequiredWithoutUnitsNestedInput
  }

  export type UnitUncheckedUpdateWithoutPriceReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type MarketUpsertWithoutPriceReportsInput = {
    update: XOR<MarketUpdateWithoutPriceReportsInput, MarketUncheckedUpdateWithoutPriceReportsInput>
    create: XOR<MarketCreateWithoutPriceReportsInput, MarketUncheckedCreateWithoutPriceReportsInput>
    where?: MarketWhereInput
  }

  export type MarketUpdateToOneWithWhereWithoutPriceReportsInput = {
    where?: MarketWhereInput
    data: XOR<MarketUpdateWithoutPriceReportsInput, MarketUncheckedUpdateWithoutPriceReportsInput>
  }

  export type MarketUpdateWithoutPriceReportsInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: CityUpdateOneRequiredWithoutMarketsNestedInput
  }

  export type MarketUncheckedUpdateWithoutPriceReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cityId?: IntFieldUpdateOperationsInput | number
  }

  export type CityCreateManyStateInput = {
    id?: number
    name: string
    latitude?: number | null
    longitude?: number | null
  }

  export type CityUpdateWithoutStateInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    markets?: MarketUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    markets?: MarketUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateManyWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MarketCreateManyCityInput = {
    id?: number
    name: string
  }

  export type MarketUpdateWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    priceReports?: PriceReportUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    priceReports?: PriceReportUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateManyWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PriceReportCreateManyMarketInput = {
    id?: number
    price: number
    itemId: number
    unitId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceReportUpdateWithoutMarketInput = {
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutPriceReportsNestedInput
    unit?: UnitUpdateOneRequiredWithoutPriceReportsNestedInput
  }

  export type PriceReportUncheckedUpdateWithoutMarketInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    unitId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceReportUncheckedUpdateManyWithoutMarketInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    unitId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateManyItemInput = {
    id?: number
    name: string
  }

  export type PriceReportCreateManyItemInput = {
    id?: number
    price: number
    unitId: number
    marketId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitUpdateWithoutItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    priceReports?: PriceReportUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    priceReports?: PriceReportUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PriceReportUpdateWithoutItemInput = {
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutPriceReportsNestedInput
    market?: MarketUpdateOneRequiredWithoutPriceReportsNestedInput
  }

  export type PriceReportUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    unitId?: IntFieldUpdateOperationsInput | number
    marketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceReportUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    unitId?: IntFieldUpdateOperationsInput | number
    marketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceReportCreateManyUnitInput = {
    id?: number
    price: number
    itemId: number
    marketId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceReportUpdateWithoutUnitInput = {
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutPriceReportsNestedInput
    market?: MarketUpdateOneRequiredWithoutPriceReportsNestedInput
  }

  export type PriceReportUncheckedUpdateWithoutUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    marketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceReportUncheckedUpdateManyWithoutUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    marketId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}