// printerServer.cjs
const express = require("express");
const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;
const cors = require("cors");
const electron =
  typeof process !== "undefined" &&
  process.versions &&
  !!process.versions.electron;

const app = express();
const port = 3001;

// Habilitar CORS para todas as origens
app.use(cors());

app.use(express.json());

app.post("/print", async (req, res) => {
  try {
    let printer = new ThermalPrinter({
      type: PrinterTypes.EPSON,
      interface: "usb",
      characterSet: CharacterSet.PC437_USA,
    });

    const { text } = req.body;
    let raw = await printer.raw(Buffer.from("Hello world"));
    printer.alignCenter();
    printer.println(text);
    printer.cut();

    console.log("Printer: ", printer);
    console.log(
      "===============================================================================",
    );
    console.log("Text: ", text);
    console.log(
      "===============================================================================",
    );
    console.log("Buffer: ", printer.getBuffer());

    let aux = await printer.execute();

    console.log(
      "===============================================================================",
    );
    console.log("Aux: ", aux);

    res.status(200).send("Printed successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error printing");
  }
});

app.listen(port, () => {
  console.log(`Printer server running at http://localhost:${port}`);
});
