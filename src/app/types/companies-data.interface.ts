export interface ICompaniesData {
    id: string;
    name: string;
    logo: string;
    geolocation: string;
    direction: string;
    tags: string[];
    rating: number;
    favorited: boolean;
}

export interface ICompaniesResponse {
    data: ICompaniesData[];
    pagination: IPagination;
}

export interface IPagination {
    page: number;
    limit: number;
    total: number;
}