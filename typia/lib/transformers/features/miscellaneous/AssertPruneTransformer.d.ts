export declare namespace AssertPruneTransformer {
    const transform: (project: import("../../IProject").IProject) => (modulo: import("typescript").LeftHandSideExpression) => (expression: import("typescript").CallExpression) => import("typescript").CallExpression;
}