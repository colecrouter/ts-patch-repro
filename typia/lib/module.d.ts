import { IJsonApplication } from "./schemas/IJsonApplication";
import { Atomic } from "./typings/Atomic";
import { CustomValidatorMap } from "./CustomValidatorMap";
import { IRandomGenerator } from "./IRandomGenerator";
import { IValidation } from "./IValidation";
import { Primitive } from "./Primitive";
export * from "./schemas/IJsonApplication";
export * from "./schemas/IJsonComponents";
export * from "./schemas/IJsonSchema";
export * from "./IRandomGenerator";
export * from "./IValidation";
export * from "./Primitive";
export * from "./TypeGuardError";
/**
 * Asserts a value type.
 *
 * Asserts a parametric value type and throws a {@link TypeGuardError} with detailed
 * reason, if the parametric value is not following the type `T`. Otherwise, the
 * value is following the type `T`, just input parameter would be returned.
 *
 * If what you want is not asserting but just knowing whether the parametric value is
 * following the type `T` or not, you can choose the {@link is} function instead.
 * Otherwise you want to know all the errors, {@link validate} is the way to go.
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link assertEquals} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be asserted
 * @returns Parametric input value
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function assert<T>(input: T): T;
/**
 * Asserts a value type.
 *
 * Asserts a parametric value type and throws a {@link TypeGuardError} with detailed
 * reason, if the parametric value is not following the type `T`. Otherwise, the
 * value is following the type `T`, just input parameter would be returned.
 *
 * If what you want is not asserting but just knowing whether the parametric value is
 * following the type `T` or not, you can choose the {@link is} function instead.
 * Otherwise, you want to know all the errors, {@link validate} is the way to go.
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link assertEquals} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be asserted
 * @returns Parametric input value casted as `T`
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function assert<T>(input: unknown): T;
/**
 * Asserts a value type.
 *
 * Duplicated function of {@link assert} for `typescript-is` users.
 *
 * @template T Type of the input value
 * @param input A value to be asserted
 * @returns Parametric input value
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @deprecated
 */
export declare function assertType<T>(input: T): T;
/**
 * Asserts a value type.
 *
 * Duplicated function of {@link assert} for `typescript-is` users.
 *
 * @template T Type of the input value
 * @param input A value to be asserted
 * @returns Parametric input value
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @deprecated
 */
