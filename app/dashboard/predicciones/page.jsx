import SelectLocation from "./components/SelectLocation";
import ComoPrevenirHelada from "./components/ComoPrevenirHelada";
async function getUbicaciones() {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/locations/", {
      cache: "no-cache",
    });
    const locations = await res.json();

    return locations.data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    // Puedes retornar un valor por defecto o un array vacío en caso de error
    return [];
  }
}

async function getTemperatura() {
  try {
    const res = await fetch(
      "https://api.thingspeak.com/channels/1848327/fields/2.json",
      { next: { revalidate: 10 } }
    );
    const temperatura = await res.json();

    return temperatura;
  } catch (error) {
    console.error("Error fetching temperatura:", error);
    // Puedes retornar un valor por defecto o un array vacío en caso de error
    return [];
  }
}

export default async function Predicciones() {
  const locations = await getUbicaciones();
  const temperatura = await getTemperatura();
  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-1">Predicciones</h1>
        <ComoPrevenirHelada />
        <SelectLocation locations={locations}></SelectLocation>
      </div>

      {temperatura.feeds.map((feed) => (
        <div>
          <h3>
            Valor: {feed.field2} - Id {feed.entry_id}
          </h3>
        </div>
      ))}
    </>
  );
}
