import ts from "typescript";
import { Metadata } from "../../../metadata/Metadata";
import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
export declare const explore_metadata: (checker: ts.TypeChecker) => (options: MetadataFactory.IOptions) => (collection: MetadataCollection) => (type: ts.Type | null, parentResolved: boolean, aliased?: boolean) => Metadata;
