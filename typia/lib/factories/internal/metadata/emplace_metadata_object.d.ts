import ts from "typescript";
import { MetadataObject } from "../../../metadata/MetadataObject";
import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
export declare const emplace_metadata_object: (checker: ts.TypeChecker) => (options: MetadataFactory.IOptions) => (collection: MetadataCollection) => (parent: ts.Type, nullable: boolean) => MetadataObject;
