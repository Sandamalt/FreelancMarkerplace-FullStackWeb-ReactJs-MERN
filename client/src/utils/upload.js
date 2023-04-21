import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "finalProject");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dkjo5wlzj/image/upload", //!  lama not say upload but other git have
      data
    );

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
