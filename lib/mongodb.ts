// test-mongodb.js
const mongoose = require('mongoose');

// PUT YOUR CONNECTION STRING HERE (from Step 2)
const MONGODB_URI = 'mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.abcde.mongodb.net/';

async function testConnection() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB!');
    
    // Create a test schema
    const TestSchema = new mongoose.Schema({
      name: String,
      date: Date
    });
    
    const Test = mongoose.models.Test || mongoose.model('Test', TestSchema);
    
    // Save something
    await Test.create({ name: 'Test Entry', date: new Date() });
    console.log('✅ Data saved!');
    
    // Read it back
    const data = await Test.find();
    console.log('📊 Data in database:', data);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

testConnection();