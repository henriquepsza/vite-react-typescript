import React, { useState } from "react";

const ListDevices: React.FC = () => {
  const [devices, setDevices] = useState<any[]>([]);

  // Função para buscar dispositivos do servidor
  const fetchDevices = async () => {
    try {
      const response = await fetch("http://localhost:3000/devices");
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const devices = await response.json();
      setDevices(devices);
    } catch (error) {
      console.error("Failed to fetch devices:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchDevices}>List USB Devices</button>
      <div>
        {devices.length > 0 ? (
          devices.map((device, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px",
              }}
            >
              <p>
                <strong>Bus Number:</strong> {device.busNumber}
              </p>
              <p>
                <strong>Device Address:</strong> {device.deviceAddress}
              </p>
              <p>
                <strong>Vendor ID:</strong> {device.deviceDescriptor.idVendor}
              </p>
              <p>
                <strong>Product ID:</strong> {device.deviceDescriptor.idProduct}
              </p>
              <p>
                <strong>Manufacturer Index:</strong>{" "}
                {device.deviceDescriptor.iManufacturer}
              </p>
              <p>
                <strong>Product Index:</strong>{" "}
                {device.deviceDescriptor.iProduct}
              </p>
              <p>
                <strong>Serial Number Index:</strong>{" "}
                {device.deviceDescriptor.iSerialNumber}
              </p>
              <p>
                <strong>Port Numbers:</strong>{" "}
                {device.portNumbers ? device.portNumbers.join(", ") : "N/A"}
              </p>
            </div>
          ))
        ) : (
          <p>No devices found.</p>
        )}
      </div>
    </div>
  );
};

export default ListDevices;