export declare function assertType<T>(input: unknown): T;
/**
 * Tests a value type.
 *
 * Tests a parametric value type and returns whether it's following the type `T` or not.
 * If the parametric value is matched with the type `T`, `true` value would be returned.
 * Otherwise, the parametric value is not following the type `T`, `false` value would be
 * returned.
 *
 * If what you want is not just knowing whether the parametric value is following the
 * type `T` or not, but throwing an exception with detailed reason, you can choose
 * {@link assert} function instead. Also, if you want to know all the errors with
 * detailed reasons, {@link validate} function would be useful.
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link equals} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be tested
 * @returns Whether the parametric value is following the type `T` or not
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function is<T>(input: T): input is T;
/**
 * Tests a value type.
 *
 * Tests a parametric value type and returns whether it's following the type `T` or not.
 * If the parametric value is matched with the type `T`, `true` value would be returned.
 * Otherwise, the parametric value is not following the type `T`, `false` value would be
 * returned.
 *
 * If what you want is not just knowing whether the parametric value is following the
 * type `T` or not, but throwing an exception with detailed reason, you can choose
 * {@link assert} function instead. Also, if you want to know all the errors with
 * detailed reasons, {@link validate} function would be useful.
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link equals} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be tested
 * @returns Whether the parametric value is following the type `T` or not
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function is<T>(input: unknown): input is T;
/**
 * Validates a value type.
 *
 * Validates a parametric value type and archives all the type errors into an
 * {@link IValidation.errors} array, if the parametric value is not following the
 * type `T`. Of course, if the parametric value is following the type `T`, the
 * {@link IValidation.errors} array would be empty and {@link IValidation.success}
 * would have the `true` value.
 *
 * If what you want is not finding all the error, but asserting the parametric value
 * type with exception throwing, you can choose {@link assert} function instead.
 * Otherwise, you just want to know whether the parametric value is matched with the
 * type `T`, {@link is} function is the way to go.
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link validateEquals} function instead.
 *
 * @template Type of the input value
 * @param input A value to be validated
 * @returns Validation result
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function validate<T>(input: T): IValidation<T>;
/**
 * Validates a value type.
 *
 * Validates a parametric value type and archives all the type errors into an
 * {@link IValidation.errors} array, if the parametric value is not following the
 * type `T`. Of course, if the parametric value is following the type `T`, the
 * {@link IValidation.errors} array would be empty and {@link IValidation.success}
 * would have the `true` value.
 *
 * If what you want is not finding all the error, but asserting the parametric value
 * type with exception throwing, you can choose {@link assert} function instead.
 * Otherwise, you just want to know whether the parametric value is matched with the
 * type `T`, {@link is} function is the way to go.
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link validateEquals} function instead.
 *
 * @template Type of the input value
 * @param input A value to be validated
 * @returns Validation result
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function validate<T>(input: unknown): IValidation<T>;
/**
 * Asserts equality between a value and its type.
 *
 * Asserts a parametric value type and throws a {@link TypeGuardError} with detailed
 * reason, if the parametric value is not following the type `T` or some superfluous
 * property that is not listed on the type `T` has been found. Otherwise, the value is
 * following the type `T` without any superfluous property, just input parameter would
 * be returned.
 *
 * If what you want is not asserting but just knowing whether the parametric value is
 * following the type `T` or not, you can choose the {@link equals} function instead.
 * Otherwise, you want to know all the errors, {@link validateEquals} is the way to go.
 *
 * On the other hand, if you want to allow superfluous property that is not enrolled
 * to the type `T`, you can use {@link assert} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be asserted
 * @returns Parametric input value
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function assertEquals<T>(input: T): T;
/**
 * Asserts equality between a value and its type.
 *
 * Asserts a parametric value type and throws a {@link TypeGuardError} with detailed
 * reason, if the parametric value is not following the type `T` or some superfluous
 * property that is not listed on the type `T` has been found. Otherwise, the value is
 * following the type `T` without any superfluous property, just input parameter would
 * be returned.
 *
 * If what you want is not asserting but just knowing whether the parametric value is
 * following the type `T` or not, you can choose the {@link equals} function instead.
 * Otherwise, you want to know all the errors, {@link validateEquals} is the way to go.
 *
 * On the other hand, if you want to allow superfluous property that is not enrolled
 * to the type `T`, you can use {@link assert} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be asserted
 * @returns Parametric input value casted as `T`
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function assertEquals<T>(input: unknown): T;
/**
 * Tests equality between a value and its type.
 *
 * Tests a parametric value type and returns whether it's equivalent to the type `T`
 * or not. If the parametric value is matched with the type `T` and there's not any
 * superfluous property that is not listed on the type `T`, `true` value would be
 * returned. Otherwise, the parametric value is not following the type `T` or some
 * superfluous property exists, `false` value would be returned.
 *
 * If what you want is not just knowing whether the parametric value is following the
 * type `T` or not, but throwing an exception with detailed reason, you can choose
 * {@link assertEquals} function instead. Also, if you want to know all the errors with
 * detailed reasons, {@link validateEquals} function would be useful.
 *
 * On the other hand, if you want to allow superfluous property that is not enrolled
 * to the type `T`, you can use {@link is} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be tested
 * @returns Whether the parametric value is equivalent to the type `T` or not
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function equals<T>(input: T): input is T;
/**
 * Tests equality between a value and its type.
 *
 * Tests a parametric value type and returns whether it's equivalent to the type `T`
 * or not. If the parametric value is matched with the type `T` and there's not any
 * superfluous property that is not listed on the type `T`, `true` value would be
 * returned. Otherwise, the parametric value is not following the type `T` or some
 * superfluous property exists, `false` value would be returned.
 *
 * If what you want is not just knowing whether the parametric value is following the
 * type `T` or not, but throwing an exception with detailed reason, you can choose
 * {@link assertEquals} function instead. Also, if you want to know all the errors with
 * detailed reasons, {@link validateEquals} function would be useful.
 *
 * On the other hand, if you want to allow superfluous property that is not enrolled
 * to the type `T`, you can use {@link is} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be tested
 * @returns Whether the parametric value is equivalent to the type `T` or not
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function equals<T>(input: unknown): input is T;
/**
 * Validates equality between a value and its type.
 *
 * Validates a parametric value type and archives all the type errors into an
 * {@link IValidation.errors} array, if the parametric value is not following the
 * type `T` or some superfluous property that is not listed on the type `T` has been
 * found. Of course, if the parametric value is following the type `T` and no
 * superfluous property exists, the {@link IValidation.errors} array would be empty
 * and {@link IValidation.success} would have the `true` value.
 *
 * If what you want is not finding all the error, but asserting the parametric value
 * type with exception throwing, you can choose {@link assert} function instead.
 * Otherwise, you just want to know whether the parametric value is matched with the
 * type `T`, {@link is} function is the way to go.
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link validateEquals} function instead.
 *
 * @template Type of the input value
 * @param input A value to be validated
 * @returns Validation result
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function validateEquals<T>(input: T): IValidation<T>;
/**
 * Validates equality between a value and its type.
 *
 * Validates a parametric value type and archives all the type errors into an
 * {@link IValidation.errors} array, if the parametric value is not following the
 * type `T` or some superfluous property that is not listed on the type `T` has been
 * found. Of course, if the parametric value is following the type `T` and no
 * superfluous property exists, the {@link IValidation.errors} array would be empty
 * and {@link IValidation.success} would have the `true` value.
 *
 * If what you want is not finding all the error, but asserting the parametric value
 * type with exception throwing, you can choose {@link assert} function instead.
 * Otherwise, you just want to know whether the parametric value is matched with the
 * type `T`, {@link is} function is the way to go.
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link validateEquals} function instead.
 *
 * @template Type of the input value
 * @param input A value to be validated
 * @returns Validation result
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function validateEquals<T>(input: unknown): IValidation<T>;
/**
 * Custom validators.
 *
 * If you want to add a custom validation logic utilizing comment tags,
 * add a closure function with its tag and type name. Below example code
 * would helpful to understand how to use this instance.
 *
 * ```ts
 * typia.customValidators.insert("powerOf")("number")(
 *     (text: string) => {
 *         const denominator: number = Math.log(Number(text));
 *         return (value: number) => {
 *             value = Math.log(value) / denominator;
 *             return value === Math.floor(value);
 *         };
 *     }
 * );
 * typia.customValidators.insert("dollar")("string")(
 *     () => (value: string) => value.startsWith("$"),
 * );
 *
 * interface TagCustom {
 *    /**
 *     * @powerOf 10
 *     *\/
 *    powerOf: number;
 *
 *    /**
 *     * @dollar
 *     *\/
 *    dollar: string;
 * }
 * ```
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare const customValidators: CustomValidatorMap;
/**
 * > You must configure the generic argument `T`.
 *
 * JSON Schema Application.
 *
 * Creates a JSON schema application which contains both main JSON schemas and components.
 * Note that, all of the object types are stored in the {@link IJsonApplication.components}
 * property for the `$ref` referencing.
 *
 * Also, `typia.application()` has additional generic arguments, *Purpose*.
 * As JSON schema definitions used by `swagger` and `ajv` are different a little bit,
 * you should configure the *Purpose* appropriately.
 *
 * For an example, `ajv` has an extra property "$recursiveRef" that are not exists
 * in the standard JSON schema definition spec. Otherwise, `swagger` can't identify
 * the tuple definition.
 *
 * @template Types Tuple of target types
 * @template Purpose Purpose of the JSON schema`
 * @return JSON schema application
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function application(): never;
/**
 * JSON Schema Application.
 *
 * Creates a JSON schema application which contains both main JSON schemas and components.
 * Note that, all of the object types are stored in the {@link IJsonApplication.components}
 * property for the `$ref` referencing.
 *
 * Also, `typia.application()` has additional generic arguments, *Purpose*.
 * As JSON schema definitions used by `swagger` and `ajv` are different a little bit,
 * you should configure the *Purpose* appropriately.
 *
 * For an example, `ajv` has an extra property "$recursiveRef" that are not exists
 * in the standard JSON schema definition spec. Otherwise, `swagger` can't identify
 * the tuple definition.
 *
 * @template Types Tuple of target types
 * @template Purpose Purpose of the JSON schema
 * @return JSON schema application
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function application<Types extends unknown[], Purpose extends "ajv" | "swagger" = "swagger">(): IJsonApplication;
/**
 * > You must configure the generic argument `T`.
 *
 * Safe `JSON.parse()` function with type assertion.
 *
 * `typia.assertParse()` is a combination function of `JSON.parse()` and {@link assert}.
 * Therefore, it convers a JSON (JavaScript Object Notation) string to a `T` typed
 * instance with type assertion.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * throws {@link TypeGuardError}. Otherwise, there's no problem on the parsed value,
 * the parsed value would be returned.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Parsed value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function assertParse(input: string): never;
/**
 * Safe `JSON.parse()` function with type assertion.
 *
 * `typia.assertParse()` is a combination function of `JSON.parse()` and {@link assert}.
 * Therefore, it convers a JSON (JavaScript Object Notation) string to a `T` typed
 * instance with type assertion.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * throws {@link TypeGuardError}. Otherwise, there's no problem on the parsed value,
 * the parsed value would be returned.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Parsed value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function assertParse<T>(input: string): Primitive<T>;
/**
 * > You must configure the generic argument `T`.
 *
 * Safe `JSON.parse()` function with type checking.
 *
 * `typia.isParse()` is a combination function of `JSON.parse()` and {@link is}.
 * Therefore, it convers a JSON (JavaScript Object Notation) string to a `T` typed
 * instance with type checking.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * returns `null` value. Otherwise, there's no problem on the parsed value, the parsed
 * value would be returned.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Parsed value when exact type, otherwise `null`
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function isParse(input: string): never;
/**
 * Safe `JSON.parse()` function with type checking.
 *
 * `typia.isParse()` is a combination function of `JSON.parse()` and {@link is}.
 * Therefore, it convers a JSON (JavaScript Object Notation) string to a `T` typed
 * instance with type checking.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * returns `null` value. Otherwise, there's no problem on the parsed value, the parsed
 * value would be returned.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Parsed value when exact type, otherwise `null`
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function isParse<T>(input: string): Primitive<T> | null;
/**
 * > You must configure the generic argument `T`.
 *
 * Safe `JSON.parse()` function with detailed type validation.
 *
 * `typia.validateParse()` is a combination function of `JSON.parse()` and
 * {@link validate}. Therefore, it convers a JSON (JavaScript Object Notation) string
 * to a `T` typed instance with detailed type validation.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * returns {@link IValidation.IFailure} value with detailed error reasons. Otherwise,
 * there's no problem on the parsed value, the parsed value would be stored in `data`
 * property of the output {@link IValidation.ISuccess} instance.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Validation result with JSON parsed value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function validateParse(input: string): never;
/**
 * Safe `JSON.parse()` function with detailed type validation.
 *
 * `typia.validateParse()` is a combination function of `JSON.parse()` and
 * {@link validate}. Therefore, it convers a JSON (JavaScript Object Notation) string
 * to a `T` typed instance with detailed type validation.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * returns {@link IValidation.IFailure} value with detailed error reasons. Otherwise,
 * there's no problem on the parsed value, the parsed value would be stored in `data`
 * property of the output {@link IValidation.ISuccess} instance.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Validation result with JSON parsed value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function validateParse<T>(input: string): IValidation<Primitive<T>>;
/**
 * 8x faster `JSON.stringify()` function.
 *
 * Converts an input value to a JSON (JavaScript Object Notation) string, about 8x faster
 * than the native `JSON.stringify()` function. The 5x faster principle is because
 * it writes an optimized JSON conversion plan, only for the type `T`.
 *
 * For reference, this `typia.stringify()` does not validate the input value type.
 * It just believes that the input value is following the type `T`. Therefore, if you
 * can't ensure the input value type, it would be better to call one of below functions
 * instead.
 *
 *  - {@link assertStringify}
 *  - {@link isStringify}
 *  - {@link validateStringify}
 *
 * @template T Type of the input value
 * @param input A value to be converted
 * @return JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function stringify<T>(input: T): string;
/**
 * 5x faster `JSON.stringify()` function with type assertion.
 *
 * `typia.assertStringify()` is a combination function of {@link assert} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript Object
 * Notation) string, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, JSON
 * string would be returned.
 *
 * For reference, with type assertion, it is even 5x times faster than the native
 * `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be asserted and converted
 * @return JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function assertStringify<T>(input: T): string;
/**
 * 5x faster `JSON.stringify()` function with type assertion.
 *
 * `typia.assertStringify()` is a combination function of {@link assert} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript Object
 * Notation) string, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, JSON
 * string would be returned.
 *
 * For reference, with type assertion, it is even 5x times faster than the native
 * `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be asserted and converted
 * @return JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function assertStringify<T>(input: T): unknown;
/**
 * 7x faster `JSON.stringify()` function with type checking.
 *
 * `typia.stringify()` is a combination function of {@link is} and
 * {@link stringify}. Therefore, it converts an input value to JSON
 * (JavaScript Object Notation) string, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value. Otherwise, there's no problem on the `input` value, JSON string would
 * be returned.
 *
 * For reference, with type checking, it is even 7x times faster than the native
 * `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @return JSON string value when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function isStringify<T>(input: T): string | null;
/**
 * 7x faster `JSON.stringify()` function with type checking.
 *
 * `typia.isStringify()` is a combination function of {@link is} and
 * {@link stringify}. Therefore, it converts an input value to JSON
 * (JavaScript Object Notation) string, with type checking.
 *f
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value. Otherwise, there's no problem on the `input` value, JSON string would
 * be returned.
 *
 * For reference, with type checking, it is even 7x times faster than the native
 * `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @return JSON string value when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function isStringify<T>(input: unknown): string | null;
/**
 * 5x faster `JSON.stringify()` function with detailed type validation.
 *
 * `typia.validateStringify()` is a combination function of {@link validate} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript Object
 * Notation) string, with detailed type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise, there's no
 * problem on the `input` value, JSON string would be stored in `data` property of
 * the output {@link IValidation.ISuccess} instance.
 *
 * For reference, with detailed type validation, it is even 5x times faster than the
 * native `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @returns Validation result with JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function validateStringify<T>(input: T): IValidation<string>;
/**
 * 5x faster `JSON.stringify()` function with detailed type validation.
 *
 * `typia.validateStringify()` is a combination function of {@link validate} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript Object
 * Notation) string, with detailed type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise, there's no
 * problem on the `input` value, JSON string would be stored in `data` property of
 * the output {@link IValidation.ISuccess} instance.
 *
 * For reference, with detailed type validation, it is even 5x times faster than the
 * native `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @returns Validation result with JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function validateStringify<T>(input: unknown): IValidation<string>;
/**
 * > You must configure the generic argument `T`.
 *
 * Generate random data.
 *
 * Generates a random data following type the `T`.
 *
 * For reference, this `typia.random()` function generates only primitive type.
 * If there're some methods in the type `T` or its nested instances, those would
 * be ignored. Also, when the type `T` has a `toJSON()` method, its return type
 * would be generated instead.
 *
 * @template T Type of data to generate
 * @param generator Random data generator
 * @return Randomly generated data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function random(generator?: Partial<IRandomGenerator>): never;
/**
 * Generate random data.
 *
 * Generates a random data following type the `T`.
 *
 * For reference, this `typia.random()` function generates only primitive type.
 * If there're some methods in the type `T` or its nested instances, those would
 * be ignored. Also, when the type `T` has a `toJSON()` method, its return type
 * would be generated instead.
 *
 * @template T Type of data to generate
 * @param generator Random data generator
 * @return Randomly generated data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function random<T>(generator?: Partial<IRandomGenerator>): Primitive<T>;
/**
 * > You must configure the generic argument `T`.
 *
 * Union literal type to array.
 *
 * Converts a union literal type to an array of its members.
 *
 * ```typescript
 * literals<"A" | "B" | 1>; // ["A", "B", 1]
 * ```
 *
 * @template T Union literal type
 * @return Array of union literal type's members
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function literals(): never;
/**
 * Union literal type to array.
 *
 * Converts a union literal type to an array of its members.
 *
 * ```typescript
 * literals<"A" | "B" | 1>; // ["A", "B", 1]
 * ```
 *
 * @template T Union literal type
 * @return Array of union literal type's members
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function literals<T extends Atomic.Type | null>(): T[];
/**
 * Clone a data.
 *
 * Clones an instance following type `T`. If the target *input* value or its member
 * variable contains a class instance that is having a `toJSON()` method, its return
 * value would be cloned.
 *
 * For reference, this `typia.clone()` function does not validate the input value type.
 * It just believes that the input value is following the type `T`. Therefore, if you
 * can't ensure the input value type, it would be better to call {@link assertClone}
 * function instead.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function clone<T>(input: T): Primitive<T>;
/**
 * Clone a data with type assertion.
 *
 * Clones an instance following type `T`, with type assertion. If the target `input`
 * value or its member variable contains a class instance that is having a `toJSON()`
 * method, its return value would be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, cloned
 * data would be returned.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function assertClone<T>(input: T): Primitive<T>;
/**
 * Clone a data with type assertion.
 *
 * Clones an instance following type `T`, with type assertion. If the target `input`
 * value or its member variable contains a class instance that is having a `toJSON()`
 * method, its return value would be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, cloned
 * data would be returned.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function assertClone<T>(input: unknown): Primitive<T>;
/**
 * Clone a data with type checking.
 *
 * Clones an instance following type `T`, with type checking. If the target `input`
 * value or its member variable contains a class instance that is having a `toJSON()`
 * method, its return value would be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value instead. Otherwise, there's no problem on the `input` value, cloned
 * data would be returned.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function isClone<T>(input: T): Primitive<T> | null;
/**
 * Clone a data with type checking.
 *
 * Clones an instance following type `T`, with type checking. If the target `input`
 * value or its member variable contains a class instance that is having a `toJSON()`
 * method, its return value would be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value instead. Otherwise, there's no problem on the `input` value, cloned
 * data would be returned.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function isClone<T>(input: unknown): Primitive<T> | null;
/**
 * Clone a data with detailed type validation.
 *
 * Clones an instance following type `T`, with detailed type validation. If the target
 * `input` value or its member variable contains a class instance that is having a
 * `toJSON()` method, its return value would be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.Failure} value. Otherwise, there's no problem on the `input`
 * value, cloned data would be stored in `data` property of the output
 * {@link IValidation.Success} instance.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @returns Validation result with cloned value
 */
