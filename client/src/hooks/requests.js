const API_URL = "http://localhost:8000";
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`)
  return await response.json()
  // TODO: Once API is ready.
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`)
  const fetchedLaunches = await response.json()
  return fetchedLaunches.sort((a, b) =>{
    return a.flightNumber - b.flightNumber;
  }
  );
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
  return await fetch(`${API_URL}/launches`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(launch),
  }).catch((err) =>{
    return {
      ok: false,
    };
  })
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};