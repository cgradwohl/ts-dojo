/**
 * Asynchronous File Processing
 *
 * Write a Node.js script that reads a list of file paths
 * from an input file (one path per line), processes each
 * file asynchronously to count the number of lines, and
 * then writes the results to an output file in the
 * format:
 *  - filename: line count.
 * Use asynchronous file reading/writing and ensure that all files are processed concurrently.
 */

const fs = require("node:fs");
const INPUT_FILE_PATH = "src/challenges/files/input_file.txt";

async function lineCounter(inputFilePath: string) {
	const paths = (fs.readFileSync(inputFilePath, "utf8") as string)
		.split("\n")
		.filter(Boolean);

	const results = await Promise.allSettled(
		paths.map(async (path) => {
			return {
				path,
				content: await fs.promises.readFile(path, "utf8"),
			};
		}),
	);

	const successes = results
		.filter(
			(
				result,
			): result is PromiseFulfilledResult<{
				path: string;
				content: string;
			}> => result.status === "fulfilled",
		)
		.map((result) => result.value)
		.map((result) => ({
			fileName: result.path,
			lineCount: result.content.split("\n").length,
		}));

	const output = successes
		.map((success) => `${success.fileName}: ${success.lineCount}`)
		.join("\n");

	fs.writeFileSync("src/challenges/output.txt", output);
}

lineCounter(INPUT_FILE_PATH);
