import { Complexity } from "./Complexity";
import { Duration } from "./Duration";
import { RouteDigitalAsset } from "./RouteDigitalAsset";
import { Location } from "./Location";

export class Route {
    public id: number;
    public name: string;
    public distance: number;
    public climb: number;
    public complexity: Complexity;
    public duration: Duration;
    public startLocation : Location;
    public endLocation : Location;
    public digitalAssets : RouteDigitalAsset[]
}

