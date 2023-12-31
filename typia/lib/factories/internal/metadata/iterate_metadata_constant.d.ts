import ts from "typescript";
import { Metadata } from "../../../metadata/Metadata";
import { MetadataFactory } from "../../MetadataFactory";
export declare const iterate_metadata_constant: (checker: ts.TypeChecker) => (options: MetadataFactory.IOptions) => (meta: Metadata, type: ts.Type) => boolean;
