import { useLoadScript } from "@react-google-maps/api";

import Map from "../../components/map.tsx";
import "./mapStyle.css";

export default function Home() {
  <h1>Hello</h1>;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB15qSyH3koKdLcGfR1LInx8Akje6FOZUk",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
