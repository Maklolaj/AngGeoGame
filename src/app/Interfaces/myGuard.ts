import { Observable } from "rxjs";

export interface ComponentCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>
}

export interface Window {
    [key:string]: any; // Add index signature
}