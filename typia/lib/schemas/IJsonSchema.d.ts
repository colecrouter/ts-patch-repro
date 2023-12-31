import { IJsDocTagInfo } from "../metadata/IJsDocTagInfo";
import { IMetadataTag } from "../metadata/IMetadataTag";
import { Atomic } from "../typings/Atomic";
export type IJsonSchema = IJsonSchema.Known | IJsonSchema.IUnknown;
export declare namespace IJsonSchema {
    type Known = IEnumeration<"boolean"> | IEnumeration<"number"> | IEnumeration<"string"> | IBoolean | IInteger | INumber | IString | IArray | ITuple | IOneOf | IReference | INullOnly;
    interface IUnknown extends IAttribute {
        type?: undefined;
    }
    interface IEnumeration<Literal extends Exclude<Atomic.Literal, "bigint">> extends IAtomic<Literal> {
        enum: Array<Atomic.Mapper[Literal]>;
    }
    interface IAtomic<Literal extends Exclude<Atomic.Literal, "bigint">> extends ISignificant<Literal> {
        default?: Atomic.Mapper[Literal];
    }
    interface IString extends IAtomic<"string"> {
        /**
         * @type uint
         */
        minLength?: number;
        /**
         * @type uint
         */
        maxLength?: number;
        pattern?: string;
        format?: string;
    }
    interface INumber extends IAtomic<"number"> {
        minimum?: number;
        maximum?: number;
        exclusiveMinimum?: boolean;
        exclusiveMaximum?: boolean;
        multipleOf?: number;
    }
    interface IInteger extends IAtomic<"integer"> {
        /**
         * @type int
         */
        minimum?: number;
        /**
         * @type int
         */
        maximum?: number;
        exclusiveMinimum?: boolean;
        exclusiveMaximum?: boolean;
        /**
         * @type int
         */
        multipleOf?: number;
    }
    interface IBoolean extends IAtomic<"boolean"> {
    }
    interface IArray extends ISignificant<"array"> {
        items: IJsonSchema;
        /**
         * @type uint
         */
        minItems?: number;
        /**
         * @type uint
         */
        maxItems?: number;
        "x-typia-tuple"?: ITuple;
    }
    interface ITuple extends ISignificant<"array"> {
        items: IJsonSchema[];
        /**
         * @type uint
         */
        minItems: number;
        /**
         * @type uint
         */
        maxItems?: number;
    }
    interface IReference extends IAttribute {
        $ref: string;
    }
    interface INullOnly extends IAttribute {
        type: "null";
    }
    interface IOneOf extends IAttribute {
        oneOf: IJsonSchema[];
    }
    interface ISignificant<Literal extends string> extends IAttribute {
        type: Literal;
        /**
         * Only when swagger mode.
         */
        nullable?: boolean;
    }
    interface IAttribute {
        deprecated?: boolean;
        title?: string;
        description?: string;
        "x-typia-metaTags"?: IMetadataTag[];
        "x-typia-jsDocTags"?: IJsDocTagInfo[];
        "x-typia-required"?: boolean;
        "x-typia-optional"?: boolean;
        "x-typia-rest"?: boolean;
    }
}
