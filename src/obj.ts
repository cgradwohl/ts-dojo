const obj: Record<string, string> = {
	e: "3",
	l: "7",
};

"This is sentance".split("").map((char) => {
	if (char in obj) {
		console.log(obj[char]);
	}
});
