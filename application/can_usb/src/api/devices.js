export async function fetchDevices() {
  const response = await fetch('http://127.0.0.1:5000/can_devices');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
