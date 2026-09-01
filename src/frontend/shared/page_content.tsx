import { AccommodationPage } from "#ech1zmk0hm6a";
import { getAccommodationByPath } from "#2ajuusged5jk";
import { HomePage } from "#hyj0eo4p9hev";
import { canonicalPath } from "#y4hpoyu2xriv";

export function PageContent({ path }: { path: string }) {
  const accommodation = getAccommodationByPath(canonicalPath(path));
  return accommodation ? <AccommodationPage accommodation={accommodation} /> : <HomePage />;
}
