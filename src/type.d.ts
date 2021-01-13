declare interface HttpArgument {
    params?: Record<string, any>;// eslint-disable-line @typescript-eslint/no-explicit-any
    data?: Record<string, unknown>;
    headers?: Record<string, string | string[] | undefined>;
}

declare interface ExceptionError {
    info: string;
    [key: string]: unknown;
}

declare interface HttpException {
    httpInfo: string;
    status: number;
    type?: string;
    error: exceptionError;
}

declare interface ApiResult {
    data?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    error?: httpException;
}