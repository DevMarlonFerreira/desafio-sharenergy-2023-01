export interface RandomUserResponse {
    code: number;
    data: [RandomUserData];
}

export interface RandomUserData {
        age: number;
        email: string;
        name: string;
        picture: string;
        username: string; 
}
