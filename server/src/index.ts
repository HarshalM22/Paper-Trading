import express from "express";
import cors from "cors";
import { SigninSchema, SignUpSchema } from "./schema";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const app = express();
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

app.use(cors());
app.use(express.json());
const JWT_SECRET = process.env.JWT_SECRET || "gghghghghg";
const prisma = new PrismaClient();

app.post("/api/signin", async (req, res) => {
    const parseResult = SigninSchema.safeParse(req.body);

    if (!parseResult.success) {
        return res.status(400).json({
            error: parseResult.error.format(),
        });
    }

    const { email, password } = parseResult.data;

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid Password" });
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET);
        res.status(200).json({ token });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
});
app.post("/api/signup", async (req, res) => {
    const parseResult = SignUpSchema.safeParse(req.body);

    if (!parseResult.success) {
        return res.status(400).json({
            error: parseResult.error.format(),
        });
    }

    const { email, password, name } = parseResult.data;

    try {
        const hashedPassword = await bcrypt.hash(password, 4);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        res.status(200).json({ message: "User has been signed up." });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Error while signing up" });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
