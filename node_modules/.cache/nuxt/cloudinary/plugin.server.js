import { ServerApi } from "~cloudinary/server";

const configuration = {
  "privateCdn": false,
  "cloudName": "examqueat",
  "apiSecret": "c1AjEfFJh2e7tGU2S_ArAwoxsQ8",
  "apiKey": "428216586742493",
  "secure": true
}

export default function(context, inject) {
  const cloudinary = new ServerApi(configuration);

  context.$cloudinary = cloudinary;
  inject("cloudinary", cloudinary);
}