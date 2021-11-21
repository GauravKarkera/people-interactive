export interface IContactResponse {
    loading: boolean;
    name?: IName;
    phone: String;
    email: String;
    image: string;

}
interface IName {
    title: String;
    first: String;
    last: String;
}

export interface IHomeProps {
    setAuthorization: (authorized: boolean) => void;
    currentUser: String;
}