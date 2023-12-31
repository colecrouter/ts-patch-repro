import ts from "typescript";
import { IProject } from "./IProject";
export declare namespace FileTransformer {
    const transform: (project: IProject) => (context: ts.TransformationContext) => (file: ts.SourceFile) => ts.SourceFile;
}
