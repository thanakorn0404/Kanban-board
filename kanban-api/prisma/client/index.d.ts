
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model task_previles
 * 
 */
export type task_previles = $Result.DefaultSelection<Prisma.$task_previlesPayload>
/**
 * Model boards
 * 
 */
export type boards = $Result.DefaultSelection<Prisma.$boardsPayload>
/**
 * Model stages
 * 
 */
export type stages = $Result.DefaultSelection<Prisma.$stagesPayload>
/**
 * Model invites
 * 
 */
export type invites = $Result.DefaultSelection<Prisma.$invitesPayload>
/**
 * Model tasks
 * 
 */
export type tasks = $Result.DefaultSelection<Prisma.$tasksPayload>
/**
 * Model messages
 * 
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task_previles`: Exposes CRUD operations for the **task_previles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Task_previles
    * const task_previles = await prisma.task_previles.findMany()
    * ```
    */
  get task_previles(): Prisma.task_previlesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.boards`: Exposes CRUD operations for the **boards** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.boards.findMany()
    * ```
    */
  get boards(): Prisma.boardsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stages`: Exposes CRUD operations for the **stages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stages
    * const stages = await prisma.stages.findMany()
    * ```
    */
  get stages(): Prisma.stagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invites`: Exposes CRUD operations for the **invites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invites
    * const invites = await prisma.invites.findMany()
    * ```
    */
  get invites(): Prisma.invitesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tasks`: Exposes CRUD operations for the **tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.tasks.findMany()
    * ```
    */
  get tasks(): Prisma.tasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;
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
    users: 'users',
    task_previles: 'task_previles',
    boards: 'boards',
    stages: 'stages',
    invites: 'invites',
    tasks: 'tasks',
    messages: 'messages'
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
      modelProps: "users" | "task_previles" | "boards" | "stages" | "invites" | "tasks" | "messages"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      task_previles: {
        payload: Prisma.$task_previlesPayload<ExtArgs>
        fields: Prisma.task_previlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.task_previlesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_previlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.task_previlesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_previlesPayload>
          }
          findFirst: {
            args: Prisma.task_previlesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_previlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.task_previlesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_previlesPayload>
          }
          findMany: {
            args: Prisma.task_previlesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_previlesPayload>[]
          }
          create: {
            args: Prisma.task_previlesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_previlesPayload>
          }
          createMany: {
            args: Prisma.task_previlesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.task_previlesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_previlesPayload>[]
          }
          delete: {
            args: Prisma.task_previlesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_previlesPayload>
          }
          update: {
            args: Prisma.task_previlesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_previlesPayload>
          }
          deleteMany: {
            args: Prisma.task_previlesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.task_previlesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.task_previlesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_previlesPayload>[]
          }
          upsert: {
            args: Prisma.task_previlesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_previlesPayload>
          }
          aggregate: {
            args: Prisma.Task_previlesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask_previles>
          }
          groupBy: {
            args: Prisma.task_previlesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Task_previlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.task_previlesCountArgs<ExtArgs>
            result: $Utils.Optional<Task_previlesCountAggregateOutputType> | number
          }
        }
      }
      boards: {
        payload: Prisma.$boardsPayload<ExtArgs>
        fields: Prisma.boardsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.boardsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.boardsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload>
          }
          findFirst: {
            args: Prisma.boardsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.boardsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload>
          }
          findMany: {
            args: Prisma.boardsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload>[]
          }
          create: {
            args: Prisma.boardsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload>
          }
          createMany: {
            args: Prisma.boardsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.boardsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload>[]
          }
          delete: {
            args: Prisma.boardsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload>
          }
          update: {
            args: Prisma.boardsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload>
          }
          deleteMany: {
            args: Prisma.boardsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.boardsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.boardsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload>[]
          }
          upsert: {
            args: Prisma.boardsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardsPayload>
          }
          aggregate: {
            args: Prisma.BoardsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoards>
          }
          groupBy: {
            args: Prisma.boardsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardsGroupByOutputType>[]
          }
          count: {
            args: Prisma.boardsCountArgs<ExtArgs>
            result: $Utils.Optional<BoardsCountAggregateOutputType> | number
          }
        }
      }
      stages: {
        payload: Prisma.$stagesPayload<ExtArgs>
        fields: Prisma.stagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagesPayload>
          }
          findFirst: {
            args: Prisma.stagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagesPayload>
          }
          findMany: {
            args: Prisma.stagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagesPayload>[]
          }
          create: {
            args: Prisma.stagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagesPayload>
          }
          createMany: {
            args: Prisma.stagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagesPayload>[]
          }
          delete: {
            args: Prisma.stagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagesPayload>
          }
          update: {
            args: Prisma.stagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagesPayload>
          }
          deleteMany: {
            args: Prisma.stagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagesPayload>[]
          }
          upsert: {
            args: Prisma.stagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagesPayload>
          }
          aggregate: {
            args: Prisma.StagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStages>
          }
          groupBy: {
            args: Prisma.stagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<StagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.stagesCountArgs<ExtArgs>
            result: $Utils.Optional<StagesCountAggregateOutputType> | number
          }
        }
      }
      invites: {
        payload: Prisma.$invitesPayload<ExtArgs>
        fields: Prisma.invitesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invitesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invitesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitesPayload>
          }
          findFirst: {
            args: Prisma.invitesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invitesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitesPayload>
          }
          findMany: {
            args: Prisma.invitesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitesPayload>[]
          }
          create: {
            args: Prisma.invitesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitesPayload>
          }
          createMany: {
            args: Prisma.invitesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invitesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitesPayload>[]
          }
          delete: {
            args: Prisma.invitesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitesPayload>
          }
          update: {
            args: Prisma.invitesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitesPayload>
          }
          deleteMany: {
            args: Prisma.invitesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invitesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.invitesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitesPayload>[]
          }
          upsert: {
            args: Prisma.invitesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitesPayload>
          }
          aggregate: {
            args: Prisma.InvitesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvites>
          }
          groupBy: {
            args: Prisma.invitesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitesGroupByOutputType>[]
          }
          count: {
            args: Prisma.invitesCountArgs<ExtArgs>
            result: $Utils.Optional<InvitesCountAggregateOutputType> | number
          }
        }
      }
      tasks: {
        payload: Prisma.$tasksPayload<ExtArgs>
        fields: Prisma.tasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findFirst: {
            args: Prisma.tasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findMany: {
            args: Prisma.tasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          create: {
            args: Prisma.tasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          createMany: {
            args: Prisma.tasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          delete: {
            args: Prisma.tasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          update: {
            args: Prisma.tasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          deleteMany: {
            args: Prisma.tasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          upsert: {
            args: Prisma.tasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          aggregate: {
            args: Prisma.TasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasks>
          }
          groupBy: {
            args: Prisma.tasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.tasksCountArgs<ExtArgs>
            result: $Utils.Optional<TasksCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.messagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
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
    users?: usersOmit
    task_previles?: task_previlesOmit
    boards?: boardsOmit
    stages?: stagesOmit
    invites?: invitesOmit
    tasks?: tasksOmit
    messages?: messagesOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    boards: number
    invites: number
    tasks: number
    messages: number
    task_priviles: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boards?: boolean | UsersCountOutputTypeCountBoardsArgs
    invites?: boolean | UsersCountOutputTypeCountInvitesArgs
    tasks?: boolean | UsersCountOutputTypeCountTasksArgs
    messages?: boolean | UsersCountOutputTypeCountMessagesArgs
    task_priviles?: boolean | UsersCountOutputTypeCountTask_privilesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBoardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: boardsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invitesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTask_privilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: task_previlesWhereInput
  }


  /**
   * Count Type BoardsCountOutputType
   */

  export type BoardsCountOutputType = {
    stages: number
    tasks: number
    invites: number
  }

  export type BoardsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stages?: boolean | BoardsCountOutputTypeCountStagesArgs
    tasks?: boolean | BoardsCountOutputTypeCountTasksArgs
    invites?: boolean | BoardsCountOutputTypeCountInvitesArgs
  }

  // Custom InputTypes
  /**
   * BoardsCountOutputType without action
   */
  export type BoardsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardsCountOutputType
     */
    select?: BoardsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoardsCountOutputType without action
   */
  export type BoardsCountOutputTypeCountStagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stagesWhereInput
  }

  /**
   * BoardsCountOutputType without action
   */
  export type BoardsCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }

  /**
   * BoardsCountOutputType without action
   */
  export type BoardsCountOutputTypeCountInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invitesWhereInput
  }


  /**
   * Count Type StagesCountOutputType
   */

  export type StagesCountOutputType = {
    tasks: number
  }

  export type StagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | StagesCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * StagesCountOutputType without action
   */
  export type StagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StagesCountOutputType
     */
    select?: StagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StagesCountOutputType without action
   */
  export type StagesCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }


  /**
   * Count Type TasksCountOutputType
   */

  export type TasksCountOutputType = {
    messages: number
    task_priviles: number
  }

  export type TasksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | TasksCountOutputTypeCountMessagesArgs
    task_priviles?: boolean | TasksCountOutputTypeCountTask_privilesArgs
  }

  // Custom InputTypes
  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksCountOutputType
     */
    select?: TasksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }

  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeCountTask_privilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: task_previlesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    password: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    boards?: boolean | users$boardsArgs<ExtArgs>
    invites?: boolean | users$invitesArgs<ExtArgs>
    tasks?: boolean | users$tasksArgs<ExtArgs>
    messages?: boolean | users$messagesArgs<ExtArgs>
    task_priviles?: boolean | users$task_privilesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boards?: boolean | users$boardsArgs<ExtArgs>
    invites?: boolean | users$invitesArgs<ExtArgs>
    tasks?: boolean | users$tasksArgs<ExtArgs>
    messages?: boolean | users$messagesArgs<ExtArgs>
    task_priviles?: boolean | users$task_privilesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      boards: Prisma.$boardsPayload<ExtArgs>[]
      invites: Prisma.$invitesPayload<ExtArgs>[]
      tasks: Prisma.$tasksPayload<ExtArgs>[]
      messages: Prisma.$messagesPayload<ExtArgs>[]
      task_priviles: Prisma.$task_previlesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boards<T extends users$boardsArgs<ExtArgs> = {}>(args?: Subset<T, users$boardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invites<T extends users$invitesArgs<ExtArgs> = {}>(args?: Subset<T, users$invitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends users$tasksArgs<ExtArgs> = {}>(args?: Subset<T, users$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends users$messagesArgs<ExtArgs> = {}>(args?: Subset<T, users$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    task_priviles<T extends users$task_privilesArgs<ExtArgs> = {}>(args?: Subset<T, users$task_privilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_previlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.boards
   */
  export type users$boardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    where?: boardsWhereInput
    orderBy?: boardsOrderByWithRelationInput | boardsOrderByWithRelationInput[]
    cursor?: boardsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoardsScalarFieldEnum | BoardsScalarFieldEnum[]
  }

  /**
   * users.invites
   */
  export type users$invitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invites
     */
    select?: invitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invites
     */
    omit?: invitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitesInclude<ExtArgs> | null
    where?: invitesWhereInput
    orderBy?: invitesOrderByWithRelationInput | invitesOrderByWithRelationInput[]
    cursor?: invitesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitesScalarFieldEnum | InvitesScalarFieldEnum[]
  }

  /**
   * users.tasks
   */
  export type users$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * users.messages
   */
  export type users$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * users.task_priviles
   */
  export type users$task_privilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_previles
     */
    select?: task_previlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_previles
     */
    omit?: task_previlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_previlesInclude<ExtArgs> | null
    where?: task_previlesWhereInput
    orderBy?: task_previlesOrderByWithRelationInput | task_previlesOrderByWithRelationInput[]
    cursor?: task_previlesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Task_previlesScalarFieldEnum | Task_previlesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model task_previles
   */

  export type AggregateTask_previles = {
    _count: Task_previlesCountAggregateOutputType | null
    _avg: Task_previlesAvgAggregateOutputType | null
    _sum: Task_previlesSumAggregateOutputType | null
    _min: Task_previlesMinAggregateOutputType | null
    _max: Task_previlesMaxAggregateOutputType | null
  }

  export type Task_previlesAvgAggregateOutputType = {
    id: number | null
    task_id: number | null
    user_id: number | null
  }

  export type Task_previlesSumAggregateOutputType = {
    id: number | null
    task_id: number | null
    user_id: number | null
  }

  export type Task_previlesMinAggregateOutputType = {
    id: number | null
    task_id: number | null
    user_id: number | null
    add_time: Date | null
  }

  export type Task_previlesMaxAggregateOutputType = {
    id: number | null
    task_id: number | null
    user_id: number | null
    add_time: Date | null
  }

  export type Task_previlesCountAggregateOutputType = {
    id: number
    task_id: number
    user_id: number
    add_time: number
    _all: number
  }


  export type Task_previlesAvgAggregateInputType = {
    id?: true
    task_id?: true
    user_id?: true
  }

  export type Task_previlesSumAggregateInputType = {
    id?: true
    task_id?: true
    user_id?: true
  }

  export type Task_previlesMinAggregateInputType = {
    id?: true
    task_id?: true
    user_id?: true
    add_time?: true
  }

  export type Task_previlesMaxAggregateInputType = {
    id?: true
    task_id?: true
    user_id?: true
    add_time?: true
  }

  export type Task_previlesCountAggregateInputType = {
    id?: true
    task_id?: true
    user_id?: true
    add_time?: true
    _all?: true
  }

  export type Task_previlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task_previles to aggregate.
     */
    where?: task_previlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_previles to fetch.
     */
    orderBy?: task_previlesOrderByWithRelationInput | task_previlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: task_previlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_previles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_previles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned task_previles
    **/
    _count?: true | Task_previlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Task_previlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Task_previlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Task_previlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Task_previlesMaxAggregateInputType
  }

  export type GetTask_previlesAggregateType<T extends Task_previlesAggregateArgs> = {
        [P in keyof T & keyof AggregateTask_previles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask_previles[P]>
      : GetScalarType<T[P], AggregateTask_previles[P]>
  }




  export type task_previlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: task_previlesWhereInput
    orderBy?: task_previlesOrderByWithAggregationInput | task_previlesOrderByWithAggregationInput[]
    by: Task_previlesScalarFieldEnum[] | Task_previlesScalarFieldEnum
    having?: task_previlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Task_previlesCountAggregateInputType | true
    _avg?: Task_previlesAvgAggregateInputType
    _sum?: Task_previlesSumAggregateInputType
    _min?: Task_previlesMinAggregateInputType
    _max?: Task_previlesMaxAggregateInputType
  }

  export type Task_previlesGroupByOutputType = {
    id: number
    task_id: number
    user_id: number
    add_time: Date
    _count: Task_previlesCountAggregateOutputType | null
    _avg: Task_previlesAvgAggregateOutputType | null
    _sum: Task_previlesSumAggregateOutputType | null
    _min: Task_previlesMinAggregateOutputType | null
    _max: Task_previlesMaxAggregateOutputType | null
  }

  type GetTask_previlesGroupByPayload<T extends task_previlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Task_previlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Task_previlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Task_previlesGroupByOutputType[P]>
            : GetScalarType<T[P], Task_previlesGroupByOutputType[P]>
        }
      >
    >


  export type task_previlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    user_id?: boolean
    add_time?: boolean
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_previles"]>

  export type task_previlesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    user_id?: boolean
    add_time?: boolean
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_previles"]>

  export type task_previlesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    user_id?: boolean
    add_time?: boolean
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_previles"]>

  export type task_previlesSelectScalar = {
    id?: boolean
    task_id?: boolean
    user_id?: boolean
    add_time?: boolean
  }

  export type task_previlesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "task_id" | "user_id" | "add_time", ExtArgs["result"]["task_previles"]>
  export type task_previlesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type task_previlesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type task_previlesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $task_previlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "task_previles"
    objects: {
      tasks: Prisma.$tasksPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      task_id: number
      user_id: number
      add_time: Date
    }, ExtArgs["result"]["task_previles"]>
    composites: {}
  }

  type task_previlesGetPayload<S extends boolean | null | undefined | task_previlesDefaultArgs> = $Result.GetResult<Prisma.$task_previlesPayload, S>

  type task_previlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<task_previlesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Task_previlesCountAggregateInputType | true
    }

  export interface task_previlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task_previles'], meta: { name: 'task_previles' } }
    /**
     * Find zero or one Task_previles that matches the filter.
     * @param {task_previlesFindUniqueArgs} args - Arguments to find a Task_previles
     * @example
     * // Get one Task_previles
     * const task_previles = await prisma.task_previles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends task_previlesFindUniqueArgs>(args: SelectSubset<T, task_previlesFindUniqueArgs<ExtArgs>>): Prisma__task_previlesClient<$Result.GetResult<Prisma.$task_previlesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task_previles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {task_previlesFindUniqueOrThrowArgs} args - Arguments to find a Task_previles
     * @example
     * // Get one Task_previles
     * const task_previles = await prisma.task_previles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends task_previlesFindUniqueOrThrowArgs>(args: SelectSubset<T, task_previlesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__task_previlesClient<$Result.GetResult<Prisma.$task_previlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task_previles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_previlesFindFirstArgs} args - Arguments to find a Task_previles
     * @example
     * // Get one Task_previles
     * const task_previles = await prisma.task_previles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends task_previlesFindFirstArgs>(args?: SelectSubset<T, task_previlesFindFirstArgs<ExtArgs>>): Prisma__task_previlesClient<$Result.GetResult<Prisma.$task_previlesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task_previles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_previlesFindFirstOrThrowArgs} args - Arguments to find a Task_previles
     * @example
     * // Get one Task_previles
     * const task_previles = await prisma.task_previles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends task_previlesFindFirstOrThrowArgs>(args?: SelectSubset<T, task_previlesFindFirstOrThrowArgs<ExtArgs>>): Prisma__task_previlesClient<$Result.GetResult<Prisma.$task_previlesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Task_previles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_previlesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Task_previles
     * const task_previles = await prisma.task_previles.findMany()
     * 
     * // Get first 10 Task_previles
     * const task_previles = await prisma.task_previles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const task_previlesWithIdOnly = await prisma.task_previles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends task_previlesFindManyArgs>(args?: SelectSubset<T, task_previlesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_previlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task_previles.
     * @param {task_previlesCreateArgs} args - Arguments to create a Task_previles.
     * @example
     * // Create one Task_previles
     * const Task_previles = await prisma.task_previles.create({
     *   data: {
     *     // ... data to create a Task_previles
     *   }
     * })
     * 
     */
    create<T extends task_previlesCreateArgs>(args: SelectSubset<T, task_previlesCreateArgs<ExtArgs>>): Prisma__task_previlesClient<$Result.GetResult<Prisma.$task_previlesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Task_previles.
     * @param {task_previlesCreateManyArgs} args - Arguments to create many Task_previles.
     * @example
     * // Create many Task_previles
     * const task_previles = await prisma.task_previles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends task_previlesCreateManyArgs>(args?: SelectSubset<T, task_previlesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Task_previles and returns the data saved in the database.
     * @param {task_previlesCreateManyAndReturnArgs} args - Arguments to create many Task_previles.
     * @example
     * // Create many Task_previles
     * const task_previles = await prisma.task_previles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Task_previles and only return the `id`
     * const task_previlesWithIdOnly = await prisma.task_previles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends task_previlesCreateManyAndReturnArgs>(args?: SelectSubset<T, task_previlesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_previlesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task_previles.
     * @param {task_previlesDeleteArgs} args - Arguments to delete one Task_previles.
     * @example
     * // Delete one Task_previles
     * const Task_previles = await prisma.task_previles.delete({
     *   where: {
     *     // ... filter to delete one Task_previles
     *   }
     * })
     * 
     */
    delete<T extends task_previlesDeleteArgs>(args: SelectSubset<T, task_previlesDeleteArgs<ExtArgs>>): Prisma__task_previlesClient<$Result.GetResult<Prisma.$task_previlesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task_previles.
     * @param {task_previlesUpdateArgs} args - Arguments to update one Task_previles.
     * @example
     * // Update one Task_previles
     * const task_previles = await prisma.task_previles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends task_previlesUpdateArgs>(args: SelectSubset<T, task_previlesUpdateArgs<ExtArgs>>): Prisma__task_previlesClient<$Result.GetResult<Prisma.$task_previlesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Task_previles.
     * @param {task_previlesDeleteManyArgs} args - Arguments to filter Task_previles to delete.
     * @example
     * // Delete a few Task_previles
     * const { count } = await prisma.task_previles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends task_previlesDeleteManyArgs>(args?: SelectSubset<T, task_previlesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Task_previles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_previlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Task_previles
     * const task_previles = await prisma.task_previles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends task_previlesUpdateManyArgs>(args: SelectSubset<T, task_previlesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Task_previles and returns the data updated in the database.
     * @param {task_previlesUpdateManyAndReturnArgs} args - Arguments to update many Task_previles.
     * @example
     * // Update many Task_previles
     * const task_previles = await prisma.task_previles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Task_previles and only return the `id`
     * const task_previlesWithIdOnly = await prisma.task_previles.updateManyAndReturn({
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
    updateManyAndReturn<T extends task_previlesUpdateManyAndReturnArgs>(args: SelectSubset<T, task_previlesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_previlesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task_previles.
     * @param {task_previlesUpsertArgs} args - Arguments to update or create a Task_previles.
     * @example
     * // Update or create a Task_previles
     * const task_previles = await prisma.task_previles.upsert({
     *   create: {
     *     // ... data to create a Task_previles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task_previles we want to update
     *   }
     * })
     */
    upsert<T extends task_previlesUpsertArgs>(args: SelectSubset<T, task_previlesUpsertArgs<ExtArgs>>): Prisma__task_previlesClient<$Result.GetResult<Prisma.$task_previlesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Task_previles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_previlesCountArgs} args - Arguments to filter Task_previles to count.
     * @example
     * // Count the number of Task_previles
     * const count = await prisma.task_previles.count({
     *   where: {
     *     // ... the filter for the Task_previles we want to count
     *   }
     * })
    **/
    count<T extends task_previlesCountArgs>(
      args?: Subset<T, task_previlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Task_previlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task_previles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Task_previlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Task_previlesAggregateArgs>(args: Subset<T, Task_previlesAggregateArgs>): Prisma.PrismaPromise<GetTask_previlesAggregateType<T>>

    /**
     * Group by Task_previles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_previlesGroupByArgs} args - Group by arguments.
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
      T extends task_previlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: task_previlesGroupByArgs['orderBy'] }
        : { orderBy?: task_previlesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, task_previlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTask_previlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the task_previles model
   */
  readonly fields: task_previlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task_previles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__task_previlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends tasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tasksDefaultArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the task_previles model
   */
  interface task_previlesFieldRefs {
    readonly id: FieldRef<"task_previles", 'Int'>
    readonly task_id: FieldRef<"task_previles", 'Int'>
    readonly user_id: FieldRef<"task_previles", 'Int'>
    readonly add_time: FieldRef<"task_previles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * task_previles findUnique
   */
  export type task_previlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_previles
     */
    select?: task_previlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_previles
     */
    omit?: task_previlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_previlesInclude<ExtArgs> | null
    /**
     * Filter, which task_previles to fetch.
     */
    where: task_previlesWhereUniqueInput
  }

  /**
   * task_previles findUniqueOrThrow
   */
  export type task_previlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_previles
     */
    select?: task_previlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_previles
     */
    omit?: task_previlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_previlesInclude<ExtArgs> | null
    /**
     * Filter, which task_previles to fetch.
     */
    where: task_previlesWhereUniqueInput
  }

  /**
   * task_previles findFirst
   */
  export type task_previlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_previles
     */
    select?: task_previlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_previles
     */
    omit?: task_previlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_previlesInclude<ExtArgs> | null
    /**
     * Filter, which task_previles to fetch.
     */
    where?: task_previlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_previles to fetch.
     */
    orderBy?: task_previlesOrderByWithRelationInput | task_previlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for task_previles.
     */
    cursor?: task_previlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_previles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_previles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_previles.
     */
    distinct?: Task_previlesScalarFieldEnum | Task_previlesScalarFieldEnum[]
  }

  /**
   * task_previles findFirstOrThrow
   */
  export type task_previlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_previles
     */
    select?: task_previlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_previles
     */
    omit?: task_previlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_previlesInclude<ExtArgs> | null
    /**
     * Filter, which task_previles to fetch.
     */
    where?: task_previlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_previles to fetch.
     */
    orderBy?: task_previlesOrderByWithRelationInput | task_previlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for task_previles.
     */
    cursor?: task_previlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_previles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_previles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_previles.
     */
    distinct?: Task_previlesScalarFieldEnum | Task_previlesScalarFieldEnum[]
  }

  /**
   * task_previles findMany
   */
  export type task_previlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_previles
     */
    select?: task_previlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_previles
     */
    omit?: task_previlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_previlesInclude<ExtArgs> | null
    /**
     * Filter, which task_previles to fetch.
     */
    where?: task_previlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_previles to fetch.
     */
    orderBy?: task_previlesOrderByWithRelationInput | task_previlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing task_previles.
     */
    cursor?: task_previlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_previles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_previles.
     */
    skip?: number
    distinct?: Task_previlesScalarFieldEnum | Task_previlesScalarFieldEnum[]
  }

  /**
   * task_previles create
   */
  export type task_previlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_previles
     */
    select?: task_previlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_previles
     */
    omit?: task_previlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_previlesInclude<ExtArgs> | null
    /**
     * The data needed to create a task_previles.
     */
    data: XOR<task_previlesCreateInput, task_previlesUncheckedCreateInput>
  }

  /**
   * task_previles createMany
   */
  export type task_previlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many task_previles.
     */
    data: task_previlesCreateManyInput | task_previlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task_previles createManyAndReturn
   */
  export type task_previlesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_previles
     */
    select?: task_previlesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task_previles
     */
    omit?: task_previlesOmit<ExtArgs> | null
    /**
     * The data used to create many task_previles.
     */
    data: task_previlesCreateManyInput | task_previlesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_previlesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * task_previles update
   */
  export type task_previlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_previles
     */
    select?: task_previlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_previles
     */
    omit?: task_previlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_previlesInclude<ExtArgs> | null
    /**
     * The data needed to update a task_previles.
     */
    data: XOR<task_previlesUpdateInput, task_previlesUncheckedUpdateInput>
    /**
     * Choose, which task_previles to update.
     */
    where: task_previlesWhereUniqueInput
  }

  /**
   * task_previles updateMany
   */
  export type task_previlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update task_previles.
     */
    data: XOR<task_previlesUpdateManyMutationInput, task_previlesUncheckedUpdateManyInput>
    /**
     * Filter which task_previles to update
     */
    where?: task_previlesWhereInput
    /**
     * Limit how many task_previles to update.
     */
    limit?: number
  }

  /**
   * task_previles updateManyAndReturn
   */
  export type task_previlesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_previles
     */
    select?: task_previlesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task_previles
     */
    omit?: task_previlesOmit<ExtArgs> | null
    /**
     * The data used to update task_previles.
     */
    data: XOR<task_previlesUpdateManyMutationInput, task_previlesUncheckedUpdateManyInput>
    /**
     * Filter which task_previles to update
     */
    where?: task_previlesWhereInput
    /**
     * Limit how many task_previles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_previlesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * task_previles upsert
   */
  export type task_previlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_previles
     */
    select?: task_previlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_previles
     */
    omit?: task_previlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_previlesInclude<ExtArgs> | null
    /**
     * The filter to search for the task_previles to update in case it exists.
     */
    where: task_previlesWhereUniqueInput
    /**
     * In case the task_previles found by the `where` argument doesn't exist, create a new task_previles with this data.
     */
    create: XOR<task_previlesCreateInput, task_previlesUncheckedCreateInput>
    /**
     * In case the task_previles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<task_previlesUpdateInput, task_previlesUncheckedUpdateInput>
  }

  /**
   * task_previles delete
   */
  export type task_previlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_previles
     */
    select?: task_previlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_previles
     */
    omit?: task_previlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_previlesInclude<ExtArgs> | null
    /**
     * Filter which task_previles to delete.
     */
    where: task_previlesWhereUniqueInput
  }

  /**
   * task_previles deleteMany
   */
  export type task_previlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task_previles to delete
     */
    where?: task_previlesWhereInput
    /**
     * Limit how many task_previles to delete.
     */
    limit?: number
  }

  /**
   * task_previles without action
   */
  export type task_previlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_previles
     */
    select?: task_previlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_previles
     */
    omit?: task_previlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_previlesInclude<ExtArgs> | null
  }


  /**
   * Model boards
   */

  export type AggregateBoards = {
    _count: BoardsCountAggregateOutputType | null
    _avg: BoardsAvgAggregateOutputType | null
    _sum: BoardsSumAggregateOutputType | null
    _min: BoardsMinAggregateOutputType | null
    _max: BoardsMaxAggregateOutputType | null
  }

  export type BoardsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type BoardsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type BoardsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    description: string | null
    create_at: Date | null
  }

  export type BoardsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    description: string | null
    create_at: Date | null
  }

  export type BoardsCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    description: number
    create_at: number
    _all: number
  }


  export type BoardsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type BoardsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type BoardsMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    create_at?: true
  }

  export type BoardsMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    create_at?: true
  }

  export type BoardsCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    create_at?: true
    _all?: true
  }

  export type BoardsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which boards to aggregate.
     */
    where?: boardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boards to fetch.
     */
    orderBy?: boardsOrderByWithRelationInput | boardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: boardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned boards
    **/
    _count?: true | BoardsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardsMaxAggregateInputType
  }

  export type GetBoardsAggregateType<T extends BoardsAggregateArgs> = {
        [P in keyof T & keyof AggregateBoards]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoards[P]>
      : GetScalarType<T[P], AggregateBoards[P]>
  }




  export type boardsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: boardsWhereInput
    orderBy?: boardsOrderByWithAggregationInput | boardsOrderByWithAggregationInput[]
    by: BoardsScalarFieldEnum[] | BoardsScalarFieldEnum
    having?: boardsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardsCountAggregateInputType | true
    _avg?: BoardsAvgAggregateInputType
    _sum?: BoardsSumAggregateInputType
    _min?: BoardsMinAggregateInputType
    _max?: BoardsMaxAggregateInputType
  }

  export type BoardsGroupByOutputType = {
    id: number
    user_id: number
    title: string
    description: string | null
    create_at: Date
    _count: BoardsCountAggregateOutputType | null
    _avg: BoardsAvgAggregateOutputType | null
    _sum: BoardsSumAggregateOutputType | null
    _min: BoardsMinAggregateOutputType | null
    _max: BoardsMaxAggregateOutputType | null
  }

  type GetBoardsGroupByPayload<T extends boardsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardsGroupByOutputType[P]>
            : GetScalarType<T[P], BoardsGroupByOutputType[P]>
        }
      >
    >


  export type boardsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    create_at?: boolean
    stages?: boolean | boards$stagesArgs<ExtArgs>
    tasks?: boolean | boards$tasksArgs<ExtArgs>
    invites?: boolean | boards$invitesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | BoardsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boards"]>

  export type boardsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    create_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boards"]>

  export type boardsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    create_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boards"]>

  export type boardsSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    create_at?: boolean
  }

  export type boardsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "description" | "create_at", ExtArgs["result"]["boards"]>
  export type boardsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stages?: boolean | boards$stagesArgs<ExtArgs>
    tasks?: boolean | boards$tasksArgs<ExtArgs>
    invites?: boolean | boards$invitesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | BoardsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type boardsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type boardsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $boardsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "boards"
    objects: {
      stages: Prisma.$stagesPayload<ExtArgs>[]
      tasks: Prisma.$tasksPayload<ExtArgs>[]
      invites: Prisma.$invitesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      title: string
      description: string | null
      create_at: Date
    }, ExtArgs["result"]["boards"]>
    composites: {}
  }

  type boardsGetPayload<S extends boolean | null | undefined | boardsDefaultArgs> = $Result.GetResult<Prisma.$boardsPayload, S>

  type boardsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<boardsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoardsCountAggregateInputType | true
    }

  export interface boardsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['boards'], meta: { name: 'boards' } }
    /**
     * Find zero or one Boards that matches the filter.
     * @param {boardsFindUniqueArgs} args - Arguments to find a Boards
     * @example
     * // Get one Boards
     * const boards = await prisma.boards.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends boardsFindUniqueArgs>(args: SelectSubset<T, boardsFindUniqueArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Boards that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {boardsFindUniqueOrThrowArgs} args - Arguments to find a Boards
     * @example
     * // Get one Boards
     * const boards = await prisma.boards.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends boardsFindUniqueOrThrowArgs>(args: SelectSubset<T, boardsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardsFindFirstArgs} args - Arguments to find a Boards
     * @example
     * // Get one Boards
     * const boards = await prisma.boards.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends boardsFindFirstArgs>(args?: SelectSubset<T, boardsFindFirstArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Boards that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardsFindFirstOrThrowArgs} args - Arguments to find a Boards
     * @example
     * // Get one Boards
     * const boards = await prisma.boards.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends boardsFindFirstOrThrowArgs>(args?: SelectSubset<T, boardsFindFirstOrThrowArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.boards.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.boards.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardsWithIdOnly = await prisma.boards.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends boardsFindManyArgs>(args?: SelectSubset<T, boardsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Boards.
     * @param {boardsCreateArgs} args - Arguments to create a Boards.
     * @example
     * // Create one Boards
     * const Boards = await prisma.boards.create({
     *   data: {
     *     // ... data to create a Boards
     *   }
     * })
     * 
     */
    create<T extends boardsCreateArgs>(args: SelectSubset<T, boardsCreateArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boards.
     * @param {boardsCreateManyArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const boards = await prisma.boards.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends boardsCreateManyArgs>(args?: SelectSubset<T, boardsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Boards and returns the data saved in the database.
     * @param {boardsCreateManyAndReturnArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const boards = await prisma.boards.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Boards and only return the `id`
     * const boardsWithIdOnly = await prisma.boards.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends boardsCreateManyAndReturnArgs>(args?: SelectSubset<T, boardsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Boards.
     * @param {boardsDeleteArgs} args - Arguments to delete one Boards.
     * @example
     * // Delete one Boards
     * const Boards = await prisma.boards.delete({
     *   where: {
     *     // ... filter to delete one Boards
     *   }
     * })
     * 
     */
    delete<T extends boardsDeleteArgs>(args: SelectSubset<T, boardsDeleteArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Boards.
     * @param {boardsUpdateArgs} args - Arguments to update one Boards.
     * @example
     * // Update one Boards
     * const boards = await prisma.boards.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends boardsUpdateArgs>(args: SelectSubset<T, boardsUpdateArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boards.
     * @param {boardsDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.boards.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends boardsDeleteManyArgs>(args?: SelectSubset<T, boardsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const boards = await prisma.boards.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends boardsUpdateManyArgs>(args: SelectSubset<T, boardsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards and returns the data updated in the database.
     * @param {boardsUpdateManyAndReturnArgs} args - Arguments to update many Boards.
     * @example
     * // Update many Boards
     * const boards = await prisma.boards.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Boards and only return the `id`
     * const boardsWithIdOnly = await prisma.boards.updateManyAndReturn({
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
    updateManyAndReturn<T extends boardsUpdateManyAndReturnArgs>(args: SelectSubset<T, boardsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Boards.
     * @param {boardsUpsertArgs} args - Arguments to update or create a Boards.
     * @example
     * // Update or create a Boards
     * const boards = await prisma.boards.upsert({
     *   create: {
     *     // ... data to create a Boards
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boards we want to update
     *   }
     * })
     */
    upsert<T extends boardsUpsertArgs>(args: SelectSubset<T, boardsUpsertArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardsCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.boards.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends boardsCountArgs>(
      args?: Subset<T, boardsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardsAggregateArgs>(args: Subset<T, BoardsAggregateArgs>): Prisma.PrismaPromise<GetBoardsAggregateType<T>>

    /**
     * Group by Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardsGroupByArgs} args - Group by arguments.
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
      T extends boardsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: boardsGroupByArgs['orderBy'] }
        : { orderBy?: boardsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, boardsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the boards model
   */
  readonly fields: boardsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for boards.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__boardsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stages<T extends boards$stagesArgs<ExtArgs> = {}>(args?: Subset<T, boards$stagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends boards$tasksArgs<ExtArgs> = {}>(args?: Subset<T, boards$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invites<T extends boards$invitesArgs<ExtArgs> = {}>(args?: Subset<T, boards$invitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the boards model
   */
  interface boardsFieldRefs {
    readonly id: FieldRef<"boards", 'Int'>
    readonly user_id: FieldRef<"boards", 'Int'>
    readonly title: FieldRef<"boards", 'String'>
    readonly description: FieldRef<"boards", 'String'>
    readonly create_at: FieldRef<"boards", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * boards findUnique
   */
  export type boardsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    /**
     * Filter, which boards to fetch.
     */
    where: boardsWhereUniqueInput
  }

  /**
   * boards findUniqueOrThrow
   */
  export type boardsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    /**
     * Filter, which boards to fetch.
     */
    where: boardsWhereUniqueInput
  }

  /**
   * boards findFirst
   */
  export type boardsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    /**
     * Filter, which boards to fetch.
     */
    where?: boardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boards to fetch.
     */
    orderBy?: boardsOrderByWithRelationInput | boardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boards.
     */
    cursor?: boardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boards.
     */
    distinct?: BoardsScalarFieldEnum | BoardsScalarFieldEnum[]
  }

  /**
   * boards findFirstOrThrow
   */
  export type boardsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    /**
     * Filter, which boards to fetch.
     */
    where?: boardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boards to fetch.
     */
    orderBy?: boardsOrderByWithRelationInput | boardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boards.
     */
    cursor?: boardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boards.
     */
    distinct?: BoardsScalarFieldEnum | BoardsScalarFieldEnum[]
  }

  /**
   * boards findMany
   */
  export type boardsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    /**
     * Filter, which boards to fetch.
     */
    where?: boardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boards to fetch.
     */
    orderBy?: boardsOrderByWithRelationInput | boardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing boards.
     */
    cursor?: boardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boards.
     */
    skip?: number
    distinct?: BoardsScalarFieldEnum | BoardsScalarFieldEnum[]
  }

  /**
   * boards create
   */
  export type boardsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    /**
     * The data needed to create a boards.
     */
    data: XOR<boardsCreateInput, boardsUncheckedCreateInput>
  }

  /**
   * boards createMany
   */
  export type boardsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many boards.
     */
    data: boardsCreateManyInput | boardsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * boards createManyAndReturn
   */
  export type boardsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * The data used to create many boards.
     */
    data: boardsCreateManyInput | boardsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * boards update
   */
  export type boardsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    /**
     * The data needed to update a boards.
     */
    data: XOR<boardsUpdateInput, boardsUncheckedUpdateInput>
    /**
     * Choose, which boards to update.
     */
    where: boardsWhereUniqueInput
  }

  /**
   * boards updateMany
   */
  export type boardsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update boards.
     */
    data: XOR<boardsUpdateManyMutationInput, boardsUncheckedUpdateManyInput>
    /**
     * Filter which boards to update
     */
    where?: boardsWhereInput
    /**
     * Limit how many boards to update.
     */
    limit?: number
  }

  /**
   * boards updateManyAndReturn
   */
  export type boardsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * The data used to update boards.
     */
    data: XOR<boardsUpdateManyMutationInput, boardsUncheckedUpdateManyInput>
    /**
     * Filter which boards to update
     */
    where?: boardsWhereInput
    /**
     * Limit how many boards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * boards upsert
   */
  export type boardsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    /**
     * The filter to search for the boards to update in case it exists.
     */
    where: boardsWhereUniqueInput
    /**
     * In case the boards found by the `where` argument doesn't exist, create a new boards with this data.
     */
    create: XOR<boardsCreateInput, boardsUncheckedCreateInput>
    /**
     * In case the boards was found with the provided `where` argument, update it with this data.
     */
    update: XOR<boardsUpdateInput, boardsUncheckedUpdateInput>
  }

  /**
   * boards delete
   */
  export type boardsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
    /**
     * Filter which boards to delete.
     */
    where: boardsWhereUniqueInput
  }

  /**
   * boards deleteMany
   */
  export type boardsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which boards to delete
     */
    where?: boardsWhereInput
    /**
     * Limit how many boards to delete.
     */
    limit?: number
  }

  /**
   * boards.stages
   */
  export type boards$stagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stages
     */
    select?: stagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stages
     */
    omit?: stagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stagesInclude<ExtArgs> | null
    where?: stagesWhereInput
    orderBy?: stagesOrderByWithRelationInput | stagesOrderByWithRelationInput[]
    cursor?: stagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StagesScalarFieldEnum | StagesScalarFieldEnum[]
  }

  /**
   * boards.tasks
   */
  export type boards$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * boards.invites
   */
  export type boards$invitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invites
     */
    select?: invitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invites
     */
    omit?: invitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitesInclude<ExtArgs> | null
    where?: invitesWhereInput
    orderBy?: invitesOrderByWithRelationInput | invitesOrderByWithRelationInput[]
    cursor?: invitesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitesScalarFieldEnum | InvitesScalarFieldEnum[]
  }

  /**
   * boards without action
   */
  export type boardsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boards
     */
    select?: boardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boards
     */
    omit?: boardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardsInclude<ExtArgs> | null
  }


  /**
   * Model stages
   */

  export type AggregateStages = {
    _count: StagesCountAggregateOutputType | null
    _avg: StagesAvgAggregateOutputType | null
    _sum: StagesSumAggregateOutputType | null
    _min: StagesMinAggregateOutputType | null
    _max: StagesMaxAggregateOutputType | null
  }

  export type StagesAvgAggregateOutputType = {
    id: number | null
    board_id: number | null
  }

  export type StagesSumAggregateOutputType = {
    id: number | null
    board_id: number | null
  }

  export type StagesMinAggregateOutputType = {
    id: number | null
    board_id: number | null
    name: string | null
  }

  export type StagesMaxAggregateOutputType = {
    id: number | null
    board_id: number | null
    name: string | null
  }

  export type StagesCountAggregateOutputType = {
    id: number
    board_id: number
    name: number
    _all: number
  }


  export type StagesAvgAggregateInputType = {
    id?: true
    board_id?: true
  }

  export type StagesSumAggregateInputType = {
    id?: true
    board_id?: true
  }

  export type StagesMinAggregateInputType = {
    id?: true
    board_id?: true
    name?: true
  }

  export type StagesMaxAggregateInputType = {
    id?: true
    board_id?: true
    name?: true
  }

  export type StagesCountAggregateInputType = {
    id?: true
    board_id?: true
    name?: true
    _all?: true
  }

  export type StagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stages to aggregate.
     */
    where?: stagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stages to fetch.
     */
    orderBy?: stagesOrderByWithRelationInput | stagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stages
    **/
    _count?: true | StagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StagesMaxAggregateInputType
  }

  export type GetStagesAggregateType<T extends StagesAggregateArgs> = {
        [P in keyof T & keyof AggregateStages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStages[P]>
      : GetScalarType<T[P], AggregateStages[P]>
  }




  export type stagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stagesWhereInput
    orderBy?: stagesOrderByWithAggregationInput | stagesOrderByWithAggregationInput[]
    by: StagesScalarFieldEnum[] | StagesScalarFieldEnum
    having?: stagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StagesCountAggregateInputType | true
    _avg?: StagesAvgAggregateInputType
    _sum?: StagesSumAggregateInputType
    _min?: StagesMinAggregateInputType
    _max?: StagesMaxAggregateInputType
  }

  export type StagesGroupByOutputType = {
    id: number
    board_id: number
    name: string
    _count: StagesCountAggregateOutputType | null
    _avg: StagesAvgAggregateOutputType | null
    _sum: StagesSumAggregateOutputType | null
    _min: StagesMinAggregateOutputType | null
    _max: StagesMaxAggregateOutputType | null
  }

  type GetStagesGroupByPayload<T extends stagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StagesGroupByOutputType[P]>
            : GetScalarType<T[P], StagesGroupByOutputType[P]>
        }
      >
    >


  export type stagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    board_id?: boolean
    name?: boolean
    tasks?: boolean | stages$tasksArgs<ExtArgs>
    boards?: boolean | boardsDefaultArgs<ExtArgs>
    _count?: boolean | StagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stages"]>

  export type stagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    board_id?: boolean
    name?: boolean
    boards?: boolean | boardsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stages"]>

  export type stagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    board_id?: boolean
    name?: boolean
    boards?: boolean | boardsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stages"]>

  export type stagesSelectScalar = {
    id?: boolean
    board_id?: boolean
    name?: boolean
  }

  export type stagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "board_id" | "name", ExtArgs["result"]["stages"]>
  export type stagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | stages$tasksArgs<ExtArgs>
    boards?: boolean | boardsDefaultArgs<ExtArgs>
    _count?: boolean | StagesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type stagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boards?: boolean | boardsDefaultArgs<ExtArgs>
  }
  export type stagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boards?: boolean | boardsDefaultArgs<ExtArgs>
  }

  export type $stagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stages"
    objects: {
      tasks: Prisma.$tasksPayload<ExtArgs>[]
      boards: Prisma.$boardsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      board_id: number
      name: string
    }, ExtArgs["result"]["stages"]>
    composites: {}
  }

  type stagesGetPayload<S extends boolean | null | undefined | stagesDefaultArgs> = $Result.GetResult<Prisma.$stagesPayload, S>

  type stagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StagesCountAggregateInputType | true
    }

  export interface stagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stages'], meta: { name: 'stages' } }
    /**
     * Find zero or one Stages that matches the filter.
     * @param {stagesFindUniqueArgs} args - Arguments to find a Stages
     * @example
     * // Get one Stages
     * const stages = await prisma.stages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stagesFindUniqueArgs>(args: SelectSubset<T, stagesFindUniqueArgs<ExtArgs>>): Prisma__stagesClient<$Result.GetResult<Prisma.$stagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stagesFindUniqueOrThrowArgs} args - Arguments to find a Stages
     * @example
     * // Get one Stages
     * const stages = await prisma.stages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stagesFindUniqueOrThrowArgs>(args: SelectSubset<T, stagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stagesClient<$Result.GetResult<Prisma.$stagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stagesFindFirstArgs} args - Arguments to find a Stages
     * @example
     * // Get one Stages
     * const stages = await prisma.stages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stagesFindFirstArgs>(args?: SelectSubset<T, stagesFindFirstArgs<ExtArgs>>): Prisma__stagesClient<$Result.GetResult<Prisma.$stagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stagesFindFirstOrThrowArgs} args - Arguments to find a Stages
     * @example
     * // Get one Stages
     * const stages = await prisma.stages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stagesFindFirstOrThrowArgs>(args?: SelectSubset<T, stagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__stagesClient<$Result.GetResult<Prisma.$stagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stages
     * const stages = await prisma.stages.findMany()
     * 
     * // Get first 10 Stages
     * const stages = await prisma.stages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stagesWithIdOnly = await prisma.stages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stagesFindManyArgs>(args?: SelectSubset<T, stagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stages.
     * @param {stagesCreateArgs} args - Arguments to create a Stages.
     * @example
     * // Create one Stages
     * const Stages = await prisma.stages.create({
     *   data: {
     *     // ... data to create a Stages
     *   }
     * })
     * 
     */
    create<T extends stagesCreateArgs>(args: SelectSubset<T, stagesCreateArgs<ExtArgs>>): Prisma__stagesClient<$Result.GetResult<Prisma.$stagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stages.
     * @param {stagesCreateManyArgs} args - Arguments to create many Stages.
     * @example
     * // Create many Stages
     * const stages = await prisma.stages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stagesCreateManyArgs>(args?: SelectSubset<T, stagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stages and returns the data saved in the database.
     * @param {stagesCreateManyAndReturnArgs} args - Arguments to create many Stages.
     * @example
     * // Create many Stages
     * const stages = await prisma.stages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stages and only return the `id`
     * const stagesWithIdOnly = await prisma.stages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stagesCreateManyAndReturnArgs>(args?: SelectSubset<T, stagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stages.
     * @param {stagesDeleteArgs} args - Arguments to delete one Stages.
     * @example
     * // Delete one Stages
     * const Stages = await prisma.stages.delete({
     *   where: {
     *     // ... filter to delete one Stages
     *   }
     * })
     * 
     */
    delete<T extends stagesDeleteArgs>(args: SelectSubset<T, stagesDeleteArgs<ExtArgs>>): Prisma__stagesClient<$Result.GetResult<Prisma.$stagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stages.
     * @param {stagesUpdateArgs} args - Arguments to update one Stages.
     * @example
     * // Update one Stages
     * const stages = await prisma.stages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stagesUpdateArgs>(args: SelectSubset<T, stagesUpdateArgs<ExtArgs>>): Prisma__stagesClient<$Result.GetResult<Prisma.$stagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stages.
     * @param {stagesDeleteManyArgs} args - Arguments to filter Stages to delete.
     * @example
     * // Delete a few Stages
     * const { count } = await prisma.stages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stagesDeleteManyArgs>(args?: SelectSubset<T, stagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stages
     * const stages = await prisma.stages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stagesUpdateManyArgs>(args: SelectSubset<T, stagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stages and returns the data updated in the database.
     * @param {stagesUpdateManyAndReturnArgs} args - Arguments to update many Stages.
     * @example
     * // Update many Stages
     * const stages = await prisma.stages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stages and only return the `id`
     * const stagesWithIdOnly = await prisma.stages.updateManyAndReturn({
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
    updateManyAndReturn<T extends stagesUpdateManyAndReturnArgs>(args: SelectSubset<T, stagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stages.
     * @param {stagesUpsertArgs} args - Arguments to update or create a Stages.
     * @example
     * // Update or create a Stages
     * const stages = await prisma.stages.upsert({
     *   create: {
     *     // ... data to create a Stages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stages we want to update
     *   }
     * })
     */
    upsert<T extends stagesUpsertArgs>(args: SelectSubset<T, stagesUpsertArgs<ExtArgs>>): Prisma__stagesClient<$Result.GetResult<Prisma.$stagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stagesCountArgs} args - Arguments to filter Stages to count.
     * @example
     * // Count the number of Stages
     * const count = await prisma.stages.count({
     *   where: {
     *     // ... the filter for the Stages we want to count
     *   }
     * })
    **/
    count<T extends stagesCountArgs>(
      args?: Subset<T, stagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StagesAggregateArgs>(args: Subset<T, StagesAggregateArgs>): Prisma.PrismaPromise<GetStagesAggregateType<T>>

    /**
     * Group by Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stagesGroupByArgs} args - Group by arguments.
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
      T extends stagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stagesGroupByArgs['orderBy'] }
        : { orderBy?: stagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, stagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stages model
   */
  readonly fields: stagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends stages$tasksArgs<ExtArgs> = {}>(args?: Subset<T, stages$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    boards<T extends boardsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, boardsDefaultArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the stages model
   */
  interface stagesFieldRefs {
    readonly id: FieldRef<"stages", 'Int'>
    readonly board_id: FieldRef<"stages", 'Int'>
    readonly name: FieldRef<"stages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * stages findUnique
   */
  export type stagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stages
     */
    select?: stagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stages
     */
    omit?: stagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stagesInclude<ExtArgs> | null
    /**
     * Filter, which stages to fetch.
     */
    where: stagesWhereUniqueInput
  }

  /**
   * stages findUniqueOrThrow
   */
  export type stagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stages
     */
    select?: stagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stages
     */
    omit?: stagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stagesInclude<ExtArgs> | null
    /**
     * Filter, which stages to fetch.
     */
    where: stagesWhereUniqueInput
  }

  /**
   * stages findFirst
   */
  export type stagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stages
     */
    select?: stagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stages
     */
    omit?: stagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stagesInclude<ExtArgs> | null
    /**
     * Filter, which stages to fetch.
     */
    where?: stagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stages to fetch.
     */
    orderBy?: stagesOrderByWithRelationInput | stagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stages.
     */
    cursor?: stagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stages.
     */
    distinct?: StagesScalarFieldEnum | StagesScalarFieldEnum[]
  }

  /**
   * stages findFirstOrThrow
   */
  export type stagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stages
     */
    select?: stagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stages
     */
    omit?: stagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stagesInclude<ExtArgs> | null
    /**
     * Filter, which stages to fetch.
     */
    where?: stagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stages to fetch.
     */
    orderBy?: stagesOrderByWithRelationInput | stagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stages.
     */
    cursor?: stagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stages.
     */
    distinct?: StagesScalarFieldEnum | StagesScalarFieldEnum[]
  }

  /**
   * stages findMany
   */
  export type stagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stages
     */
    select?: stagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stages
     */
    omit?: stagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stagesInclude<ExtArgs> | null
    /**
     * Filter, which stages to fetch.
     */
    where?: stagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stages to fetch.
     */
    orderBy?: stagesOrderByWithRelationInput | stagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stages.
     */
    cursor?: stagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stages.
     */
    skip?: number
    distinct?: StagesScalarFieldEnum | StagesScalarFieldEnum[]
  }

  /**
   * stages create
   */
  export type stagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stages
     */
    select?: stagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stages
     */
    omit?: stagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stagesInclude<ExtArgs> | null
    /**
     * The data needed to create a stages.
     */
    data: XOR<stagesCreateInput, stagesUncheckedCreateInput>
  }

  /**
   * stages createMany
   */
  export type stagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stages.
     */
    data: stagesCreateManyInput | stagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stages createManyAndReturn
   */
  export type stagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stages
     */
    select?: stagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stages
     */
    omit?: stagesOmit<ExtArgs> | null
    /**
     * The data used to create many stages.
     */
    data: stagesCreateManyInput | stagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * stages update
   */
  export type stagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stages
     */
    select?: stagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stages
     */
    omit?: stagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stagesInclude<ExtArgs> | null
    /**
     * The data needed to update a stages.
     */
    data: XOR<stagesUpdateInput, stagesUncheckedUpdateInput>
    /**
     * Choose, which stages to update.
     */
    where: stagesWhereUniqueInput
  }

  /**
   * stages updateMany
   */
  export type stagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stages.
     */
    data: XOR<stagesUpdateManyMutationInput, stagesUncheckedUpdateManyInput>
    /**
     * Filter which stages to update
     */
    where?: stagesWhereInput
    /**
     * Limit how many stages to update.
     */
    limit?: number
  }

  /**
   * stages updateManyAndReturn
   */
  export type stagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stages
     */
    select?: stagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stages
     */
    omit?: stagesOmit<ExtArgs> | null
    /**
     * The data used to update stages.
     */
    data: XOR<stagesUpdateManyMutationInput, stagesUncheckedUpdateManyInput>
    /**
     * Filter which stages to update
     */
    where?: stagesWhereInput
    /**
     * Limit how many stages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * stages upsert
   */
  export type stagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stages
     */
    select?: stagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stages
     */
    omit?: stagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stagesInclude<ExtArgs> | null
    /**
     * The filter to search for the stages to update in case it exists.
     */
    where: stagesWhereUniqueInput
    /**
     * In case the stages found by the `where` argument doesn't exist, create a new stages with this data.
     */
    create: XOR<stagesCreateInput, stagesUncheckedCreateInput>
    /**
     * In case the stages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stagesUpdateInput, stagesUncheckedUpdateInput>
  }

  /**
   * stages delete
   */
  export type stagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stages
     */
    select?: stagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stages
     */
    omit?: stagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stagesInclude<ExtArgs> | null
    /**
     * Filter which stages to delete.
     */
    where: stagesWhereUniqueInput
  }

  /**
   * stages deleteMany
   */
  export type stagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stages to delete
     */
    where?: stagesWhereInput
    /**
     * Limit how many stages to delete.
     */
    limit?: number
  }

  /**
   * stages.tasks
   */
  export type stages$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * stages without action
   */
  export type stagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stages
     */
    select?: stagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stages
     */
    omit?: stagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stagesInclude<ExtArgs> | null
  }


  /**
   * Model invites
   */

  export type AggregateInvites = {
    _count: InvitesCountAggregateOutputType | null
    _avg: InvitesAvgAggregateOutputType | null
    _sum: InvitesSumAggregateOutputType | null
    _min: InvitesMinAggregateOutputType | null
    _max: InvitesMaxAggregateOutputType | null
  }

  export type InvitesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    board_id: number | null
  }

  export type InvitesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    board_id: number | null
  }

  export type InvitesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    board_id: number | null
    message: string | null
    create_at: Date | null
  }

  export type InvitesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    board_id: number | null
    message: string | null
    create_at: Date | null
  }

  export type InvitesCountAggregateOutputType = {
    id: number
    user_id: number
    board_id: number
    message: number
    create_at: number
    _all: number
  }


  export type InvitesAvgAggregateInputType = {
    id?: true
    user_id?: true
    board_id?: true
  }

  export type InvitesSumAggregateInputType = {
    id?: true
    user_id?: true
    board_id?: true
  }

  export type InvitesMinAggregateInputType = {
    id?: true
    user_id?: true
    board_id?: true
    message?: true
    create_at?: true
  }

  export type InvitesMaxAggregateInputType = {
    id?: true
    user_id?: true
    board_id?: true
    message?: true
    create_at?: true
  }

  export type InvitesCountAggregateInputType = {
    id?: true
    user_id?: true
    board_id?: true
    message?: true
    create_at?: true
    _all?: true
  }

  export type InvitesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invites to aggregate.
     */
    where?: invitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invites to fetch.
     */
    orderBy?: invitesOrderByWithRelationInput | invitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invites
    **/
    _count?: true | InvitesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvitesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvitesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitesMaxAggregateInputType
  }

  export type GetInvitesAggregateType<T extends InvitesAggregateArgs> = {
        [P in keyof T & keyof AggregateInvites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvites[P]>
      : GetScalarType<T[P], AggregateInvites[P]>
  }




  export type invitesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invitesWhereInput
    orderBy?: invitesOrderByWithAggregationInput | invitesOrderByWithAggregationInput[]
    by: InvitesScalarFieldEnum[] | InvitesScalarFieldEnum
    having?: invitesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitesCountAggregateInputType | true
    _avg?: InvitesAvgAggregateInputType
    _sum?: InvitesSumAggregateInputType
    _min?: InvitesMinAggregateInputType
    _max?: InvitesMaxAggregateInputType
  }

  export type InvitesGroupByOutputType = {
    id: number
    user_id: number
    board_id: number
    message: string
    create_at: Date
    _count: InvitesCountAggregateOutputType | null
    _avg: InvitesAvgAggregateOutputType | null
    _sum: InvitesSumAggregateOutputType | null
    _min: InvitesMinAggregateOutputType | null
    _max: InvitesMaxAggregateOutputType | null
  }

  type GetInvitesGroupByPayload<T extends invitesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitesGroupByOutputType[P]>
            : GetScalarType<T[P], InvitesGroupByOutputType[P]>
        }
      >
    >


  export type invitesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    board_id?: boolean
    message?: boolean
    create_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    boards?: boolean | boardsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invites"]>

  export type invitesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    board_id?: boolean
    message?: boolean
    create_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    boards?: boolean | boardsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invites"]>

  export type invitesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    board_id?: boolean
    message?: boolean
    create_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    boards?: boolean | boardsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invites"]>

  export type invitesSelectScalar = {
    id?: boolean
    user_id?: boolean
    board_id?: boolean
    message?: boolean
    create_at?: boolean
  }

  export type invitesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "board_id" | "message" | "create_at", ExtArgs["result"]["invites"]>
  export type invitesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    boards?: boolean | boardsDefaultArgs<ExtArgs>
  }
  export type invitesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    boards?: boolean | boardsDefaultArgs<ExtArgs>
  }
  export type invitesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    boards?: boolean | boardsDefaultArgs<ExtArgs>
  }

  export type $invitesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invites"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      boards: Prisma.$boardsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      board_id: number
      message: string
      create_at: Date
    }, ExtArgs["result"]["invites"]>
    composites: {}
  }

  type invitesGetPayload<S extends boolean | null | undefined | invitesDefaultArgs> = $Result.GetResult<Prisma.$invitesPayload, S>

  type invitesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invitesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitesCountAggregateInputType | true
    }

  export interface invitesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invites'], meta: { name: 'invites' } }
    /**
     * Find zero or one Invites that matches the filter.
     * @param {invitesFindUniqueArgs} args - Arguments to find a Invites
     * @example
     * // Get one Invites
     * const invites = await prisma.invites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invitesFindUniqueArgs>(args: SelectSubset<T, invitesFindUniqueArgs<ExtArgs>>): Prisma__invitesClient<$Result.GetResult<Prisma.$invitesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invites that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invitesFindUniqueOrThrowArgs} args - Arguments to find a Invites
     * @example
     * // Get one Invites
     * const invites = await prisma.invites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invitesFindUniqueOrThrowArgs>(args: SelectSubset<T, invitesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invitesClient<$Result.GetResult<Prisma.$invitesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitesFindFirstArgs} args - Arguments to find a Invites
     * @example
     * // Get one Invites
     * const invites = await prisma.invites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invitesFindFirstArgs>(args?: SelectSubset<T, invitesFindFirstArgs<ExtArgs>>): Prisma__invitesClient<$Result.GetResult<Prisma.$invitesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invites that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitesFindFirstOrThrowArgs} args - Arguments to find a Invites
     * @example
     * // Get one Invites
     * const invites = await prisma.invites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invitesFindFirstOrThrowArgs>(args?: SelectSubset<T, invitesFindFirstOrThrowArgs<ExtArgs>>): Prisma__invitesClient<$Result.GetResult<Prisma.$invitesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invites
     * const invites = await prisma.invites.findMany()
     * 
     * // Get first 10 Invites
     * const invites = await prisma.invites.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitesWithIdOnly = await prisma.invites.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invitesFindManyArgs>(args?: SelectSubset<T, invitesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invites.
     * @param {invitesCreateArgs} args - Arguments to create a Invites.
     * @example
     * // Create one Invites
     * const Invites = await prisma.invites.create({
     *   data: {
     *     // ... data to create a Invites
     *   }
     * })
     * 
     */
    create<T extends invitesCreateArgs>(args: SelectSubset<T, invitesCreateArgs<ExtArgs>>): Prisma__invitesClient<$Result.GetResult<Prisma.$invitesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invites.
     * @param {invitesCreateManyArgs} args - Arguments to create many Invites.
     * @example
     * // Create many Invites
     * const invites = await prisma.invites.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invitesCreateManyArgs>(args?: SelectSubset<T, invitesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invites and returns the data saved in the database.
     * @param {invitesCreateManyAndReturnArgs} args - Arguments to create many Invites.
     * @example
     * // Create many Invites
     * const invites = await prisma.invites.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invites and only return the `id`
     * const invitesWithIdOnly = await prisma.invites.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invitesCreateManyAndReturnArgs>(args?: SelectSubset<T, invitesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invites.
     * @param {invitesDeleteArgs} args - Arguments to delete one Invites.
     * @example
     * // Delete one Invites
     * const Invites = await prisma.invites.delete({
     *   where: {
     *     // ... filter to delete one Invites
     *   }
     * })
     * 
     */
    delete<T extends invitesDeleteArgs>(args: SelectSubset<T, invitesDeleteArgs<ExtArgs>>): Prisma__invitesClient<$Result.GetResult<Prisma.$invitesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invites.
     * @param {invitesUpdateArgs} args - Arguments to update one Invites.
     * @example
     * // Update one Invites
     * const invites = await prisma.invites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invitesUpdateArgs>(args: SelectSubset<T, invitesUpdateArgs<ExtArgs>>): Prisma__invitesClient<$Result.GetResult<Prisma.$invitesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invites.
     * @param {invitesDeleteManyArgs} args - Arguments to filter Invites to delete.
     * @example
     * // Delete a few Invites
     * const { count } = await prisma.invites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invitesDeleteManyArgs>(args?: SelectSubset<T, invitesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invites
     * const invites = await prisma.invites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invitesUpdateManyArgs>(args: SelectSubset<T, invitesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invites and returns the data updated in the database.
     * @param {invitesUpdateManyAndReturnArgs} args - Arguments to update many Invites.
     * @example
     * // Update many Invites
     * const invites = await prisma.invites.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invites and only return the `id`
     * const invitesWithIdOnly = await prisma.invites.updateManyAndReturn({
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
    updateManyAndReturn<T extends invitesUpdateManyAndReturnArgs>(args: SelectSubset<T, invitesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invites.
     * @param {invitesUpsertArgs} args - Arguments to update or create a Invites.
     * @example
     * // Update or create a Invites
     * const invites = await prisma.invites.upsert({
     *   create: {
     *     // ... data to create a Invites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invites we want to update
     *   }
     * })
     */
    upsert<T extends invitesUpsertArgs>(args: SelectSubset<T, invitesUpsertArgs<ExtArgs>>): Prisma__invitesClient<$Result.GetResult<Prisma.$invitesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitesCountArgs} args - Arguments to filter Invites to count.
     * @example
     * // Count the number of Invites
     * const count = await prisma.invites.count({
     *   where: {
     *     // ... the filter for the Invites we want to count
     *   }
     * })
    **/
    count<T extends invitesCountArgs>(
      args?: Subset<T, invitesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvitesAggregateArgs>(args: Subset<T, InvitesAggregateArgs>): Prisma.PrismaPromise<GetInvitesAggregateType<T>>

    /**
     * Group by Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitesGroupByArgs} args - Group by arguments.
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
      T extends invitesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invitesGroupByArgs['orderBy'] }
        : { orderBy?: invitesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, invitesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invites model
   */
  readonly fields: invitesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invitesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    boards<T extends boardsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, boardsDefaultArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the invites model
   */
  interface invitesFieldRefs {
    readonly id: FieldRef<"invites", 'Int'>
    readonly user_id: FieldRef<"invites", 'Int'>
    readonly board_id: FieldRef<"invites", 'Int'>
    readonly message: FieldRef<"invites", 'String'>
    readonly create_at: FieldRef<"invites", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * invites findUnique
   */
  export type invitesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invites
     */
    select?: invitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invites
     */
    omit?: invitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitesInclude<ExtArgs> | null
    /**
     * Filter, which invites to fetch.
     */
    where: invitesWhereUniqueInput
  }

  /**
   * invites findUniqueOrThrow
   */
  export type invitesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invites
     */
    select?: invitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invites
     */
    omit?: invitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitesInclude<ExtArgs> | null
    /**
     * Filter, which invites to fetch.
     */
    where: invitesWhereUniqueInput
  }

  /**
   * invites findFirst
   */
  export type invitesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invites
     */
    select?: invitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invites
     */
    omit?: invitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitesInclude<ExtArgs> | null
    /**
     * Filter, which invites to fetch.
     */
    where?: invitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invites to fetch.
     */
    orderBy?: invitesOrderByWithRelationInput | invitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invites.
     */
    cursor?: invitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invites.
     */
    distinct?: InvitesScalarFieldEnum | InvitesScalarFieldEnum[]
  }

  /**
   * invites findFirstOrThrow
   */
  export type invitesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invites
     */
    select?: invitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invites
     */
    omit?: invitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitesInclude<ExtArgs> | null
    /**
     * Filter, which invites to fetch.
     */
    where?: invitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invites to fetch.
     */
    orderBy?: invitesOrderByWithRelationInput | invitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invites.
     */
    cursor?: invitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invites.
     */
    distinct?: InvitesScalarFieldEnum | InvitesScalarFieldEnum[]
  }

  /**
   * invites findMany
   */
  export type invitesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invites
     */
    select?: invitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invites
     */
    omit?: invitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitesInclude<ExtArgs> | null
    /**
     * Filter, which invites to fetch.
     */
    where?: invitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invites to fetch.
     */
    orderBy?: invitesOrderByWithRelationInput | invitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invites.
     */
    cursor?: invitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invites.
     */
    skip?: number
    distinct?: InvitesScalarFieldEnum | InvitesScalarFieldEnum[]
  }

  /**
   * invites create
   */
  export type invitesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invites
     */
    select?: invitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invites
     */
    omit?: invitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitesInclude<ExtArgs> | null
    /**
     * The data needed to create a invites.
     */
    data: XOR<invitesCreateInput, invitesUncheckedCreateInput>
  }

  /**
   * invites createMany
   */
  export type invitesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invites.
     */
    data: invitesCreateManyInput | invitesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invites createManyAndReturn
   */
  export type invitesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invites
     */
    select?: invitesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invites
     */
    omit?: invitesOmit<ExtArgs> | null
    /**
     * The data used to create many invites.
     */
    data: invitesCreateManyInput | invitesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * invites update
   */
  export type invitesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invites
     */
    select?: invitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invites
     */
    omit?: invitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitesInclude<ExtArgs> | null
    /**
     * The data needed to update a invites.
     */
    data: XOR<invitesUpdateInput, invitesUncheckedUpdateInput>
    /**
     * Choose, which invites to update.
     */
    where: invitesWhereUniqueInput
  }

  /**
   * invites updateMany
   */
  export type invitesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invites.
     */
    data: XOR<invitesUpdateManyMutationInput, invitesUncheckedUpdateManyInput>
    /**
     * Filter which invites to update
     */
    where?: invitesWhereInput
    /**
     * Limit how many invites to update.
     */
    limit?: number
  }

  /**
   * invites updateManyAndReturn
   */
  export type invitesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invites
     */
    select?: invitesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invites
     */
    omit?: invitesOmit<ExtArgs> | null
    /**
     * The data used to update invites.
     */
    data: XOR<invitesUpdateManyMutationInput, invitesUncheckedUpdateManyInput>
    /**
     * Filter which invites to update
     */
    where?: invitesWhereInput
    /**
     * Limit how many invites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * invites upsert
   */
  export type invitesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invites
     */
    select?: invitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invites
     */
    omit?: invitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitesInclude<ExtArgs> | null
    /**
     * The filter to search for the invites to update in case it exists.
     */
    where: invitesWhereUniqueInput
    /**
     * In case the invites found by the `where` argument doesn't exist, create a new invites with this data.
     */
    create: XOR<invitesCreateInput, invitesUncheckedCreateInput>
    /**
     * In case the invites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invitesUpdateInput, invitesUncheckedUpdateInput>
  }

  /**
   * invites delete
   */
  export type invitesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invites
     */
    select?: invitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invites
     */
    omit?: invitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitesInclude<ExtArgs> | null
    /**
     * Filter which invites to delete.
     */
    where: invitesWhereUniqueInput
  }

  /**
   * invites deleteMany
   */
  export type invitesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invites to delete
     */
    where?: invitesWhereInput
    /**
     * Limit how many invites to delete.
     */
    limit?: number
  }

  /**
   * invites without action
   */
  export type invitesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invites
     */
    select?: invitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invites
     */
    omit?: invitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitesInclude<ExtArgs> | null
  }


  /**
   * Model tasks
   */

  export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  export type TasksAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    board_id: number | null
    stage_id: number | null
  }

  export type TasksSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    board_id: number | null
    stage_id: number | null
  }

  export type TasksMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    board_id: number | null
    stage_id: number | null
    title: string | null
    description: string | null
    due_date: Date | null
  }

  export type TasksMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    board_id: number | null
    stage_id: number | null
    title: string | null
    description: string | null
    due_date: Date | null
  }

  export type TasksCountAggregateOutputType = {
    id: number
    user_id: number
    board_id: number
    stage_id: number
    title: number
    description: number
    due_date: number
    _all: number
  }


  export type TasksAvgAggregateInputType = {
    id?: true
    user_id?: true
    board_id?: true
    stage_id?: true
  }

  export type TasksSumAggregateInputType = {
    id?: true
    user_id?: true
    board_id?: true
    stage_id?: true
  }

  export type TasksMinAggregateInputType = {
    id?: true
    user_id?: true
    board_id?: true
    stage_id?: true
    title?: true
    description?: true
    due_date?: true
  }

  export type TasksMaxAggregateInputType = {
    id?: true
    user_id?: true
    board_id?: true
    stage_id?: true
    title?: true
    description?: true
    due_date?: true
  }

  export type TasksCountAggregateInputType = {
    id?: true
    user_id?: true
    board_id?: true
    stage_id?: true
    title?: true
    description?: true
    due_date?: true
    _all?: true
  }

  export type TasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to aggregate.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TasksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksMaxAggregateInputType
  }

  export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks[P]>
      : GetScalarType<T[P], AggregateTasks[P]>
  }




  export type tasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithAggregationInput | tasksOrderByWithAggregationInput[]
    by: TasksScalarFieldEnum[] | TasksScalarFieldEnum
    having?: tasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksCountAggregateInputType | true
    _avg?: TasksAvgAggregateInputType
    _sum?: TasksSumAggregateInputType
    _min?: TasksMinAggregateInputType
    _max?: TasksMaxAggregateInputType
  }

  export type TasksGroupByOutputType = {
    id: number
    user_id: number
    board_id: number
    stage_id: number
    title: string
    description: string | null
    due_date: Date
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  type GetTasksGroupByPayload<T extends tasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksGroupByOutputType[P]>
            : GetScalarType<T[P], TasksGroupByOutputType[P]>
        }
      >
    >


  export type tasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    board_id?: boolean
    stage_id?: boolean
    title?: boolean
    description?: boolean
    due_date?: boolean
    messages?: boolean | tasks$messagesArgs<ExtArgs>
    task_priviles?: boolean | tasks$task_privilesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    boards?: boolean | boardsDefaultArgs<ExtArgs>
    stages?: boolean | stagesDefaultArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    board_id?: boolean
    stage_id?: boolean
    title?: boolean
    description?: boolean
    due_date?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    boards?: boolean | boardsDefaultArgs<ExtArgs>
    stages?: boolean | stagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    board_id?: boolean
    stage_id?: boolean
    title?: boolean
    description?: boolean
    due_date?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    boards?: boolean | boardsDefaultArgs<ExtArgs>
    stages?: boolean | stagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectScalar = {
    id?: boolean
    user_id?: boolean
    board_id?: boolean
    stage_id?: boolean
    title?: boolean
    description?: boolean
    due_date?: boolean
  }

  export type tasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "board_id" | "stage_id" | "title" | "description" | "due_date", ExtArgs["result"]["tasks"]>
  export type tasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | tasks$messagesArgs<ExtArgs>
    task_priviles?: boolean | tasks$task_privilesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    boards?: boolean | boardsDefaultArgs<ExtArgs>
    stages?: boolean | stagesDefaultArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tasksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    boards?: boolean | boardsDefaultArgs<ExtArgs>
    stages?: boolean | stagesDefaultArgs<ExtArgs>
  }
  export type tasksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    boards?: boolean | boardsDefaultArgs<ExtArgs>
    stages?: boolean | stagesDefaultArgs<ExtArgs>
  }

  export type $tasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tasks"
    objects: {
      messages: Prisma.$messagesPayload<ExtArgs>[]
      task_priviles: Prisma.$task_previlesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      boards: Prisma.$boardsPayload<ExtArgs>
      stages: Prisma.$stagesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      board_id: number
      stage_id: number
      title: string
      description: string | null
      due_date: Date
    }, ExtArgs["result"]["tasks"]>
    composites: {}
  }

  type tasksGetPayload<S extends boolean | null | undefined | tasksDefaultArgs> = $Result.GetResult<Prisma.$tasksPayload, S>

  type tasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasksCountAggregateInputType | true
    }

  export interface tasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tasks'], meta: { name: 'tasks' } }
    /**
     * Find zero or one Tasks that matches the filter.
     * @param {tasksFindUniqueArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tasksFindUniqueArgs>(args: SelectSubset<T, tasksFindUniqueArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tasksFindUniqueOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tasksFindUniqueOrThrowArgs>(args: SelectSubset<T, tasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tasksFindFirstArgs>(args?: SelectSubset<T, tasksFindFirstArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tasksFindFirstOrThrowArgs>(args?: SelectSubset<T, tasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.tasks.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.tasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tasksWithIdOnly = await prisma.tasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tasksFindManyArgs>(args?: SelectSubset<T, tasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tasks.
     * @param {tasksCreateArgs} args - Arguments to create a Tasks.
     * @example
     * // Create one Tasks
     * const Tasks = await prisma.tasks.create({
     *   data: {
     *     // ... data to create a Tasks
     *   }
     * })
     * 
     */
    create<T extends tasksCreateArgs>(args: SelectSubset<T, tasksCreateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {tasksCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tasksCreateManyArgs>(args?: SelectSubset<T, tasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {tasksCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tasksCreateManyAndReturnArgs>(args?: SelectSubset<T, tasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tasks.
     * @param {tasksDeleteArgs} args - Arguments to delete one Tasks.
     * @example
     * // Delete one Tasks
     * const Tasks = await prisma.tasks.delete({
     *   where: {
     *     // ... filter to delete one Tasks
     *   }
     * })
     * 
     */
    delete<T extends tasksDeleteArgs>(args: SelectSubset<T, tasksDeleteArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tasks.
     * @param {tasksUpdateArgs} args - Arguments to update one Tasks.
     * @example
     * // Update one Tasks
     * const tasks = await prisma.tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tasksUpdateArgs>(args: SelectSubset<T, tasksUpdateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {tasksDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tasksDeleteManyArgs>(args?: SelectSubset<T, tasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tasksUpdateManyArgs>(args: SelectSubset<T, tasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {tasksUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.updateManyAndReturn({
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
    updateManyAndReturn<T extends tasksUpdateManyAndReturnArgs>(args: SelectSubset<T, tasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tasks.
     * @param {tasksUpsertArgs} args - Arguments to update or create a Tasks.
     * @example
     * // Update or create a Tasks
     * const tasks = await prisma.tasks.upsert({
     *   create: {
     *     // ... data to create a Tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks we want to update
     *   }
     * })
     */
    upsert<T extends tasksUpsertArgs>(args: SelectSubset<T, tasksUpsertArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.tasks.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends tasksCountArgs>(
      args?: Subset<T, tasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TasksAggregateArgs>(args: Subset<T, TasksAggregateArgs>): Prisma.PrismaPromise<GetTasksAggregateType<T>>

    /**
     * Group by Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksGroupByArgs} args - Group by arguments.
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
      T extends tasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tasksGroupByArgs['orderBy'] }
        : { orderBy?: tasksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tasks model
   */
  readonly fields: tasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends tasks$messagesArgs<ExtArgs> = {}>(args?: Subset<T, tasks$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    task_priviles<T extends tasks$task_privilesArgs<ExtArgs> = {}>(args?: Subset<T, tasks$task_privilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_previlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    boards<T extends boardsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, boardsDefaultArgs<ExtArgs>>): Prisma__boardsClient<$Result.GetResult<Prisma.$boardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stages<T extends stagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stagesDefaultArgs<ExtArgs>>): Prisma__stagesClient<$Result.GetResult<Prisma.$stagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tasks model
   */
  interface tasksFieldRefs {
    readonly id: FieldRef<"tasks", 'Int'>
    readonly user_id: FieldRef<"tasks", 'Int'>
    readonly board_id: FieldRef<"tasks", 'Int'>
    readonly stage_id: FieldRef<"tasks", 'Int'>
    readonly title: FieldRef<"tasks", 'String'>
    readonly description: FieldRef<"tasks", 'String'>
    readonly due_date: FieldRef<"tasks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tasks findUnique
   */
  export type tasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findUniqueOrThrow
   */
  export type tasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findFirst
   */
  export type tasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findFirstOrThrow
   */
  export type tasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findMany
   */
  export type tasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks create
   */
  export type tasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to create a tasks.
     */
    data: XOR<tasksCreateInput, tasksUncheckedCreateInput>
  }

  /**
   * tasks createMany
   */
  export type tasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: tasksCreateManyInput | tasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tasks createManyAndReturn
   */
  export type tasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * The data used to create many tasks.
     */
    data: tasksCreateManyInput | tasksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tasks update
   */
  export type tasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to update a tasks.
     */
    data: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
    /**
     * Choose, which tasks to update.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks updateMany
   */
  export type tasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * tasks updateManyAndReturn
   */
  export type tasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * The data used to update tasks.
     */
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tasks upsert
   */
  export type tasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The filter to search for the tasks to update in case it exists.
     */
    where: tasksWhereUniqueInput
    /**
     * In case the tasks found by the `where` argument doesn't exist, create a new tasks with this data.
     */
    create: XOR<tasksCreateInput, tasksUncheckedCreateInput>
    /**
     * In case the tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
  }

  /**
   * tasks delete
   */
  export type tasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter which tasks to delete.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks deleteMany
   */
  export type tasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * tasks.messages
   */
  export type tasks$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * tasks.task_priviles
   */
  export type tasks$task_privilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_previles
     */
    select?: task_previlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_previles
     */
    omit?: task_previlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_previlesInclude<ExtArgs> | null
    where?: task_previlesWhereInput
    orderBy?: task_previlesOrderByWithRelationInput | task_previlesOrderByWithRelationInput[]
    cursor?: task_previlesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Task_previlesScalarFieldEnum | Task_previlesScalarFieldEnum[]
  }

  /**
   * tasks without action
   */
  export type tasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    task_id: number | null
    like_count: number | null
  }

  export type MessagesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    task_id: number | null
    like_count: number | null
  }

  export type MessagesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    task_id: number | null
    message: string | null
    like_count: number | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    task_id: number | null
    message: string | null
    like_count: number | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    user_id: number
    task_id: number
    message: number
    like_count: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    id?: true
    user_id?: true
    task_id?: true
    like_count?: true
  }

  export type MessagesSumAggregateInputType = {
    id?: true
    user_id?: true
    task_id?: true
    like_count?: true
  }

  export type MessagesMinAggregateInputType = {
    id?: true
    user_id?: true
    task_id?: true
    message?: true
    like_count?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    user_id?: true
    task_id?: true
    message?: true
    like_count?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    user_id?: true
    task_id?: true
    message?: true
    like_count?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: number
    user_id: number
    task_id: number
    message: string
    like_count: number
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    task_id?: boolean
    message?: boolean
    like_count?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    task_id?: boolean
    message?: boolean
    like_count?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    task_id?: boolean
    message?: boolean
    like_count?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectScalar = {
    id?: boolean
    user_id?: boolean
    task_id?: boolean
    message?: boolean
    like_count?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "task_id" | "message" | "like_count", ExtArgs["result"]["messages"]>
  export type messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }
  export type messagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }
  export type messagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      tasks: Prisma.$tasksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      task_id: number
      message: string
      like_count: number
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {messagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {messagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
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
    updateManyAndReturn<T extends messagesUpdateManyAndReturnArgs>(args: SelectSubset<T, messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
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
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends tasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tasksDefaultArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly id: FieldRef<"messages", 'Int'>
    readonly user_id: FieldRef<"messages", 'Int'>
    readonly task_id: FieldRef<"messages", 'Int'>
    readonly message: FieldRef<"messages", 'String'>
    readonly like_count: FieldRef<"messages", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages createManyAndReturn
   */
  export type messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages updateManyAndReturn
   */
  export type messagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Task_previlesScalarFieldEnum: {
    id: 'id',
    task_id: 'task_id',
    user_id: 'user_id',
    add_time: 'add_time'
  };

  export type Task_previlesScalarFieldEnum = (typeof Task_previlesScalarFieldEnum)[keyof typeof Task_previlesScalarFieldEnum]


  export const BoardsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    description: 'description',
    create_at: 'create_at'
  };

  export type BoardsScalarFieldEnum = (typeof BoardsScalarFieldEnum)[keyof typeof BoardsScalarFieldEnum]


  export const StagesScalarFieldEnum: {
    id: 'id',
    board_id: 'board_id',
    name: 'name'
  };

  export type StagesScalarFieldEnum = (typeof StagesScalarFieldEnum)[keyof typeof StagesScalarFieldEnum]


  export const InvitesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    board_id: 'board_id',
    message: 'message',
    create_at: 'create_at'
  };

  export type InvitesScalarFieldEnum = (typeof InvitesScalarFieldEnum)[keyof typeof InvitesScalarFieldEnum]


  export const TasksScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    board_id: 'board_id',
    stage_id: 'stage_id',
    title: 'title',
    description: 'description',
    due_date: 'due_date'
  };

  export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    task_id: 'task_id',
    message: 'message',
    like_count: 'like_count'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    boards?: BoardsListRelationFilter
    invites?: InvitesListRelationFilter
    tasks?: TasksListRelationFilter
    messages?: MessagesListRelationFilter
    task_priviles?: Task_previlesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    boards?: boardsOrderByRelationAggregateInput
    invites?: invitesOrderByRelationAggregateInput
    tasks?: tasksOrderByRelationAggregateInput
    messages?: messagesOrderByRelationAggregateInput
    task_priviles?: task_previlesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    boards?: BoardsListRelationFilter
    invites?: InvitesListRelationFilter
    tasks?: TasksListRelationFilter
    messages?: MessagesListRelationFilter
    task_priviles?: Task_previlesListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
  }

  export type task_previlesWhereInput = {
    AND?: task_previlesWhereInput | task_previlesWhereInput[]
    OR?: task_previlesWhereInput[]
    NOT?: task_previlesWhereInput | task_previlesWhereInput[]
    id?: IntFilter<"task_previles"> | number
    task_id?: IntFilter<"task_previles"> | number
    user_id?: IntFilter<"task_previles"> | number
    add_time?: DateTimeFilter<"task_previles"> | Date | string
    tasks?: XOR<TasksScalarRelationFilter, tasksWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type task_previlesOrderByWithRelationInput = {
    id?: SortOrder
    task_id?: SortOrder
    user_id?: SortOrder
    add_time?: SortOrder
    tasks?: tasksOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type task_previlesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: task_previlesWhereInput | task_previlesWhereInput[]
    OR?: task_previlesWhereInput[]
    NOT?: task_previlesWhereInput | task_previlesWhereInput[]
    task_id?: IntFilter<"task_previles"> | number
    user_id?: IntFilter<"task_previles"> | number
    add_time?: DateTimeFilter<"task_previles"> | Date | string
    tasks?: XOR<TasksScalarRelationFilter, tasksWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type task_previlesOrderByWithAggregationInput = {
    id?: SortOrder
    task_id?: SortOrder
    user_id?: SortOrder
    add_time?: SortOrder
    _count?: task_previlesCountOrderByAggregateInput
    _avg?: task_previlesAvgOrderByAggregateInput
    _max?: task_previlesMaxOrderByAggregateInput
    _min?: task_previlesMinOrderByAggregateInput
    _sum?: task_previlesSumOrderByAggregateInput
  }

  export type task_previlesScalarWhereWithAggregatesInput = {
    AND?: task_previlesScalarWhereWithAggregatesInput | task_previlesScalarWhereWithAggregatesInput[]
    OR?: task_previlesScalarWhereWithAggregatesInput[]
    NOT?: task_previlesScalarWhereWithAggregatesInput | task_previlesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"task_previles"> | number
    task_id?: IntWithAggregatesFilter<"task_previles"> | number
    user_id?: IntWithAggregatesFilter<"task_previles"> | number
    add_time?: DateTimeWithAggregatesFilter<"task_previles"> | Date | string
  }

  export type boardsWhereInput = {
    AND?: boardsWhereInput | boardsWhereInput[]
    OR?: boardsWhereInput[]
    NOT?: boardsWhereInput | boardsWhereInput[]
    id?: IntFilter<"boards"> | number
    user_id?: IntFilter<"boards"> | number
    title?: StringFilter<"boards"> | string
    description?: StringNullableFilter<"boards"> | string | null
    create_at?: DateTimeFilter<"boards"> | Date | string
    stages?: StagesListRelationFilter
    tasks?: TasksListRelationFilter
    invites?: InvitesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type boardsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    create_at?: SortOrder
    stages?: stagesOrderByRelationAggregateInput
    tasks?: tasksOrderByRelationAggregateInput
    invites?: invitesOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type boardsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: boardsWhereInput | boardsWhereInput[]
    OR?: boardsWhereInput[]
    NOT?: boardsWhereInput | boardsWhereInput[]
    user_id?: IntFilter<"boards"> | number
    title?: StringFilter<"boards"> | string
    description?: StringNullableFilter<"boards"> | string | null
    create_at?: DateTimeFilter<"boards"> | Date | string
    stages?: StagesListRelationFilter
    tasks?: TasksListRelationFilter
    invites?: InvitesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type boardsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    create_at?: SortOrder
    _count?: boardsCountOrderByAggregateInput
    _avg?: boardsAvgOrderByAggregateInput
    _max?: boardsMaxOrderByAggregateInput
    _min?: boardsMinOrderByAggregateInput
    _sum?: boardsSumOrderByAggregateInput
  }

  export type boardsScalarWhereWithAggregatesInput = {
    AND?: boardsScalarWhereWithAggregatesInput | boardsScalarWhereWithAggregatesInput[]
    OR?: boardsScalarWhereWithAggregatesInput[]
    NOT?: boardsScalarWhereWithAggregatesInput | boardsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"boards"> | number
    user_id?: IntWithAggregatesFilter<"boards"> | number
    title?: StringWithAggregatesFilter<"boards"> | string
    description?: StringNullableWithAggregatesFilter<"boards"> | string | null
    create_at?: DateTimeWithAggregatesFilter<"boards"> | Date | string
  }

  export type stagesWhereInput = {
    AND?: stagesWhereInput | stagesWhereInput[]
    OR?: stagesWhereInput[]
    NOT?: stagesWhereInput | stagesWhereInput[]
    id?: IntFilter<"stages"> | number
    board_id?: IntFilter<"stages"> | number
    name?: StringFilter<"stages"> | string
    tasks?: TasksListRelationFilter
    boards?: XOR<BoardsScalarRelationFilter, boardsWhereInput>
  }

  export type stagesOrderByWithRelationInput = {
    id?: SortOrder
    board_id?: SortOrder
    name?: SortOrder
    tasks?: tasksOrderByRelationAggregateInput
    boards?: boardsOrderByWithRelationInput
  }

  export type stagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: stagesWhereInput | stagesWhereInput[]
    OR?: stagesWhereInput[]
    NOT?: stagesWhereInput | stagesWhereInput[]
    board_id?: IntFilter<"stages"> | number
    name?: StringFilter<"stages"> | string
    tasks?: TasksListRelationFilter
    boards?: XOR<BoardsScalarRelationFilter, boardsWhereInput>
  }, "id">

  export type stagesOrderByWithAggregationInput = {
    id?: SortOrder
    board_id?: SortOrder
    name?: SortOrder
    _count?: stagesCountOrderByAggregateInput
    _avg?: stagesAvgOrderByAggregateInput
    _max?: stagesMaxOrderByAggregateInput
    _min?: stagesMinOrderByAggregateInput
    _sum?: stagesSumOrderByAggregateInput
  }

  export type stagesScalarWhereWithAggregatesInput = {
    AND?: stagesScalarWhereWithAggregatesInput | stagesScalarWhereWithAggregatesInput[]
    OR?: stagesScalarWhereWithAggregatesInput[]
    NOT?: stagesScalarWhereWithAggregatesInput | stagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stages"> | number
    board_id?: IntWithAggregatesFilter<"stages"> | number
    name?: StringWithAggregatesFilter<"stages"> | string
  }

  export type invitesWhereInput = {
    AND?: invitesWhereInput | invitesWhereInput[]
    OR?: invitesWhereInput[]
    NOT?: invitesWhereInput | invitesWhereInput[]
    id?: IntFilter<"invites"> | number
    user_id?: IntFilter<"invites"> | number
    board_id?: IntFilter<"invites"> | number
    message?: StringFilter<"invites"> | string
    create_at?: DateTimeFilter<"invites"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    boards?: XOR<BoardsScalarRelationFilter, boardsWhereInput>
  }

  export type invitesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    board_id?: SortOrder
    message?: SortOrder
    create_at?: SortOrder
    users?: usersOrderByWithRelationInput
    boards?: boardsOrderByWithRelationInput
  }

  export type invitesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: invitesWhereInput | invitesWhereInput[]
    OR?: invitesWhereInput[]
    NOT?: invitesWhereInput | invitesWhereInput[]
    user_id?: IntFilter<"invites"> | number
    board_id?: IntFilter<"invites"> | number
    message?: StringFilter<"invites"> | string
    create_at?: DateTimeFilter<"invites"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    boards?: XOR<BoardsScalarRelationFilter, boardsWhereInput>
  }, "id">

  export type invitesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    board_id?: SortOrder
    message?: SortOrder
    create_at?: SortOrder
    _count?: invitesCountOrderByAggregateInput
    _avg?: invitesAvgOrderByAggregateInput
    _max?: invitesMaxOrderByAggregateInput
    _min?: invitesMinOrderByAggregateInput
    _sum?: invitesSumOrderByAggregateInput
  }

  export type invitesScalarWhereWithAggregatesInput = {
    AND?: invitesScalarWhereWithAggregatesInput | invitesScalarWhereWithAggregatesInput[]
    OR?: invitesScalarWhereWithAggregatesInput[]
    NOT?: invitesScalarWhereWithAggregatesInput | invitesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"invites"> | number
    user_id?: IntWithAggregatesFilter<"invites"> | number
    board_id?: IntWithAggregatesFilter<"invites"> | number
    message?: StringWithAggregatesFilter<"invites"> | string
    create_at?: DateTimeWithAggregatesFilter<"invites"> | Date | string
  }

  export type tasksWhereInput = {
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    id?: IntFilter<"tasks"> | number
    user_id?: IntFilter<"tasks"> | number
    board_id?: IntFilter<"tasks"> | number
    stage_id?: IntFilter<"tasks"> | number
    title?: StringFilter<"tasks"> | string
    description?: StringNullableFilter<"tasks"> | string | null
    due_date?: DateTimeFilter<"tasks"> | Date | string
    messages?: MessagesListRelationFilter
    task_priviles?: Task_previlesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    boards?: XOR<BoardsScalarRelationFilter, boardsWhereInput>
    stages?: XOR<StagesScalarRelationFilter, stagesWhereInput>
  }

  export type tasksOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    board_id?: SortOrder
    stage_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    due_date?: SortOrder
    messages?: messagesOrderByRelationAggregateInput
    task_priviles?: task_previlesOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    boards?: boardsOrderByWithRelationInput
    stages?: stagesOrderByWithRelationInput
  }

  export type tasksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    user_id?: IntFilter<"tasks"> | number
    board_id?: IntFilter<"tasks"> | number
    stage_id?: IntFilter<"tasks"> | number
    title?: StringFilter<"tasks"> | string
    description?: StringNullableFilter<"tasks"> | string | null
    due_date?: DateTimeFilter<"tasks"> | Date | string
    messages?: MessagesListRelationFilter
    task_priviles?: Task_previlesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    boards?: XOR<BoardsScalarRelationFilter, boardsWhereInput>
    stages?: XOR<StagesScalarRelationFilter, stagesWhereInput>
  }, "id">

  export type tasksOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    board_id?: SortOrder
    stage_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    due_date?: SortOrder
    _count?: tasksCountOrderByAggregateInput
    _avg?: tasksAvgOrderByAggregateInput
    _max?: tasksMaxOrderByAggregateInput
    _min?: tasksMinOrderByAggregateInput
    _sum?: tasksSumOrderByAggregateInput
  }

  export type tasksScalarWhereWithAggregatesInput = {
    AND?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    OR?: tasksScalarWhereWithAggregatesInput[]
    NOT?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tasks"> | number
    user_id?: IntWithAggregatesFilter<"tasks"> | number
    board_id?: IntWithAggregatesFilter<"tasks"> | number
    stage_id?: IntWithAggregatesFilter<"tasks"> | number
    title?: StringWithAggregatesFilter<"tasks"> | string
    description?: StringNullableWithAggregatesFilter<"tasks"> | string | null
    due_date?: DateTimeWithAggregatesFilter<"tasks"> | Date | string
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    id?: IntFilter<"messages"> | number
    user_id?: IntFilter<"messages"> | number
    task_id?: IntFilter<"messages"> | number
    message?: StringFilter<"messages"> | string
    like_count?: IntFilter<"messages"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    tasks?: XOR<TasksScalarRelationFilter, tasksWhereInput>
  }

  export type messagesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    message?: SortOrder
    like_count?: SortOrder
    users?: usersOrderByWithRelationInput
    tasks?: tasksOrderByWithRelationInput
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    user_id?: IntFilter<"messages"> | number
    task_id?: IntFilter<"messages"> | number
    message?: StringFilter<"messages"> | string
    like_count?: IntFilter<"messages"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    tasks?: XOR<TasksScalarRelationFilter, tasksWhereInput>
  }, "id">

  export type messagesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    message?: SortOrder
    like_count?: SortOrder
    _count?: messagesCountOrderByAggregateInput
    _avg?: messagesAvgOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
    _sum?: messagesSumOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"messages"> | number
    user_id?: IntWithAggregatesFilter<"messages"> | number
    task_id?: IntWithAggregatesFilter<"messages"> | number
    message?: StringWithAggregatesFilter<"messages"> | string
    like_count?: IntWithAggregatesFilter<"messages"> | number
  }

  export type usersCreateInput = {
    username: string
    password: string
    boards?: boardsCreateNestedManyWithoutUsersInput
    invites?: invitesCreateNestedManyWithoutUsersInput
    tasks?: tasksCreateNestedManyWithoutUsersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    task_priviles?: task_previlesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    boards?: boardsUncheckedCreateNestedManyWithoutUsersInput
    invites?: invitesUncheckedCreateNestedManyWithoutUsersInput
    tasks?: tasksUncheckedCreateNestedManyWithoutUsersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    task_priviles?: task_previlesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    boards?: boardsUpdateManyWithoutUsersNestedInput
    invites?: invitesUpdateManyWithoutUsersNestedInput
    tasks?: tasksUpdateManyWithoutUsersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    task_priviles?: task_previlesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    boards?: boardsUncheckedUpdateManyWithoutUsersNestedInput
    invites?: invitesUncheckedUpdateManyWithoutUsersNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutUsersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    task_priviles?: task_previlesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    password: string
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type task_previlesCreateInput = {
    add_time: Date | string
    tasks: tasksCreateNestedOneWithoutTask_privilesInput
    users: usersCreateNestedOneWithoutTask_privilesInput
  }

  export type task_previlesUncheckedCreateInput = {
    id?: number
    task_id: number
    user_id: number
    add_time: Date | string
  }

  export type task_previlesUpdateInput = {
    add_time?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: tasksUpdateOneRequiredWithoutTask_privilesNestedInput
    users?: usersUpdateOneRequiredWithoutTask_privilesNestedInput
  }

  export type task_previlesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    add_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type task_previlesCreateManyInput = {
    id?: number
    task_id: number
    user_id: number
    add_time: Date | string
  }

  export type task_previlesUpdateManyMutationInput = {
    add_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type task_previlesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    add_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type boardsCreateInput = {
    title: string
    description?: string | null
    create_at: Date | string
    stages?: stagesCreateNestedManyWithoutBoardsInput
    tasks?: tasksCreateNestedManyWithoutBoardsInput
    invites?: invitesCreateNestedManyWithoutBoardsInput
    users: usersCreateNestedOneWithoutBoardsInput
  }

  export type boardsUncheckedCreateInput = {
    id?: number
    user_id: number
    title: string
    description?: string | null
    create_at: Date | string
    stages?: stagesUncheckedCreateNestedManyWithoutBoardsInput
    tasks?: tasksUncheckedCreateNestedManyWithoutBoardsInput
    invites?: invitesUncheckedCreateNestedManyWithoutBoardsInput
  }

  export type boardsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: stagesUpdateManyWithoutBoardsNestedInput
    tasks?: tasksUpdateManyWithoutBoardsNestedInput
    invites?: invitesUpdateManyWithoutBoardsNestedInput
    users?: usersUpdateOneRequiredWithoutBoardsNestedInput
  }

  export type boardsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: stagesUncheckedUpdateManyWithoutBoardsNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutBoardsNestedInput
    invites?: invitesUncheckedUpdateManyWithoutBoardsNestedInput
  }

  export type boardsCreateManyInput = {
    id?: number
    user_id: number
    title: string
    description?: string | null
    create_at: Date | string
  }

  export type boardsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type boardsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stagesCreateInput = {
    name: string
    tasks?: tasksCreateNestedManyWithoutStagesInput
    boards: boardsCreateNestedOneWithoutStagesInput
  }

  export type stagesUncheckedCreateInput = {
    id?: number
    board_id: number
    name: string
    tasks?: tasksUncheckedCreateNestedManyWithoutStagesInput
  }

  export type stagesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tasks?: tasksUpdateManyWithoutStagesNestedInput
    boards?: boardsUpdateOneRequiredWithoutStagesNestedInput
  }

  export type stagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    board_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tasks?: tasksUncheckedUpdateManyWithoutStagesNestedInput
  }

  export type stagesCreateManyInput = {
    id?: number
    board_id: number
    name: string
  }

  export type stagesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type stagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    board_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type invitesCreateInput = {
    message?: string
    create_at: Date | string
    users: usersCreateNestedOneWithoutInvitesInput
    boards: boardsCreateNestedOneWithoutInvitesInput
  }

  export type invitesUncheckedCreateInput = {
    id?: number
    user_id: number
    board_id: number
    message?: string
    create_at: Date | string
  }

  export type invitesUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutInvitesNestedInput
    boards?: boardsUpdateOneRequiredWithoutInvitesNestedInput
  }

  export type invitesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    board_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invitesCreateManyInput = {
    id?: number
    user_id: number
    board_id: number
    message?: string
    create_at: Date | string
  }

  export type invitesUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invitesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    board_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tasksCreateInput = {
    title: string
    description?: string | null
    due_date: Date | string
    messages?: messagesCreateNestedManyWithoutTasksInput
    task_priviles?: task_previlesCreateNestedManyWithoutTasksInput
    users: usersCreateNestedOneWithoutTasksInput
    boards: boardsCreateNestedOneWithoutTasksInput
    stages: stagesCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateInput = {
    id?: number
    user_id: number
    board_id: number
    stage_id: number
    title: string
    description?: string | null
    due_date: Date | string
    messages?: messagesUncheckedCreateNestedManyWithoutTasksInput
    task_priviles?: task_previlesUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messagesUpdateManyWithoutTasksNestedInput
    task_priviles?: task_previlesUpdateManyWithoutTasksNestedInput
    users?: usersUpdateOneRequiredWithoutTasksNestedInput
    boards?: boardsUpdateOneRequiredWithoutTasksNestedInput
    stages?: stagesUpdateOneRequiredWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    board_id?: IntFieldUpdateOperationsInput | number
    stage_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messagesUncheckedUpdateManyWithoutTasksNestedInput
    task_priviles?: task_previlesUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksCreateManyInput = {
    id?: number
    user_id: number
    board_id: number
    stage_id: number
    title: string
    description?: string | null
    due_date: Date | string
  }

  export type tasksUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tasksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    board_id?: IntFieldUpdateOperationsInput | number
    stage_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesCreateInput = {
    message: string
    like_count?: number
    users: usersCreateNestedOneWithoutMessagesInput
    tasks: tasksCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateInput = {
    id?: number
    user_id: number
    task_id: number
    message: string
    like_count?: number
  }

  export type messagesUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateOneRequiredWithoutMessagesNestedInput
    tasks?: tasksUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
  }

  export type messagesCreateManyInput = {
    id?: number
    user_id: number
    task_id: number
    message: string
    like_count?: number
  }

  export type messagesUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
  }

  export type messagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
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

  export type BoardsListRelationFilter = {
    every?: boardsWhereInput
    some?: boardsWhereInput
    none?: boardsWhereInput
  }

  export type InvitesListRelationFilter = {
    every?: invitesWhereInput
    some?: invitesWhereInput
    none?: invitesWhereInput
  }

  export type TasksListRelationFilter = {
    every?: tasksWhereInput
    some?: tasksWhereInput
    none?: tasksWhereInput
  }

  export type MessagesListRelationFilter = {
    every?: messagesWhereInput
    some?: messagesWhereInput
    none?: messagesWhereInput
  }

  export type Task_previlesListRelationFilter = {
    every?: task_previlesWhereInput
    some?: task_previlesWhereInput
    none?: task_previlesWhereInput
  }

  export type boardsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type invitesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type task_previlesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
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

  export type TasksScalarRelationFilter = {
    is?: tasksWhereInput
    isNot?: tasksWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type task_previlesCountOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    user_id?: SortOrder
    add_time?: SortOrder
  }

  export type task_previlesAvgOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    user_id?: SortOrder
  }

  export type task_previlesMaxOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    user_id?: SortOrder
    add_time?: SortOrder
  }

  export type task_previlesMinOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    user_id?: SortOrder
    add_time?: SortOrder
  }

  export type task_previlesSumOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    user_id?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StagesListRelationFilter = {
    every?: stagesWhereInput
    some?: stagesWhereInput
    none?: stagesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type stagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type boardsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    create_at?: SortOrder
  }

  export type boardsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type boardsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    create_at?: SortOrder
  }

  export type boardsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    create_at?: SortOrder
  }

  export type boardsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoardsScalarRelationFilter = {
    is?: boardsWhereInput
    isNot?: boardsWhereInput
  }

  export type stagesCountOrderByAggregateInput = {
    id?: SortOrder
    board_id?: SortOrder
    name?: SortOrder
  }

  export type stagesAvgOrderByAggregateInput = {
    id?: SortOrder
    board_id?: SortOrder
  }

  export type stagesMaxOrderByAggregateInput = {
    id?: SortOrder
    board_id?: SortOrder
    name?: SortOrder
  }

  export type stagesMinOrderByAggregateInput = {
    id?: SortOrder
    board_id?: SortOrder
    name?: SortOrder
  }

  export type stagesSumOrderByAggregateInput = {
    id?: SortOrder
    board_id?: SortOrder
  }

  export type invitesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    board_id?: SortOrder
    message?: SortOrder
    create_at?: SortOrder
  }

  export type invitesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    board_id?: SortOrder
  }

  export type invitesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    board_id?: SortOrder
    message?: SortOrder
    create_at?: SortOrder
  }

  export type invitesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    board_id?: SortOrder
    message?: SortOrder
    create_at?: SortOrder
  }

  export type invitesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    board_id?: SortOrder
  }

  export type StagesScalarRelationFilter = {
    is?: stagesWhereInput
    isNot?: stagesWhereInput
  }

  export type tasksCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    board_id?: SortOrder
    stage_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    due_date?: SortOrder
  }

  export type tasksAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    board_id?: SortOrder
    stage_id?: SortOrder
  }

  export type tasksMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    board_id?: SortOrder
    stage_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    due_date?: SortOrder
  }

  export type tasksMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    board_id?: SortOrder
    stage_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    due_date?: SortOrder
  }

  export type tasksSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    board_id?: SortOrder
    stage_id?: SortOrder
  }

  export type messagesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    message?: SortOrder
    like_count?: SortOrder
  }

  export type messagesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    like_count?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    message?: SortOrder
    like_count?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    message?: SortOrder
    like_count?: SortOrder
  }

  export type messagesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    like_count?: SortOrder
  }

  export type boardsCreateNestedManyWithoutUsersInput = {
    create?: XOR<boardsCreateWithoutUsersInput, boardsUncheckedCreateWithoutUsersInput> | boardsCreateWithoutUsersInput[] | boardsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: boardsCreateOrConnectWithoutUsersInput | boardsCreateOrConnectWithoutUsersInput[]
    createMany?: boardsCreateManyUsersInputEnvelope
    connect?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
  }

  export type invitesCreateNestedManyWithoutUsersInput = {
    create?: XOR<invitesCreateWithoutUsersInput, invitesUncheckedCreateWithoutUsersInput> | invitesCreateWithoutUsersInput[] | invitesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invitesCreateOrConnectWithoutUsersInput | invitesCreateOrConnectWithoutUsersInput[]
    createMany?: invitesCreateManyUsersInputEnvelope
    connect?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
  }

  export type tasksCreateNestedManyWithoutUsersInput = {
    create?: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput> | tasksCreateWithoutUsersInput[] | tasksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsersInput | tasksCreateOrConnectWithoutUsersInput[]
    createMany?: tasksCreateManyUsersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type messagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type task_previlesCreateNestedManyWithoutUsersInput = {
    create?: XOR<task_previlesCreateWithoutUsersInput, task_previlesUncheckedCreateWithoutUsersInput> | task_previlesCreateWithoutUsersInput[] | task_previlesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: task_previlesCreateOrConnectWithoutUsersInput | task_previlesCreateOrConnectWithoutUsersInput[]
    createMany?: task_previlesCreateManyUsersInputEnvelope
    connect?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
  }

  export type boardsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<boardsCreateWithoutUsersInput, boardsUncheckedCreateWithoutUsersInput> | boardsCreateWithoutUsersInput[] | boardsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: boardsCreateOrConnectWithoutUsersInput | boardsCreateOrConnectWithoutUsersInput[]
    createMany?: boardsCreateManyUsersInputEnvelope
    connect?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
  }

  export type invitesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<invitesCreateWithoutUsersInput, invitesUncheckedCreateWithoutUsersInput> | invitesCreateWithoutUsersInput[] | invitesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invitesCreateOrConnectWithoutUsersInput | invitesCreateOrConnectWithoutUsersInput[]
    createMany?: invitesCreateManyUsersInputEnvelope
    connect?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput> | tasksCreateWithoutUsersInput[] | tasksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsersInput | tasksCreateOrConnectWithoutUsersInput[]
    createMany?: tasksCreateManyUsersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type task_previlesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<task_previlesCreateWithoutUsersInput, task_previlesUncheckedCreateWithoutUsersInput> | task_previlesCreateWithoutUsersInput[] | task_previlesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: task_previlesCreateOrConnectWithoutUsersInput | task_previlesCreateOrConnectWithoutUsersInput[]
    createMany?: task_previlesCreateManyUsersInputEnvelope
    connect?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type boardsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<boardsCreateWithoutUsersInput, boardsUncheckedCreateWithoutUsersInput> | boardsCreateWithoutUsersInput[] | boardsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: boardsCreateOrConnectWithoutUsersInput | boardsCreateOrConnectWithoutUsersInput[]
    upsert?: boardsUpsertWithWhereUniqueWithoutUsersInput | boardsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: boardsCreateManyUsersInputEnvelope
    set?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
    disconnect?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
    delete?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
    connect?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
    update?: boardsUpdateWithWhereUniqueWithoutUsersInput | boardsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: boardsUpdateManyWithWhereWithoutUsersInput | boardsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: boardsScalarWhereInput | boardsScalarWhereInput[]
  }

  export type invitesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<invitesCreateWithoutUsersInput, invitesUncheckedCreateWithoutUsersInput> | invitesCreateWithoutUsersInput[] | invitesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invitesCreateOrConnectWithoutUsersInput | invitesCreateOrConnectWithoutUsersInput[]
    upsert?: invitesUpsertWithWhereUniqueWithoutUsersInput | invitesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: invitesCreateManyUsersInputEnvelope
    set?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
    disconnect?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
    delete?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
    connect?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
    update?: invitesUpdateWithWhereUniqueWithoutUsersInput | invitesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: invitesUpdateManyWithWhereWithoutUsersInput | invitesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: invitesScalarWhereInput | invitesScalarWhereInput[]
  }

  export type tasksUpdateManyWithoutUsersNestedInput = {
    create?: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput> | tasksCreateWithoutUsersInput[] | tasksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsersInput | tasksCreateOrConnectWithoutUsersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsersInput | tasksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: tasksCreateManyUsersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsersInput | tasksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsersInput | tasksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type messagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutUsersInput | messagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutUsersInput | messagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutUsersInput | messagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type task_previlesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<task_previlesCreateWithoutUsersInput, task_previlesUncheckedCreateWithoutUsersInput> | task_previlesCreateWithoutUsersInput[] | task_previlesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: task_previlesCreateOrConnectWithoutUsersInput | task_previlesCreateOrConnectWithoutUsersInput[]
    upsert?: task_previlesUpsertWithWhereUniqueWithoutUsersInput | task_previlesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: task_previlesCreateManyUsersInputEnvelope
    set?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
    disconnect?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
    delete?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
    connect?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
    update?: task_previlesUpdateWithWhereUniqueWithoutUsersInput | task_previlesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: task_previlesUpdateManyWithWhereWithoutUsersInput | task_previlesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: task_previlesScalarWhereInput | task_previlesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type boardsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<boardsCreateWithoutUsersInput, boardsUncheckedCreateWithoutUsersInput> | boardsCreateWithoutUsersInput[] | boardsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: boardsCreateOrConnectWithoutUsersInput | boardsCreateOrConnectWithoutUsersInput[]
    upsert?: boardsUpsertWithWhereUniqueWithoutUsersInput | boardsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: boardsCreateManyUsersInputEnvelope
    set?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
    disconnect?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
    delete?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
    connect?: boardsWhereUniqueInput | boardsWhereUniqueInput[]
    update?: boardsUpdateWithWhereUniqueWithoutUsersInput | boardsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: boardsUpdateManyWithWhereWithoutUsersInput | boardsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: boardsScalarWhereInput | boardsScalarWhereInput[]
  }

  export type invitesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<invitesCreateWithoutUsersInput, invitesUncheckedCreateWithoutUsersInput> | invitesCreateWithoutUsersInput[] | invitesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invitesCreateOrConnectWithoutUsersInput | invitesCreateOrConnectWithoutUsersInput[]
    upsert?: invitesUpsertWithWhereUniqueWithoutUsersInput | invitesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: invitesCreateManyUsersInputEnvelope
    set?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
    disconnect?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
    delete?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
    connect?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
    update?: invitesUpdateWithWhereUniqueWithoutUsersInput | invitesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: invitesUpdateManyWithWhereWithoutUsersInput | invitesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: invitesScalarWhereInput | invitesScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput> | tasksCreateWithoutUsersInput[] | tasksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsersInput | tasksCreateOrConnectWithoutUsersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsersInput | tasksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: tasksCreateManyUsersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsersInput | tasksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsersInput | tasksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutUsersInput | messagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: messagesCreateManyUsersInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutUsersInput | messagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutUsersInput | messagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type task_previlesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<task_previlesCreateWithoutUsersInput, task_previlesUncheckedCreateWithoutUsersInput> | task_previlesCreateWithoutUsersInput[] | task_previlesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: task_previlesCreateOrConnectWithoutUsersInput | task_previlesCreateOrConnectWithoutUsersInput[]
    upsert?: task_previlesUpsertWithWhereUniqueWithoutUsersInput | task_previlesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: task_previlesCreateManyUsersInputEnvelope
    set?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
    disconnect?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
    delete?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
    connect?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
    update?: task_previlesUpdateWithWhereUniqueWithoutUsersInput | task_previlesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: task_previlesUpdateManyWithWhereWithoutUsersInput | task_previlesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: task_previlesScalarWhereInput | task_previlesScalarWhereInput[]
  }

  export type tasksCreateNestedOneWithoutTask_privilesInput = {
    create?: XOR<tasksCreateWithoutTask_privilesInput, tasksUncheckedCreateWithoutTask_privilesInput>
    connectOrCreate?: tasksCreateOrConnectWithoutTask_privilesInput
    connect?: tasksWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTask_privilesInput = {
    create?: XOR<usersCreateWithoutTask_privilesInput, usersUncheckedCreateWithoutTask_privilesInput>
    connectOrCreate?: usersCreateOrConnectWithoutTask_privilesInput
    connect?: usersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tasksUpdateOneRequiredWithoutTask_privilesNestedInput = {
    create?: XOR<tasksCreateWithoutTask_privilesInput, tasksUncheckedCreateWithoutTask_privilesInput>
    connectOrCreate?: tasksCreateOrConnectWithoutTask_privilesInput
    upsert?: tasksUpsertWithoutTask_privilesInput
    connect?: tasksWhereUniqueInput
    update?: XOR<XOR<tasksUpdateToOneWithWhereWithoutTask_privilesInput, tasksUpdateWithoutTask_privilesInput>, tasksUncheckedUpdateWithoutTask_privilesInput>
  }

  export type usersUpdateOneRequiredWithoutTask_privilesNestedInput = {
    create?: XOR<usersCreateWithoutTask_privilesInput, usersUncheckedCreateWithoutTask_privilesInput>
    connectOrCreate?: usersCreateOrConnectWithoutTask_privilesInput
    upsert?: usersUpsertWithoutTask_privilesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTask_privilesInput, usersUpdateWithoutTask_privilesInput>, usersUncheckedUpdateWithoutTask_privilesInput>
  }

  export type stagesCreateNestedManyWithoutBoardsInput = {
    create?: XOR<stagesCreateWithoutBoardsInput, stagesUncheckedCreateWithoutBoardsInput> | stagesCreateWithoutBoardsInput[] | stagesUncheckedCreateWithoutBoardsInput[]
    connectOrCreate?: stagesCreateOrConnectWithoutBoardsInput | stagesCreateOrConnectWithoutBoardsInput[]
    createMany?: stagesCreateManyBoardsInputEnvelope
    connect?: stagesWhereUniqueInput | stagesWhereUniqueInput[]
  }

  export type tasksCreateNestedManyWithoutBoardsInput = {
    create?: XOR<tasksCreateWithoutBoardsInput, tasksUncheckedCreateWithoutBoardsInput> | tasksCreateWithoutBoardsInput[] | tasksUncheckedCreateWithoutBoardsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutBoardsInput | tasksCreateOrConnectWithoutBoardsInput[]
    createMany?: tasksCreateManyBoardsInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type invitesCreateNestedManyWithoutBoardsInput = {
    create?: XOR<invitesCreateWithoutBoardsInput, invitesUncheckedCreateWithoutBoardsInput> | invitesCreateWithoutBoardsInput[] | invitesUncheckedCreateWithoutBoardsInput[]
    connectOrCreate?: invitesCreateOrConnectWithoutBoardsInput | invitesCreateOrConnectWithoutBoardsInput[]
    createMany?: invitesCreateManyBoardsInputEnvelope
    connect?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutBoardsInput = {
    create?: XOR<usersCreateWithoutBoardsInput, usersUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBoardsInput
    connect?: usersWhereUniqueInput
  }

  export type stagesUncheckedCreateNestedManyWithoutBoardsInput = {
    create?: XOR<stagesCreateWithoutBoardsInput, stagesUncheckedCreateWithoutBoardsInput> | stagesCreateWithoutBoardsInput[] | stagesUncheckedCreateWithoutBoardsInput[]
    connectOrCreate?: stagesCreateOrConnectWithoutBoardsInput | stagesCreateOrConnectWithoutBoardsInput[]
    createMany?: stagesCreateManyBoardsInputEnvelope
    connect?: stagesWhereUniqueInput | stagesWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutBoardsInput = {
    create?: XOR<tasksCreateWithoutBoardsInput, tasksUncheckedCreateWithoutBoardsInput> | tasksCreateWithoutBoardsInput[] | tasksUncheckedCreateWithoutBoardsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutBoardsInput | tasksCreateOrConnectWithoutBoardsInput[]
    createMany?: tasksCreateManyBoardsInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type invitesUncheckedCreateNestedManyWithoutBoardsInput = {
    create?: XOR<invitesCreateWithoutBoardsInput, invitesUncheckedCreateWithoutBoardsInput> | invitesCreateWithoutBoardsInput[] | invitesUncheckedCreateWithoutBoardsInput[]
    connectOrCreate?: invitesCreateOrConnectWithoutBoardsInput | invitesCreateOrConnectWithoutBoardsInput[]
    createMany?: invitesCreateManyBoardsInputEnvelope
    connect?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type stagesUpdateManyWithoutBoardsNestedInput = {
    create?: XOR<stagesCreateWithoutBoardsInput, stagesUncheckedCreateWithoutBoardsInput> | stagesCreateWithoutBoardsInput[] | stagesUncheckedCreateWithoutBoardsInput[]
    connectOrCreate?: stagesCreateOrConnectWithoutBoardsInput | stagesCreateOrConnectWithoutBoardsInput[]
    upsert?: stagesUpsertWithWhereUniqueWithoutBoardsInput | stagesUpsertWithWhereUniqueWithoutBoardsInput[]
    createMany?: stagesCreateManyBoardsInputEnvelope
    set?: stagesWhereUniqueInput | stagesWhereUniqueInput[]
    disconnect?: stagesWhereUniqueInput | stagesWhereUniqueInput[]
    delete?: stagesWhereUniqueInput | stagesWhereUniqueInput[]
    connect?: stagesWhereUniqueInput | stagesWhereUniqueInput[]
    update?: stagesUpdateWithWhereUniqueWithoutBoardsInput | stagesUpdateWithWhereUniqueWithoutBoardsInput[]
    updateMany?: stagesUpdateManyWithWhereWithoutBoardsInput | stagesUpdateManyWithWhereWithoutBoardsInput[]
    deleteMany?: stagesScalarWhereInput | stagesScalarWhereInput[]
  }

  export type tasksUpdateManyWithoutBoardsNestedInput = {
    create?: XOR<tasksCreateWithoutBoardsInput, tasksUncheckedCreateWithoutBoardsInput> | tasksCreateWithoutBoardsInput[] | tasksUncheckedCreateWithoutBoardsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutBoardsInput | tasksCreateOrConnectWithoutBoardsInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutBoardsInput | tasksUpsertWithWhereUniqueWithoutBoardsInput[]
    createMany?: tasksCreateManyBoardsInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutBoardsInput | tasksUpdateWithWhereUniqueWithoutBoardsInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutBoardsInput | tasksUpdateManyWithWhereWithoutBoardsInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type invitesUpdateManyWithoutBoardsNestedInput = {
    create?: XOR<invitesCreateWithoutBoardsInput, invitesUncheckedCreateWithoutBoardsInput> | invitesCreateWithoutBoardsInput[] | invitesUncheckedCreateWithoutBoardsInput[]
    connectOrCreate?: invitesCreateOrConnectWithoutBoardsInput | invitesCreateOrConnectWithoutBoardsInput[]
    upsert?: invitesUpsertWithWhereUniqueWithoutBoardsInput | invitesUpsertWithWhereUniqueWithoutBoardsInput[]
    createMany?: invitesCreateManyBoardsInputEnvelope
    set?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
    disconnect?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
    delete?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
    connect?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
    update?: invitesUpdateWithWhereUniqueWithoutBoardsInput | invitesUpdateWithWhereUniqueWithoutBoardsInput[]
    updateMany?: invitesUpdateManyWithWhereWithoutBoardsInput | invitesUpdateManyWithWhereWithoutBoardsInput[]
    deleteMany?: invitesScalarWhereInput | invitesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutBoardsNestedInput = {
    create?: XOR<usersCreateWithoutBoardsInput, usersUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBoardsInput
    upsert?: usersUpsertWithoutBoardsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBoardsInput, usersUpdateWithoutBoardsInput>, usersUncheckedUpdateWithoutBoardsInput>
  }

  export type stagesUncheckedUpdateManyWithoutBoardsNestedInput = {
    create?: XOR<stagesCreateWithoutBoardsInput, stagesUncheckedCreateWithoutBoardsInput> | stagesCreateWithoutBoardsInput[] | stagesUncheckedCreateWithoutBoardsInput[]
    connectOrCreate?: stagesCreateOrConnectWithoutBoardsInput | stagesCreateOrConnectWithoutBoardsInput[]
    upsert?: stagesUpsertWithWhereUniqueWithoutBoardsInput | stagesUpsertWithWhereUniqueWithoutBoardsInput[]
    createMany?: stagesCreateManyBoardsInputEnvelope
    set?: stagesWhereUniqueInput | stagesWhereUniqueInput[]
    disconnect?: stagesWhereUniqueInput | stagesWhereUniqueInput[]
    delete?: stagesWhereUniqueInput | stagesWhereUniqueInput[]
    connect?: stagesWhereUniqueInput | stagesWhereUniqueInput[]
    update?: stagesUpdateWithWhereUniqueWithoutBoardsInput | stagesUpdateWithWhereUniqueWithoutBoardsInput[]
    updateMany?: stagesUpdateManyWithWhereWithoutBoardsInput | stagesUpdateManyWithWhereWithoutBoardsInput[]
    deleteMany?: stagesScalarWhereInput | stagesScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutBoardsNestedInput = {
    create?: XOR<tasksCreateWithoutBoardsInput, tasksUncheckedCreateWithoutBoardsInput> | tasksCreateWithoutBoardsInput[] | tasksUncheckedCreateWithoutBoardsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutBoardsInput | tasksCreateOrConnectWithoutBoardsInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutBoardsInput | tasksUpsertWithWhereUniqueWithoutBoardsInput[]
    createMany?: tasksCreateManyBoardsInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutBoardsInput | tasksUpdateWithWhereUniqueWithoutBoardsInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutBoardsInput | tasksUpdateManyWithWhereWithoutBoardsInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type invitesUncheckedUpdateManyWithoutBoardsNestedInput = {
    create?: XOR<invitesCreateWithoutBoardsInput, invitesUncheckedCreateWithoutBoardsInput> | invitesCreateWithoutBoardsInput[] | invitesUncheckedCreateWithoutBoardsInput[]
    connectOrCreate?: invitesCreateOrConnectWithoutBoardsInput | invitesCreateOrConnectWithoutBoardsInput[]
    upsert?: invitesUpsertWithWhereUniqueWithoutBoardsInput | invitesUpsertWithWhereUniqueWithoutBoardsInput[]
    createMany?: invitesCreateManyBoardsInputEnvelope
    set?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
    disconnect?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
    delete?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
    connect?: invitesWhereUniqueInput | invitesWhereUniqueInput[]
    update?: invitesUpdateWithWhereUniqueWithoutBoardsInput | invitesUpdateWithWhereUniqueWithoutBoardsInput[]
    updateMany?: invitesUpdateManyWithWhereWithoutBoardsInput | invitesUpdateManyWithWhereWithoutBoardsInput[]
    deleteMany?: invitesScalarWhereInput | invitesScalarWhereInput[]
  }

  export type tasksCreateNestedManyWithoutStagesInput = {
    create?: XOR<tasksCreateWithoutStagesInput, tasksUncheckedCreateWithoutStagesInput> | tasksCreateWithoutStagesInput[] | tasksUncheckedCreateWithoutStagesInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutStagesInput | tasksCreateOrConnectWithoutStagesInput[]
    createMany?: tasksCreateManyStagesInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type boardsCreateNestedOneWithoutStagesInput = {
    create?: XOR<boardsCreateWithoutStagesInput, boardsUncheckedCreateWithoutStagesInput>
    connectOrCreate?: boardsCreateOrConnectWithoutStagesInput
    connect?: boardsWhereUniqueInput
  }

  export type tasksUncheckedCreateNestedManyWithoutStagesInput = {
    create?: XOR<tasksCreateWithoutStagesInput, tasksUncheckedCreateWithoutStagesInput> | tasksCreateWithoutStagesInput[] | tasksUncheckedCreateWithoutStagesInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutStagesInput | tasksCreateOrConnectWithoutStagesInput[]
    createMany?: tasksCreateManyStagesInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type tasksUpdateManyWithoutStagesNestedInput = {
    create?: XOR<tasksCreateWithoutStagesInput, tasksUncheckedCreateWithoutStagesInput> | tasksCreateWithoutStagesInput[] | tasksUncheckedCreateWithoutStagesInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutStagesInput | tasksCreateOrConnectWithoutStagesInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutStagesInput | tasksUpsertWithWhereUniqueWithoutStagesInput[]
    createMany?: tasksCreateManyStagesInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutStagesInput | tasksUpdateWithWhereUniqueWithoutStagesInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutStagesInput | tasksUpdateManyWithWhereWithoutStagesInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type boardsUpdateOneRequiredWithoutStagesNestedInput = {
    create?: XOR<boardsCreateWithoutStagesInput, boardsUncheckedCreateWithoutStagesInput>
    connectOrCreate?: boardsCreateOrConnectWithoutStagesInput
    upsert?: boardsUpsertWithoutStagesInput
    connect?: boardsWhereUniqueInput
    update?: XOR<XOR<boardsUpdateToOneWithWhereWithoutStagesInput, boardsUpdateWithoutStagesInput>, boardsUncheckedUpdateWithoutStagesInput>
  }

  export type tasksUncheckedUpdateManyWithoutStagesNestedInput = {
    create?: XOR<tasksCreateWithoutStagesInput, tasksUncheckedCreateWithoutStagesInput> | tasksCreateWithoutStagesInput[] | tasksUncheckedCreateWithoutStagesInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutStagesInput | tasksCreateOrConnectWithoutStagesInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutStagesInput | tasksUpsertWithWhereUniqueWithoutStagesInput[]
    createMany?: tasksCreateManyStagesInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutStagesInput | tasksUpdateWithWhereUniqueWithoutStagesInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutStagesInput | tasksUpdateManyWithWhereWithoutStagesInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutInvitesInput = {
    create?: XOR<usersCreateWithoutInvitesInput, usersUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: usersCreateOrConnectWithoutInvitesInput
    connect?: usersWhereUniqueInput
  }

  export type boardsCreateNestedOneWithoutInvitesInput = {
    create?: XOR<boardsCreateWithoutInvitesInput, boardsUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: boardsCreateOrConnectWithoutInvitesInput
    connect?: boardsWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutInvitesNestedInput = {
    create?: XOR<usersCreateWithoutInvitesInput, usersUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: usersCreateOrConnectWithoutInvitesInput
    upsert?: usersUpsertWithoutInvitesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutInvitesInput, usersUpdateWithoutInvitesInput>, usersUncheckedUpdateWithoutInvitesInput>
  }

  export type boardsUpdateOneRequiredWithoutInvitesNestedInput = {
    create?: XOR<boardsCreateWithoutInvitesInput, boardsUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: boardsCreateOrConnectWithoutInvitesInput
    upsert?: boardsUpsertWithoutInvitesInput
    connect?: boardsWhereUniqueInput
    update?: XOR<XOR<boardsUpdateToOneWithWhereWithoutInvitesInput, boardsUpdateWithoutInvitesInput>, boardsUncheckedUpdateWithoutInvitesInput>
  }

  export type messagesCreateNestedManyWithoutTasksInput = {
    create?: XOR<messagesCreateWithoutTasksInput, messagesUncheckedCreateWithoutTasksInput> | messagesCreateWithoutTasksInput[] | messagesUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutTasksInput | messagesCreateOrConnectWithoutTasksInput[]
    createMany?: messagesCreateManyTasksInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type task_previlesCreateNestedManyWithoutTasksInput = {
    create?: XOR<task_previlesCreateWithoutTasksInput, task_previlesUncheckedCreateWithoutTasksInput> | task_previlesCreateWithoutTasksInput[] | task_previlesUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: task_previlesCreateOrConnectWithoutTasksInput | task_previlesCreateOrConnectWithoutTasksInput[]
    createMany?: task_previlesCreateManyTasksInputEnvelope
    connect?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutTasksInput = {
    create?: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasksInput
    connect?: usersWhereUniqueInput
  }

  export type boardsCreateNestedOneWithoutTasksInput = {
    create?: XOR<boardsCreateWithoutTasksInput, boardsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: boardsCreateOrConnectWithoutTasksInput
    connect?: boardsWhereUniqueInput
  }

  export type stagesCreateNestedOneWithoutTasksInput = {
    create?: XOR<stagesCreateWithoutTasksInput, stagesUncheckedCreateWithoutTasksInput>
    connectOrCreate?: stagesCreateOrConnectWithoutTasksInput
    connect?: stagesWhereUniqueInput
  }

  export type messagesUncheckedCreateNestedManyWithoutTasksInput = {
    create?: XOR<messagesCreateWithoutTasksInput, messagesUncheckedCreateWithoutTasksInput> | messagesCreateWithoutTasksInput[] | messagesUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutTasksInput | messagesCreateOrConnectWithoutTasksInput[]
    createMany?: messagesCreateManyTasksInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type task_previlesUncheckedCreateNestedManyWithoutTasksInput = {
    create?: XOR<task_previlesCreateWithoutTasksInput, task_previlesUncheckedCreateWithoutTasksInput> | task_previlesCreateWithoutTasksInput[] | task_previlesUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: task_previlesCreateOrConnectWithoutTasksInput | task_previlesCreateOrConnectWithoutTasksInput[]
    createMany?: task_previlesCreateManyTasksInputEnvelope
    connect?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
  }

  export type messagesUpdateManyWithoutTasksNestedInput = {
    create?: XOR<messagesCreateWithoutTasksInput, messagesUncheckedCreateWithoutTasksInput> | messagesCreateWithoutTasksInput[] | messagesUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutTasksInput | messagesCreateOrConnectWithoutTasksInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutTasksInput | messagesUpsertWithWhereUniqueWithoutTasksInput[]
    createMany?: messagesCreateManyTasksInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutTasksInput | messagesUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutTasksInput | messagesUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type task_previlesUpdateManyWithoutTasksNestedInput = {
    create?: XOR<task_previlesCreateWithoutTasksInput, task_previlesUncheckedCreateWithoutTasksInput> | task_previlesCreateWithoutTasksInput[] | task_previlesUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: task_previlesCreateOrConnectWithoutTasksInput | task_previlesCreateOrConnectWithoutTasksInput[]
    upsert?: task_previlesUpsertWithWhereUniqueWithoutTasksInput | task_previlesUpsertWithWhereUniqueWithoutTasksInput[]
    createMany?: task_previlesCreateManyTasksInputEnvelope
    set?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
    disconnect?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
    delete?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
    connect?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
    update?: task_previlesUpdateWithWhereUniqueWithoutTasksInput | task_previlesUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: task_previlesUpdateManyWithWhereWithoutTasksInput | task_previlesUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: task_previlesScalarWhereInput | task_previlesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasksInput
    upsert?: usersUpsertWithoutTasksInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTasksInput, usersUpdateWithoutTasksInput>, usersUncheckedUpdateWithoutTasksInput>
  }

  export type boardsUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<boardsCreateWithoutTasksInput, boardsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: boardsCreateOrConnectWithoutTasksInput
    upsert?: boardsUpsertWithoutTasksInput
    connect?: boardsWhereUniqueInput
    update?: XOR<XOR<boardsUpdateToOneWithWhereWithoutTasksInput, boardsUpdateWithoutTasksInput>, boardsUncheckedUpdateWithoutTasksInput>
  }

  export type stagesUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<stagesCreateWithoutTasksInput, stagesUncheckedCreateWithoutTasksInput>
    connectOrCreate?: stagesCreateOrConnectWithoutTasksInput
    upsert?: stagesUpsertWithoutTasksInput
    connect?: stagesWhereUniqueInput
    update?: XOR<XOR<stagesUpdateToOneWithWhereWithoutTasksInput, stagesUpdateWithoutTasksInput>, stagesUncheckedUpdateWithoutTasksInput>
  }

  export type messagesUncheckedUpdateManyWithoutTasksNestedInput = {
    create?: XOR<messagesCreateWithoutTasksInput, messagesUncheckedCreateWithoutTasksInput> | messagesCreateWithoutTasksInput[] | messagesUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutTasksInput | messagesCreateOrConnectWithoutTasksInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutTasksInput | messagesUpsertWithWhereUniqueWithoutTasksInput[]
    createMany?: messagesCreateManyTasksInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutTasksInput | messagesUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutTasksInput | messagesUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type task_previlesUncheckedUpdateManyWithoutTasksNestedInput = {
    create?: XOR<task_previlesCreateWithoutTasksInput, task_previlesUncheckedCreateWithoutTasksInput> | task_previlesCreateWithoutTasksInput[] | task_previlesUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: task_previlesCreateOrConnectWithoutTasksInput | task_previlesCreateOrConnectWithoutTasksInput[]
    upsert?: task_previlesUpsertWithWhereUniqueWithoutTasksInput | task_previlesUpsertWithWhereUniqueWithoutTasksInput[]
    createMany?: task_previlesCreateManyTasksInputEnvelope
    set?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
    disconnect?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
    delete?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
    connect?: task_previlesWhereUniqueInput | task_previlesWhereUniqueInput[]
    update?: task_previlesUpdateWithWhereUniqueWithoutTasksInput | task_previlesUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: task_previlesUpdateManyWithWhereWithoutTasksInput | task_previlesUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: task_previlesScalarWhereInput | task_previlesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutMessagesInput = {
    create?: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutMessagesInput
    connect?: usersWhereUniqueInput
  }

  export type tasksCreateNestedOneWithoutMessagesInput = {
    create?: XOR<tasksCreateWithoutMessagesInput, tasksUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: tasksCreateOrConnectWithoutMessagesInput
    connect?: tasksWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutMessagesInput
    upsert?: usersUpsertWithoutMessagesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMessagesInput, usersUpdateWithoutMessagesInput>, usersUncheckedUpdateWithoutMessagesInput>
  }

  export type tasksUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<tasksCreateWithoutMessagesInput, tasksUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: tasksCreateOrConnectWithoutMessagesInput
    upsert?: tasksUpsertWithoutMessagesInput
    connect?: tasksWhereUniqueInput
    update?: XOR<XOR<tasksUpdateToOneWithWhereWithoutMessagesInput, tasksUpdateWithoutMessagesInput>, tasksUncheckedUpdateWithoutMessagesInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type boardsCreateWithoutUsersInput = {
    title: string
    description?: string | null
    create_at: Date | string
    stages?: stagesCreateNestedManyWithoutBoardsInput
    tasks?: tasksCreateNestedManyWithoutBoardsInput
    invites?: invitesCreateNestedManyWithoutBoardsInput
  }

  export type boardsUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    description?: string | null
    create_at: Date | string
    stages?: stagesUncheckedCreateNestedManyWithoutBoardsInput
    tasks?: tasksUncheckedCreateNestedManyWithoutBoardsInput
    invites?: invitesUncheckedCreateNestedManyWithoutBoardsInput
  }

  export type boardsCreateOrConnectWithoutUsersInput = {
    where: boardsWhereUniqueInput
    create: XOR<boardsCreateWithoutUsersInput, boardsUncheckedCreateWithoutUsersInput>
  }

  export type boardsCreateManyUsersInputEnvelope = {
    data: boardsCreateManyUsersInput | boardsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type invitesCreateWithoutUsersInput = {
    message?: string
    create_at: Date | string
    boards: boardsCreateNestedOneWithoutInvitesInput
  }

  export type invitesUncheckedCreateWithoutUsersInput = {
    id?: number
    board_id: number
    message?: string
    create_at: Date | string
  }

  export type invitesCreateOrConnectWithoutUsersInput = {
    where: invitesWhereUniqueInput
    create: XOR<invitesCreateWithoutUsersInput, invitesUncheckedCreateWithoutUsersInput>
  }

  export type invitesCreateManyUsersInputEnvelope = {
    data: invitesCreateManyUsersInput | invitesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type tasksCreateWithoutUsersInput = {
    title: string
    description?: string | null
    due_date: Date | string
    messages?: messagesCreateNestedManyWithoutTasksInput
    task_priviles?: task_previlesCreateNestedManyWithoutTasksInput
    boards: boardsCreateNestedOneWithoutTasksInput
    stages: stagesCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutUsersInput = {
    id?: number
    board_id: number
    stage_id: number
    title: string
    description?: string | null
    due_date: Date | string
    messages?: messagesUncheckedCreateNestedManyWithoutTasksInput
    task_priviles?: task_previlesUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutUsersInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput>
  }

  export type tasksCreateManyUsersInputEnvelope = {
    data: tasksCreateManyUsersInput | tasksCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutUsersInput = {
    message: string
    like_count?: number
    tasks: tasksCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutUsersInput = {
    id?: number
    task_id: number
    message: string
    like_count?: number
  }

  export type messagesCreateOrConnectWithoutUsersInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput>
  }

  export type messagesCreateManyUsersInputEnvelope = {
    data: messagesCreateManyUsersInput | messagesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type task_previlesCreateWithoutUsersInput = {
    add_time: Date | string
    tasks: tasksCreateNestedOneWithoutTask_privilesInput
  }

  export type task_previlesUncheckedCreateWithoutUsersInput = {
    id?: number
    task_id: number
    add_time: Date | string
  }

  export type task_previlesCreateOrConnectWithoutUsersInput = {
    where: task_previlesWhereUniqueInput
    create: XOR<task_previlesCreateWithoutUsersInput, task_previlesUncheckedCreateWithoutUsersInput>
  }

  export type task_previlesCreateManyUsersInputEnvelope = {
    data: task_previlesCreateManyUsersInput | task_previlesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type boardsUpsertWithWhereUniqueWithoutUsersInput = {
    where: boardsWhereUniqueInput
    update: XOR<boardsUpdateWithoutUsersInput, boardsUncheckedUpdateWithoutUsersInput>
    create: XOR<boardsCreateWithoutUsersInput, boardsUncheckedCreateWithoutUsersInput>
  }

  export type boardsUpdateWithWhereUniqueWithoutUsersInput = {
    where: boardsWhereUniqueInput
    data: XOR<boardsUpdateWithoutUsersInput, boardsUncheckedUpdateWithoutUsersInput>
  }

  export type boardsUpdateManyWithWhereWithoutUsersInput = {
    where: boardsScalarWhereInput
    data: XOR<boardsUpdateManyMutationInput, boardsUncheckedUpdateManyWithoutUsersInput>
  }

  export type boardsScalarWhereInput = {
    AND?: boardsScalarWhereInput | boardsScalarWhereInput[]
    OR?: boardsScalarWhereInput[]
    NOT?: boardsScalarWhereInput | boardsScalarWhereInput[]
    id?: IntFilter<"boards"> | number
    user_id?: IntFilter<"boards"> | number
    title?: StringFilter<"boards"> | string
    description?: StringNullableFilter<"boards"> | string | null
    create_at?: DateTimeFilter<"boards"> | Date | string
  }

  export type invitesUpsertWithWhereUniqueWithoutUsersInput = {
    where: invitesWhereUniqueInput
    update: XOR<invitesUpdateWithoutUsersInput, invitesUncheckedUpdateWithoutUsersInput>
    create: XOR<invitesCreateWithoutUsersInput, invitesUncheckedCreateWithoutUsersInput>
  }

  export type invitesUpdateWithWhereUniqueWithoutUsersInput = {
    where: invitesWhereUniqueInput
    data: XOR<invitesUpdateWithoutUsersInput, invitesUncheckedUpdateWithoutUsersInput>
  }

  export type invitesUpdateManyWithWhereWithoutUsersInput = {
    where: invitesScalarWhereInput
    data: XOR<invitesUpdateManyMutationInput, invitesUncheckedUpdateManyWithoutUsersInput>
  }

  export type invitesScalarWhereInput = {
    AND?: invitesScalarWhereInput | invitesScalarWhereInput[]
    OR?: invitesScalarWhereInput[]
    NOT?: invitesScalarWhereInput | invitesScalarWhereInput[]
    id?: IntFilter<"invites"> | number
    user_id?: IntFilter<"invites"> | number
    board_id?: IntFilter<"invites"> | number
    message?: StringFilter<"invites"> | string
    create_at?: DateTimeFilter<"invites"> | Date | string
  }

  export type tasksUpsertWithWhereUniqueWithoutUsersInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutUsersInput, tasksUncheckedUpdateWithoutUsersInput>
    create: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutUsersInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutUsersInput, tasksUncheckedUpdateWithoutUsersInput>
  }

  export type tasksUpdateManyWithWhereWithoutUsersInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutUsersInput>
  }

  export type tasksScalarWhereInput = {
    AND?: tasksScalarWhereInput | tasksScalarWhereInput[]
    OR?: tasksScalarWhereInput[]
    NOT?: tasksScalarWhereInput | tasksScalarWhereInput[]
    id?: IntFilter<"tasks"> | number
    user_id?: IntFilter<"tasks"> | number
    board_id?: IntFilter<"tasks"> | number
    stage_id?: IntFilter<"tasks"> | number
    title?: StringFilter<"tasks"> | string
    description?: StringNullableFilter<"tasks"> | string | null
    due_date?: DateTimeFilter<"tasks"> | Date | string
  }

  export type messagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutUsersInput, messagesUncheckedUpdateWithoutUsersInput>
    create: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutUsersInput, messagesUncheckedUpdateWithoutUsersInput>
  }

  export type messagesUpdateManyWithWhereWithoutUsersInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutUsersInput>
  }

  export type messagesScalarWhereInput = {
    AND?: messagesScalarWhereInput | messagesScalarWhereInput[]
    OR?: messagesScalarWhereInput[]
    NOT?: messagesScalarWhereInput | messagesScalarWhereInput[]
    id?: IntFilter<"messages"> | number
    user_id?: IntFilter<"messages"> | number
    task_id?: IntFilter<"messages"> | number
    message?: StringFilter<"messages"> | string
    like_count?: IntFilter<"messages"> | number
  }

  export type task_previlesUpsertWithWhereUniqueWithoutUsersInput = {
    where: task_previlesWhereUniqueInput
    update: XOR<task_previlesUpdateWithoutUsersInput, task_previlesUncheckedUpdateWithoutUsersInput>
    create: XOR<task_previlesCreateWithoutUsersInput, task_previlesUncheckedCreateWithoutUsersInput>
  }

  export type task_previlesUpdateWithWhereUniqueWithoutUsersInput = {
    where: task_previlesWhereUniqueInput
    data: XOR<task_previlesUpdateWithoutUsersInput, task_previlesUncheckedUpdateWithoutUsersInput>
  }

  export type task_previlesUpdateManyWithWhereWithoutUsersInput = {
    where: task_previlesScalarWhereInput
    data: XOR<task_previlesUpdateManyMutationInput, task_previlesUncheckedUpdateManyWithoutUsersInput>
  }

  export type task_previlesScalarWhereInput = {
    AND?: task_previlesScalarWhereInput | task_previlesScalarWhereInput[]
    OR?: task_previlesScalarWhereInput[]
    NOT?: task_previlesScalarWhereInput | task_previlesScalarWhereInput[]
    id?: IntFilter<"task_previles"> | number
    task_id?: IntFilter<"task_previles"> | number
    user_id?: IntFilter<"task_previles"> | number
    add_time?: DateTimeFilter<"task_previles"> | Date | string
  }

  export type tasksCreateWithoutTask_privilesInput = {
    title: string
    description?: string | null
    due_date: Date | string
    messages?: messagesCreateNestedManyWithoutTasksInput
    users: usersCreateNestedOneWithoutTasksInput
    boards: boardsCreateNestedOneWithoutTasksInput
    stages: stagesCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutTask_privilesInput = {
    id?: number
    user_id: number
    board_id: number
    stage_id: number
    title: string
    description?: string | null
    due_date: Date | string
    messages?: messagesUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutTask_privilesInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutTask_privilesInput, tasksUncheckedCreateWithoutTask_privilesInput>
  }

  export type usersCreateWithoutTask_privilesInput = {
    username: string
    password: string
    boards?: boardsCreateNestedManyWithoutUsersInput
    invites?: invitesCreateNestedManyWithoutUsersInput
    tasks?: tasksCreateNestedManyWithoutUsersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTask_privilesInput = {
    id?: number
    username: string
    password: string
    boards?: boardsUncheckedCreateNestedManyWithoutUsersInput
    invites?: invitesUncheckedCreateNestedManyWithoutUsersInput
    tasks?: tasksUncheckedCreateNestedManyWithoutUsersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTask_privilesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTask_privilesInput, usersUncheckedCreateWithoutTask_privilesInput>
  }

  export type tasksUpsertWithoutTask_privilesInput = {
    update: XOR<tasksUpdateWithoutTask_privilesInput, tasksUncheckedUpdateWithoutTask_privilesInput>
    create: XOR<tasksCreateWithoutTask_privilesInput, tasksUncheckedCreateWithoutTask_privilesInput>
    where?: tasksWhereInput
  }

  export type tasksUpdateToOneWithWhereWithoutTask_privilesInput = {
    where?: tasksWhereInput
    data: XOR<tasksUpdateWithoutTask_privilesInput, tasksUncheckedUpdateWithoutTask_privilesInput>
  }

  export type tasksUpdateWithoutTask_privilesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messagesUpdateManyWithoutTasksNestedInput
    users?: usersUpdateOneRequiredWithoutTasksNestedInput
    boards?: boardsUpdateOneRequiredWithoutTasksNestedInput
    stages?: stagesUpdateOneRequiredWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutTask_privilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    board_id?: IntFieldUpdateOperationsInput | number
    stage_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messagesUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type usersUpsertWithoutTask_privilesInput = {
    update: XOR<usersUpdateWithoutTask_privilesInput, usersUncheckedUpdateWithoutTask_privilesInput>
    create: XOR<usersCreateWithoutTask_privilesInput, usersUncheckedCreateWithoutTask_privilesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTask_privilesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTask_privilesInput, usersUncheckedUpdateWithoutTask_privilesInput>
  }

  export type usersUpdateWithoutTask_privilesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    boards?: boardsUpdateManyWithoutUsersNestedInput
    invites?: invitesUpdateManyWithoutUsersNestedInput
    tasks?: tasksUpdateManyWithoutUsersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTask_privilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    boards?: boardsUncheckedUpdateManyWithoutUsersNestedInput
    invites?: invitesUncheckedUpdateManyWithoutUsersNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutUsersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type stagesCreateWithoutBoardsInput = {
    name: string
    tasks?: tasksCreateNestedManyWithoutStagesInput
  }

  export type stagesUncheckedCreateWithoutBoardsInput = {
    id?: number
    name: string
    tasks?: tasksUncheckedCreateNestedManyWithoutStagesInput
  }

  export type stagesCreateOrConnectWithoutBoardsInput = {
    where: stagesWhereUniqueInput
    create: XOR<stagesCreateWithoutBoardsInput, stagesUncheckedCreateWithoutBoardsInput>
  }

  export type stagesCreateManyBoardsInputEnvelope = {
    data: stagesCreateManyBoardsInput | stagesCreateManyBoardsInput[]
    skipDuplicates?: boolean
  }

  export type tasksCreateWithoutBoardsInput = {
    title: string
    description?: string | null
    due_date: Date | string
    messages?: messagesCreateNestedManyWithoutTasksInput
    task_priviles?: task_previlesCreateNestedManyWithoutTasksInput
    users: usersCreateNestedOneWithoutTasksInput
    stages: stagesCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutBoardsInput = {
    id?: number
    user_id: number
    stage_id: number
    title: string
    description?: string | null
    due_date: Date | string
    messages?: messagesUncheckedCreateNestedManyWithoutTasksInput
    task_priviles?: task_previlesUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutBoardsInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutBoardsInput, tasksUncheckedCreateWithoutBoardsInput>
  }

  export type tasksCreateManyBoardsInputEnvelope = {
    data: tasksCreateManyBoardsInput | tasksCreateManyBoardsInput[]
    skipDuplicates?: boolean
  }

  export type invitesCreateWithoutBoardsInput = {
    message?: string
    create_at: Date | string
    users: usersCreateNestedOneWithoutInvitesInput
  }

  export type invitesUncheckedCreateWithoutBoardsInput = {
    id?: number
    user_id: number
    message?: string
    create_at: Date | string
  }

  export type invitesCreateOrConnectWithoutBoardsInput = {
    where: invitesWhereUniqueInput
    create: XOR<invitesCreateWithoutBoardsInput, invitesUncheckedCreateWithoutBoardsInput>
  }

  export type invitesCreateManyBoardsInputEnvelope = {
    data: invitesCreateManyBoardsInput | invitesCreateManyBoardsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutBoardsInput = {
    username: string
    password: string
    invites?: invitesCreateNestedManyWithoutUsersInput
    tasks?: tasksCreateNestedManyWithoutUsersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    task_priviles?: task_previlesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutBoardsInput = {
    id?: number
    username: string
    password: string
    invites?: invitesUncheckedCreateNestedManyWithoutUsersInput
    tasks?: tasksUncheckedCreateNestedManyWithoutUsersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    task_priviles?: task_previlesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutBoardsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBoardsInput, usersUncheckedCreateWithoutBoardsInput>
  }

  export type stagesUpsertWithWhereUniqueWithoutBoardsInput = {
    where: stagesWhereUniqueInput
    update: XOR<stagesUpdateWithoutBoardsInput, stagesUncheckedUpdateWithoutBoardsInput>
    create: XOR<stagesCreateWithoutBoardsInput, stagesUncheckedCreateWithoutBoardsInput>
  }

  export type stagesUpdateWithWhereUniqueWithoutBoardsInput = {
    where: stagesWhereUniqueInput
    data: XOR<stagesUpdateWithoutBoardsInput, stagesUncheckedUpdateWithoutBoardsInput>
  }

  export type stagesUpdateManyWithWhereWithoutBoardsInput = {
    where: stagesScalarWhereInput
    data: XOR<stagesUpdateManyMutationInput, stagesUncheckedUpdateManyWithoutBoardsInput>
  }

  export type stagesScalarWhereInput = {
    AND?: stagesScalarWhereInput | stagesScalarWhereInput[]
    OR?: stagesScalarWhereInput[]
    NOT?: stagesScalarWhereInput | stagesScalarWhereInput[]
    id?: IntFilter<"stages"> | number
    board_id?: IntFilter<"stages"> | number
    name?: StringFilter<"stages"> | string
  }

  export type tasksUpsertWithWhereUniqueWithoutBoardsInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutBoardsInput, tasksUncheckedUpdateWithoutBoardsInput>
    create: XOR<tasksCreateWithoutBoardsInput, tasksUncheckedCreateWithoutBoardsInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutBoardsInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutBoardsInput, tasksUncheckedUpdateWithoutBoardsInput>
  }

  export type tasksUpdateManyWithWhereWithoutBoardsInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutBoardsInput>
  }

  export type invitesUpsertWithWhereUniqueWithoutBoardsInput = {
    where: invitesWhereUniqueInput
    update: XOR<invitesUpdateWithoutBoardsInput, invitesUncheckedUpdateWithoutBoardsInput>
    create: XOR<invitesCreateWithoutBoardsInput, invitesUncheckedCreateWithoutBoardsInput>
  }

  export type invitesUpdateWithWhereUniqueWithoutBoardsInput = {
    where: invitesWhereUniqueInput
    data: XOR<invitesUpdateWithoutBoardsInput, invitesUncheckedUpdateWithoutBoardsInput>
  }

  export type invitesUpdateManyWithWhereWithoutBoardsInput = {
    where: invitesScalarWhereInput
    data: XOR<invitesUpdateManyMutationInput, invitesUncheckedUpdateManyWithoutBoardsInput>
  }

  export type usersUpsertWithoutBoardsInput = {
    update: XOR<usersUpdateWithoutBoardsInput, usersUncheckedUpdateWithoutBoardsInput>
    create: XOR<usersCreateWithoutBoardsInput, usersUncheckedCreateWithoutBoardsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBoardsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBoardsInput, usersUncheckedUpdateWithoutBoardsInput>
  }

  export type usersUpdateWithoutBoardsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    invites?: invitesUpdateManyWithoutUsersNestedInput
    tasks?: tasksUpdateManyWithoutUsersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    task_priviles?: task_previlesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutBoardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    invites?: invitesUncheckedUpdateManyWithoutUsersNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutUsersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    task_priviles?: task_previlesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type tasksCreateWithoutStagesInput = {
    title: string
    description?: string | null
    due_date: Date | string
    messages?: messagesCreateNestedManyWithoutTasksInput
    task_priviles?: task_previlesCreateNestedManyWithoutTasksInput
    users: usersCreateNestedOneWithoutTasksInput
    boards: boardsCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutStagesInput = {
    id?: number
    user_id: number
    board_id: number
    title: string
    description?: string | null
    due_date: Date | string
    messages?: messagesUncheckedCreateNestedManyWithoutTasksInput
    task_priviles?: task_previlesUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutStagesInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutStagesInput, tasksUncheckedCreateWithoutStagesInput>
  }

  export type tasksCreateManyStagesInputEnvelope = {
    data: tasksCreateManyStagesInput | tasksCreateManyStagesInput[]
    skipDuplicates?: boolean
  }

  export type boardsCreateWithoutStagesInput = {
    title: string
    description?: string | null
    create_at: Date | string
    tasks?: tasksCreateNestedManyWithoutBoardsInput
    invites?: invitesCreateNestedManyWithoutBoardsInput
    users: usersCreateNestedOneWithoutBoardsInput
  }

  export type boardsUncheckedCreateWithoutStagesInput = {
    id?: number
    user_id: number
    title: string
    description?: string | null
    create_at: Date | string
    tasks?: tasksUncheckedCreateNestedManyWithoutBoardsInput
    invites?: invitesUncheckedCreateNestedManyWithoutBoardsInput
  }

  export type boardsCreateOrConnectWithoutStagesInput = {
    where: boardsWhereUniqueInput
    create: XOR<boardsCreateWithoutStagesInput, boardsUncheckedCreateWithoutStagesInput>
  }

  export type tasksUpsertWithWhereUniqueWithoutStagesInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutStagesInput, tasksUncheckedUpdateWithoutStagesInput>
    create: XOR<tasksCreateWithoutStagesInput, tasksUncheckedCreateWithoutStagesInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutStagesInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutStagesInput, tasksUncheckedUpdateWithoutStagesInput>
  }

  export type tasksUpdateManyWithWhereWithoutStagesInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutStagesInput>
  }

  export type boardsUpsertWithoutStagesInput = {
    update: XOR<boardsUpdateWithoutStagesInput, boardsUncheckedUpdateWithoutStagesInput>
    create: XOR<boardsCreateWithoutStagesInput, boardsUncheckedCreateWithoutStagesInput>
    where?: boardsWhereInput
  }

  export type boardsUpdateToOneWithWhereWithoutStagesInput = {
    where?: boardsWhereInput
    data: XOR<boardsUpdateWithoutStagesInput, boardsUncheckedUpdateWithoutStagesInput>
  }

  export type boardsUpdateWithoutStagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: tasksUpdateManyWithoutBoardsNestedInput
    invites?: invitesUpdateManyWithoutBoardsNestedInput
    users?: usersUpdateOneRequiredWithoutBoardsNestedInput
  }

  export type boardsUncheckedUpdateWithoutStagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: tasksUncheckedUpdateManyWithoutBoardsNestedInput
    invites?: invitesUncheckedUpdateManyWithoutBoardsNestedInput
  }

  export type usersCreateWithoutInvitesInput = {
    username: string
    password: string
    boards?: boardsCreateNestedManyWithoutUsersInput
    tasks?: tasksCreateNestedManyWithoutUsersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    task_priviles?: task_previlesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutInvitesInput = {
    id?: number
    username: string
    password: string
    boards?: boardsUncheckedCreateNestedManyWithoutUsersInput
    tasks?: tasksUncheckedCreateNestedManyWithoutUsersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    task_priviles?: task_previlesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutInvitesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutInvitesInput, usersUncheckedCreateWithoutInvitesInput>
  }

  export type boardsCreateWithoutInvitesInput = {
    title: string
    description?: string | null
    create_at: Date | string
    stages?: stagesCreateNestedManyWithoutBoardsInput
    tasks?: tasksCreateNestedManyWithoutBoardsInput
    users: usersCreateNestedOneWithoutBoardsInput
  }

  export type boardsUncheckedCreateWithoutInvitesInput = {
    id?: number
    user_id: number
    title: string
    description?: string | null
    create_at: Date | string
    stages?: stagesUncheckedCreateNestedManyWithoutBoardsInput
    tasks?: tasksUncheckedCreateNestedManyWithoutBoardsInput
  }

  export type boardsCreateOrConnectWithoutInvitesInput = {
    where: boardsWhereUniqueInput
    create: XOR<boardsCreateWithoutInvitesInput, boardsUncheckedCreateWithoutInvitesInput>
  }

  export type usersUpsertWithoutInvitesInput = {
    update: XOR<usersUpdateWithoutInvitesInput, usersUncheckedUpdateWithoutInvitesInput>
    create: XOR<usersCreateWithoutInvitesInput, usersUncheckedCreateWithoutInvitesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutInvitesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutInvitesInput, usersUncheckedUpdateWithoutInvitesInput>
  }

  export type usersUpdateWithoutInvitesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    boards?: boardsUpdateManyWithoutUsersNestedInput
    tasks?: tasksUpdateManyWithoutUsersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    task_priviles?: task_previlesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutInvitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    boards?: boardsUncheckedUpdateManyWithoutUsersNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutUsersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    task_priviles?: task_previlesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type boardsUpsertWithoutInvitesInput = {
    update: XOR<boardsUpdateWithoutInvitesInput, boardsUncheckedUpdateWithoutInvitesInput>
    create: XOR<boardsCreateWithoutInvitesInput, boardsUncheckedCreateWithoutInvitesInput>
    where?: boardsWhereInput
  }

  export type boardsUpdateToOneWithWhereWithoutInvitesInput = {
    where?: boardsWhereInput
    data: XOR<boardsUpdateWithoutInvitesInput, boardsUncheckedUpdateWithoutInvitesInput>
  }

  export type boardsUpdateWithoutInvitesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: stagesUpdateManyWithoutBoardsNestedInput
    tasks?: tasksUpdateManyWithoutBoardsNestedInput
    users?: usersUpdateOneRequiredWithoutBoardsNestedInput
  }

  export type boardsUncheckedUpdateWithoutInvitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: stagesUncheckedUpdateManyWithoutBoardsNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutBoardsNestedInput
  }

  export type messagesCreateWithoutTasksInput = {
    message: string
    like_count?: number
    users: usersCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutTasksInput = {
    id?: number
    user_id: number
    message: string
    like_count?: number
  }

  export type messagesCreateOrConnectWithoutTasksInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutTasksInput, messagesUncheckedCreateWithoutTasksInput>
  }

  export type messagesCreateManyTasksInputEnvelope = {
    data: messagesCreateManyTasksInput | messagesCreateManyTasksInput[]
    skipDuplicates?: boolean
  }

  export type task_previlesCreateWithoutTasksInput = {
    add_time: Date | string
    users: usersCreateNestedOneWithoutTask_privilesInput
  }

  export type task_previlesUncheckedCreateWithoutTasksInput = {
    id?: number
    user_id: number
    add_time: Date | string
  }

  export type task_previlesCreateOrConnectWithoutTasksInput = {
    where: task_previlesWhereUniqueInput
    create: XOR<task_previlesCreateWithoutTasksInput, task_previlesUncheckedCreateWithoutTasksInput>
  }

  export type task_previlesCreateManyTasksInputEnvelope = {
    data: task_previlesCreateManyTasksInput | task_previlesCreateManyTasksInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutTasksInput = {
    username: string
    password: string
    boards?: boardsCreateNestedManyWithoutUsersInput
    invites?: invitesCreateNestedManyWithoutUsersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    task_priviles?: task_previlesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTasksInput = {
    id?: number
    username: string
    password: string
    boards?: boardsUncheckedCreateNestedManyWithoutUsersInput
    invites?: invitesUncheckedCreateNestedManyWithoutUsersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    task_priviles?: task_previlesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTasksInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
  }

  export type boardsCreateWithoutTasksInput = {
    title: string
    description?: string | null
    create_at: Date | string
    stages?: stagesCreateNestedManyWithoutBoardsInput
    invites?: invitesCreateNestedManyWithoutBoardsInput
    users: usersCreateNestedOneWithoutBoardsInput
  }

  export type boardsUncheckedCreateWithoutTasksInput = {
    id?: number
    user_id: number
    title: string
    description?: string | null
    create_at: Date | string
    stages?: stagesUncheckedCreateNestedManyWithoutBoardsInput
    invites?: invitesUncheckedCreateNestedManyWithoutBoardsInput
  }

  export type boardsCreateOrConnectWithoutTasksInput = {
    where: boardsWhereUniqueInput
    create: XOR<boardsCreateWithoutTasksInput, boardsUncheckedCreateWithoutTasksInput>
  }

  export type stagesCreateWithoutTasksInput = {
    name: string
    boards: boardsCreateNestedOneWithoutStagesInput
  }

  export type stagesUncheckedCreateWithoutTasksInput = {
    id?: number
    board_id: number
    name: string
  }

  export type stagesCreateOrConnectWithoutTasksInput = {
    where: stagesWhereUniqueInput
    create: XOR<stagesCreateWithoutTasksInput, stagesUncheckedCreateWithoutTasksInput>
  }

  export type messagesUpsertWithWhereUniqueWithoutTasksInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutTasksInput, messagesUncheckedUpdateWithoutTasksInput>
    create: XOR<messagesCreateWithoutTasksInput, messagesUncheckedCreateWithoutTasksInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutTasksInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutTasksInput, messagesUncheckedUpdateWithoutTasksInput>
  }

  export type messagesUpdateManyWithWhereWithoutTasksInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutTasksInput>
  }

  export type task_previlesUpsertWithWhereUniqueWithoutTasksInput = {
    where: task_previlesWhereUniqueInput
    update: XOR<task_previlesUpdateWithoutTasksInput, task_previlesUncheckedUpdateWithoutTasksInput>
    create: XOR<task_previlesCreateWithoutTasksInput, task_previlesUncheckedCreateWithoutTasksInput>
  }

  export type task_previlesUpdateWithWhereUniqueWithoutTasksInput = {
    where: task_previlesWhereUniqueInput
    data: XOR<task_previlesUpdateWithoutTasksInput, task_previlesUncheckedUpdateWithoutTasksInput>
  }

  export type task_previlesUpdateManyWithWhereWithoutTasksInput = {
    where: task_previlesScalarWhereInput
    data: XOR<task_previlesUpdateManyMutationInput, task_previlesUncheckedUpdateManyWithoutTasksInput>
  }

  export type usersUpsertWithoutTasksInput = {
    update: XOR<usersUpdateWithoutTasksInput, usersUncheckedUpdateWithoutTasksInput>
    create: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTasksInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTasksInput, usersUncheckedUpdateWithoutTasksInput>
  }

  export type usersUpdateWithoutTasksInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    boards?: boardsUpdateManyWithoutUsersNestedInput
    invites?: invitesUpdateManyWithoutUsersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    task_priviles?: task_previlesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    boards?: boardsUncheckedUpdateManyWithoutUsersNestedInput
    invites?: invitesUncheckedUpdateManyWithoutUsersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    task_priviles?: task_previlesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type boardsUpsertWithoutTasksInput = {
    update: XOR<boardsUpdateWithoutTasksInput, boardsUncheckedUpdateWithoutTasksInput>
    create: XOR<boardsCreateWithoutTasksInput, boardsUncheckedCreateWithoutTasksInput>
    where?: boardsWhereInput
  }

  export type boardsUpdateToOneWithWhereWithoutTasksInput = {
    where?: boardsWhereInput
    data: XOR<boardsUpdateWithoutTasksInput, boardsUncheckedUpdateWithoutTasksInput>
  }

  export type boardsUpdateWithoutTasksInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: stagesUpdateManyWithoutBoardsNestedInput
    invites?: invitesUpdateManyWithoutBoardsNestedInput
    users?: usersUpdateOneRequiredWithoutBoardsNestedInput
  }

  export type boardsUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: stagesUncheckedUpdateManyWithoutBoardsNestedInput
    invites?: invitesUncheckedUpdateManyWithoutBoardsNestedInput
  }

  export type stagesUpsertWithoutTasksInput = {
    update: XOR<stagesUpdateWithoutTasksInput, stagesUncheckedUpdateWithoutTasksInput>
    create: XOR<stagesCreateWithoutTasksInput, stagesUncheckedCreateWithoutTasksInput>
    where?: stagesWhereInput
  }

  export type stagesUpdateToOneWithWhereWithoutTasksInput = {
    where?: stagesWhereInput
    data: XOR<stagesUpdateWithoutTasksInput, stagesUncheckedUpdateWithoutTasksInput>
  }

  export type stagesUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    boards?: boardsUpdateOneRequiredWithoutStagesNestedInput
  }

  export type stagesUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    board_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateWithoutMessagesInput = {
    username: string
    password: string
    boards?: boardsCreateNestedManyWithoutUsersInput
    invites?: invitesCreateNestedManyWithoutUsersInput
    tasks?: tasksCreateNestedManyWithoutUsersInput
    task_priviles?: task_previlesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutMessagesInput = {
    id?: number
    username: string
    password: string
    boards?: boardsUncheckedCreateNestedManyWithoutUsersInput
    invites?: invitesUncheckedCreateNestedManyWithoutUsersInput
    tasks?: tasksUncheckedCreateNestedManyWithoutUsersInput
    task_priviles?: task_previlesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutMessagesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
  }

  export type tasksCreateWithoutMessagesInput = {
    title: string
    description?: string | null
    due_date: Date | string
    task_priviles?: task_previlesCreateNestedManyWithoutTasksInput
    users: usersCreateNestedOneWithoutTasksInput
    boards: boardsCreateNestedOneWithoutTasksInput
    stages: stagesCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutMessagesInput = {
    id?: number
    user_id: number
    board_id: number
    stage_id: number
    title: string
    description?: string | null
    due_date: Date | string
    task_priviles?: task_previlesUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutMessagesInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutMessagesInput, tasksUncheckedCreateWithoutMessagesInput>
  }

  export type usersUpsertWithoutMessagesInput = {
    update: XOR<usersUpdateWithoutMessagesInput, usersUncheckedUpdateWithoutMessagesInput>
    create: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMessagesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMessagesInput, usersUncheckedUpdateWithoutMessagesInput>
  }

  export type usersUpdateWithoutMessagesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    boards?: boardsUpdateManyWithoutUsersNestedInput
    invites?: invitesUpdateManyWithoutUsersNestedInput
    tasks?: tasksUpdateManyWithoutUsersNestedInput
    task_priviles?: task_previlesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    boards?: boardsUncheckedUpdateManyWithoutUsersNestedInput
    invites?: invitesUncheckedUpdateManyWithoutUsersNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutUsersNestedInput
    task_priviles?: task_previlesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type tasksUpsertWithoutMessagesInput = {
    update: XOR<tasksUpdateWithoutMessagesInput, tasksUncheckedUpdateWithoutMessagesInput>
    create: XOR<tasksCreateWithoutMessagesInput, tasksUncheckedCreateWithoutMessagesInput>
    where?: tasksWhereInput
  }

  export type tasksUpdateToOneWithWhereWithoutMessagesInput = {
    where?: tasksWhereInput
    data: XOR<tasksUpdateWithoutMessagesInput, tasksUncheckedUpdateWithoutMessagesInput>
  }

  export type tasksUpdateWithoutMessagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    task_priviles?: task_previlesUpdateManyWithoutTasksNestedInput
    users?: usersUpdateOneRequiredWithoutTasksNestedInput
    boards?: boardsUpdateOneRequiredWithoutTasksNestedInput
    stages?: stagesUpdateOneRequiredWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    board_id?: IntFieldUpdateOperationsInput | number
    stage_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    task_priviles?: task_previlesUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type boardsCreateManyUsersInput = {
    id?: number
    title: string
    description?: string | null
    create_at: Date | string
  }

  export type invitesCreateManyUsersInput = {
    id?: number
    board_id: number
    message?: string
    create_at: Date | string
  }

  export type tasksCreateManyUsersInput = {
    id?: number
    board_id: number
    stage_id: number
    title: string
    description?: string | null
    due_date: Date | string
  }

  export type messagesCreateManyUsersInput = {
    id?: number
    task_id: number
    message: string
    like_count?: number
  }

  export type task_previlesCreateManyUsersInput = {
    id?: number
    task_id: number
    add_time: Date | string
  }

  export type boardsUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: stagesUpdateManyWithoutBoardsNestedInput
    tasks?: tasksUpdateManyWithoutBoardsNestedInput
    invites?: invitesUpdateManyWithoutBoardsNestedInput
  }

  export type boardsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: stagesUncheckedUpdateManyWithoutBoardsNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutBoardsNestedInput
    invites?: invitesUncheckedUpdateManyWithoutBoardsNestedInput
  }

  export type boardsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invitesUpdateWithoutUsersInput = {
    message?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    boards?: boardsUpdateOneRequiredWithoutInvitesNestedInput
  }

  export type invitesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    board_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invitesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    board_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tasksUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messagesUpdateManyWithoutTasksNestedInput
    task_priviles?: task_previlesUpdateManyWithoutTasksNestedInput
    boards?: boardsUpdateOneRequiredWithoutTasksNestedInput
    stages?: stagesUpdateOneRequiredWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    board_id?: IntFieldUpdateOperationsInput | number
    stage_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messagesUncheckedUpdateManyWithoutTasksNestedInput
    task_priviles?: task_previlesUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    board_id?: IntFieldUpdateOperationsInput | number
    stage_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUpdateWithoutUsersInput = {
    message?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
    tasks?: tasksUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
  }

  export type messagesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
  }

  export type task_previlesUpdateWithoutUsersInput = {
    add_time?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: tasksUpdateOneRequiredWithoutTask_privilesNestedInput
  }

  export type task_previlesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    add_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type task_previlesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    add_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stagesCreateManyBoardsInput = {
    id?: number
    name: string
  }

  export type tasksCreateManyBoardsInput = {
    id?: number
    user_id: number
    stage_id: number
    title: string
    description?: string | null
    due_date: Date | string
  }

  export type invitesCreateManyBoardsInput = {
    id?: number
    user_id: number
    message?: string
    create_at: Date | string
  }

  export type stagesUpdateWithoutBoardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    tasks?: tasksUpdateManyWithoutStagesNestedInput
  }

  export type stagesUncheckedUpdateWithoutBoardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tasks?: tasksUncheckedUpdateManyWithoutStagesNestedInput
  }

  export type stagesUncheckedUpdateManyWithoutBoardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type tasksUpdateWithoutBoardsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messagesUpdateManyWithoutTasksNestedInput
    task_priviles?: task_previlesUpdateManyWithoutTasksNestedInput
    users?: usersUpdateOneRequiredWithoutTasksNestedInput
    stages?: stagesUpdateOneRequiredWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutBoardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    stage_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messagesUncheckedUpdateManyWithoutTasksNestedInput
    task_priviles?: task_previlesUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateManyWithoutBoardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    stage_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invitesUpdateWithoutBoardsInput = {
    message?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutInvitesNestedInput
  }

  export type invitesUncheckedUpdateWithoutBoardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invitesUncheckedUpdateManyWithoutBoardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tasksCreateManyStagesInput = {
    id?: number
    user_id: number
    board_id: number
    title: string
    description?: string | null
    due_date: Date | string
  }

  export type tasksUpdateWithoutStagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messagesUpdateManyWithoutTasksNestedInput
    task_priviles?: task_previlesUpdateManyWithoutTasksNestedInput
    users?: usersUpdateOneRequiredWithoutTasksNestedInput
    boards?: boardsUpdateOneRequiredWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutStagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    board_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messagesUncheckedUpdateManyWithoutTasksNestedInput
    task_priviles?: task_previlesUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateManyWithoutStagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    board_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesCreateManyTasksInput = {
    id?: number
    user_id: number
    message: string
    like_count?: number
  }

  export type task_previlesCreateManyTasksInput = {
    id?: number
    user_id: number
    add_time: Date | string
  }

  export type messagesUpdateWithoutTasksInput = {
    message?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
  }

  export type messagesUncheckedUpdateManyWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    like_count?: IntFieldUpdateOperationsInput | number
  }

  export type task_previlesUpdateWithoutTasksInput = {
    add_time?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutTask_privilesNestedInput
  }

  export type task_previlesUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    add_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type task_previlesUncheckedUpdateManyWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    add_time?: DateTimeFieldUpdateOperationsInput | Date | string
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