import ts from "typescript";
import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataObject } from "../metadata/MetadataObject";
import { IProject } from "../transformers/IProject";
import { CheckerProgrammer } from "./CheckerProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { IExpressionEntry } from "./helpers/IExpressionEntry";
export declare namespace IsProgrammer {
    const configure: (options?: Partial<CONFIG.IOptions>) => (importer: FunctionImporter) => CheckerProgrammer.IConfig;
    namespace CONFIG {
        interface IOptions {
            numeric: boolean;
            undefined: boolean;
            object: (input: ts.Expression, entries: IExpressionEntry<ts.Expression>[]) => ts.Expression;
        }
    }
    const write: (project: IProject) => (modulo: ts.LeftHandSideExpression, disable?: boolean) => (equals: boolean) => (type: ts.Type, name?: string | undefined) => ts.ArrowFunction;
    const write_function_statements: (project: IProject) => (importer: FunctionImporter) => (collection: MetadataCollection) => ts.VariableStatement[];
    const decode: (project: IProject) => (importer: FunctionImporter) => (input: ts.Expression, meta: import("../metadata/Metadata").Metadata, explore: import("./FeatureProgrammer").FeatureProgrammer.IExplore, metaTags: import("../metadata/IMetadataTag").IMetadataTag[], jsDocTags: ts.JSDocTagInfo[]) => ts.Expression;
    const decode_object: (importer: FunctionImporter) => (input: ts.Expression, obj: MetadataObject, explore: import("./FeatureProgrammer").FeatureProgrammer.IExplore) => ts.CallExpression;
    const decode_to_json: (checkNull: boolean) => (input: ts.Expression) => ts.Expression;
    const decode_functional: (input: ts.Expression) => ts.BinaryExpression;
}
