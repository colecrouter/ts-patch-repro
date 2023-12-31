import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadataProperty } from "./IMetadataProperty";
import { IMetadataTag } from "./IMetadataTag";
import { Metadata } from "./Metadata";
export declare class MetadataProperty {
    readonly key: Metadata;
    readonly value: Metadata;
    readonly description: string | null;
    readonly tags: IMetadataTag[];
    readonly jsDocTags: IJsDocTagInfo[];
    /**
     * @hidden
     */
    private constructor();
    toJSON(): IMetadataProperty;
}
