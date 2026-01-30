import express from "express";

const app = express();
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
	res.json({ status: "ok" });
});

// Echo endpoint
app.post("/echo", (req, res) => {
	res.json({
		message: "Received your data",
		data: req.body,
	});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Microservice running on port ${PORT}`);
});
