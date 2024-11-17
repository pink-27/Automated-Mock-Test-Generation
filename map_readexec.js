const fs = require('fs');
const { spawn } = require('child_process');

// Array to store parsed objects
let paths = [];

// Read and process the file
fs.readFile('map.txt', 'utf8', (err, data) => {
    if (err) throw err;

    // Split the file content by lines
    const lines = data.split('\n');

    lines.forEach(line => {
        // Use regex to find lines with JSON-like structures in brackets
        const jsonMatch = line.match(/\{.*\}/);
        if (jsonMatch) {
            try {
                // Parse the JSON part of the line and add it to the paths array
                const jsonData = JSON.parse(jsonMatch[0]);
                paths.push(jsonData);
            } catch (e) {
                console.error("Could not parse JSON in line:", line);
            }
        }
    });

    paths.pop();
    // Display the parsed objects
    console.log("Parsed paths:", paths);

    // Function to process each path individually
    function processPath(path) {
        const processPath = spawn('node', ['clientside_map.js', JSON.stringify([path])]);

        // Capture the output of the spawned process
        processPath.stdout.on('data', (data) => {
            console.log(`${data}`);
        });

        processPath.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        // processPath.on('close', (code) => {
        //     console.log(`clientside_map.js exited with code ${code}`);
        // });
    }

    // Call processPath for each parsed object in paths array
    paths.forEach(path => processPath(path));
});
