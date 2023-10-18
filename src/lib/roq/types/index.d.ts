/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model expense
 *
 */
export type expense = $Result.DefaultSelection<Prisma.$expensePayload>;
/**
 * Model finance_chart
 *
 */
export type finance_chart = $Result.DefaultSelection<Prisma.$finance_chartPayload>;
/**
 * Model order
 *
 */
export type order = $Result.DefaultSelection<Prisma.$orderPayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model stock
 *
 */
export type stock = $Result.DefaultSelection<Prisma.$stockPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Expenses
 * const expenses = await prisma.expense.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Expenses
   * const expenses = await prisma.expense.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **expense** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Expenses
   * const expenses = await prisma.expense.findMany()
   * ```
   */
  get expense(): Prisma.expenseDelegate<ExtArgs>;

  /**
   * `prisma.finance_chart`: Exposes CRUD operations for the **finance_chart** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Finance_charts
   * const finance_charts = await prisma.finance_chart.findMany()
   * ```
   */
  get finance_chart(): Prisma.finance_chartDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **order** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Orders
   * const orders = await prisma.order.findMany()
   * ```
   */
  get order(): Prisma.orderDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.stock`: Exposes CRUD operations for the **stock** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Stocks
   * const stocks = await prisma.stock.findMany()
   * ```
   */
  get stock(): Prisma.stockDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    expense: 'expense';
    finance_chart: 'finance_chart';
    order: 'order';
    organization: 'organization';
    stock: 'stock';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'expense' | 'finance_chart' | 'order' | 'organization' | 'stock' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      expense: {
        payload: Prisma.$expensePayload<ExtArgs>;
        fields: Prisma.expenseFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.expenseFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.expenseFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>;
          };
          findFirst: {
            args: Prisma.expenseFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.expenseFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>;
          };
          findMany: {
            args: Prisma.expenseFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>[];
          };
          create: {
            args: Prisma.expenseCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>;
          };
          createMany: {
            args: Prisma.expenseCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.expenseDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>;
          };
          update: {
            args: Prisma.expenseUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>;
          };
          deleteMany: {
            args: Prisma.expenseDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.expenseUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.expenseUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>;
          };
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateExpense>;
          };
          groupBy: {
            args: Prisma.expenseGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ExpenseGroupByOutputType>[];
          };
          count: {
            args: Prisma.expenseCountArgs<ExtArgs>;
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number;
          };
        };
      };
      finance_chart: {
        payload: Prisma.$finance_chartPayload<ExtArgs>;
        fields: Prisma.finance_chartFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.finance_chartFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$finance_chartPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.finance_chartFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$finance_chartPayload>;
          };
          findFirst: {
            args: Prisma.finance_chartFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$finance_chartPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.finance_chartFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$finance_chartPayload>;
          };
          findMany: {
            args: Prisma.finance_chartFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$finance_chartPayload>[];
          };
          create: {
            args: Prisma.finance_chartCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$finance_chartPayload>;
          };
          createMany: {
            args: Prisma.finance_chartCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.finance_chartDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$finance_chartPayload>;
          };
          update: {
            args: Prisma.finance_chartUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$finance_chartPayload>;
          };
          deleteMany: {
            args: Prisma.finance_chartDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.finance_chartUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.finance_chartUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$finance_chartPayload>;
          };
          aggregate: {
            args: Prisma.Finance_chartAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFinance_chart>;
          };
          groupBy: {
            args: Prisma.finance_chartGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Finance_chartGroupByOutputType>[];
          };
          count: {
            args: Prisma.finance_chartCountArgs<ExtArgs>;
            result: $Utils.Optional<Finance_chartCountAggregateOutputType> | number;
          };
        };
      };
      order: {
        payload: Prisma.$orderPayload<ExtArgs>;
        fields: Prisma.orderFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.orderFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.orderFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$orderPayload>;
          };
          findFirst: {
            args: Prisma.orderFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.orderFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$orderPayload>;
          };
          findMany: {
            args: Prisma.orderFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[];
          };
          create: {
            args: Prisma.orderCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$orderPayload>;
          };
          createMany: {
            args: Prisma.orderCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.orderDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$orderPayload>;
          };
          update: {
            args: Prisma.orderUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$orderPayload>;
          };
          deleteMany: {
            args: Prisma.orderDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.orderUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.orderUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$orderPayload>;
          };
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrder>;
          };
          groupBy: {
            args: Prisma.orderGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrderGroupByOutputType>[];
          };
          count: {
            args: Prisma.orderCountArgs<ExtArgs>;
            result: $Utils.Optional<OrderCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      stock: {
        payload: Prisma.$stockPayload<ExtArgs>;
        fields: Prisma.stockFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.stockFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$stockPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.stockFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$stockPayload>;
          };
          findFirst: {
            args: Prisma.stockFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$stockPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.stockFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$stockPayload>;
          };
          findMany: {
            args: Prisma.stockFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$stockPayload>[];
          };
          create: {
            args: Prisma.stockCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$stockPayload>;
          };
          createMany: {
            args: Prisma.stockCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.stockDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$stockPayload>;
          };
          update: {
            args: Prisma.stockUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$stockPayload>;
          };
          deleteMany: {
            args: Prisma.stockDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.stockUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.stockUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$stockPayload>;
          };
          aggregate: {
            args: Prisma.StockAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStock>;
          };
          groupBy: {
            args: Prisma.stockGroupByArgs<ExtArgs>;
            result: $Utils.Optional<StockGroupByOutputType>[];
          };
          count: {
            args: Prisma.stockCountArgs<ExtArgs>;
            result: $Utils.Optional<StockCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    expense: number;
    finance_chart: number;
    order: number;
    organization: number;
    stock: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | UserCountOutputTypeCountExpenseArgs;
    finance_chart?: boolean | UserCountOutputTypeCountFinance_chartArgs;
    order?: boolean | UserCountOutputTypeCountOrderArgs;
    organization?: boolean | UserCountOutputTypeCountOrganizationArgs;
    stock?: boolean | UserCountOutputTypeCountStockArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: expenseWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFinance_chartArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: finance_chartWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: organizationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stockWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null;
    _avg: ExpenseAvgAggregateOutputType | null;
    _sum: ExpenseSumAggregateOutputType | null;
    _min: ExpenseMinAggregateOutputType | null;
    _max: ExpenseMaxAggregateOutputType | null;
  };

  export type ExpenseAvgAggregateOutputType = {
    amount: number | null;
  };

  export type ExpenseSumAggregateOutputType = {
    amount: number | null;
  };

  export type ExpenseMinAggregateOutputType = {
    id: string | null;
    amount: number | null;
    description: string | null;
    date: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ExpenseMaxAggregateOutputType = {
    id: string | null;
    amount: number | null;
    description: string | null;
    date: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ExpenseCountAggregateOutputType = {
    id: number;
    amount: number;
    description: number;
    date: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ExpenseAvgAggregateInputType = {
    amount?: true;
  };

  export type ExpenseSumAggregateInputType = {
    amount?: true;
  };

  export type ExpenseMinAggregateInputType = {
    id?: true;
    amount?: true;
    description?: true;
    date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ExpenseMaxAggregateInputType = {
    id?: true;
    amount?: true;
    description?: true;
    date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ExpenseCountAggregateInputType = {
    id?: true;
    amount?: true;
    description?: true;
    date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expense to aggregate.
     */
    where?: expenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: expenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned expenses
     **/
    _count?: true | ExpenseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ExpenseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ExpenseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ExpenseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ExpenseMaxAggregateInputType;
  };

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
    [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>;
  };

  export type expenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expenseWhereInput;
    orderBy?: expenseOrderByWithAggregationInput | expenseOrderByWithAggregationInput[];
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum;
    having?: expenseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExpenseCountAggregateInputType | true;
    _avg?: ExpenseAvgAggregateInputType;
    _sum?: ExpenseSumAggregateInputType;
    _min?: ExpenseMinAggregateInputType;
    _max?: ExpenseMaxAggregateInputType;
  };

  export type ExpenseGroupByOutputType = {
    id: string;
    amount: number;
    description: string | null;
    date: Date;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ExpenseCountAggregateOutputType | null;
    _avg: ExpenseAvgAggregateOutputType | null;
    _sum: ExpenseSumAggregateOutputType | null;
    _min: ExpenseMinAggregateOutputType | null;
    _max: ExpenseMaxAggregateOutputType | null;
  };

  type GetExpenseGroupByPayload<T extends expenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ExpenseGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
          : GetScalarType<T[P], ExpenseGroupByOutputType[P]>;
      }
    >
  >;

  export type expenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      amount?: boolean;
      description?: boolean;
      date?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['expense']
  >;

  export type expenseSelectScalar = {
    id?: boolean;
    amount?: boolean;
    description?: boolean;
    date?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type expenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $expensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'expense';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        amount: number;
        description: string | null;
        date: Date;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['expense']
    >;
    composites: {};
  };

  type expenseGetPayload<S extends boolean | null | undefined | expenseDefaultArgs> = $Result.GetResult<
    Prisma.$expensePayload,
    S
  >;

  type expenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    expenseFindManyArgs,
    'select' | 'include'
  > & {
    select?: ExpenseCountAggregateInputType | true;
  };

  export interface expenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['expense']; meta: { name: 'expense' } };
    /**
     * Find zero or one Expense that matches the filter.
     * @param {expenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends expenseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, expenseFindUniqueArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Expense that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {expenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends expenseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, expenseFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__expenseClient<
      $Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends expenseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, expenseFindFirstArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends expenseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, expenseFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     *
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends expenseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, expenseFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Expense.
     * @param {expenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     *
     **/
    create<T extends expenseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, expenseCreateArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Expenses.
     *     @param {expenseCreateManyArgs} args - Arguments to create many Expenses.
     *     @example
     *     // Create many Expenses
     *     const expense = await prisma.expense.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends expenseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, expenseCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Expense.
     * @param {expenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     *
     **/
    delete<T extends expenseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, expenseDeleteArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Expense.
     * @param {expenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends expenseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, expenseUpdateArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Expenses.
     * @param {expenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends expenseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, expenseDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends expenseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, expenseUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Expense.
     * @param {expenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     **/
    upsert<T extends expenseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, expenseUpsertArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
     **/
    count<T extends expenseCountArgs>(
      args?: Subset<T, expenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpenseAggregateArgs>(
      args: Subset<T, ExpenseAggregateArgs>,
    ): Prisma.PrismaPromise<GetExpenseAggregateType<T>>;

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseGroupByArgs} args - Group by arguments.
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
      T extends expenseGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: expenseGroupByArgs['orderBy'] }
        : { orderBy?: expenseGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, expenseGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the expense model
     */
    readonly fields: expenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__expenseClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the expense model
   */
  interface expenseFieldRefs {
    readonly id: FieldRef<'expense', 'String'>;
    readonly amount: FieldRef<'expense', 'Int'>;
    readonly description: FieldRef<'expense', 'String'>;
    readonly date: FieldRef<'expense', 'DateTime'>;
    readonly user_id: FieldRef<'expense', 'String'>;
    readonly created_at: FieldRef<'expense', 'DateTime'>;
    readonly updated_at: FieldRef<'expense', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * expense findUnique
   */
  export type expenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * Filter, which expense to fetch.
     */
    where: expenseWhereUniqueInput;
  };

  /**
   * expense findUniqueOrThrow
   */
  export type expenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * Filter, which expense to fetch.
     */
    where: expenseWhereUniqueInput;
  };

  /**
   * expense findFirst
   */
  export type expenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * Filter, which expense to fetch.
     */
    where?: expenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for expenses.
     */
    cursor?: expenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
  };

  /**
   * expense findFirstOrThrow
   */
  export type expenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * Filter, which expense to fetch.
     */
    where?: expenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for expenses.
     */
    cursor?: expenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
  };

  /**
   * expense findMany
   */
  export type expenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * Filter, which expenses to fetch.
     */
    where?: expenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing expenses.
     */
    cursor?: expenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` expenses.
     */
    skip?: number;
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
  };

  /**
   * expense create
   */
  export type expenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * The data needed to create a expense.
     */
    data: XOR<expenseCreateInput, expenseUncheckedCreateInput>;
  };

  /**
   * expense createMany
   */
  export type expenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many expenses.
     */
    data: expenseCreateManyInput | expenseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * expense update
   */
  export type expenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * The data needed to update a expense.
     */
    data: XOR<expenseUpdateInput, expenseUncheckedUpdateInput>;
    /**
     * Choose, which expense to update.
     */
    where: expenseWhereUniqueInput;
  };

  /**
   * expense updateMany
   */
  export type expenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update expenses.
     */
    data: XOR<expenseUpdateManyMutationInput, expenseUncheckedUpdateManyInput>;
    /**
     * Filter which expenses to update
     */
    where?: expenseWhereInput;
  };

  /**
   * expense upsert
   */
  export type expenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * The filter to search for the expense to update in case it exists.
     */
    where: expenseWhereUniqueInput;
    /**
     * In case the expense found by the `where` argument doesn't exist, create a new expense with this data.
     */
    create: XOR<expenseCreateInput, expenseUncheckedCreateInput>;
    /**
     * In case the expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<expenseUpdateInput, expenseUncheckedUpdateInput>;
  };

  /**
   * expense delete
   */
  export type expenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * Filter which expense to delete.
     */
    where: expenseWhereUniqueInput;
  };

  /**
   * expense deleteMany
   */
  export type expenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expenses to delete
     */
    where?: expenseWhereInput;
  };

  /**
   * expense without action
   */
  export type expenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
  };

  /**
   * Model finance_chart
   */

  export type AggregateFinance_chart = {
    _count: Finance_chartCountAggregateOutputType | null;
    _avg: Finance_chartAvgAggregateOutputType | null;
    _sum: Finance_chartSumAggregateOutputType | null;
    _min: Finance_chartMinAggregateOutputType | null;
    _max: Finance_chartMaxAggregateOutputType | null;
  };

  export type Finance_chartAvgAggregateOutputType = {
    income: number | null;
    finance_chart_expense: number | null;
    balance: number | null;
    account_balance: number | null;
  };

  export type Finance_chartSumAggregateOutputType = {
    income: number | null;
    finance_chart_expense: number | null;
    balance: number | null;
    account_balance: number | null;
  };

  export type Finance_chartMinAggregateOutputType = {
    id: string | null;
    income: number | null;
    finance_chart_expense: number | null;
    balance: number | null;
    account_balance: number | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Finance_chartMaxAggregateOutputType = {
    id: string | null;
    income: number | null;
    finance_chart_expense: number | null;
    balance: number | null;
    account_balance: number | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Finance_chartCountAggregateOutputType = {
    id: number;
    income: number;
    finance_chart_expense: number;
    balance: number;
    account_balance: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Finance_chartAvgAggregateInputType = {
    income?: true;
    finance_chart_expense?: true;
    balance?: true;
    account_balance?: true;
  };

  export type Finance_chartSumAggregateInputType = {
    income?: true;
    finance_chart_expense?: true;
    balance?: true;
    account_balance?: true;
  };

  export type Finance_chartMinAggregateInputType = {
    id?: true;
    income?: true;
    finance_chart_expense?: true;
    balance?: true;
    account_balance?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Finance_chartMaxAggregateInputType = {
    id?: true;
    income?: true;
    finance_chart_expense?: true;
    balance?: true;
    account_balance?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Finance_chartCountAggregateInputType = {
    id?: true;
    income?: true;
    finance_chart_expense?: true;
    balance?: true;
    account_balance?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Finance_chartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which finance_chart to aggregate.
     */
    where?: finance_chartWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of finance_charts to fetch.
     */
    orderBy?: finance_chartOrderByWithRelationInput | finance_chartOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: finance_chartWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` finance_charts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` finance_charts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned finance_charts
     **/
    _count?: true | Finance_chartCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Finance_chartAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Finance_chartSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Finance_chartMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Finance_chartMaxAggregateInputType;
  };

  export type GetFinance_chartAggregateType<T extends Finance_chartAggregateArgs> = {
    [P in keyof T & keyof AggregateFinance_chart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinance_chart[P]>
      : GetScalarType<T[P], AggregateFinance_chart[P]>;
  };

  export type finance_chartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: finance_chartWhereInput;
    orderBy?: finance_chartOrderByWithAggregationInput | finance_chartOrderByWithAggregationInput[];
    by: Finance_chartScalarFieldEnum[] | Finance_chartScalarFieldEnum;
    having?: finance_chartScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Finance_chartCountAggregateInputType | true;
    _avg?: Finance_chartAvgAggregateInputType;
    _sum?: Finance_chartSumAggregateInputType;
    _min?: Finance_chartMinAggregateInputType;
    _max?: Finance_chartMaxAggregateInputType;
  };

  export type Finance_chartGroupByOutputType = {
    id: string;
    income: number | null;
    finance_chart_expense: number | null;
    balance: number | null;
    account_balance: number | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Finance_chartCountAggregateOutputType | null;
    _avg: Finance_chartAvgAggregateOutputType | null;
    _sum: Finance_chartSumAggregateOutputType | null;
    _min: Finance_chartMinAggregateOutputType | null;
    _max: Finance_chartMaxAggregateOutputType | null;
  };

  type GetFinance_chartGroupByPayload<T extends finance_chartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Finance_chartGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Finance_chartGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Finance_chartGroupByOutputType[P]>
          : GetScalarType<T[P], Finance_chartGroupByOutputType[P]>;
      }
    >
  >;

  export type finance_chartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        income?: boolean;
        finance_chart_expense?: boolean;
        balance?: boolean;
        account_balance?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['finance_chart']
    >;

  export type finance_chartSelectScalar = {
    id?: boolean;
    income?: boolean;
    finance_chart_expense?: boolean;
    balance?: boolean;
    account_balance?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type finance_chartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $finance_chartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'finance_chart';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        income: number | null;
        finance_chart_expense: number | null;
        balance: number | null;
        account_balance: number | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['finance_chart']
    >;
    composites: {};
  };

  type finance_chartGetPayload<S extends boolean | null | undefined | finance_chartDefaultArgs> = $Result.GetResult<
    Prisma.$finance_chartPayload,
    S
  >;

  type finance_chartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    finance_chartFindManyArgs,
    'select' | 'include'
  > & {
    select?: Finance_chartCountAggregateInputType | true;
  };

  export interface finance_chartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['finance_chart']; meta: { name: 'finance_chart' } };
    /**
     * Find zero or one Finance_chart that matches the filter.
     * @param {finance_chartFindUniqueArgs} args - Arguments to find a Finance_chart
     * @example
     * // Get one Finance_chart
     * const finance_chart = await prisma.finance_chart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends finance_chartFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, finance_chartFindUniqueArgs<ExtArgs>>,
    ): Prisma__finance_chartClient<
      $Result.GetResult<Prisma.$finance_chartPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Finance_chart that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {finance_chartFindUniqueOrThrowArgs} args - Arguments to find a Finance_chart
     * @example
     * // Get one Finance_chart
     * const finance_chart = await prisma.finance_chart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends finance_chartFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, finance_chartFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__finance_chartClient<
      $Result.GetResult<Prisma.$finance_chartPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Finance_chart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finance_chartFindFirstArgs} args - Arguments to find a Finance_chart
     * @example
     * // Get one Finance_chart
     * const finance_chart = await prisma.finance_chart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends finance_chartFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, finance_chartFindFirstArgs<ExtArgs>>,
    ): Prisma__finance_chartClient<
      $Result.GetResult<Prisma.$finance_chartPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Finance_chart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finance_chartFindFirstOrThrowArgs} args - Arguments to find a Finance_chart
     * @example
     * // Get one Finance_chart
     * const finance_chart = await prisma.finance_chart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends finance_chartFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, finance_chartFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__finance_chartClient<
      $Result.GetResult<Prisma.$finance_chartPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Finance_charts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finance_chartFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Finance_charts
     * const finance_charts = await prisma.finance_chart.findMany()
     *
     * // Get first 10 Finance_charts
     * const finance_charts = await prisma.finance_chart.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const finance_chartWithIdOnly = await prisma.finance_chart.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends finance_chartFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, finance_chartFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$finance_chartPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Finance_chart.
     * @param {finance_chartCreateArgs} args - Arguments to create a Finance_chart.
     * @example
     * // Create one Finance_chart
     * const Finance_chart = await prisma.finance_chart.create({
     *   data: {
     *     // ... data to create a Finance_chart
     *   }
     * })
     *
     **/
    create<T extends finance_chartCreateArgs<ExtArgs>>(
      args: SelectSubset<T, finance_chartCreateArgs<ExtArgs>>,
    ): Prisma__finance_chartClient<
      $Result.GetResult<Prisma.$finance_chartPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Finance_charts.
     *     @param {finance_chartCreateManyArgs} args - Arguments to create many Finance_charts.
     *     @example
     *     // Create many Finance_charts
     *     const finance_chart = await prisma.finance_chart.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends finance_chartCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, finance_chartCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Finance_chart.
     * @param {finance_chartDeleteArgs} args - Arguments to delete one Finance_chart.
     * @example
     * // Delete one Finance_chart
     * const Finance_chart = await prisma.finance_chart.delete({
     *   where: {
     *     // ... filter to delete one Finance_chart
     *   }
     * })
     *
     **/
    delete<T extends finance_chartDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, finance_chartDeleteArgs<ExtArgs>>,
    ): Prisma__finance_chartClient<
      $Result.GetResult<Prisma.$finance_chartPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Finance_chart.
     * @param {finance_chartUpdateArgs} args - Arguments to update one Finance_chart.
     * @example
     * // Update one Finance_chart
     * const finance_chart = await prisma.finance_chart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends finance_chartUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, finance_chartUpdateArgs<ExtArgs>>,
    ): Prisma__finance_chartClient<
      $Result.GetResult<Prisma.$finance_chartPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Finance_charts.
     * @param {finance_chartDeleteManyArgs} args - Arguments to filter Finance_charts to delete.
     * @example
     * // Delete a few Finance_charts
     * const { count } = await prisma.finance_chart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends finance_chartDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, finance_chartDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Finance_charts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finance_chartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Finance_charts
     * const finance_chart = await prisma.finance_chart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends finance_chartUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, finance_chartUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Finance_chart.
     * @param {finance_chartUpsertArgs} args - Arguments to update or create a Finance_chart.
     * @example
     * // Update or create a Finance_chart
     * const finance_chart = await prisma.finance_chart.upsert({
     *   create: {
     *     // ... data to create a Finance_chart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Finance_chart we want to update
     *   }
     * })
     **/
    upsert<T extends finance_chartUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, finance_chartUpsertArgs<ExtArgs>>,
    ): Prisma__finance_chartClient<
      $Result.GetResult<Prisma.$finance_chartPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Finance_charts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finance_chartCountArgs} args - Arguments to filter Finance_charts to count.
     * @example
     * // Count the number of Finance_charts
     * const count = await prisma.finance_chart.count({
     *   where: {
     *     // ... the filter for the Finance_charts we want to count
     *   }
     * })
     **/
    count<T extends finance_chartCountArgs>(
      args?: Subset<T, finance_chartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Finance_chartCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Finance_chart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Finance_chartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Finance_chartAggregateArgs>(
      args: Subset<T, Finance_chartAggregateArgs>,
    ): Prisma.PrismaPromise<GetFinance_chartAggregateType<T>>;

    /**
     * Group by Finance_chart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finance_chartGroupByArgs} args - Group by arguments.
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
      T extends finance_chartGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: finance_chartGroupByArgs['orderBy'] }
        : { orderBy?: finance_chartGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, finance_chartGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetFinance_chartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the finance_chart model
     */
    readonly fields: finance_chartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for finance_chart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__finance_chartClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the finance_chart model
   */
  interface finance_chartFieldRefs {
    readonly id: FieldRef<'finance_chart', 'String'>;
    readonly income: FieldRef<'finance_chart', 'Int'>;
    readonly finance_chart_expense: FieldRef<'finance_chart', 'Int'>;
    readonly balance: FieldRef<'finance_chart', 'Int'>;
    readonly account_balance: FieldRef<'finance_chart', 'Int'>;
    readonly user_id: FieldRef<'finance_chart', 'String'>;
    readonly created_at: FieldRef<'finance_chart', 'DateTime'>;
    readonly updated_at: FieldRef<'finance_chart', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * finance_chart findUnique
   */
  export type finance_chartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_chart
     */
    select?: finance_chartSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_chartInclude<ExtArgs> | null;
    /**
     * Filter, which finance_chart to fetch.
     */
    where: finance_chartWhereUniqueInput;
  };

  /**
   * finance_chart findUniqueOrThrow
   */
  export type finance_chartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_chart
     */
    select?: finance_chartSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_chartInclude<ExtArgs> | null;
    /**
     * Filter, which finance_chart to fetch.
     */
    where: finance_chartWhereUniqueInput;
  };

  /**
   * finance_chart findFirst
   */
  export type finance_chartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_chart
     */
    select?: finance_chartSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_chartInclude<ExtArgs> | null;
    /**
     * Filter, which finance_chart to fetch.
     */
    where?: finance_chartWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of finance_charts to fetch.
     */
    orderBy?: finance_chartOrderByWithRelationInput | finance_chartOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for finance_charts.
     */
    cursor?: finance_chartWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` finance_charts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` finance_charts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of finance_charts.
     */
    distinct?: Finance_chartScalarFieldEnum | Finance_chartScalarFieldEnum[];
  };

  /**
   * finance_chart findFirstOrThrow
   */
  export type finance_chartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_chart
     */
    select?: finance_chartSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_chartInclude<ExtArgs> | null;
    /**
     * Filter, which finance_chart to fetch.
     */
    where?: finance_chartWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of finance_charts to fetch.
     */
    orderBy?: finance_chartOrderByWithRelationInput | finance_chartOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for finance_charts.
     */
    cursor?: finance_chartWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` finance_charts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` finance_charts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of finance_charts.
     */
    distinct?: Finance_chartScalarFieldEnum | Finance_chartScalarFieldEnum[];
  };

  /**
   * finance_chart findMany
   */
  export type finance_chartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_chart
     */
    select?: finance_chartSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_chartInclude<ExtArgs> | null;
    /**
     * Filter, which finance_charts to fetch.
     */
    where?: finance_chartWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of finance_charts to fetch.
     */
    orderBy?: finance_chartOrderByWithRelationInput | finance_chartOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing finance_charts.
     */
    cursor?: finance_chartWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` finance_charts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` finance_charts.
     */
    skip?: number;
    distinct?: Finance_chartScalarFieldEnum | Finance_chartScalarFieldEnum[];
  };

  /**
   * finance_chart create
   */
  export type finance_chartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_chart
     */
    select?: finance_chartSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_chartInclude<ExtArgs> | null;
    /**
     * The data needed to create a finance_chart.
     */
    data: XOR<finance_chartCreateInput, finance_chartUncheckedCreateInput>;
  };

  /**
   * finance_chart createMany
   */
  export type finance_chartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many finance_charts.
     */
    data: finance_chartCreateManyInput | finance_chartCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * finance_chart update
   */
  export type finance_chartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_chart
     */
    select?: finance_chartSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_chartInclude<ExtArgs> | null;
    /**
     * The data needed to update a finance_chart.
     */
    data: XOR<finance_chartUpdateInput, finance_chartUncheckedUpdateInput>;
    /**
     * Choose, which finance_chart to update.
     */
    where: finance_chartWhereUniqueInput;
  };

  /**
   * finance_chart updateMany
   */
  export type finance_chartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update finance_charts.
     */
    data: XOR<finance_chartUpdateManyMutationInput, finance_chartUncheckedUpdateManyInput>;
    /**
     * Filter which finance_charts to update
     */
    where?: finance_chartWhereInput;
  };

  /**
   * finance_chart upsert
   */
  export type finance_chartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_chart
     */
    select?: finance_chartSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_chartInclude<ExtArgs> | null;
    /**
     * The filter to search for the finance_chart to update in case it exists.
     */
    where: finance_chartWhereUniqueInput;
    /**
     * In case the finance_chart found by the `where` argument doesn't exist, create a new finance_chart with this data.
     */
    create: XOR<finance_chartCreateInput, finance_chartUncheckedCreateInput>;
    /**
     * In case the finance_chart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<finance_chartUpdateInput, finance_chartUncheckedUpdateInput>;
  };

  /**
   * finance_chart delete
   */
  export type finance_chartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_chart
     */
    select?: finance_chartSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_chartInclude<ExtArgs> | null;
    /**
     * Filter which finance_chart to delete.
     */
    where: finance_chartWhereUniqueInput;
  };

  /**
   * finance_chart deleteMany
   */
  export type finance_chartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which finance_charts to delete
     */
    where?: finance_chartWhereInput;
  };

  /**
   * finance_chart without action
   */
  export type finance_chartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_chart
     */
    select?: finance_chartSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_chartInclude<ExtArgs> | null;
  };

  /**
   * Model order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
  };

  export type OrderMinAggregateOutputType = {
    id: string | null;
    delivery_date: Date | null;
    description: string | null;
    buyer_contact: string | null;
    is_paid: boolean | null;
    is_delivered: boolean | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OrderMaxAggregateOutputType = {
    id: string | null;
    delivery_date: Date | null;
    description: string | null;
    buyer_contact: string | null;
    is_paid: boolean | null;
    is_delivered: boolean | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OrderCountAggregateOutputType = {
    id: number;
    delivery_date: number;
    description: number;
    buyer_contact: number;
    is_paid: number;
    is_delivered: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type OrderMinAggregateInputType = {
    id?: true;
    delivery_date?: true;
    description?: true;
    buyer_contact?: true;
    is_paid?: true;
    is_delivered?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OrderMaxAggregateInputType = {
    id?: true;
    delivery_date?: true;
    description?: true;
    buyer_contact?: true;
    is_paid?: true;
    is_delivered?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OrderCountAggregateInputType = {
    id?: true;
    delivery_date?: true;
    description?: true;
    buyer_contact?: true;
    is_paid?: true;
    is_delivered?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order to aggregate.
     */
    where?: orderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: orderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned orders
     **/
    _count?: true | OrderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrderMaxAggregateInputType;
  };

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>;
  };

  export type orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput;
    orderBy?: orderOrderByWithAggregationInput | orderOrderByWithAggregationInput[];
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum;
    having?: orderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
  };

  export type OrderGroupByOutputType = {
    id: string;
    delivery_date: Date | null;
    description: string | null;
    buyer_contact: string | null;
    is_paid: boolean | null;
    is_delivered: boolean | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: OrderCountAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
  };

  type GetOrderGroupByPayload<T extends orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrderGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
          : GetScalarType<T[P], OrderGroupByOutputType[P]>;
      }
    >
  >;

  export type orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      delivery_date?: boolean;
      description?: boolean;
      buyer_contact?: boolean;
      is_paid?: boolean;
      is_delivered?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['order']
  >;

  export type orderSelectScalar = {
    id?: boolean;
    delivery_date?: boolean;
    description?: boolean;
    buyer_contact?: boolean;
    is_paid?: boolean;
    is_delivered?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'order';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        delivery_date: Date | null;
        description: string | null;
        buyer_contact: string | null;
        is_paid: boolean | null;
        is_delivered: boolean | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['order']
    >;
    composites: {};
  };

  type orderGetPayload<S extends boolean | null | undefined | orderDefaultArgs> = $Result.GetResult<
    Prisma.$orderPayload,
    S
  >;

  type orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    orderFindManyArgs,
    'select' | 'include'
  > & {
    select?: OrderCountAggregateInputType | true;
  };

  export interface orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order']; meta: { name: 'order' } };
    /**
     * Find zero or one Order that matches the filter.
     * @param {orderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends orderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, orderFindUniqueArgs<ExtArgs>>,
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {orderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, orderFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends orderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, orderFindFirstArgs<ExtArgs>>,
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, orderFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     *
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends orderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, orderFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Order.
     * @param {orderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     *
     **/
    create<T extends orderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, orderCreateArgs<ExtArgs>>,
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Orders.
     *     @param {orderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends orderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, orderCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Order.
     * @param {orderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     *
     **/
    delete<T extends orderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, orderDeleteArgs<ExtArgs>>,
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Order.
     * @param {orderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends orderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, orderUpdateArgs<ExtArgs>>,
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Orders.
     * @param {orderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends orderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, orderDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends orderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, orderUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Order.
     * @param {orderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     **/
    upsert<T extends orderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, orderUpsertArgs<ExtArgs>>,
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
     **/
    count<T extends orderCountArgs>(
      args?: Subset<T, orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(
      args: Subset<T, OrderAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrderAggregateType<T>>;

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderGroupByArgs} args - Group by arguments.
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
      T extends orderGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderGroupByArgs['orderBy'] }
        : { orderBy?: orderGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, orderGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the order model
     */
    readonly fields: orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the order model
   */
  interface orderFieldRefs {
    readonly id: FieldRef<'order', 'String'>;
    readonly delivery_date: FieldRef<'order', 'DateTime'>;
    readonly description: FieldRef<'order', 'String'>;
    readonly buyer_contact: FieldRef<'order', 'String'>;
    readonly is_paid: FieldRef<'order', 'Boolean'>;
    readonly is_delivered: FieldRef<'order', 'Boolean'>;
    readonly user_id: FieldRef<'order', 'String'>;
    readonly created_at: FieldRef<'order', 'DateTime'>;
    readonly updated_at: FieldRef<'order', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * order findUnique
   */
  export type orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput;
  };

  /**
   * order findUniqueOrThrow
   */
  export type orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput;
  };

  /**
   * order findFirst
   */
  export type orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * order findFirstOrThrow
   */
  export type orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * order findMany
   */
  export type orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    /**
     * Filter, which orders to fetch.
     */
    where?: orderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing orders.
     */
    cursor?: orderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` orders.
     */
    skip?: number;
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * order create
   */
  export type orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    /**
     * The data needed to create a order.
     */
    data: XOR<orderCreateInput, orderUncheckedCreateInput>;
  };

  /**
   * order createMany
   */
  export type orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * order update
   */
  export type orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    /**
     * The data needed to update a order.
     */
    data: XOR<orderUpdateInput, orderUncheckedUpdateInput>;
    /**
     * Choose, which order to update.
     */
    where: orderWhereUniqueInput;
  };

  /**
   * order updateMany
   */
  export type orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>;
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput;
  };

  /**
   * order upsert
   */
  export type orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    /**
     * The filter to search for the order to update in case it exists.
     */
    where: orderWhereUniqueInput;
    /**
     * In case the order found by the `where` argument doesn't exist, create a new order with this data.
     */
    create: XOR<orderCreateInput, orderUncheckedCreateInput>;
    /**
     * In case the order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderUpdateInput, orderUncheckedUpdateInput>;
  };

  /**
   * order delete
   */
  export type orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    /**
     * Filter which order to delete.
     */
    where: orderWhereUniqueInput;
  };

  /**
   * order deleteMany
   */
  export type orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: orderWhereInput;
  };

  /**
   * order without action
   */
  export type orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_id?: boolean;
        tenant_id?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
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
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
    readonly user_id: FieldRef<'organization', 'String'>;
    readonly tenant_id: FieldRef<'organization', 'String'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model stock
   */

  export type AggregateStock = {
    _count: StockCountAggregateOutputType | null;
    _avg: StockAvgAggregateOutputType | null;
    _sum: StockSumAggregateOutputType | null;
    _min: StockMinAggregateOutputType | null;
    _max: StockMaxAggregateOutputType | null;
  };

  export type StockAvgAggregateOutputType = {
    quantity: number | null;
    price_per_unit: number | null;
    total_value: number | null;
  };

  export type StockSumAggregateOutputType = {
    quantity: number | null;
    price_per_unit: number | null;
    total_value: number | null;
  };

  export type StockMinAggregateOutputType = {
    id: string | null;
    item_name: string | null;
    quantity: number | null;
    price_per_unit: number | null;
    total_value: number | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type StockMaxAggregateOutputType = {
    id: string | null;
    item_name: string | null;
    quantity: number | null;
    price_per_unit: number | null;
    total_value: number | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type StockCountAggregateOutputType = {
    id: number;
    item_name: number;
    quantity: number;
    price_per_unit: number;
    total_value: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type StockAvgAggregateInputType = {
    quantity?: true;
    price_per_unit?: true;
    total_value?: true;
  };

  export type StockSumAggregateInputType = {
    quantity?: true;
    price_per_unit?: true;
    total_value?: true;
  };

  export type StockMinAggregateInputType = {
    id?: true;
    item_name?: true;
    quantity?: true;
    price_per_unit?: true;
    total_value?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type StockMaxAggregateInputType = {
    id?: true;
    item_name?: true;
    quantity?: true;
    price_per_unit?: true;
    total_value?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type StockCountAggregateInputType = {
    id?: true;
    item_name?: true;
    quantity?: true;
    price_per_unit?: true;
    total_value?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type StockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock to aggregate.
     */
    where?: stockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: stockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` stocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned stocks
     **/
    _count?: true | StockCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: StockAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: StockSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: StockMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: StockMaxAggregateInputType;
  };

  export type GetStockAggregateType<T extends StockAggregateArgs> = {
    [P in keyof T & keyof AggregateStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock[P]>
      : GetScalarType<T[P], AggregateStock[P]>;
  };

  export type stockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stockWhereInput;
    orderBy?: stockOrderByWithAggregationInput | stockOrderByWithAggregationInput[];
    by: StockScalarFieldEnum[] | StockScalarFieldEnum;
    having?: stockScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StockCountAggregateInputType | true;
    _avg?: StockAvgAggregateInputType;
    _sum?: StockSumAggregateInputType;
    _min?: StockMinAggregateInputType;
    _max?: StockMaxAggregateInputType;
  };

  export type StockGroupByOutputType = {
    id: string;
    item_name: string | null;
    quantity: number | null;
    price_per_unit: number | null;
    total_value: number | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: StockCountAggregateOutputType | null;
    _avg: StockAvgAggregateOutputType | null;
    _sum: StockSumAggregateOutputType | null;
    _min: StockMinAggregateOutputType | null;
    _max: StockMaxAggregateOutputType | null;
  };

  type GetStockGroupByPayload<T extends stockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockGroupByOutputType, T['by']> & {
        [P in keyof T & keyof StockGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], StockGroupByOutputType[P]>
          : GetScalarType<T[P], StockGroupByOutputType[P]>;
      }
    >
  >;

  export type stockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      item_name?: boolean;
      quantity?: boolean;
      price_per_unit?: boolean;
      total_value?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['stock']
  >;

  export type stockSelectScalar = {
    id?: boolean;
    item_name?: boolean;
    quantity?: boolean;
    price_per_unit?: boolean;
    total_value?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type stockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $stockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'stock';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        item_name: string | null;
        quantity: number | null;
        price_per_unit: number | null;
        total_value: number | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['stock']
    >;
    composites: {};
  };

  type stockGetPayload<S extends boolean | null | undefined | stockDefaultArgs> = $Result.GetResult<
    Prisma.$stockPayload,
    S
  >;

  type stockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    stockFindManyArgs,
    'select' | 'include'
  > & {
    select?: StockCountAggregateInputType | true;
  };

  export interface stockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stock']; meta: { name: 'stock' } };
    /**
     * Find zero or one Stock that matches the filter.
     * @param {stockFindUniqueArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends stockFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, stockFindUniqueArgs<ExtArgs>>,
    ): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Stock that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {stockFindUniqueOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends stockFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, stockFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockFindFirstArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends stockFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, stockFindFirstArgs<ExtArgs>>,
    ): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockFindFirstOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends stockFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, stockFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stock.findMany()
     *
     * // Get first 10 Stocks
     * const stocks = await prisma.stock.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const stockWithIdOnly = await prisma.stock.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends stockFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stockFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Stock.
     * @param {stockCreateArgs} args - Arguments to create a Stock.
     * @example
     * // Create one Stock
     * const Stock = await prisma.stock.create({
     *   data: {
     *     // ... data to create a Stock
     *   }
     * })
     *
     **/
    create<T extends stockCreateArgs<ExtArgs>>(
      args: SelectSubset<T, stockCreateArgs<ExtArgs>>,
    ): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Stocks.
     *     @param {stockCreateManyArgs} args - Arguments to create many Stocks.
     *     @example
     *     // Create many Stocks
     *     const stock = await prisma.stock.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends stockCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stockCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Stock.
     * @param {stockDeleteArgs} args - Arguments to delete one Stock.
     * @example
     * // Delete one Stock
     * const Stock = await prisma.stock.delete({
     *   where: {
     *     // ... filter to delete one Stock
     *   }
     * })
     *
     **/
    delete<T extends stockDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, stockDeleteArgs<ExtArgs>>,
    ): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Stock.
     * @param {stockUpdateArgs} args - Arguments to update one Stock.
     * @example
     * // Update one Stock
     * const stock = await prisma.stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends stockUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, stockUpdateArgs<ExtArgs>>,
    ): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Stocks.
     * @param {stockDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends stockDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stockDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends stockUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, stockUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Stock.
     * @param {stockUpsertArgs} args - Arguments to update or create a Stock.
     * @example
     * // Update or create a Stock
     * const stock = await prisma.stock.upsert({
     *   create: {
     *     // ... data to create a Stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock we want to update
     *   }
     * })
     **/
    upsert<T extends stockUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, stockUpsertArgs<ExtArgs>>,
    ): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stock.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
     **/
    count<T extends stockCountArgs>(
      args?: Subset<T, stockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockAggregateArgs>(
      args: Subset<T, StockAggregateArgs>,
    ): Prisma.PrismaPromise<GetStockAggregateType<T>>;

    /**
     * Group by Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockGroupByArgs} args - Group by arguments.
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
      T extends stockGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stockGroupByArgs['orderBy'] }
        : { orderBy?: stockGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, stockGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the stock model
     */
    readonly fields: stockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stockClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the stock model
   */
  interface stockFieldRefs {
    readonly id: FieldRef<'stock', 'String'>;
    readonly item_name: FieldRef<'stock', 'String'>;
    readonly quantity: FieldRef<'stock', 'Int'>;
    readonly price_per_unit: FieldRef<'stock', 'Int'>;
    readonly total_value: FieldRef<'stock', 'Int'>;
    readonly user_id: FieldRef<'stock', 'String'>;
    readonly created_at: FieldRef<'stock', 'DateTime'>;
    readonly updated_at: FieldRef<'stock', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * stock findUnique
   */
  export type stockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stockInclude<ExtArgs> | null;
    /**
     * Filter, which stock to fetch.
     */
    where: stockWhereUniqueInput;
  };

  /**
   * stock findUniqueOrThrow
   */
  export type stockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stockInclude<ExtArgs> | null;
    /**
     * Filter, which stock to fetch.
     */
    where: stockWhereUniqueInput;
  };

  /**
   * stock findFirst
   */
  export type stockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stockInclude<ExtArgs> | null;
    /**
     * Filter, which stock to fetch.
     */
    where?: stockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for stocks.
     */
    cursor?: stockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` stocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[];
  };

  /**
   * stock findFirstOrThrow
   */
  export type stockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stockInclude<ExtArgs> | null;
    /**
     * Filter, which stock to fetch.
     */
    where?: stockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for stocks.
     */
    cursor?: stockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` stocks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[];
  };

  /**
   * stock findMany
   */
  export type stockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stockInclude<ExtArgs> | null;
    /**
     * Filter, which stocks to fetch.
     */
    where?: stockWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing stocks.
     */
    cursor?: stockWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` stocks.
     */
    skip?: number;
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[];
  };

  /**
   * stock create
   */
  export type stockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stockInclude<ExtArgs> | null;
    /**
     * The data needed to create a stock.
     */
    data: XOR<stockCreateInput, stockUncheckedCreateInput>;
  };

  /**
   * stock createMany
   */
  export type stockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stocks.
     */
    data: stockCreateManyInput | stockCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * stock update
   */
  export type stockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stockInclude<ExtArgs> | null;
    /**
     * The data needed to update a stock.
     */
    data: XOR<stockUpdateInput, stockUncheckedUpdateInput>;
    /**
     * Choose, which stock to update.
     */
    where: stockWhereUniqueInput;
  };

  /**
   * stock updateMany
   */
  export type stockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stocks.
     */
    data: XOR<stockUpdateManyMutationInput, stockUncheckedUpdateManyInput>;
    /**
     * Filter which stocks to update
     */
    where?: stockWhereInput;
  };

  /**
   * stock upsert
   */
  export type stockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stockInclude<ExtArgs> | null;
    /**
     * The filter to search for the stock to update in case it exists.
     */
    where: stockWhereUniqueInput;
    /**
     * In case the stock found by the `where` argument doesn't exist, create a new stock with this data.
     */
    create: XOR<stockCreateInput, stockUncheckedCreateInput>;
    /**
     * In case the stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stockUpdateInput, stockUncheckedUpdateInput>;
  };

  /**
   * stock delete
   */
  export type stockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stockInclude<ExtArgs> | null;
    /**
     * Filter which stock to delete.
     */
    where: stockWhereUniqueInput;
  };

  /**
   * stock deleteMany
   */
  export type stockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stocks to delete
     */
    where?: stockWhereInput;
  };

  /**
   * stock without action
   */
  export type stockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stockInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      expense?: boolean | user$expenseArgs<ExtArgs>;
      finance_chart?: boolean | user$finance_chartArgs<ExtArgs>;
      order?: boolean | user$orderArgs<ExtArgs>;
      organization?: boolean | user$organizationArgs<ExtArgs>;
      stock?: boolean | user$stockArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | user$expenseArgs<ExtArgs>;
    finance_chart?: boolean | user$finance_chartArgs<ExtArgs>;
    order?: boolean | user$orderArgs<ExtArgs>;
    organization?: boolean | user$organizationArgs<ExtArgs>;
    stock?: boolean | user$stockArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      expense: Prisma.$expensePayload<ExtArgs>[];
      finance_chart: Prisma.$finance_chartPayload<ExtArgs>[];
      order: Prisma.$orderPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs>[];
      stock: Prisma.$stockPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    expense<T extends user$expenseArgs<ExtArgs> = {}>(
      args?: Subset<T, user$expenseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findMany'> | Null>;

    finance_chart<T extends user$finance_chartArgs<ExtArgs> = {}>(
      args?: Subset<T, user$finance_chartArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$finance_chartPayload<ExtArgs>, T, 'findMany'> | Null>;

    order<T extends user$orderArgs<ExtArgs> = {}>(
      args?: Subset<T, user$orderArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends user$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$organizationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'> | Null>;

    stock<T extends user$stockArgs<ExtArgs> = {}>(
      args?: Subset<T, user$stockArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.expense
   */
  export type user$expenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    where?: expenseWhereInput;
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[];
    cursor?: expenseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
  };

  /**
   * user.finance_chart
   */
  export type user$finance_chartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_chart
     */
    select?: finance_chartSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: finance_chartInclude<ExtArgs> | null;
    where?: finance_chartWhereInput;
    orderBy?: finance_chartOrderByWithRelationInput | finance_chartOrderByWithRelationInput[];
    cursor?: finance_chartWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Finance_chartScalarFieldEnum | Finance_chartScalarFieldEnum[];
  };

  /**
   * user.order
   */
  export type user$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude<ExtArgs> | null;
    where?: orderWhereInput;
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[];
    cursor?: orderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * user.organization
   */
  export type user$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    cursor?: organizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * user.stock
   */
  export type user$stockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stockInclude<ExtArgs> | null;
    where?: stockWhereInput;
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[];
    cursor?: stockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const ExpenseScalarFieldEnum: {
    id: 'id';
    amount: 'amount';
    description: 'description';
    date: 'date';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum];

  export const Finance_chartScalarFieldEnum: {
    id: 'id';
    income: 'income';
    finance_chart_expense: 'finance_chart_expense';
    balance: 'balance';
    account_balance: 'account_balance';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Finance_chartScalarFieldEnum =
    (typeof Finance_chartScalarFieldEnum)[keyof typeof Finance_chartScalarFieldEnum];

  export const OrderScalarFieldEnum: {
    id: 'id';
    delivery_date: 'delivery_date';
    description: 'description';
    buyer_contact: 'buyer_contact';
    is_paid: 'is_paid';
    is_delivered: 'is_delivered';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const StockScalarFieldEnum: {
    id: 'id';
    item_name: 'item_name';
    quantity: 'quantity';
    price_per_unit: 'price_per_unit';
    total_value: 'total_value';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type StockScalarFieldEnum = (typeof StockScalarFieldEnum)[keyof typeof StockScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type expenseWhereInput = {
    AND?: expenseWhereInput | expenseWhereInput[];
    OR?: expenseWhereInput[];
    NOT?: expenseWhereInput | expenseWhereInput[];
    id?: UuidFilter<'expense'> | string;
    amount?: IntFilter<'expense'> | number;
    description?: StringNullableFilter<'expense'> | string | null;
    date?: DateTimeFilter<'expense'> | Date | string;
    user_id?: UuidFilter<'expense'> | string;
    created_at?: DateTimeFilter<'expense'> | Date | string;
    updated_at?: DateTimeFilter<'expense'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type expenseOrderByWithRelationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrderInput | SortOrder;
    date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type expenseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: expenseWhereInput | expenseWhereInput[];
      OR?: expenseWhereInput[];
      NOT?: expenseWhereInput | expenseWhereInput[];
      amount?: IntFilter<'expense'> | number;
      description?: StringNullableFilter<'expense'> | string | null;
      date?: DateTimeFilter<'expense'> | Date | string;
      user_id?: UuidFilter<'expense'> | string;
      created_at?: DateTimeFilter<'expense'> | Date | string;
      updated_at?: DateTimeFilter<'expense'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type expenseOrderByWithAggregationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrderInput | SortOrder;
    date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: expenseCountOrderByAggregateInput;
    _avg?: expenseAvgOrderByAggregateInput;
    _max?: expenseMaxOrderByAggregateInput;
    _min?: expenseMinOrderByAggregateInput;
    _sum?: expenseSumOrderByAggregateInput;
  };

  export type expenseScalarWhereWithAggregatesInput = {
    AND?: expenseScalarWhereWithAggregatesInput | expenseScalarWhereWithAggregatesInput[];
    OR?: expenseScalarWhereWithAggregatesInput[];
    NOT?: expenseScalarWhereWithAggregatesInput | expenseScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'expense'> | string;
    amount?: IntWithAggregatesFilter<'expense'> | number;
    description?: StringNullableWithAggregatesFilter<'expense'> | string | null;
    date?: DateTimeWithAggregatesFilter<'expense'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'expense'> | string;
    created_at?: DateTimeWithAggregatesFilter<'expense'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'expense'> | Date | string;
  };

  export type finance_chartWhereInput = {
    AND?: finance_chartWhereInput | finance_chartWhereInput[];
    OR?: finance_chartWhereInput[];
    NOT?: finance_chartWhereInput | finance_chartWhereInput[];
    id?: UuidFilter<'finance_chart'> | string;
    income?: IntNullableFilter<'finance_chart'> | number | null;
    finance_chart_expense?: IntNullableFilter<'finance_chart'> | number | null;
    balance?: IntNullableFilter<'finance_chart'> | number | null;
    account_balance?: IntNullableFilter<'finance_chart'> | number | null;
    user_id?: UuidFilter<'finance_chart'> | string;
    created_at?: DateTimeFilter<'finance_chart'> | Date | string;
    updated_at?: DateTimeFilter<'finance_chart'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type finance_chartOrderByWithRelationInput = {
    id?: SortOrder;
    income?: SortOrderInput | SortOrder;
    finance_chart_expense?: SortOrderInput | SortOrder;
    balance?: SortOrderInput | SortOrder;
    account_balance?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type finance_chartWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: finance_chartWhereInput | finance_chartWhereInput[];
      OR?: finance_chartWhereInput[];
      NOT?: finance_chartWhereInput | finance_chartWhereInput[];
      income?: IntNullableFilter<'finance_chart'> | number | null;
      finance_chart_expense?: IntNullableFilter<'finance_chart'> | number | null;
      balance?: IntNullableFilter<'finance_chart'> | number | null;
      account_balance?: IntNullableFilter<'finance_chart'> | number | null;
      user_id?: UuidFilter<'finance_chart'> | string;
      created_at?: DateTimeFilter<'finance_chart'> | Date | string;
      updated_at?: DateTimeFilter<'finance_chart'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type finance_chartOrderByWithAggregationInput = {
    id?: SortOrder;
    income?: SortOrderInput | SortOrder;
    finance_chart_expense?: SortOrderInput | SortOrder;
    balance?: SortOrderInput | SortOrder;
    account_balance?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: finance_chartCountOrderByAggregateInput;
    _avg?: finance_chartAvgOrderByAggregateInput;
    _max?: finance_chartMaxOrderByAggregateInput;
    _min?: finance_chartMinOrderByAggregateInput;
    _sum?: finance_chartSumOrderByAggregateInput;
  };

  export type finance_chartScalarWhereWithAggregatesInput = {
    AND?: finance_chartScalarWhereWithAggregatesInput | finance_chartScalarWhereWithAggregatesInput[];
    OR?: finance_chartScalarWhereWithAggregatesInput[];
    NOT?: finance_chartScalarWhereWithAggregatesInput | finance_chartScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'finance_chart'> | string;
    income?: IntNullableWithAggregatesFilter<'finance_chart'> | number | null;
    finance_chart_expense?: IntNullableWithAggregatesFilter<'finance_chart'> | number | null;
    balance?: IntNullableWithAggregatesFilter<'finance_chart'> | number | null;
    account_balance?: IntNullableWithAggregatesFilter<'finance_chart'> | number | null;
    user_id?: UuidWithAggregatesFilter<'finance_chart'> | string;
    created_at?: DateTimeWithAggregatesFilter<'finance_chart'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'finance_chart'> | Date | string;
  };

  export type orderWhereInput = {
    AND?: orderWhereInput | orderWhereInput[];
    OR?: orderWhereInput[];
    NOT?: orderWhereInput | orderWhereInput[];
    id?: UuidFilter<'order'> | string;
    delivery_date?: DateTimeNullableFilter<'order'> | Date | string | null;
    description?: StringNullableFilter<'order'> | string | null;
    buyer_contact?: StringNullableFilter<'order'> | string | null;
    is_paid?: BoolNullableFilter<'order'> | boolean | null;
    is_delivered?: BoolNullableFilter<'order'> | boolean | null;
    user_id?: UuidFilter<'order'> | string;
    created_at?: DateTimeFilter<'order'> | Date | string;
    updated_at?: DateTimeFilter<'order'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type orderOrderByWithRelationInput = {
    id?: SortOrder;
    delivery_date?: SortOrderInput | SortOrder;
    description?: SortOrderInput | SortOrder;
    buyer_contact?: SortOrderInput | SortOrder;
    is_paid?: SortOrderInput | SortOrder;
    is_delivered?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type orderWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: orderWhereInput | orderWhereInput[];
      OR?: orderWhereInput[];
      NOT?: orderWhereInput | orderWhereInput[];
      delivery_date?: DateTimeNullableFilter<'order'> | Date | string | null;
      description?: StringNullableFilter<'order'> | string | null;
      buyer_contact?: StringNullableFilter<'order'> | string | null;
      is_paid?: BoolNullableFilter<'order'> | boolean | null;
      is_delivered?: BoolNullableFilter<'order'> | boolean | null;
      user_id?: UuidFilter<'order'> | string;
      created_at?: DateTimeFilter<'order'> | Date | string;
      updated_at?: DateTimeFilter<'order'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type orderOrderByWithAggregationInput = {
    id?: SortOrder;
    delivery_date?: SortOrderInput | SortOrder;
    description?: SortOrderInput | SortOrder;
    buyer_contact?: SortOrderInput | SortOrder;
    is_paid?: SortOrderInput | SortOrder;
    is_delivered?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: orderCountOrderByAggregateInput;
    _max?: orderMaxOrderByAggregateInput;
    _min?: orderMinOrderByAggregateInput;
  };

  export type orderScalarWhereWithAggregatesInput = {
    AND?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[];
    OR?: orderScalarWhereWithAggregatesInput[];
    NOT?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'order'> | string;
    delivery_date?: DateTimeNullableWithAggregatesFilter<'order'> | Date | string | null;
    description?: StringNullableWithAggregatesFilter<'order'> | string | null;
    buyer_contact?: StringNullableWithAggregatesFilter<'order'> | string | null;
    is_paid?: BoolNullableWithAggregatesFilter<'order'> | boolean | null;
    is_delivered?: BoolNullableWithAggregatesFilter<'order'> | boolean | null;
    user_id?: UuidWithAggregatesFilter<'order'> | string;
    created_at?: DateTimeWithAggregatesFilter<'order'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'order'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      user_id?: UuidFilter<'organization'> | string;
      tenant_id?: StringFilter<'organization'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'organization'> | string;
    tenant_id?: StringWithAggregatesFilter<'organization'> | string;
  };

  export type stockWhereInput = {
    AND?: stockWhereInput | stockWhereInput[];
    OR?: stockWhereInput[];
    NOT?: stockWhereInput | stockWhereInput[];
    id?: UuidFilter<'stock'> | string;
    item_name?: StringNullableFilter<'stock'> | string | null;
    quantity?: IntNullableFilter<'stock'> | number | null;
    price_per_unit?: IntNullableFilter<'stock'> | number | null;
    total_value?: IntNullableFilter<'stock'> | number | null;
    user_id?: UuidFilter<'stock'> | string;
    created_at?: DateTimeFilter<'stock'> | Date | string;
    updated_at?: DateTimeFilter<'stock'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type stockOrderByWithRelationInput = {
    id?: SortOrder;
    item_name?: SortOrderInput | SortOrder;
    quantity?: SortOrderInput | SortOrder;
    price_per_unit?: SortOrderInput | SortOrder;
    total_value?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type stockWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: stockWhereInput | stockWhereInput[];
      OR?: stockWhereInput[];
      NOT?: stockWhereInput | stockWhereInput[];
      item_name?: StringNullableFilter<'stock'> | string | null;
      quantity?: IntNullableFilter<'stock'> | number | null;
      price_per_unit?: IntNullableFilter<'stock'> | number | null;
      total_value?: IntNullableFilter<'stock'> | number | null;
      user_id?: UuidFilter<'stock'> | string;
      created_at?: DateTimeFilter<'stock'> | Date | string;
      updated_at?: DateTimeFilter<'stock'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type stockOrderByWithAggregationInput = {
    id?: SortOrder;
    item_name?: SortOrderInput | SortOrder;
    quantity?: SortOrderInput | SortOrder;
    price_per_unit?: SortOrderInput | SortOrder;
    total_value?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: stockCountOrderByAggregateInput;
    _avg?: stockAvgOrderByAggregateInput;
    _max?: stockMaxOrderByAggregateInput;
    _min?: stockMinOrderByAggregateInput;
    _sum?: stockSumOrderByAggregateInput;
  };

  export type stockScalarWhereWithAggregatesInput = {
    AND?: stockScalarWhereWithAggregatesInput | stockScalarWhereWithAggregatesInput[];
    OR?: stockScalarWhereWithAggregatesInput[];
    NOT?: stockScalarWhereWithAggregatesInput | stockScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'stock'> | string;
    item_name?: StringNullableWithAggregatesFilter<'stock'> | string | null;
    quantity?: IntNullableWithAggregatesFilter<'stock'> | number | null;
    price_per_unit?: IntNullableWithAggregatesFilter<'stock'> | number | null;
    total_value?: IntNullableWithAggregatesFilter<'stock'> | number | null;
    user_id?: UuidWithAggregatesFilter<'stock'> | string;
    created_at?: DateTimeWithAggregatesFilter<'stock'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'stock'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    expense?: ExpenseListRelationFilter;
    finance_chart?: Finance_chartListRelationFilter;
    order?: OrderListRelationFilter;
    organization?: OrganizationListRelationFilter;
    stock?: StockListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    expense?: expenseOrderByRelationAggregateInput;
    finance_chart?: finance_chartOrderByRelationAggregateInput;
    order?: orderOrderByRelationAggregateInput;
    organization?: organizationOrderByRelationAggregateInput;
    stock?: stockOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      expense?: ExpenseListRelationFilter;
      finance_chart?: Finance_chartListRelationFilter;
      order?: OrderListRelationFilter;
      organization?: OrganizationListRelationFilter;
      stock?: StockListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type expenseCreateInput = {
    id?: string;
    amount: number;
    description?: string | null;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutExpenseInput;
  };

  export type expenseUncheckedCreateInput = {
    id?: string;
    amount: number;
    description?: string | null;
    date: Date | string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type expenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutExpenseNestedInput;
  };

  export type expenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type expenseCreateManyInput = {
    id?: string;
    amount: number;
    description?: string | null;
    date: Date | string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type expenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type expenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type finance_chartCreateInput = {
    id?: string;
    income?: number | null;
    finance_chart_expense?: number | null;
    balance?: number | null;
    account_balance?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutFinance_chartInput;
  };

  export type finance_chartUncheckedCreateInput = {
    id?: string;
    income?: number | null;
    finance_chart_expense?: number | null;
    balance?: number | null;
    account_balance?: number | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type finance_chartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    income?: NullableIntFieldUpdateOperationsInput | number | null;
    finance_chart_expense?: NullableIntFieldUpdateOperationsInput | number | null;
    balance?: NullableIntFieldUpdateOperationsInput | number | null;
    account_balance?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutFinance_chartNestedInput;
  };

  export type finance_chartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    income?: NullableIntFieldUpdateOperationsInput | number | null;
    finance_chart_expense?: NullableIntFieldUpdateOperationsInput | number | null;
    balance?: NullableIntFieldUpdateOperationsInput | number | null;
    account_balance?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type finance_chartCreateManyInput = {
    id?: string;
    income?: number | null;
    finance_chart_expense?: number | null;
    balance?: number | null;
    account_balance?: number | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type finance_chartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    income?: NullableIntFieldUpdateOperationsInput | number | null;
    finance_chart_expense?: NullableIntFieldUpdateOperationsInput | number | null;
    balance?: NullableIntFieldUpdateOperationsInput | number | null;
    account_balance?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type finance_chartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    income?: NullableIntFieldUpdateOperationsInput | number | null;
    finance_chart_expense?: NullableIntFieldUpdateOperationsInput | number | null;
    balance?: NullableIntFieldUpdateOperationsInput | number | null;
    account_balance?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type orderCreateInput = {
    id?: string;
    delivery_date?: Date | string | null;
    description?: string | null;
    buyer_contact?: string | null;
    is_paid?: boolean | null;
    is_delivered?: boolean | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutOrderInput;
  };

  export type orderUncheckedCreateInput = {
    id?: string;
    delivery_date?: Date | string | null;
    description?: string | null;
    buyer_contact?: string | null;
    is_paid?: boolean | null;
    is_delivered?: boolean | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type orderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    buyer_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    is_paid?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_delivered?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutOrderNestedInput;
  };

  export type orderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    buyer_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    is_paid?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_delivered?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type orderCreateManyInput = {
    id?: string;
    delivery_date?: Date | string | null;
    description?: string | null;
    buyer_contact?: string | null;
    is_paid?: boolean | null;
    is_delivered?: boolean | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type orderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    buyer_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    is_paid?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_delivered?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type orderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    buyer_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    is_paid?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_delivered?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type stockCreateInput = {
    id?: string;
    item_name?: string | null;
    quantity?: number | null;
    price_per_unit?: number | null;
    total_value?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutStockInput;
  };

  export type stockUncheckedCreateInput = {
    id?: string;
    item_name?: string | null;
    quantity?: number | null;
    price_per_unit?: number | null;
    total_value?: number | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type stockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    item_name?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    price_per_unit?: NullableIntFieldUpdateOperationsInput | number | null;
    total_value?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutStockNestedInput;
  };

  export type stockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    item_name?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    price_per_unit?: NullableIntFieldUpdateOperationsInput | number | null;
    total_value?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type stockCreateManyInput = {
    id?: string;
    item_name?: string | null;
    quantity?: number | null;
    price_per_unit?: number | null;
    total_value?: number | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type stockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    item_name?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    price_per_unit?: NullableIntFieldUpdateOperationsInput | number | null;
    total_value?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type stockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    item_name?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    price_per_unit?: NullableIntFieldUpdateOperationsInput | number | null;
    total_value?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense?: expenseCreateNestedManyWithoutUserInput;
    finance_chart?: finance_chartCreateNestedManyWithoutUserInput;
    order?: orderCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    stock?: stockCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense?: expenseUncheckedCreateNestedManyWithoutUserInput;
    finance_chart?: finance_chartUncheckedCreateNestedManyWithoutUserInput;
    order?: orderUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    stock?: stockUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUpdateManyWithoutUserNestedInput;
    finance_chart?: finance_chartUpdateManyWithoutUserNestedInput;
    order?: orderUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    stock?: stockUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUncheckedUpdateManyWithoutUserNestedInput;
    finance_chart?: finance_chartUncheckedUpdateManyWithoutUserNestedInput;
    order?: orderUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    stock?: stockUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type expenseCountOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrder;
    date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type expenseAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type expenseMaxOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrder;
    date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type expenseMinOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrder;
    date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type expenseSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type finance_chartCountOrderByAggregateInput = {
    id?: SortOrder;
    income?: SortOrder;
    finance_chart_expense?: SortOrder;
    balance?: SortOrder;
    account_balance?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type finance_chartAvgOrderByAggregateInput = {
    income?: SortOrder;
    finance_chart_expense?: SortOrder;
    balance?: SortOrder;
    account_balance?: SortOrder;
  };

  export type finance_chartMaxOrderByAggregateInput = {
    id?: SortOrder;
    income?: SortOrder;
    finance_chart_expense?: SortOrder;
    balance?: SortOrder;
    account_balance?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type finance_chartMinOrderByAggregateInput = {
    id?: SortOrder;
    income?: SortOrder;
    finance_chart_expense?: SortOrder;
    balance?: SortOrder;
    account_balance?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type finance_chartSumOrderByAggregateInput = {
    income?: SortOrder;
    finance_chart_expense?: SortOrder;
    balance?: SortOrder;
    account_balance?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type orderCountOrderByAggregateInput = {
    id?: SortOrder;
    delivery_date?: SortOrder;
    description?: SortOrder;
    buyer_contact?: SortOrder;
    is_paid?: SortOrder;
    is_delivered?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type orderMaxOrderByAggregateInput = {
    id?: SortOrder;
    delivery_date?: SortOrder;
    description?: SortOrder;
    buyer_contact?: SortOrder;
    is_paid?: SortOrder;
    is_delivered?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type orderMinOrderByAggregateInput = {
    id?: SortOrder;
    delivery_date?: SortOrder;
    description?: SortOrder;
    buyer_contact?: SortOrder;
    is_paid?: SortOrder;
    is_delivered?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type stockCountOrderByAggregateInput = {
    id?: SortOrder;
    item_name?: SortOrder;
    quantity?: SortOrder;
    price_per_unit?: SortOrder;
    total_value?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type stockAvgOrderByAggregateInput = {
    quantity?: SortOrder;
    price_per_unit?: SortOrder;
    total_value?: SortOrder;
  };

  export type stockMaxOrderByAggregateInput = {
    id?: SortOrder;
    item_name?: SortOrder;
    quantity?: SortOrder;
    price_per_unit?: SortOrder;
    total_value?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type stockMinOrderByAggregateInput = {
    id?: SortOrder;
    item_name?: SortOrder;
    quantity?: SortOrder;
    price_per_unit?: SortOrder;
    total_value?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type stockSumOrderByAggregateInput = {
    quantity?: SortOrder;
    price_per_unit?: SortOrder;
    total_value?: SortOrder;
  };

  export type ExpenseListRelationFilter = {
    every?: expenseWhereInput;
    some?: expenseWhereInput;
    none?: expenseWhereInput;
  };

  export type Finance_chartListRelationFilter = {
    every?: finance_chartWhereInput;
    some?: finance_chartWhereInput;
    none?: finance_chartWhereInput;
  };

  export type OrderListRelationFilter = {
    every?: orderWhereInput;
    some?: orderWhereInput;
    none?: orderWhereInput;
  };

  export type OrganizationListRelationFilter = {
    every?: organizationWhereInput;
    some?: organizationWhereInput;
    none?: organizationWhereInput;
  };

  export type StockListRelationFilter = {
    every?: stockWhereInput;
    some?: stockWhereInput;
    none?: stockWhereInput;
  };

  export type expenseOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type finance_chartOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type orderOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type stockOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutExpenseInput = {
    create?: XOR<userCreateWithoutExpenseInput, userUncheckedCreateWithoutExpenseInput>;
    connectOrCreate?: userCreateOrConnectWithoutExpenseInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutExpenseNestedInput = {
    create?: XOR<userCreateWithoutExpenseInput, userUncheckedCreateWithoutExpenseInput>;
    connectOrCreate?: userCreateOrConnectWithoutExpenseInput;
    upsert?: userUpsertWithoutExpenseInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutExpenseInput, userUpdateWithoutExpenseInput>,
      userUncheckedUpdateWithoutExpenseInput
    >;
  };

  export type userCreateNestedOneWithoutFinance_chartInput = {
    create?: XOR<userCreateWithoutFinance_chartInput, userUncheckedCreateWithoutFinance_chartInput>;
    connectOrCreate?: userCreateOrConnectWithoutFinance_chartInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type userUpdateOneRequiredWithoutFinance_chartNestedInput = {
    create?: XOR<userCreateWithoutFinance_chartInput, userUncheckedCreateWithoutFinance_chartInput>;
    connectOrCreate?: userCreateOrConnectWithoutFinance_chartInput;
    upsert?: userUpsertWithoutFinance_chartInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutFinance_chartInput, userUpdateWithoutFinance_chartInput>,
      userUncheckedUpdateWithoutFinance_chartInput
    >;
  };

  export type userCreateNestedOneWithoutOrderInput = {
    create?: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrderInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
  };

  export type userUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrderInput;
    upsert?: userUpsertWithoutOrderInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOrderInput, userUpdateWithoutOrderInput>,
      userUncheckedUpdateWithoutOrderInput
    >;
  };

  export type userCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutOrganizationNestedInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    upsert?: userUpsertWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOrganizationInput, userUpdateWithoutOrganizationInput>,
      userUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type userCreateNestedOneWithoutStockInput = {
    create?: XOR<userCreateWithoutStockInput, userUncheckedCreateWithoutStockInput>;
    connectOrCreate?: userCreateOrConnectWithoutStockInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutStockNestedInput = {
    create?: XOR<userCreateWithoutStockInput, userUncheckedCreateWithoutStockInput>;
    connectOrCreate?: userCreateOrConnectWithoutStockInput;
    upsert?: userUpsertWithoutStockInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutStockInput, userUpdateWithoutStockInput>,
      userUncheckedUpdateWithoutStockInput
    >;
  };

  export type expenseCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<expenseCreateWithoutUserInput, expenseUncheckedCreateWithoutUserInput>
      | expenseCreateWithoutUserInput[]
      | expenseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: expenseCreateOrConnectWithoutUserInput | expenseCreateOrConnectWithoutUserInput[];
    createMany?: expenseCreateManyUserInputEnvelope;
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
  };

  export type finance_chartCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<finance_chartCreateWithoutUserInput, finance_chartUncheckedCreateWithoutUserInput>
      | finance_chartCreateWithoutUserInput[]
      | finance_chartUncheckedCreateWithoutUserInput[];
    connectOrCreate?: finance_chartCreateOrConnectWithoutUserInput | finance_chartCreateOrConnectWithoutUserInput[];
    createMany?: finance_chartCreateManyUserInputEnvelope;
    connect?: finance_chartWhereUniqueInput | finance_chartWhereUniqueInput[];
  };

  export type orderCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
      | orderCreateWithoutUserInput[]
      | orderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[];
    createMany?: orderCreateManyUserInputEnvelope;
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[];
  };

  export type organizationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type stockCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<stockCreateWithoutUserInput, stockUncheckedCreateWithoutUserInput>
      | stockCreateWithoutUserInput[]
      | stockUncheckedCreateWithoutUserInput[];
    connectOrCreate?: stockCreateOrConnectWithoutUserInput | stockCreateOrConnectWithoutUserInput[];
    createMany?: stockCreateManyUserInputEnvelope;
    connect?: stockWhereUniqueInput | stockWhereUniqueInput[];
  };

  export type expenseUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<expenseCreateWithoutUserInput, expenseUncheckedCreateWithoutUserInput>
      | expenseCreateWithoutUserInput[]
      | expenseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: expenseCreateOrConnectWithoutUserInput | expenseCreateOrConnectWithoutUserInput[];
    createMany?: expenseCreateManyUserInputEnvelope;
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
  };

  export type finance_chartUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<finance_chartCreateWithoutUserInput, finance_chartUncheckedCreateWithoutUserInput>
      | finance_chartCreateWithoutUserInput[]
      | finance_chartUncheckedCreateWithoutUserInput[];
    connectOrCreate?: finance_chartCreateOrConnectWithoutUserInput | finance_chartCreateOrConnectWithoutUserInput[];
    createMany?: finance_chartCreateManyUserInputEnvelope;
    connect?: finance_chartWhereUniqueInput | finance_chartWhereUniqueInput[];
  };

  export type orderUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
      | orderCreateWithoutUserInput[]
      | orderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[];
    createMany?: orderCreateManyUserInputEnvelope;
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[];
  };

  export type organizationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type stockUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<stockCreateWithoutUserInput, stockUncheckedCreateWithoutUserInput>
      | stockCreateWithoutUserInput[]
      | stockUncheckedCreateWithoutUserInput[];
    connectOrCreate?: stockCreateOrConnectWithoutUserInput | stockCreateOrConnectWithoutUserInput[];
    createMany?: stockCreateManyUserInputEnvelope;
    connect?: stockWhereUniqueInput | stockWhereUniqueInput[];
  };

  export type expenseUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<expenseCreateWithoutUserInput, expenseUncheckedCreateWithoutUserInput>
      | expenseCreateWithoutUserInput[]
      | expenseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: expenseCreateOrConnectWithoutUserInput | expenseCreateOrConnectWithoutUserInput[];
    upsert?: expenseUpsertWithWhereUniqueWithoutUserInput | expenseUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: expenseCreateManyUserInputEnvelope;
    set?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    disconnect?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    delete?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    update?: expenseUpdateWithWhereUniqueWithoutUserInput | expenseUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: expenseUpdateManyWithWhereWithoutUserInput | expenseUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: expenseScalarWhereInput | expenseScalarWhereInput[];
  };

  export type finance_chartUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<finance_chartCreateWithoutUserInput, finance_chartUncheckedCreateWithoutUserInput>
      | finance_chartCreateWithoutUserInput[]
      | finance_chartUncheckedCreateWithoutUserInput[];
    connectOrCreate?: finance_chartCreateOrConnectWithoutUserInput | finance_chartCreateOrConnectWithoutUserInput[];
    upsert?: finance_chartUpsertWithWhereUniqueWithoutUserInput | finance_chartUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: finance_chartCreateManyUserInputEnvelope;
    set?: finance_chartWhereUniqueInput | finance_chartWhereUniqueInput[];
    disconnect?: finance_chartWhereUniqueInput | finance_chartWhereUniqueInput[];
    delete?: finance_chartWhereUniqueInput | finance_chartWhereUniqueInput[];
    connect?: finance_chartWhereUniqueInput | finance_chartWhereUniqueInput[];
    update?: finance_chartUpdateWithWhereUniqueWithoutUserInput | finance_chartUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: finance_chartUpdateManyWithWhereWithoutUserInput | finance_chartUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: finance_chartScalarWhereInput | finance_chartScalarWhereInput[];
  };

  export type orderUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
      | orderCreateWithoutUserInput[]
      | orderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[];
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: orderCreateManyUserInputEnvelope;
    set?: orderWhereUniqueInput | orderWhereUniqueInput[];
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[];
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[];
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[];
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[];
  };

  export type organizationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type stockUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<stockCreateWithoutUserInput, stockUncheckedCreateWithoutUserInput>
      | stockCreateWithoutUserInput[]
      | stockUncheckedCreateWithoutUserInput[];
    connectOrCreate?: stockCreateOrConnectWithoutUserInput | stockCreateOrConnectWithoutUserInput[];
    upsert?: stockUpsertWithWhereUniqueWithoutUserInput | stockUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: stockCreateManyUserInputEnvelope;
    set?: stockWhereUniqueInput | stockWhereUniqueInput[];
    disconnect?: stockWhereUniqueInput | stockWhereUniqueInput[];
    delete?: stockWhereUniqueInput | stockWhereUniqueInput[];
    connect?: stockWhereUniqueInput | stockWhereUniqueInput[];
    update?: stockUpdateWithWhereUniqueWithoutUserInput | stockUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: stockUpdateManyWithWhereWithoutUserInput | stockUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: stockScalarWhereInput | stockScalarWhereInput[];
  };

  export type expenseUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<expenseCreateWithoutUserInput, expenseUncheckedCreateWithoutUserInput>
      | expenseCreateWithoutUserInput[]
      | expenseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: expenseCreateOrConnectWithoutUserInput | expenseCreateOrConnectWithoutUserInput[];
    upsert?: expenseUpsertWithWhereUniqueWithoutUserInput | expenseUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: expenseCreateManyUserInputEnvelope;
    set?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    disconnect?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    delete?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    update?: expenseUpdateWithWhereUniqueWithoutUserInput | expenseUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: expenseUpdateManyWithWhereWithoutUserInput | expenseUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: expenseScalarWhereInput | expenseScalarWhereInput[];
  };

  export type finance_chartUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<finance_chartCreateWithoutUserInput, finance_chartUncheckedCreateWithoutUserInput>
      | finance_chartCreateWithoutUserInput[]
      | finance_chartUncheckedCreateWithoutUserInput[];
    connectOrCreate?: finance_chartCreateOrConnectWithoutUserInput | finance_chartCreateOrConnectWithoutUserInput[];
    upsert?: finance_chartUpsertWithWhereUniqueWithoutUserInput | finance_chartUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: finance_chartCreateManyUserInputEnvelope;
    set?: finance_chartWhereUniqueInput | finance_chartWhereUniqueInput[];
    disconnect?: finance_chartWhereUniqueInput | finance_chartWhereUniqueInput[];
    delete?: finance_chartWhereUniqueInput | finance_chartWhereUniqueInput[];
    connect?: finance_chartWhereUniqueInput | finance_chartWhereUniqueInput[];
    update?: finance_chartUpdateWithWhereUniqueWithoutUserInput | finance_chartUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: finance_chartUpdateManyWithWhereWithoutUserInput | finance_chartUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: finance_chartScalarWhereInput | finance_chartScalarWhereInput[];
  };

  export type orderUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
      | orderCreateWithoutUserInput[]
      | orderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[];
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: orderCreateManyUserInputEnvelope;
    set?: orderWhereUniqueInput | orderWhereUniqueInput[];
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[];
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[];
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[];
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[];
  };

  export type organizationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type stockUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<stockCreateWithoutUserInput, stockUncheckedCreateWithoutUserInput>
      | stockCreateWithoutUserInput[]
      | stockUncheckedCreateWithoutUserInput[];
    connectOrCreate?: stockCreateOrConnectWithoutUserInput | stockCreateOrConnectWithoutUserInput[];
    upsert?: stockUpsertWithWhereUniqueWithoutUserInput | stockUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: stockCreateManyUserInputEnvelope;
    set?: stockWhereUniqueInput | stockWhereUniqueInput[];
    disconnect?: stockWhereUniqueInput | stockWhereUniqueInput[];
    delete?: stockWhereUniqueInput | stockWhereUniqueInput[];
    connect?: stockWhereUniqueInput | stockWhereUniqueInput[];
    update?: stockUpdateWithWhereUniqueWithoutUserInput | stockUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: stockUpdateManyWithWhereWithoutUserInput | stockUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: stockScalarWhereInput | stockScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type userCreateWithoutExpenseInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance_chart?: finance_chartCreateNestedManyWithoutUserInput;
    order?: orderCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    stock?: stockCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutExpenseInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    finance_chart?: finance_chartUncheckedCreateNestedManyWithoutUserInput;
    order?: orderUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    stock?: stockUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutExpenseInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutExpenseInput, userUncheckedCreateWithoutExpenseInput>;
  };

  export type userUpsertWithoutExpenseInput = {
    update: XOR<userUpdateWithoutExpenseInput, userUncheckedUpdateWithoutExpenseInput>;
    create: XOR<userCreateWithoutExpenseInput, userUncheckedCreateWithoutExpenseInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutExpenseInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutExpenseInput, userUncheckedUpdateWithoutExpenseInput>;
  };

  export type userUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance_chart?: finance_chartUpdateManyWithoutUserNestedInput;
    order?: orderUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    stock?: stockUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    finance_chart?: finance_chartUncheckedUpdateManyWithoutUserNestedInput;
    order?: orderUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    stock?: stockUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutFinance_chartInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense?: expenseCreateNestedManyWithoutUserInput;
    order?: orderCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    stock?: stockCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutFinance_chartInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense?: expenseUncheckedCreateNestedManyWithoutUserInput;
    order?: orderUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    stock?: stockUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutFinance_chartInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutFinance_chartInput, userUncheckedCreateWithoutFinance_chartInput>;
  };

  export type userUpsertWithoutFinance_chartInput = {
    update: XOR<userUpdateWithoutFinance_chartInput, userUncheckedUpdateWithoutFinance_chartInput>;
    create: XOR<userCreateWithoutFinance_chartInput, userUncheckedCreateWithoutFinance_chartInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutFinance_chartInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutFinance_chartInput, userUncheckedUpdateWithoutFinance_chartInput>;
  };

  export type userUpdateWithoutFinance_chartInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUpdateManyWithoutUserNestedInput;
    order?: orderUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    stock?: stockUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutFinance_chartInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUncheckedUpdateManyWithoutUserNestedInput;
    order?: orderUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    stock?: stockUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutOrderInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense?: expenseCreateNestedManyWithoutUserInput;
    finance_chart?: finance_chartCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    stock?: stockCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOrderInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense?: expenseUncheckedCreateNestedManyWithoutUserInput;
    finance_chart?: finance_chartUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    stock?: stockUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOrderInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>;
  };

  export type userUpsertWithoutOrderInput = {
    update: XOR<userUpdateWithoutOrderInput, userUncheckedUpdateWithoutOrderInput>;
    create: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOrderInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOrderInput, userUncheckedUpdateWithoutOrderInput>;
  };

  export type userUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUpdateManyWithoutUserNestedInput;
    finance_chart?: finance_chartUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    stock?: stockUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUncheckedUpdateManyWithoutUserNestedInput;
    finance_chart?: finance_chartUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    stock?: stockUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense?: expenseCreateNestedManyWithoutUserInput;
    finance_chart?: finance_chartCreateNestedManyWithoutUserInput;
    order?: orderCreateNestedManyWithoutUserInput;
    stock?: stockCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense?: expenseUncheckedCreateNestedManyWithoutUserInput;
    finance_chart?: finance_chartUncheckedCreateNestedManyWithoutUserInput;
    order?: orderUncheckedCreateNestedManyWithoutUserInput;
    stock?: stockUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type userUpsertWithoutOrganizationInput = {
    update: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
  };

  export type userUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUpdateManyWithoutUserNestedInput;
    finance_chart?: finance_chartUpdateManyWithoutUserNestedInput;
    order?: orderUpdateManyWithoutUserNestedInput;
    stock?: stockUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUncheckedUpdateManyWithoutUserNestedInput;
    finance_chart?: finance_chartUncheckedUpdateManyWithoutUserNestedInput;
    order?: orderUncheckedUpdateManyWithoutUserNestedInput;
    stock?: stockUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutStockInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense?: expenseCreateNestedManyWithoutUserInput;
    finance_chart?: finance_chartCreateNestedManyWithoutUserInput;
    order?: orderCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutStockInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense?: expenseUncheckedCreateNestedManyWithoutUserInput;
    finance_chart?: finance_chartUncheckedCreateNestedManyWithoutUserInput;
    order?: orderUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutStockInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutStockInput, userUncheckedCreateWithoutStockInput>;
  };

  export type userUpsertWithoutStockInput = {
    update: XOR<userUpdateWithoutStockInput, userUncheckedUpdateWithoutStockInput>;
    create: XOR<userCreateWithoutStockInput, userUncheckedCreateWithoutStockInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutStockInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutStockInput, userUncheckedUpdateWithoutStockInput>;
  };

  export type userUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUpdateManyWithoutUserNestedInput;
    finance_chart?: finance_chartUpdateManyWithoutUserNestedInput;
    order?: orderUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUncheckedUpdateManyWithoutUserNestedInput;
    finance_chart?: finance_chartUncheckedUpdateManyWithoutUserNestedInput;
    order?: orderUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type expenseCreateWithoutUserInput = {
    id?: string;
    amount: number;
    description?: string | null;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type expenseUncheckedCreateWithoutUserInput = {
    id?: string;
    amount: number;
    description?: string | null;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type expenseCreateOrConnectWithoutUserInput = {
    where: expenseWhereUniqueInput;
    create: XOR<expenseCreateWithoutUserInput, expenseUncheckedCreateWithoutUserInput>;
  };

  export type expenseCreateManyUserInputEnvelope = {
    data: expenseCreateManyUserInput | expenseCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type finance_chartCreateWithoutUserInput = {
    id?: string;
    income?: number | null;
    finance_chart_expense?: number | null;
    balance?: number | null;
    account_balance?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type finance_chartUncheckedCreateWithoutUserInput = {
    id?: string;
    income?: number | null;
    finance_chart_expense?: number | null;
    balance?: number | null;
    account_balance?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type finance_chartCreateOrConnectWithoutUserInput = {
    where: finance_chartWhereUniqueInput;
    create: XOR<finance_chartCreateWithoutUserInput, finance_chartUncheckedCreateWithoutUserInput>;
  };

  export type finance_chartCreateManyUserInputEnvelope = {
    data: finance_chartCreateManyUserInput | finance_chartCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type orderCreateWithoutUserInput = {
    id?: string;
    delivery_date?: Date | string | null;
    description?: string | null;
    buyer_contact?: string | null;
    is_paid?: boolean | null;
    is_delivered?: boolean | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type orderUncheckedCreateWithoutUserInput = {
    id?: string;
    delivery_date?: Date | string | null;
    description?: string | null;
    buyer_contact?: string | null;
    is_paid?: boolean | null;
    is_delivered?: boolean | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type orderCreateOrConnectWithoutUserInput = {
    where: orderWhereUniqueInput;
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>;
  };

  export type orderCreateManyUserInputEnvelope = {
    data: orderCreateManyUserInput | orderCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type organizationUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type organizationCreateOrConnectWithoutUserInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationCreateManyUserInputEnvelope = {
    data: organizationCreateManyUserInput | organizationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type stockCreateWithoutUserInput = {
    id?: string;
    item_name?: string | null;
    quantity?: number | null;
    price_per_unit?: number | null;
    total_value?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type stockUncheckedCreateWithoutUserInput = {
    id?: string;
    item_name?: string | null;
    quantity?: number | null;
    price_per_unit?: number | null;
    total_value?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type stockCreateOrConnectWithoutUserInput = {
    where: stockWhereUniqueInput;
    create: XOR<stockCreateWithoutUserInput, stockUncheckedCreateWithoutUserInput>;
  };

  export type stockCreateManyUserInputEnvelope = {
    data: stockCreateManyUserInput | stockCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type expenseUpsertWithWhereUniqueWithoutUserInput = {
    where: expenseWhereUniqueInput;
    update: XOR<expenseUpdateWithoutUserInput, expenseUncheckedUpdateWithoutUserInput>;
    create: XOR<expenseCreateWithoutUserInput, expenseUncheckedCreateWithoutUserInput>;
  };

  export type expenseUpdateWithWhereUniqueWithoutUserInput = {
    where: expenseWhereUniqueInput;
    data: XOR<expenseUpdateWithoutUserInput, expenseUncheckedUpdateWithoutUserInput>;
  };

  export type expenseUpdateManyWithWhereWithoutUserInput = {
    where: expenseScalarWhereInput;
    data: XOR<expenseUpdateManyMutationInput, expenseUncheckedUpdateManyWithoutUserInput>;
  };

  export type expenseScalarWhereInput = {
    AND?: expenseScalarWhereInput | expenseScalarWhereInput[];
    OR?: expenseScalarWhereInput[];
    NOT?: expenseScalarWhereInput | expenseScalarWhereInput[];
    id?: UuidFilter<'expense'> | string;
    amount?: IntFilter<'expense'> | number;
    description?: StringNullableFilter<'expense'> | string | null;
    date?: DateTimeFilter<'expense'> | Date | string;
    user_id?: UuidFilter<'expense'> | string;
    created_at?: DateTimeFilter<'expense'> | Date | string;
    updated_at?: DateTimeFilter<'expense'> | Date | string;
  };

  export type finance_chartUpsertWithWhereUniqueWithoutUserInput = {
    where: finance_chartWhereUniqueInput;
    update: XOR<finance_chartUpdateWithoutUserInput, finance_chartUncheckedUpdateWithoutUserInput>;
    create: XOR<finance_chartCreateWithoutUserInput, finance_chartUncheckedCreateWithoutUserInput>;
  };

  export type finance_chartUpdateWithWhereUniqueWithoutUserInput = {
    where: finance_chartWhereUniqueInput;
    data: XOR<finance_chartUpdateWithoutUserInput, finance_chartUncheckedUpdateWithoutUserInput>;
  };

  export type finance_chartUpdateManyWithWhereWithoutUserInput = {
    where: finance_chartScalarWhereInput;
    data: XOR<finance_chartUpdateManyMutationInput, finance_chartUncheckedUpdateManyWithoutUserInput>;
  };

  export type finance_chartScalarWhereInput = {
    AND?: finance_chartScalarWhereInput | finance_chartScalarWhereInput[];
    OR?: finance_chartScalarWhereInput[];
    NOT?: finance_chartScalarWhereInput | finance_chartScalarWhereInput[];
    id?: UuidFilter<'finance_chart'> | string;
    income?: IntNullableFilter<'finance_chart'> | number | null;
    finance_chart_expense?: IntNullableFilter<'finance_chart'> | number | null;
    balance?: IntNullableFilter<'finance_chart'> | number | null;
    account_balance?: IntNullableFilter<'finance_chart'> | number | null;
    user_id?: UuidFilter<'finance_chart'> | string;
    created_at?: DateTimeFilter<'finance_chart'> | Date | string;
    updated_at?: DateTimeFilter<'finance_chart'> | Date | string;
  };

  export type orderUpsertWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput;
    update: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>;
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>;
  };

  export type orderUpdateWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput;
    data: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>;
  };

  export type orderUpdateManyWithWhereWithoutUserInput = {
    where: orderScalarWhereInput;
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutUserInput>;
  };

  export type orderScalarWhereInput = {
    AND?: orderScalarWhereInput | orderScalarWhereInput[];
    OR?: orderScalarWhereInput[];
    NOT?: orderScalarWhereInput | orderScalarWhereInput[];
    id?: UuidFilter<'order'> | string;
    delivery_date?: DateTimeNullableFilter<'order'> | Date | string | null;
    description?: StringNullableFilter<'order'> | string | null;
    buyer_contact?: StringNullableFilter<'order'> | string | null;
    is_paid?: BoolNullableFilter<'order'> | boolean | null;
    is_delivered?: BoolNullableFilter<'order'> | boolean | null;
    user_id?: UuidFilter<'order'> | string;
    created_at?: DateTimeFilter<'order'> | Date | string;
    updated_at?: DateTimeFilter<'order'> | Date | string;
  };

  export type organizationUpsertWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    update: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationUpdateWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    data: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
  };

  export type organizationUpdateManyWithWhereWithoutUserInput = {
    where: organizationScalarWhereInput;
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationScalarWhereInput = {
    AND?: organizationScalarWhereInput | organizationScalarWhereInput[];
    OR?: organizationScalarWhereInput[];
    NOT?: organizationScalarWhereInput | organizationScalarWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
  };

  export type stockUpsertWithWhereUniqueWithoutUserInput = {
    where: stockWhereUniqueInput;
    update: XOR<stockUpdateWithoutUserInput, stockUncheckedUpdateWithoutUserInput>;
    create: XOR<stockCreateWithoutUserInput, stockUncheckedCreateWithoutUserInput>;
  };

  export type stockUpdateWithWhereUniqueWithoutUserInput = {
    where: stockWhereUniqueInput;
    data: XOR<stockUpdateWithoutUserInput, stockUncheckedUpdateWithoutUserInput>;
  };

  export type stockUpdateManyWithWhereWithoutUserInput = {
    where: stockScalarWhereInput;
    data: XOR<stockUpdateManyMutationInput, stockUncheckedUpdateManyWithoutUserInput>;
  };

  export type stockScalarWhereInput = {
    AND?: stockScalarWhereInput | stockScalarWhereInput[];
    OR?: stockScalarWhereInput[];
    NOT?: stockScalarWhereInput | stockScalarWhereInput[];
    id?: UuidFilter<'stock'> | string;
    item_name?: StringNullableFilter<'stock'> | string | null;
    quantity?: IntNullableFilter<'stock'> | number | null;
    price_per_unit?: IntNullableFilter<'stock'> | number | null;
    total_value?: IntNullableFilter<'stock'> | number | null;
    user_id?: UuidFilter<'stock'> | string;
    created_at?: DateTimeFilter<'stock'> | Date | string;
    updated_at?: DateTimeFilter<'stock'> | Date | string;
  };

  export type expenseCreateManyUserInput = {
    id?: string;
    amount: number;
    description?: string | null;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type finance_chartCreateManyUserInput = {
    id?: string;
    income?: number | null;
    finance_chart_expense?: number | null;
    balance?: number | null;
    account_balance?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type orderCreateManyUserInput = {
    id?: string;
    delivery_date?: Date | string | null;
    description?: string | null;
    buyer_contact?: string | null;
    is_paid?: boolean | null;
    is_delivered?: boolean | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type stockCreateManyUserInput = {
    id?: string;
    item_name?: string | null;
    quantity?: number | null;
    price_per_unit?: number | null;
    total_value?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type expenseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type expenseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type expenseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type finance_chartUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    income?: NullableIntFieldUpdateOperationsInput | number | null;
    finance_chart_expense?: NullableIntFieldUpdateOperationsInput | number | null;
    balance?: NullableIntFieldUpdateOperationsInput | number | null;
    account_balance?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type finance_chartUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    income?: NullableIntFieldUpdateOperationsInput | number | null;
    finance_chart_expense?: NullableIntFieldUpdateOperationsInput | number | null;
    balance?: NullableIntFieldUpdateOperationsInput | number | null;
    account_balance?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type finance_chartUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    income?: NullableIntFieldUpdateOperationsInput | number | null;
    finance_chart_expense?: NullableIntFieldUpdateOperationsInput | number | null;
    balance?: NullableIntFieldUpdateOperationsInput | number | null;
    account_balance?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type orderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    buyer_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    is_paid?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_delivered?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type orderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    buyer_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    is_paid?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_delivered?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type orderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    buyer_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    is_paid?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_delivered?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type stockUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    item_name?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    price_per_unit?: NullableIntFieldUpdateOperationsInput | number | null;
    total_value?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type stockUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    item_name?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    price_per_unit?: NullableIntFieldUpdateOperationsInput | number | null;
    total_value?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type stockUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    item_name?: NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: NullableIntFieldUpdateOperationsInput | number | null;
    price_per_unit?: NullableIntFieldUpdateOperationsInput | number | null;
    total_value?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use expenseDefaultArgs instead
   */
  export type expenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    expenseDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use finance_chartDefaultArgs instead
   */
  export type finance_chartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    finance_chartDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use orderDefaultArgs instead
   */
  export type orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = orderDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use stockDefaultArgs instead
   */
  export type stockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = stockDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