export declare function validateClone<T>(input: T): IValidation<Primitive<T>>;
/**
 * Clone a data with detailed type validation.
 *
 * Clones an instance following type `T`, with detailed type validation. If the target
 * `input` value or its member variable contains a class instance that is having a
 * `toJSON()` method, its return value would be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.Failure} value. Otherwise, there's no problem on the `input`
 * value, cloned data would be stored in `data` property of the output
 * {@link IValidation.Success} instance.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @returns Validation result with cloned value
 */
export declare function validateClone<T>(input: unknown): IValidation<Primitive<T>>;
/**
 * Prune, erase superfluous properties.
 *
 * Remove every superfluous properties from the `input` object, even including nested
 * objects. Note that, as every superfluous properties would be deleted, you never can
 * read those superfluous properties after calling this `prune()` function.
 *
 * For reference, this `typia.prune()` function does not validate the input value type.
 * It just believes that the input value is following the type `T`. Therefore, if you
 * can't ensure the input value type, it would better to call one of below functions
 * instead.
 *
 *   - {@link assertPrune}
 *   - {@link isPrune}
 *   - {@link validatePrune}
 *
 * @template T Type of the input value
 * @param input Target instance to prune
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function prune<T extends object>(input: T): void;
/**
 * Prune, erase superfluous properties, with type assertion.
 *
 * `typia.assertPrune()` is a combination function of {@link assert} and {@link prune}.
 * Therefore, it removes every superfluous properties from the `input` object including
 * nested objects, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, its
 * every superfluous properties would be removed, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to assert and prune
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function assertPrune<T>(input: T): T;
/**
 * Prune, erase superfluous properties, with type assertion.
 *
 * `typia.assertPrune()` is a combination function of {@link assert} and {@link prune}.
 * Therefore, it removes every superfluous properties from the `input` object including
 * nested objects, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, its
 * every superfluous properties would be removed, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to assert and prune
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function assertPrune<T>(input: unknown): T;
/**
 * Prune, erase superfluous properties, with type checking.
 *
 * `typia.assertPrune()` is a combination function of {@link is} and {@link prune}.
 * Therefore, it removes every superfluous properties from the `input` object including
 * nested objects, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `false` value. Otherwise, there's no problem on the `input` value, it returns
 * `true` after removing every superfluous properties, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to check and prune
 * @returns Whether the parametric value is following the type `T` or not
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function isPrune<T>(input: T): input is T;
/**
 * Prune, erase superfluous properties, with type checking.
 *
 * `typia.assertPrune()` is a combination function of {@link is} and {@link prune}.
 * Therefore, it removes every superfluous properties from the `input` object including
 * nested objects, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `false` value. Otherwise, there's no problem on the `input` value, it returns
 * `true` after removing every superfluous properties, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to check and prune
 * @returns Whether the parametric value is following the type `T` or not
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function isPrune<T>(input: unknown): input is T;
/**
 * Prune, erase superfluous properties, with type validation.
 *
 * `typia.validatePrune()` is a combination function of {@link validate} and {@link prune}.
 * Therefore, it removes every superfluous properties from the `input` object including
 * nested objects, with type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise, there's
 * no problem on the `input` value, it returns {@link IValidation.ISucess} value after
 * removing every superfluous properties, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to validate and prune
 * @returns Validation result
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function validatePrune<T>(input: T): IValidation<T>;
/**
 * Prune, erase superfluous properties, with type validation.
 *
 * `typia.validatePrune()` is a combination function of {@link validate} and {@link prune}.
 * Therefore, it removes every superfluous properties from the `input` object including
 * nested objects, with type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise, there's
 * no problem on the `input` value, it returns {@link IValidation.ISucess} value after
 * removing every superfluous properties, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to validate and prune
 * @returns Validation result
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function validatePrune<T>(input: unknown): IValidation<T>;
/**
 * Creates a reusable {@link assert} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createAssert(): never;
/**
 * Creates a reusable {@link assert} function.
 *
 * @template T Type of the input value
 * @returns A reusable `assert` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createAssert<T>(): (input: unknown) => T;
/**
 * Creates a reusable {@link assertType} function.
 *
 * Duplicated function of {@link createAssert} for `typescript-is` users.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @deprecated
 */
