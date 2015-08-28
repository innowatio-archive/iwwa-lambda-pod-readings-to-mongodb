import Collection from "lk-collection";
import dotenv from "dotenv";

dotenv.load();

var Alarms = new Collection({
    name: "pod-readings",
    mongodbUrl: process.env.MONGODB_URL,
    mongodbCollectionName: process.env.MONGODB_COLLECTION_NAME
});

export var handler = Alarms.kinesisToMongodb;
