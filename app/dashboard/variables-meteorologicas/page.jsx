import SelectLocation from "./components/SelectLocation";

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

export default async function VariableMeteorologica() {
  const locations = await getUbicaciones();
  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-6">
          Variables Meteorológicas
        </h1>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <SelectLocation locations={locations}></SelectLocation>
          </div>
        </div>
      </div>
    </>
  );
}
