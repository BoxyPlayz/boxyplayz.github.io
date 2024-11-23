import bcrypt from "bcrypt";

// Define the plain password you want to hash
const plainPassword = "b4"; // Replace this with your password

// Define the number of salt rounds (higher means more secure but slower)
const SALT_ROUNDS = 8; // Typically between 10-12

async function hashPassword() {
  try {
    // Generate a salt and hash the password
    const hashedPassword = await bcrypt.hash(plainPassword, SALT_ROUNDS);
    
    // Output the hashed password (you can store this in a database)
    console.log("Hashed Password:", hashedPassword);
  } catch (err) {
    console.error("Error hashing password:", err);
  }
}

// Run the function
hashPassword();
