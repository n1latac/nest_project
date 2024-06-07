export declare class AuthResponse {
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    password: string;
    token: string;
}
export declare class SuccessResponseDTO {
    data: object;
    error: any;
    success: boolean;
    statusCode: any;
    constructor(data?: any);
}
