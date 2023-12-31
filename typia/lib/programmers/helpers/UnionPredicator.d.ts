import { MetadataObject } from "../../metadata/MetadataObject";
import { MetadataProperty } from "../../metadata/MetadataProperty";
export declare namespace UnionPredicator {
    interface ISpecialized {
        index: number;
        object: MetadataObject;
        property: MetadataProperty;
        neighbour: boolean;
    }
    const object: (targets: MetadataObject[]) => Array<ISpecialized>;
}