export declare function createAssertType(): never;
/**
 * Creates a reusable {@link assertType} function.
 *
 * Duplicated function of {@link createAssert} for `typescript-is` users.
 *
 * @template T Type of the input value
 * @returns A reusable `assert` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @deprecated
 */
export declare function createAssertType<T>(): (input: unknown) => T;
/**
 * Creates a reusable {@link is} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createIs(): never;
/**
 * Creates a reusable {@link is} function.
 *
 * @template T Type of the input value
 * @returns A reusable `is` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createIs<T>(): (input: unknown) => input is T;
/**
 * Creates a reusable {@link validate} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createValidate(): never;
/**
 * Creates a reusable {@link validate} function.
 *
 * @template T Type of the input value
 * @returns A reusable `validate` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createValidate<T>(): (input: unknown) => IValidation<T>;
/**
 * Creates a reusable {@link assertEquals} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createAssertEquals(): never;
/**
 * Creates a reusable {@link assertEquals} function.
 *
 * @template T Type of the input value
 * @returns A reusable `assertEquals` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createAssertEquals<T>(): (input: unknown) => T;
/**
 * Creates a reusable {@link equals} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createEquals(): never;
/**
 * Creates a reusable {@link equals} function.
 *
 * @template T Type of the input value
 * @returns A reusable `equals` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createEquals<T>(): (input: unknown) => input is T;
/**
 * Creates a reusable {@link validateEquals} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createValidateEquals(): never;
/**
 * Creates a reusable {@link validateEquals} function.
 *
 * @template T Type of the input value
 * @returns A reusable `validateEquals` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createValidateEquals<T>(): (input: unknown) => IValidation<T>;
/**
 * Creates a reusable {@link isParse} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createIsParse(): never;
/**
 * Creates a reusable {@link isParse} function.
 *
 * @template T Expected type of parsed value
 * @returns A reusable `isParse` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createIsParse<T>(): (input: string) => Primitive<T> | null;
/**
 * Creates a reusable {@link assertParse} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createAssertParse(): never;
/**
 * Creates a reusable {@link assertParse} function.
 *
 * @template T Expected type of parsed value
 * @returns A reusable `assertParse` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createAssertParse<T>(): (input: string) => Primitive<T>;
/**
 * Creates a reusable {@link validateParse} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createValidateParse(): never;
/**
 * Creates a reusable {@link validateParse} function.
 *
 * @template T Expected type of parsed value
 * @returns A reusable `validateParse` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createValidateParse<T>(): (input: string) => IValidation<Primitive<T>>;
/**
 * Creates a reusable {@link stringify} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createStringify(): never;
/**
 * Creates a reusable {@link stringify} function.
 *
 * @template T Type of the input value
 * @returns A reusable `stringify` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createStringify<T>(): (input: T) => string;
/**
 * Creates a reusable {@link assertStringify} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createAssertStringify(): never;
/**
 * Creates a reusable {@link assertStringify} function.
 *
 * @template T Type of the input value
 * @returns A reusable `assertStringify` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createAssertStringify<T>(): (input: unknown) => string;
/**
 * Creates a reusable {@link isStringify} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createIsStringify(): never;
/**
 * Creates a reusable {@link isStringify} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isStringify` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createIsStringify<T>(): (input: unknown) => string | null;
/**
 * Creates a reusable {@link validateStringify} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createValidateStringify(): never;
/**
 * Creates a reusable {@link validateStringify} function.
 *
 * @template T Type of the input value
 * @returns A reusable `validateStringify` function

 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createValidateStringify<T>(): (input: unknown) => IValidation<string>;
/**
 * Creates a reusable {@link random} function.
 *
 * @danger You have to specify the generic argument `T`
 * @param generator Random data generator
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createRandom(generator?: Partial<IRandomGenerator>): never;
/**
 * Creates a resuable {@link random} function.
 *
 * @template T Type of the input value
 * @param generator Random data generator
 * @returns A reusable `random` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createRandom<T>(generator?: Partial<IRandomGenerator>): () => Primitive<T>;
/**
 * Creates a reusable {@link clone} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createClone(): never;
/**
 * Creates a resuable {@link clone} function.
 *
 * @template T Type of the input value
 * @returns A reusable `clone` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createClone<T>(): (input: T) => Primitive<T>;
/**
 * Creates a reusable {@link assertClone} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createAssertClone(): never;
/**
 * Creates a resuable {@link assertClone} function.
 *
 * @template T Type of the input value
 * @returns A reusable `clone` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createAssertClone<T>(): (input: unknown) => Primitive<T>;
/**
 * Creates a reusable {@link isClone} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createIsClone(): never;
/**
 * Creates a resuable {@link isClone} function.
 *
 * @template T Type of the input value
 * @returns A reusable `clone` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createIsClone<T>(): (input: unknown) => Primitive<T> | null;
/**
 * Creates a reusable {@link validateClone} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createValidateClone(): never;
/**
 * Creates a resuable {@link validateClone} function.
 *
 * @template T Type of the input value
 * @returns A reusable `clone` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createValidateClone<T>(): (input: unknown) => IValidation<Primitive<T>>;
/**
 * Creates a reusable {@link prune} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createPrune(): never;
/**
 * Creates a resuable {@link prune} function.
 *
 * @template T Type of the input value
 * @returns A reusable `prune` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createPrune<T extends object>(): (input: T) => void;
/**
 * Creates a reusable {@link assertPrune} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createAssertPrune(): never;
/**
 * Creates a resuable {@link assertPrune} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isPrune` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createAssertPrune<T extends object>(): (input: T) => T;
/**
 * Creates a reusable {@link isPrune} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createIsPrune(): never;
/**
 * Creates a resuable {@link isPrune} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isPrune` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createIsPrune<T extends object>(): (input: T) => input is T;
/**
 * Creates a reusable {@link validatePrune} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createValidatePrune(): never;
/**
 * Creates a resuable {@link validatePrune} function.
 *
 * @template T Type of the input value
 * @returns A reusable `validatePrune` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare function createValidatePrune<T extends object>(): (input: T) => IValidation<T>;
