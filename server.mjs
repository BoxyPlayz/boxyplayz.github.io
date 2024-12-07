import express from "express";
import cors from "cors";
import morgan from "morgan";
import session from "express-session";
import bcryptjs from "bcryptjs";
import path from "path";
import url from "url";
import mongoose from "mongoose";
import connectMongo from "connect-mongo";

const mongoURI =
  "mongodb+srv://user:asfvavra@cluster0.4i7gy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const SALT_ROUNDS = 9; // Define the cost factor for bcryptjs (adjustable)

const app = express();

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Configure MongoDB session store with `mongoUrl`
const MongoStore = connectMongo.create({
  mongoUrl: mongoURI, // Direct MongoDB connection string here
  collectionName: "sessions", // Collection where sessions will be stored
  ttl: 7 * 24 * 60 * 60, // 7 days (TTL in seconds)
});

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup session management with MongoDB session store
app.use(
  session({
    secret: "afrbuhv-aoinds-dcsaiuvcincavjsa-no-father", // Replace with a secure random secret
    resave: false,
    saveUninitialized: false,
    store: MongoStore, // Use MongoStore as the session store
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week in milliseconds
    },
  })
);

// Use CORS and logging middleware
app.use(cors());
app.use(morgan(":method :url :status"));

// Authentication Middleware
function checkAuth(req, res, next) {
  // Allow access to the '/undefended' path without authentication
  if (req.path.startsWith("/undefended") || req.path === "/auth") {
    return next();
  }

  // Check if the user is authenticated
  if (req.session.authenticated) {
    return next(); // User is authenticated, proceed
  }

  // If not authenticated, redirect to the authentication page
  res.redirect("/undefended/index.html");
}

// In-memory stored hashed password (replace with database in production)
let storedHashedPassword = ""; // Empty initially

// Hash a password with bcryptjs (this would normally be done when setting the password)
async function setHashedPassword(plainPassword) {
  storedHashedPassword = await bcryptjs.hash(plainPassword, SALT_ROUNDS);
}

// Call this once when setting the password
// (In production, store the hash in a secure database)
await setHashedPassword("b4a"); // Replace with your desired password

// Login Route
app.post("/login", async (req, res) => {
  const { password } = req.body;

  const match = await bcryptjs.compare(password, storedHashedPassword);

  if (match) {
    req.session.authenticated = true; // Set authenticated session
    return res.redirect("/"); // Redirect to the main page
  } else {
    return res.status(401).send("Invalid Password");
  }
});

// Serve content from `/public` if authenticated, else from `/undefended`
app.use((req, res, next) => {
  if (req.session.authenticated) {
    // If authenticated, serve static files from /public
    return express.static(path.join(__dirname, "public"))(req, res, next);
  } else {
    // If not authenticated, serve static files from /undefended
    return express.static(path.join(__dirname, "undefended"))(req, res, next);
  }
});

// Root route handling
app.get("/", (req, res) => {
  if (!req.session.authenticated) {
    return res.sendFile(path.join(__dirname, "undefended", "index.html")); // Serve the login page if not authenticated
  }
  res.sendFile(path.join(__dirname, "public", "index.html")); // Serve the main content if authenticated (change this if needed)
});

// Auth page route
app.get("/auth", (req, res) => {
  if (req.session.authenticated) {
    return res.redirect("/"); // Redirect to the main page if already logged in
  }
  res.sendFile(path.join(__dirname, "undefended", "auth.html"));
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get("*", function (req, res) {
  if (req.session.authenticated) {
    res.status(404).sendFile(path.join(__dirname, "public/404.html"));
  } else {
    res.status(404).sendFile(path.join(__dirname, "undefended/404.html"));
  }
});

app.listen(PORT, () => {
  console.log(`App Running On http://localhost:${PORT}`);
});
