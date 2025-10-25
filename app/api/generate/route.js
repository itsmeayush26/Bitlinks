
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.url || !body.shorturl) {
      return Response.json(
        { success: false, error: true, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // Check if the short URL already exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return Response.json(
        { success: false, error: true, message: "URL already exists!" },
        { status: 400 }
      );
    }

    // Insert new document
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    // Added explicit status code (200)
    return Response.json(
      { success: true, error: false, message: "URL Generated Successfully" },
      { status: 200 }
    );
  } catch (err) {
    // Catch unexpected runtime or DB errors and log for debugging
    console.error("POST /api/generate error:", err);
    return Response.json(
      { success: false, error: true, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
