import { readFile } from "fs/promises";
import path from "path";

// Get filename from command line
const filename = process.argv[2];

// Check if filename was provided
if (!filename) {
    console.log("Please provide a filename.");
    console.log("Example: npm start sample.txt");
    process.exit(1);
}

try {
    // Create the full file path
    const filePath = path.resolve(filename);

    // Read the file
    const text = await readFile(filePath, "utf-8");

    // Count lines
    const lines = text.split(/\r?\n/).length;

    // Count words
    const words = text.trim()
        ? text.trim().split(/\s+/).length
        : 0;

    // Count characters
    const characters = text.length;

    // Display result
    console.log("");
    console.log("===== WORD & LINE COUNTER =====");
    console.log(`File: ${filename}`);
    console.log(`Lines: ${lines}`);
    console.log(`Words: ${words}`);
    console.log(`Characters: ${characters}`);
    console.log("===============================");
    console.log("");

} catch (error) {
    console.log("");
    console.log(`Error: Could not read file "${filename}".`);
    console.log("Please check if the file exists.");
    console.log("");
}