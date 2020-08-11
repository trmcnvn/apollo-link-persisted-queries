import { ApolloLink, Operation } from '@apollo/client/core';
import { DocumentNode, ExecutionResult, GraphQLError } from 'graphql';
export declare const VERSION = 1;
export interface ErrorResponse {
    graphQLErrors?: readonly GraphQLError[];
    networkError?: Error;
    response?: ExecutionResult;
    operation: Operation;
}
declare namespace PersistedQueryLink {
    type Options = {
        generateHash?: (document: DocumentNode) => string;
        disable?: (error: ErrorResponse) => boolean;
        useGETForHashedQueries?: boolean;
    };
}
export declare const defaultGenerateHash: (query: DocumentNode) => string;
export declare const defaultOptions: {
    generateHash: (query: DocumentNode) => string;
    disable: ({ graphQLErrors, operation }: ErrorResponse) => boolean;
    useGETForHashedQueries: boolean;
};
export declare const createPersistedQueryLink: (options?: PersistedQueryLink.Options) => ApolloLink;
export {};
