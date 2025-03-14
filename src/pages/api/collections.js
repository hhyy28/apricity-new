import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  await mongoose.connect(uri);
};

const ItemSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  collectionName: String,
  collectionItems: [
    {
      name: String,
      id: String,
      images: [
        {
          src: String,
          alt: String,
          id: String,
          backgroundColor: String,
        },
      ],
    },
  ],
  atmosphere: String,
  discoverInfo: String,
  fontColor: String,
});

const ItemCollection =
  mongoose.models.ItemCollections ||
  mongoose.model('ItemCollections', ItemSchema);

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const items = await ItemCollection.find();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
