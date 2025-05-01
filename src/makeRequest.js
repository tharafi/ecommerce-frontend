import { makeRequest } from "./makeRequest"; // import from your axios setup

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("files", file);

  try {
    const response = await makeRequest.post("/upload", formData);
    
    if (!response.data || response.data.length === 0) {
      throw new Error("لم يتم استلام رد من السيرفر");
    }

    return response.data[0]; // يحتوي على url
  } catch (err) {
    console.error("فشل رفع الصورة:", err.message);
    return null;
  }
};
